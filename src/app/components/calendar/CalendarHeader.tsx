"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/app/hooks/use-toast";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/app/lib/utils";
interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}
export const CalendarHeader = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
}: CalendarHeaderProps) => {
  const { toast } = useToast();
  const [isSticky, setIsSticky] = useState(false);
  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  // 🧠 Detect scroll to toggle sticky style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={cn(
        "sticky top-0 z-30 flex justify-center transition-all duration-500 ease-in-out",
        "bg-transparent backdrop-blur-md pb-2"
      )}
    >
      <div
        className={cn(
          "relative group/nav transition-all duration-500 ease-in-out",
          "bg-card/90 rounded-xl border border-border/50 shadow-sm",
          "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-4 py-3 md:px-6 md:py-4",
          "hover:shadow-md hover:shadow-primary/10",
          isSticky
            ? "w-[70%] scale-[0.98] shadow-lg"
            : "w-full scale-100 "
        )}
      >
        {/* Month & Year */}
      <div className="flex items-center gap-2">
  <h2
    className={cn(
      "font-semibold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent",
      isSticky
        ? "text-lg sm:text-xl md:text-2xl" // smaller when sticky
        : "text-xl sm:text-2xl md:text-3xl" // normal when not sticky
    )}
    style={{ color: "black" }}
  >
    {month}
  </h2>
  <span
    className={cn(
      "font-medium text-muted-foreground bg-muted/40 rounded-md px-2 py-0.5",
      isSticky ? "text-xs sm:text-sm" : "text-sm md:text-base"
    )}
  >
    {year}
  </span>
</div>
        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onPrevMonth}
            className={cn(
              "group/prev relative overflow-hidden size-8 md:size-9",
              "hover:border-primary/50 hover:bg-primary/5 hover:shadow-sm transition-all"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/prev:opacity-100 transition-opacity" />
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-foreground relative z-10 group-hover/prev:-translate-x-0.5 transition-transform" />
          </Button>
          <Button
            variant="outline"
            onClick={onToday}
            className={cn(
              "group/today relative overflow-hidden px-4 py-1 md:px-6 font-medium text-sm md:text-base",
              "hover:border-primary/50 hover:bg-primary/5 transition-all"
            )}
          >
            <CalendarIcon className="h-4 w-4 mr-2 relative z-10 text-foreground" />
            <span className="relative z-10">Today</span>
            <div className="absolute inset-0 -translate-x-full group-hover/today:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 skew-x-12" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onNextMonth}
            className={cn(
              "group/next relative overflow-hidden size-8 md:size-9",
              "hover:border-primary/50 hover:bg-primary/5 hover:shadow-sm transition-all"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover/next:opacity-100 transition-opacity" />
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-foreground relative z-10 group-hover/next:translate-x-0.5 transition-transform" />
          </Button>
        </div>
        {/* Decorative Glow Under Header */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};
