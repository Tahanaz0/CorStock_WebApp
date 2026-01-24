"use client";

import React, { useState } from "react";
import ProcurementTable from "@/app/components/procurement/procurementTable";
import ProcurementTableHeader from "@/app/components/procurement/procurementTableHeader";

const Procurement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [expiryFilter, setExpiryFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [showExpiring30Days, setShowExpiring30Days] = useState(false);
  return (
    <>
      <div className="bg-[#F4F3F3] page-container flex flex-col gap-5">
        {/* Header */}
        <ProcurementTableHeader
          title="Organizations"
          subtitle="Manage all organizations"
          showButton={true}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          showSearch={true}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          expiryFilter={expiryFilter}
          setExpiryFilter={setExpiryFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showExpiring30Days={showExpiring30Days}
          setShowExpiring30Days={setShowExpiring30Days}
        />

        {/* Table */}
        <ProcurementTable
          searchQuery={searchQuery}
          statusFilter={statusFilter}
          expiryFilter={expiryFilter}
          sortBy={sortBy}
          showExpiring30Days={showExpiring30Days}
        />
      </div>
    </>
  );
};

export default Procurement;
