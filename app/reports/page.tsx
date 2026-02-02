"use client";

import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiBox, FiShoppingCart, FiClock, FiCheckCircle } from "react-icons/fi";
import { LuArrowDownRight } from "react-icons/lu";
import DashboardCharts from "../chart/page";

const Reports = () => {
  const [activeTab, setActiveTab] = React.useState("item");
  const cardsData = [
    {
      title: "Total Items",
      amount: "£1,264,550",
      percent: "28.4%",
      image: "/total-stock.png",
      showButton: true,
      buttonText: "All sites",
    },
    {
      title: "Low Stock Items",
      amount: "46",
      percent: "12.1%",
      image: "/low-stock.png",
      showButton: false,
      buttonText: "Updated 10:45 AM",
    },
    {
      title: "Fast Movers",
      amount: "12 Items",
      percent: "9.6%",
      image: "/fast-mover.png",
      showButton: false,
      buttonText: "Updated 10:45 AM",
    },
    {
      title: "Dead Stock ",
      amount: "45 Items",
      percent: "18.2%",
      image: "/dead-stock.png",
      showButton: false,
      buttonText: "Updated 10:45 AM",
    },
  ];
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
            <button className="bg-[#FF8A3D]  px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D] flex items-center gap-2">
              <img src="/schedule.png" alt="print" className="w-4 h-4" />
              Schedule
            </button>

            <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <img src="/export.png" alt="export" className="w-4 h-4" />
              Export
            </button>
            <div className="relative inline-block">
              <button className="border border-gray-300 rounded-lg py-2 px-4 pr-10 text-sm flex items-center">
                Filter
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2">
          <div className="flex gap-2 border m-2 p-1 bg-gray-50 border-gray-200 rounded-lg">
            <button
              onClick={() => setActiveTab("item")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
           ${
             activeTab === "item"
               ? "bg-[#FF8A3D] text-black"
               : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
           }`}
            >
              Item Label
            </button>

            <button
              onClick={() => setActiveTab("zone")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
           ${
             activeTab === "zone"
               ? "bg-[#FF8A3D] text-black"
               : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
           }`}
            >
              Zone Label
            </button>

            <button
              onClick={() => setActiveTab("site")}
              className={`px-3 p-2 rounded-lg text-sm font-medium transition-all
         ${
           activeTab === "site"
             ? "bg-[#FF8A3D] text-black"
             : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
         }`}
            >
              Site Label
            </button>
          </div>
          <div className="flex gap-6 border-t p-4  border-[#E6E6E9] -mx-2  ">
            <div className="flex gap-4 flex-wrap">
              {cardsData.map((item, index) => (
                <div
                  key={index}
                  className="w-[225px] border border-[#EEF2F6] p-3 rounded-lg" 
                >
                  {/* Top */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-500">{item.title}</div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-7  object-contain"
                    />
                  </div>

                  {/* Amount */}
                  <div className="font-[Manrope] font-bold">{item.amount}</div>

                  {/* Bottom */}
                  <div className="flex justify-between items-center  mt-4 border-t pt-3 border-[#E6E6E9] -mx-2">
                    {index === 0 ? (
                      // ✅ ONLY first card → button
                      <button className="relative border border-[#E6E6E9] rounded-lg px-3 pr-8 text-sm flex items-center">
                        {item.buttonText}
                        <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                      </button>
                    ) : (
                      // ✅ Baqi sab → simple text

                      <span className="text-sm text-gray-500">
                        {" "}
                        {item.buttonText}{" "}
                      </span>
                    )}

                    <span className="flex justify-center item-center gap-1 text-sm text-[#EC4F47]">
                      <div>{item.percent}</div>
                      <div>
                        <LuArrowDownRight />
                      </div>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DashboardCharts  />
        </div>
      </div>
    </>
  );
};

export default Reports;
