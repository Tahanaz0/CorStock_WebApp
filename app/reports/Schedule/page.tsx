"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";

const ScheduleReport = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("item");
  const itemFields = ["PDF", "Excel", "CSV"];
  const zoneFields = ["PDF", "Excel", "CSV"];

  const scheduledReports = [
    {
      type: "Low Stock Summary",
      frequency: "Daily",
      time: "08:00",
      recipients: "bockelboy@att.com",
      format: "PDF",
    },
    {
      type: "Weekly Usage Report",
      frequency: "Weekly",
      time: "06:00",
      recipients: "leocharre@aol.com",
      format: "Excel",
    },
    {
      type: "Overdue POs Report",
      frequency: "Daily",
      time: "12:32",
      recipients: "notaprguy@hotmail.com",
      format: "CSV",
    },
    {
      type: "Supplier Performance",
      frequency: "Daily",
      time: "10:00",
      recipients: "adamk@yahoo.com",
      format: "CSV",
    },
  ];

  return (
    <>
      <div className="bg-[#F4F3F3] page-container flex flex-col gap-5">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-[#EEF2F6]">
          <div className="mb-6">
            <div className="mb-8">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span
                  className="cursor-pointer hover:text-[#FF8A3D]"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </span>
                <span className="text-gray-400">≫</span>
                <span
                  className="cursor-pointer hover:text-[#FF8A3D]"
                  onClick={() => router.push("/reports")}
                >
                  Report
                </span>
                <span className="text-gray-400">≫</span>
                <span className="text-[#FF8A3D] font-medium">Schedule</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Schedule Report</h2>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  bg-[#FCFCFD] p-3 rounded-lg mb-6 shadow-sm border border-[#EEF2F6]">
            <div>
              <label className="block text-sm font-medium mb-1">
                Report Type
              </label>
              <select className="w-full border border-[#CDD5DF] rounded-lg p-3 text-[#6B7280] shadow-sm">
                <option>Inventory Report</option>
                <option>Low Stock Summary</option>
                <option>Overdue POs Report</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Frequency
              </label>
              <select className="w-full border rounded-lg p-3 border-[#CDD5DF] text-[#6B7280] shadow-sm">
                <option>Daily</option>
                <option>Weekly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                // type="time"
                className="w-full border rounded-lg p-2 border-[#CDD5DF] text-[#6B7280] shadow-sm"
                defaultValue="06:00"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-sm font-medium mb-1">
                Recipients
              </label>
              <div className="flex flex-wrap gap-2 border rounded-lg p-2 border-[#CDD5DF] bg-white shadow-sm">
                <span className="">ustil@mail.com</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2  p-2 ">
                <span className="bg-gray-200 px-2 py-1 rounded-lg">
                  lline@yandex.com
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-lg">
                  seema@gmail.com
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-lg">
                  seema@gmail.com
                </span>
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="block text-sm font-medium mb-1">
                Delivery Format
              </label>
              <div className="grid grid-cols-3  text-sm w-[300px]">
                {(activeTab === "item" ? itemFields : zoneFields).map(
                  (field) => (
                    <label
                      key={field}
                      className="flex items-center text-[#697586] gap-2 cursor-pointer relative"
                    >
                      {/* real checkbox */}
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer absolute w-4 h-4 opacity-0 cursor-pointer"
                      />

                      {/* custom checkbox — SAME AS YOUR UI */}
                      <span className=" w-4 h-4 border-[1px] border-[#EF4B07] rounded-sm flex items-center justify-center bg-[#FFF5F0]">
                        <svg
                          className="w-5 h-5 text-[#EF4B07] peer-checked:block"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l6.879-6.879a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>

                      <span className="select-none">{field}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Scheduled Reports Table */}
          <div>Scheduled Report</div>
          <div className="overflow-x-auto border border-[#EEF2F6] bg-[#FCFCFD] rounded-lg mt-6">
            <table className="w-full text-left border-collapse ">
              <thead>
                <tr className="border-b text-[#697586] bg-[#F8FAFC] border-[#E6E6E9]">
                  <th className="p-3 font-medium">Report Type</th>
                  <th className="p-2 font-medium">Frequency</th>
                  <th className="p-2 font-medium">Time</th>
                  <th className="p-2 font-medium">Recipients</th>
                  <th className="p-2 font-medium">Delivery Format</th>
                  <th className="p-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {scheduledReports.map((report, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#E6E6E9] hover:bg-gray-50 text-[#4B5565]"
                  >
                    <td className="p-4">{report.type}</td>
                    <td className="p-2">{report.frequency}</td>
                    <td className="p-2">{report.time}</td>
                    <td className="p-2">{report.recipients}</td>
                    <td className="p-2">{report.format}</td>
                    <td className="p-2">
                      <button className="text-[#4B5565] hover:text-red-700">
                        <FiTrash2 />

                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Buttons */}
        </div>
        <div className="flex justify-end mt-4 gap-2  bg-[#FFFFFF] p-2 shadow-sm border rounded-lg border-[#EEF2F6]">
          <button className="border rounded-lg px-5 py-1 hover:bg-gray-100 border-[#CDD5DF]">
            Cancel
          </button>
          <button className="bg-[#FF8A3D] px-4 py-2 rounded-lg hover:bg-[#FF8A3D] ">
            Save Schedule
          </button>
        </div>
      </div>
    </>
  );
};

export default ScheduleReport;
