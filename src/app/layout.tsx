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
  title: "NuTab Digital",
  description: "Custom software, web development, and digital solutions",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poly.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
