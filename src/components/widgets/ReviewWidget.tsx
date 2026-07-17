import { X, Frown, Meh, Smile, Laugh } from "lucide-react";
import { cn } from "../../lib/utils";

interface ReviewWidgetProps {
  className?: string;
}

export function ReviewWidget({ className }: ReviewWidgetProps) {
  return (
    <div className={cn("bg-surface rounded-[32px] p-6 flex flex-col border border-border/40 relative", className)}>
      <div className="absolute right-6 top-6 w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
        <X className="w-4 h-4 text-gray-500" />
      </div>

      <div className="flex gap-1.5 mb-6">
        <div className="w-4 h-1.5 rounded-full bg-black"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
      </div>

      <div className="flex flex-col gap-1 mb-8 mt-2 pr-12">
        <span className="text-[12px] text-gray-500 font-medium tracking-wide uppercase">Quick Feedback</span>
        <span className="text-xl font-medium leading-[1.2] tracking-tight">How is the new academic term going?</span>
      </div>

      <div className="flex items-center justify-between px-2">
        <button className="text-gray-400 hover:text-black hover:scale-110 transition-all">
          <Frown className="w-8 h-8 stroke-[1.5]" />
        </button>
        <button className="text-gray-400 hover:text-black hover:scale-110 transition-all">
          <Meh className="w-8 h-8 stroke-[1.5]" />
        </button>
        <div className="w-10 h-px bg-gray-300 mx-2"></div>
        <button className="text-brand scale-110 shadow-[0_0_20px_rgba(223,93,70,0.3)] rounded-full transition-all">
          <Smile className="w-8 h-8 stroke-[2] fill-brand/10" />
        </button>
        <button className="text-gray-400 hover:text-black hover:scale-110 transition-all">
          <Laugh className="w-8 h-8 stroke-[1.5]" />
        </button>
      </div>
    </div>
  );
}
