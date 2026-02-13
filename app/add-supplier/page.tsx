"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const AddSupplierPage = () => {
  const [name, setName] = useState("");
  const [supplierType, setSupplierType] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("Active");
  const [leadTime, setLeadTime] = useState("6 days");
  const [category, setCategory] = useState("");
  const [categoryTags, setCategoryTags] = useState<string[]>([]);
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding supplier:", { 
      name, 
      supplierType, 
      email, 
      website,
      address,
      leadTime, 
      category: categoryTags,
      status,
      contactName,
      contactNumber,
      jobTitle
    });
    router.push("/manage");
  };

  const handleAddCategory = () => {
    if (category && !categoryTags.includes(category)) {
      setCategoryTags([...categoryTags, category]);
      setCategory("");
    }
  };

  const handleRemoveCategory = (cat: string) => {
    setCategoryTags(categoryTags.filter((c) => c !== cat));
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <span className="cursor-pointer hover:text-[#FF8A3D]" onClick={() => router.push("/dashboard")}>
            Dashboard
          </span>
          <span className="text-gray-400">≫</span>
          <span className="cursor-pointer hover:text-[#FF8A3D]" onClick={() => router.push("/manage")}>
            Manage
          </span>
          <span className="text-gray-400">≫</span>
          <span className="text-[#FF8A3D] font-medium">New Supplier Info</span>
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-8 text-[#1F2937]">New Supplier</h1>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name, Type, Email */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Supplier Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
              placeholder="Bosch"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Supplier Type
            </label>
            <select
              value={supplierType}
              onChange={(e) => setSupplierType(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
            >
              <option value="">Select Type</option>
              <option value="Distributor">Distributor</option>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Wholesaler">Wholesaler</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              General Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
              placeholder="libi@yandbox.com"
            />
          </div>
        </div>

        {/* Row 2: Address, Status, Lead Times */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
              placeholder="Warehouse C - Shelf C"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Lead Times
            </label>
            <select
              value={leadTime}
              onChange={(e) => setLeadTime(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
            >
              <option value="3-5 days">3-5 days</option>
              <option value="6 days">6 days</option>
              <option value="6-10 days">6-10 days</option>
              <option value="11-15 days">11-15 days</option>
              <option value="15+ days">15+ days</option>
            </select>
          </div>
        </div>

        {/* Row 3: Website, Status, Lead Times */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Website
            </label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
              placeholder="www.techpartsindustrial.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#374151]">
              Lead Times
            </label>
            <select
              value={leadTime}
              onChange={(e) => setLeadTime(e.target.value)}
              className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
            >
              <option value="3-5 days">3-5 days</option>
              <option value="6 days">6 days</option>
              <option value="6-10 days">6-10 days</option>
              <option value="11-15 days">11-15 days</option>
              <option value="15+ days">15+ days</option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2 text-[#374151]">
            Category
          </label>
          <div className="flex gap-2 mb-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
            >
              <option value="">Select Category</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Tools">Tools</option>
              <option value="Hardware">Hardware</option>
            </select>
          </div>
          {/* Category Tags */}
          {categoryTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categoryTags.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {cat}
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(cat)}
                    className="text-gray-500 hover:text-gray-700 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Point of Contact */}
        <div className="pt-6 border-t border-[#E5E7EB]">
          <h2 className="text-lg font-semibold mb-6 text-[#1F2937]">Point of Contact</h2>
          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#374151]">
                Contact Name
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                placeholder="Josh"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#374151]">
                Contact Number
              </label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                placeholder="+44 123 456 789"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#374151]">
                Job Title
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full bg-white text-[#6B7280] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                placeholder="Enter title"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6 border-t border-[#E5E7EB]">
          <button
            type="button"
            onClick={() => router.push("/manage")}
            className="px-6 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium bg-[#FF8A3D] text-white rounded-lg hover:opacity-90 transition"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierPage;