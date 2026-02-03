'use client';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { subject: 'On-Time Delivery', value: 82 },
  { subject: 'Price Stability', value: 75 },
  { subject: 'Communication', value: 85 },
  { subject: 'Accuracy', value: 60 },
  { subject: 'Quality', value: 78 },
];

export default function SupplierScorecard() {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <h3 className="font-semibold mb-4">Supplier Scorecard</h3>

      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            dataKey="value"
            stroke="#FF8A3D"
            fill="#FF8A3D"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
