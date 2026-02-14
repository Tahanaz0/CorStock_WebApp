"use client";

import React from "react";
import AddTagForm from "@/app/components/manage/AddTagForm";
import { useRouter } from "next/navigation";

const AddTagPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen p-6 shadow-sm">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <span className="cursor-pointer hover:text-[#FF8A3D]" onClick={() => router.push("/dashboard")}>Dashboard</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-[#FF8A3D]" onClick={() => router.push("/manage")}>Manage</span>
          <span>/</span>
          <span>Add New Tag</span>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border border-[#EEF2F6] p-5 shadow-sm rounded-lg">
        <h1 className="text-2xl font-semibold mt-1">New Tag</h1>
        <div className="bg-[#FCFCFD] border border-[#EAECF0] rounded-lg p-6">
          <AddTagForm />
        </div>
      </div>
    </div>
  );
};

export default AddTagPage;