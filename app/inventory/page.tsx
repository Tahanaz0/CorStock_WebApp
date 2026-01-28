"use client";

import React, { useState } from "react";
import InventoryTable from "@/app/components/inventory/inventoryTable";
import InventoryTableHeader from "@/app/components/inventory/inventoryTableHeader";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [showExpiring30Days, setShowExpiring30Days] = useState(false);
  return (
    <>
      <div className="bg-[#F4F3F3] page-container flex flex-col gap-5">
        {/* Header */}
        <InventoryTableHeader
          title="Organizations"
          subtitle="Manage all organizations"
          showButton={true}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          showSearch={true}
          setStatusFilter={setStatusFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showExpiring30Days={showExpiring30Days}
          setShowExpiring30Days={setShowExpiring30Days}
        />

        {/* Table */}
        <InventoryTable
          searchQuery={searchQuery}
          statusFilter={statusFilter}
          sortBy={sortBy}
          showExpiring30Days={showExpiring30Days}
        />
      </div>
    </>
  );
};

export default Inventory;
