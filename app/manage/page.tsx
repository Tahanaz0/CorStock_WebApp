"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  tabs,
  tableData,
  categoryStats,
  tagsStats,
  statsData,
} from "./manageData";
import {
  tabComponents,
  specialTabs,
  tabTitles,
} from "./tabs/tabRegistry";

const Manage = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const router = useRouter();

  // Get current tab's stats and data
  const getCurrentStats = () => {
    if (activeTab === "categories") return categoryStats;
    if (activeTab === "tags") return tagsStats;
    if (activeTab === "templates") return statsData.templates;
    if (activeTab === "audit") return statsData.audit;
    return statsData[activeTab as keyof typeof statsData] || statsData.users;
  };

  const getCurrentData = () => {
    return tableData[activeTab as keyof typeof tableData] || tableData.users;
  };

  const currentStats = getCurrentStats();
  const currentData = getCurrentData();
  const tabTitle = tabTitles[activeTab] || "Manage";

  // Get the component for current tab
  const TabComponent = tabComponents[activeTab];
  const SpecialTabComponent = specialTabs[activeTab];

  return (
    <div className="bg-[#F4F3F3] min-h-screen p-3 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-3 mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Manage</h2>
          <p className="text-gray-500 text-sm">
            Configure CoreStock system settings, users, sites, suppliers,
            metadata, and platform behaviour.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/add-user")}
            className="bg-[#FF8A3D] px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D]/90 flex items-center gap-2 text-white"
          >
            <img src="/plus.png" alt="add" className="w-3 h-3" /> Add New
          </button>
          <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <img src="/export.png" alt="export" className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white flex gap-3 p-3 rounded-lg">
        {/* Sidebar Tabs */}
        <div className="w-40 border border-[#EEF2F6] rounded-lg bg-white">
          <ul className="flex flex-col gap-1 p-2 bg-[#FCFCFD] rounded-lg">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 py-2 rounded-lg cursor-pointer text-sm transition ${activeTab === tab.id ? "bg-[#FF8A3D] text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Panel */}
        <div className="bg-white flex-1 rounded-lg p-4 min-w-0">
          <h1 className="text-xl font-semibold mb-4">{tabTitle}</h1>

          {/* Render Tab Component */}
          {SpecialTabComponent ? (
            <SpecialTabComponent stats={currentStats} />
          ) : TabComponent ? (
            <TabComponent
              stats={currentStats}
              data={currentData}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={setPage}
              onRowsPerPageChange={setRowsPerPage}
            />
          ) : (
            <div className="text-gray-500 text-center py-8">
              Tab component not found for: {activeTab}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manage;