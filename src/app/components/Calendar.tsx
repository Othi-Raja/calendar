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
import { LogOut } from "lucide-react";
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
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading your events...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">📅 Calendar</h1>
          <div className="flex items-center gap-2">
            {user && <p className="text-sm text-muted-foreground">Welcome, {user.email}</p>}
            <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 group-hover/logout:rotate-12 transition-transform duration-300" />
              Logout</Button>
          </div>
        </div>
        <CalendarHeader
          currentDate={currentDate}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onToday={handleToday}
        />
        <CalendarGrid
          currentDate={currentDate}
          events={events}
          onDateClick={handleDateClick}
          onDeleteEvent={handleDeleteEvent}
        />
      </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEvent={handleAddEvent}
        selectedDate={selectedDate}
      />
    </div>
  );
};
