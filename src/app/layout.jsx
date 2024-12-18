"use client";
import React, { useEffect } from "react";
import { Geist } from "next/font/google";
import "@/styles/base.scss";
import HeaderDefault from "@/components/HeaderDefault";
import HeaderCustom from "@/components/HeaderCustom";
import Footer from "@/components/Footer";
import { PopupsProvider } from "@/context/PopupsContext";
import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
/* import { NextIntlClientProvider, useMessages } from "next-intl"; */
import ServicePopup from "@/components/ServicePopup";
import Preloader from "@/components/Preloader";


const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current pathname:", pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geist.className}`}>
        <GoogleAnalytics gaId="G-CXE06DH8RK" />
        <PopupsProvider>
          <Preloader />
          {pathname === "/" || pathname === "/industries" || pathname === "/approach" || pathname === "/insights" || pathname === "/terms-and-conditions" || pathname === "/privacy-policy" || pathname === "/cookie-policy" || pathname === "/refund-policy" ? (
            <HeaderCustom />
          ) : (
            <HeaderDefault />
          )}
          <main className="site">{children}</main>
          <Footer />
          <ServicePopup />
        </PopupsProvider>
      </body>
    </html>
  );
}
