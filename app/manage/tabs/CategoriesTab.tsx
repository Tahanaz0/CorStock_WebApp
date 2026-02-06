"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { StatItem, categoriesData } from "../manageData";

interface CategoriesTabProps {
  stats: StatItem[];
}

export default function CategoriesTab({ stats }: CategoriesTabProps) {
  const [openCategory, setOpenCategory] = useState<string | null>("Mechanical");

  return (
    <>
      {/* Stats Cards */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#EAECF0] rounded-lg p-3 bg-white w-60 h-24"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">{item.title}</p>
              {item.icon && (
                <img src={item.icon} alt={item.title} className="w-7 h-7" />
              )}
            </div>
            <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Categories List */}
      <div className="space-y-3">
        {categoriesData.map((cat) => {
          const isOpen = openCategory === cat.name;

          return (
            <div
              key={cat.name}
              className="border border-[#EAECF0] rounded-lg bg-white px-4 py-3"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenCategory(isOpen ? null : cat.name)}
              >
                <p className="font-medium">{cat.name}</p>

                <div className="flex items-center gap-3 text-gray-400">
                  <span>⋮</span>
                  <span>
                    {isOpen ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <FiChevronDown className="text-gray-400" />
                    )}
                  </span>
                </div>
              </div>

              {isOpen && cat.sub.length > 0 && (
                <div className="mt-2 ml-2 text-sm text-gray-500 space-y-1">
                  {cat.sub.map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

