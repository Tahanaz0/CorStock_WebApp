"use client";

/* ---------------- IMPORTS ---------------- */
import React, { useState, memo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Group, TextInput, Avatar, Menu, Button } from "@mantine/core";
import Image from "next/image";
import searchLogo from "../../assets/images/searchLogo.png";
import notificationLogo from "../../assets/images/notificationGray.png";
import settingLogo from "../../assets/images/settingGray.png";
import signoutLogo from "../../assets/images/signout.png";
import myAccountLogo from "../../assets/images/myAccount.png";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import PlusIcon from "../../assets/images/plus-gray.png";
import UploadIcon from "../../assets/images/upload-cloud.png";
import DownloadIcon from "../../assets/images/download-cloud.png";
import PkgPlusIcon from "../../assets/images/package-plus.png";
import ArrowIcon from "../../assets/images/switch-horizontal.png";
import PrintIcon from "../../assets/images/printIcon.png";
import lockIcon from "../../assets/images/lockGray.png";
import activityIcon from "../../assets/images/acivity.png";
import shieldIcon from "../../assets/images/shield-.png";
import buildingIcon from "../../assets/images/building.png";
import SettingForm from "@/app/modals/settingform/settingForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { logoutUserAction } from "@/redux/actions/auth-action/auth-action";
import { fetchUserData } from "@/redux/actions/user-action/user-action";

// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

/* ---------------- INTERFACES ---------------- */
interface HeaderProps {
  sidebarOpen?: boolean;
}

