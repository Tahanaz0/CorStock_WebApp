"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Accordion, Checkbox, Text, Group, Stack } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";
import tagsImage from "../../assets/images/tag.png";

const TagsFilter = () => {
  const tagsList = ["All", "Bosch", "Siemens", "Conductix"];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelectedTags((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedTags([]);
  };

  return (
    <div className="w-full max-w-97.5 mt-1 mb-1 bg-[#FCFCFD] rounded-md border border-gray-100 shadow-sm overflow-hidden">
      <Accordion
        variant="default"
        styles={{
          item: { border: "none" },

          content: { paddingLeft: "8px", paddingRight: "8px", paddingTop: 0 },
        }}
      >
        <Accordion.Item value="tags">
          <Accordion.Control
            chevron={<IconChevronUp size="1rem" className="text-slate-500" />}
            className="hover:bg-transparent px-2 py-1.5"
          >
            <Group justify="space-between" className="w-full">
              <Group gap="xs">
                <Image
                  src={tagsImage}
                  alt="Tags Logo"
                  width={16}
                  height={16}
                  priority
                  style={{ objectFit: "contain" }}
                />

                <Text
                  fw={500}
                  size="sm"
                  className="text-slate-800 satoshi-font"
                >
                  Tags
                </Text>
              </Group>

              <span
                role="button"
                onClick={handleClear}
                className="text-xs text-orange-500 font-semibold cursor-pointer hover:opacity-80 px-1 satoshi-font"
              >
                Clear
              </span>
            </Group>
          </Accordion.Control>

          <Accordion.Panel className="pb-3">
            <Stack gap={6} className="mt-0 ml-1">
              {tagsList.map((name) => (
                <Checkbox
                  key={name}
                  label={name}
                  checked={selectedTags.includes(name)}
                  onChange={() => handleToggle(name)}
                  size="xs"
                  styles={{
                    label: {
                      cursor: "pointer",
                      color: "#64748b",
                      fontSize: "13px",
                      paddingLeft: "6px",
                      fontFamily: "satoshi-font",
                    },
                    input: {
                      cursor: "pointer",
                      borderRadius: "3px",
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
                  }}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TagsFilter;
