"use client";

import {
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
  ComposedChart,
  Line,
} from "recharts";
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
  const handleChange = (value: string | null) => {
    console.log("Selected value:", value);
  };

  return (
    <Card radius="md" withBorder p="md">
      <Group justify="space-between" mb="lg">
        <Stack gap={2}>
          <Group gap="md">
            <Group gap={6}>
              <Text fw={500} size="lg" c={"#202939"}>
                Stock Movement Trends
              </Text>
            </Group>
            <Group gap={6} ml={30}>
              <Box
                w={8}
                h={8}
                style={{ borderRadius: "50%", backgroundColor: "#4B5565" }}
              />
              <Text size="xs" c="dimmed">
                Received:{" "}
                <Text component="span" fw={600} c="dark">
                  60
                </Text>
              </Text>
            </Group>
            <Group gap={6}>
              <Box
                w={8}
                h={8}
                style={{ borderRadius: "50%", backgroundColor: "#FE6511" }}
              />
              <Text size="xs" c="dimmed">
                Issued:{" "}
                <Text component="span" fw={600} c="dark">
                  45
                </Text>
              </Text>
            </Group>
            <Group gap={6}>
              <Box
                w={8}
                h={8}
                style={{ borderRadius: "50%", backgroundColor: "#FE6511" }}
              />
              <Text size="xs" c="dimmed">
                Moved items:{" "}
                <Text component="span" fw={600} c="dark">
                  45
                </Text>
              </Text>
            </Group>
          </Group>
        </Stack>

        <Select
          size="xs"
          radius={10}
          defaultValue="7 Days"
          data={["7 Days", "30 Days", "This Month"]}
          style={{ width: 120 }}
          comboboxProps={{ withinPortal: true, zIndex: 1000 }}
          onChange={handleChange}
        />
      </Group>

      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ left: -20 }}>
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
            cursor={{ fill: "#F1F5F9", opacity: 0.4 }}
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "12px",
              zIndex: 1000,
            }}
            itemStyle={{ color: "#fff" }}
          />
          <Bar dataKey="stock" radius={[6, 6, 6, 6]} barSize={25}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.day === "Thu" ? "#F97316" : "#FFD8B1"}
              />
            ))}
          </Bar>
          <Line
            type="monotone"
            dataKey="received"
            stroke="#CBD5E1"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}
