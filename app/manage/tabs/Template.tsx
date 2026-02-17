"use client";

import { FiMoreVertical } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { FiSearch, FiChevronDown } from "react-icons/fi";

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
  onActionMenuClick?: (
    rowData: any,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
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
    <div className="border border-gray-200 rounded-lg overflow-hidden w-full">
  {/* Horizontal Scroll Wrapper - Sirf table ke liye */}
  <div className="w-full overflow-x-auto">
    {/* Table - Ab yeh kabhi shrink nahi hoga */}
    <div className="min-w-[800px]">
      {/* Table Header */}
      <div className="grid grid-cols-12 bg-gray-50 text-gray-600 text-sm font-medium px-6 py-3 border-b border-gray-200">
        <div className="col-span-4">File Name</div>
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
          <div className="col-span-4">
            <div className="flex items-start">
              <div className="mr-3 mt-0.5 flex-shrink-0">
                <img
                  src="/pdf-icon.png"
                  alt="PDF"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900 text-sm">
                  {item.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {item.size}
                </div>
              </div>
            </div>
          </div>

          {/* Type */}
          <div className="col-span-3 flex items-center">
            <span className="text-gray-700 text-sm">{item.type}</span>
          </div>

          {/* Last Updated */}
          <div className="col-span-3 flex items-center">
            <span className="text-gray-700 text-sm whitespace-nowrap">
              {item.updated}
            </span>
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
    </div>
  </div>

  {/* Pagination - Yeh scroll se bahar rahega */}
  <div className="flex justify-between items-center p-4 border-t border-gray-200 text-gray-500 text-sm">
    <button
      className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-2 hover:bg-gray-50"
      onClick={() => onPageChange(Math.max(1, page - 1))}
    >
      <IoArrowBackOutline className="w-4 h-4" />
      <span>Previous</span>
    </button>
    
    <div className="flex items-center gap-4">
      <span className="text-sm whitespace-nowrap">Page {page} of 10</span>
      <select
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        className="text-sm  px-2 py-1 bg-white"
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
      className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-2 hover:bg-gray-50"
    >
      <span>Next</span>
      <IoArrowForward className="w-4 h-4" />
    </button>
  </div>
</div>
    </div>
  );
}
