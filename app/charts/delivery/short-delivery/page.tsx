"use client";

import React from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* -------------------- DATA -------------------- */
const barData = [
  { name: "Bosch", value: 100000, color: "#FF8A3D" },
  { name: "Siemens", value: 90000, color: "#16B364" },
  { name: "Conductix", value: 70000, color: "#EC4F47" },
  { name: "Conductix ", value: 40000, color: "#5C59F7" },
  { name: "Bosch ", value: 20000, color: "#697586" },
  { name: "Bosch  ", value: 0, color: "#CBD5E1" },
  { name: "Warehouse E", value: 40000, color: "#F59E0B" },
  { name: "Warehouse E ", value: 20000, color: "#0EA5E9" },
];

/* -------------------- CUSTOM BAR -------------------- */
import type { BarShapeProps } from "recharts";

const CustomBar = ({ x, y, width, height, payload }: BarShapeProps) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    rx={6}
    ry={6}
    fill={payload?.color || "#8884d8"}
  />
);

/* -------------------- COMPONENT -------------------- */
export default function ShortDelivery() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl p-3 shadow">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Short Delivery by Supply</h2>
          <button className="relative bg-[#F8FAFC] rounded-lg px-2 pr-6 text-[#697586] flex items-center text-sm">
            This Week
            <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </button>
        </div>

        {/* Chart */}
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="name"
                interval={0}
                tickMargin={10}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                tickFormatter={(value) => `£${value / 1000}k`}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                formatter={(value) =>
                  typeof value === "number" ? `£${value / 1000}k` : ""
                }
                cursor={{ fill: "#f3f4f6" }}
              />

              <Bar
                dataKey="value"
                shape={CustomBar}
                barSize={36}      // ✅ bars wider
                maxBarSize={42}   // ✅ clean limit
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
