import { useState, useEffect } from "react";
import { 
  X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, 
  Server, Shield, Cpu, Zap, MessageSquare, Users, 
  BookOpen, DollarSign, Award, Layers, Globe, Radio, Bell
} from "lucide-react";

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PitchDeckModal({ isOpen, onClose }: PitchDeckModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 4;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentSlide]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/65 backdrop-blur-md transition-all animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl border border-border overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]">
        
        {/* Top Progress Bar & Header */}
        <div className="w-full bg-surface border-b border-border px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/20">
              F
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-none">
                FazoSMS Pitch Deck
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Executive Presentation • Slide {currentSlide + 1} of {totalSlides}</p>
            </div>
          </div>

          {/* Slide Navigation Tabs */}
          <div className="hidden md:flex items-center bg-gray-100 p-1 rounded-full border border-border">
            {[
              "01 Intro",
              "02 Features",
              "03 Pricing",
              "04 Tech & Hosting"
            ].map((tabLabel, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  currentSlide === idx 
                    ? "bg-brand text-white shadow-sm" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tabLabel}
              </button>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Progress Line */}
        <div className="w-full h-1 bg-gray-100">
          <div 
            className="h-full bg-brand transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 hide-scrollbar bg-white">
          
          {/* SLIDE 1: INTRO */}
          {currentSlide === 0 && (
            <div className="flex flex-col items-center text-center space-y-8 animate-fadeIn py-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-tint border border-brand/20 text-brand text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-brand" />
                Next-Generation School Operating System
              </div>

              <div className="max-w-3xl space-y-4">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Empowering Educational Institutions with <span className="text-brand">FazoSMS</span>
                </h1>
                <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                  An end-to-end cloud platform combining automated student ERP, financial management, real-time parent communication, and Fazo AI Admissions Lead Collector.
                </p>
              </div>

              {/* 4 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-4">
                <div className="bg-surface border border-border/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-brand/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base mb-1">100% Automated</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Eliminate repetitive manual paperwork and streamline operations.</p>
                  </div>
                </div>

                <div className="bg-surface border border-border/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-brand/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base mb-1">AI Lead Collector</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">24/7 intelligent AI chatbot converting website visitors to admissions.</p>
                  </div>
                </div>

                <div className="bg-surface border border-border/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-brand/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base mb-1">360° Analytics</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Real-time attendance, fee revenue trends, and academic reporting.</p>
                  </div>
                </div>

                <div className="bg-surface border border-border/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-brand/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base mb-1">Dedicated Security</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Isolated VPS hosting environment ensuring 99.99% reliability.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: FEATURES */}
          {currentSlide === 1 && (
            <div className="flex flex-col space-y-6 animate-fadeIn">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint border border-brand/20 text-brand text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  Comprehensive Feature Suite
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  Everything Your School Needs to Flourish
                </h2>
                <p className="text-sm text-gray-500 max-w-xl mx-auto">
                  Built specifically for administrators, educators, financial managers, parents, and students.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {[
                  {
                    icon: MessageSquare,
                    title: "AI Admissions Chatbot",
                    desc: "Fazo AI-driven automated parent assistant that captures qualified leads and student inquiries."
                  },
                  {
                    icon: Users,
                    title: "Student & Staff ERP",
                    desc: "Complete profiles, digital records, section assignments, and employee roles management."
                  },
                  {
                    icon: CheckCircle2,
                    title: "Attendance & Leaves",
                    desc: "One-tap attendance marking, automated daily leave approvals, and instant parent alerts."
                  },
                  {
                    icon: Award,
                    title: "Marks & Report Cards",
                    desc: "Digital gradebook, examination entry, automated report card generation, and subject rankings."
                  },
                  {
                    icon: DollarSign,
                    title: "Fees & Collections",
                    desc: "Real-time revenue monitoring, pending fee tracking, custom fee structures, and receipts."
                  },
                  {
                    icon: BookOpen,
                    title: "Library & Books",
                    desc: "Digital cataloging, book issuance tracking, due date reminders, and stock management."
                  },
                  {
                    icon: Globe,
                    title: "Transport & Hostel",
                    desc: "Bus route monitoring, driver details, room allocations, hostel capacity, and safety tracking."
                  },
                  {
                    icon: Bell,
                    title: "Broadcast Messaging",
                    desc: "Targeted announcements, SMS alerts for fees & holidays, and instant broadcast notifications."
                  }
                ].map((feat, idx) => (
                  <div key={idx} className="bg-surface border border-border/80 rounded-2xl p-4 flex flex-col gap-2 hover:border-brand/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center text-xs shadow-sm">
                      <feat.icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mt-1">{feat.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 3: PRICING */}
          {currentSlide === 2 && (
            <div className="flex flex-col space-y-5 animate-fadeIn">
              <div className="text-center space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  Transparent Plans Billed Per Enrolled Student
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
                  Simple 1-year annual billing with zero hidden costs, setup charges, or per-admin licensing fees.
                </p>
              </div>

              {/* Pricing Comparison Table Card */}
              <div className="bg-surface border border-border/80 rounded-3xl overflow-hidden shadow-xs">
                
                {/* Top Table Header Bar */}
                <div className="bg-gray-100/90 border-b border-border/80 px-6 py-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">FazoSMS 1-Year Plan Matrix</span>
                  <span className="text-xs font-semibold text-brand bg-white px-3 py-1 rounded-full border border-brand/20 shadow-2xs">1-Year Annual Plan</span>
                </div>

                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-white border-b border-border text-gray-900 font-semibold">
                        <th className="p-4 sm:p-5 w-1/3 min-w-[200px] align-bottom">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Modules & Features</span>
                          <span className="text-base font-bold text-gray-900">Platform Capabilities</span>
                        </th>
                        
                        {/* Starter Column */}
                        <th className="p-4 sm:p-5 text-center min-w-[150px] align-top bg-gray-50/50">
                          <div className="flex flex-col items-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-200 text-gray-700 uppercase mb-1.5">Starter</span>
                            <div className="text-xs text-gray-500 font-medium">Basic ERP</div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">₹59</div>
                            <div className="text-[11px] text-gray-400 font-normal">/ student / yr</div>
                          </div>
                        </th>

                        {/* Professional Column (Highlighted) */}
                        <th className="p-4 sm:p-5 text-center min-w-[170px] align-top bg-brand-tint/60 border-x-2 border-brand/30">
                          <div className="flex flex-col items-center">
                            <span className="inline-block bg-brand text-white text-[10px] uppercase font-black px-3 py-0.5 rounded-full shadow-2xs tracking-wider mb-1.5">
                              Most Popular
                            </span>
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand/10 text-brand uppercase mb-1">
                              Professional
                            </span>
                            <div className="text-xs text-brand-dark font-bold">Fazo AI Included</div>
                            <div className="text-2xl sm:text-3xl font-black text-brand mt-1">₹99</div>
                            <div className="text-[11px] text-brand/80 font-medium">/ student / yr</div>
                          </div>
                        </th>

                        {/* Advanced Column */}
                        <th className="p-4 sm:p-5 text-center min-w-[160px] align-top bg-gray-50/50">
                          <div className="flex flex-col items-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-900 text-white uppercase mb-1.5">Advanced</span>
                            <div className="text-xs text-gray-500 font-medium">AI + Live GPS</div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">₹149</div>
                            <div className="text-[11px] text-gray-400 font-normal">/ student / yr</div>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-border/80 bg-white">
                      {/* Row 1: Student & Staff Management */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Student & Staff ERP Records</td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>

                      {/* Row 2: Class & Section ERP */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Class & Section Management</td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>

                      {/* Row 3: Fee Management & Receipts */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Fee Management & Collection Receipts</td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>

                      {/* Row 4: Attendance & Daily Approvals */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Attendance & Daily Leave Approvals</td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>

                      {/* Row 5: Timetable & Schedule ERP */}
                      <tr className="hover:bg-gray-50/50 transition-colors bg-brand-tint/5">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand"></span>
                          Timetable Scheduler & Teacher Substitution ERP
                        </td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-500 text-xs">Static Timetable</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 text-xs font-bold text-gray-900">Automated Timetable</td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>AI Timetable Generator & Substitute ERP</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 6: Examination & Exam Management */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Examination & Exam Schedule ERP</td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-500 text-xs">Basic Manual Marks</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Full Exam ERP</span>
                          </div>
                        </td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Full Exam ERP + AI Ranks</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 7: Automated Marks & Report Cards */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Automated Gradebook & Digital Report Cards</td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>

                      {/* Row 8: Fazo AI Admissions Chatbot */}
                      <tr className="hover:bg-gray-50/50 transition-colors bg-brand-tint/10">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand"></span>
                          Fazo AI Admissions Assistant (24/7 Lead Collector)
                        </td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/30 border-x border-brand/20 font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Included (24/7 AI)</span>
                          </div>
                        </td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Custom Enterprise AI</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 9: Homework & Digital Assignments */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Digital Homework & Assignment Portal</td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>AI Grading Assistant</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 10: Parent & Student Mobile Portals */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Parent & Student Mobile Portals</td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-500 text-xs">Basic Web Access</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>White-Label App Access</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 11: Library & Book Inventory */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Library & Book Cataloging ERP</td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 sm:p-4 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>

                      {/* Row 12: School Store & Inventory ERP */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">School Store, Stock & Inventory ERP</td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 text-xs text-gray-600">Basic Inventory</td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Full Purchase Order ERP</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 13: Advanced Live GPS Vehicle Integration */}
                      <tr className="hover:bg-gray-50/50 transition-colors bg-amber-50/20">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          Advanced GPS & Live Bus Tracking (Real-Time ETA Alerts)
                        </td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Live GPS Included</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 14: Transport & Hostel Management */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Transport Fleet & Hostel Allocation ERP</td>
                        <td className="p-3.5 sm:p-4 text-center text-gray-400 font-medium">—</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 text-xs text-gray-700 font-medium">Standard Transport</td>
                        <td className="p-3.5 sm:p-4 text-center font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Full Fleet & Hostel ERP</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 15: DLT Telecom SMS Gateway & Emergency Broadcast */}
                      <tr className="hover:bg-gray-50/50 transition-colors bg-brand-tint/5">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand"></span>
                          DLT Telecom SMS Gateway & Emergency Voice Alert
                        </td>
                        <td className="p-3.5 sm:p-4 text-center text-xs text-gray-500">Pay-as-you-go SMS</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 text-xs font-bold text-brand">DLT Verified Packs</td>
                        <td className="p-3.5 sm:p-4 text-center text-xs font-bold text-emerald-700">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Priority Direct Gateway + Voice Alerts</span>
                          </div>
                        </td>
                      </tr>

                      {/* Row 16: Infrastructure & Dedicated Security */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Cloud Infrastructure & Dedicated Security</td>
                        <td className="p-3.5 sm:p-4 text-center text-xs text-gray-500">Shared Cloud</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 text-xs font-bold text-brand">Dedicated VPS</td>
                        <td className="p-3.5 sm:p-4 text-center text-xs font-bold text-gray-900">Isolated High-Perf VPS</td>
                      </tr>

                      {/* Row 17: Technical Support & SLA */}
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">Support Level & SLA Guarantee</td>
                        <td className="p-3.5 sm:p-4 text-center text-xs text-gray-500">Email Support</td>
                        <td className="p-3.5 sm:p-4 text-center bg-brand-tint/20 border-x border-brand/10 text-xs font-bold text-gray-900">24/7 Priority Support</td>
                        <td className="p-3.5 sm:p-4 text-center text-xs font-bold text-emerald-700">Dedicated Manager + 99.99% SLA</td>
                      </tr>
                    </tbody>

                    {/* Bottom Total / Summary Row (Matching the attached image highlight design) */}
                    <tfoot>
                      <tr className="border-t-2 border-brand/30 bg-brand-tint/50">
                        <td className="p-4 sm:p-5 font-extrabold text-gray-900">
                          <div>Total 1-Year Service Plan Fee</div>
                          <div className="text-[11px] text-gray-500 font-normal mt-0.5">(Billed Annually Per Student)</div>
                        </td>
                        <td className="p-4 sm:p-5 text-center">
                          <div className="text-xl font-bold text-gray-900">₹59</div>
                          <div className="text-[10px] text-gray-500 font-medium">/ student / year</div>
                          <button className="mt-2.5 w-full bg-white border border-gray-300 text-gray-800 text-xs font-bold py-1.5 px-3 rounded-xl hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer">
                            Select Starter
                          </button>
                        </td>
                        <td className="p-4 sm:p-5 text-center bg-brand-tint/80 border-x-2 border-brand/40">
                          <div className="text-2xl font-black text-brand">₹99</div>
                          <div className="text-[10px] text-brand/90 font-bold uppercase tracking-wide">Popular Best Value</div>
                          <button className="mt-2.5 w-full bg-brand text-white text-xs font-bold py-2 px-3 rounded-xl hover:bg-brand-hover transition-colors shadow-sm cursor-pointer">
                            Get Professional
                          </button>
                        </td>
                        <td className="p-4 sm:p-5 text-center">
                          <div className="text-xl font-bold text-gray-900">₹149</div>
                          <div className="text-[10px] text-gray-500 font-medium">/ student / year</div>
                          <button className="mt-2.5 w-full bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl hover:bg-black transition-colors shadow-2xs cursor-pointer">
                            Select Advanced
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* SMS Policy & Billing Note */}
              <div className="bg-brand-tint/60 border border-brand/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Radio className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm">SMS Communications Policy Notice</h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      SMS messages are charged separately on a transparent pay-as-you-go DLT credit pack basis matching actual usage.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1 bg-white border border-brand/20 text-brand text-xs font-bold rounded-full shadow-2xs">Zero Hidden Fees</span>
                  <span className="px-3 py-1 bg-white border border-brand/20 text-brand text-xs font-bold rounded-full shadow-2xs">Free Migration</span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: TECH STACK & DEDICATED VPS HOSTING */}
          {currentSlide === 3 && (
            <div className="flex flex-col space-y-6 animate-fadeIn">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint border border-brand/20 text-brand text-xs font-semibold">
                  <Server className="w-3.5 h-3.5" />
                  Infrastructure & Architecture
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  High-Performance Tech Stack & Dedicated VPS
                </h2>
                <p className="text-sm text-gray-500 max-w-xl mx-auto">
                  Powered by dedicated cloud infrastructure and modern web standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Left Card: Dedicated VPS Hosting */}
                <div className="bg-surface border border-border/80 rounded-3xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-brand text-white flex items-center justify-center shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Dedicated VPS Hosting</h4>
                      <p className="text-xs text-gray-500">Private, Isolated & Blazing Fast</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white border border-border rounded-2xl p-3.5 flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-xs text-gray-900">Dedicated Compute Resources</h5>
                        <p className="text-[11px] text-gray-500 leading-normal">Isolated CPU cores & dedicated RAM for zero slowdowns during peak hours.</p>
                      </div>
                    </div>

                    <div className="bg-white border border-border rounded-2xl p-3.5 flex items-start gap-3">
                      <Shield className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-xs text-gray-900">Isolated Security & Backups</h5>
                        <p className="text-[11px] text-gray-500 leading-normal">Isolated database per school with automated encrypted daily backups.</p>
                      </div>
                    </div>

                    <div className="bg-white border border-border rounded-2xl p-3.5 flex items-start gap-3">
                      <Zap className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-xs text-gray-900">99.99% Uptime SLA</h5>
                        <p className="text-[11px] text-gray-500 leading-normal">Sub-100ms response times nationwide with global DDoS mitigation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Modern Tech Stack */}
                <div className="bg-surface border border-border/80 rounded-3xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">State-of-the-Art Tech Stack</h4>
                      <p className="text-xs text-gray-500">Built with modern enterprise standards</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { title: "React 19", desc: "Next-gen UI library" },
                      { title: "Vite 6", desc: "Lightning fast bundling" },
                      { title: "Tailwind CSS v4", desc: "Modern styling engine" },
                      { title: "TypeScript", desc: "Strict type safety" },
                      { title: "Fazo AI Engine", desc: "Dedicated Admissions AI" },
                      { title: "Node.js & Express", desc: "High concurrency API" },
                      { title: "Recharts", desc: "Interactive analytics" },
                      { title: "Lucide Icons", desc: "Minimal UI icon suite" }
                    ].map((tech, idx) => (
                      <div key={idx} className="bg-white border border-border rounded-2xl p-3 flex flex-col">
                        <span className="font-semibold text-xs text-brand">{tech.title}</span>
                        <span className="text-[10px] text-gray-500">{tech.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Controls */}
        <div className="w-full bg-surface border-t border-border px-6 py-4 flex items-center justify-between shrink-0">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-brand" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors shadow-md shadow-brand/20 cursor-pointer"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
