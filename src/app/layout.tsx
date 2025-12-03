// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@components/common/Navbar";
import Footer from "@components/sections/Footer";
import { Poly } from "next/font/google";

const poly = Poly({
  weight: "400",           // <-- required
  subsets: ["latin"],
  variable: "--font-poly",
});

export const metadata = {
  title: "KDT Restaurant - Delicious Food Made With Love",
  description: "Experience the best of Indian and International cuisine at KDT Restaurant. Explore our diverse menu, special offers, and more!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poly.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
