import { Search, Mic, Plus, Calendar, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between w-full">
        {/* Left spacer since logo is in sidebar */}
        <div className="flex-1"></div>

        {/* Right side actions */}
        <div className="flex items-center gap-6">
          <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-3">
            <img 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Dwayne&backgroundColor=f3f4f6" 
              alt="User" 
              className="w-12 h-12 rounded-full bg-gray-100 object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[15px] leading-tight">Super Admin</span>
              <span className="text-gray-400 text-[13px]">Administrator</span>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors cursor-pointer mr-3">
              <Search className="w-5 h-5 text-gray-600" />
            </div>
            <input 
              type="text" 
              placeholder="Start searching here ..." 
              className="outline-none text-[15px] text-gray-600 placeholder:text-gray-400 bg-transparent w-[200px]"
            />
          </div>
        </div>
      </div>

      {/* Greeting and Date Section */}
      <div className="flex items-end justify-between w-full mt-4">
        <div className="flex items-center gap-8">
          {/* Date Widget */}
          <div className="flex items-center gap-4">
            <div className="w-[72px] h-[72px] rounded-full border border-border flex items-center justify-center text-3xl font-medium tracking-tight">
              19
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-medium text-gray-900">Tue,</span>
              <span className="text-[17px] font-medium text-gray-900">December</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-brand text-white px-8 py-3.5 rounded-[24px] font-medium flex items-center gap-3 hover:bg-[#d6553e] transition-colors shadow-lg shadow-brand/20">
              Show schedule
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-[52px] h-[52px] rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors relative">
              <Calendar className="w-5 h-5 text-gray-600" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-brand rounded-full border border-white"></span>
            </button>
          </div>
        </div>

        {/* Greeting Text */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end text-right">
            <h1 className="text-[40px] font-medium leading-[1.1] tracking-tight">
              Hey, Need help?👋
            </h1>
            <p className="text-[40px] font-light text-gray-400 leading-[1.1] tracking-tight">
              Just ask me anything!
            </p>
          </div>
          <button className="w-16 h-16 rounded-full bg-surface flex items-center justify-center hover:bg-gray-100 transition-colors ml-4">
            <Mic className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
