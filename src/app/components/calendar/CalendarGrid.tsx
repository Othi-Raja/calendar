import { CalendarEvent } from "../Calendar";
import { CalendarCell } from "./CalendarCell";
import { cn } from "@/app/lib/utils";

interface CalendarGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  onDateClick: (date: Date) => void;
  onDeleteEvent: (eventId: string) => void;
}

export const CalendarGrid = ({
  currentDate,
  events,
  onDateClick,
  onDeleteEvent,
}: CalendarGridProps) => {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = [
    { short: "Sun", full: "Sunday" },
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
    { short: "Sat", full: "Saturday" },
  ];

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const isWeekend = (index: number) => index === 0 || index === 6;

  return (
    <div className="relative group/calendar">
      {/* Ambient glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-2xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-700" />
      
      <div className="relative bg-gradient-to-br from-card via-card to-card/95 rounded-2xl shadow-2xl border border-border/50 overflow-hidden backdrop-blur-sm">
        {/* Subtle top gradient bar */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        {/* Week days header */}
        <div className="relative">
          {/* Header background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/80 to-muted/40 backdrop-blur-sm" />
          
          <div className="relative grid grid-cols-7 gap-0">
            {weekDays.map((day, index) => (
              <div
                key={day.short}
                className={cn(
                  "relative p-4 text-center font-bold text-sm tracking-wide transition-all duration-300",
                  "border-b border-border/30",
                  isWeekend(index)
                    ? "text-primary/70 bg-primary/5"
                    : "text-muted-foreground",
                  "group/day hover:bg-muted/60"
                )}
              >
                {/* Day name */}
                <div className="relative">
                  <span className="hidden sm:inline">{day.full}</span>
                  <span className="sm:hidden">{day.short}</span>
                  
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/50 group-hover/day:w-3/4 transition-all duration-300 rounded-full" />
                </div>

                {/* Weekend indicator */}
                {isWeekend(index) && (
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary/40 shadow-sm shadow-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Calendar grid */}
        <div className="relative bg-gradient-to-br from-background/50 to-muted/20">
          <div className="grid grid-cols-7 gap-2 p-2">
            {days.map((date, index) => {
              const dayOfWeek = date ? date.getDay() : (index % 7);
              const isWeekendDay = isWeekend(dayOfWeek);
              
              return (
                <div
                  key={index}
                  className={cn(
                    "relative",
                    isWeekendDay && "bg-primary/[0.02] rounded-lg"
                  )}
                >
                  <CalendarCell
                    date={date}
                    events={date ? getEventsForDate(date) : []}
                    onDateClick={onDateClick}
                    onDeleteEvent={onDeleteEvent}
                    isToday={
                      date
                        ? date.toDateString() === new Date().toDateString()
                        : false
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500 delay-75" />
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500 delay-150" />
      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500 delay-200" />
    </div>
  );
};