"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { FiBox, FiShoppingCart, FiClock, FiCheckCircle } from "react-icons/fi";
import { LuArrowDownRight } from "react-icons/lu";
import DashboardCharts from "../charts/page";
import FastVsSlowMover from "../charts/fast-slow-analysis/page";
import OnTimeDeliveryChart from "../charts/delivery/page";
import SupplierScorecard from "../charts/supplier-scorecard/page";
import TopItemsChart from "../charts/top-items/page";
import MovementChart from "../charts/movement/page";
import FastSlowMovers from "../charts/FastSlowMovers/page";
import MovementTable from "./tables/MovementTable";
import ProcurementTable from "./tables/ProcurementTable";
import SupplierTable from "./tables/SupplierTable";
import AuditTable from "./tables/AuditTable";
import LeadTimeChart from "../charts/Lead-time/page";
import ShortDelivery from "../charts/delivery/short-delivery/page";
import { useState } from "react";
// import FilterModal from "../components/FilterModal";
import { FiFilter } from "react-icons/fi";
import FilterModal from "./FilterModal";

// import StockMovementAreaChart from "../components/charts/StockMovementAreaChart";

const Reports = () => {
  const router = useRouter();
  type TabKey = "inventory" | "movement" | "procurement" | "supplier" | "admin";

  const [activeTab, setActiveTab] = React.useState<TabKey>("inventory");
  const [open, setOpen] = useState(false);

  type CardItem = {
    title: string;
    amount: string;
    percent: string;
    image: string;
    buttonText: string;
  };

  const cardsByTab: Record<TabKey, CardItem[]> = {
    inventory: [
      {
        title: "Total Items",
        amount: "£1,264,550",
        percent: "28.4%",
        image: "/total-stock.png",
        buttonText: "All sites",
      },
      {
        title: "Low Stock Items",
        amount: "46",
        percent: "12.1%",
        image: "/low-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Fast Movers",
        amount: "12 Items",
        percent: "9.6%",
        image: "/fast-mover.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Dead Stock",
        amount: "45 Items",
        percent: "18.2%",
        image: "/dead-stock.png",
        buttonText: "Updated 10:45 AM",
      },
    ],

    movement: [
      {
        title: "Total Movements",
        amount: "3,240",
        percent: "6.2%",
        image: "/total-stock.png",
        buttonText: "All sites",
      },
      {
        title: "Book-out percentage",
        amount: "71%",
        percent: "4.1%",
        image: "/low-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Transfers between Sites",
        amount: "320",
        percent: "1.8%",
        image: "/fast-mover.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Adjustments Logged",
        amount: "44",
        percent: "0.9%",
        image: "/dead-stock.png",
        buttonText: "Updated 10:45 AM",
      },
    ],
    procurement: [
      {
        title: "Open POs",
        amount: "83",
        percent: "28.4%",
        image: "/total-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Overdue POs",
        amount: "16",
        percent: "28.4%",
        image: "/low-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Spend",
        amount: "£1.24M",
        percent: "28.4%",
        image: "/fast-mover.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Average Lead Time",
        amount: "8.5 days",
        percent: "28.4%",
        image: "/dead-stock.png",
        buttonText: "Updated 10:45 AM",
      },
    ],
    supplier: [
      {
        title: "On-Time Delivery",
        amount: "83%",
        percent: "28.4%",
        image: "/total-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Avg Delay",
        amount: "3.1 days",
        percent: "28.4%",
        image: "/low-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Short Deliveries Logged",
        amount: "32",
        percent: "28.4%",
        image: "/fast-mover.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Return/Quality Issues",
        amount: "16",
        percent: "28.4%",
        image: "/dead-stock.png",
        buttonText: "Updated 10:45 AM",
      },
    ],
    admin: [
      {
        title: "Stock Adjustments",
        amount: "837",
        percent: "28.4%",
        image: "/total-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Over-deliveries",
        amount: "46",
        percent: "28.4%",
        image: "/low-stock.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Unmatched POs",
        amount: "32",
        percent: "28.4%",
        image: "/fast-mover.png",
        buttonText: "Updated 10:45 AM",
      },
      {
        title: "Return/Quality Issues",
        amount: "16",
        percent: "28.4%",
        image: "/dead-stock.png",
        buttonText: "Updated 10:45 AM",
      },
    ],
  };
  const cardsData = cardsByTab[activeTab];

  return (
    <>
      <div className="bg-[#F4F3F3] min-h-screen p-3 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Reports</h2>
            <p className="text-gray-500 text-sm">
              Analyse stock, usage, procurement and supplier performance across
              all sites{" "}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="bg-[#FF8A3D] px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D] flex items-center gap-2"
              onClick={() => router.push("/reports/Schedule")} // <-- YE BADLO
            >
              <img src="/schedule.png" alt="schedule" className="w-4 h-4" />
              Schedule
            </button>

            <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <img src="/export.png" alt="export" className="w-4 h-4" />
              Export
            </button>
            <div className="relative inline-block">
              <button
                onClick={() => setOpen(true)}
                className="relative border border-gray-300 rounded-lg py-2 px-4 pr-10 text-sm flex items-center "
              >
                Filter
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </button>

              {open && <FilterModal onClose={() => setOpen(false)} />}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2">
          <div className="flex gap-2 border m-2 p-1 bg-gray-50 border-gray-200 rounded-lg">
            <button
              onClick={() => setActiveTab("inventory")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
           ${
             activeTab === "inventory"
               ? "bg-[#FF8A3D] text-black"
               : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
           }`}
            >
              Inventory{" "}
            </button>

            <button
              onClick={() => setActiveTab("movement")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
           ${
             activeTab === "movement"
               ? "bg-[#FF8A3D] text-black"
               : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
           }`}
            >
              Movements & Usage{" "}
            </button>

            <button
              onClick={() => setActiveTab("procurement")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
         ${
           activeTab === "procurement"
             ? "bg-[#FF8A3D] text-black"
             : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
         }`}
            >
              Procurement & POs{" "}
            </button>
            <button
              onClick={() => setActiveTab("supplier")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
         ${
           activeTab === "supplier"
             ? "bg-[#FF8A3D] text-black"
             : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
         }`}
            >
              Supplier Performance{" "}
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
         ${
           activeTab === "admin"
             ? "bg-[#FF8A3D] text-black"
             : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
         }`}
            >
              Audit & Admin{" "}
            </button>
          </div>
          {/* INVENTORY TAB CONTENT */}
          {/* CARDS */}
          <div className="flex gap-6 border-t p-4 border-[#E6E6E9] -mx-2">
            <div className="flex gap-4 flex-wrap">
              {cardsData?.map((item, index) => (
                <div
                  key={index}
                  className="w-[225px] border border-[#EEF2F6] p-3 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-500">{item.title}</div>
                    <img src={item.image} className="w-7" />
                  </div>

                  <div className="font-bold">{item.amount}</div>

                  <div className="flex justify-between items-center mt-4 border-t pt-3 border-[#E6E6E9] -mx-2">
                    {activeTab === "inventory" && index === 0 ? (
                      <button className="relative border border-[#E6E6E9] rounded-lg px-3 pr-8 text-sm">
                        {item.buttonText}
                        <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                      </button>
                    ) : (
                      <span className="text-sm text-gray-500">
                        {item.buttonText}
                      </span>
                    )}

                    <span className="flex gap-1 text-sm text-[#EC4F47]">
                      {item.percent}
                      <LuArrowDownRight />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {activeTab === "inventory" && (
            <>
              <DashboardCharts />
              <FastVsSlowMover />
            </>
          )}
          {activeTab === "movement" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <MovementChart />
                <TopItemsChart />
              </div>
              <FastSlowMovers />
              <MovementTable />
            </>
          )}

          {activeTab === "procurement" && (
            <>
              <DashboardCharts />
              <LeadTimeChart />

              <ProcurementTable />
            </>
          )}

          {activeTab === "supplier" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <OnTimeDeliveryChart />
                <SupplierScorecard />
              </div>
              <ShortDelivery />
              <SupplierTable />
            </>
          )}

          {activeTab === "admin" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <MovementChart />
                <TopItemsChart />
              </div>
              <AuditTable />
            </>
          )}

          {/* <DashboardCharts />
          <FastVsSlowMover /> */}
        </div>
      </div>
    </>
  );
};

export default Reports;
