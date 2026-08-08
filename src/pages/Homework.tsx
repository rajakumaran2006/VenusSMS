import { Navbar } from "../components/Header";
import { Search, Filter, Plus, BookOpen, Clock, CheckCircle2, ChevronDown, MoreVertical, Paperclip } from "lucide-react";

interface HomeworkProps {
  onMenuClick: () => void;
}

const HOMEWORK_LIST = [
  { id: "HW-001", subject: "Mathematics", class: "10th A", teacher: "Mr. Davis", title: "Algebra Ex 4.2", due: "18 Jul 2024", status: "Active", submitted: "30/35" },
  { id: "HW-002", subject: "Science", class: "9th B", teacher: "Mrs. Smith", title: "Physics Lab Report", due: "19 Jul 2024", status: "Active", submitted: "22/40" },
  { id: "HW-003", subject: "English", class: "11th A", teacher: "Ms. Allen", title: "Essay: Macbeth", due: "15 Jul 2024", status: "Closed", submitted: "34/34" },
  { id: "HW-004", subject: "History", class: "10th A", teacher: "Mr. Brown", title: "World War II Map", due: "20 Jul 2024", status: "Active", submitted: "5/35" },
];

export function Homework({ onMenuClick }: HomeworkProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Homework & Assignments
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Track assignments, due dates, and student submissions.
            </p>
          </div>
          
          <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 w-full md:w-auto self-start md:self-auto cursor-pointer">
            <Plus className="w-5 h-5" />
            New Assignment
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">This Week</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Active Assignments</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">24</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Due Soon</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Pending Review</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">156</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">92% Rate</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Submissions</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">842</span>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col flex-1 overflow-hidden">
          <div className="p-6 border-b border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Assignments</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full sm:w-auto flex items-center">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input 
                  type="text" 
                  placeholder="Search assignments..." 
                  className="w-full sm:w-[220px] bg-surface border border-border rounded-full py-2.5 pl-9 pr-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
                />
              </div>
              
              <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface border border-border rounded-full px-4 py-2.5 text-[13px] font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                Class <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-surface/50 text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-4 whitespace-nowrap">Assignment</th>
                  <th className="px-6 py-4 whitespace-nowrap">Class & Subject</th>
                  <th className="px-6 py-4 whitespace-nowrap">Teacher</th>
                  <th className="px-6 py-4 whitespace-nowrap">Due Date</th>
                  <th className="px-6 py-4 whitespace-nowrap text-center">Submissions</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {HOMEWORK_LIST.map((hw, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-surface/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[14px] text-gray-900">{hw.title}</span>
                        <span className="text-[12px] text-gray-500 flex items-center gap-1 mt-0.5"><Paperclip className="w-3 h-3" /> {hw.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-[14px] text-gray-900 font-medium">{hw.class}</span>
                        <span className="text-[12px] text-gray-500">{hw.subject}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{hw.teacher}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600 font-medium">{hw.due}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-[14px] font-semibold text-gray-900">{hw.submitted}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="w-8 h-8 rounded-full hover:bg-gray-200 inline-flex items-center justify-center text-gray-500 transition-colors cursor-pointer">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
