"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTagPage = () => {
  const [tagName, setTagName] = useState("");
  const [color, setColor] = useState("#3B82F6"); // Blue default
  const [description, setDescription] = useState("");
  const router = useRouter();

  const colorOptions = [
    { name: "Blue", value: "#3B82F6", class: "bg-blue-500" },
    { name: "Red", value: "#EF4444", class: "bg-red-500" },
    { name: "Green", value: "#10B981", class: "bg-green-500" },
    { name: "Yellow", value: "#F59E0B", class: "bg-yellow-500" },
    { name: "Purple", value: "#8B5CF6", class: "bg-purple-500" },
    { name: "Pink", value: "#EC4899", class: "bg-pink-500" },
    { name: "Orange", value: "#F97316", class: "bg-orange-500" },
    { name: "Gray", value: "#6B7280", class: "bg-gray-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding tag:", { 
      tagName, 
      color, 
      description 
    });
    router.push("/manage");
  };

  const getColorName = (hex: string) => {
    const color = colorOptions.find(c => c.value === hex);
    return color ? color.name : "Custom";
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
          <span>Add New Tag</span>
        </div>
      </div>
      
      <div className="bg-[#FFFFFF] border border-[#EEF2F6] p-5 shadow-sm rounded-lg">
        <h1 className="text-2xl font-semibold mt-1">New Tag</h1>
        
        {/* Form Card */}
        <div className="bg-[#FCFCFD] border border-[#EAECF0] rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Tag Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Tag Name *
              </label>
              <input
                type="text"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                required
                placeholder="e.g., TBM, Critical, High Wear, Electrical"
              />
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#364152]">
                Tag Color *
              </label>
              
              {/* Color Preview */}
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm text-gray-700">
                  {getColorName(color)}
                </span>
              </div>

              {/* Color Options */}
              <div className="grid grid-cols-8 gap-2 mb-3">
                {colorOptions.map((colorOption) => (
                  <button
                    key={colorOption.value}
                    type="button"
                    onClick={() => setColor(colorOption.value)}
                    className={`w-8 h-8 rounded-full border ${color === colorOption.value ? 'border-2 border-gray-800' : 'border-gray-300'}`}
                    style={{ backgroundColor: colorOption.value }}
                    title={colorOption.name}
                  />
                ))}
              </div>

              {/* Custom Color */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Custom color:</span>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-8 h-8 cursor-pointer"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-32 border border-gray-300 rounded px-2 py-1 text-sm"
                  placeholder="#HEXCODE"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Description (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D] h-24 resize-none"
                placeholder="What does this tag represent?"
                rows={3}
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
                Create Tag
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTagPage;