"use client";

import { FiX, FiChevronDown } from "react-icons/fi";
import React, { MouseEvent } from "react";


export default function FilterModal({ onClose }: { onClose: () => void }) {

function handleCancel(event: MouseEvent<HTMLButtonElement>) {
  event.preventDefault(); // optional
  onClose();
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[370px] bg-white rounded-2xl shadow-lg p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button onClick={onClose}>
            <FiX className="text-gray-500" />
          </button>
        </div>

        {/* Site */}
        <div className="border rounded-xl p-2 border-[#EEF2F6] mb-2 bg-[#FCFCFD]">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-sm">📍 Site</span>
            <button className="text-xs text-orange-500">Clear</button>
          </div>

          <div className="grid grid-cols-1 gap-2 text-sm">
            {[
              "All Sites",
              "Warehouse A - Shelf B",
              "Warehouse B - Shelf B",
              "Warehouse C - Shelf B",
              "Warehouse D - Shelf B",
            ].map((field) => (
              <label className="flex items-center gap-2 cursor-pointer relative text-[#697586]">
                {/* real checkbox */}
                <input
                  type="checkbox"
                   defaultChecked
                        className="peer absolute w-4 h-4 opacity-0 cursor-pointer"
                />

                {/* custom checkbox */}
                <span className="w-4 h-4 border border-[#EF4B07] rounded-sm flex items-center justify-center bg-[#FFF5F0]">
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
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="border border-[#EEF2F6] rounded-xl p-3 mb-2 flex justify-between items-center bg-[#FCFCFD] ">
          <div>
            <p className="flex text-sm font-medium">
                <img src="/category.png" alt=""  width={20}  />
                 Category</p>
            <p className="text-xs text-gray-500">Hydraulic</p>
          </div>
          <FiChevronDown className="text-gray-400" />
        </div>

        {/* Tags */}
        <div className="border border-[#EEF2F6] rounded-xl p-3 mb-2 flex justify-between items-center bg-[#FCFCFD] ">
          <div>
            <p className="text-sm font-medium">🏷 Tags</p>
            <p className="text-xs text-gray-500">High Wear</p>
          </div>
          <FiChevronDown className="text-gray-400" />
        </div>

        {/* Time Range */}
        <div className="border border-[#EEF2F6] rounded-xl p-3 mb-2 flex justify-between items-center bg-[#FCFCFD] ">
          <div>
            <p className="text-sm font-medium">📅 Time Range</p>
            <p className="text-xs text-gray-500">30 Days</p>
          </div>
          <FiChevronDown className="text-gray-400" />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t border-[#E6E6E9]">
          <button
            type="button"
  onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClose()}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-[#FF8A3D] text-white rounded-lg hover:opacity-90"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
