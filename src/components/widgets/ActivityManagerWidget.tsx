import { MoreVertical, Filter, Search, X, Users, BookOpen, Calculator, Sun } from "lucide-react";

export function ActivityManagerWidget() {
  return (
    <div className="bg-surface rounded-[32px] p-6 flex flex-col border border-border/40 relative h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-semibold text-[15px]">Activity manager</span>
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
             <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
             <Filter className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-xs font-medium text-gray-600">Filters</span>
        </div>
      </div>

      {/* Search & Tags */}
      <div className="flex flex-col xl:flex-row items-center gap-4 mb-8">
        <div className="relative flex-1 w-full flex items-center">
          <Search className="w-4 h-4 text-gray-400 absolute left-4" />
          <input 
            type="text" 
            placeholder="Search in activities ..." 
            className="w-full bg-white border border-border rounded-full py-2.5 pl-10 pr-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-300 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar w-full xl:w-auto">
          <div className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap">
            Staff <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
          </div>
          <div className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap">
            Students <X className="w-3 h-3 text-gray-400 cursor-pointer hover:text-black" />
          </div>
          <div className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap">
            Today <X className="w-3 h-3 text-gray-400 cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* Content Columns */}
      <div className="flex flex-col xl:flex-row gap-6 h-full">
        
        {/* Left Content (Stats) */}
        <div className="bg-white rounded-[24px] p-6 border border-border/40 flex-1 flex flex-col items-center justify-center shadow-sm">
           <div className="flex items-end gap-1 mb-6">
             <span className="text-[32px] font-semibold text-brand tracking-tight">143</span>
             <span className="text-sm text-gray-500 font-medium pb-2 uppercase tracking-wide">Tasks</span>
           </div>
           
           {/* Mini simulated chart */}
           <div className="flex items-end justify-center gap-1.5 h-16 w-full mb-6">
              {[4, 6, 3, 8, 5, 2, 9, 4, 7, 3].map((val, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 rounded-full ${i % 3 === 0 ? 'bg-brand' : 'bg-brand/20'}`} 
                  style={{ height: `${val * 10}%` }}
                />
              ))}
           </div>
           
           <div className="flex gap-1.5 mt-auto">
             <div className="w-3 h-1.5 rounded-full bg-brand"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
           </div>
        </div>

        {/* Right Content (List + CTA) */}
        <div className="flex-[1.5] flex flex-col gap-6">
           <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">Quick Actions</span>
              <button className="w-6 h-6 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
                 <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
           </div>
           
           <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-border/40 shadow-sm cursor-pointer hover:border-gray-300 transition-colors">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-light/20 flex items-center justify-center text-brand">
                       <Users className="w-4 h-4" />
                    </div>
                    <span className="text-[13px] font-medium">Mark Attendance</span>
                 </div>
                 <ChevronDownIcon />
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-border/40 shadow-sm cursor-pointer hover:border-gray-300 transition-colors">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center text-gray-600">
                       <Calculator className="w-4 h-4" />
                    </div>
                    <span className="text-[13px] font-medium">Process Fees</span>
                 </div>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-border/40 shadow-sm cursor-pointer hover:border-gray-300 transition-colors">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center text-gray-600">
                       <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-[13px] font-medium">Exam Setup</span>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}
