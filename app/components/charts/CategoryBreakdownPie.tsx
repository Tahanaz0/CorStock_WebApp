"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, Text, Group, Box, Stack, Select } from "@mantine/core";

const data = [
  { name: "Hydraulic", value: 30, color: "#6366F1" },
  { name: "Electrical", value: 40, color: "#F97316" },
  { name: "Mechanical", value: 20, color: "#CB30E0" },
  { name: "Other", value: 10, color: "#94A3B8" },
];

export default function CategoryBreakdownPie() {
  const handleChange = (value: string | null) => {
    console.log("Selected value:", value);
  };

  return (
    <Card radius="md" withBorder p="md">
      <Group justify="space-between" mb="lg">
        <Text fw={500} size="lg" c={"#202939"}>
          Category Breakdown
        </Text>
        <Select
          size="xs"
          radius={10}
          defaultValue="7 Days"
          data={["7 Days", "30 Days", "All Time"]}
          style={{ width: 100 }}
          onChange={handleChange}
        />
      </Group>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Labels - mobile par horizontal (top), desktop par vertical (left) */}
        <div className="w-full sm:w-auto">
          <div className="flex sm:flex-col gap-3 sm:gap-2 justify-center sm:justify-start flex-wrap sm:flex-nowrap">
            {data.map((item, index) => (
              <Group
                key={index}
                gap="xs"
                className="flex-col sm:flex-row items-center sm:items-start"
              >
                <Box
                  className="w-10 h-1.5 sm:w-1.5 sm:h-12"
                  style={{ borderRadius: "5px", backgroundColor: item.color }}
                />
                <Stack gap={0} className="items-center sm:items-start">
                  <Text size="xs" c="dimmed" style={{ lineHeight: 1.2 }}>
                    {item.name}
                  </Text>
                  <Text size="xl" fw={600}>
                    {item.value}%
                  </Text>
                </Stack>
              </Group>
            ))}
          </div>
        </div>

        {/* Pie chart */}
        <div className="w-full sm:flex-1 h-56 sm:h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius="75%"
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
