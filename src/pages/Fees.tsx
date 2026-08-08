import { Navbar } from "../components/Header";
import { Search, Filter, CreditCard, ArrowUpRight, ArrowDownLeft, ChevronDown, CheckCircle2, Clock, AlertTriangle, Download, MoreVertical } from "lucide-react";

interface FeesProps {
  onMenuClick: () => void;
}

const DUMMY_FEES = [
  { id: "INV-2024-001", student: "Alex Johnson", class: "10th A", amount: 1250, date: "Oct 15, 2024", category: "Tuition", status: "Paid" },
  { id: "INV-2024-002", student: "Sarah Williams", class: "9th B", amount: 850, date: "Oct 12, 2024", category: "Transport", status: "Pending" },
  { id: "INV-2024-003", student: "Emma Brown", class: "11th A", amount: 1500, date: "Sep 30, 2024", category: "Tuition", status: "Overdue" },
  { id: "INV-2024-004", student: "James Miller", class: "12th C", amount: 1500, date: "Oct 18, 2024", category: "Tuition", status: "Paid" },
  { id: "INV-2024-005", student: "William Davis", class: "8th A", amount: 450, date: "Oct 10, 2024", category: "Extracurricular", status: "Pending" },
];

export function Fees({ onMenuClick }: FeesProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Fee Management
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Track fee collections, manage invoices, and monitor pending dues.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-surface border border-border text-gray-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer shadow-sm">
              <Download className="w-4 h-4" />
              Export Report
            </button>
            <button className="flex-1 md:flex-none bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 cursor-pointer">
              <CreditCard className="w-5 h-5" />
              Collect Fee
            </button>
          </div>
        </div>

        {/* Financial Summary */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <ArrowDownLeft className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">+12.5%</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Revenue (This Term)</span>
              <span className="text-3xl font-semibold tracking-tight text-brand mt-1">$284,500</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">145 Invoices</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Pending Dues</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">$42,350</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">32 Invoices</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Overdue Amount</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">$15,800</span>
            </div>
          </div>
        </div>

        {/* Filters and List */}
        <div className="bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col flex-1 overflow-hidden">
          <div className="p-6 border-b border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions & Invoices</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full sm:w-auto flex items-center">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input 
                  type="text" 
                  placeholder="Search student or ID..." 
                  className="w-full sm:w-[220px] bg-surface border border-border rounded-full py-2.5 pl-9 pr-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
                />
              </div>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface border border-border rounded-full px-4 py-2.5 text-[13px] font-medium hover:bg-gray-100 transition-colors cursor-pointer min-w-[130px]">
                  Category <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface border border-border rounded-full px-4 py-2.5 text-[13px] font-medium hover:bg-gray-100 transition-colors cursor-pointer min-w-[130px]">
                  Status <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-surface/50 text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-4 whitespace-nowrap">Invoice ID</th>
                  <th className="px-6 py-4 whitespace-nowrap">Student</th>
                  <th className="px-6 py-4 whitespace-nowrap">Category</th>
                  <th className="px-6 py-4 whitespace-nowrap">Date</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Amount</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {DUMMY_FEES.map((fee, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-surface/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-[13px] text-gray-600">{fee.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[14px] text-gray-900">{fee.student}</span>
                        <span className="text-[12px] text-gray-500">{fee.class}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{fee.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{fee.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right font-semibold text-[15px] text-gray-900">${fee.amount.toFixed(2)}</td>
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
