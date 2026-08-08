import { ChevronDown } from "lucide-react";

export function DemographicsWidget() {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-border/40 flex-1 flex flex-col h-full">
      <div className="flex items-center justify-between w-full mb-8">
        <span className="font-semibold text-[15px]">Demographics</span>
        <button className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-border hover:bg-surface transition-colors">
          2024 <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <div className="relative w-full h-[240px] flex items-end justify-center mb-6 overflow-visible shrink-0">
         {/* Concentric circles offset to the bottom */}
         <div className="absolute bottom-0 w-[220px] h-[220px] rounded-full bg-surface border border-border/80 flex flex-col items-center justify-start pt-6">
            <span className="text-gray-500 font-semibold text-sm">1,250</span>
            
            <div className="absolute bottom-0 w-[170px] h-[170px] rounded-full bg-brand/20 border border-brand/30 flex flex-col items-center justify-start pt-6">
               <span className="text-brand font-semibold text-sm">850</span>
               
               <div className="absolute bottom-0 w-[120px] h-[120px] rounded-full bg-brand/40 border border-brand/50 flex flex-col items-center justify-start pt-5">
                  <span className="text-brand-dark font-semibold text-sm">300</span>
                  
                  <div className="absolute bottom-0 w-[70px] h-[70px] rounded-full bg-brand flex items-center justify-center shadow-lg shadow-brand/40">
                     <span className="text-white font-semibold text-sm">100</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Legend to fill empty space */}
      <div className="mt-auto flex flex-col gap-1 w-full">
         <div className="flex items-center justify-between px-3 py-2.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-border/60 group">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
               <span className="text-[13px] font-medium text-gray-500 group-hover:text-gray-700 transition-colors">Total Enrollment</span>
            </div>
            <span className="text-[14px] font-semibold text-gray-900">1,250</span>
         </div>
         
         <div className="flex items-center justify-between px-3 py-2.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-border/60 group">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-brand/30 border border-brand/30"></div>
               <span className="text-[13px] font-medium text-gray-500 group-hover:text-gray-700 transition-colors">Secondary School</span>
            </div>
            <span className="text-[14px] font-semibold text-gray-900">850</span>
         </div>
         
         <div className="flex items-center justify-between px-3 py-2.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-border/60 group">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-brand/50 border border-brand/50"></div>
               <span className="text-[13px] font-medium text-gray-500 group-hover:text-gray-700 transition-colors">Primary School</span>
            </div>
            <span className="text-[14px] font-semibold text-gray-900">300</span>
         </div>
         
         <div className="flex items-center justify-between px-3 py-2.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-border/60 group">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-brand shadow-sm shadow-brand/30"></div>
               <span className="text-[13px] font-medium text-gray-500 group-hover:text-gray-700 transition-colors">Kindergarten</span>
            </div>
            <span className="text-[14px] font-semibold text-gray-900">100</span>
         </div>
      </div>
    </div>
  );
}
