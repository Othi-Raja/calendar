"use client";
import { cn } from "@/app/lib/utils";
import { CalendarEvent } from "../Calendar";
import { Button } from "../ui/button";
import { X, Sparkles } from "lucide-react";
interface CalendarCellProps {
  date: Date | null;
  events: CalendarEvent[];
  onDateClick: (date: Date) => void;
  onDeleteEvent: (eventId: string) => void;
  isToday: boolean;
}
export const CalendarCell = ({
  date,
  events,
  onDateClick,
  onDeleteEvent,
  isToday,
}: CalendarCellProps) => {
  if (!date) {
    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 min-h-[120px] p-3 rounded-lg" />
    );
  }
  const hasEvents = events.length > 0;
  const displayEvents = events.slice(0, 3);
  const remainingCount = events.length - 3;
  return (
    <div
      className={cn(
        "relative min-h-[120px] p-3 cursor-pointer rounded-lg transition-all duration-300 ease-out",
        "border border-transparent hover:border-indigo-200 dark:hover:border-indigo-700",
        "bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800",
        "hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:-translate-y-0.5 group",
        isToday && [
          "bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 dark:from-indigo-900/40 dark:via-indigo-800/30 dark:to-indigo-900/40",
          "border-indigo-300 dark:border-indigo-600",
          "shadow-md shadow-indigo-200/50 dark:shadow-indigo-800/30",
          "ring-2 ring-indigo-200/50 dark:ring-indigo-700/40 ring-offset-2 ring-offset-white dark:ring-offset-gray-900",
        ],
        hasEvents && "hover:shadow-xl"
      )}
      onClick={() => onDateClick(date)}
    >
      {/* Today indicator glow */}
      {isToday && (
        <div className="absolute -top-1 -right-1 flex items-center justify-center">
          <div className="relative">
            <Sparkles className="h-4 w-4 text-indigo-500 animate-pulse" />
            <div className="absolute inset-0 bg-indigo-400/20 blur-md rounded-full" />
          </div>
        </div>
      )}
      {/* Date header */}
      <div className="flex items-center justify-between mb-2">
        <div
          className={cn(
            "flex items-center justify-center rounded-full transition-all duration-300",
            "text-sm font-semibold tracking-tight",
            isToday
              ? [
                  "bg-indigo-600 text-white",
                  "h-8 w-8 shadow-lg shadow-indigo-400/40",
                  "ring-2 ring-indigo-300 ring-offset-2 ring-offset-white dark:ring-offset-gray-900",
                ]
              : [
                  "text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white",
                  "h-7 w-7 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-800/30",
                ]
          )}
        >
          {date.getDate()}
        </div>
        {/* Event count badge */}
        {hasEvents && (
          <div
            className={cn(
              "text-[10px] font-medium px-2 py-0.5 rounded-full",
              "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300",
              "group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300"
            )}
          >
            {events.length} {events.length === 1 ? "event" : "events"}
          </div>
        )}
      </div>
      {/* Events list */}
      <div className="space-y-1.5">
        {displayEvents.map((event, index) => (
          <div
            key={event.id}
            className={cn(
              "group/event relative overflow-hidden rounded-md transition-all duration-300",
              "bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:via-indigo-800/20 dark:to-indigo-900/30",
              "hover:from-indigo-100 hover:via-indigo-200 hover:to-indigo-100 dark:hover:from-indigo-800/50 dark:hover:via-indigo-700/40 dark:hover:to-indigo-800/50",
              "border border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-600",
              "hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-800/20 transform hover:-translate-y-0.5"
            )}
            style={{
              animationDelay: `${index * 50}ms`,
              animation: "fadeIn 0.3s ease-out forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-1.5 p-2 pr-8">
              {/* Dot */}
              <div className="shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-400/40" />
              {/* Event title */}
              <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 truncate flex-1">
                {event.title}
              </span>
              {/* Delete button */}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "absolute right-0 top-0 h-full w-8 rounded-l-none rounded-r-md",
                  "opacity-0 group-hover/event:opacity-100 transition-opacity duration-200",
                  "bg-gradient-to-l from-red-50 to-transparent dark:from-red-900/30",
                  "hover:from-red-100 hover:to-red-50 dark:hover:from-red-800/50 dark:hover:to-transparent",
                  "text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteEvent(event.id);
                }}
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
        {/* Remaining events indicator */}
        {remainingCount > 0 && (
          <div className="text-[10px] font-medium text-gray-500 dark:text-gray-400 px-2 py-1 text-center bg-gray-100 dark:bg-gray-800/50 rounded-md">
            +{remainingCount} more
          </div>
        )}
      </div>
      {/* Hover glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg pointer-events-none transition-all duration-500",
          "bg-gradient-to-br from-indigo-100/0 via-transparent to-indigo-50/0 dark:from-indigo-800/0",
          "group-hover:from-indigo-50/60 group-hover:via-transparent group-hover:to-indigo-100/60 dark:group-hover:from-indigo-900/30 dark:group-hover:to-indigo-800/30"
        )}
      />
    </div>
  );
};
