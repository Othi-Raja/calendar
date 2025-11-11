"use client";
import { useEffect, useState } from "react";
import { CalendarHeader } from "./calendar/CalendarHeader";
import { CalendarGrid } from "./calendar/CalendarGrid";
import { EventModal } from "./calendar/EventModal";
import { auth, db } from "../integrations/firebaseConfig/config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Button } from "./ui/button";
import { LogOut, Loader2, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";
export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  description?: string;
}
export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;
  // ✅ Fetch events from Firestore
  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, "events"),
      where("uid", "==", user.uid)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched: CalendarEvent[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        date: doc.data().date.toDate(),
      }));
      setEvents(fetched);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);
  // ✅ Add new event
  const handleAddEvent = async (title: string, description: string) => {
    if (!selectedDate || !user) return;
    await addDoc(collection(db, "events"), {
      uid: user.uid,
      title,
      description,
      date: selectedDate,
      createdAt: new Date(),
    });
    setIsModalOpen(false);
  };
  // ✅ Delete event
  const handleDeleteEvent = async (eventId: string) => {
    await deleteDoc(doc(db, "events", eventId));
  };
  // Calendar navigation handlers
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  const handleToday = () => {
    setCurrentDate(new Date());
  };
  // ✅ Logout handler
  const handleLogout = async () => {
    await signOut(auth);
  };
  // Get user display name
  const getUserDisplayName = () => {
    if (!user) return "";
    if (user.displayName) return user.displayName;
    if (user.email) {
      const emailName = user.email.split("@")[0];
      return emailName.replace("@calendarapp.local", "");
    }
    return "User";
  };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,120,113,255),0.1),transparent_50%)]" />
        <div className="relative text-center space-y-4">
         
          <div className="space-y-2 d-flex align-items-center">
            <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto " />
           <p className="text-muted-foreground font-medium animate-pulse">
  Loading your events...
</p>

          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Ambient background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb,120,113,255),0.08),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--primary-rgb,120,113,255),0.06),transparent_50%)] pointer-events-none" />
      <div className="relative min-h-screen p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Top bar - Mobile optimized */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl opacity-60" />
            <div className={cn(
              "relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4",
              "bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm",
              "p-4 sm:p-5 rounded-xl sm:rounded-2xl",
              " border border-border/50"
            )}>
              {/* Title section - stacks on mobile */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative group/icon hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-xl blur-md opacity-50 group-hover/icon:opacity-70 transition-opacity duration-300" />
                  <div className="relative w-5 h-5 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center  group-hover/icon:scale-110 transition-transform duration-300">
                    <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
             
              </div>
              {/* User info and logout - responsive layout */}
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {user && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium truncate max-w-[150px] sm:max-w-none">
                      Welcome, <span className="text-foreground font-semibold">{getUserDisplayName()}</span>
                    </p>
                  </div>
                )}
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  size="sm"
                  className={cn(
                    "group/logout relative overflow-hidden shrink-0",
                    "border-border/50 hover:border-destructive/50",
                    "hover:bg-destructive/5 transition-all duration-300",
                    "hover:shadow-md hover:shadow-destructive/10",
                    "h-9 sm:h-10"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-destructive/0 via-destructive/5 to-destructive/0 translate-x-[-100%] group-hover/logout:translate-x-[100%] transition-transform duration-700" />
                  <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/logout:rotate-12 transition-transform duration-300" />
                  <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm">Logout</span>
                </Button>
              </div>
            </div>
          </div>
          {/* Calendar Header - Already responsive from previous enhancement */}
          <CalendarHeader
            currentDate={currentDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />
          {/* Calendar Grid - Mobile responsive wrapper */}
          <div className="relative">
            <CalendarGrid
              currentDate={currentDate}
              events={events}
              onDateClick={handleDateClick}
              onDeleteEvent={handleDeleteEvent}
            />
          </div>
          {/* Event count badge - Mobile friendly */}
          {events.length > 0 && (
            <div className="flex justify-center">
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                "bg-primary/10 border border-primary/20",
                "text-sm font-medium text-primary",
                "backdrop-blur-sm"
              )}>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {/* <span className="text-xs sm:text-sm">
                  {events.length} {events.length === 1 ? "event" : "events"} this month
                </span> */}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEvent={handleAddEvent}
        selectedDate={selectedDate}
      />
    </div>
  );
};