/* ---------------- COMPONENT ---------------- */
const Header: React.FC<HeaderProps> = memo(({ sidebarOpen = false }) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const userData = useSelector((state: RootState) => state.user.userData);

  useEffect(() => {
    if (!userData) {
      dispatch(fetchUserData());
    }
  }, [dispatch, userData]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const openSettingModal = () => setIsOpenSettingModal(true);
  const closeSettingModal = () => setIsOpenSettingModal(false);

  const drawerWidth = 260;
  const collapsedWidth = 65;

  return (
    <div
      className="fixed top-0 right-0 z-50 bg-white px-2 py-2 transition-all duration-200 justify-center flex flex-col sm:flex-row sm:items-center gap-3 satoshi-font shadow-lg border-b border-gray-200"
      style={{
        left: sidebarOpen ? drawerWidth : collapsedWidth,
      }}
    >
      {/* ---------------- RIGHT CONTROLS ---------------- */}
      <Group
        gap={20}
        className="order-1 sm:order-2 flex shrink-0 w-full sm:w-auto justify-end"
      >
        {/* ---------------- Setting BUTTON ---------------- */}
        <Image
          src={settingLogo}
          alt="help"
          width={30}
          height={30}
          className="border border-[#EEF2F6] p-1.5 rounded-md cursor-pointer"
          onClick={openSettingModal}
        />
        <SettingForm isOpen={isOpenSettingModal} onClose={closeSettingModal} />
        {/* ---------------- Notification BUTTON ---------------- */}
        <Image
          src={notificationLogo}
          alt="help"
          width={30}
          height={30}
          className="border border-[#EEF2F6] p-1.5 rounded-md cursor-pointer"
          onClick={() => router.push("/notifications")}
        />
        {/* ---------------- PROFILE DROPDOWN ---------------- */}
        <Menu
          shadow="md"
          width={200}
          radius={10}
          position="bottom-start"
          opened={isDropdownOpen}
          onChange={setIsDropdownOpen}
          closeOnItemClick={false}
        >
          <Menu.Target>
            <div className="relative">
              <Avatar
                src={userData?.profileImage}
                alt="profile"
                radius="xl"
                className="cursor-pointer"
                onClick={() => setIsDropdownOpen((o) => !o)}
                color="#FF8A3D"
              >
                {!userData?.profileImage &&
                  userData?.name &&
                  getInitials(userData.name)}
              </Avatar>
            </div>
          </Menu.Target>

          <Menu.Dropdown className="[&_.mantine-Menu-itemLabel]:text-[#697586] font-medium satoshi-font">
            {/* ---------------- USER INFO ---------------- */}
            <div className="flex items-center py-3">
              <Avatar
                src={userData?.profileImage}
                radius="xl"
                size="md"
                color="#FF8A3D"
              />
              <div className="ml-3">
                <div className="font-semibold text-sm">
                  {userData?.name || "User"}
                </div>
                <div className="text-xs text-gray-500">
                  {userData?.email || "user email"}
                </div>
              </div>
            </div>

            <div className="border border-[#EEF2F6]" />

            <Menu.Item
              onClick={() => router.push("/myprofile")}
              leftSection={<Image src={myAccountLogo} alt="my account" />}
            >
              My Profile
            </Menu.Item>
            <Menu.Item
              onClick={() => console.log("my account")}
              leftSection={
                <Image src={activityIcon} alt="my account" unoptimized />
              }
            >
              My Activity Log
            </Menu.Item>
            <Menu.Item
              onClick={() => console.log("my account")}
              leftSection={
                <Image src={lockIcon} alt="my account" unoptimized />
              }
            >
              Change Password
            </Menu.Item>
            <Menu
              shadow="md"
              width={150}
              position="right-start"
              trigger="hover"
            >
              {" "}
              <Menu.Target>
                <Menu.Item
                  rightSection={<IconChevronRight size={18} />}
                  leftSection={
                    <Image src={buildingIcon} alt="Switch Site" unoptimized />
                  }
                >
                  Switch Site
                </Menu.Item>
              </Menu.Target>
              <Menu.Dropdown className="[&_.mantine-Menu-itemLabel]:text-[#697586] font-medium satoshi-font">
                <Menu.Item onClick={() => console.log("Site 1")}>
                  Warehouse A
                </Menu.Item>
                <Menu.Item onClick={() => console.log("Site 2")}>
                  Warehouse B
                </Menu.Item>
                <Menu.Item onClick={() => console.log("Site 2")}>
                  Warehouse C
                </Menu.Item>
                <Menu.Item onClick={() => console.log("Site 2")}>
                  Warehouse D
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Menu.Item
              onClick={() => console.log("my account")}
              leftSection={
                <Image src={shieldIcon} alt="my account" unoptimized />
              }
            >
              Admin Panel
            </Menu.Item>

            <div className="border border-[#EEF2F6] my-2" />

            <Menu.Item
              onClick={async () => {
                await dispatch(logoutUserAction());
                router.push("/login");
              }}
              leftSection={<Image src={signoutLogo} alt="signout" />}
            >
              Sign Out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>

      {/* ---------------- SEARCH BAR + QUICK ACTIONS ---------------- */}
      <Group
        className="order-2 sm:order-1 w-full flex flex-nowrap items-center gap-3"
        style={{ justifyContent: "space-between" }}
      >
        {/* SEARCH */}
        <TextInput
          placeholder="Search organizations or users..."
          leftSection={
            <Image
              src={searchLogo}
              alt="search"
              className="filter-search-icon"
            />
          }
          leftSectionWidth={30}
          className="flex-1 min-w-0 max-w-75 sm:max-w-60 md:max-w-75 lg:max-w-90"
          styles={{
            input: {
              color: "#4B5565",
            },
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = (e.target as HTMLInputElement).value;
              router.push(`/organization?search=${encodeURIComponent(value)}`);
            }
          }}
        />

        {/* QUICK ACTION BUTTON */}
        <Menu shadow="md">
          <Menu.Target>
            <Button
              rightSection={
                <IconChevronDown className="size-5 bg-transparent w-3 sm:w-4" />
              }
              style={{
                width: "clamp(120px, 25vw, 150px)",
                fontSize: "clamp(12px, 1.4vw, 14px)",
                color: "black",
                fontWeight: "500",
                backgroundColor: "#FF8A3D",
                borderRadius: "8px",
                height: "37px",
              }}
            >
              Quick actions
            </Button>
          </Menu.Target>

          <Menu.Dropdown className="[&_.mantine-Menu-itemLabel]:text-[#697586] font-medium satoshi-font">
            <Menu.Item
              leftSection={<Image src={PlusIcon} alt="Plus" unoptimized />}
            >
              New Part
            </Menu.Item>

            <Menu.Item
              leftSection={<Image src={UploadIcon} alt="Plus" unoptimized />}
            >
              Import Parts
            </Menu.Item>
            <Menu.Item
              leftSection={<Image src={PkgPlusIcon} alt="Plus" unoptimized />}
            >
              New PO
            </Menu.Item>
            <Menu.Item
              leftSection={<Image src={ArrowIcon} alt="Plus" unoptimized />}
            >
              Add Movement
            </Menu.Item>
            <Menu.Item
              leftSection={<Image src={PrintIcon} alt="Plus" unoptimized />}
            >
              Generate Labels
            </Menu.Item>
            <Menu.Item
              leftSection={<Image src={DownloadIcon} alt="Plus" unoptimized />}
            >
              Export Report
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </div>
  );
});

Header.displayName = "Header";
export default Header;
