/**
 * Dashboard-related types (extending common)
 */

export interface DashboardStats {
  total: number;
  active: number;
  suspended: number;
  expiringSoon: number;
  avgUsage: number;
  totalChange: { percent: number; isIncrease: boolean };
  activeChange: { percent: number; isIncrease: boolean };
  expiringChange: { percent: number; isIncrease: boolean };
  usageChange: { percent: number; isIncrease: boolean };
}

export interface DashboardOrganizationData {
  id: string;
  Organization: string;
  status: "Active" | "Suspended" | "Trial" | "Expired";
  seatsUsed: string;
  seatsUsed_num: number;
  seatsTotal: number;
  used: string;
  usageValue: number;
  expiryDate: string;
  rawExpiryDate: string | null;
  billingStatus: string;
  created: string;
  rawCreatedAt: string;
  email: string;
  phone: string;
  billingContactName: string;
  address: string;
  industry: string;
  plan: string;
  subscriptionStart: string;
}

import { StaticImageData } from "next/image";

export interface ChartDataPoint {
  name: string;
  value: number;
  color: string;
}

export interface StockMovementDataPoint {
  day: string;
  stock: number;
  received: number;
}

export interface DashboardCardData {
  id: number;
  title: string;
  description: string | React.ReactNode;
  marketPercent: string | React.ReactNode;
  percentChange: string;
  isIncrease: boolean;
  icon: StaticImageData;
}
