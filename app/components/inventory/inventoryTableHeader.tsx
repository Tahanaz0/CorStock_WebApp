"use client";

import React from "react";
import Image from "next/image";
import plusIcon from "../../assets/images/plus.png";
import styles from "./inventoryTableHeader.module.css";
import { Group, TextInput, Button, Menu } from "@mantine/core";
import searchLogo from "../../assets/images/searchLogo.png";
import { IconChevronDown } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const CreateOrganizationButton = () => {
  const router = useRouter();

  const handleCreateOrganization = () => {
    router.push("/organization/create-organization");
  };

  return (
    <button className={styles.button} onClick={handleCreateOrganization}>
      <Image
        src={plusIcon}
        alt="plus icon"
        className={styles.icon}
        width={20}
        height={20}
      />
      Create Organization
    </button>
  );
};

interface PageHeaderProps {
  title: string;
  subtitle: string;
  showButton: boolean;
  showSearch?: boolean;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  statusFilter?: string | null;
  setStatusFilter?: (filter: string | null) => void;
  expiryFilter?: string | null;
  setExpiryFilter?: (filter: string | null) => void;
  sortBy?: string | null;
  setSortBy?: (sort: string | null) => void;
  showExpiring30Days?: boolean;
  setShowExpiring30Days?: (show: boolean) => void;
}

const InventoryTableHeader = ({
  title,
  subtitle,
  showButton,
  searchQuery,
  setSearchQuery,
  showSearch,
  setStatusFilter,
  setExpiryFilter,
  setSortBy,
  showExpiring30Days,
  setShowExpiring30Days,
}: PageHeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <h1 className={styles.subtitle}>{subtitle}</h1>
        </div>
        {showButton && (
          <div>
            <CreateOrganizationButton />
          </div>
        )}
      </div>
      {showSearch && (
        <div
          style={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E5E7EB",
            background: "#fff",
            flexWrap: "wrap",
            gap: "12px",
          }}
          className="satoshi-font"
        >
          {/* Search */}
          <TextInput
            placeholder="Search"
            leftSection={<Image src={searchLogo} alt="search" />}
            leftSectionWidth={30}
            styles={{
              root: {
                width: "100%",
                maxWidth: "260px",
                flexShrink: "1",
              },
              input: {
                width: "100%",
                color: "#4B5565",
                borderRadius: "8px",
              },
            }}
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery && setSearchQuery(event.currentTarget.value)
            }
          />

          {/* Right Controls */}
          <Group gap="sm" style={{ flexWrap: "wrap" }}>
            <label
              htmlFor="expire_in_30_days"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#4B5565",
                padding: "5px",
                whiteSpace: "nowrap",
              }}
            >
              <input
                type="checkbox"
                name="expire_in_30_days"
                id="expire_in_30_days"
                checked={showExpiring30Days || false}
                onChange={(e) =>
                  setShowExpiring30Days &&
                  setShowExpiring30Days(e.target.checked)
                }
                style={{
                  marginRight: "7px",
                  width: "15px",
                  height: "15px",
                }}
              />
              <span style={{ fontSize: "14px" }}>
                Only expiring in next 30 days
              </span>
            </label>

            <Menu shadow="md" width={100}>
              <Menu.Target>
                <Button
                  rightSection={<IconChevronDown size={20} />}
                  style={{
                    fontWeight: "500",
                    color: "black",
                    backgroundColor: "white",
                    border: "1px solid #E6E6E9",
                    borderRadius: "10px",
                  }}
                >
                  Status
                </Button>
              </Menu.Target>

              <Menu.Dropdown
                style={{
                  width: "120px",
                  borderRadius: "10px",
                  fontFamily: "Satoshi",
                }}
              >
                <Menu.Item
                  color="#087442"
                  onClick={() => setStatusFilter && setStatusFilter("Active")}
                >
                  • Active
                </Menu.Item>
                <Menu.Item
                  color="#C63508"
                  onClick={() => setStatusFilter && setStatusFilter("Trial")}
                >
                  • Trial
                </Menu.Item>
                <Menu.Item
                  color="#B6271F"
                  onClick={() => setStatusFilter && setStatusFilter("Expired")}
                >
                  • Expired
                </Menu.Item>
                <Menu.Item
                  color="#4432D0"
                  onClick={() =>
                    setStatusFilter && setStatusFilter("Suspended")
                  }
                >
                  • Suspended
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Menu shadow="md" width={100}>
              <Menu.Target>
                <Button
                  rightSection={<IconChevronDown size={20} />}
                  style={{
                    fontWeight: "500",
                    color: "black",
                    backgroundColor: "white",
                    border: "1px solid #E6E6E9",
                    borderRadius: "10px",
                  }}
                >
                  Expiry
                </Button>
              </Menu.Target>

              <Menu.Dropdown
                style={{
                  width: "170px",
                  borderRadius: "10px",
                  fontWeight: "500",
                  fontFamily: "Satoshi",
                }}
              >
                <Menu.Item
                  color="#697586"
                  onClick={() =>
                    setExpiryFilter && setExpiryFilter("Next 7 days")
                  }
                >
                  Next 7 days
                </Menu.Item>
                <Menu.Item
                  color="#697586"
                  onClick={() =>
                    setExpiryFilter && setExpiryFilter("Next 30 days")
                  }
                >
                  Next 30 days
                </Menu.Item>
                <Menu.Item
                  color="#697586"
                  onClick={() =>
                    setExpiryFilter && setExpiryFilter("Next 60 days")
                  }
                >
                  Next 60 days
                </Menu.Item>
                <Menu.Item
                  color="#697586"
                  onClick={() =>
                    setExpiryFilter && setExpiryFilter("Custom date range")
                  }
                >
                  Custom date range
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Menu shadow="md" width={100}>
              <Menu.Target>
                <Button
                  rightSection={<IconChevronDown size={20} />}
                  style={{
                    fontWeight: "500",
                    color: "black",
                    backgroundColor: "white",
                    border: "1px solid #E6E6E9",
                    borderRadius: "10px",
                  }}
                >
                  Sort
                </Button>
              </Menu.Target>
              <Menu.Dropdown
                style={{
                  width: "170px",
                  borderRadius: "10px",
                  fontWeight: "500",
                  fontFamily: "Satoshi",
                }}
              >
                <Menu.Item
                  color="#697586"
                  onClick={() => setSortBy && setSortBy("Name A-Z")}
                >
                  Name A-Z
                </Menu.Item>
                <Menu.Item
                  color="#697586"
                  onClick={() => setSortBy && setSortBy("Name Z-A")}
                >
                  Name Z-A
                </Menu.Item>
                <Menu.Item
                  color="#697586"
                  onClick={() => setSortBy && setSortBy("Seats Used %")}
                >
                  Seats Used %
                </Menu.Item>
                <Menu.Item
                  color="#697586"
                  onClick={() => setSortBy && setSortBy("Renewal date")}
                >
                  Renewal date
                </Menu.Item>
                <Menu.Item
                  color="#697586"
                  onClick={() => setSortBy && setSortBy("Created date")}
                >
                  Created date
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </div>
      )}
    </>
  );
};

export default InventoryTableHeader;
