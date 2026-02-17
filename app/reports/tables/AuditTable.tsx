"use client";

import React, { useState } from "react";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

interface AuditRow {
  id: string;
  date: string;
  type: string;
  description: string;
  warehouse: string;
  adjustmentQty: number;
  reason: "Damage" | "Loss" | "Discrepancy" | "Expired" | "Other";
  approvedBy: string;
}

const AuditTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const auditTableData = [
    {
      id: "1",
      dateTime: "02 Dec 2023, 19:00",
      user: "Jane Cooper",
      changeType: "Min Stock Change",
      summary: "Bolt M10",
      before: 3,
      after: 3,
    },
    {
      id: "2",
      dateTime: "22 Dec 2023, 11:40",
      user: "Eleanor Pena",
      changeType: "Status Change",
      summary: "PPE Gloves Small",
      before: 3,
      after: 3,
    },
    {
      id: "3",
      dateTime: "23 Dec 2023, 17:20",
      user: "Jerome Bell",
      changeType: "Stock Adjustment",
      summary: "Grinding Disc",
      before: 6,
      after: 6,
    },
    {
      id: "4",
      dateTime: "30 Dec 2023, 10:04",
      user: "Brooklyn Simmons",
      changeType: "Min Stock Change",
      summary: "Bolt M10",
      before: 9,
      after: 9,
    },
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getReasonColor = (reason: string) => {
    switch (reason) {
      case "Damage":
        return "#EF4444";
      case "Loss":
        return "#F97316";
      case "Discrepancy":
        return "#4F46E5";
      case "Expired":
        return "#8B5CF6";
      case "Other":
        return "#6B7280";
      default:
        return "#000";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Stock Adjustment":
        return "#4F46E5";
      case "Over-delivery":
        return "#16A34A";
      case "Damage Report":
        return "#EF4444";
      case "Unmatched PO":
        return "#F97316";
      default:
        return "#000";
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mt-3 border border-[#E6E6E9]">
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-start sm:items-center border-b border-[#E6E6E9] pb-3 -mx-2 px-2 sm:px-0 gap-3 sm:gap-0">
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

      {/* Table */}
      <div className="border-b border-[#E6E6E9]  -mx-4"></div>
      <div className="overflow-hidden rounded-lg border border-[#E6E6E9] mt-4">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Date & Time</th>
              <th className="px-4 py-3 text-left font-medium">User</th>
              <th className="px-4 py-3 text-left font-medium">Change Type</th>
              <th className="px-4 py-3 text-left font-medium">Summary</th>
              <th className="px-4 py-3 text-left font-medium ">Before</th>
              <th className="px-4 py-3 text-left font-medium">After</th>
            </tr>
          </thead>

          <tbody>
            {auditTableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E6E6E9] hover:bg-gray-50"
                >
                  <td className="px-4 py-4">{row.dateTime}</td>
                  <td className="px-4 py-4">{row.user}</td>

                  <td className="px-4 py-4 ">{row.changeType}</td>

                  <td className="px-4 py-4">{row.summary}</td>

                  <td className="px-4 py-4  text-center">{row.before}</td>
                  <td className="px-4 py-4 text-center">{row.after}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

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
  );
};

export default AuditTable;
