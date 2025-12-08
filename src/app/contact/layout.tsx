import type { ReactNode } from "react";

export const metadata = {
  title: "Contact",
  description:
    "Contact KDT Restaurant in Chilliwack for reservations, takeout orders, catering inquiries, and more. Call (604) 490-4424.",
  alternates: { canonical: "/contact/" },
  keywords: ["contact KDT", "KDT phone number", "Chilliwack restaurant contact", "reservations", "takeout"],
  openGraph: {
    type: "website",
    url: "https://kdtrestaurant.com/contact/",
    title: "Contact KDT Restaurant - Chilliwack, BC",
    description: "Contact KDT Restaurant for reservations, takeout orders, and catering inquiries. Call (604) 490-4424.",
    siteName: "KDT Restaurant",
  },
  twitter: {
    card: "summary",
    title: "Contact KDT Restaurant - Chilliwack, BC",
    description: "Contact KDT Restaurant for reservations, takeout orders, and catering inquiries.",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
