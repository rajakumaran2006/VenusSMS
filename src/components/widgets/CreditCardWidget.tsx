import { ChevronDown, Share2, Plus, PenSquare } from "lucide-react";

export function CreditCardWidget() {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Side floating actions - mimicking the image's floating bar */}
      <div className="absolute left-4 top-[240px] w-12 bg-white rounded-full shadow-sm border border-border/50 py-4 flex flex-col items-center gap-6 hidden xl:flex">
        <div className="w-1 h-8 bg-gray-200 rounded-full"></div>
        <button className="text-gray-400 hover:text-black transition-colors">
          <Plus className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-black transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-border/40 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold tracking-wide text-sm">OVERVIEW</span>
          <button className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-border hover:bg-surface transition-colors">
            Active Term <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="flex flex-col gap-1 mb-6">
          <span className="text-gray-400 text-sm">Total Active Records</span>
          <span className="text-3xl font-semibold tracking-tight">2,450</span>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex-1 text-center">
            Add New
          </button>
          <button className="bg-surface text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex-1 text-center">
            Filter
          </button>
        </div>

        <div className="h-px w-full bg-border/60 mb-6"></div>

        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-sm">Monthly SMS limit</span>
            <span className="text-xl font-semibold">$ 25.00</span>
          </div>
          <button className="flex items-center gap-2 text-brand text-xs font-medium hover:opacity-80 transition-opacity">
            <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center">
               <PenSquare className="w-3 h-3" />
            </div>
            <span className="text-left leading-tight w-20">Edit limits & rules</span>
          </button>
        </div>
      </div>
    </div>
  );
}
