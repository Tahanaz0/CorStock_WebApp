"use client";

import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { SiteData, StatItem } from "../manageData";

interface SitesTabProps {
  stats: StatItem[];
  data: SiteData[];
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

const renderStatusBadge = (status: string) => (
  <span
    className={`px-2 py-1 rounded-full text-xs font-medium ${
      status === "Active"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {status}
  </span>
);

export default function SitesTab({
  stats,
  data,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: SitesTabProps) {
  const headers = ["Site", "Code", "Manager", "Items", "Status", "Actions"];

  return (
    <>
      {/* Stats Cards */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#EAECF0] rounded-lg p-3 bg-white w-60 h-24"
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

      {/* Table Section */}
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
                {headers.map((head) => (
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
              {data.map((row, idx) => (
                <tr key={idx} className="text-sm hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-800">
                    {row.site}
                  </td>
                  <td className="px-4 py-4 text-gray-600">{row.code}</td>
                  <td className="px-4 py-4 text-gray-600">{row.manager}</td>
                  <td className="px-4 py-4 text-gray-600">{row.items}</td>
                  <td className="px-4 py-4">{renderStatusBadge(row.status)}</td>
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
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-1 hover:bg-gray-50 disabled:opacity-50"
          >
            <IoArrowBackOutline /> Previous
          </button>
          <div className="flex items-center gap-4">
            <span>Page {page} of 10</span>
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
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
            onClick={() => onPageChange(page + 1)}
            disabled={page === 10}
            className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-1 hover:bg-gray-50 disabled:opacity-50"
          >
            Next <IoArrowForward />
          </button>
        </div>
      </div>
    </>
  );
}

