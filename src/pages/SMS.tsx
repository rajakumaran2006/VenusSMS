import { Navbar } from "../components/Header";
import { MessageSquare, Send, Search, Filter, Phone, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface SMSProps {
  onMenuClick: () => void;
}

const SMS_TEMPLATES = [
  { id: 1, title: "Fee Reminder", content: "Dear Parent, your child's school fee is pending. Please pay before the due date." },
  { id: 2, title: "Absence Alert", content: "Dear Parent, your child was absent today. Please contact the class teacher." },
  { id: 3, title: "Holiday Notice", content: "School will remain closed tomorrow due to a public holiday." },
  { id: 4, title: "PTM Meeting", content: "Parent-Teacher Meeting is scheduled for this Saturday. Please ensure your presence." },
];

const MESSAGE_HISTORY = [
  { id: 1, type: "Fee Reminder", recipient: "Class 10 Parents", status: "Delivered", time: "10:30 AM", date: "Today", count: 124 },
  { id: 2, type: "Absence Alert", recipient: "Individual (5)", status: "Delivered", time: "09:15 AM", date: "Today", count: 5 },
  { id: 3, type: "Holiday Notice", recipient: "All Parents & Staff", status: "Sent", time: "04:00 PM", date: "Yesterday", count: 1450 },
  { id: 4, type: "Custom Message", recipient: "Class 12-A", status: "Failed", time: "11:20 AM", date: "15 Jul 2024", count: 42 },
];

export function SMS({ onMenuClick }: SMSProps) {
  const [message, setMessage] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleTemplateClick = (id: number, content: string) => {
    setSelectedTemplate(id);
    setMessage(content);
  };

  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-gray-900">
              SMS & Notifications
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Send SMS alerts and notifications to parents and staff.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Compose */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white border border-border/60 rounded-[32px] p-6 shadow-sm flex flex-col">
              <h2 className="text-[18px] font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-brand" />
                Compose Message
              </h2>
              
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium text-gray-700">Recipient Group</label>
                  <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brand/40 transition-colors appearance-none">
                    <option>Select recipients...</option>
                    <option>All Parents</option>
                    <option>All Staff</option>
                    <option>Specific Class</option>
                    <option>Defaulters (Pending Fees)</option>
                    <option>Absentees (Today)</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[13px] font-medium text-gray-700">Message Content</label>
                    <span className="text-[12px] text-gray-400 font-medium bg-surface px-2 py-0.5 rounded-full border border-border/50">
                      {message.length}/160 chars (1 SMS)
                    </span>
                  </div>
                  <textarea 
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setSelectedTemplate(null);
                    }}
                    placeholder="Type your message here..."
                    className="w-full bg-surface border border-border rounded-2xl p-4 text-[14px] outline-none focus:border-brand/40 transition-colors min-h-[160px] resize-none"
                  />
                </div>
                
                <button className="bg-brand text-white font-medium text-[15px] px-6 py-3.5 rounded-xl hover:bg-brand/90 transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2 mt-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>

            <div className="bg-white border border-border/60 rounded-[32px] p-6 shadow-sm">
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Quick Templates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SMS_TEMPLATES.map((tpl) => (
                  <div 
                    key={tpl.id}
                    onClick={() => handleTemplateClick(tpl.id, tpl.content)}
                    className={cn(
                      "p-4 rounded-2xl border transition-all cursor-pointer",
                      selectedTemplate === tpl.id 
                        ? "bg-brand/5 border-brand/30 shadow-sm" 
                        : "bg-surface border-border/60 hover:border-gray-300"
                    )}
                  >
                    <h3 className={cn(
                      "text-[14px] font-semibold mb-1",
                      selectedTemplate === tpl.id ? "text-brand" : "text-gray-900"
                    )}>{tpl.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-snug line-clamp-2">{tpl.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: History */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-border/60 rounded-[32px] p-6 shadow-sm flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-semibold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-gray-700" />
                  Recent History
                </h2>
                <button className="text-[13px] font-medium text-brand hover:underline">View All</button>
              </div>
              
              <div className="flex flex-col gap-4 flex-1">
                {MESSAGE_HISTORY.map((msg) => (
                  <div key={msg.id} className="flex flex-col p-4 rounded-2xl border border-border/60 bg-surface/50 hover:bg-surface transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[14px] font-semibold text-gray-900">{msg.type}</span>
                      <div className="flex items-center gap-1.5">
                        {msg.status === "Delivered" && <CheckCircle2 className="w-3.5 h-3.5 text-gray-500" />}
                        {msg.status === "Sent" && <Clock className="w-3.5 h-3.5 text-gray-500" />}
                        {msg.status === "Failed" && <AlertCircle className="w-3.5 h-3.5 text-gray-500" />}
                        <span className="text-[12px] font-medium text-gray-600">{msg.status}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[13px] font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md">
                        To: {msg.recipient}
                      </span>
                      <span className="text-[13px] text-gray-500 flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {msg.count} recipients
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/60">
                      <span className="text-[12px] font-medium text-gray-400">{msg.date}</span>
                      <span className="text-[12px] font-medium text-gray-400">{msg.time}</span>
                    </div>
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
