"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiArrowSmDown, HiArrowSmUp, HiSwitchHorizontal } from "react-icons/hi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import {FiChevronDown} from "react-icons/fi";

type InventoryRecord = {
  date: string;
  item: string;
  site: string;
  type: "Book In" | "Book Out" | "Transfer";
  quantity: number;
  reference: string;
  performedBy: string;
};

const data: InventoryRecord[] = [
  {
    date: "02 Des 2023, 19:00",
    item: "Bearing 6204 ZZ",
    site: "Warehouse A - Shelf B",
    type: "Book In",
    quantity: -12,
    reference: "GRN-0441",
    performedBy: "J. Brown",
  },
  {
    date: "22 Des 2023, 11:40",
    item: "Seal Ring Type-B",
    site: "Warehouse B - Shelf M",
    type: "Book Out",
    quantity: 45,
    reference: "JOB-2201",
    performedBy: "M. Adams",
  },
  {
    date: "23 Des 2023, 17:20",
    item: "Oil Filter — Type B",
    site: "Warehouse C - Shelf C",
    type: "Transfer",
    quantity: -20,
    reference: "TRF-199",
    performedBy: "--",
  },
  {
    date: "30 Des 2023, 10:04",
    item: "Hydraulic Hose 12mm",
    site: "Warehouse A - Shelf B",
    type: "Book In",
    quantity: 3,
    reference: "TRF-199",
    performedBy: "J. Brown",
  },
];

export default function InventoryTable() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (row) =>
      row.item.toLowerCase().includes(search.toLowerCase()) ||
      row.site.toLowerCase().includes(search.toLowerCase()) ||
      row.reference.toLowerCase().includes(search.toLowerCase()),
  );

  const getTypeIcon = (type: InventoryRecord["type"]) => {
    switch (type) {
      case "Book In":
        return <HiArrowSmDown className="text-green-500 inline-block mr-1" />;
      case "Book Out":
        return <HiArrowSmUp className="text-red-500 inline-block mr-1" />;
      case "Transfer":
        return (
          <HiSwitchHorizontal className="text-blue-500 inline-block mr-1" />
        );
      default:
        return null;
    }
  };

  const [page, _setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));

  function setPage(next: number) {
    _setPage(() => {
      const clamped = Math.max(1, Math.min(totalPages, Math.floor(next)));
      return clamped;
    });
  }

  return (
    <div className="p-4 bg-white shadow rounded-lg mt-3 border border-[#E6E6E9]">
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

      {/* Table */}
      <div className="border-b border-[#E6E6E9]  -mx-4"></div>
      <div className="overflow-hidden rounded-lg border border-[#E6E6E9] mt-4">
        <table className="w-full  border border-[#E6E6E9] text-sm text-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left">
              <td className="px-3 py-4">Date & Time</td>
              <td className="px-3 py-2">Item</td>
              <td className="px-3 py-2">Site</td>
              <td className="px-3 py-2">Type</td>
              <td className="px-3 py-2">Quantity</td>
              <td className="px-3 py-2">Reference</td>
              <td className="px-3 py-2">Performed By</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-[#E6E6E9] hover:bg-gray-50"
              >
                <td className="px-3 py-5">{row.date}</td>
                <td className="px-3 py-5">{row.item}</td>
                <td className="px-3 py-5">{row.site}</td>
                <td className="px-3 py-5 flex items-center">
                  {getTypeIcon(row.type)}
                  {row.type}
                </td>
                <td className="px-3 py-5">{row.quantity}</td>
                <td className="px-3 py-5">{row.reference}</td>
                <td className="px-3 py-5">{row.performedBy}</td>
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
  );
}
