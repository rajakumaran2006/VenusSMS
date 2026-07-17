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
  FolderOpen
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

export function Sidebar() {
  return (
    <aside className="w-[280px] h-full flex flex-col bg-white border-r border-border shrink-0">
      <div className="h-[120px] flex items-center px-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[17px] leading-tight">SchoolMS</span>
            <span className="text-gray-400 text-[13px]">Management System</span>
          </div>
        </div>
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

      <div className="p-5 shrink-0">
         <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 text-[15px] font-medium text-gray-500 hover:bg-surface hover:text-gray-900">
            <Settings className="w-[22px] h-[22px] text-gray-400" />
            <span>Settings</span>
          </button>
      </div>
    </aside>
  );
}
