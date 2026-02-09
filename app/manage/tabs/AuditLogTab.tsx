"use client";

import { FiSearch } from "react-icons/fi";
import { StatItem } from "../manageData";

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
}

export default function AuditLogTab({
  stats,
  data,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
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
        <div className="flex justify-between items-center p-4 mb-8 border-b border-[#EEF2F6]  -mx-4">
          <div className="flex gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search audit logs"
                className="pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/20 focus:border-[#FF8A3D] w-64"
              />
            </div>
          </div>

          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm hover:bg-gray-50 transition">
            Filters
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Table - WIDER COLUMNS FOR FULL TEXT */}
        <div className="bg-white border border-[#EEF2F6] rounded-xl overflow-hidden">
          {/* Table Header - BETTER SPACING */}
          <div className="grid grid-cols-12 bg-[#F9FAFB] text-gray-600 text-sm font-semibold px-6 py-4 border-b border-[#EEF2F6] gap-4">
            <div className="col-span-3 whitespace-nowrap min-w-0">Date & Time</div>
            <div className="col-span-2 whitespace-nowrap min-w-0">User</div>
            <div className="col-span-2 whitespace-nowrap min-w-0">Change Type</div>
            <div className="col-span-2 whitespace-nowrap min-w-0">Entity</div>
            <div className="col-span-1 text-center whitespace-nowrap min-w-0">Before</div>
            <div className="col-span-1 text-center whitespace-nowrap min-w-0">After</div>
            <div className="col-span-1 text-right whitespace-nowrap min-w-0">Actions</div>
          </div>

          {/* Table Body - NO CUTTING, NO ELLIPSIS, NO LINE BREAK */}
          <div className="divide-y divide-[#EEF2F6]">
            {data.map((item, index) => (
              <div key={index} className="grid grid-cols-12 px-6 py-4 hover:bg-gray-50 transition items-center gap-4">
                {/* Date & Time - FULL TEXT, NO CUTTING */}
                <div className="col-span-3 pr-4 min-w-0">
                  <span className="text-gray-800 text-sm font-medium whitespace-nowrap">
                    {item.dateTime}
                  </span>
                </div>

                {/* User - FULL TEXT, NO CUTTING */}
                <div className="col-span-2 pr-4 min-w-0">
                  <span className="text-gray-700 text-sm whitespace-nowrap">
                    {item.user}
                  </span>
                </div>

                {/* Change Type - FULL TEXT, NO CUTTING */}
                <div className="col-span-2 pr-4 min-w-0">
                  <span className="text-gray-700 text-sm whitespace-nowrap">
                    {item.changeType}
                  </span>
                </div>

                {/* Entity - FULL TEXT, NO CUTTING */}
                <div className="col-span-2 pr-4 min-w-0">
                  <span className="text-gray-700 text-sm whitespace-nowrap">
                    {item.entity}
                  </span>
                </div>

                {/* Before - Single line, centered */}
                <div className="col-span-1 flex items-center justify-center min-w-0">
                  <span className="text-gray-800 px-3 py-1.5  whitespace-nowrap ">
                    {item.before}
                  </span>
                </div>

                {/* After - Single line, centered */}
                <div className="col-span-1 flex items-center justify-center min-w-0">
                  <span className="text-gray-800 px-3 py-1.5  whitespace-nowrap ">
                    {item.after}
                  </span>
                </div>

                {/* Actions - Single line */}
                <div className="col-span-1 flex items-center justify-end min-w-0">
                  <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded transition whitespace-nowrap">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>


          {/* Pagination */}

        </div>
        <div className="flex justify-between items-center px-6 py-4 text-sm ">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="border border-gray-300 px-5 py-2.5 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition whitespace-nowrap"
          >
            Previous
          </button>

          <div className="flex items-center gap-6 text-gray-700 text-sm whitespace-nowrap">
            <span className="font-medium">Page {page} of {Math.ceil(data.length / rowsPerPage)}</span>
            <span className="flex items-center gap-2 font-medium">
              Rows per page:
              <select
                value={rowsPerPage}
                onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                className="px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/20 focus:border-[#FF8A3D] text-sm whitespace-nowrap"
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </span>
          </div>

          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page >= Math.ceil(data.length / rowsPerPage)}
            className="border border-gray-300 px-5 py-2.5 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition whitespace-nowrap"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}