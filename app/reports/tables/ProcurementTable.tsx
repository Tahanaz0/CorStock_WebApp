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
// import styles from "./reportsTables.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

interface ProcurementRow {
  id: string;
  poNumber: string;
  supplier: string;
  items: number;
  value: string;
  status:
    | "Open"
    | "Partial"
    | "Delivered"
    | "Cancelled"
    | "Sent"
    | "Closed"
    | "Part Delivered"
    | "Draft";
  dueDate: string;
  received: string;
  site?: string;
}

const ProcurementTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const procurementData: ProcurementRow[] = [
    {
      id: "1",
      poNumber: "PO-00231",
      supplier: "Bosch",
      site: "Warehouse A - Shelf B",
      items: 3,
      value: "£3,420",
      status: "Sent",
      dueDate: "4/4/18",
      received: "15%",
    },
    {
      id: "2",
      poNumber: "PO-00230",
      supplier: "Siemens",
      site: "Warehouse A - Shelf B",
      items: 3,
      value: "£1,180",
      status: "Closed",
      dueDate: "9/23/16",
      received: "23%",
    },
    {
      id: "3",
      poNumber: "PO-00229",
      supplier: "Conductix",
      site: "Warehouse C - Shelf C",
      items: 6,
      value: "£5,870",
      status: "Part Delivered",
      dueDate: "8/21/15",
      received: "4%",
    },
    {
      id: "4",
      poNumber: "PO-00231",
      supplier: "Bosch",
      site: "Warehouse B - Shelf M",
      items: 9,
      value: "£3,420",
      status: "Draft",
      dueDate: "8/15/17",
      received: "2%",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
      case "Sent":
        return "#4F46E5";
      case "Partial":
      case "Part Delivered":
        return "#F97316";
      case "Delivered":
      case "Closed":
        return "#16A34A";
      case "Cancelled":
      case "Draft":
        return "#EF4444";
      default:
        return "#000";
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "Open":
      case "Sent":
        return "rgba(79, 70, 229, 0.1)";
      case "Partial":
      case "Part Delivered":
        return "rgba(249, 115, 22, 0.1)";
      case "Delivered":
      case "Closed":
        return "rgba(22, 163, 74, 0.1)";
      case "Cancelled":
      case "Draft":
        return "rgba(239, 68, 68, 0.1)";
      default:
        return "#fff";
    }
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
        <table className="w-full  border border-[#E6E6E9]  text-sm text-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-medium">PO Number</th>
              <th className="px-4 py-3 text-left font-medium">Supplier</th>
              <th className="px-4 py-3 text-left font-medium">Site</th>
              <th className="px-4 py-3 text-left font-medium">Order Value</th>

              <th className="px-4 py-3 text-center font-medium">Items Count</th>

              <th className="px-4 py-3 text-left font-medium">Date Ordered</th>
              <th className="px-4 py-3 text-left font-medium">Received%</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {procurementData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E6E6E9] hover:bg-gray-50"
                >
                  <td className="px-4 py-5">{row.poNumber}</td>
                  <td className="px-4 py-3">{row.supplier}</td>
                  <td className="px-4 py-3">Main Warehouse</td>
                  <td className="px-4 py-3">{row.value}</td>
                  <td className="px-4 py-3 text-center">{row.items}</td>

                  <td className="px-4 py-3">{row.dueDate}</td>
                  <td className="px-4 py-3">{row.received}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-md font-medium text-xs`}
                      style={{
                        backgroundColor: getStatusBgColor(row.status),
                        color: getStatusColor(row.status),
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
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

export default ProcurementTable;
