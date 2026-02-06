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
      {/* Stats Cards - Horizontal layout */}
      <div className="flex gap-3 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-[#EEF2F6] rounded-lg p-4 flex-1"
          >
            <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-200 mb-6"></div>

      {/* Search + Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search audit logs"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/20 w-64"
            />
          </div>
        </div>
        
        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
          Filters
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#EEF2F6] rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-[#F9FAFB] text-gray-500 text-sm font-medium px-6 py-3 border-b border-[#EEF2F6]">
          <div className="col-span-2">Date & Time</div>
          <div className="col-span-2">User</div>
          <div className="col-span-2">Change Type</div>
          <div className="col-span-2">Entity</div>
          <div className="col-span-1 text-center">Before</div>
          <div className="col-span-1 text-center">After</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[#EEF2F6]">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-12 px-2 py-4 hover:bg-gray-50 transition">
              {/* Date & Time */}
              <div className="col-span-2">
                <span className="text-gray-700 text-sm">{item.dateTime}</span>
              </div>

              {/* User */}
              <div className="col-span-2">
                <span className="text-gray-700 text-sm">{item.user}</span>
              </div>

              {/* Change Type */}
              <div className="col-span-2">
                <span className="text-gray-700 text-sm">{item.changeType}</span>
              </div>

              {/* Entity */}
              <div className="col-span-2">
                <span className="text-gray-700 text-sm">{item.entity}</span>
              </div>

              {/* Before */}
              <div className="col-span-1 flex items-center justify-center">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  {item.before}
                </span>
              </div>

              {/* After */}
              <div className="col-span-1 flex items-center justify-center">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  {item.after}
                </span>
              </div>

              {/* Actions */}
              <div className="col-span-2 flex items-center justify-end gap-2">
               
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 text-sm border-t border-[#EEF2F6]">
          <button 
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Previous
          </button>

          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>Page {page} of {Math.ceil(data.length / rowsPerPage)}</span>
            <span className="flex items-center gap-1">
              Rows per page: 
              <select 
                value={rowsPerPage}
                onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 ml-1 focus:outline-none text-sm"
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
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}