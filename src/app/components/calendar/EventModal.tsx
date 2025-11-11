"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Calendar, Sparkles, Plus, X } from "lucide-react";
import { cn } from "@/app/lib/utils";
interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (title: string, description: string) => void;
  selectedDate: Date | null;
}
export const EventModal = ({
  isOpen,
  onClose,
  onAddEvent,
  selectedDate,
}: EventModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFocused, setIsFocused] = useState<"title" | "description" | null>(null);
  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setDescription("");
      setIsFocused(null);
    }
  }, [isOpen]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddEvent(title, description);
      onClose();
    }
  };
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const dayOfMonth = selectedDate?.getDate() || "";
  const month = selectedDate?.toLocaleDateString("en-US", { month: "short" }) || "";
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900  ">
        {/* Ambient glow */}
        <div className="absolute-inset-20 bg-gradient-to-br from-indigo-400/20 via-indigo-300/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
        {/* Header */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-transparent to-transparent dark:from-indigo-900/20" />
          <DialogHeader className="relative p-6 pb-4 space-y-3">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-all" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-xl flex flex-col items-center justify-center shadow-lg shadow-indigo-400/30">
                  <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">
                    {month}
                  </span>
                  <span className="text-xl font-bold text-white leading-none">
                    {dayOfMonth}
                  </span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-indigo-500 animate-pulse" />
              </div>
              <div className="flex-1 space-y-1">
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                  Add New Event
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  <span className="font-medium">{formattedDate}</span>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="relative p-6 pt-4 space-y-6">
          {/* Title */}
          <div className="space-y-2.5">
            <Label htmlFor="event-title" className="text-sm font-semibold flex items-center gap-2">
              Event Title
              <span className="text-red-500 text-xs">*</span>
              {isFocused === "title" && (
                <span className="text-[10px] text-indigo-500 font-normal ml-auto">
                  Required field
                </span>
              )}
            </Label>
            <div className="relative">
              <Input
                id="event-title"
                placeholder="e.g., Team meeting, Birthday party..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onFocus={() => setIsFocused("title")}
                onBlur={() => setIsFocused(null)}
                required
                className={cn(
                  "h-12 text-base transition-all duration-300 border border-gray-300 dark:border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 hover:border-indigo-300 dark:hover:border-indigo-600 bg-gray-50 dark:bg-gray-800/70 backdrop-blur-sm",
                  isFocused === "title" && "shadow-lg shadow-indigo-400/20"
                )}
              />
              {title && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                </div>
              )}
            </div>
            {isFocused === "title" && (
              <p className="text-xs text-gray-500 dark:text-gray-400 animate-in fade-in slide-in-from-top-1 duration-300">
                Give your event a clear, descriptive title
              </p>
            )}
          </div>
          {/* Description */}
          <div className="space-y-2.5">
            <Label htmlFor="event-description" className="text-sm font-semibold flex items-center gap-2">
              Description
              <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">(optional)</span>
              {isFocused === "description" && description.length > 0 && (
                <span className="text-[10px] text-gray-500 font-normal ml-auto">
                  {description.length} characters
                </span>
              )}
            </Label>
            <div className="relative">
              <Textarea
                id="event-description"
                placeholder="Add any additional details, notes, or reminders..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onFocus={() => setIsFocused("description")}
                onBlur={() => setIsFocused(null)}
                rows={4}
                className={cn(
                  "text-base resize-none transition-all duration-300 border border-gray-300 dark:border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 hover:border-indigo-300 dark:hover:border-indigo-600 bg-gray-50 dark:bg-gray-800/70 backdrop-blur-sm",
                  isFocused === "description" && "shadow-lg shadow-indigo-400/20"
                )}
              />
            </div>
            {isFocused === "description" && (
              <p className="text-xs text-gray-500 dark:text-gray-400 animate-in fade-in slide-in-from-top-1 duration-300">
                Add location, attendees, or any other relevant information
              </p>
            )}
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className={cn(
                "flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300",
                "hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              )}
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!title.trim()}
              className={cn(
                "relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400",
                "text-white font-medium px-5 py-2 rounded-md shadow-md shadow-indigo-400/30 hover:shadow-lg hover:shadow-indigo-400/40",
                "disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-w-[120px]"
              )}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>
        </form>
        {/* Bottom Accent Line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      </DialogContent>
    </Dialog>
  );
};
