import { ChevronDown, ArrowDownLeft, ArrowUpRight, TrendingUp } from "lucide-react";

export function FinancialStatsWidget() {
  return (
    <div className="bg-surface rounded-[32px] p-2 flex flex-col h-full border border-border/40">
      
      {/* Top Half */}
      <div className="bg-white rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
            <ArrowDownLeft className="w-5 h-5 text-black" />
          </div>
          <button className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-border hover:bg-surface transition-colors">
            Weekly <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">Total Collected</span>
          <span className="text-[32px] font-semibold tracking-tight text-brand">$ 23,194.80</span>
        </div>
      </div>

      {/* Bottom Half */}
      <div className="p-6 flex-1 flex flex-col justify-center relative">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
          <button className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-border bg-white hover:bg-gray-50 transition-colors shadow-sm">
            Weekly <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-sm">Pending Dues</span>
            <span className="text-[32px] font-semibold tracking-tight text-brand">$ 8,145.20</span>
          </div>
          <button className="flex items-center gap-2 text-brand text-xs font-medium hover:opacity-80 transition-opacity absolute bottom-8 right-6">
            <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center">
               <TrendingUp className="w-3 h-3" />
            </div>
            <span className="text-left leading-tight w-20">View on chart mode</span>
          </button>
        </div>
      </div>

    </div>
  );
}
