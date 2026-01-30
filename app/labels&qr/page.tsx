"use client";
import React, { useState } from "react";
import { FiSearch, FiSettings, FiBell } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const Labels = () => {
  const [selectedItems, setSelectedItems] = useState([
    "ITEM-00123",
    "ITEM-00456",
  ]);
  const [customText, setCustomText] = useState("Bosch — Warehouse A - Shelf B");
  const [qrOnly, setQrOnly] = useState(true);

  return (
    <div className="bg-[#F4F3F3] min-h-screen p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Labels & QR</h2>
          <p className="text-gray-500 text-sm">
            Generate, customise, and print labels for items, zones, and sites.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#FF8A3D]  px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D] flex items-center gap-2">
            <img src="/print.png" alt="print" className="w-4 h-4" />
            Print Now
          </button>

          <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <img src="/export.png" alt="export" className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg p-2">
        <div className="flex gap-2 border m-2 p-1 bg-gray-50 border-gray-200 rounded-lg">
          <button className="px-3  p-2 rounded-lg text-sm text-[#697586] font-medium transition-all duration-300 hover:bg-[#FF8A3D]  hover:text-black">
            Item Label
          </button>
          <button className="px-3 p-2 rounded-lg text-sm text-[#697586] font-medium transition-all duration-300 hover:bg-[#FF8A3D] hover:text-black">
            Zone Label
          </button>
          <button className="px-3 p-2 rounded-lg text-sm text-[#697586] font-medium transition-all duration-300 hover:bg-[#FF8A3D] hover:text-black">
            Site Label
          </button>
        </div>

        <div className="flex gap-6 border-t p-4 border-[#E6E6E9] -mx-2">
          {/* Label Configuration */}
          <div className="flex-1 space-y-4 p-4 border border-[#E6E6E9] rounded-lg bg-[#FCFCFD]">
            <h3 className="font-semibold">Label Configuration</h3>

            {/* Select Items */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Item(s)
              </label>
              <div className="relative w-full">
                {/* Left Search Icon */}
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                {/* Right Dropdown Icon */}
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />

                {/* Input */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
              </div>

              <div className="flex gap-2 mt-5 flex-wrap ">
                {selectedItems.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm  bg-[Gray/100] text-gray-700 flex items-center gap-2 cursor-pointer"
                  >
                    {item} ✕
                  </span>
                ))}
              </div>
            </div>

            {/* Include Fields */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Include Fields on Label
              </label>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Item Code (SKU)",
                  "Category",
                  "Site",
                  "Zone / Bin",
                  "QR Code",
                  "Last Received Date",
                ].map((field) => (
                  <label
                    key={field}
                    className="flex items-center gap-2 cursor-pointer relative"
                  >
                    {/* real checkbox */}
                    <input
                      type="checkbox"
                      defaultChecked
                      className="peer absolute w-4 h-4 opacity-0 cursor-pointer"
                    />

                    {/* custom checkbox */}
                    <span
                      className=" w-4 h-4 border-[1px] border-[#EF4B07] rounded-sm flex items-center justify-center bg-[#FFF5F0]
    "
                    >
                      <svg
                        className="w-5 h-5 text-[#EF4B07]  peer-checked:block"
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
                ))}
              </div>
            </div>

            {/* Label Size & Font Size */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Label Size
                </label>
                <select className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586]">
                  <option>70mm x 35mm</option>
                  <option>50mm x 25mm</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Font Size
                </label>
                <select className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586]">
                  <option>12px</option>
                  <option>10px</option>
                  <option>14px</option>
                </select>
              </div>
            </div>

            {/* Custom Text */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Add Custom Text (optional)
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586]"
              />
            </div>

            {/* QR Only Toggle */}
            <div className="mt-4">
              <label className="flex items-center gap-3 cursor-pointer relative">
                {/* Hidden Checkbox */}
                <input
                  type="checkbox"
                  checked={qrOnly}
                  onChange={(e) => setQrOnly(e.target.checked)}
                  className="sr-only peer"
                />

                {/* Toggle Track */}
                <div className="w-10 h-5 bg-gray-300 rounded-full transition-colors peer-checked:bg-[#EF4B07] relative">
                  {/* Toggle Knob */}
                  <span
                    className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform ${
                      qrOnly ? "translate-x-[20px]" : "translate-x-0"
                    }`}
                  />
                </div>

                <span className="text-sm select-none">QR Code Only</span>
              </label>
            </div>
          </div>

          {/* Preview */}
          <div className="w-1/3 p-4 border border-[#E6E6E9] rounded-lg bg-white flex flex-col items-center gap-4">
            <div className="flex justify-between items-center w-full mb-2">
              <div className="font-medium">Preview</div>

              <div className="flex  gap-2">
                <button className="hover:bg-gray-100 transition">
                  <FiZoomIn className="text-lg" />
                </button>

                <button className=" hover:round-lg hover:bg-gray-100 transition">
                  <FiZoomOut className="text-lg" />
                </button>
              </div>
            </div>

            <div className="border border-[#E6E6E9] p-6 bg-[#F8FAFC] w-70  h-70 rounded-lg flex items-center justify-center">
              <div className="w-42 h-42 bg-black"></div>
            </div>
            <div className="text-center">
              <p className="font-semibold">Heavy Duty Widget</p>
              <p className="text-gray-500 text-sm">SKU: ITEM-00123</p>
            </div>
            <button className="border border-[#CDD5DF] w-full py-1 rounded text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <img src="/QR.png" alt="qr" className="w-4 h-4" />
              Test QR
            </button>
          </div>
        </div>

        {/* Bulk Label Generation */}
        <div className="border  mt-6 border-[#E6E6E9] rounded-lg p-4 bg-[#FCFCD]">
          <h3 className="font-semibold mb-4">Bulk Label Generation</h3> 
          <div className="flex gap-4 mt-6">
            <button className="flex-1 border border-gray-300 bg-[#EEF2F6] p-4 rounded-lg text-sm hover:bg-[#FCFCFD]">
              Select All Items in Zone
            </button>
            <button className="flex-1 border border-gray-300 bg-[#EEF2F6]  p-4 rounded-lg text-sm hover:bg-[#FCFCFD]">
              Select All Items in Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labels;
