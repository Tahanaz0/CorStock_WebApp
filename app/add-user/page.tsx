"use client";

import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

const sites = ["Site A", "Site B", "Site C"];

const AddUser = () => {
  const [fullName, setFullName] = useState("PO-2025-0321");
  const [email, setEmail] = useState("ustil@mail.com");
  const router = useRouter();

  // Site Access state
  const [selectedSites, setSelectedSites] = useState<string[]>([
    "Site B",
    "Site C",
  ]);
  const [openSites, setOpenSites] = useState(false);

  const toggleSite = (site: string) => {
    setSelectedSites((prev) =>
      prev.includes(site) ? prev.filter((s) => s !== site) : [...prev, site],
    );
  };

  const handleCancel = () => {
    router.push("/manage");
  };

  return (
      <div className="mt-15 sm:mt-5 bg-[#F4F3F3] min-h-screen p-2 sm:p-4 md:p-6 md:mt-0 font-sans overflow-x-hidden">
      {/* Header with clickable breadcrumb */}
      <div className="mb-4 sm:mb-6">
        <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 flex-wrap">
          <Link 
            href="/dashboard" 
            className="hover:text-[#FF8A3D] transition cursor-pointer whitespace-nowrap"
          >
            Dashboard
          </Link>
          <span>/</span>
          <Link 
            href="/manage" 
            className="hover:text-[#FF8A3D] transition cursor-pointer whitespace-nowrap"
          >
            Manage
          </Link>
          <span>/</span>
          <span className="text-gray-700 whitespace-nowrap">Add New</span>
        </div>
      </div>
      
      <div className="bg-[#FFFFFF] border border-[#EEF2F6] p-4 sm:p-5 shadow-sm rounded-lg">
        <h1 className="text-xl sm:text-2xl font-semibold mt-1">New User</h1>
        
        {/* Form Card */}
        <div className="bg-[#FCFCFD] border border-[#EAECF0] rounded-lg p-4 sm:p-6">
          {/* Name & Email - Stack on mobile, side by side on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
              />
            </div>
          </div>

          {/* Role & Status - Stack on mobile, side by side on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Role
              </label>
              <select className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#FF8A3D]">
                <option>Manager</option>
                <option>Admin</option>
                <option>Storekeeper</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Status
              </label>
              <select className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#FF8A3D]">
                <option>Active</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>

          {/* Site Access */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium mb-1 text-[#364152]">
              Site Access
            </label>

            {/* Select Box */}
            <div
              onClick={() => setOpenSites(!openSites)}
              className="min-h-[44px] flex flex-wrap items-center gap-2 px-3 py-2 border border-[#CDD5DF] rounded-lg bg-white cursor-pointer focus-within:ring-1 focus-within:ring-[#FF8A3D]"
            >
              {selectedSites.length === 0 && (
                <span className="text-gray-400 text-sm">Select sites</span>
              )}

              {selectedSites.map((site) => (
                <span
                  key={site}
                  className="flex items-center gap-1 bg-[#F2F4F7] text-[#364152] px-2 py-1 rounded-full text-xs"
                >
                  {site}
                  <FiX
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSite(site);
                    }}
                  />
                </span>
              ))}

              <FiChevronDown className="ml-auto text-gray-400" />
            </div>

            {/* Dropdown */}
            {openSites && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-[#CDD5DF] rounded-lg shadow-sm max-h-60 overflow-y-auto">
                {sites.map((site) => (
                  <label
                    key={site}
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSites.includes(site)}
                      onChange={() => toggleSite(site)}
                      className="accent-[#FF8A3D]"
                    />
                    {site}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Actions - Stack on mobile, row on desktop */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 bg-[#FFFFFF] border border-[#EEF2F6] p-3 sm:p-2 mt-5 shadow-sm rounded-lg">
          <button 
            onClick={handleCancel}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition w-full sm:w-auto"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm bg-[#FF8A3D] text-white rounded-lg hover:opacity-90 transition w-full sm:w-auto">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;