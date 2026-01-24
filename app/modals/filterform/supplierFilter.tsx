"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Accordion, Checkbox, Text, Group, Stack } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";
import supplierUser from "../../assets/images/users-03.png";

const SupplierFilter = () => {
  const suppliersList = ["All", "Bosch", "Siemens", "Conductix"];
  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelectedSuppliers((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSuppliers([]);
  };

  return (
    <div className="w-full max-w-97.5 mt-1 mb-1 bg-[#FCFCFD] rounded-md border border-[#EEF2F6] shadow-sm overflow-hidden">
      <Accordion
        variant="default"
        styles={{
          item: { border: "none" },

          content: { paddingLeft: "8px", paddingRight: "8px", paddingTop: 0 },
        }}
      >
        <Accordion.Item value="supplier">
          <Accordion.Control
            chevron={<IconChevronUp size="1rem" className="text-slate-500" />}
            className="hover:bg-transparent px-2 py-1.5"
          >
            <Group justify="space-between" className="w-full">
              <Group gap="xs">
                <Image
                  src={supplierUser}
                  alt="Supplier Logo"
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
                  Supplier
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
              {suppliersList.map((name) => (
                <Checkbox
                  key={name}
                  label={name}
                  checked={selectedSuppliers.includes(name)}
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

export default SupplierFilter;
