"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUpload } from "react-icons/fi";

const AddTemplatePage = () => {
  const [templateName, setTemplateName] = useState("");
  const [templateType, setTemplateType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const templateTypes = [
    "Inventory",
    "Suppliers", 
    "Sites",
    "Users",
    "Categories",
    "Labels & QR",
    "Reports",
    "GRN"
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding template:", { 
      templateName, 
      templateType, 
      description,
      file: file?.name 
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
          <span>Add New Template</span>
        </div>
      </div>
      
      <div className="bg-[#FFFFFF] border border-[#EEF2F6] p-5 shadow-sm rounded-lg">
        <h1 className="text-2xl font-semibold mt-1">New Template</h1>
        
        {/* Form Card */}
        <div className="bg-[#FCFCFD] border border-[#EAECF0] rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Template Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Template Name *
              </label>
              <input
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                required
                placeholder="e.g., Inventory Import Template, QR Label Template"
              />
            </div>

            {/* Template Type */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Template Type *
              </label>
              <select
                value={templateType}
                onChange={(e) => setTemplateType(e.target.value)}
                className="w-full bg-white text-[#697586] border border-[#CDD5DF] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF8A3D]"
                required
              >
                <option value="">Select Template Type</option>
                {templateTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#364152]">
                Template File *
              </label>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FF8A3D] transition">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".xlsx,.xls,.csv,.docx,.pdf"
                  required
                />
                
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FiUpload className="text-gray-400 text-xl" />
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {file ? file.name : "Click to upload"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {file 
                          ? `Size: ${(file.size / 1024).toFixed(2)} KB` 
                          : "Supports: XLSX, XLS, CSV, DOCX, PDF"
                        }
                      </p>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => document.getElementById('file-upload')?.click()}
                      className="mt-2 text-sm text-[#FF8A3D] hover:text-[#FF8A3D]/80"
                    >
                      Browse files
                    </button>
                  </div>
                </label>
                
                {file && (
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="mt-2 text-sm text-red-500 hover:text-red-700"
                  >
                    Remove file
                  </button>
                )}
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
                placeholder="Describe what this template is for, any instructions..."
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
                Upload Template
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTemplatePage;