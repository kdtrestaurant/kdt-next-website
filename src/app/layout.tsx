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
  metadataBase: new URL("https://kdtrestaurant.com"),
  title: {
    default: "KDT Restaurant - Delicious Food Made With Love",
    template: "%s | KDT Restaurant",
  },
  description:
    "Experience the best of Indian and International cuisine at KDT Restaurant. Explore our diverse menu, special offers, and more!",
  keywords: [
    "KDT Restaurant",
    "Indian Restaurant",
    "International cuisine",
    "Pizza",
    "Chilliwack",
    "Yarrow",
    "Takeout",
    "Vegetarian",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://kdtrestaurant.com/",
    title: "KDT Restaurant - Delicious Food Made With Love",
    description:
      "Experience the best of Indian and International cuisine at KDT Restaurant.",
    siteName: "KDT Restaurant",
    images: [
      {
        url: "/images/kdt-logo.webp",
        width: 562,
        height: 551,
        alt: "KDT Restaurant logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kdtrestaurant",
    creator: "@kdtrestaurant",
    title: "KDT Restaurant - Delicious Food Made With Love",
    description:
      "Experience the best of Indian and International cuisine at KDT Restaurant.",
    images: ["/images/kdt-logo.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poly.variable}>
      <body>
        {/* JSON-LD: Restaurant schema */}
        <Script id="ld-json-restaurant" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "KDT Restaurant",
            url: "https://kdtrestaurant.com/",
            image: "https://kdtrestaurant.com/images/kdt-logo.webp",
            servesCuisine: ["Indian", "Pizza", "International"],
            priceRange: "$$",
            telephone: "(604) 490-4424",
            address: {
              "@type": "PostalAddress",
              streetAddress: "42206 Yarrow Central Rd",
              addressLocality: "Chilliwack",
              addressRegion: "BC",
              postalCode: "V2R 5E4",
              addressCountry: "CA",
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "20:30" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "20:30" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "11:00", closes: "20:30" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "Closed", closes: "Closed" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "11:00", closes: "20:30" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "20:30" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "20:30" },
            ],
            hasMenu: "https://kdtrestaurant.com/menu/",
            sameAs: [
              "https://www.instagram.com/kdt_restaurant/",
              "https://www.facebook.com/p/KDT-Restaurant-61571475397206/",
            ],
          })}
        </Script>
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
