import type { ReactNode } from "react";

export const metadata = {
  title: "Menu",
  description:
    "Browse the full KDT Restaurant menu including vegetarian, non-vegetarian, pizzas, and specialty dishes.",
  alternates: { canonical: "/menu/" },
};

export default function MenuLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
