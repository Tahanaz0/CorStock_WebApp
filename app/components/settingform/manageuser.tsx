"use client";
import React from "react";
import { Text, Group } from "@mantine/core";
import Link from "next/link";

const ManageUsers = () => {
  return (
    <>
      <div className="w-full max-w-4xl py-2">
        <div className="flex flex-col min-[426px]:flex-row min-[426px]:items-center justify-between gap-2 pb-1">
          {/* Left Side: Main Heading */}
          <Text
            fw={500}
            size="sm"
            className="satoshi-font"
            style={{ color: "#364152", fontSize: "16px" }}
          >
            Manage Users
          </Text>

          {/* Right Side: Description and Link */}
          <Group gap="xs" className="flex-wrap min-[426px]:flex-nowrap">
            <Text
              size="xs"
              className="whitespace-nowrap satoshi-font"
              style={{ color: "#697586" }}
            >
              Add, edit, or disable platform users.
            </Text>

            <Link
              href="/users"
              className="font-medium manrope-font whitespace-nowrap no-underline hover:opacity-80 transition-opacity"
              style={{ color: "#FF8A3D", fontSize: "14px" }}
            >
              Go to Users
            </Link>
          </Group>
        </div>
      </div>

      <div className="w-full max-w-4xl py-2">
        <div className="flex flex-col min-[426px]:flex-row min-[426px]:items-center justify-between gap-2 pb-1">
          {/* Left Side: Main Heading */}
          <Text
            fw={500}
            size="sm"
            className="satoshi-font"
            style={{ color: "#364152", fontSize: "16px" }}
          >
            System Settings
          </Text>

          {/* Right Side: Description and Link */}
          <Group gap="xs" className="flex-wrap min-[426px]:flex-nowrap">
            <Text
              size="xs"
              className="whitespace-nowrap satoshi-font"
              style={{ color: "#697586" }}
            >
              Configure global behaviour, modules, thresholds & rules.
            </Text>

            <Link
              href="/settings"
              className="font-medium manrope-font whitespace-nowrap no-underline hover:opacity-80 transition-opacity"
              style={{ color: "#FF8A3D", fontSize: "14px" }}
            >
              Open System Settings
            </Link>
          </Group>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
