"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useLayout } from "./context/layoutContext";

/* ---------------- NOT FOUND COMPONENT ---------------- */
export default function NotFound() {
  const { setLayoutVisible } = useLayout();

  // Hide sidebar and header when on 404 page
  useEffect(() => {
    setLayoutVisible(false);

    // Cleanup: show them again when leaving the 404 page
    return () => setLayoutVisible(true);
  }, [setLayoutVisible]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F4F3F3] px-6 py-24 text-center sm:py-32 lg:px-8">
      <div className="flex flex-col items-center gap-6 max-w-md">
        {/* 404 Illustration */}
        <div className="text-9xl font-bold text-[#FF8A3D] opacity-20 select-none">
          404
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-[#364152] sm:text-5xl">
            Page Not Found
          </h1>
          <p className="text-base leading-7 text-[#697586]">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button
              leftSection={<IconHome size={18} />}
              style={{
                backgroundColor: "#FF8A3D",
                color: "black",
                borderRadius: "8px",
                height: "45px",
                padding: "0 24px",
                fontWeight: "600",
              }}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-[#FF8A3D] opacity-5 blur-[120px] rounded-full" />
    </div>
  );
}
