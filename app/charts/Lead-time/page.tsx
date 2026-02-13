"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LeadTimeChart = () => {
    const leadTimeData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 45 },
  { month: "May", value: 75 },
  { month: "Jul", value: 92 },
  { month: "Aug", value: 35 },
  { month: "Sep", value: 15 },
  { month: "Nov", value: 42 },
  { month: "Dec", value: 90 },
];

  return (
    <div className="bg-white rounded-xl border border-[#E6E6E9] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">
          Lead Time Trend
        </h3>

        <button className="text-xs px-3 py-1.5 border rounded-md text-gray-500 hover:bg-gray-50">
          This Week ▾
        </button>
      </div>

      {/* Chart */}
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={leadTimeData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F1F3"
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              domain={[0, 100]}
            />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF7A2F"
              strokeWidth={2}
              dot={{
                r: 5,
                stroke: "#FF7A2F",
                strokeWidth: 2,
                fill: "#fff",
              }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadTimeChart;
