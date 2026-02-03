"use client";

import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

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

  return (
    <div className="space-y-6 pt-2 bg-gray-50">
      {/* -------- Progress Bars -------- */}
      <div className="bg-white rounded-xl p-4 shadow space-y-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-700 text-sm">
            Fast vs Slow Movers
          </h2>
          <button className="relative bg-gray-100 rounded-lg px-2 pr-6 text-gray-500 flex items-center gap-2 text-sm">
            This Week
            <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </button>
        </div>

        <div className="space-y-3">
          {progressData.map((item) => (
            <div key={item.label} className=" items-center gap-4">
              <div className="flex justify-between items-center mb-1">
                <span className="w-25 text-gray-500 text-sm">{item.label}</span>
                <span className="w-10 text-right text-gray-500 text-sm left-0">
                  {item.value}
                </span>
              </div>
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-3 rounded-full`}
                  style={{ width: `${Math.min(item.value, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------- Table -------- */}
      <div className="bg-white rounded-xl p-4 shadow">
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
                <tr key={idx}>
                  <td className="px-4 py-5 ">{row.item}</td>
                  <td className="px-4 py-5">{row.sku}</td>
                  <td className="px-4 py-5 flex gap-1 flex-wrap">
                    {row.category.map((cat) => (
                      <span
                        key={cat}
                        className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs"
                      >
                        {cat}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-2">{row.totalStock}</td>
                  <td className="px-4 py-2">{row.minLevel}</td>
                  <td className="px-4 py-2">{row.stockValue}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        statusColors[row.status]
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
  );
}
