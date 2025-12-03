import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

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

export default function BlogPage() {
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
          Insights, updates, and news from KDT Restaurant in Chilliwack — Indian
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
        {/* BLOG POST 1 */}
        <article className="flex flex-col gap-6 bg-[#111] rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#e4b745] mb-4">
              Fusion Pizza Fiesta: Indian Flavours on Pizza at KDT Restaurant
            </h2>
            <div className="text-white/70 text-sm mb-2">
              <time dateTime="2025-12-03">December 3, 2025</time> • By KDT
              Restaurant
            </div>

            <div className="text-white space-y-4 leading-relaxed">
              <p>
                At KDT Restaurant, pizza gets an Indian twist with bold flavours
                you won’t find anywhere else in Chilliwack. Our fusion pizzas
                blend classic cheesy pizza with authentic North Indian spices
                and homemade sauces, creating a delicious experience that
                customers love.
              </p>
              <p>
                Signature favourites include our creamy Butter Chicken Pizza,
                the spicy Tandoori Chicken Pizza, and the rich KDT Cashew Sauce
                Pizza, each topped with freshly marinated ingredients prepared
                by Chef Harpreet. Every slice combines comfort and creativity,
                making these pizzas perfect for anyone craving something new and
                flavour-packed.
              </p>
              <p>
                Indian fusion dishes are growing in popularity, and KDT’s pizzas
                are leading the trend locally — visually vibrant, deeply
                flavorful, and always crafted with care. Don’t forget to snap a
                close-up photo next time you visit!
              </p>
              <p className="text-white/80">
                Hungry already?{" "}
                <Link
                  href="/menu/?category=Specialty%20Pizzas"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  See our specialty pizza options
                </Link>{" "}
                or{" "}
                <Link
                  href="/contact/"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  contact us
                </Link>{" "}
                with questions.
              </p>
            </div>
          </div>
        </article>

        {/* BLOG POST 2 */}
        <article className="flex flex-col gap-6 bg-[#111] rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#e4b745] mb-4">
              Sweet Endings: Classic Indian Desserts at KDT Restaurant
            </h2>
            <div className="text-white/70 text-sm mb-2">
              <time dateTime="2025-11-19">November 19, 2025</time> • By KDT
              Restaurant
            </div>

            <div className="text-white space-y-4 leading-relaxed">
              <p>
                KDT Restaurant brings authentic Indian sweetness to Chilliwack
                with timeless desserts that have been enjoyed for generations.
                Our menu features favourites like Gulab Jamun, a warm,
                syrup-soaked treat with roots in the Mughal royal kitchens, and
                Gajrela (Carrot Pudding), a traditional North Indian dessert
                slow-cooked with carrots, milk, and ghee for a naturally rich
                flavour.
              </p>
              <p>
                Each dessert carries a piece of India’s culinary heritage,
                offering the perfect finish to a spicy or savoury meal. Whether
                you’re craving something warm, comforting, or simply new to try,
                KDT’s desserts deliver a delicious taste of tradition in every
                bite.
              </p>
              <p className="text-white/80">
                Craving dessert?{" "}
                <Link
                  href="/menu/"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  Check today’s specials
                </Link>{" "}
                or{" "}
                <Link
                  href="/about/"
                  className="text-[#e4b745] underline hover:no-underline"
                >
                  meet our chef
                </Link>
                .
              </p>
            </div>
          </div>
        </article>

        {/* BLOG POST 3 */}
        <article className="flex flex-col gap-6 bg-[#111] rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#e4b745] mb-4">
              Garden of Curries: KDT’s Delicious Vegetarian & Vegan Options
            </h2>
            <div className="text-white/70 text-sm mb-2">
              <time dateTime="2025-11-05">November 5, 2025</time> • By KDT
              Restaurant
            </div>

            <div className="text-white space-y-4 leading-relaxed">
              <p>
                Indian cuisine has always been a paradise for plant-based
                eaters, and KDT Restaurant brings that tradition to Chilliwack
                with a vibrant selection of vegetarian and vegan dishes. From
                classics like Aloo Gobi, Chana Masala, and Dal Makhni, to creamy
                favourites such as Paneer Tikka Masala, every dish is built on
                fresh vegetables, protein-rich lentils, and bold North Indian
                spices.
              </p>
              <p>
                Many of our dishes are naturally vegan-friendly and gluten-free,
                making them a popular choice for health-conscious diners looking
                for flavour without compromise. Whether you’re fully plant-based
                or just exploring new meals, KDT’s vegetarian menu offers
                comforting, colourful, and satisfying curries that make every
                visit both wholesome and delicious.
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
          </div>
        </article>
      </section>
    </div>
  );
}
