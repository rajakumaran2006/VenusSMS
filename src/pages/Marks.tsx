import { useState } from "react";
import { Navbar } from "../components/Header";
import { Search, Filter, Plus, FileText, ChevronDown, CheckCircle2, TrendingUp, TrendingDown, BookOpen, AlertCircle, X } from "lucide-react";

interface MarksProps {
  onMenuClick: () => void;
}

const EXAMS = [
  { id: "EXM-001", title: "Mid-Term Examination 2024", date: "Oct 15 - Oct 25", status: "Completed" },
  { id: "EXM-002", title: "Final Term Examination 2024", date: "Dec 10 - Dec 20", status: "Upcoming" },
  { id: "EXM-003", title: "Monthly Unit Test - Nov", date: "Nov 05 - Nov 07", status: "Ongoing" },
];

const STUDENT_MARKS = [
  { id: "STU-001", name: "Alex Johnson", grade: "10th A", math: 95, science: 88, english: 92, status: "Pass" },
  { id: "STU-002", name: "Sarah Williams", grade: "10th A", math: 78, science: 85, english: 80, status: "Pass" },
  { id: "STU-003", name: "Emma Brown", grade: "10th A", math: 42, science: 55, english: 60, status: "Fail" },
  { id: "STU-004", name: "James Miller", grade: "10th A", math: 88, science: 90, english: 85, status: "Pass" },
  { id: "STU-005", name: "William Davis", grade: "10th A", math: 92, science: 94, english: 89, status: "Pass" },
];

export function Marks({ onMenuClick }: MarksProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Marks & Exams
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Manage exam schedules, gradebooks, and performance analytics.
            </p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 w-full md:w-auto self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            Input Marks
          </button>
        </div>

        {/* Analytics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <FileText className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Term 1</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Average Score</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-semibold tracking-tight text-black">78%</span>
                <span className="text-gray-600 flex items-center text-xs font-medium bg-surface border border-border/80 px-2 py-0.5 rounded-full"><TrendingUp className="w-3.5 h-3.5 mr-1" /> +2.4%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Overall</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Pass Ratio</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-semibold tracking-tight text-black">92%</span>
                <span className="text-gray-400 text-xs font-medium bg-surface border border-border/60 px-2.5 py-0.5 rounded-full">vs 89% last year</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Needs Attention</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Fail Ratio</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-semibold tracking-tight text-black">8%</span>
                <span className="text-gray-600 flex items-center text-xs font-medium bg-surface border border-border/80 px-2 py-0.5 rounded-full"><TrendingDown className="w-3.5 h-3.5 mr-1" /> -1.2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Exam Schedule */}
          <div className="lg:col-span-1 bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col">
            <div className="p-6 border-b border-border/60">
              <h2 className="text-lg font-semibold text-gray-900">Exam Schedule</h2>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {EXAMS.map((exam) => (
                <div key={exam.id} className="p-4 bg-surface rounded-[16px] border border-border/40 hover:border-gray-300 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[15px] text-gray-900 leading-tight">{exam.title}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      {exam.date}
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider ${
                      exam.status === 'Completed' ? 'bg-gray-100 text-gray-700' :
                      exam.status === 'Ongoing' ? 'bg-black text-white' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {exam.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradebook View */}
          <div className="lg:col-span-2 bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col overflow-hidden">
            <div className="p-6 border-b border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Gradebook (10th A)</h2>
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                  <input 
                    type="text" 
                    placeholder="Search student..." 
                    className="w-[200px] bg-surface border border-border rounded-full py-2 pl-9 pr-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
                  />
                </div>
                <button className="flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                  <Filter className="w-4 h-4 text-gray-500" />
                  Filter
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/60 bg-surface/50 text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                    <th className="px-6 py-4 whitespace-nowrap">Student Name</th>
                    <th className="px-6 py-4 whitespace-nowrap text-center">Math</th>
                    <th className="px-6 py-4 whitespace-nowrap text-center">Science</th>
                    <th className="px-6 py-4 whitespace-nowrap text-center">English</th>
                    <th className="px-6 py-4 whitespace-nowrap text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {STUDENT_MARKS.map((student, i) => {
                    const total = student.math + student.science + student.english;
                    const avg = (total / 3).toFixed(1);
                    return (
                      <tr key={i} className="border-b border-border/40 hover:bg-surface/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="font-semibold text-[14px] text-gray-900">{student.name}</span>
                            <span className="text-[12px] text-gray-500">{student.id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center font-medium text-gray-700">{student.math}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center font-medium text-gray-700">{student.science}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center font-medium text-gray-700">{student.english}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex flex-col">
                            <span className="font-bold text-[14px] text-brand">{total}</span>
                            <span className="text-[11px] text-gray-500">{avg}% Avg</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

      {/* Input Marks Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl relative z-10 flex flex-col overflow-hidden border border-border/50 animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-border flex items-center justify-between bg-surface/50">
              <h2 className="text-xl font-semibold text-gray-900">Input Marks</h2>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 flex flex-col gap-5 overflow-y-auto max-h-[60vh]">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">Select Exam</label>
                <button className="w-full flex items-center justify-between border border-border rounded-xl px-4 py-3 text-sm text-left hover:border-gray-400 focus:border-brand outline-none transition-colors">
                  <span>Mid-Term Examination 2024</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">Class & Section</label>
                <button className="w-full flex items-center justify-between border border-border rounded-xl px-4 py-3 text-sm text-left hover:border-gray-400 focus:border-brand outline-none transition-colors">
                  <span>10th Grade - Section A</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">Subject</label>
                <button className="w-full flex items-center justify-between border border-border rounded-xl px-4 py-3 text-sm text-left hover:border-gray-400 focus:border-brand outline-none transition-colors">
                  <span>Mathematics</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="bg-brand/5 border border-brand/20 rounded-xl p-4 mt-2">
                <p className="text-[13px] text-brand font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Ready to enter marks for 35 students in this class.
                </p>
              </div>
            </div>
            
            <div className="p-6 border-t border-border bg-surface/30 flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-brand text-white hover:bg-brand-hover transition-colors shadow-md shadow-brand/20"
              >
                Proceed to Grid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
