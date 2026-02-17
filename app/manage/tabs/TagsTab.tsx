"use client";

import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { TagData, StatItem } from "../manageData";

interface TagsTabProps {
  stats: StatItem[];
  data: TagData[];
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
  onActionMenuClick?: (rowData: TagData, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TagsTab({
  stats,
  data,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onActionMenuClick,
}: TagsTabProps) {
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
            </div>
            <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl p-4 shadow border border-gray-100">
        {/* Search & Filter */}
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

        {/* Tags Table */}
        <div className="overflow-x-auto border border-[#E6E6E9] rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Tag
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Colour
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Usage Count
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((tag) => (
                <tr key={tag.tag} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-800">
                    {tag.tag}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block w-3 h-3 rounded-sm ${tag.colourClass}`}
                      />
                      <span className="text-gray-700 text-sm">
                        {tag.colourName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    {tag.usageCount}
                  </td>
                  <td className="px-10 py-4">
                    <button
                      onClick={(e) => onActionMenuClick?.(tag, e)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
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
    </>
  );
}

