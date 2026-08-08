import { Navbar } from "../components/Header";
import { Search, ChevronDown, Bus, Users, Map, Plus, MoreVertical } from "lucide-react";

interface TransportProps {
  onMenuClick: () => void;
}

const TRANSPORT_ROUTES = [
  { id: "R-001", bus: "Bus 12 (KA-01-1234)", driver: "John Smith", route: "Downtown - School", capacity: 40, enrolled: 38, status: "On Time" },
  { id: "R-002", bus: "Bus 05 (KA-01-5678)", driver: "Mike Johnson", route: "North Hills - School", capacity: 35, enrolled: 35, status: "Delayed" },
  { id: "R-003", bus: "Bus 08 (KA-01-9012)", driver: "Robert Davis", route: "West End - School", capacity: 40, enrolled: 32, status: "On Time" },
  { id: "R-004", bus: "Bus 15 (KA-01-3456)", driver: "James Wilson", route: "South Park - School", capacity: 30, enrolled: 25, status: "Maintenance" },
];

export function Transport({ onMenuClick }: TransportProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Transport Management
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Manage school buses, routes, drivers, and student lists.
            </p>
          </div>
          
          <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 w-full md:w-auto self-start md:self-auto cursor-pointer">
            <Plus className="w-5 h-5" />
            Add Route
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Bus className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Fleet</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Buses</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">24</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Map className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Active</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Routes</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">18</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Users className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Enrolled</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Students Using Transport</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">640</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col flex-1 overflow-hidden">
          <div className="p-6 border-b border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Active Routes</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full sm:w-auto flex items-center">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input 
                  type="text" 
                  placeholder="Search routes or buses..." 
                  className="w-full sm:w-[260px] bg-surface border border-border rounded-full py-2.5 pl-9 pr-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
                />
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-surface/50 text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-4 whitespace-nowrap">Route Details</th>
                  <th className="px-6 py-4 whitespace-nowrap">Bus & Driver</th>
                  <th className="px-6 py-4 whitespace-nowrap text-center">Capacity (Filled/Total)</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {TRANSPORT_ROUTES.map((route, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-surface/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[14px] text-gray-900">{route.route}</span>
                        <span className="text-[12px] text-gray-500 mt-0.5">Route ID: {route.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-[14px] text-gray-900 font-medium">{route.bus}</span>
                        <span className="text-[12px] text-gray-500">{route.driver}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-[14px] font-semibold text-gray-900">{route.enrolled}</span>
                      <span className="text-[12px] text-gray-500"> / {route.capacity}</span>
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
