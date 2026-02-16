// app/projects/[id]/impact-chart.tsx
"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartDataPoint {
  name: string;
  LoadTime?: number;
  Conversion?: number;
  Satisfaction?: number;
}

interface ImpactChartProps {
  data: ChartDataPoint[];
}

export default function ImpactChart({ data }: ImpactChartProps) {
  return (
    <div className=" w-full min-w-0">
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          <YAxis hide domain={[0, 6]} />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="LoadTime"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Conversion"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
