import { Navbar } from "../components/Header";
import { FolderOpen, Download, FileText, PieChart, Users, DollarSign, Calendar, Eye, FileSpreadsheet } from "lucide-react";
import { cn } from "../lib/utils";

interface ReportsProps {
  onMenuClick: () => void;
}

const REPORT_TYPES = [
  { id: 1, title: "Fee Collection Report", desc: "Detailed breakdown of collected and pending fees", icon: DollarSign, color: "text-black", bg: "bg-surface border-border" },
  { id: 2, title: "Attendance Analytics", desc: "Student and staff attendance trends and anomalies", icon: Calendar, color: "text-black", bg: "bg-surface border-border" },
  { id: 3, title: "Academic Performance", desc: "Class-wise and subject-wise grade distributions", icon: FileText, color: "text-black", bg: "bg-surface border-border" },
  { id: 4, title: "Demographics Summary", desc: "Student population breakdown by age, gender, and region", icon: Users, color: "text-black", bg: "bg-surface border-border" },
];

const RECENT_REPORTS = [
  { id: 1, name: "Term 1 Fee Status.pdf", type: "Fee", date: "Today, 10:45 AM", size: "2.4 MB" },
  { id: 2, name: "Class 10 Attendance - June.xlsx", type: "Attendance", date: "Yesterday, 04:20 PM", size: "1.1 MB" },
  { id: 3, name: "Staff Payroll Summary.pdf", type: "Financial", date: "12 Jul 2024", size: "3.5 MB" },
  { id: 4, name: "Annual Academic Results.pdf", type: "Academic", date: "05 Jul 2024", size: "8.2 MB" },
];

export function Reports({ onMenuClick }: ReportsProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Reports & Analytics
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Generate and download comprehensive school reports.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Generator */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REPORT_TYPES.map((type) => (
                <div key={type.id} className="bg-white border border-border/60 rounded-[24px] p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center", type.bg)}>
                      <type.icon className={cn("w-5 h-5", type.color)} />
                    </div>
                    <button className="w-8 h-8 rounded-full bg-surface border border-border/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1">{type.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">{type.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-border/60 rounded-[32px] p-6 shadow-sm mt-2">
              <h2 className="text-[18px] font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-brand" />
                Custom Report Builder
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium text-gray-700">Module</label>
                  <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brand/40 transition-colors appearance-none">
                    <option>Select Module</option>
                    <option>Students</option>
                    <option>Staff</option>
                    <option>Fees & Finance</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium text-gray-700">Date Range</label>
                  <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brand/40 transition-colors appearance-none">
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Term 1</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium text-gray-700">Format</label>
                  <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brand/40 transition-colors appearance-none">
                    <option>PDF Document</option>
                    <option>Excel Spreadsheet</option>
                    <option>CSV Data</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/60">
                 <button className="px-5 py-2.5 rounded-xl border border-border font-medium text-[14px] text-gray-700 hover:bg-surface transition-colors">
                   Reset
                 </button>
                 <button className="px-6 py-2.5 rounded-xl bg-brand text-white font-medium text-[14px] hover:bg-brand/90 transition-all shadow-md shadow-brand/20 flex items-center gap-2">
                   <FolderOpen className="w-4 h-4" />
                   Generate Report
                 </button>
              </div>
            </div>

          </div>

          {/* Right Column: Recent Files */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white border border-border/60 rounded-[32px] p-6 shadow-sm h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-semibold text-gray-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-700" />
                  Recent Files
                </h2>
              </div>
              
              <div className="flex flex-col gap-3">
                {RECENT_REPORTS.map((report) => (
                  <div key={report.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-surface transition-colors cursor-pointer group border border-transparent hover:border-border/60">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-surface border border-border text-black">
                      {report.name.endsWith('.pdf') ? <FileText className="w-5 h-5" /> : <FileSpreadsheet className="w-5 h-5" />}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[14px] font-semibold text-gray-900 truncate">{report.name}</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[12px] font-medium text-gray-500">{report.size}</span>
                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                        <span className="text-[12px] font-medium text-gray-500">{report.date}</span>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <Download className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="mt-auto w-full py-3 rounded-xl border border-dashed border-gray-300 text-[14px] font-medium text-gray-600 hover:bg-surface hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                <FolderOpen className="w-4 h-4" />
                Browse All Files
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
