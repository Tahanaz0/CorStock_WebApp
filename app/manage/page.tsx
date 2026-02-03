import React from "react";
// import { FiChevronDown } from "react-icons/fi";

const Manage = () => {
  return (
    <>
      <div className="bg-[#F4F3F3] min-h-screen p-3 font-sans">
        <div className="flex justify-between items-center  p-3 ">
          <div>
            <h2 className="text-2xl font-semibold">Manage</h2>
            <p className="text-gray-500 text-sm">
              Configure CoreStock system settings, users, sites, suppliers,
              metadata, and platform behaviour.{" "}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-[#FF8A3D]  px-3 py-2 rounded-lg shadow-sm hover:bg-[#FF8A3D] flex items-center gap-2">
              <img src="/plus.png" alt="print" className="w-3 h-3" />
              Add New
            </button>

            <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <img src="/export.png" alt="export" className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex gap-3 p-6 rounded-lg shadow-sm">
          <div className=" w-40 border border-[#EEF2F6] round-lg  mb-6">
            <ul className="grid p-2 bg-[#FCFCFD] " >
              <li className="inline-block mr-6 pb-2 border-b-2 border-[#FF8A3D] text-[#FF8A3D]">
                Users
              </li> 
              <li className="inline-block mr-6 pb-2 text-gray-500 hover:text-gray-700 cursor-pointer">  
                Sites
              </li> 
              <li className="inline-block mr-6 pb-2 text-gray-500 hover:text-gray-700 cursor-pointer">  
                Suppliers
              </li> 
              <li className="inline-block mr-6 pb-2 text-gray-500 hover:text-gray-700 cursor-pointer">  
                Categories
              </li> 
              <li className="inline-block mr-6 pb-2 text-gray-500 hover:text-gray-700 cursor-pointer">  
                Tags
              </li>
              <li className="inline-block mr-6 pb-2 text-gray-500 hover:text-gray-700 cursor-pointer">  
             System Settings
              </li> 
              <li className="inline-block mr-6 pb-2 text-gray-500 hover:text-gray-700 cursor-pointer">  
                Templates
              </li>
              <li className="inline-block mr-6 pb-2 text-gray-500 hover:text-gray-700 cursor-pointer">  
                Audit Logs
              </li>
            </ul>
          </div>
          <div className="bg-white flex-1 rounded-lg p-2 border border-[#EEF2F6] shadow-sm">
            <h1>User</h1>
            <div className="flex">
              <div className="w-50 h-20 border border-[#EAECF0] rounded-lg p-2">
                <div className="flex justify-between items-center">
                  <p>Total User</p>
                  <img src="./user.png" alt="" />
                </div>
                <h2>150</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Manage;
