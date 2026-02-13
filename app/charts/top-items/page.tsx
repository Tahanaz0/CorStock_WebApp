"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";

const data = [
  { name: "PPE Gloves Small", value: 60000 },
  { name: "Bolt M8", value: 85000 },
  { name: "Coolant Additive", value: 55000 },
  { name: "Grinding Disc 4", value: 70000 },
];

export default function TopItemsChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm w-full">
      <div className="flex justify-between mb-4">
               <h2 className="font-semibold">Top Used Item</h2>
               <button className="relative bg-[#F8FAFC]  rounded-lg px-2 pr-6  text-[#697586] flex items-center gap-2 text-sm">
                 This Week
                 <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
               </button>{" "}
             </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number"  />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 13 }}
          />
          <Tooltip />

          <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={45}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === "Bolt M8"
                    ? "#F97316"      // 🔥 Dark color
                    : "#FFE2D1"      // 👈 Light color
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
