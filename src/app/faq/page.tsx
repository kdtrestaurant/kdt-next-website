export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about KDT Restaurant, ordering, and menu options.",
  alternates: { canonical: "/faq/" },
};
"use client";

import { useState, useRef } from "react";

export default function FAQPage() {
  const faqs = [
    {
      q: "Do you offer catering services for events?",
      a: "Yes, we offer catering services. Please call us or use the contact form on our website for inquiries."
    },
    {
      q: "Do you use traditional Indian cooking methods and spices?",
      a: "Yes, our chef is an experienced Indian chef with over 30 years of expertise in authentic Indian cuisine."
    },
    {
      q: "How accommodating is the staff for dietary restrictions?",
      a: "We do our best to accommodate all dietary needs so every guest has the best dining experience."
    },
    {
      q: "Do you offer private dining or party reservations?",
      a: "Yes! We require at least three days' notice. We also post reservation notices on the front door and main entrance. Call the restaurant and ask for the manager for details."
    },
    {
      q: "Is the restaurant family-friendly?",
      a: "Yes! We are a family-owned restaurant and love welcoming families."
    },
    {
      q: "Do you have gluten-free or dairy-free options?",
      a: "Yes. Our pakoras use chickpea flour, we offer gluten-free grains in medium size, and several dishes are dairy-free. Please inform your server or manager of any allergies."
    },
    {
      q: "What are the spiciest dishes on your menu?",
      a: "All dishes can be customized to your preferred spice level — mild, medium, hot, or extra hot."
    },
    {
      q: "What are the must-try dishes at KDT?",
      a: "Our Chili Chicken and Butter Chicken are highly recommended. Our gravies are made with fresh homemade milk and cream."
    },
    {
      q: "Are there options without meat?",
      a: "Yes. We have an extensive vegetarian section and several vegan options."
    }
  ];

  return (
    <div className="w-full px-4 py-10 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-center text-4xl font-bold text-[#e4b745] mb-2">
          Frequently Asked Questions
        </h1>

        <h3 className="text-center text-[1.1rem] opacity-90 mb-[5vh]">
          Find answers to common questions about our restaurant, services, and menu offerings
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-full text-left px-6 py-4 font-semibold text-[20px] rounded-md border border-[#222]
          transition-colors duration-300 cursor-pointer
          ${open ? "bg-[#2a2a2a] text-[#e4b745]" : "bg-[#111] hover:bg-[#1a1a1a]"}
        `}
      >
        {q}
      </button>

      <div
        ref={panelRef}
        className="overflow-hidden bg-black rounded-b-md"
        style={{
          maxHeight: open ? `${panelRef.current?.scrollHeight}px` : "0px",
          transition: open
            ? "max-height 0.3s ease"
            : "max-height 0s ease" // instant close
        }}
      >
        <div className="px-6 py-5 text-white leading-relaxed">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}
