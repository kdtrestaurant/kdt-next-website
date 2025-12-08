import type { ReactNode } from "react";

export const metadata = {
  title: "Blog",
  description:
    "Read KDT Restaurant updates, food stories, recipes, and announcements from Chilliwack's favorite Indian fusion restaurant.",
  alternates: { canonical: "/blog/" },
  keywords: ["KDT blog", "Indian food blog", "restaurant news", "Chilliwack food", "recipes"],
  openGraph: {
    type: "website",
    url: "https://kdtrestaurant.com/blog/",
    title: "KDT Restaurant Blog - News & Updates",
    description: "Read KDT Restaurant updates, food stories, and announcements from Chilliwack.",
    siteName: "KDT Restaurant",
  },
  twitter: {
    card: "summary",
    title: "KDT Restaurant Blog - News & Updates",
    description: "Read KDT Restaurant updates, food stories, and announcements from Chilliwack.",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
