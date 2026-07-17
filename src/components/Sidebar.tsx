import logo from "../assets/logo.png";
import { cn } from "../lib/utils";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  CalendarCheck,
  FileText,
  MessageSquare,
  CreditCard,
  CalendarDays,
  Settings,
  FolderOpen,
  X,
  LogOut
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: GraduationCap, label: "Students" },
  { icon: Users, label: "Staff" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: FileText, label: "Marks & Exams" },
  { icon: MessageSquare, label: "SMS" },
  { icon: CreditCard, label: "Fees" },
  { icon: CalendarDays, label: "Timetable" },
  { icon: FolderOpen, label: "Reports" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside className={cn(
      "w-[280px] h-full flex flex-col bg-white border-r border-border shrink-0 transition-transform duration-300 z-50",
      "fixed inset-y-0 left-0 lg:relative lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="h-[120px] flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full object-cover shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-[17px] leading-tight">Venus SMS</span>
            <span className="text-gray-400 text-[13px]">Management System</span>
          </div>
        </div>

        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="lg:hidden w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <nav className="flex-1 px-5 py-4 space-y-1.5 overflow-y-auto hide-scrollbar">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 text-[15px] font-medium",
              item.active 
                ? "bg-brand text-white shadow-lg shadow-brand/25" 
                : "text-gray-500 hover:bg-surface hover:text-gray-900"
            )}
          >
            <item.icon strokeWidth={item.active ? 2.5 : 2} className={cn("w-[22px] h-[22px]", item.active ? "text-white" : "text-gray-400")} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-5 border-t border-border/60 shrink-0 flex flex-col gap-4">
         <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 text-[15px] font-medium text-gray-500 hover:bg-surface hover:text-gray-900 cursor-pointer">
            <Settings className="w-[22px] h-[22px] text-gray-400" />
            <span>Settings</span>
          </button>
          
          <div className="h-px bg-border/60 w-full"></div>
          
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Dwayne&backgroundColor=f3f4f6" 
                alt="User" 
                className="w-10 h-10 rounded-full bg-gray-100 object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-[14px] leading-tight">Super Admin</span>
                <span className="text-gray-400 text-[11px]">Administrator</span>
              </div>
            </div>
            
            <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-red-50 hover:border-red-200 text-gray-500 hover:text-red-500 transition-colors cursor-pointer" title="Sign Out">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
      </div>
    </aside>
  );
}
