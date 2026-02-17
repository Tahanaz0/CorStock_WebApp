"use client";

import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { UserData, StatItem } from "../manageData";

interface UsersTabProps {
  stats: StatItem[];
  data: UserData[];
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
  onActionMenuClick?: (
    rowData: UserData,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
}

const renderStatusBadge = (status: string) => (
  <span
    className={`px-2 py-1 rounded-full text-[10px] xs:text-xs font-medium inline-block whitespace-nowrap ${
      status === "Active"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {status}
  </span>
);

export default function UsersTab({
  stats,
  data,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onActionMenuClick,
}: UsersTabProps) {
  const headers = [
    "Name",
    "Role",
    "Email",
    "Site Access",
    "Last Login",
    "Status",
    "Actions",
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Stats Cards */}
      <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#EAECF0] rounded-lg p-2 sm:p-3 bg-white 
              w-[calc(50%-0.75rem)] sm:w-40 md:w-44 min-w-[140px] sm:min-w-0 flex-1"
          >
            <div className="flex justify-between items-center gap-1">
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 break-words">
                {item.title}
              </p>
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0"
                />
              )}
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mt-1 break-words">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl p-3 sm:p-4 shadow border border-gray-100 w-full">
        {/* Search & Filter - Responsive */}
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

        {/* Table - Horizontal Scroll on Mobile */}
        <div className="overflow-x-auto border border-[#E6E6E9] rounded-lg w-full">
          <table className="min-w-[800px] md:min-w-full w-full divide-y divide-gray-200 text-xs sm:text-sm">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((head) => (
                  <th
                    key={head}
                    className="px-2 sm:px-4 py-2 sm:py-3 text-left text-gray-500 font-medium text-[11px] xs:text-xs sm:text-sm whitespace-nowrap"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, idx) => (
                <tr key={idx} className="text-xs sm:text-sm hover:bg-gray-50">
                  <td className="px-2 sm:px-3 py-3 sm:py-4 font-medium text-gray-800 break-words max-w-[120px] sm:max-w-none">
                    <span
                      className="block truncate sm:whitespace-normal"
                      title={row.name}
                    >
                      {row.name}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-3 sm:py-4 text-gray-600 break-words max-w-[100px] sm:max-w-none">
                    <span
                      className="block truncate sm:whitespace-normal"
                      title={row.role}
                    >
                      {row.role}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-3 sm:py-4 text-gray-600 break-words max-w-[150px] sm:max-w-none">
                    <span
                      className="block truncate sm:whitespace-normal"
                      title={row.email}
                    >
                      {row.email}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-3 sm:py-4 text-gray-600 break-words max-w-[120px] sm:max-w-none">
                    <span
                      className="block truncate sm:whitespace-normal"
                      title={row.siteAccess}
                    >
                      {row.siteAccess}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-3 sm:py-4 text-gray-600 whitespace-nowrap text-[11px] xs:text-xs">
                    {row.lastLogin}
                  </td>
                  <td className="px-2 sm:px-3 py-3 sm:py-4">
                    {renderStatusBadge(row.status)}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-3">
                    <button
                      onClick={(e) => onActionMenuClick?.(row, e)}
                      className="text-gray-500 hover:text-gray-700 text-lg sm:text-xl p-1"
                    >
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - Responsive */}
       <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-200 text-gray-500 text-sm gap-4 sm:gap-0">
  
  <button
    className="flex items-center justify-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-2 hover:bg-gray-50 w-full sm:w-auto"
    onClick={() => onPageChange(Math.max(1, page - 1))}
  >
    <IoArrowBackOutline className="w-4 h-4" />
    <span>Previous</span>
  </button>
  
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
    <span className="text-sm whitespace-nowrap">Page {page} of 10</span>
    <select
      value={rowsPerPage}
      onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
      className="text-sm px-2 py-1 bg-white"
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
    className="flex items-center justify-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-2 hover:bg-gray-50 w-full sm:w-auto"
  >
    <span>Next</span>
    <IoArrowForward className="w-4 h-4" />
  </button>
</div>
      </div>
    </div>
  );
}
