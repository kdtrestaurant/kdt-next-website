import type { ReactNode } from "react";

export const metadata = {
  title: "Contact",
  description:
    "Contact KDT Restaurant for reservations, orders, and inquiries.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
