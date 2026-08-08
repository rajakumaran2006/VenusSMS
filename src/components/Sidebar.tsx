import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { NavLink, useLocation } from "react-router-dom";
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
  BookOpen,
  Library,
  Bus,
  Package,
  Building,
  Layers,
  X,
  LogOut,
  ChevronDown,
  Presentation
} from "lucide-react";

const menuGroups = [
  {
    label: "Main",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/" },
      { icon: Presentation, label: "Pitch Deck", path: "/pitch-deck" },
    ]
  },
  {
    label: "Academics",
    icon: BookOpen,
    items: [
      { icon: Layers, label: "Classes", path: "/classes" },
      { icon: BookOpen, label: "Homework", path: "/homework" },
      { icon: FileText, label: "Marks & Exams", path: "/marks" },
      { icon: CalendarDays, label: "Timetable", path: "/timetable" },
    ]
  },
  {
    label: "People",
    icon: Users,
    items: [
      { icon: GraduationCap, label: "Students", path: "/students" },
      { icon: Users, label: "Staff", path: "/staff" },
      { icon: CalendarCheck, label: "Attendance", path: "/attendance" },
    ]
  },
  {
    label: "Management",
    icon: Building,
    items: [
      { icon: Library, label: "Library", path: "/library" },
      { icon: Bus, label: "Transport", path: "/transport" },
      { icon: Building, label: "Hostel", path: "/hostel" },
      { icon: Package, label: "Inventory", path: "/inventory" },
    ]
  },
  {
    label: "Finance & Comms",
    icon: CreditCard,
    items: [
      { icon: CreditCard, label: "Fees", path: "/fees" },
      { icon: MessageSquare, label: "SMS", path: "/sms" },
      { icon: FolderOpen, label: "Reports", path: "/reports" },
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Open the group that contains the active route on mount
  useEffect(() => {
    for (const group of menuGroups) {
      if (group.items.some(item => item.path === location.pathname)) {
        if (group.label !== "Main") {
          setOpenGroup(group.label);
        }
        break;
      }
    }
  }, [location.pathname]);

  const toggleGroup = (label: string) => {
    setOpenGroup(prev => prev === label ? null : label);
  };

  return (
    <aside className={cn(
      "w-[280px] h-full flex flex-col bg-white border-r border-border shrink-0 transition-transform duration-300 z-50",
      "fixed inset-y-0 left-0 lg:relative lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="h-[90px] flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <img src="/favicon.png" alt="RajivGandhiSMS Logo" className="w-12 h-12 rounded-full object-cover shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-[17px] leading-tight">RajivGandhiSMS</span>
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

      <nav className="flex-1 px-5 py-2 space-y-4 overflow-y-auto hide-scrollbar">
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col gap-1">
            {group.label !== "Main" && (
              <button 
                onClick={() => toggleGroup(group.label)}
                className="w-full flex items-center justify-between px-4 py-2 text-[12px] font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {group.icon && <group.icon className="w-4 h-4" />}
                  {group.label}
                </div>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", openGroup === group.label ? "rotate-180" : "rotate-0")} />
              </button>
            )}
            
            <div className={cn(
              "flex flex-col gap-1 overflow-hidden transition-all duration-300",
              group.label === "Main" || openGroup === group.label ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}>
              {group.items.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => cn(
                    "w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 text-[14px] font-medium",
                    isActive 
                      ? "bg-brand text-white shadow-lg shadow-brand/25" 
                      : "text-gray-500 hover:bg-surface hover:text-gray-900"
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon strokeWidth={isActive ? 2.5 : 2} className={cn("w-[22px] h-[22px]", isActive ? "text-white" : "text-gray-400")} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-border/60 shrink-0 flex flex-col gap-3">
         <button className="w-full flex items-center gap-4 px-4 py-2.5 rounded-2xl transition-all duration-200 text-[14px] font-medium text-gray-500 hover:bg-surface hover:text-gray-900 cursor-pointer">
            <Settings className="w-[20px] h-[20px] text-gray-400" />
            <span>Settings</span>
          </button>
          
          <div className="h-px bg-border/60 w-full"></div>
          
          <div className="flex items-center justify-between px-2 pt-1">
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
