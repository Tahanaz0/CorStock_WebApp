"use client";

import { FiSearch } from "react-icons/fi";
import { StatItem } from "../manageData";
import { FiChevronDown } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

interface AuditLogTabProps {
  stats: StatItem[];
  data: Array<{
    dateTime: string;
    user: string;
    changeType: string;
    entity: string;
    before: string;
    after: string;
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

export default function AuditLogTab({
  stats,
  data,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onActionMenuClick,
}: AuditLogTabProps) {
  return (
    <div>
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

      {/* Separator Line */}
      <div className="border border-[#EEF2F6] rounded-lg p-4 shadow border border-gray-100 mb-6">
        {/* Search + Filters */}
        {/* <div className="flex justify-between items-center p-4 mb-8 border-b border-[#EEF2F6]  -mx-4"> */}
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

        {/* <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm hover:bg-gray-50 transition">
            Filters
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button> */}
        {/* </div>d m,opc6y5 v */}

        {/* Table - WIDER COLUMNS FOR FULL TEXT */}
       <div className="bg-white border border-[#EEF2F6] rounded-xl overflow-hidden">
  {/* Table Container with Scroll */}
  <div className="overflow-x-auto">
    {/* Header - with same min-width as body */}
    <div className="grid grid-cols-12 bg-[#F9FAFB] text-gray-600 text-sm font-semibold px-6 py-4 border-b border-[#EEF2F6] gap-4 min-w-[900px]">
      <div className="col-span-3 whitespace-nowrap">Date & Time</div>
      <div className="col-span-2 whitespace-nowrap">User</div>
      <div className="col-span-2 whitespace-nowrap">Change Type</div>
      <div className="col-span-2 whitespace-nowrap">Entity</div>
      <div className="col-span-1 text-center whitespace-nowrap">Before</div>
      <div className="col-span-1 text-center whitespace-nowrap">After</div>
      <div className="col-span-1 text-right whitespace-nowrap">Actions</div>
    </div>

    {/* Body - with same min-width */}
    <div className="min-w-[900px] divide-y divide-[#EEF2F6]">
      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-12 px-6 py-4 hover:bg-gray-50 transition items-center gap-4"
        >
          <div className="col-span-3 pr-4">
            <span className="text-gray-800 text-sm font-medium whitespace-nowrap">
              {item.dateTime}
            </span>
          </div>

          <div className="col-span-2 pr-4">
            <span className="text-gray-700 text-sm whitespace-nowrap">
              {item.user}
            </span>
          </div>

          <div className="col-span-2 pr-4">
            <span className="text-gray-700 text-sm whitespace-nowrap">
              {item.changeType}
            </span>
          </div>

          <div className="col-span-2 pr-4">
            <span className="text-gray-700 text-sm whitespace-nowrap">
              {item.entity}
            </span>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <span className="text-gray-800 px-3 py-1.5 whitespace-nowrap">
              {item.before}
            </span>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <span className="text-gray-800 px-3 py-1.5 whitespace-nowrap">
              {item.after}
            </span>
          </div>

          <div className="col-span-1 flex items-center justify-end">
            <button
              onClick={(e) => onActionMenuClick?.(item, e)}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
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
    </div>
  );
}
