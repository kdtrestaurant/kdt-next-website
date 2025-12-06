"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
{/* Metadata
export const metadata: Metadata = {
  title:
    "KDT Restaurant Blog | Indian Fusion, Desserts, Vegetarian Menu in Chilliwack",
  description:
    "Explore KDT Restaurant’s blog: Indian fusion pizzas, classic Indian desserts, and vegetarian/vegan curries in Chilliwack. News, tips, and menu highlights.",
  alternates: { canonical: "https://kdtrestaurant.com/blog/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://kdtrestaurant.com/blog/",
    siteName: "KDT Restaurant",
    title:
      "KDT Restaurant Blog | Indian Fusion, Desserts, Vegetarian Menu in Chilliwack",
    description:
      "Explore KDT Restaurant’s blog: Indian fusion pizzas, classic Indian desserts, and vegetarian/vegan curries in Chilliwack.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KDT Restaurant Blog | Indian Fusion, Desserts, Vegetarian Menu in Chilliwack",
    description:
      "Explore KDT Restaurant’s blog: Indian fusion pizzas, classic Indian desserts, and vegetarian/vegan curries in Chilliwack.",
  },
};
*/}

export default function BlogPage() {
  const [showPost1, setShowPost1] = useState(false);
  const [showPost2, setShowPost2] = useState(false);
  const [showPost3, setShowPost3] = useState(false);


  return (
    <div className="max-w-[95vw] mx-auto py-10">
      {/* SEO JSON-LD */}
      <Script id="ld-blog" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "KDT Restaurant Blog",
          description:
            "Indian fusion pizzas, classic Indian desserts, and vegetarian/vegan curries in Chilliwack.",
          url: "https://kdtrestaurant.com/blog/",
          publisher: {
            "@type": "Organization",
            name: "KDT Restaurant",
            url: "https://kdtrestaurant.com/",
          },
        })}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://kdtrestaurant.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://kdtrestaurant.com/blog/",
            },
          ],
        })}
      </Script>

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e4b745] mb-3">
          Our Blog
        </h1>
        <p className="text-lg text-white opacity-90">
          Insights, updates, and news from KDT Restaurant in Chilliwack. Indian
          fusion, desserts, and vegetarian/vegan menu highlights.
        </p>
        <div className="mt-4 text-white/80 text-sm">
          <span>Looking for our full menu? </span>
          <Link
            href="/menu/"
            className="text-[#e4b745] underline hover:no-underline"
          >
            Explore the Menu
          </Link>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="flex flex-col gap-12">
        {/* BLOG POST 1 – REPLACED */}
        <article className="flex flex-col gap-6 bg-[#111] rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#e4b745] mb-4">
              Three Signature Dishes to Try at KDT Restaurant in Chilliwack
            </h2>
            <div className="text-white/70 text-sm mb-2">
              <time dateTime="2025-12-03">December 3, 2025</time> • By KDT
              Restaurant
            </div>

            <div
              className={`text-white space-y-4 leading-relaxed transition-[max-height] duration-500 overflow-hidden ${showPost1 ? "max-h-screen" : "max-h-[160px]"}   // shorter preview
              `}
            >
              <p>
                At <strong>KDT Restaurant</strong>, we love to combine authentic
                Indian flavors with fresh, wholesome ingredients for dishes that
                are as satisfying as they are memorable. Today, we want to
                highlight three of our signature dishes that guests can’t stop
                raving about.
              </p>

              <p>
                <strong>Butter Chicken:</strong> Our lighter, homemade Butter
                Chicken is crafted without heavy cashew pastes, making it a
                delicate yet flavorful option. The tender chicken soaks in a
                creamy tomato-based sauce with the perfect hint of spice,
                offering comfort and richness without weighing you down. Pair
                it with our fresh naan or fluffy basmati rice for a meal that
                feels like home in every bite.
              </p>

              <p>
                <strong>Lamb Korma:</strong> Experience the richness of soft,
                melt-in-your-mouth lamb simmered in a luxurious, creamy curry.
                Each bite delivers a harmonious blend of aromatic spices and
                smooth texture that will have you savoring every mouthful. It’s
                the perfect choice for guests who love a curry that’s indulgent
                but balanced, ideal for sharing or enjoying on its own.
              </p>

              <p>
                <strong>Kadai Chicken:</strong> For those who enjoy bold flavors
                with a touch of creaminess, our Kadai Chicken is a must-try.
                Made with tender chicken thighs, it strikes the perfect balance
                of succulent meat and savory sauce. The fresh bell peppers and
                hand-blended spices add depth and vibrancy, creating a dish that
                is as visually appealing as it is satisfying.
              </p>

              <p>
                Each dish at <strong>KDT Restaurant</strong> is carefully
                prepared with love and attention to detail. From selecting the
                freshest ingredients to balancing traditional Indian spices with
                modern culinary techniques, we ensure every meal is an
                unforgettable experience.
              </p>

              <p className="text-white/80">
                Ready to taste these favourites?{" "}
                <Link
                  href="/menu/"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  Explore our full menu
                </Link>{" "}
                or{" "}
                <a
                  href="https://widgets.libroreserve.com/WEB/BC017491347510/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  order online
                </a>{" "}
                today!
              </p>
            </div>

            {/* Read More Button */}
            <button
              className="mt-4 px-5 py-2 bg-yellow-500 text-black font-bold uppercase rounded-full hover:bg-yellow-600 transition transform hover:scale-105"
              onClick={() => setShowPost1(!showPost1)}
            >
              {showPost1 ? "Show Less" : "Read More"}
            </button>
          </div>
        </article>

        {/* BLOG POST 2 – NEW WITH READ MORE BUTTON */}
        <article className="flex flex-col gap-6 bg-[#111] rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#e4b745] mb-4">
              Fresh Ingredients, Local Partnerships: How KDT Sources Quality Produce
            </h2>
            <div className="text-white/70 text-sm mb-2">
              <time dateTime="2025-11-19">November 19, 2025</time> • By KDT Restaurant
            </div>

            <div
              className={`text-white space-y-4 leading-relaxed transition-[max-height] duration-500 overflow-hidden ${showPost2 ? "max-h-screen" : "max-h-[160px]"}
              `}
            >
              <p>
                At <strong>KDT Restaurant</strong>, the heart of our cooking begins long
                before a dish reaches the kitchen. It starts with the ingredients we
                choose — fresh, local, and thoughtfully sourced. We believe that quality
                food comes from quality ingredients, and that's why we’ve built strong
                relationships with local producers who share our values of freshness,
                integrity, and community.
              </p>

              <p>
                One of our most important partnerships is with a local dairy in
                Chilliwack, where we source our <strong>dahi</strong> (yogurt) and{" "}
                <strong>paneer</strong>. Fresh dairy makes a world of difference in
                Indian cooking, from creamy marinades to rich curries, and the
                quality of these ingredients allows us to serve dishes that taste both
                authentic and vibrant. The paneer holds its shape beautifully while
                remaining soft, and the dahi brings a naturally smooth texture to our
                sauces and appetizers.
              </p>

              <p>
                For our vegetables, we work closely with local growers including farms
                in our area (such as Badyal Farms) that provide fresh, seasonal produce.
                Whether it’s crisp bell peppers for our Kadai dishes, fresh spinach for
                Palak Paneer, or vibrant herbs for garnishing, sourcing locally ensures
                every dish is full of color, nutrition, and flavor.
              </p>

              <p>
                By choosing local suppliers, we not only support our community but also
                ensure that your meals are made with ingredients that are harvested at
                their peak. It’s a difference you can taste. Freshness that’s natural,
                clean, and full of character.
              </p>

              <p className="text-white/80">
                Want to explore dishes made from these fresh ingredients?{" "}
                <Link
                  href="/menu/"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  Browse our menu
                </Link>{" "}
                or{" "}
                <a
                  href="https://widgets.libroreserve.com/WEB/BC017491347510/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  order online
                </a>{" "}
                today.
              </p>
            </div>

            {/* Read More Button */}
            <button
              className="mt-4 px-5 py-2 bg-yellow-500 text-black font-bold uppercase rounded-full hover:bg-yellow-600 transition transform hover:scale-105"
              onClick={() => setShowPost2(!showPost2)}
            >
              {showPost2 ? "Show Less" : "Read More"}
            </button>
          </div>
        </article>


        {/* BLOG POST 3 */}
        <article className="flex flex-col gap-6 bg-[#111] rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#e4b745] mb-4">
              Garden of Curries: KDT’s Delicious Vegetarian & Vegan Options
            </h2>
            <div className="text-white/70 text-sm mb-2">
              <time dateTime="2025-11-05">November 5, 2025</time> • By KDT Restaurant
            </div>

            {/* Read More Toggle */}
            <div
              className={`group overflow-hidden transition-all duration-500 ease-in-out relative ${showPost3 ? "max-h-[2000px]" : "max-h-40 md:max-h-48"
                }`}
            >

              <div className="text-white space-y-4 leading-relaxed">

                <p>
                  Indian food has always been one of the best places for vegetarian and vegan
                  eaters to explore, and here at KDT Restaurant in Chilliwack, we’re proud to
                  keep that tradition alive. Our plant-based dishes are made with the same
                  homemade spices, fresh vegetables, and slow-cooked techniques that define
                  North Indian comfort food.
                </p>

                <p>
                  One of our most loved dishes is our <strong>Dal Makhni</strong>, creamy,
                  rich, and simmered low and slow until the lentils become buttery and smooth.
                  It’s the kind of dish that warms you from the inside out, especially when
                  paired with naan fresh off the tandoor.
                </p>

                <p>
                  Another favourite is our <strong>Palak Paneer</strong>, made with fresh
                  spinach and soft paneer sourced locally. It’s vibrant, nutritious, and
                  packed with flavour without being heavy. A perfect go-to for anyone
                  looking for something wholesome.
                </p>

                <p>
                  And of course, there’s the classic <strong>Aloo Gobi</strong>: tender
                  potatoes and cauliflower seasoned with our in-house masala blend. It’s a
                  simple dish, but when it’s done properly, it becomes one of the most
                  comforting curries on the menu.
                </p>

                <p>
                  Many of our vegetarian dishes are naturally vegan, gluten-free, and made
                  without shortcuts. Whether you're fully plant-based, looking for healthier
                  comfort food, or just exploring something new, our vegetarian selection is
                  colourful, satisfying, and made with care from scratch.
                </p>

                <p className="text-white/80">
                  Explore plant-based favourites:{" "}
                  <Link
                    href="/menu/?category=Vegetarian"
                    className="text-[#e4b745] underline hover:no-underline"
                  >
                    Vegetarian menu
                  </Link>{" "}
                  •{" "}
                  <Link
                    href="/faq/"
                    className="text-[#e4b745] underline hover:no-underline"
                  >
                    Dietary FAQs
                  </Link>
                </p>
              </div>

              {/* Fade-out gradient */}
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#111] group-[.expanded]:hidden" />
            </div>

            {/* Read More Button */}
            <button
              className="mt-4 px-5 py-2 bg-yellow-500 text-black font-bold uppercase rounded-full hover:bg-yellow-600 transition transform hover:scale-105"
              onClick={() => setShowPost3(!showPost3)}
            >
              {showPost3 ? "Show Less" : "Read More"}
            </button>
          </div>
        </article>

      </section>
    </div>
  );
}
