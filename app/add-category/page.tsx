"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown, FiX } from "react-icons/fi";

const AddCategoryPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const parentCategories = [
    "Mechanical",
    "Electrical", 
    "Tools",
    "Safety Equipment",
    "Consumables"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding category:", { 
      categoryName, 
      parentCategory, 
      description 
    });
    router.push("/manage");
  };

  return (
    <div className="min-h-screen p-6 shadow-sm">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <span 
            className="cursor-pointer hover:text-[#FF8A3D]" 
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </span>
          <span>/</span>
          <span 
            className="cursor-pointer hover:text-[#FF8A3D]" 
            onClick={() => router.push("/manage")}
          >
            Manage
          </span>
          <span>/</span>
          <span>Add New Category</span>
        </div>
      </div>
      
      <div className="bg-[#FFFFFF] border border-[#EEF2F6] p-5 shadow-sm rounded-lg">
        <h1 className="text-2xl font-semibold mt-1">New Category</h1>
        
        {/* Form Card */}
        <div className="bg-[#FCFCFD] border border-[#EAECF0] rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Category Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Category Name *
              </label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                required
                placeholder="e.g., Bearings, Seals, Valves"
              />
            </div>

            {/* Parent Category */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Parent Category (Optional)
              </label>
              <div className="relative">
                <select
                  value={parentCategory}
                  onChange={(e) => setParentCategory(e.target.value)}
                  className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D] appearance-none"
                >
                  <option value="">Select Parent Category (Optional)</option>
                  {parentCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Leave empty to create a main category
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Description (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D] h-32 resize-none"
                placeholder="Add description about this category..."
                rows={4}
              />
            </div>

            {/* Actions */}
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
                Create Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryPage;