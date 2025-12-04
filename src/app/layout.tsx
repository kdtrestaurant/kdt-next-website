// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@components/common/Navbar";
import Footer from "@components/sections/Footer";
import { Poly } from "next/font/google";
import Script from "next/script";

const poly = Poly({
  weight: "400",           // <-- required
  subsets: ["latin"],
  variable: "--font-poly",
});

export const metadata = {
  title: "KDT Restaurant - Delicious Food Made With Love",
  description:
    "Experience the best of Indian and International cuisine at KDT Restaurant. Explore our diverse menu, special offers, and more!",
  icons: {
    icon: "/favicon.svg",       // Default favicon for modern browsers
    shortcut: "/favicon.svg",   // Shortcut icon for older browsers
    apple: "/favicon.svg",      // For iOS home screen / Safari
    // Optional: add a .ico fallback for maximum compatibility
    // icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poly.variable}>
      <body>
        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-0TEMH9GD4J'}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-0TEMH9GD4J'}');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
