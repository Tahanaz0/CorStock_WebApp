"use client";
import React from "react";
import { Select, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const language = () => {
  return (
    <div className="w-full max-w-4xl py-1 px-4">
      <div className="flex items-center justify-between">
        <Text
          size="sm"
          fw={500}
          c={"#364152"}
          className="text-slate-600 whitespace-nowrap satoshi-font"
        >
          language
        </Text>

        <Select
          placeholder="English"
          defaultValue="Dark"
          data={["English", "Urdu"]}
          rightSection={
            <IconChevronDown
              size="1rem"
              className="text-slate-400 satoshi-font"
            />
          }
          className="w-full min-[426px]:max-w-70"
          styles={{
            input: {
              backgroundColor: "transparent",
              borderColor: "#e2e8f0",
              borderRadius: "8px",
              color: "#64748b",
              height: "36px",
              minHeight: "36px",
              fontSize: "14px",
              "&:focus": {
                borderColor: "#fd7e14",
              },
            },
            dropdown: {
              borderRadius: "8px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default language;
