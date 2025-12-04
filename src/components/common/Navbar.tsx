"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Menu", href: "/menu/" },
  { name: "Blog", href: "/blog/" },
  { name: "FAQ", href: "/faq/" },
  { name: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-black text-white z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src={`${base}/images/Header-Logo.webp`}
              alt="KDT Logo"
              width={150}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold transition-all duration-200 ${isActive ? "text-yellow-500 scale-110" : "hover:text-yellow-500"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Primary / Secondary Buttons */}
          <a
            href="https://widgets.libroreserve.com/WEB/BC017491347510/book"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 bg-yellow-500 text-black font-bold uppercase rounded-full hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Order Online
          </a>
          {/* Primary / Secondary Buttons 
          <a
            href="#" // placeholder for reservations
            className="ml-2 px-5 py-2 border-2 border-yellow-500 text-yellow-500 font-bold uppercase rounded-full hover:bg-yellow-500 hover:text-black transition transform hover:scale-105"
          >
            Reserve Table
          </a>
          */}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl cursor-pointer hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-black w-full absolute top-full left-0 pt-4 pb-8 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 font-semibold w-full text-center transition-all duration-200 ${isActive ? "text-yellow-500 scale-110" : "hover:text-yellow-500"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile Buttons */}
          <a
            href="https://widgets.libroreserve.com/WEB/BC017491347510/book"
            target="_blank"
            rel="noopener noreferrer"
            className="w-2/5 text-center px-5 py-2 bg-yellow-500 text-black font-bold uppercase rounded-full hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Order Online
          </a>
          {/* Mobile Buttons 
          <a
            href="#"
            className="w-3/4 text-center px-5 py-2 border-2 border-yellow-500 text-yellow-500 font-bold uppercase rounded-full hover:bg-yellow-500 hover:text-black transition transform hover:scale-105"
          >
            Reserve Table
          </a>
          */}
        </nav>
      )}
    </header>
  );
}
