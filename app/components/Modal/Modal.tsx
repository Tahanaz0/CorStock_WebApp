"use client";

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg shadow-lg w-[92%] max-w-[460px] p-6 border border-[#E6E6E9]">
        <div className="relative mb-4">
          {title && (
            <h3 className="text-base font-semibold text-center">{title}</h3>
          )}
          <button
            onClick={onClose}
            className="absolute right-0 top-0 -mt-1 -mr-1 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="text-sm text-[#364152]">{children}</div>
      </div>
    </div>
  );
}
