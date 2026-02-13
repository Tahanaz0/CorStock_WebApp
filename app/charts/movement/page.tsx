"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";

import { Card, Text, Group, Select, Box, Stack } from "@mantine/core";

const data = [
  { day: "Mon", stock: 180, received: 170 },
  { day: "Tue", stock: 100, received: 100 },
  { day: "Wed", stock: 200, received: 200 },
  { day: "Thu", stock: 300, received: 250 },
  { day: "Fri", stock: 80, received: 230 },
  { day: "Sat", stock: 180, received: 200 },
  { day: "Sun", stock: 120, received: 280 },
];

export default function StockMovementAreaChart() {
  const handleChange = () => {
    // TODO: Handle time period selection
  };

  return (
    <Card radius="md" withBorder p="md">
     
        <Stack gap={2}>
        <div className="flex justify-between mb-4">
                 <h2 className="font-semibold">Movements Trends Over Time</h2>
                 <button className="relative bg-[#F8FAFC]  rounded-lg px-2 pr-6  text-[#697586] flex items-center gap-2 text-sm">
                   This Week
                   <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                 </button>{" "}
               </div>
        </Stack>

     
    

     <ResponsiveContainer width="100%" height={280}>
  <AreaChart data={data} margin={{ left: -20 }}>

    {/* 🔥 Gradient Shadow */}
    <defs>
      <linearGradient id="stockGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FE6511" stopOpacity={0.4} />
        <stop offset="40%" stopColor="#FE6511" stopOpacity={0.2} />
        <stop offset="100%" stopColor="#FE6511" stopOpacity={0} />
      </linearGradient>
    </defs>

    <CartesianGrid
      strokeDasharray="3 3"
      vertical={false}
      stroke="#E5E7EB"
    />

    <XAxis
      dataKey="day"
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 12, fill: "#697586" }}
      dy={10}
    />

    <YAxis
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 12, fill: "#697586" }}
      domain={[0, 500]}
      ticks={[0, 100, 200, 300, 400, 500]}
      width={50}
    />

    <Tooltip
      contentStyle={{
        backgroundColor: "#1E293B",
        border: "none",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "12px",
      }}
    />

    <Area
      type="monotone"
      dataKey="stock"
      stroke="#FE6511"
      strokeWidth={3}
      fill="url(#stockGradient)"
      dot={false}
      activeDot={{ r: 6 }}
    />
  </AreaChart>
</ResponsiveContainer>

    </Card>
  );
}