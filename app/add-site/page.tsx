"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown, FiX } from "react-icons/fi";

const AddSitePage = () => {
  const [siteName, setSiteName] = useState("");
  const [siteCode, setSiteCode] = useState("");
  const [manager, setManager] = useState("");
  const [status, setStatus] = useState("Active");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding site:", { siteName, siteCode, manager, status });
    router.push("/manage"); // Back to manage page
  };

  return (
      <div className="mt-15 sm:mt-5 bg-[#F4F3F3] min-h-screen p-2 sm:p-4 md:p-6 md:mt-0 font-sans overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="mb-4 sm:mb-6">
        <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 flex-wrap">
          <span 
            className="cursor-pointer hover:text-[#FF8A3D] whitespace-nowrap" 
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </span>
          <span>/</span>
          <span 
            className="cursor-pointer hover:text-[#FF8A3D] whitespace-nowrap" 
            onClick={() => router.push("/manage")}
          >
            Manage
          </span>
          <span>/</span>
          <span className="whitespace-nowrap text-[#1F2937]">Add New Site</span>
        </div>
      </div>
      
      <div className="bg-[#FFFFFF] border border-[#EEF2F6] p-4 sm:p-5 shadow-sm rounded-lg">
        <h1 className="text-xl sm:text-2xl font-semibold mt-1">New Site</h1>
        
        {/* Form Card */}
        <div className="bg-[#FCFCFD] border border-[#EAECF0] rounded-lg p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Site Name & Code - Stack on mobile, side by side on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#364152]">
                  Site Name
                </label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                  required
                  placeholder="e.g., Warehouse A - Shelf D"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#364152]">
                  Site Code
                </label>
                <input
                  type="text"
                  value={siteCode}
                  onChange={(e) => setSiteCode(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                  required
                  placeholder="e.g., 220184-H"
                />
              </div>
            </div>

            {/* Manager & Status - Stack on mobile, side by side on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#364152]">
                  Manager
                </label>
                <input
                  type="text"
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                  required
                  placeholder="Manager name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#364152]">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#FF8A3D]"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Actions - Stack on mobile, row on desktop */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-3 sm:pt-4">
              <button
                type="button"
                onClick={() => router.push("/manage")}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-[#FF8A3D] text-white rounded-lg hover:opacity-90 transition w-full sm:w-auto"
              >
                Create Site
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSitePage;