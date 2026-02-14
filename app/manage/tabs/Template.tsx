"use client";

import { FiMoreVertical } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

interface TemplatesTabProps {
  stats: any[];
  data: Array<{
    name: string;
    size: string;
    type: string;
    updated: string;
  }>;
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
  onActionMenuClick?: (rowData: any, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TemplatesTab({
  data,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onActionMenuClick,
}: TemplatesTabProps) {
  return (
    <div className="p-4 border border-[#E6E6E9] rounded-lg">
      {/* Search bar and filters */}
      <div className="flex items-center justify-between mb-6 border-b border-[#E6E6E9] p-3 pt-0 -mx-4">
        <div className="flex items-center w-full justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none w-64"
            />
          </div>
          <button className="flex items-center gap-1 border border-gray-300 rounded-lg px-4 py-2 text-sm">
            Filters
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden ">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-gray-50 text-gray-600 text-sm font-medium px-6 py-3 border-b border-gray-200">
          <div className="col-span-5">File Name</div>
          <div className="col-span-3">Type</div>
          <div className="col-span-3">Last Updated</div>
          <div className="col-span-1"></div>
        </div>

        {/* Table Body */}
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 px-6 py-4 border-b border-gray-100 hover:bg-gray-50"
          >
            {/* File Name with PDF icon */}
            <div className="col-span-5">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <img
                    src="/pdf-icon.png"
                    alt="PDF"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div>
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {item.size}
                  </div>
                </div>
              </div>
            </div>

            {/* Type */}
            <div className="col-span-3 flex items-center">
              <span className="text-gray-700">{item.type}</span>
            </div>

            {/* Last Updated */}
            <div className="col-span-3 flex items-center">
              <span className="text-gray-700">{item.updated}</span>
            </div>

            {/* Actions */}
            <div className="col-span-1 flex items-center justify-end">
              <button
                onClick={(e) => onActionMenuClick?.(item, e)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FiMoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
              <button
                className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-2 py-1"
                onClick={() => onPageChange(Math.max(1, page - 1))}
              >
                <IoArrowBackOutline />
                Previous
              </button>
              <div className="flex items-center gap-4">
                <span>Page {page} of 10</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
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
                  onClick={() => onPageChange(page + 1)}
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
