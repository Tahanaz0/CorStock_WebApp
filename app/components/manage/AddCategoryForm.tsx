"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  onClose?: () => void;
};

export default function AddCategoryForm({ onClose }: Props) {
  const [categoryName, setCategoryName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
//   const [description, setDescription] = useState("");
  const router = useRouter();

  const parentCategories = [
    "Mechanical",
    "Electrical",
    "Tools",
    "Safety Equipment",
    "Consumables",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding category:", { categoryName, parentCategory, });
    if (onClose) onClose();
    else router.push("/manage");
  };

  const handleCancel = () => {
    if (onClose) onClose();
    else router.push("/manage");
  };

  return (
    <div>
      {/* <h2 className="text-lg font-semibold mb-3">New Category</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Category Name *</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm shadow-sm"
            required
            placeholder="e.g., Bearings, Seals"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Parent Category (Optional)</label>
          <select value={parentCategory} onChange={(e) => setParentCategory(e.target.value)} className="w-full border rounded-lg border-[#CDD5DF] px-3 py-2 text-sm shadow-sm">
            <option value="">Select Parent Category (Optional)</option>
            {parentCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* <div>
          <label className="block text-sm font-medium mb-1">Description (Optional)</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm h-24" />
        </div> */}

        <div className="flex justify-end gap-3 pt-2">
          <button type="button" onClick={handleCancel} className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-[#FF8A3D] text-white rounded">Create Category</button>
        </div>
      </form>
    </div>
  );
}
