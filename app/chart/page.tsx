"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

/* -------------------- DATA -------------------- */

const barData = [
  { name: "Warehouse A", value: 65000, color: "#6366f1" },
  { name: "Warehouse B", value: 90000, color: "#22c55e" },
  { name: "Warehouse C", value: 60000, color: "#fb923c" },
  { name: "Warehouse D", value: 72000, color: "#ef4444" },
  { name: "Warehouse E", value: 50000, color: "#06b6d4" },
];

const pieData = [
  { name: "Mechanical", value: 38, color: "#fb923c" },
  { name: "Electrical", value: 27, color: "#22c55e" },
  { name: "PPE", value: 10, color: "#6366f1" },
  { name: "Tools", value: 15, color: "#ef4444" },
  { name: "Consumables", value: 10, color: "#6b7280" },
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

  const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => ({
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

  return <path d={d} fill={payload?.color || "#8884d8"} />;
};

/* -------------------- COMPONENT -------------------- */

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* -------- BAR CHART -------- */}
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Stock Value by Site</h2>
          <span className="text-sm text-gray-400">This Week</span>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{ fill: "#f3f4f6" }} />
              <Bar dataKey="value" shape={CustomBar} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* -------- DONUT CHART -------- */}
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Category Distribution</h2>
          <span className="text-sm text-gray-400">This Week</span>
        </div>

        <div className="flex justify-center">
          <PieChart width={260} height={260}>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              shape={CustomPieSlice} // function reference, not JSX
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
