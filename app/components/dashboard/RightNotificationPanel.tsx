"use client";

import { Card, Group, Text, Stack, Avatar } from "@mantine/core";
import Image from "next/image";
import lowStockIcon from "../../assets/images/lowStock.png";
import overdueIcon from "../../assets/images/overdue.png";
import Link from "next/link";
import approvedIcon from "../../assets/images/approved.png";

const notifications = [
  {
    title: "Low Stock Alert",
    desc: "58 items below minimum",
    time: "Mar 30",
    color: "orange",
    icon: lowStockIcon,
  },
  {
    title: "Overdue Deliveries",
    desc: "5 POs past due date",
    time: "Mar 30",
    color: "blue",
    icon: overdueIcon,
  },
  {
    title: "PO Approved",
    desc: "PO-20223 ready for delivery",
    time: "Mar 30",
    color: "green",
    icon: approvedIcon,
  },
  {
    title: "Low Stock Alert",
    desc: "58 items below minimum",
    time: "Mar 30",
    color: "orange",
    icon: lowStockIcon,
  },
];

const sites = [
  {
    name: "Warehouse A",
    color: "orange",
    details: [
      { label: "Stock Value:", value: "£42,000" },
      { label: "Low Stock:", value: "20 items" },
      { label: "Active Purchase Orders:", value: "15" },
    ],
  },
  {
    name: "Warehouse B",
    color: "green",
    details: [
      { label: "Stock Value:", value: "£42,000" },
      { label: "Low Stock:", value: "20 items" },
      { label: "Active Purchase Orders:", value: "15" },
    ],
  },
];

const RightNotificationPanel = () => {
  return (
    <Stack gap="md">
      {/* -------- Notifications -------- */}
      <Card radius="md" withBorder p="md" h="325px">
        <Group
          justify="space-between"
          mb="md"
          style={{ borderBottom: "1px solid #E6E6E9" }}
        >
          <Text fw={500} fz={20} c={"#202939"}>
            Notifications
          </Text>
          <Text fz={12} c="#5C59F7" fw={500} style={{ cursor: "pointer" }}>
            <Link href="/notifications">View all</Link>
          </Text>
        </Group>

        <Stack gap="md">
          {notifications.map((item, index) => (
            <Group
              key={index}
              justify="space-between"
              align="center"
              wrap="nowrap"
              style={{
                paddingBottom: "6px",
                borderBottom: "1px solid #E6E6E9",
              }}
            >
              <Group gap="sm" wrap="nowrap" align="center">
                <Image
                  src={item.icon}
                  alt="low stock icon"
                  width={32}
                  height={32}
                />
                <Stack gap={0}>
                  <Text
                    size="sm"
                    fw={600}
                    c={"black"}
                    style={{ lineHeight: 1.8 }}
                  >
                    {item.title}
                  </Text>
                  <Text size="xs" c="#697586">
                    {item.desc}
                  </Text>
                </Stack>
              </Group>
              <Text size="xs" c="#697586" style={{ whiteSpace: "nowrap" }}>
                {item.time}
              </Text>
            </Group>
          ))}
        </Stack>
      </Card>

      {/* -------- Site Summary -------- */}
      <Card radius="md" withBorder p="md" h={"367px"}>
        <Group
          justify="space-between"
          mb="md"
          style={{ borderBottom: "1px solid #E6E6E9" }}
        >
          <Text fw={500} fz={20} c={"#202939"}>
            Site Summary
          </Text>
          <Text fz={12} c="#5C59F7" fw={500} style={{ cursor: "pointer" }}>
            View all
          </Text>
        </Group>

        <Stack gap="lg">
          {sites.map((site, index) => (
            <Stack
              key={index}
              gap="xs"
              style={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #EEF2F6",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <Group gap="sm">
                <Avatar
                  size="sm"
                  bg={site.color}
                  color="white"
                  radius="xl"
                  c={"#121926"}
                >
                  {site.name[0]}
                </Avatar>
                <Text size="sm" fw={500}>
                  {site.name}
                </Text>
              </Group>
              <Stack gap={4}>
                {site.details.map((d, i) => (
                  <Group key={i} justify="space-between">
                    <Text size="xs" c="dimmed">
                      {d.label}
                    </Text>
                    <Text size="xs" fw={500}>
                      {d.value}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Card>
    </Stack>
  );
};

export default RightNotificationPanel;
