"use client";

import React from "react";
// import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import AddUser from "../add-user/page";
import { useRouter } from "next/navigation";

const Manage = () => {
  const [activeTab, setActiveTab] = React.useState("users");
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const tabs = [
    { id: "users", label: "Users" },
    { id: "sites", label: "Sites" },
    { id: "suppliers", label: "Suppliers" },
    { id: "categories", label: "Categories" },
    { id: "tags", label: "Tags" },
    { id: "system", label: "System Settings" },
    { id: "templates", label: "Templates" },
    { id: "audit", label: "Audit Logs" },
  ];
  const userStats = [
    {
      title: "Total Users",
      value: 446,
      icon: "/user.png",
    },
    {
      title: "Active Users",
      value: 46,
      icon: "/active.png",
    },
    {
      title: "Pending Invites",
      value: 12,
      icon: "/pending.png",
    },
    {
      title: "Disabled Accounts",
      value: 20,
      icon: "/disable.png",
    },
  ];
  const tableData = [
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
  ];

  const statusColors: Record<string, string> = {
    Low: "bg-purple-200 text-purple-700",
    OK: "bg-green-200 text-green-700",
    Out: "bg-red-200 text-red-700",
  };

  return (
    <>
      <div className="bg-[#F4F3F3] min-h-screen p-3 font-sans">
        <div className="flex justify-between items-center  p-3 ">
          <div>
            <h2 className="text-2xl font-semibold">Manage</h2>
            <p className="text-gray-500 text-sm">
              Configure CoreStock system settings, users, sites, suppliers,
              metadata, and platform behaviour.{" "}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/add-user")}
              className="bg-[#FF8A3D] px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D] flex items-center gap-2"
            >
              <img src="/plus.png" alt="print" className="w-3 h-3" />
              Add New
            </button>

            <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <img src="/export.png" alt="export" className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex gap-3 p-3 rounded-lg ">
          <div className="w-40 border border-[#EEF2F6] rounded-lg mb-6 bg-white">
            <ul className="flex flex-col gap-1 p-2 bg-[#FCFCFD] rounded-lg">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition
              ${
                activeTab === tab.id
                  ? "bg-[#FF8A3D] "
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }
            `}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white flex-1 rounded-lg p-2  ">
            <h1>User</h1>
            <div className="flex gap-4 flex-wrap">
              {userStats.map((item, index) => (
                <div
                  key={index}
                  className="w-44 h-22 border border-[#EAECF0] rounded-lg p-3 bg-white"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <img src={item.icon} alt={item.title} className="w-7 h-7" />
                  </div>

                  <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
                </div>
              ))}
              <div className="bg-white rounded-xl p-4 mt-5 shadow">
                {/* Table Header with search & filter */}
                <div className="flex justify-between mb-4 items-center border-b border-[#E6E6E9] pb-3 -mx-2">
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3">
                    <FiSearch className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="outline-none py-1 text-sm"
                    />
                  </div>
                  <button className="relative bg-gray-100 rounded-lg px-2 pr-6 text-gray-500 flex items-center gap-2 text-sm">
                    Filters
                    <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  </button>
                </div>

                <div className="overflow-x-auto border-t-gray-200 border border-[#E6E6E9] rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 text-sm ">
                    <thead className="bg-gray-50   ">
                      <tr>
                        {[
                          "Item",
                          "SKU",
                          "Category",
                          "Total Stock",
                          "Min Level",
                          "Stock Value",
                          "Status",
                        ].map((head) => (
                          <th
                            key={head}
                            className="px-4 py-2 text-left text-gray-500 font-medium"
                          >
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {tableData.map((row, idx) => (
                        <tr key={idx} className="text-sm">
                          <td className="px-4 py-4 font-medium text-gray-800">
                            {row.name}
                          </td>

                          <td className="px-4 py-4 text-gray-600">
                            {row.role}
                          </td>

                          <td className="px-4 py-4 text-gray-600">
                            {row.email}
                          </td>

                          <td className="px-4 py-4">
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                              {row.siteAccess}
                            </span>
                          </td>

                          <td className="px-4 py-4 text-gray-500">
                            {row.lastLogin}
                          </td>

                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                row.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>

                          <td className="px-4 py-4 text-right">
                            <button className="text-gray-400 hover:text-gray-600">
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
                    className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-2 py-1"
                    onClick={() => setPage(Math.max(1, page - 1))}
                  >
                    <IoArrowBackOutline />
                    Previous
                  </button>
                  <div className="flex items-center gap-4">
                    <span>Page {page} of 10</span>
                    <select
                      value={rowsPerPage}
                      onChange={(e) => setRowsPerPage(Number(e.target.value))}
                      className=" text-sm"
                    >
                      {[10, 24, 50].map((num) => (
                        <option key={num} value={num}>
                          Row per page:
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPage(page + 1)}
                      className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-2 py-1"
                    >
                      Next <IoArrowForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage;
