import { Clock, BarChart3 } from "lucide-react";
import { cn } from "../../lib/utils";

interface AcademicProgressWidgetProps {
  className?: string;
}

export function AcademicProgressWidget({ className }: AcademicProgressWidgetProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-full", className)}>
      
      {/* Time Left Card */}
      <div className="bg-surface rounded-[32px] p-6 flex flex-col justify-between border border-border/40 h-full">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
            <Clock className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight text-black">13 Days</span>
            <span className="text-[11px] text-gray-500">Term 1 remaining time</span>
          </div>
        </div>
        
        {/* Dot Progress */}
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`dot1-${i}`} className={`w-2 h-2 rounded-full ${i < 8 ? 'bg-brand' : 'bg-gray-200'}`} />
            ))}
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`dot2-${i}`} className="w-2 h-2 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      </div>

      {/* Mini Bar Chart Card */}
      <div className="bg-surface rounded-[32px] p-6 flex flex-col border border-border/40 relative overflow-hidden h-full">
        <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm mb-4 relative z-10">
          <BarChart3 className="w-5 h-5 text-black" />
        </div>
        
        {/* Simulated mini chart */}
        <div className="flex-1 w-full relative mt-4">
           {/* Grid lines */}
           <div className="absolute inset-0 flex flex-col justify-between z-0">
             <div className="w-full h-px bg-gray-200"></div>
             <div className="w-full h-px bg-gray-200"></div>
             <div className="w-full h-px bg-gray-200"></div>
             <div className="w-full h-px bg-gray-200"></div>
           </div>
           
           {/* Bars */}
           <div className="absolute bottom-0 w-full flex justify-between items-end px-2 z-10">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-gray-200 rounded-full px-3 py-1 text-[10px] font-medium text-gray-600">2023</div>
                <div className="w-[2px] h-12 bg-gray-300 rounded-t-full"></div>
              </div>
              <div className="flex flex-col items-center gap-2 relative">
                <div className="bg-brand text-white rounded-full px-3 py-1 text-[10px] font-medium absolute -top-8 -left-4">2024</div>
                <div className="w-[2px] h-20 bg-brand rounded-t-full"></div>
              </div>
           </div>
        </div>
      </div>
      
    </div>
  );
}
