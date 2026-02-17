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
  const [openPreview, setOpenPreview] = useState(false);
  const [showBulkContainer, setShowBulkContainer] = useState(false);
  const [openDownload, setOpenDownload] = useState(false);
  const [activeTab, setActiveTab] = useState<"item" | "zone" | "site">("item");
  const itemFields = [
    "Item Code (SKU)",
    "Category",
    "Site",
    "Zone / Bin",
    "QR Code",
    "Last Received Date",
  ];

  const zoneFields = [
    "Display Zone Name",
    "Display Zone ID",
    "Display Site Name",
  ];

  return (
    <div className="mt-15 sm:mt-5 bg-[#F4F3F3] min-h-screen p-3 sm:p-6 md:mt-0 font-sans overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-6 gap-3 md:gap-0">
        <div className="w-full md:w-auto">
          <h2 className="text-lg sm:text-2xl font-semibold break-words">Labels & QR</h2>
          <p className="text-gray-500 text-xs sm:text-base mt-1 break-words max-w-full">
            Generate, customise, and print labels for items, zones, and sites.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
          <button className="bg-[#FF8A3D] w-full sm:w-auto px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D] flex justify-center items-center gap-2 whitespace-nowrap">
            <img src="/print.png" alt="print" className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-base">Print Now</span>
          </button>

          <button className="border border-gray-300 w-full sm:w-auto px-3 py-2 rounded-lg hover:bg-gray-50 flex justify-center items-center gap-2 whitespace-nowrap">
            <img src="/export.png" alt="export" className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-base">Export</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg p-2 sm:p-4 flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row gap-2 border p-1 bg-gray-50 border-gray-200 rounded-lg w-full">
          <button
            onClick={() => setActiveTab("item")}
            className={`w-full sm:w-auto px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-base font-medium transition-all truncate
              ${
                activeTab === "item"
                  ? "bg-[#FF8A3D] text-black"
                  : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
              }`}
          >
            Item Label
          </button>

          <button
            onClick={() => setActiveTab("zone")}
            className={`w-full sm:w-auto px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-base font-medium transition-all truncate
              ${
                activeTab === "zone"
                  ? "bg-[#FF8A3D] text-black"
                  : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
              }`}
          >
            Zone Label
          </button>

          <button
            onClick={() => setActiveTab("site")}
            className={`w-full sm:w-auto px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-base font-medium transition-all truncate
              ${
                activeTab === "site"
                  ? "bg-[#FF8A3D] text-black"
                  : "text-[#697586] hover:bg-[#FF8A3D] hover:text-black"
              }`}
          >
            Site Label
          </button>
        </div>

        {/* Main Content - Responsive Stack */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 border-t p-2 sm:p-4 border-[#E6E6E9] -mx-2 w-full">
          {/* Label Configuration */}
          <div className="flex-1 space-y-4 p-3 sm:p-4 border border-[#E6E6E9] rounded-lg bg-[#FCFCFD] w-full overflow-hidden">
            <h3 className="font-semibold text-base sm:text-xl mb-3 break-words">
              Label Configuration
            </h3>

            {/* Select Items */}
            {activeTab === "item" && (
              <div className="w-full">
                <label className="block text-xs sm:text-base font-medium mb-1 break-words">
                  Select Item(s)
                </label>

                <div className="relative w-full">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex-shrink-0" />
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 flex-shrink-0" />

                  <input
                    type="text"
                    placeholder="Search items..."
                    className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-10 text-xs sm:text-base focus:outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-xs sm:placeholder:text-base"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {selectedItems.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-200 px-2 py-1 rounded-full text-xs sm:text-base text-gray-700 flex items-center gap-2 cursor-pointer max-w-full"
                    >
                      <span className="truncate max-w-[120px] sm:max-w-none">{item}</span> 
                      <span className="flex-shrink-0">✕</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ZONE TAB */}
            {activeTab === "zone" && (
              <div className="w-full">
                <div className="grid gap-3 sm:gap-6">
                  {/* Site Input */}
                  <div>
                    <label className="block text-xs sm:text-base font-medium mb-1 break-words">
                      Site
                    </label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Warehouse A - Shelf B"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 text-xs sm:text-base focus:outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-xs sm:placeholder:text-base"
                      />
                      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none flex-shrink-0" />
                    </div>
                  </div>

                  {/* Zone Input */}
                  <div>
                    <label className="block text-xs sm:text-base font-medium mb-1 break-words">
                      Zone
                    </label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="M-12 Mechanical"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 text-xs sm:text-base focus:outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-xs sm:placeholder:text-base"
                      />
                      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "site" && (
              <div>
                <div className="grid gap-3">
                  <div>
                    <label className="block text-xs sm:text-base font-medium mb-1 break-words">
                      Site
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Warehouse A - Shelf B"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 text-xs sm:text-base focus:outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-xs sm:placeholder:text-base"
                      />
                      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Include Fields */}
            <div>
              <label className="block text-xs sm:text-base font-medium mb-1 break-words">
                Include Fields on Label
              </label>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
                {(activeTab === "item" ? itemFields : zoneFields).map(
                  (field) => (
                    <label
                      key={field}
                      className="flex items-center text-[#697586] gap-2 cursor-pointer relative min-w-0"
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer absolute w-4 h-4 opacity-0 cursor-pointer"
                      />

                      <span className="w-4 h-4 border-[1px] border-[#EF4B07] rounded-sm flex items-center justify-center bg-[#FFF5F0] flex-shrink-0">
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

                      <span className="select-none truncate">{field}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Label Size & Font Size */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 min-w-0">
                <label className="block text-xs sm:text-sm font-medium mb-1 break-words">
                  Label Size
                </label>
                <select className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586] text-xs sm:text-sm">
                  <option className="text-xs sm:text-sm">70mm x 35mm</option>
                  <option className="text-xs sm:text-sm">50mm x 25mm</option>
                </select>
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-xs sm:text-sm font-medium mb-1 break-words">
                  Font Size
                </label>
                <select className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586] text-xs sm:text-sm">
                  <option className="text-xs sm:text-sm">12px</option>
                  <option className="text-xs sm:text-sm">10px</option>
                  <option className="text-xs sm:text-sm">14px</option>
                </select>
              </div>
            </div>

            {activeTab === "site" && (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 min-w-0">
                  <label className="block text-xs sm:text-sm font-medium mb-1 break-words">
                    Label Size
                  </label>
                  <select className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586] text-xs sm:text-sm">
                    <option className="text-xs sm:text-sm">70mm x 35mm</option>
                    <option className="text-xs sm:text-sm">50mm x 25mm</option>
                  </select>
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs sm:text-sm font-medium mb-1 break-words">
                    Font Size
                  </label>
                  <select className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586] text-xs sm:text-sm">
                    <option className="text-xs sm:text-sm">12px</option>
                    <option className="text-xs sm:text-sm">10px</option>
                    <option className="text-xs sm:text-sm">14px</option>
                  </select>
                </div>
              </div>
            )}

            {/* Custom Text */}
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1 break-words">
                Add Custom Text (optional)
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full border border-[#E6E6E9] rounded px-2 py-1 text-[#697586] text-xs sm:text-sm"
              />
            </div>

            {/* QR Only Toggle */}
            <div className="mt-4">
              <label className="flex items-center gap-3 cursor-pointer relative">
                <input
                  type="checkbox"
                  checked={qrOnly}
                  onChange={(e) => setQrOnly(e.target.checked)}
                  className="sr-only peer"
                />

                <div className="w-10 h-5 bg-gray-300 rounded-full transition-colors peer-checked:bg-[#EF4B07] relative flex-shrink-0">
                  <span
                    className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform ${
                      qrOnly ? "translate-x-[20px]" : "translate-x-0"
                    }`}
                  />
                </div>

                <span className="text-xs sm:text-sm select-none break-words">QR Code Only</span>
              </label>
            </div>
          </div>

          {/* Preview - Responsive Width */}
          <div className="lg:w-1/3 w-full p-3 sm:p-4 border border-[#E6E6E9] rounded-lg bg-white flex flex-col items-center gap-4 overflow-hidden">
            <div className="flex justify-between items-center w-full mb-2">
              <div className="font-medium text-sm sm:text-base">Preview</div>

              <div className="flex gap-2 flex-shrink-0">
                <button className="hover:bg-gray-100 transition p-1">
                  <FiZoomIn className="text-base sm:text-lg" />
                </button>

                <button className="hover:round-lg hover:bg-gray-100 transition p-1">
                  <FiZoomOut className="text-base sm:text-lg" />
                </button>
              </div>
            </div>

            <div
              onClick={() => setOpenPreview(true)}
              className="border border-[#E6E6E9] p-4 sm:p-6 bg-[#F8FAFC] w-full max-w-[240px] sm:max-w-[280px] h-auto aspect-square rounded-lg 
             flex items-center justify-center cursor-pointer hover:shadow-md transition"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40">
                <img
                  src="/scanner.png"
                  alt="label preview"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>

            {openPreview && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                <div className="bg-white rounded-lg p-4 w-full max-w-[90%] sm:max-w-[460px] relative max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <p className="font-medium text-sm sm:text-base">Preview</p>
                    <button
                      onClick={() => setOpenPreview(false)}
                      className="text-gray-400 hover:text-black text-lg sm:text-xl flex-shrink-0"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="bg-[#F8FAFC] p-3 sm:p-6 rounded-lg">
                    <p className="text-center mb-4 text-xs sm:text-base break-words">ITEM-ID: 000182</p>

                    <div className="flex justify-center mb-4">
                      <img
                        src="/scanner.png"
                        alt="QR Code"
                        className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                      />
                    </div>

                    <p className="text-center font-semibold text-sm sm:text-base break-words">Bearing 6204 ZZ</p>
                    <p className="text-center text-xs sm:text-sm text-gray-500 mt-1 break-words">
                      SKU: BR-6204-ZZ
                    </p>
                    <p className="text-center text-xs sm:text-sm text-gray-500 mt-1 break-words">
                      Site: Warehouse A - Shelf B
                    </p>
                    <p className="text-center text-xs sm:text-sm text-gray-500 mt-1 break-words">
                      Zone: M-12
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center w-full">
              <p className="font-semibold text-sm sm:text-base break-words">Heavy Duty Widget</p>
              <p className="text-gray-500 text-xs sm:text-sm break-words">SKU: ITEM-00123</p>
            </div>

            <button className="border border-[#CDD5DF] w-full py-1 rounded text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition whitespace-nowrap">
              <img src="/QR.png" alt="qr" className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Test QR</span>
            </button>
          </div>
        </div>

        {/* Bulk Label Generation */}
        {!showBulkContainer && (
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={() => setShowBulkContainer(true)}
              className="flex-1 border border-gray-300 bg-[#EEF2F6] p-3 sm:p-4 rounded-lg text-xs sm:text-sm hover:bg-[#FCFCFD] break-words text-left"
            >
              Select All Items in Zone
            </button>

            <button
              onClick={() => setShowBulkContainer(true)}
              className="flex-1 border border-gray-300 bg-[#EEF2F6] p-3 sm:p-4 rounded-lg text-xs sm:text-sm hover:bg-[#FCFCFD] break-words text-left"
            >
              Select All Items in Site
            </button>
          </div>
        )}

        {showBulkContainer && (
          <div className="border mt-6 border-[#E6E6E9] rounded-lg p-3 sm:p-4 bg-[#FCFCFD] w-full overflow-hidden">
            <h3 className="font-semibold mb-4 text-sm sm:text-base break-words">Bulk Label Generation</h3>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="w-full sm:w-auto">
                <p className="text-xs text-gray-500 mb-1 break-words">
                  Generating 5 labels...
                </p>

                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 sm:w-40 md:w-50 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FF8A3D] rounded-full transition-all duration-500"
                      style={{ width: "50%" }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 w-8 flex-shrink-0">60%</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => setOpenDownload(!openDownload)}
                    className="border px-3 sm:px-4 py-1.5 rounded-md text-xs flex items-center justify-center gap-2 hover:bg-gray-50 w-full sm:w-auto whitespace-nowrap"
                  >
                    <img src="download.png" alt="" className="w-4 h-4 flex-shrink-0" />
                    <span>Download</span>
                  </button>

                  {openDownload && (
                    <div className="absolute right-0 mt-2 w-full sm:w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <button className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100 whitespace-nowrap">
                        Download PNG
                      </button>
                      <button className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100 whitespace-nowrap">
                        Download PDF
                      </button>
                      <button className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100 whitespace-nowrap">
                        Download ZIP
                      </button>
                    </div>
                  )}
                </div>

                <button className="bg-[#FF8A3D] px-3 sm:px-4 py-1.5 flex items-center justify-center gap-2 rounded-md text-xs w-full sm:w-auto whitespace-nowrap">
                  <img src="/print.png" alt="" className="w-4 h-4 flex-shrink-0" />
                  <span>Print Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Labels;