import { Lock } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Present", value: 92 },
  { name: "Absent", value: 8 },
];
const COLORS = ["#DF5D46", "#111111"];

export function CircularStatsWidget() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-surface rounded-full p-6 flex flex-col items-center justify-center gap-2 border border-border/40 aspect-square hover:bg-gray-100 transition-colors cursor-pointer">
        <Lock className="w-5 h-5 text-gray-700" />
        <span className="text-xs font-medium text-center">System<br/>Secure</span>
      </div>
      
      <div className="bg-black rounded-full p-6 flex flex-col items-center justify-center gap-1 border border-border/40 aspect-square relative text-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <PieChart width={120} height={120}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={55}
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
