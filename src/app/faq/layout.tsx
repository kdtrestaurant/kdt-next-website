import type { ReactNode } from "react";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about KDT Restaurant in Chilliwack — catering, dietary restrictions, reservations, vegetarian options, and more.",
  alternates: { canonical: "/faq/" },
  keywords: ["KDT FAQ", "restaurant questions", "vegetarian options", "gluten-free", "catering", "Chilliwack"],
  openGraph: {
    type: "website",
    url: "https://kdtrestaurant.com/faq/",
    title: "FAQ - KDT Restaurant",
    description: "Find answers to common questions about KDT Restaurant — catering, dietary options, reservations, and more.",
    siteName: "KDT Restaurant",
  },
  twitter: {
    card: "summary",
    title: "FAQ - KDT Restaurant",
    description: "Find answers to common questions about KDT Restaurant — catering, dietary options, reservations, and more.",
  },
};

export default function FAQLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
