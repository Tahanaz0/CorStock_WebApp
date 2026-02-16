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
import { tabComponents, specialTabs, tabTitles } from "./tabs/tabRegistry";
import ActionModal from "../components/ActionModal/ActionModal";
import Modal from "@/app/components/Modal/Modal";
import AddTagForm from "@/app/components/manage/AddTagForm";
import AddCategoryForm from "@/app/components/manage/AddCategoryForm";

const Manage = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [actionModalPosition, setActionModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [actionModalRowData, setActionModalRowData] = useState<any>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const router = useRouter();

  // Mapping of tabs to their add pages
  const addPageRoutes: { [key: string]: string } = {
    users: "/add-user",
    sites: "/add-site",
    suppliers: "/add-supplier",
    categories: "/add-category",
    tags: "/add-tag",
    templates: "/add-template",
  };

  const getAddPageRoute = () => {
    return addPageRoutes[activeTab] || "/add-user";
  };



  // Handle action menu click
  const handleActionMenuClick = (
    rowData: any,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    // Calculate positions with modal width and height consideration
    const modalWidth = 150; // smaller modal width
    const modalHeight = 130; // approximate height
    const padding = 10;

    let left = rect.left - modalWidth / 2 + rect.width / 2;
    left = Math.max(
      padding,
      Math.min(left, window.innerWidth - modalWidth - padding),
    );

    let top = rect.bottom + 5;

    // Check if modal will go off bottom - if so, position above
    if (top + modalHeight > window.innerHeight - padding) {
      top = rect.top - modalHeight - 5;
    }

    // Make sure top is not negative
    top = Math.max(padding, top);

    setActionModalPosition({
      top,
      left,
    });
    setActionModalRowData(rowData);
    setIsActionModalOpen(true);
  };

  const closeActionModal = () => {
    setIsActionModalOpen(false);
    setActionModalPosition(null);
    setActionModalRowData(null);
  };

  // Get current tab's stats and data
  const getCurrentStats = () => {
    if (activeTab === "categories") return categoryStats;
    if (activeTab === "tags") return tagsStats;
    if (activeTab === "templates") return statsData.templates;
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
    <div className=" mt-15 sm:mt-5 bg-[#F4F3F3] min-h-screen p-3 sm:p-4 md:p-6 md:mt-0 font-sans">
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-3 mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">Manage</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Configure CoreStock system settings, users, sites, suppliers,
            metadata, and platform behaviour.
          </p>
        </div>

        <div className="flex flex-row xs:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={() => {
              if (activeTab === "categories" || activeTab === "tags") {
                setIsAddModalOpen(true);
              } else {
                router.push(getAddPageRoute());
              }
            }}
            className="bg-[#FF8A3D] px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D]/90 flex items-center justify-center gap-2 flex-1 sm:flex-none text-sm sm:text-base"
          >
            <img src="/plus.png" alt="add" className="w-3 h-3" />
            <span>Add New</span>
          </button>

          <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 flex-1 sm:flex-none text-sm sm:text-base">
            <img src="/export.png" alt="export" className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="bg-white flex flex-col lg:flex-row gap-3 p-2 sm:p-3 rounded-lg">
        {/* Sidebar Tabs - Horizontal on Mobile, Vertical on Desktop */}
        <div className="lg:w-30 w-full border border-[#EEF2F6] rounded-lg bg-white overflow-x-auto">
          <ul className="flex lg:flex-col flex-row gap-1 p-2 bg-[#FCFCFD] rounded-lg min-w-max lg:min-w-0">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setPage(1);
                  closeActionModal();
                }}
                className={`px-3 py-2 rounded-lg cursor-pointer text-sm transition whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "bg-[#FF8A3D] text-black"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Panel */}
        <div className="bg-white flex-1 rounded-lg p-3 sm:p-4 min-w-0 overflow-x-auto">
          <h1 className="text-lg sm:text-xl font-semibold mb-4">{tabTitle}</h1>

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
              onActionMenuClick={handleActionMenuClick}
            />
          ) : (
            <div className="text-gray-500 text-center py-8">
              Tab component not found for: {activeTab}
            </div>
          )}
        </div>
      </div>

      {/* Action Modal */}
      <ActionModal
        isOpen={isActionModalOpen}
        position={actionModalPosition}
        onClose={closeActionModal}
        rowData={actionModalRowData}
        tabName={tabTitle}
      />

      {/* Add New small modal for Categories/Tags - Responsive Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={
          activeTab === "categories"
            ? "Add New Category"
            : activeTab === "tags"
              ? "Add New Tag"
              : undefined
        }
        className="w-full max-w-md mx-4"
      >
        <div className="p-4">
          {activeTab === "categories" ? (
            <AddCategoryForm onClose={() => setIsAddModalOpen(false)} />
          ) : activeTab === "tags" ? (
            <AddTagForm onClose={() => setIsAddModalOpen(false)} />
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default Manage;
