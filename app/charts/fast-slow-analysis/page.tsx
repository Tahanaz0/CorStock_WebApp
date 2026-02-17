"use client";

import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

const progressData = [
  { label: "Fast Movers", value: 118, color: "bg-green-500" },
  { label: "Medium", value: 194, color: "bg-orange-500" },
  { label: "Slow", value: 12, color: "bg-gray-600" },
  { label: "Dead Stock", value: 65, color: "bg-red-500" },
];

const tableData = [
  {
    item: "Bearing 6204 ZZ",
    sku: "220184-H",
    category: ["Mechanical", "Electrical"],
    totalStock: 123,
    minLevel: 123,
    stockValue: "£1,265",
    status: "Low",
  },
  {
    item: "Seal Ring Type-B",
    sku: "SNR-08",
    category: ["Mechanical"],
    totalStock: 65,
    minLevel: 65,
    stockValue: "£1,650",
    status: "OK",
  },
  {
    item: "Oil Filter — Type B",
    sku: "VAL-05",
    category: ["Mechanical", "Electrical"],
    totalStock: 98,
    minLevel: 98,
    stockValue: "£2,40",
    status: "Out",
  },
  {
    item: "Hydraulic Hose 12mm",
    sku: "220184-H",
    category: ["Electrical"],
    totalStock: 126,
    minLevel: 126,
    stockValue: "£640",
    status: "Low",
  },
];

const statusColors: Record<string, string> = {
  Low: "bg-purple-200 text-purple-700",
  OK: "bg-green-200 text-green-700",
  Out: "bg-red-200 text-red-700",
};

export default function FastVsSlowMover() {
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const [page, setPage] = useState(1);

  const onPageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(tableData.length / rowsPerPage)) {
      setPage(newPage);
    }
  };

  const onRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setPage(1);
  };

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  return (
    <div className="space-y-4 sm:space-y-6 pt-2 bg-gray-50 p-3 sm:p-4">
      {/* -------- Progress Bars -------- */}
      <div className="bg-white rounded-xl p-3 sm:p-4 shadow space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2">
          <h2 className="font-semibold text-gray-700 text-sm md:text-base lg:text-lg">
            Fast vs Slow Movers
          </h2>
          <button className="relative bg-gray-100 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 text-gray-500 flex items-center gap-2 text-xs sm:text-sm md:text-base w-full sm:w-auto">
            This Week
            <FiChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {progressData.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500 text-xs sm:text-sm">{item.label}</span>
                <span className="text-gray-500 text-xs sm:text-sm">{item.value}</span>
              </div>
              <div className="flex-1 h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-2 sm:h-3 rounded-full`}
                  style={{ width: `${Math.min(item.value, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------- Table -------- */}
      <div className="bg-white rounded-xl p-3 sm:p-4 shadow">
        {/* Table Header with search & filter */}
        <div className="flex flex-col sm:flex-row justify-between mb-4 items-start sm:items-center border-b border-[#E6E6E9] pb-3 gap-3 sm:gap-0">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 w-full sm:w-auto">
            <FiSearch className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none py-1.5 sm:py-1 text-sm w-full sm:w-[200px] md:w-[250px]"
            />
          </div>

          <button className="relative border border-[#E6E6E9] rounded-lg px-3 sm:px-2 py-1.5 sm:py-1 pr-8 sm:pr-6 text-gray-500 flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start">
            Filters
            <FiChevronDown className="absolute right-3 sm:right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </button>
        </div>

        {/* Table - Horizontal scroll on mobile */}
        <div className="overflow-x-auto border border-[#E6E6E9] rounded-lg">
          <table className="min-w-[800px] sm:min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
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
                    className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-3 sm:px-4 py-3 sm:py-5 text-xs sm:text-sm whitespace-nowrap">{row.item}</td>
                  <td className="px-3 sm:px-4 py-3 sm:py-5 text-xs sm:text-sm whitespace-nowrap">{row.sku}</td>
                  <td className="px-3 sm:px-4 py-3 sm:py-5">
                    <div className="flex gap-1 flex-wrap">
                      {row.category.map((cat) => (
                        <span
                          key={cat}
                          className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs whitespace-nowrap"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-5 text-xs sm:text-sm whitespace-nowrap">{row.totalStock}</td>
                  <td className="px-3 sm:px-4 py-3 sm:py-5 text-xs sm:text-sm whitespace-nowrap">{row.minLevel}</td>
                  <td className="px-3 sm:px-4 py-3 sm:py-5 text-xs sm:text-sm whitespace-nowrap">{row.stockValue}</td>
                  <td className="px-3 sm:px-4 py-3 sm:py-5">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap ${
                        statusColors[row.status] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 border-t border-gray-200 text-gray-500 text-sm gap-4 sm:gap-0">
          <button
            className="flex items-center justify-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-2 hover:bg-gray-50 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
          >
            <IoArrowBackOutline className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm whitespace-nowrap">Page {page} of {totalPages || 1}</span>
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
              className="text-xs sm:text-sm px-2 py-1 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF8A3D] w-full sm:w-auto"
            >
              {[10, 24, 50].map((num) => (
                <option key={num} value={num}>
                  Row per page: {num}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => onPageChange(page + 1)}
            className="flex items-center justify-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-2 hover:bg-gray-50 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={page === totalPages || totalPages === 0}
          >
            <span>Next</span>
            <IoArrowForward className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}