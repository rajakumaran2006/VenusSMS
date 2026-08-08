import { useState } from "react";
import { Navbar } from "../components/Header";
import { Search, Calendar as CalendarIcon, Upload, CheckCircle2, XCircle, Clock, ChevronDown, ChevronLeft, Users } from "lucide-react";

interface AttendanceProps {
  onMenuClick: () => void;
}

const CLASSES = [
  { id: "10", name: "10th Grade", sections: ["A", "B", "C"], stats: { total: 120, present: 110, absent: 5, late: 5 } },
  { id: "9", name: "9th Grade", sections: ["A", "B", "C", "D"], stats: { total: 145, present: 135, absent: 6, late: 4 } },
  { id: "11", name: "11th Grade", sections: ["Science", "Commerce", "Arts"], stats: { total: 95, present: 90, absent: 3, late: 2 } },
  { id: "12", name: "12th Grade", sections: ["Science", "Commerce", "Arts"], stats: { total: 85, present: 80, absent: 4, late: 1 } },
  { id: "8", name: "8th Grade", sections: ["A", "B", "C"], stats: { total: 110, present: 105, absent: 3, late: 2 } },
];

const DUMMY_ATTENDANCE = [
  { id: "STU-001", name: "Alex Johnson", status: "Present", timeIn: "08:15 AM" },
  { id: "STU-002", name: "Sarah Williams", status: "Absent", timeIn: "-" },
  { id: "STU-003", name: "Emma Brown", status: "Late", timeIn: "09:05 AM" },
  { id: "STU-004", name: "James Miller", status: "Present", timeIn: "08:10 AM" },
  { id: "STU-005", name: "William Davis", status: "Present", timeIn: "08:20 AM" },
  { id: "STU-006", name: "Olivia Taylor", status: "Present", timeIn: "08:12 AM" },
];

export function Attendance({ onMenuClick }: AttendanceProps) {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (className: string, section: string) => {
    setSelectedClass(className);
    setSelectedSection(section);
  };

  const renderClassGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CLASSES.map((cls) => (
        <div key={cls.id} className="bg-white border border-border/60 rounded-[24px] p-6 shadow-sm flex flex-col hover:border-brand/40 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{cls.name}</h3>
            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-surface px-2.5 py-1 rounded-full border border-border">
              <Users className="w-3.5 h-3.5" /> {cls.stats.total}
            </div>
          </div>
          
          <div className="flex gap-4 mb-6">
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-500 uppercase font-medium">Present</span>
              <span className="text-lg font-semibold text-black">{cls.stats.present}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-500 uppercase font-medium">Absent</span>
              <span className="text-lg font-semibold text-black">{cls.stats.absent}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-500 uppercase font-medium">Late</span>
              <span className="text-lg font-semibold text-black">{cls.stats.late}</span>
            </div>
          </div>
          
          <div className="mt-auto">
            <span className="text-[13px] text-gray-500 font-medium mb-3 block">Select Section:</span>
            <div className="flex flex-wrap gap-2">
              {cls.sections.map((sec) => (
                <button 
                  key={sec}
                  onClick={() => handleSectionClick(cls.name, sec)}
                  className="bg-surface hover:bg-brand hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-border hover:border-brand shadow-sm"
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAttendanceList = () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => { setSelectedClass(null); setSelectedSection(null); }}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium text-sm cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Overview
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-brand text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
            {selectedClass} - {selectedSection}
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-border/60 rounded-[24px] overflow-hidden shadow-sm flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/60 bg-surface/50 text-[13px] font-semibold text-gray-500 uppercase tracking-wide">
                <th className="px-6 py-5 whitespace-nowrap">ID</th>
                <th className="px-6 py-5 whitespace-nowrap">Student Name</th>
                <th className="px-6 py-5 whitespace-nowrap">Time In</th>
                <th className="px-6 py-5 whitespace-nowrap">Status (Quick Mark)</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_ATTENDANCE.map((record, i) => (
                <tr key={i} className="border-b border-border/40 hover:bg-surface/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-[13px] text-gray-500 whitespace-nowrap">{record.id}</td>
                  <td className="px-6 py-4 font-semibold text-[15px] text-gray-900 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                            {record.name.charAt(0)}
                        </div>
                        {record.name}
                      </div>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 whitespace-nowrap font-mono">{record.timeIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          record.status === 'Present' 
                          ? 'bg-black text-white border border-black' 
                          : 'bg-surface text-gray-500 border border-border hover:bg-gray-100'
                      }`}>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Present
                      </button>
                      <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          record.status === 'Absent' 
                          ? 'bg-black text-white border border-black' 
                          : 'bg-surface text-gray-500 border border-border hover:bg-gray-100'
                      }`}>
                          <XCircle className="w-3.5 h-3.5" /> Absent
                      </button>
                      <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          record.status === 'Late' 
                          ? 'bg-black text-white border border-black' 
                          : 'bg-surface text-gray-500 border border-border hover:bg-gray-100'
                      }`}>
                          <Clock className="w-3.5 h-3.5" /> Late
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Attendance Records
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Mark daily attendance, import CSVs, and view reports.
            </p>
          </div>
          
          <div className="flex items-center gap-3 self-start md:self-auto w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-surface border border-border text-gray-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer shadow-sm">
              <Upload className="w-4 h-4" />
              Import CSV
            </button>
            <button className="flex-1 md:flex-none bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 cursor-pointer">
              <CheckCircle2 className="w-5 h-5" />
              Submit Day
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Users className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Total</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Students</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">1,240</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Active</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Present</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">1,152</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <XCircle className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Absent</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Absent</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">45</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Late</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Late</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">43</span>
            </div>
          </div>
        </div>

        {/* Control Bar */}
        <div className="bg-surface p-4 rounded-[24px] border border-border/40 flex flex-col lg:flex-row items-center gap-4">
          <div className="flex items-center gap-3 w-full lg:w-auto">
             <button className="flex-1 lg:flex-none flex items-center justify-between gap-4 bg-white border border-border rounded-full px-5 py-3 text-[14px] font-medium hover:bg-gray-50 transition-colors shadow-sm cursor-pointer min-w-[180px]">
                <div className="flex items-center gap-2">
                   <CalendarIcon className="w-4 h-4 text-brand" />
                   <span>Today</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
             </button>
             {selectedClass && selectedSection && (
               <button className="flex-1 lg:flex-none flex items-center justify-between gap-4 bg-white border border-border rounded-full px-5 py-3 text-[14px] font-medium hover:bg-gray-50 transition-colors shadow-sm cursor-pointer min-w-[160px]">
                  <span className="text-gray-600">Class: <strong className="text-black">{selectedClass} {selectedSection}</strong></span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
               </button>
             )}
          </div>

          <div className="h-8 w-px bg-border/60 hidden lg:block mx-2"></div>

          <div className="relative flex-1 w-full flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-4" />
            <input 
              type="text" 
              placeholder={selectedClass ? "Search student in this class..." : "Search across all classes..."} 
              className="w-full bg-white border border-border rounded-full py-3 pl-12 pr-4 text-[15px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors shadow-sm"
            />
          </div>
        </div>

        {selectedClass && selectedSection ? renderAttendanceList() : renderClassGrid()}

      </div>
    </div>
  );
}
