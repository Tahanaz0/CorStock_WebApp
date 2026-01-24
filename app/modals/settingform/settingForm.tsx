"use client";
import Image from "next/image";
import xCloser from "../../assets/images/x-close.png";
import refresherIcon from "../../assets/images/refresh.png";
import EmailNotification from "../../components/settingform/EmailNotification";
import PushNotification from "../../components/settingform/PushNotification";
import InAppAlert from "../../components/settingform/InAppAlert";
import ThemeSelector from "../../components/settingform/DarkThemeSelector";
import InterfaceDensity from "../../components/settingform/InterfaceDensity";
import TableRowHeight from "../../components/settingform/TableRowHeight";
import SidebarBehaviour from "../../components/settingform/SidebarBehaviour";
import Language from "../../components/settingform/Language";
import NumberFormat from "../../components/settingform/NumberFormat";
import DateFormat from "../../components/settingform/DateFormat";
import { toast } from "react-toastify";

interface SettingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingForm: React.FC<SettingFormProps> = ({ isOpen, onClose }) => {
  const handleSaveChanges = () => {
    // Simulate save logic
    toast.success("Settings saved successfully!");
  };

  const handleReset = () => {
    // Simulate reset logic
    toast.info("Settings reset to defaults.");
  };

  const handleCancel = () => {
    toast.error("Changes cancelled.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {/* Outer modal with border-radius */}
      <div className="bg-white mt-8 rounded-xl w-155 shadow-lg max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex flex-row justify-between items-center w-full min-h-6 py-3 bg-white px-4 mb-1 rounded-t-xl shadow-sm border border-gray-100">
          <div className="shrink-0">
            <h1 className="text-base sm:text-[24px] font-medium text-[#202939] whitespace-nowrap">
              Setting
            </h1>
          </div>

          <div className="flex items-center">
            <button onClick={onClose}>
              <Image
                src={xCloser}
                alt="x closer"
                className="cursor-pointer hover:opacity-70 transition-opacity size-5"
              />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-auto">
          <ThemeSelector />
          <InterfaceDensity />
          <TableRowHeight />
          <SidebarBehaviour />
          <Language />
          <NumberFormat />
          <DateFormat />
          <EmailNotification />
          <PushNotification />
          <InAppAlert />
        </div>

        {/* Footer - always visible */}
        <div className="flex flex-col min-[601px]:flex-row w-full min-[601px]:items-center justify-between bg-[#FFFFFF] py-3 px-4 rounded-b-xl gap-3 border-t border-gray-100">
          {/* Heading Section */}
          <div className="shrink-0">
            <h4 className="text-[#4B5565] text-sm font-semibold whitespace-nowrap manrope-font cursor-pointer">
              Clear Cache & Sync
            </h4>
          </div>

          {/* Buttons Section */}
          <div className="grid grid-cols-[1fr_0.6fr_1fr] min-[601px]:flex min-[601px]:flex-row items-center gap-2 w-full min-[601px]:w-auto">
            {/* Cancel Button */}
            <button
              onClick={handleCancel}
              className="border border-[#CDD5DF] text-[#364152] px-3 py-2 rounded-lg font-semibold manrope-font cursor-pointer"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              Cancel
            </button>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="border border-[#CDD5DF] text-[#364152] px-3 py-2 rounded-lg font-semibold manrope-font cursor-pointer"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              Reset To Defaults
            </button>

            {/* Save Changes Button */}
            <button
              onClick={handleSaveChanges}
              className="bg-[#FF8A3D] px-3 py-2 rounded-lg manrope-font cursor-pointer"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingForm;
