"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LayoutContextType {
  isLayoutVisible: boolean;
  setLayoutVisible: (visible: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isLayoutVisible, setLayoutVisible] = useState(true);

  return (
    <LayoutContext.Provider value={{ isLayoutVisible, setLayoutVisible }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined)
    throw new Error("useLayout must be used within a LayoutProvider");

  return context;
};
