"use client";
import React, { useState } from "react";
import { Accordion, Checkbox, Text, Group, Stack } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";

const EmailNotification = () => {
  const tagsList = [
    "Low Stock Alerts",
    "PO Status Updates",
    "Deliveries",
    "Weekly Summary Report",
  ];
  // All checkboxes checked by default
  const [selectedTags, setSelectedTags] = useState<string[]>(tagsList);

  const handleToggle = (value: string) => {
    setSelectedTags((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

  const handleClear = () => {
    setSelectedTags([]);
  };

  const checkboxStyles = {
    label: {
      cursor: "pointer",
      fontSize: "14px",
      whiteSpace: "nowrap",
      color: "#4b5563",
      paddingLeft: "8px",
    },
    input: {
      cursor: "pointer",
      borderColor: "#fd7e14",
      backgroundColor: "transparent",
      "&:checked": {
        backgroundColor: "transparent",
        borderColor: "#fd7e14",
      },
    },
    icon: {
      color: "#fd7e14",
      strokeWidth: 4,
    },
  };

  return (
    <div className="w-full mt-1 mb-1 px-2">
      {/* MOBILE VIEW */}
      <div className="block [@media(min-width:426px)]:hidden w-full bg-[#FCFCFD] rounded-md border border-gray-100 shadow-sm overflow-hidden">
        <Accordion
          variant="default"
          styles={{
            item: { border: "none" },
            content: { padding: "0 16px 16px 16px" },
          }}
        >
          <Accordion.Item value="tags">
            <Accordion.Control
              chevron={<IconChevronUp size="1.1rem" />}
              className="px-3 py-2"
            >
              <Group
                justify="space-between"
                wrap="nowrap"
                className="w-full pr-1"
              >
                <Text
                  fw={600}
                  size="sm"
                  className="text-[#364152] satoshi-font"
                >
                  Email Notifications
                </Text>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClear();
                  }}
                  className="text-xs text-orange-500 font-bold cursor-pointer satoshi-font"
                >
                  Clear
                </span>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap={12}>
                {tagsList.map((name) => (
                  <Checkbox
                    key={name}
                    label={name}
                    checked={selectedTags.includes(name)}
                    onChange={() => handleToggle(name)}
                    size="sm"
                    styles={checkboxStyles}
                  />
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden [@media(min-width:426px)]:block w-full">
        <Stack gap="xs" className="pl-1">
          <div className="py-1">
            <Text fw={500} size="sm" style={{ color: "#364152" }}>
              Email Notifications
            </Text>
          </div>

          <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 pt-1">
            {tagsList.map((name) => (
              <Checkbox
                key={name}
                label={name}
                checked={selectedTags.includes(name)}
                onChange={() => handleToggle(name)}
                size="sm"
                styles={checkboxStyles}
              />
            ))}
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default EmailNotification;
