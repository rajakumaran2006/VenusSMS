import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Students } from './pages/Students';
import { Staff } from './pages/Staff';
import { Attendance } from './pages/Attendance';
import { Marks } from './pages/Marks';
import { Fees } from './pages/Fees';
import { Timetable } from './pages/Timetable';
import { SMS } from './pages/SMS';
import { Reports } from './pages/Reports';
import { Homework } from './pages/Homework';
import { Library } from './pages/Library';
import { Transport } from './pages/Transport';
import { Inventory } from './pages/Inventory';
import { Hostel } from './pages/Hostel';
import { Classes } from './pages/Classes';
import { PitchDeck } from './pages/PitchDeck';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isPitchDeckPage = location.pathname === '/pitch-deck';

  if (isPitchDeckPage) {
    return (
      <div className="w-full h-screen bg-white relative overflow-hidden">
        <Routes>
          <Route path="/pitch-deck" element={<PitchDeck onMenuClick={() => {}} />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-white shadow-sm flex border border-border/50 relative overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <Routes>
        <Route path="/" element={<Dashboard onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/students" element={<Students onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/staff" element={<Staff onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/attendance" element={<Attendance onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/marks" element={<Marks onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/fees" element={<Fees onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/timetable" element={<Timetable onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/sms" element={<SMS onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/reports" element={<Reports onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/homework" element={<Homework onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/library" element={<Library onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/transport" element={<Transport onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/inventory" element={<Inventory onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/hostel" element={<Hostel onMenuClick={() => setIsSidebarOpen(true)} />} />
        <Route path="/classes" element={<Classes onMenuClick={() => setIsSidebarOpen(true)} />} />
      </Routes>
      
      {/* Global Chatbot widget */}
      <Chatbot />
      
      {/* Backdrop overlay for mobile/tablet drawer */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-xs transition-opacity duration-200"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
