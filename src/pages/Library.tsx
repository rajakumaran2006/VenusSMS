import { Navbar } from "../components/Header";
import { Search, ChevronDown, Book, BookOpen, Clock, AlertCircle, Plus, MoreVertical } from "lucide-react";

interface LibraryProps {
  onMenuClick: () => void;
}

const LIBRARY_BOOKS = [
  { id: "B-001", title: "Fundamentals of Physics", author: "Halliday & Resnick", category: "Science", status: "Available", total: 15, issued: 12 },
  { id: "B-002", title: "Advanced Mathematics", author: "R.D. Sharma", category: "Mathematics", status: "Available", total: 20, issued: 15 },
  { id: "B-003", title: "World History", author: "Norman Lowe", category: "History", status: "Out of Stock", total: 5, issued: 5 },
  { id: "B-004", title: "English Grammar", author: "Wren & Martin", category: "Language", status: "Available", total: 30, issued: 18 },
];

export function Library({ onMenuClick }: LibraryProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              Library Management
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Manage books, issues, returns, and track inventory.
            </p>
          </div>
          
          <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20 w-full md:w-auto self-start md:self-auto cursor-pointer">
            <Plus className="w-5 h-5" />
            Add New Book
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Book className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Total Inventory</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Books</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">4,250</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Currently Out</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Issued Books</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">842</span>
            </div>
          </div>

          <div className="bg-white border border-border/40 rounded-[32px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 w-full transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-black" />
              </div>
              <span className="bg-surface text-gray-600 border border-border/80 text-[11px] font-semibold px-3 py-1 rounded-full">Overdue</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Pending Return</span>
              <span className="text-3xl font-semibold tracking-tight text-black mt-1">36</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border/60 rounded-[24px] shadow-sm flex flex-col flex-1 overflow-hidden">
          <div className="p-6 border-b border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Book Directory</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full sm:w-auto flex items-center">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input 
                  type="text" 
                  placeholder="Search books or authors..." 
                  className="w-full sm:w-[260px] bg-surface border border-border rounded-full py-2.5 pl-9 pr-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
                />
              </div>
              
              <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface border border-border rounded-full px-4 py-2.5 text-[13px] font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                Category <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-surface/50 text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-4 whitespace-nowrap">Book Info</th>
                  <th className="px-6 py-4 whitespace-nowrap">Category</th>
                  <th className="px-6 py-4 whitespace-nowrap text-center">Available/Total</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {LIBRARY_BOOKS.map((book, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-surface/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[14px] text-gray-900">{book.title}</span>
                        <span className="text-[12px] text-gray-500 mt-0.5">by {book.author} | ID: {book.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-600">{book.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-[14px] font-semibold text-gray-900">{book.total - book.issued}</span>
                      <span className="text-[12px] text-gray-500"> / {book.total}</span>
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
