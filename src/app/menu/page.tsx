'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import menuData from '../../../data/menu.json';

export default function MenuPage() {
  const router = useRouter();
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pageTopRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  /* -------------------------------------------------------
     Detect category in URL and smooth scroll after open
  ---------------------------------------------------------*/
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      const idx = menuData.findIndex(cat => cat.category === categoryParam);

      if (idx !== -1) {
        setOpenIndex(idx);

        setTimeout(() => {
          categoryRefs.current[idx]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 250);
      }
    }
  }, []);

  /* -------------------------------------------------------
     Back-to-top button visibility
  ---------------------------------------------------------*/
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------------------------------
     Prevent back-to-top button from overlapping footer
  ---------------------------------------------------------*/
  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setFooterVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------
     Toggle category + smooth scroll
  ---------------------------------------------------------*/
  const toggleCategory = (index: number, category: string) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    router.replace(
      newIndex !== null ? `?category=${encodeURIComponent(category)}` : "",
      { scroll: false }
    );

    if (newIndex !== null) {
      setTimeout(() => {
        categoryRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 60);
    }
  };

  /* -------------------------------------------------------
     Smooth scroll back to top
  ---------------------------------------------------------*/
  const scrollToTop = () => {
    pageTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="menu-page bg-black text-white max-w-[1400px] mx-auto pb-20"
      ref={pageTopRef}
    >
      {/* Banner */}
      <div className="menu-banner relative max-w-[1800px] h-[400px] mx-auto rounded-[20px] overflow-hidden mb-10">
        <Image
          src={`${base}/images/menu-KDT-Menu-Banner.webp`}
          alt="KDT Restaurant Menu Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <h1 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[60px] font-semibold text-[#e4b745] text-shadow z-10">
          Menu
        </h1>
      </div>

      {/* Menu Categories */}
      {menuData.map((category, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="mb-10"
            ref={(el) => { categoryRefs.current[index] = el; }}
          >
            {/* CATEGORY HEADER */}
            <button
              onClick={() => toggleCategory(index, category.category)}
              className={`
                w-full flex justify-between items-center mb-2 px-4 py-3 rounded transition-all cursor-pointer
                ${isOpen
                  ? "bg-[#e4b745] text-black scale-[1.02]"
                  : "bg-[#111] text-[#e4b745] hover:bg-[#222] hover:scale-[1.02]"
                }
              `}
            >
              <h2 className="text-3xl font-semibold">{category.category}</h2>

              <div className="flex items-center space-x-2">
                {isOpen && (
                  <>
                    <Image
                      src={`${base}/images/veg-icon.webp`}
                      width={30}
                      height={30}
                      alt="Vegetarian Icon"
                      className="inline-block"
                    />

                    <span className="text-sm opacity-80">
                      = Vegetarian
                    </span>
                  </>
                )}
              </div>

            </button>

            {/* COLLAPSIBLE WRAPPER */}
            <div
              className={`
                overflow-hidden
                ${isOpen ? "max-h-[5000px]" : "max-h-0"}
              `}
              style={{ transition: isOpen ? "max-height 0.3s ease" : "none" }}
            >
              {category.image && (
                <div className="text-center mb-5">
                  <Image
                    src={`${base}${category.image}`}
                    alt={category.category}
                    width={700}
                    height={400}
                    loading="lazy"
                    className="rounded-lg border border-[#333] shadow-lg mx-auto"
                  />
                </div>
              )}

              <div className="menu-items flex flex-wrap gap-x-[70px] gap-y-1 px-5 pb-4">
                {(() => {
                  const half = Math.ceil(category.items.length / 2);
                  const columns = [
                    category.items.slice(0, half),
                    category.items.slice(half)
                  ];

                  return columns.map((colItems, colIndex) => (
                    <div key={colIndex} className="column flex-1 min-w-[45%]">
                      {colItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="menu-item flex items-start mb-3 w-full border-b border-[#333] pb-2"
                        >
                          {item.vegetarian ? (
                            <Image
                              src={`${base}/images/veg-icon.webp`}
                              width={30}
                              height={30}
                              alt="Vegetarian"
                              loading="lazy"
                              className="mr-5 rotate-[-90deg]"
                            />
                          ) : (
                            <span className="w-[40px] inline-block mr-2"></span>
                          )}

                          <div className="flex-1">
                            <h3 className="flex justify-between items-center text-[18px] mb-1">
                              {item.name}
                              <span className="font-bold">{item.price}</span>
                            </h3>

                            {item.desc && (
                              <p className="text-[15px] text-[#e4b745] pb-1">{item.desc}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        );
      })}

      {/* Invisible footer watcher */}
      <div ref={footerRef} className="h-[1px]" />

      {/* FLOATING BACK TO TOP BUTTON */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className={`
            fixed right-6 px-5 py-3 rounded-full shadow-lg text-lg font-semibold 
            bg-[#e4b745] text-black hover:bg-[#f1ca50] transition
          `}
          style={{
            bottom: footerVisible ? "120px" : "30px",
            transition: "bottom 0.3s ease"
          }}
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
