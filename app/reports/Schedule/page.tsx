"use client";

import React from "react";

type ScheduleReportProps = {
  onClose: () => void;
};

const ScheduleReport: React.FC<ScheduleReportProps> = ({ onClose }) => {
  const scheduledReports = [
    { type: "Low Stock Summary", frequency: "Daily", time: "08:00", recipients: "bockelboy@att.com", format: "PDF" },
    { type: "Weekly Usage Report", frequency: "Weekly", time: "06:00", recipients: "leocharre@aol.com", format: "Excel" },
    { type: "Overdue POs Report", frequency: "Daily", time: "12:32", recipients: "notaprguy@hotmail.com", format: "CSV" },
    { type: "Supplier Performance", frequency: "Daily", time: "10:00", recipients: "adamk@yahoo.com", format: "CSV" },
  ];

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Schedule Report</h2>
          <button className="text-gray-400 hover:text-gray-700" onClick={onClose}>✕</button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Report Type</label>
            <select className="w-full border rounded-lg p-2">
              <option>Inventory Report</option>
              <option>Low Stock Summary</option>
              <option>Overdue POs Report</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Frequency</label>
            <select className="w-full border rounded-lg p-2">
              <option>Daily</option>
              <option>Weekly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input type="time" className="w-full border rounded-lg p-2" defaultValue="06:00" />
          </div>

          <div className="md:col-span-3">
            <label className="block text-sm font-medium mb-1">Recipients</label>
            <div className="flex flex-wrap gap-2 border rounded-lg p-2">
              <span className="bg-gray-200 px-2 py-1 rounded">ustil@mail.com</span>
              <span className="bg-gray-200 px-2 py-1 rounded">lline@yandex.com</span>
              <span className="bg-gray-200 px-2 py-1 rounded">seema@gmail.com</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <label className="block text-sm font-medium mb-1">Delivery Format</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> PDF</label>
              <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> Excel</label>
              <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> CSV</label>
            </div>
          </div>
        </div>

        {/* Scheduled Reports Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 font-medium">Report Type</th>
                <th className="p-2 font-medium">Frequency</th>
                <th className="p-2 font-medium">Time</th>
                <th className="p-2 font-medium">Recipients</th>
                <th className="p-2 font-medium">Delivery Format</th>
                <th className="p-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {scheduledReports.map((report, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-2">{report.type}</td>
                  <td className="p-2">{report.frequency}</td>
                  <td className="p-2">{report.time}</td>
                  <td className="p-2">{report.recipients}</td>
                  <td className="p-2">{report.format}</td>
                  <td className="p-2"><button className="text-red-500 hover:text-red-700">🗑️</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end mt-4 gap-2">
          <button className="border rounded-lg px-4 py-2 hover:bg-gray-100" onClick={onClose}>Cancel</button>
          <button className="bg-[#FF8A3D] text-white px-4 py-2 rounded-lg hover:bg-[#FF8A3D]">Save Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleReport;
