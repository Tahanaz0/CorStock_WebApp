"use client";
import Image from "next/image";
import xCloser from "../assets/images/x-close.png";
import { Group } from "@mantine/core";
import SupplierFilter from "../modals/filterform/supplierFilter";
import CategoryFilter from "../modals/filterform/categoryFilter";
import TagsFilter from "../modals/filterform/tagsFilter";
import SiteFilter from "../modals/filterform/siteFilter";
import StockLevelFilter from "../modals/filterform/StockLevelFilter";
import StockTypeFilter from "../modals/filterform/StockTypeFilter";
import ManufucturerFilter from "../modals/filterform/ManufucturerFilter";
import PriceValueFilter from "../modals/filterform/PriceValueFilter";
import { toast } from "react-toastify";

const FilterPage = () => {
  const handleClearAll = () => {
    toast.info("Clear all functionality not implemented yet.");
  };

  const handleApplyFilter = () => {
    toast.info("Apply filter functionality not implemented yet.");
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-400 py-10 ">
      <div className="h-auto w-[90%] max-w-100 bg-[#FFFFFF] p-2 border border-[#FFFFFF] rounded-xl shadow-lg">
        <div className="flex flex-row justify-between items-center w-full h-6 bg-white px-2 mb-1 rounded-sm">
          <h1 className="text-sm font-semibold truncate text-[#202939] satoshi-font">
            Filters
          </h1>
          <Image
            src={xCloser}
            alt="x closer"
            width={14}
            height={14}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </div>

        <SupplierFilter />
        <CategoryFilter />
        <TagsFilter />
        <SiteFilter />

        <div className="flex flex-row justify-between items-center w-full h-6 bg-white px-2 mb-1 mt-2 rounded-sm">
          <h1 className="text-sm font-semibold truncate text-[#9AA4B2] satoshi-font">
            Recommended
          </h1>
        </div>

        <StockLevelFilter />
        <PriceValueFilter />
        <ManufucturerFilter />
        <StockTypeFilter />

        <Group className="flex w-full bg-[#FFFFFF] mt-2 py-1 rounded-sm">
          <div className="ml-auto flex flex-row items-center gap-1.5 flex-nowrap">
            <button
              onClick={handleClearAll}
              className="h-6 shrink-0 px-3 w-24 border border-[#CDD5DF] bg-[#FFFFFF] text-[#364152] rounded-md font-medium text-[10px] leading-none manrope-font"
            >
              Clear All
            </button>
            <button
              onClick={handleApplyFilter}
              className="h-6 shrink-0 px-1 w-24 border border-[#FF8A3D] bg-[#FF8A3D] text-[#000000] rounded-md font-medium text-[10px] leading-none manrope-font"
            >
              Apply Filter
            </button>
          </div>
        </Group>
      </div>
    </div>
  );
};

export default FilterPage;
