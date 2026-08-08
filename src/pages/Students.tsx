import { Navbar } from "../components/Header";
import { Plus, Search, Filter, MoreVertical, Edit2, Trash2 } from "lucide-react";

interface StudentsProps {
  onMenuClick: () => void;
}

const DUMMY_STUDENTS = [
  { id: "STU-001", name: "Alex Johnson", grade: "10th", parent: "Michael Johnson", contact: "+1 234-567-8901", status: "Active" },
  { id: "STU-002", name: "Sarah Williams", grade: "9th", parent: "David Williams", contact: "+1 234-567-8902", status: "Active" },
  { id: "STU-003", name: "Emma Brown", grade: "11th", parent: "Sarah Brown", contact: "+1 234-567-8903", status: "Active" },
  { id: "STU-004", name: "James Miller", grade: "12th", parent: "Robert Miller", contact: "+1 234-567-8904", status: "Inactive" },
  { id: "STU-005", name: "William Davis", grade: "8th", parent: "Jennifer Davis", contact: "+1 234-567-8905", status: "Active" },
];

export function Students({ onMenuClick }: StudentsProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Students
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Manage student records, documents, and parent details.
            </p>
          </div>
          
          <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 w-full md:w-auto self-start md:self-auto cursor-pointer">
            <Plus className="w-5 h-5" />
            Add Student
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-surface p-4 rounded-[24px] border border-border/40 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-4" />
            <input 
              type="text" 
              placeholder="Search by name, ID, or parent..." 
              className="w-full bg-white border border-border rounded-full py-3 pl-12 pr-4 text-[15px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors shadow-sm"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto hide-scrollbar shrink-0">
            <button className="flex items-center gap-2 bg-white border border-border rounded-full px-5 py-3 text-[14px] font-medium whitespace-nowrap hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
              <Filter className="w-4 h-4 text-gray-600" />
              Grade
            </button>
            <button className="flex items-center gap-2 bg-white border border-border rounded-full px-5 py-3 text-[14px] font-medium whitespace-nowrap hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
              <Filter className="w-4 h-4 text-gray-600" />
              Status
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-border/60 rounded-[24px] overflow-hidden shadow-sm flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-surface/50 text-[13px] font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-5 whitespace-nowrap">ID</th>
                  <th className="px-6 py-5 whitespace-nowrap">Name</th>
                  <th className="px-6 py-5 whitespace-nowrap">Grade</th>
                  <th className="px-6 py-5 whitespace-nowrap">Parent</th>
                  <th className="px-6 py-5 whitespace-nowrap">Contact</th>
                  <th className="px-6 py-5 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {DUMMY_STUDENTS.map((student, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-surface/50 transition-colors group">
                    <td className="px-6 py-4 font-mono text-[13px] text-gray-500 whitespace-nowrap">{student.id}</td>
                    <td className="px-6 py-4 font-semibold text-[15px] text-gray-900 whitespace-nowrap">{student.name}</td>
                    <td className="px-6 py-4 text-[14px] text-gray-600 whitespace-nowrap">{student.grade}</td>
                    <td className="px-6 py-4 text-[14px] text-gray-600 whitespace-nowrap">{student.parent}</td>
                    <td className="px-6 py-4 text-[14px] text-gray-600 whitespace-nowrap">{student.contact}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-brand transition-colors cursor-pointer">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors cursor-pointer">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer">
                          <MoreVertical className="w-4 h-4" />
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
    </div>
  );
}
