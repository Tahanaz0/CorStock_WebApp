"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import DashboardCards from "./components/dashboard/dashboardCards";
import DashboardHeader from "./components/dashboard/dashboardHeader";
import RightNotificationPanel from "./components/dashboard/RightNotificationPanel";
import StockMovementAreaChart from "./components/charts/StockMovementAreaChart";
import SupplierPerformanceBar from "./components/charts/SupplierPerformanceBar";
import StockDistributionDonut from "./components/charts/StockDistributionDonut";
import CategoryBreakdownPie from "./components/charts/CategoryBreakdownPie";
import RecentActivity from "./components/dashboard/RecentActivity";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (!userData) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="bg-[#F4F3F3] page-container flex flex-col gap-5">
      {/* HEADER */}
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
        {/* LEFT COLUMN (70%) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-5">
          <DashboardCards />
          <StockMovementAreaChart />
        </div>

        {/* RIGHT COLUMN (30%) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-5">
          <RightNotificationPanel />
        </div>
      </div>

      {/* LAST 4 SECTIONS: 60/40 LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pb-5">
        <div className="md:col-span-3">
          <SupplierPerformanceBar />
        </div>

        <div className="md:col-span-2">
          <StockDistributionDonut />
        </div>

        <div className="md:col-span-2">
          <CategoryBreakdownPie />
        </div>

        <div className="md:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Page;
