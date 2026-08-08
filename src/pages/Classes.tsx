import { Navbar } from "../components/Header";
import { Search, ChevronDown, Layers, Users, BookOpen, Plus, MoreVertical } from "lucide-react";

interface ClassesProps {
  onMenuClick: () => void;
}

const CLASS_DATA = [
  { id: "C-10A", name: "Class 10 - Section A", teacher: "Mr. Davis", students: 35, subjects: 6, room: "Room 101" },
  { id: "C-10B", name: "Class 10 - Section B", teacher: "Ms. Wilson", students: 32, subjects: 6, room: "Room 102" },
  { id: "C-09A", name: "Class 9 - Section A", teacher: "Mr. Smith", students: 38, subjects: 5, room: "Room 201" },
  { id: "C-09B", name: "Class 9 - Section B", teacher: "Mrs. Allen", students: 36, subjects: 5, room: "Room 202" },
];

export function Classes({ onMenuClick }: ClassesProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Class Management
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Setup classes, sections, and assign class teachers.
            </p>
          </div>
          
          <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 w-full md:w-auto self-start md:self-auto cursor-pointer">
            <Plus className="w-5 h-5" />
            Add Class / Section
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Layers className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Total</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Classes & Sections</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">24</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Users className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Capacity</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Avg Class Strength</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">32</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Syllabus</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Active Subjects</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">18</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col flex-1 overflow-hidden">
          <div className="p-6 border-b border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Class Directory</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full sm:w-auto flex items-center">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input 
                  type="text" 
                  placeholder="Search classes..." 
                  className="w-full sm:w-[260px] bg-surface border border-border rounded-full py-2.5 pl-9 pr-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
                />
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-surface/50 text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-4 whitespace-nowrap">Class Details</th>
                  <th className="px-6 py-4 whitespace-nowrap">Class Teacher</th>
                  <th className="px-6 py-4 whitespace-nowrap text-center">Students</th>
                  <th className="px-6 py-4 whitespace-nowrap text-center">Subjects</th>
                  <th className="px-6 py-4 whitespace-nowrap">Room</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {CLASS_DATA.map((cls, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-surface/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[14px] text-gray-900">{cls.name}</span>
                        <span className="text-[12px] text-gray-500 mt-0.5">ID: {cls.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600 font-medium">{cls.teacher}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-[14px] font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">{cls.students}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-[14px] font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">{cls.subjects}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{cls.room}</td>
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
