// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const MENU_CATEGORIES = [
  "Appetizers",
  "Non-Vegetarian",
  "Vegetarian",
  "Naan Bread",
  "Pakora",
  "Pasta & More",
  "Sides",
  "Drinks",
  "Dessert",
  "Specialty Pizzas",
  "Pizza Menu",
];

const GALLERY_IMAGES = [
  "/images/gallery-Paneer-Pakora.webp",
  "/images/gallery-lasagna.webp",
  "/images/gallery-Chole-Bhatura.webp",
  "/images/gallery-Chaat.webp",
  "/images/gallery-Gol-Gappa.webp",
  "/images/gallery-Meat.webp",
  "/images/gallery-Custom-Pizza.webp",
  "/images/gallery-Golden-Chicken-Wings.webp",
  "/images/gallery-Chicken.webp",
];

export default function HomePage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <main className="text-white">
      {/* HERO */}
      <section
        className="relative w-full h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${base}/images/main-page.webp')`,
        }}
      >
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome To<br />KDT Restaurant
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 drop-shadow-lg">
            Where Food Is Made With Love!
          </p>
          <Link
            href="/menu/"
            className="inline-block px-7 py-3 border-2 border-yellow-500 rounded-lg uppercase font-bold hover:bg-yellow-600 hover:border-yellow-600 transition transform hover:scale-105"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* MENU CATEGORY BUTTONS */}
      <section className="py-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center text-yellow-500 mb-8">
          Menu Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {MENU_CATEGORIES.map((cat) => {
            const catId = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <Link
                key={cat}
                href={`/menu/#category-${catId}`}
                className="px-5 py-3 border-2 border-yellow-500 rounded-lg font-bold uppercase hover:bg-yellow-600 hover:border-yellow-600 transition transform hover:scale-105"
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </section>

      {/* FOOD GALLERY */}
      <section className="py-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center text-yellow-500 mb-2">
          A Taste of KDT
        </h2>
        <p className="text-center text-lg md:text-xl mb-8 text-white/80">
          Freshly made with love, every day
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={img}
                alt="KDT Food"
                width={400}
                height={400}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM RESTAURANT BANNER */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={`${base}/images/main-KDT-Interior.webp`}
            alt="KDT Interior"
            width={1600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
