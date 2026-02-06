"use client";

import { FiMoreVertical } from "react-icons/fi";

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
}

export default function TemplatesTab({
    data,
    page,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                    <div key={index} className="grid grid-cols-12 px-6 py-4 border-b border-gray-100 hover:bg-gray-50">
                        {/* File Name with PDF icon */}
                        <div className="col-span-5">
                            <div className="flex items-start">
                                <div className="text-red-500 mr-3 mt-0.5">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">{item.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{item.size}</div>
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
                            <button className="text-gray-400 hover:text-gray-600">
                                <FiMoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <div className="flex justify-between items-center px-6 py-4">
                    <button
                        onClick={() => onPageChange(page - 1)}
                        disabled={page === 1}
                        className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Page {page} of {Math.ceil(data.length / rowsPerPage)}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">Rows per page:</span>
                            <select
                                value={rowsPerPage}
                                onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                                className="border border-gray-300 rounded px-2 py-1"
                            >
                                <option value={12}>12</option>
                                <option value={24}>24</option>
                                <option value={48}>48</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={() => onPageChange(page + 1)}
                        disabled={page >= Math.ceil(data.length / rowsPerPage)}
                        className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 disabled:opacity-50"
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
}