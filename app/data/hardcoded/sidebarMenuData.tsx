/**
 * Sidebar menu items data
 * Centralized menu configuration for the sidebar component
 * Note: Icons are created in the component to avoid JSX in .ts files
 */
import { StaticImageData } from "next/image";
import logoutLogo from "../../assets/images/log-out.png";
import dashboardLogo from "../../assets/images/dashboard.png";
import inventoryLogo from "../../assets/images/inventory.png";
import procurementLogo from "../../assets/images/procurement.png";
import labelsLogo from "../../assets/images/labels&qr.png";
import reportsLogo from "../../assets/images/reports.png";
import manageLogo from "../../assets/images/manage.png";

export interface SidebarMenuItemData {
  text: string;
  icon: StaticImageData;
  path: string;
}

export const mainMenuItems: SidebarMenuItemData[] = [
  {
    text: "Dashboard",
    icon: dashboardLogo,
    path: "/",
  },
  {
    text: "Inventory",
    icon: inventoryLogo,
    path: "/inventory",
  },
  {
    text: "Procurement",
    icon: procurementLogo,
    path: "/procurement",
  },
  {
    text: "Labels & QR",
    icon: labelsLogo,
    path: "/labels&qr",
  },
  {
    text: "Reports",
    icon: reportsLogo,
    path: "/reports",
  },
  {
    text: "Manage",
    icon: manageLogo,
    path: "/manage",
  },
];

export const logoutMenuItem: SidebarMenuItemData = {
  text: "Log Out",
  icon: logoutLogo,
  path: "/login",
};
