import { useToast } from "@/app/hooks/use-toast";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, LogOut, Sparkles } from "lucide-react";
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
  const handleLogout = async () => {
    // const { error } = await supabase.auth.signOut();
    if (true) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to logout",
      });
    }
  };
  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <div className="mb-8 space-y-6">
      {/* Top section with title and logout */}
      {/* Navigation section */}
      <div className="relative group/nav"> 
        {/* Subtle glow on hover */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-br from-card via-card to-card/95 p-6 rounded-xl shadow-lg border border-border/50 backdrop-blur-sm">
          {/* Month and Year Display */}
          <div className="flex items-baseline gap-3">
            <h2 style={{
              color:'black'
            }} className="text-3xl font-bold text-black bg-gradien from-foreground to-foreground/70 bg-clip-text text-transparent">
              {month}
            </h2>
            <span className="text-lg font-semibold text-muted-foreground px-3 py-1 bg-muted/50 rounded-lg">
              {year}
            </span>
          </div>
          {/* Navigation controls */}
          <div className="flex gap-2">
            {/* Previous month button */}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={onPrevMonth}
              className={cn(
                "group/prev relative overflow-hidden",
                "hover:border-primary/50 hover:bg-primary/5",
                "hover:shadow-md hover:shadow-primary/10",
                "transition-all duration-300"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/prev:opacity-100 transition-opacity duration-300" />
              <ChevronLeft className="h-5 w-5 relative z-10 group-hover/prev:-translate-x-0.5 transition-transform duration-300" />
            </Button>
            {/* Today button */}
            <Button 
              variant="outline" 
              onClick={onToday}
              className={cn(
                "group/today relative overflow-hidden px-6",
                "hover:border-primary/50 hover:bg-primary/5",
                "hover:shadow-md hover:shadow-primary/10",
                "transition-all duration-300",
                "font-semibold"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-y-[100%] group-hover/today:translate-y-0 transition-transform duration-300" />
              <CalendarIcon className="h-4 w-4 mr-2 relative z-10 group-hover/today:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Today</span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/today:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12" />
            </Button>
            {/* Next month button */}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={onNextMonth}
              className={cn(
                "group/next relative overflow-hidden",
                "hover:border-primary/50 hover:bg-primary/5",
                "hover:shadow-md hover:shadow-primary/10",
                "transition-all duration-300"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover/next:opacity-100 transition-opacity duration-300" />
              <ChevronRight className="h-5 w-5 relative z-10 group-hover/next:translate-x-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>
        {/* Decorative line beneath */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};