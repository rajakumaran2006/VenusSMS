import { Navbar } from "../components/Header";
import { ChevronDown, CalendarDays, Search, Clock, Users, ArrowRightLeft } from "lucide-react";
import { useState } from "react";

interface TimetableProps {
  onMenuClick: () => void;
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIME_SLOTS = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"];

// Dummy grid: Day -> TimeSlot -> Subject/Teacher
const TIMETABLE_DATA = {
  "Monday": {
    "08:00 AM": { subject: "Mathematics", teacher: "Mr. Davis", room: "Room 101", type: "class" },
    "09:00 AM": { subject: "Physics", teacher: "Mrs. Smith", room: "Lab 2", type: "lab" },
    "10:00 AM": { subject: "English Lit", teacher: "Ms. Allen", room: "Room 104", type: "class" },
    "11:00 AM": null,
    "12:00 PM": { subject: "Lunch Break", teacher: "", room: "Cafeteria", type: "break" },
    "01:00 PM": { subject: "History", teacher: "Mr. Brown", room: "Room 201", type: "class" },
    "02:00 PM": { subject: "Computer Sci", teacher: "Dr. Clark", room: "Lab 1", type: "lab" },
  },
  "Tuesday": {
    "08:00 AM": { subject: "English Lit", teacher: "Ms. Allen", room: "Room 104", type: "class" },
    "09:00 AM": { subject: "Mathematics", teacher: "Mr. Davis", room: "Room 101", type: "class" },
    "10:00 AM": null,
    "11:00 AM": { subject: "Chemistry", teacher: "Dr. White", room: "Lab 3", type: "lab" },
    "12:00 PM": { subject: "Lunch Break", teacher: "", room: "Cafeteria", type: "break" },
    "01:00 PM": { subject: "Geography", teacher: "Mr. Brown", room: "Room 202", type: "class" },
    "02:00 PM": { subject: "Physical Ed.", teacher: "Coach Miller", room: "Gym", type: "sports" },
  }
};

export function Timetable({ onMenuClick }: TimetableProps) {
  const [viewBy, setViewBy] = useState<"Class" | "Teacher">("Class");
  
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Timetable
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Manage weekly schedules, detect overlaps, and visualize workload.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="bg-surface border border-border p-1 rounded-full flex items-center">
              <button 
                onClick={() => setViewBy("Class")}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-colors cursor-pointer ${
                  viewBy === 'Class' ? 'bg-white shadow-sm text-gray-900 border border-border/50' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Class View
              </button>
              <button 
                onClick={() => setViewBy("Teacher")}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-colors cursor-pointer ${
                  viewBy === 'Teacher' ? 'bg-white shadow-sm text-gray-900 border border-border/50' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Teacher View
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white border border-border/60 rounded-[24px] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex items-center justify-between gap-4 bg-surface border border-border rounded-full px-5 py-2.5 text-[14px] font-medium hover:bg-gray-100 transition-colors cursor-pointer min-w-[200px]">
              <span className="text-gray-600">
                {viewBy === "Class" ? "Class: " : "Teacher: "}
                <strong className="text-black">{viewBy === "Class" ? "10th Grade - A" : "Mr. Davis (Math)"}</strong>
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
             {viewBy === "Teacher" && (
                <div className="flex items-center gap-2 bg-surface border border-border text-gray-700 px-4 py-2 rounded-full text-xs font-medium">
                   <ArrowRightLeft className="w-3.5 h-3.5" />
                   1 Overlap Detected on Thursday
                </div>
             )}
             <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm cursor-pointer">
               <CalendarDays className="w-4 h-4" />
               Generate AI Schedule
             </button>
          </div>
        </div>

        {/* Weekly Grid */}
        <div className="bg-white border border-border/60 rounded-[24px] overflow-hidden shadow-sm flex-1 flex flex-col">
          <div className="overflow-x-auto flex-1">
            <div className="min-w-[900px] h-full flex flex-col">
              {/* Header Row (Days) */}
              <div className="grid grid-cols-6 border-b border-border/60 bg-surface/50 text-gray-500 text-[13px] font-semibold uppercase tracking-wide shrink-0">
                <div className="p-4 border-r border-border/60 flex items-center justify-center">Time</div>
                {DAYS.map(day => (
                  <div key={day} className="p-4 border-r border-border/60 last:border-0 text-center">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grid Body */}
              <div className="flex-1 flex flex-col bg-white">
                {TIME_SLOTS.map((time, idx) => (
                  <div key={time} className="grid grid-cols-6 border-b border-border/40 last:border-0 min-h-[100px] group">
                    {/* Time Column */}
                    <div className="p-4 border-r border-border/60 flex flex-col items-center justify-center bg-surface/30 gap-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-[13px] font-medium text-gray-600 font-mono">{time}</span>
                    </div>

                    {/* Day Columns */}
                    {DAYS.map(day => {
                      // @ts-ignore
                      const cell = TIMETABLE_DATA[day]?.[time];
                      
                      return (
                        <div key={`${day}-${time}`} className="p-2 border-r border-border/40 last:border-0 relative hover:bg-surface/50 transition-colors cursor-pointer">
                          {cell ? (
                            <div className={`h-full w-full rounded-xl p-3 flex flex-col gap-1 border ${
                              cell.type === 'class' ? 'bg-brand/5 border-brand/20' : 
                              cell.type === 'lab' ? 'bg-blue-50 border-blue-200' :
                              cell.type === 'sports' ? 'bg-green-50 border-green-200' :
                              'bg-gray-100 border-gray-200 items-center justify-center'
                            }`}>
                              {cell.type === 'break' ? (
                                <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-widest">{cell.subject}</span>
                              ) : (
                                <>
                                  <span className="font-semibold text-[14px] text-gray-900 leading-tight">{cell.subject}</span>
                                  <div className="flex items-center justify-between mt-auto pt-2">
                                    <span className="text-[11px] font-medium text-gray-600 flex items-center gap-1"><Users className="w-3 h-3"/> {cell.teacher}</span>
                                    <span className="text-[10px] font-bold text-gray-500 bg-white/60 px-1.5 py-0.5 rounded">{cell.room}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          ) : (
                            <div className="w-full h-full rounded-xl border-2 border-dashed border-border/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-xl text-gray-300">+</span>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
