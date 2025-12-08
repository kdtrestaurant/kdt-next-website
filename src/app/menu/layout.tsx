import type { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
  title: "Menu",
  description:
    "Browse the full KDT Restaurant menu in Chilliwack, BC — authentic Indian curries, tandoori dishes, vegetarian options, naan bread, pakora, specialty pizzas, and more. View prices and order online.",
  alternates: { canonical: "/menu/" },
  keywords: [
    "KDT menu",
    "Indian food menu Chilliwack",
    "pizza menu",
    "vegetarian Indian food",
    "butter chicken",
    "naan bread",
    "tandoori",
    "biryani",
    "samosa",
    "Yarrow restaurant",
    "Indian takeout BC",
  ],
  openGraph: {
    type: "website",
    url: "https://kdtrestaurant.com/menu/",
    title: "Menu | KDT Restaurant - Indian & International Cuisine in Chilliwack",
    description:
      "Explore our full menu — authentic Indian curries, tandoori, vegetarian dishes, specialty pizzas, naan, and more. Order online or visit us in Chilliwack.",
    siteName: "KDT Restaurant",
    locale: "en_CA",
    images: [
      {
        url: "/images/menu-KDT-Menu-Banner.webp",
        width: 1200,
        height: 630,
        alt: "KDT Restaurant Menu featuring Indian curries, pizzas, and more",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | KDT Restaurant - Indian & International Cuisine",
    description:
      "Explore our full menu — authentic Indian curries, tandoori, vegetarian dishes, specialty pizzas, naan, and more.",
    images: ["/images/menu-KDT-Menu-Banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Menu Schema.org structured data for rich results
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "KDT Restaurant Menu",
  description:
    "Full menu featuring Indian curries, tandoori dishes, vegetarian options, pizzas, naan bread, and more.",
  url: "https://kdtrestaurant.com/menu/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "MenuSection",
        name: "Appetizers",
        description: "Samosas, pakoras, tandoori chicken, chicken wings, and more",
      },
      {
        "@type": "MenuSection",
        name: "Non-Vegetarian",
        description: "Butter chicken, lamb curry, chicken biryani, tikka masala, and more",
      },
      {
        "@type": "MenuSection",
        name: "Vegetarian",
        description: "Paneer dishes, dal, aloo gobi, vegetable curries, and vegan options",
      },
      {
        "@type": "MenuSection",
        name: "Naan Bread",
        description: "Fresh baked naan — plain, garlic, butter, cheese, and stuffed varieties",
      },
      {
        "@type": "MenuSection",
        name: "Specialty Pizzas",
        description: "Indian fusion pizzas with unique toppings and fresh ingredients",
      },
      {
        "@type": "MenuSection",
        name: "Desserts",
        description: "Traditional Indian desserts including gulab jamun, kheer, and more",
      },
    ],
  },
  hasMenuSection: [
    { "@type": "MenuSection", name: "Appetizers" },
    { "@type": "MenuSection", name: "Non-Vegetarian" },
    { "@type": "MenuSection", name: "Vegetarian" },
    { "@type": "MenuSection", name: "Naan Bread" },
    { "@type": "MenuSection", name: "Pakora" },
    { "@type": "MenuSection", name: "Pasta & More" },
    { "@type": "MenuSection", name: "Sides" },
    { "@type": "MenuSection", name: "Drinks" },
    { "@type": "MenuSection", name: "Dessert" },
    { "@type": "MenuSection", name: "Specialty Pizzas" },
    { "@type": "MenuSection", name: "Pizza Menu" },
  ],
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    availableDeliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp",
    areaServed: {
      "@type": "City",
      name: "Chilliwack",
      addressRegion: "BC",
      addressCountry: "CA",
    },
  },
};

// Breadcrumb schema for menu page
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kdtrestaurant.com/" },
    { "@type": "ListItem", position: 2, name: "Menu", item: "https://kdtrestaurant.com/menu/" },
  ],
};

export default function MenuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Menu Schema.org JSON-LD */}
      <Script id="menu-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(menuSchema)}
      </Script>
      {/* Breadcrumb Schema */}
      <Script id="menu-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      {children}
    </>
  );
}
