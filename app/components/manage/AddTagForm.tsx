"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  onClose?: () => void;
};

export default function AddTagForm({ onClose }: Props) {
  const [tagName, setTagName] = useState("");
  const [color, setColor] = useState("Blue");
  const [usageCount, setUsageCount] = useState("");
  const router = useRouter();

  const colorOptions = [
    "Blue",
    "Red",
    "Green",
    "Yellow",
    "Purple",
    "Pink",
    "Orange",
    "Gray",
  ];

  const colorMap: { [key: string]: string } = {
    Blue: "#3B82F6",
    Red: "#EF4444",
    Green: "#10B981",
    Yellow: "#F59E0B",
    Purple: "#8B5CF6",
    Pink: "#EC4899",
    Orange: "#F97316",
    Gray: "#6B7280",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding tag:", { tagName, color, usageCount });
    if (onClose) onClose();
    else router.push("/manage");
  };

  const handleCancel = () => {
    if (onClose) onClose();
    else router.push("/manage");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Tag Name</label>
        <input
          type="text"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          className="w-full border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm"
          required
          placeholder="Mechanical"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Colour Picker</label>
        <div className="flex items-center gap-2 border border-[#CDD5DF] rounded-lg px-3 py-2">
          <div
            className="w-6 h-6 rounded-sm border border-gray-300"
            style={{ backgroundColor: colorMap[color] }}
          />
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="flex-1 text-sm border-0 outline-none"
          >
            {colorOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Usage Count</label>
        <input
          type="number"
          value={usageCount}
          onChange={(e) => setUsageCount(e.target.value)}
          className="w-full border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm"
          placeholder="16"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#E6E6E9]">
        <button type="button" onClick={handleCancel} className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
        <button type="submit" className="px-4 py-2 text-sm bg-[#FF8A3D] text-white rounded-lg hover:opacity-90">Create</button>
      </div>
    </form>
  );
}
