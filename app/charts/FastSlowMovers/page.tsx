"use client";

import {
  Card,
  Group,
  Text,
  Progress,
  Select,
  Stack,
} from "@mantine/core";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const warehouses = [
  { name: "Warehouse A", value: 65, color: "#F97316" },
  { name: "Warehouse B", value: 65, color: "#16A34A" },
  { name: "Warehouse C", value: 65, color: "#4F46E5" },
  { name: "Warehouse D", value: 65, color: "#C026D3" },
  { name: "Warehouse E", value: 65, color: "#06B6D4" },
];

const markers: { coordinates: [number, number] }[] = [
  { coordinates: [-100, 40] },
  { coordinates: [-75, 25] },
  { coordinates: [10, 50] },
  { coordinates: [78, 22] },
  { coordinates: [135, -25] },
];

export default function FastSlowMovers() {
  return (
    <Card radius="md" withBorder p="lg">
      <Group justify="space-between" mb="md">
  <Text fw={600} size="sm">
    Fast vs Slow Movers
  </Text>

  <Select
    size="xs"
    radius="md"
    defaultValue="This Week"
    data={["This Week", "This Month", "This Year"]}
    w={120}
    styles={{
      root: {
        '@media (max-width: 640px)': {
          width: '100%'
        }
      }
    }}
  />
</Group>

      <Group align="flex-start" grow>

        {/* LEFT SIDE */}
        <Stack w="35%" gap="md">
          {warehouses.map((item, index) => (
            <Stack key={index} gap={4}>
              <Group justify="space-between">
                <Text size="sm">{item.name}</Text>
                <Text size="sm" fw={500} c="dimmed">
                  {item.value}
                </Text>
              </Group>

              <Progress
                value={item.value}
                size="md"
                radius="xl"
                color={item.color}
                styles={{
                  root: { backgroundColor: "#E5E7EB" },
                }}
              />
            </Stack>
          ))}
        </Stack>

        {/* RIGHT SIDE MAP */}
        <div style={{ width: "65%", height: 250 }}>
          <ComposableMap
            projection="geoEqualEarth"
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#E5E7EB"
                    stroke="#fff"
                    strokeWidth={0.3}
                  />
                ))
              }
            </Geographies>

            {markers.map((marker, index) => (
              <Marker key={index} coordinates={marker.coordinates}>
                <circle
                  r={6}
                  fill="#F97316"
                  style={{
                    filter:
                      "drop-shadow(0px 0px 8px rgba(249, 115, 22, 0.6))",
                  }}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>

      </Group>
    </Card>
  );
}
