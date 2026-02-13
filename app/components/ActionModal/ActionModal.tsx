"use client";

import React, { useEffect, useRef } from "react";

interface ActionModalProps {
  isOpen: boolean;
  position: { top: number; left: number } | null;
  onClose: () => void;
  rowData?: any;
  tabName?: string;
  actions?: {
    label: string;
    icon?: string;
    onClick: () => void;
    className?: string;
  }[];
}

export default function ActionModal({
  isOpen,
  position,
  onClose,
  rowData,
  tabName,
  actions,
}: ActionModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Default actions based on tab
  const defaultActions = [
    {
      label: "Edit",
      icon: "✎",
      onClick: () => {
        console.log("Edit clicked for:", rowData);
        onClose();
      },
    },
    {
      label: "View Details",
      icon: "👁",
      onClick: () => {
        console.log("View clicked for:", rowData);
        onClose();
      },
    },
    {
      label: "Delete",
      icon: "🗑",
      onClick: () => {
        console.log("Delete clicked for:", rowData);
        onClose();
      },
      className: "text-red-600 hover:bg-red-50",
    },
  ];

  const menuActions = actions || defaultActions;

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !position) return null;

  return (
    <div
      ref={modalRef}
      className="fixed bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1 w-40"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        maxHeight: "calc(100vh - 20px)",
        overflowY: "auto",
      }}
    >
      {/* Header with row info */}
      {rowData && (
        <div className="px-2 py-1.5 border-b border-gray-100">
          <p className="text-xs text-gray-500 truncate">
            {typeof rowData === "object" && rowData.name
              ? `${rowData.name.substring(0, 15)}`
              : `${tabName || "Item"}`}
          </p>
        </div>
      )}

      {/* Menu items */}
      <div className="py-0.5">
        {menuActions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            className={`w-full text-left px-2 py-1.5 text-xs hover:bg-gray-100 transition flex items-center gap-1.5 ${
              action.className || ""
            }`}
          >
            {action.icon && <span className="w-3 text-center text-sm">{action.icon}</span>}
            <span className="truncate">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
