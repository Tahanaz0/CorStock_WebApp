"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddSupplierPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Active");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding supplier:", { name, email, leadTime, category, status });
    router.push("/manage");
  };

  return (
    <div className="min-h-screen p-6 shadow-sm">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <span className="cursor-pointer hover:text-[#FF8A3D]" onClick={() => router.push("/dashboard")}>
            Dashboard
          </span>
          <span>/</span>
          <span className="cursor-pointer hover:text-[#FF8A3D]" onClick={() => router.push("/manage")}>
            Manage
          </span>
          <span>/</span>
          <span>Add New Supplier</span>
        </div>
      </div>
      
      <div className="bg-[#FFFFFF] border border-[#EEF2F6] p-5 shadow-sm rounded-lg">
        <h1 className="text-2xl font-semibold mt-1">New Supplier</h1>
        
        <div className="bg-[#FCFCFD] border border-[#EAECF0] rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#364152]">
                  Supplier Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                  required
                  placeholder="e.g., Bosch"
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
                  required
                  placeholder="supplier@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#364152]">
                  Lead Time (Days)
                </label>
                <input
                  type="text"
                  value={leadTime}
                  onChange={(e) => setLeadTime(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                  required
                  placeholder="e.g., 6 days"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#364152]">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#FF8A3D]"
                >
                  <option value="">Select Category</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Tools">Tools</option>
                </select>
              </div>
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
                <option value="Disabled">Disabled</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => router.push("/manage")}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-[#FF8A3D] text-white rounded-lg hover:opacity-90"
              >
                Create Supplier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSupplierPage;