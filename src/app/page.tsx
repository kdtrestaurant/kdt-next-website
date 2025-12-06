// Server component for better performance

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
  "/images/gallery-Golden-Chicken-Wings.webp",
  "/images/gallery-Chaat.webp",
  "/images/gallery-Meat.webp",
  "/images/gallery-Chole-Bhatura.webp",
  "/images/gallery-Custom-Pizza.webp",
  "/images/gallery-Chicken.webp",
  "/images/gallery-Gol-Gappa.webp",
];

export const metadata = {
  title: "Home",
  description:
    "Discover KDT Restaurant — Indian and international dishes made with love. Explore our menu and specials.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <main className="text-white">
      {/* HERO */}
      <section className="relative w-full h-[50vh] md:h-[75vh] flex items-center justify-center">
        <Image
          src={`${base}/images/main-page.webp`}
          alt="KDT Restaurant hero banner showing signature dishes"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
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
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center text-[#e4b745] mb-2">
          Menu Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {MENU_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/menu/?category=${encodeURIComponent(cat)}`}
              className="px-5 py-3 border-2 border-yellow-500 rounded-lg font-bold uppercase hover:bg-yellow-600 hover:border-yellow-600 transition transform hover:scale-105"
            >
              {cat}
            </Link>
          ))}
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
            <div key={index} className="rounded-lg overflow-hidden shadow-lg relative aspect-square">
              <Image
                src={`${base}${img}`}
                alt={`KDT food gallery item ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM RESTAURANT BANNER */}
      <section className="py-12">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl relative h-[300px] md:h-[500px] lg:h-[600px]">
          <Image
            src={`${base}/images/main-KDT-Interior.webp`}
            alt="Interior of KDT Restaurant in Chilliwack, BC"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>
      </section>
    </main>
  );
}
