import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { SearchProvider } from "./context/searchContext";
import { LayoutProvider } from "./context/layoutContext";
import ClientLayout from "./client-layout";
import { satoshi } from "./fonts";

export const metadata: Metadata = {
  title: "Core Stock",
  description: "Core Stock by Blockwork IT",
  icons: {
    icon: "/favicon.ico", // ya "/favicon.png"
  },
};


const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" {...mantineHtmlProps} className={`${satoshi.variable} font-sans`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={{ fontFamily: "Satosi, sans-serif" }}>
          <LayoutProvider>
            <SearchProvider>
              <ClientLayout>{children}</ClientLayout>
            </SearchProvider>
          </LayoutProvider>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
