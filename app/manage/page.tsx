"use client";

import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowUp } from "react-icons/md";


// Types
type TabItem = { id: string; label: string };
type StatItem = { title: string; value: number; icon?: string };
type UserData = {
  name: string;
  role: string;
  email: string;
  siteAccess: string;
  lastLogin: string;
  status: string;
};
type SiteData = {
  site: string;
  code: string;
  manager: string;
  items: number;
  status: string;
};
type SupplierData = {
  name: string;
  email: string;
  leadTime: string;
  category: string;
  posLinked: number;
  status: string;
};

const Manage = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const router = useRouter();
  const [openCategory, setOpenCategory] = useState<string | null>("Mechanical");

  // Constants
  const tabs: TabItem[] = [
    { id: "users", label: "Users" },
    { id: "sites", label: "Sites" },
    { id: "suppliers", label: "Suppliers" },
    { id: "categories", label: "Categories" },
    { id: "tags", label: "Tags" },
    { id: "system", label: "System Settings" },
    { id: "templates", label: "Templates" },
    { id: "audit", label: "Audit Logs" },
  ];

  const statsData = {
    users: [
      { title: "Total Users", value: 446, icon: "/user.png" },
      { title: "Active Users", value: 46, icon: "/active.png" },
      { title: "Pending Invites", value: 12, icon: "/pending.png" },
      { title: "Disabled Accounts", value: 20, icon: "/disable.png" },
    ],
    sites: [
      { title: "Total Sites", value: 14, icon: "/site.png" },
      { title: "Active Sites", value: 39, icon: "/active-site.png" },
      { title: "Inactive Sites", value: 30, icon: "/inactive-site.png" },
    ],
    suppliers: [
      { title: "Total Suppliers", value: 120, icon: "/supplier.png" },
      { title: "Active Suppliers", value: 85, icon: "/active-supplier.png" },
      {
        title: "Inactive Suppliers",
        value: 35,
        icon: "/inactive-supplier.png",
      },
    ],
  };

  const tableHeaders = {
    users: [
      "Name",
      "Role",
      "Email",
      "Site Access",
      "Last Login",
      "Status",
      "Actions",
    ],
    sites: ["Site", "Code", "Manager", "Items", "Status", "Actions"],
    suppliers: [
      "Supplier Name",
      "Email",
      "Lead Time",
      "Category",
      "POs Linked",
      "Status",
      "Actions",
    ],
  };

  const tableData = {
    users: [
      {
        name: "Theresa",
        role: "Admin",
        email: "lline@yandex.com",
        siteAccess: "All",
        lastLogin: "Today 09:14",
        status: "Active",
      },
      {
        name: "Irma",
        role: "Manager",
        email: "ustil@mail.com",
        siteAccess: "Procurement",
        lastLogin: "Yesterday",
        status: "Disabled",
      },
      {
        name: "Courtney",
        role: "Storekeeper",
        email: "seema@gmail.com",
        siteAccess: "Reports",
        lastLogin: "6 days ago",
        status: "Active",
      },
      {
        name: "Jane",
        role: "Electrical",
        email: "maka@yandex.com",
        siteAccess: "All Sites",
        lastLogin: "2 week ago",
        status: "Disabled",
      },
    ],
    sites: [
      {
        site: "Warehouse A - Shelf D",
        code: "220184-H",
        manager: "Theresa",
        items: 65,
        status: "Active",
      },
      {
        site: "Warehouse C - Shelf C",
        code: "SNR-08",
        manager: "Irma",
        items: 120,
        status: "Inactive",
      },
      {
        site: "Warehouse B - Shelf B",
        code: "VAL-05",
        manager: "Courtney",
        items: 62,
        status: "Active",
      },
      {
        site: "Warehouse C - Shelf C",
        code: "PIP-02",
        manager: "Jane",
        items: 4,
        status: "Inactive",
      },
    ],
    suppliers: [
      {
        name: "Bosch",
        email: "lline@yandex.com",
        leadTime: "6 days",
        category: "Mechanical, Electrical",
        posLinked: 12,
        status: "Active",
      },
      {
        name: "Siemens",
        email: "ustil@mail.com",
        leadTime: "8 days",
        category: "Mechanical",
        posLinked: 62,
        status: "Disabled",
      },
      {
        name: "Conductix",
        email: "seema@gmail.com",
        leadTime: "2 days",
        category: "Mechanical, Electrical",
        posLinked: 4,
        status: "Active",
      },
      {
        name: "Bosch",
        email: "maka@yandex.com",
        leadTime: "7 days",
        category: "Electrical",
        posLinked: 8,
        status: "Disabled",
      },
    ],
  };

  const categoryStats = [
    { title: "Total Categories", value: 29, icon: "/category.png" },
    { title: "Total Subcategories", value: 27, icon: "/subcategory.png" },
    { title: "Items Without Category", value: 10, icon: "/uncategory.png" },
  ];
  const categoriesData = [
    {
      name: "Mechanical",
      sub: ["Bearings", "Seals"],
    },
    {
      name: "Electrical",
      sub: [],
    },
    {
      name: "Tools",
      sub: [],
    },
  ];

  const currentStats =
    activeTab === "categories"
      ? categoryStats
      : statsData[activeTab as keyof typeof statsData] || statsData.users;

  const currentHeaders =
    tableHeaders[activeTab as keyof typeof tableHeaders] || tableHeaders.users;
  const currentData =
    tableData[activeTab as keyof typeof tableData] || tableData.users;
  const tabTitle =
    activeTab === "sites"
      ? "Sites"
      : activeTab === "suppliers"
        ? "Suppliers"
        : "Users";

  // Helper Functions
  const renderStatusBadge = (status: string) => (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
    >
      {status}
    </span>
  );

  const renderCategoryTags = (category: string) => (
    <div className="flex gap-1 whitespace-nowrap">
      {category.split(",").map((cat: string, i: number) => (
        <span
          key={i}
          className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700"
        >
          {cat.trim()}
        </span>
      ))}
    </div>
  );

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

          {/* Stats Cards */}
          <div className="flex gap-4 mb-6 flex-wrap">
            {currentStats.map((item, idx) => (
              <div
                key={idx}
                className={`border border-[#EAECF0] rounded-lg p-3 bg-white
        ${activeTab === "users" ? "w-44 h-22" : "w-60 h-24"}
      `}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{item.title}</p>
                  {item.icon && (
                    <img src={item.icon} alt={item.title} className="w-7 h-7" />
                  )}
                </div>

                <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
              </div>
            ))}
          </div>

          {activeTab === "categories" && (
            <div className="space-y-3">
              {categoriesData.map((cat) => {
                const isOpen = openCategory === cat.name;

                return (
                  <div
                    key={cat.name}
                    className="border border-[#EAECF0] rounded-lg bg-white px-4 py-3"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpenCategory(isOpen ? null : cat.name)}
                    >
                      <p className="font-medium">{cat.name}</p>

                      <div className="flex items-center gap-3 text-gray-400">
                        <span>⋮</span>
                        <span>{isOpen ? <MdKeyboardArrowUp />: <FiChevronDown className="text-gray-400" />}</span>
                      </div>
                    </div>

                    {isOpen && cat.sub.length > 0 && (
                      <div className="mt-2 ml-2 text-sm text-gray-500 space-y-1">
                        {cat.sub.map((s) => (
                          <p key={s}>{s}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Table Section */}
          {activeTab !== "categories" && (
            <div className="bg-white rounded-xl p-4 shadow border border-gray-100">
              {/* Search & Filter */}
              <div className="flex justify-between mb-4 items-center border-b border-[#E6E6E9] pb-3">
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none text-sm w-64"
                  />
                </div>
                <button className="bg-gray-100 rounded-lg px-3 py-1 text-gray-500 flex items-center gap-2 text-sm">
                  Filters <FiChevronDown className="text-gray-400" />
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border border-[#E6E6E9] rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      {currentHeaders.map((head) => (
                        <th
                          key={head}
                          className="px-4 py-3 text-left text-gray-500 font-medium"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {currentData.map((row, idx) => (
                      <tr key={idx} className="text-sm hover:bg-gray-50">
                        {activeTab === "users" && (
                          <>
                            <td className="px-3 py-4 font-medium text-gray-800">
                              {(row as UserData).name}
                            </td>
                            <td className="px-3 py-4 text-gray-600">
                              {(row as UserData).role}
                            </td>
                            <td className="px-3 py-4 text-gray-600">
                              {(row as UserData).email}
                            </td>
                            <td className="px-3 py-4 text-gray-600">
                              {(row as UserData).siteAccess}
                            </td>
                            <td className="px-3 py-4 text-gray-600 whitespace-nowrap">
                              {(row as UserData).lastLogin}
                            </td>
                            <td className="px-3 py-4">
                              {renderStatusBadge((row as UserData).status)}
                            </td>
                          </>
                        )}
                        {activeTab === "sites" && (
                          <>
                            <td className="px-4 py-4 font-medium text-gray-800">
                              {(row as SiteData).site}
                            </td>
                            <td className="px-4 py-4 text-gray-600">
                              {(row as SiteData).code}
                            </td>
                            <td className="px-4 py-4 text-gray-600">
                              {(row as SiteData).manager}
                            </td>
                            <td className="px-4 py-4 text-gray-600">
                              {(row as SiteData).items}
                            </td>
                            <td className="px-4 py-4">
                              {renderStatusBadge((row as SiteData).status)}
                            </td>
                          </>
                        )}
                        {activeTab === "suppliers" && (
                          <>
                            <td className="px-2 py-3 font-medium text-gray-800">
                              {(row as SupplierData).name}
                            </td>
                            <td className="px-2 py-3 text-gray-600">
                              {(row as SupplierData).email}
                            </td>
                            <td className="px-2 py-3 text-gray-600">
                              {(row as SupplierData).leadTime}
                            </td>
                            <td className="px-2 py-3">
                              {renderCategoryTags(
                                (row as SupplierData).category,
                              )}
                            </td>
                            <td className="px-2 py-3 text-gray-600">
                              {(row as SupplierData).posLinked}
                            </td>
                            <td className="px-2 py-3">
                              {renderStatusBadge((row as SupplierData).status)}
                            </td>
                          </>
                        )}
                        <td className="px-4 py-3">
                          <button className="text-gray-500 hover:text-gray-700">
                            ⋮
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-1 hover:bg-gray-50 disabled:opacity-50"
                >
                  <IoArrowBackOutline /> Previous
                </button>
                <div className="flex items-center gap-4">
                  <span>Page {page} of 10</span>
                  <select
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-2 py-1 text-sm"
                  >
                    {[10, 24, 50].map((num) => (
                      <option key={num} value={num}>
                        {num} per page
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === 10}
                  className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-1 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next <IoArrowForward />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manage;
