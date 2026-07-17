/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1600px] h-full min-h-[90vh] bg-white rounded-[40px] shadow-sm flex overflow-hidden border border-border/50">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}
