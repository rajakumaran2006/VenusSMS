import { Lock, Users } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Present", value: 92 },
  { name: "Absent", value: 8 },
];
const COLORS = ["#DA3A43", "#111111"];

import { cn } from "../../lib/utils";

interface CircularStatsWidgetProps {
  className?: string;
}

export function CircularStatsWidget({ className }: CircularStatsWidgetProps) {
  return (
    <div className={cn("flex flex-col gap-6 justify-between h-full", className)}>
      <div className="bg-surface rounded-full p-6 flex flex-col items-center justify-center gap-2 border border-border/40 aspect-square hover:bg-gray-100 transition-colors cursor-pointer max-w-[140px] sm:max-w-none mx-auto w-full">
        <Lock className="w-5 h-5 text-gray-700" />
        <span className="text-xs font-medium text-center">System<br/>Secure</span>
      </div>
      
      <div className="bg-surface rounded-full p-6 flex flex-col items-center justify-center gap-2 border border-border/40 aspect-square hover:bg-gray-50 transition-colors cursor-pointer max-w-[140px] sm:max-w-none mx-auto w-full">
        <Users className="w-5 h-5 text-gray-700" />
        <span className="text-xs font-medium text-center">1,240<br/>Total</span>
      </div>
      
      <div className="bg-black rounded-full p-6 flex flex-col items-center justify-center gap-1 border border-border/40 aspect-square relative text-white max-w-[140px] sm:max-w-none mx-auto w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <PieChart width={100} height={100}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={38}
              outerRadius={46}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-xl font-medium tracking-tight">92%</span>
          <span className="text-[10px] text-gray-400 text-center leading-tight">Attendance<br/>Rate</span>
        </div>
      </div>
    </div>
  );
}
