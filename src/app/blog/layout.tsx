import type { ReactNode } from "react";

export const metadata = {
  title: "Blog",
  description:
    "Read KDT Restaurant updates, food stories, and announcements.",
  alternates: { canonical: "/blog/" },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
