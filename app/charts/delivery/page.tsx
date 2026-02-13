'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', value: 20 },
  { month: 'Mar', value: 42 },
  { month: 'May', value: 25 },
  { month: 'Jul', value: 40 },
  { month: 'Sep', value: 70 },
  { month: 'Nov', value: 90 },
  { month: 'Dec', value: 100 },
];

export default function OnTimeDeliveryChart() {
  const customTicks = [0, 20, 40, 70, 90, 100]; // ascending order

  return (
    <div className="bg-white p-4 rounded-xl border">
      <h3 className="font-semibold mb-4">On-Time Delivery Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 0, left: 0 }}
        >
          {/* Horizontal dotted grid only */}
          <CartesianGrid 
            vertical={false} 
            stroke="#E6E6E9" 
            strokeDasharray="3 3" 
          />

          {/* X-axis without line and ticks */}
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
          />

          {/* Y-axis with 100% at top and all ticks */}
          <YAxis
            domain={[0, 100]} // ensures 100% at top
            ticks={customTicks}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />

          <Tooltip formatter={(value?: number) => (value !== undefined ? `${value}%` : '')} />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#FF8A3D"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}