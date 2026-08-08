import { Navbar } from "../components/Header";
import { Search, ChevronDown, Building, Home, Users, Plus, MoreVertical } from "lucide-react";

interface HostelProps {
  onMenuClick: () => void;
}

const HOSTEL_ROOMS = [
  { id: "RM-101", building: "Block A", type: "2 Seater", capacity: 2, occupied: 2, warden: "Mr. Thomas", status: "Full" },
  { id: "RM-102", building: "Block A", type: "2 Seater", capacity: 2, occupied: 1, warden: "Mr. Thomas", status: "Available" },
  { id: "RM-201", building: "Block B", type: "4 Seater", capacity: 4, occupied: 4, warden: "Ms. Wilson", status: "Full" },
  { id: "RM-202", building: "Block B", type: "4 Seater", capacity: 4, occupied: 0, warden: "Ms. Wilson", status: "Available" },
];

export function Hostel({ onMenuClick }: HostelProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Hostel Management
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Manage rooms, occupancy, and warden details.
            </p>
          </div>
          
          <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 w-full md:w-auto self-start md:self-auto cursor-pointer">
            <Plus className="w-5 h-5" />
            Add Room
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Building className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Blocks</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Rooms</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">120</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Home className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Vacancy</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Available Rooms</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">15</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Users className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Occupancy</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Residents</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">320</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col flex-1 overflow-hidden">
          <div className="p-6 border-b border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Room Allocation</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full sm:w-auto flex items-center">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input 
                  type="text" 
                  placeholder="Search rooms or wardens..." 
                  className="w-full sm:w-[260px] bg-surface border border-border rounded-full py-2.5 pl-9 pr-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
                />
              </div>
              
              <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface border border-border rounded-full px-4 py-2.5 text-[13px] font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                Block <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-surface/50 text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-4 whitespace-nowrap">Room No.</th>
                  <th className="px-6 py-4 whitespace-nowrap">Building/Block</th>
                  <th className="px-6 py-4 whitespace-nowrap">Warden</th>
                  <th className="px-6 py-4 whitespace-nowrap">Type</th>
                  <th className="px-6 py-4 whitespace-nowrap text-center">Occupancy</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {HOSTEL_ROOMS.map((room, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-surface/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-semibold text-[14px] text-gray-900">{room.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{room.building}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{room.warden}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{room.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-[14px] font-semibold text-gray-900">{room.occupied}</span>
                      <span className="text-[12px] text-gray-500"> / {room.capacity}</span>
                    </td>
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
