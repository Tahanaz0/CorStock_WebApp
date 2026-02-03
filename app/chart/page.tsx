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
  PieChart,
  Pie,
  CartesianGrid,
} from "recharts";

/* -------------------- DATA -------------------- */
const barData = [
  { name: "Warehouse A", value: 65000, display: "£65k", color: "#FF8A3D" },
  { name: "Warehouse B", value: 90000, display: "£90k", color: "#16B364" },
  { name: "Warehouse C", value: 60000, display: "£60k", color: "#EC4F47" },
  { name: "Warehouse D", value: 72000, display: "£72k", color: "#5C59F7" },
  { name: "Warehouse E", value: 50000, display: "£50k", color: "#697586" },
];

const pieData = [
  { name: "Electrical", value: 38, color: "#FF8A3D" },
  { name: "PPE", value: 10, color: "#6b7280" },
  { name: "Tools", value: 15, color: "#EC4F47" },
  { name: "Consumables", value: 10, color: "#7C83FD" },

  { name: "Mechanical", value: 27, color: "#16B364" },
];

/* -------------------- CUSTOM TYPES -------------------- */

import type { BarShapeProps } from "recharts";

interface CustomPieSliceProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  payload?: { color: string; name?: string; value?: number };
}

/* -------------------- CUSTOM SHAPES -------------------- */

// Custom Bar for rounded bars
const CustomBar = ({ x, y, width, height, payload }: BarShapeProps) => {
  return (
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
};

// Custom Pie Slice
// Custom Pie Slice with border
const CustomPieSlice = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  payload,
}: CustomPieSliceProps) => {
  const RADIAN = Math.PI / 180;

  const polarToCartesian = (
    cx: number,
    cy: number,
    r: number,
    angle: number,
  ) => ({
    x: cx + r * Math.cos(-angle * RADIAN),
    y: cy + r * Math.sin(-angle * RADIAN),
  });

  const startOuter = polarToCartesian(cx, cy, outerRadius, startAngle);
  const endOuter = polarToCartesian(cx, cy, outerRadius, endAngle);
  const startInner = polarToCartesian(cx, cy, innerRadius, endAngle);
  const endInner = polarToCartesian(cx, cy, innerRadius, startAngle);

  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  const d = `
    M ${startOuter.x} ${startOuter.y}
    A ${outerRadius} ${outerRadius} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}
    L ${startInner.x} ${startInner.y}
    A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${endInner.x} ${endInner.y}
    Z
  `;

  return (
    <path
      d={d}
      fill={payload?.color} // ✅ original slice color
      stroke="#F8FAFC" // ✅ border color between slices
      strokeWidth={2} // ✅ thickness
    />
  );
};

/* -------------------- COMPONENT -------------------- */

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* -------- BAR CHART -------- */}
      <div className="bg-white rounded-xl p-2 shadow">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Stock Value by Site</h2>
          <button className="relative bg-[#F8FAFC]  rounded-lg px-2 pr-6  text-[#697586] flex items-center gap-2 text-sm">
            This Week
            <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </button>{" "}
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              {/* dotted background grid */}
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false} // sirf horizontal dotted lines
              />

              <XAxis
                dataKey="name"
                interval={0}
                tickMargin={10}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                tickLine={false}
                axisLine={false}
              />

              {/* Y-axis line OFF */}
              <YAxis
                tickFormatter={(value) => `£${value / 1000}k`}
                axisLine={false} // 👈 seedhi line band
                tickLine={false} // 👈 choti ticks bhi band
              />

              <Tooltip
                formatter={(value) =>
                  typeof value === "number" ? `£${value / 1000}k` : ""
                }
                cursor={{ fill: "#f3f4f6" }}
              />

              <Bar dataKey="value" shape={CustomBar} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* -------- DONUT CHART -------- */}
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Category Distribution</h2>
          <button className="relative bg-[#F8FAFC]  rounded-lg px-2 pr-6  text-[#697586] flex items-center gap-2 text-sm">
            This Week
            <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </button>{" "}
        </div>

        <div className="flex items-center gap-6">
          {/* LEFT SIDE LIST */}
          <div className="space-y-3">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <span
                  className="w-[6px] h-10 rounded"
                  style={{ backgroundColor: item.color }}
                />

                <div className="text-sm text-gray-700">
                  <div className="font-medium text-[#697586]">{item.name}</div>
                  <div className="">{item.value}%</div>
                </div>
              </div>
            ))}
          </div>

          {/* DONUT CHART */}
          <PieChart width={220} height={220}>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              shape={CustomPieSlice} // ✅ custom shape with borders
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

