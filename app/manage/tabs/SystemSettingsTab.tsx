"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface SystemSettingsTabProps {
  stats?: any[];
}

// Toggle Switch Component - Exact screenshot styling
const ToggleSwitch = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) => {
  return (
    <label className="flex items-center gap-4 cursor-pointer py-1">
      {/* TOGGLE FIRST */}
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div
          className={`w-11 h-6 rounded-full transition-colors duration-200 ${
            checked ? "bg-[#FF8A3D]" : "bg-gray-300"
          }`}
        >
          <span
            className={` satoshi-font absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow-sm ${
              checked ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </div>
      </div>

      {/* TEXT AFTER TOGGLE */}
      <span className="text-sm text-gray-700 font-medium">
        {label}
      </span>
    </label>
  );
};


export default function SystemSettingsTab({ stats }: SystemSettingsTabProps) {
  // General Settings State
  const [currency, setCurrency] = useState("GBP");
  const [defaultSite, setDefaultSite] = useState("Warehouse A - Shelf B");
  const [lowStockThreshold, setLowStockThreshold] = useState("20%");
  const [darkModeDefault, setDarkModeDefault] = useState(true);

  // Behaviour Settings State
  const [requireReasonDelete, setRequireReasonDelete] = useState(true);
  const [requireReasonStockAdjust, setRequireReasonStockAdjust] = useState(true);
  const [disableSerialTracking, setDisableSerialTracking] = useState(true);
  const [procurementOverdueAlerts, setProcurementOverdueAlerts] = useState(true);

  // Modules State
  const [procurementModule, setProcurementModule] = useState(true);
  const [reportsModule, setReportsModule] = useState(true);
  const [labelsQRModule, setLabelsQRModule] = useState(true);
  const [templatesModule, setTemplatesModule] = useState(true);

  return (
    <div className="space-y-5">
      {/* General Settings */}
      <div className="bg-white rounded-lg border border-[#E6E6E9] p-6 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-5">
          General Settings
        </h2>
        <div className="flex gap-5">
          {/* Currency */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <div className="relative">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full border border-[#E6E6E9] rounded-lg px-3 py-2.5 text-sm text-[#697586] focus:outline-none focus:ring-1 focus:ring-[#FF8A3D] focus:border-[#FF8A3D] appearance-none bg-white"
              >
                <option value="GBP">£ GBP</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
                <option value="INR">₹ INR</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm" />
            </div>
          </div>

          {/* Default Site */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Site
            </label>
            <div className="relative">
              <select
                value={defaultSite}
                onChange={(e) => setDefaultSite(e.target.value)}
                className="w-full border border-[#E6E6E9] rounded-lg px-3 py-2.5 text-sm text-[#697586] focus:outline-none focus:ring-1 focus:ring-[#FF8A3D] focus:border-[#FF8A3D] appearance-none bg-white"
              >
                <option value="Warehouse A - Shelf B">
                  Warehouse A - Shelf B
                </option>
                <option value="Warehouse A - Shelf D">
                  Warehouse A - Shelf D
                </option>
                <option value="Warehouse B - Shelf B">
                  Warehouse B - Shelf B
                </option>
                <option value="Warehouse C - Shelf C">
                  Warehouse C - Shelf C
                </option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm" />
            </div>
          </div>

          {/* Low Stock Threshold */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Low Stock Threshold
            </label>
            <input
              type="text"
              value={lowStockThreshold}
              onChange={(e) => setLowStockThreshold(e.target.value)}
              className="w-full border border-[#E6E6E9] rounded-lg px-3 py-2.5 text-sm text-[#697586] focus:outline-none focus:ring-1 focus:ring-[#FF8A3D] focus:border-[#FF8A3D] placeholder:text-[#697586]"
              placeholder="20%"
            />
          </div>
        </div>

        {/* Enable Dark Mode by Default */}
        <div className="pt-1">
          <ToggleSwitch
            checked={darkModeDefault}
            onChange={setDarkModeDefault}
            label="Enable Dark Mode by Default"
          />
        </div>
    
      </div>

      {/* Behaviour Settings */}
      <div className="bg-white rounded-lg border border-[#E6E6E9] p-3 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-2">
          Behaviour Settings
        </h2>
        <div className="space-y-4">
          <ToggleSwitch
           
            onChange={setRequireReasonDelete}
            label="Require Reason for Deleting Items" 
            checked={requireReasonDelete}
          />
          <ToggleSwitch
            checked={requireReasonStockAdjust}
            onChange={setRequireReasonStockAdjust}
            label="Require Reason for Stock Adjustments"
          />
          <ToggleSwitch
            checked={disableSerialTracking}
            onChange={setDisableSerialTracking}
            label="Disable Serial Tracking"
          />
          <ToggleSwitch
            checked={procurementOverdueAlerts}
            onChange={setProcurementOverdueAlerts}
            label="Enable Procurement Overdue Alerts"
          />
        </div>
      </div>

      {/* Modules */}
      <div className="bg-white rounded-lg border border-[#E6E6E9] p-6 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-5">Modules</h2>
        <div className="space-y-4">
          <ToggleSwitch
            checked={procurementModule}
            onChange={setProcurementModule}
            label="Procurement Module"
          />
          <ToggleSwitch
            checked={reportsModule}
            onChange={setReportsModule}
            label="Reports Module"
          />
          <ToggleSwitch
            checked={labelsQRModule}
            onChange={setLabelsQRModule}
            label="Labels & QR Module"
          />
          <ToggleSwitch
            checked={templatesModule}
            onChange={setTemplatesModule}
            label="Templates Module"
          />
        </div>
      </div>
    </div>
  );
}

