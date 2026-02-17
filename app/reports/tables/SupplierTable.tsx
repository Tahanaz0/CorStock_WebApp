"use client";

import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import styles from "./reportsTables.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

interface SupplierRow {
  id: string;
  supplier: string;
  onTimePercent: string;
  avgDelay: string;
  shortDeliveries: number;
  poVolume: number;
  score: number;
}

const SupplierTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const supplierData: SupplierRow[] = [
    {
      id: "1",
      supplier: "Bosch",
      onTimePercent: "12%",
      avgDelay: "3 days",
      shortDeliveries: 12,
      poVolume: 12,
      score: 4.6,
    },
    {
      id: "2",
      supplier: "Siemens",
      onTimePercent: "34%",
      avgDelay: "2 days",
      shortDeliveries: 98,
      poVolume: 98,
      score: 4.6,
    },
    {
      id: "3",
      supplier: "Conductix",
      onTimePercent: "34%",
      avgDelay: "2 days",
      shortDeliveries: 123,
      poVolume: 123,
      score: 4.6,
    },
    {
      id: "4",
      supplier: "Bosch",
      onTimePercent: "23%",
      avgDelay: "3 days",
      shortDeliveries: 34,
      poVolume: 34,
      score: 4.6,
    },
    {
      id: "5",
      supplier: "Siemens",
      onTimePercent: "12%",
      avgDelay: "2 days",
      shortDeliveries: 45,
      poVolume: 45,
      score: 4.6,
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

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "#16A34A";
    if (rating >= 3.5) return "#F97316";
    return "#EF4444";
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
        <table className="w-full text-sm ">
          <thead className="bg-[#F8FAFC] text-[#71717A]">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Supplier</th>
              <th className="px-4 py-3 text-left font-medium">on-time%</th>
              <th className="px-4 py-3 text-left font-medium">Avg Delay</th>
              <th className="px-4 py-3 text-center font-medium">
                Short Deliveries
              </th>
              <th className="px-4 py-3 text-center font-medium">PO Volume</th>
              <th className="px-4 py-3 text-center font-medium">Score</th>
            </tr>
          </thead>

          <tbody>
            {supplierData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E6E6E9] hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{row.supplier}</td>

                  <td className="px-4 py-3 ">{row.onTimePercent}</td>

                  <td className="px-4 py-3">{row.avgDelay}</td>

                  <td className="px-4 py-3 text-center">
                    <span className="inline-block  px-3 py-3 rounded text-xs text-center font-medium">
                      {row.shortDeliveries}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-block px-3 py-3 rounded text-xs font-medium">
                      {row.poVolume}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <span className="inline-block px-3 py-3 rounded text-xs font-medium">
                      {row.score}
                    </span>
                  </td>

                  {/* <td className="px-4 py-3 text-center">{row.rating}</td> */}
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

export default SupplierTable;
