import { Activity } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 4000 },
  { value: 3000 },
  { value: 5000 },
  { value: 2780 },
  { value: 6890 },
  { value: 4390 },
  { value: 6490 },
  { value: 5490 },
  { value: 8490 },
  { value: 7490 },
];

export function RevenueChartWidget() {
  return (
    <div className="bg-surface rounded-[32px] p-6 flex flex-col border border-border/40">
      <div className="flex items-start justify-between mb-2">
        <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
          <Activity className="w-5 h-5 text-black" />
        </div>
        <span className="text-[28px] font-semibold tracking-tight">$16,073.49</span>
      </div>

      <div className="h-[120px] w-full -mx-2 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#DF5D46" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#DF5D46", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-end justify-between mt-6">
        <div className="flex flex-col">
          <span className="text-[17px] font-semibold tracking-tight text-black leading-tight">Revenue Trend</span>
          <span className="text-[13px] text-gray-500">Monthly breakdown</span>
        </div>
        <span className="text-brand font-medium text-sm">+ 9.3%</span>
      </div>
    </div>
  );
}
