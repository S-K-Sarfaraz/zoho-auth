"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 550 },
  { name: "Thu", value: 450 },
  { name: "Fri", value: 650 },
  { name: "Sat", value: 480 },
  { name: "Sun", value: 700 },
];

export default function ChartWidget() {
  return (
    <div className="rounded-xl bg-spider-panel p-6 shadow-lg border border-white/5 h-[350px]">
      <h3 className="text-lg font-bold text-white mb-4">Web Traffic</h3>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E50914" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#E50914" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="name" stroke="#9CA3AF" tickLine={false} axisLine={false} />
            <YAxis stroke="#9CA3AF" tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#1F2937", borderColor: "#374151", color: "#F3F4F6" }}
              itemStyle={{ color: "#F3F4F6" }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#E50914" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
