'use client';

import { useState } from "react";

const AddUser = () => {
  const [fullName, setFullName] = useState("PO-2025-0321");
  const [email, setEmail] = useState("ustil@mail.com");

  return (
    <div className="bg-[#F4F3F3] min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Dashboard / Manage / Add New</p>
        <h1 className="text-2xl font-semibold mt-1">New User</h1>
      </div>

      {/* Form Card */}
      <div className="bg-white border border-[#EAECF0] rounded-lg p-6 max-w-3xl">
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
          />
        </div>

        {/* Role & Status */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select defaultValue="Manager" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Manager</option>
              <option>Admin</option>
              <option>Storekeeper</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select defaultValue="Active" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Active</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>

        {/* Site Access */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Site Access</label>
          <div className="flex flex-col gap-2">
            {["Site A", "Site B", "Site C"].map((site) => (
              <label key={site} className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 text-[#FF8A3D]" />
                {site}
              </label>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
          <button className="px-4 py-2 text-sm bg-[#FF8A3D] text-white rounded-lg hover:opacity-90">Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
