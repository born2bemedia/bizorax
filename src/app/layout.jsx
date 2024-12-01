"use client";
import React from "react";
import { Geist } from "next/font/google";
import "@/styles/base.scss";
import HeaderDefault from "@/components/HeaderDefault";
import HeaderCustom from "@/components/HeaderCustom";
import Footer from "@/components/Footer";
import { PopupsProvider } from "@/context/PopupsContext";
import { usePathname } from "next/navigation";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const renderHeader = () => {
    if (pathname === "/") {
      return <HeaderCustom />;
    }
    return <HeaderDefault />;
  };

  return (
    <html lang="en">
      <body className={`${geist.className}`}>
        <PopupsProvider>
          {renderHeader()}
          <main className="site">{children}</main>
          <Footer />
        </PopupsProvider>
      </body>
    </html>
  );
}