"use client";

import { Card, Text, Group, Progress, Stack, Select } from "@mantine/core";

const suppliers = [
  { name: "Bosch UK", value: 94, label: "On Time (94%)" },
  { name: "Conductix", value: 76, label: "On Time (76%)" },
  { name: "Siemens", value: 84, label: "On Time (84%)" },
  { name: "Hilti UK", value: 94, label: "On Time (94%)" },
];

export default function SupplierPerformanceBar() {
  return (
    <Card radius="md" withBorder p="md">
      <Group justify="space-between" mb="lg">
        <Text fw={500} size="lg" c={"#202939"}>
          Supplier Performance
        </Text>
        <Select
          size="xs"
          radius={10}
          defaultValue="7 Days"
          data={["7 Days", "30 Days", "This Month"]}
          style={{ width: 100 }}
        />
      </Group>

      <Stack gap="xl">
        {suppliers.map((supplier, index) => (
          <div key={index}>
            <Group justify="space-between" mb={8}>
              <Text size="sm" fw={500} c={"#121926"}>
                {supplier.name}
              </Text>
              <Text size="xs" c="#16B364" fw={500}>
                {supplier.label}
              </Text>
            </Group>
            <Progress
              value={supplier.value}
              color="#16B364"
              size="lg"
              radius="xl"
              bg="#F1F5F9"
            />
          </div>
        ))}
      </Stack>
    </Card>
  );
}
