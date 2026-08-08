import { useNavigate } from "react-router-dom";
import { Search, Mic, Plus, Calendar, ArrowRight, Menu, Presentation } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between w-full gap-4 sm:gap-6 px-4 sm:px-6 py-4 md:px-10 md:py-6 border-b border-border bg-white/95 backdrop-blur-md shrink-0 z-30 sticky top-0">
      {/* Left side: Hamburger + Date Widget + Schedule buttons */}
      <div className="flex items-center gap-3 md:gap-6 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors cursor-pointer shrink-0"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Date Widget in Header */}
        <div className="hidden xs:flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center text-sm md:text-lg font-semibold tracking-tight shrink-0">
            19
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] md:text-[14px] font-medium text-gray-900 leading-tight">Tue,</span>
            <span className="text-[12px] md:text-[14px] font-medium text-gray-900 leading-tight">December</span>
          </div>
        </div>

        {/* Schedule Action Buttons in Header */}
        <div className="hidden sm:flex items-center gap-3">
          <button className="bg-brand text-white px-5 py-2 rounded-[20px] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 cursor-pointer">
            Show schedule
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors relative shrink-0 cursor-pointer">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-brand rounded-full border border-white"></span>
          </button>
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 max-w-full overflow-x-auto no-scrollbar shrink-0">
        {/* Pitch Deck Button - Navigates to /pitch-deck Page */}
        <button 
          onClick={() => navigate("/pitch-deck")}
          className="bg-brand text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-brand-hover transition-all shadow-md shadow-brand/20 cursor-pointer shrink-0"
        >
          <Presentation className="w-4 h-4" />
          Pitch Deck
        </button>

        <button className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors shrink-0 cursor-pointer">
          <Plus className="w-5 h-5 text-gray-600" />
        </button>

        <div className="relative flex items-center shrink-0">
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors cursor-pointer mr-2 md:mr-3 shrink-0">
            <Search className="w-5 h-5 text-gray-600" />
          </div>
          <input 
            type="text" 
            placeholder="Start searching here ..." 
            className="outline-none text-[13px] md:text-[15px] text-gray-600 placeholder:text-gray-400 bg-transparent w-[120px] sm:w-[180px]"
          />
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Greeting Text */}
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight">
            Hey, Need help?
          </h1>
          <p className="text-[32px] md:text-[40px] font-light text-gray-400 leading-[1.1] tracking-tight">
            Just ask me anything!
          </p>
        </div>
        <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface flex items-center justify-center hover:bg-gray-100 transition-colors ml-2 md:ml-4 shrink-0 cursor-pointer">
          <Mic className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
