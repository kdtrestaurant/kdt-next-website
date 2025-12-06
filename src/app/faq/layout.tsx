import type { ReactNode } from "react";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about KDT Restaurant, ordering, and menu options.",
  alternates: { canonical: "/faq/" },
};

export default function FAQLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
