"use client";

/* ---------------- IMPORTS ---------------- */
import React, { memo } from "react";
import { protectedRoutes } from "./routes";
import SideBar from "../components/sidebar/sidebar";
import Header from "../components/header/header";

/* ---------------- INTERFACES ---------------- */
interface PathCheckerProps {
  pathName: string;
  open: boolean;
  setOpen: (v: boolean) => void;
}

/* ---------------- COMPONENT ---------------- */
const PathChecker = memo(({ pathName, open, setOpen }: PathCheckerProps) => {
  // ----- CHECK IF THE CURRENT PATH IS A PROTECTED ROUTE -----
const show =
  protectedRoutes.includes(pathName) ||
  /^\/organization\/[^\/]+$/.test(pathName) ||
  pathName.startsWith("/add-user") || // ✅ Yeh add karein
  pathName === "/add-user"; // ✅ Ya fir yeh

  // ----- RENDER NOTHING IF THE ROUTE IS NOT PROTECTED -----
  if (!show) return null;

  // ----- RENDER HEADER AND SIDEBAR FOR PROTECTED ROUTES -----
  return (
    <>
      <Header sidebarOpen={open} />
      <SideBar open={open} setOpen={setOpen} />
    </>
  );
});

PathChecker.displayName = "PathChecker";

export default PathChecker;
