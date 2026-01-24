"use client";

import { Card, Text, Group, Table, Badge, Select } from "@mantine/core";

const activities = [
  {
    timestamp: "04/11/25 10:45",
    desc: "5 x ENG-VALVE issued to Carpenters",
    entity: "Movements",
    color: "#087442",
  },
  {
    timestamp: "04/11/25 09:12",
    desc: "PO-D0213 marked as Delivered",
    entity: "Procurement",
    color: "#BA3A14",
  },
  {
    timestamp: "03/11/25 16:30",
    desc: "New item added: HYD-HO518-12",
    entity: "Catalog",
    color: "#5925DC",
  },
  {
    timestamp: "03/11/25 14:00",
    desc: "Labels generated for Site: Warehouse B",
    entity: "Labels & QR",
    color: "#363F72",
  },
];

export default function RecentActivity() {
  return (
    <Card radius="md" withBorder p="md">
      <Group justify="space-between" mb="lg">
        <Text fw={500} size="lg" c={"#202939"}>
          Recent Activity
        </Text>
        <Group gap="sm">
          <Select
            size="xs"
            radius={10}
            defaultValue="7 Days"
            data={["7 Days", "30 Days", "This Month"]}
            style={{ width: 100 }}
          />
        </Group>
      </Group>

      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <Table
          verticalSpacing="sm"
          highlightOnHover={false}
          style={{ border: "1px solid #E6E6E9", minWidth: "600px" }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th
                style={{
                  color: "#697586",
                  fontWeight: 500,
                  border: "none",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                Timestamp
              </Table.Th>
              <Table.Th
                style={{
                  color: "#697586",
                  fontWeight: 500,
                  border: "none",
                  fontSize: "12px",
                }}
              >
                Description
              </Table.Th>
              <Table.Th
                style={{
                  color: "#697586",
                  fontWeight: 500,
                  border: "none",
                  textAlign: "center",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
                align="right"
              >
                Linked Entity
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {activities.map((activity, index) => (
              <Table.Tr key={index}>
                <Table.Td
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#4B5565",
                    borderTop: "1px solid #F1F5F9",
                    whiteSpace: "nowrap",
                  }}
                >
                  {activity.timestamp}
                </Table.Td>
                <Table.Td
                  style={{
                    fontSize: "14px",
                    color: "#4B5565",
                    borderTop: "1px solid #F1F5F9",
                  }}
                >
                  {activity.desc}
                </Table.Td>
                <Table.Td
                  style={{
                    borderTop: "1px solid #F1F5F9",
                    textAlign: "center",
                  }}
                  align="right"
                >
                  <Badge variant="light" color={activity.color} size="sm">
                    {activity.entity}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </Card>
  );
}
