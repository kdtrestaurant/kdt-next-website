export default function BlogPage() {
    return (
        <div className="max-w-[95vw] mx-auto py-10">

            {/* HERO */}
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-[#e4b745] mb-3">
                    Our Blog
                </h1>
                <p className="text-lg text-white opacity-90">
                    Insights, updates, and news from KDT Restaurant
                </p>
            </section>

            {/* BLOG LIST */}
            <section className="flex flex-col gap-12">

                {/* BLOG POST 1 */}
                <article className="flex flex-col gap-6 bg-[#111] rounded-lg p-6">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-[#e4b745] mb-4">
                            Fusion Pizza Fiesta: Indian Flavours on Pizza at KDT Restaurant
                        </h2>

                        <div className="text-white space-y-4 leading-relaxed">
                            <p>
                                At KDT Restaurant, pizza gets an Indian twist with bold flavours you won’t find anywhere
                                else in Chilliwack. Our fusion pizzas blend classic cheesy pizza with authentic North Indian
                                spices and homemade sauces, creating a delicious experience that customers love.
                            </p>
                            <p>
                                Signature favourites include our creamy Butter Chicken Pizza, the spicy Tandoori Chicken
                                Pizza, and the rich KDT Cashew Sauce Pizza, each topped with freshly marinated ingredients
                                prepared by Chef Harpreet. Every slice combines comfort and creativity, making these pizzas
                                perfect for anyone craving something new and flavour-packed.
                            </p>
                            <p>
                                Indian fusion dishes are growing in popularity, and KDT’s pizzas are leading the trend
                                locally — visually vibrant, deeply flavorful, and always crafted with care. Don’t forget to
                                snap a close-up photo next time you visit!
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

                        <div className="text-white space-y-4 leading-relaxed">
                            <p>
                                KDT Restaurant brings authentic Indian sweetness to Chilliwack with timeless desserts that
                                have been enjoyed for generations. Our menu features favourites like Gulab Jamun, a warm,
                                syrup-soaked treat with roots in the Mughal royal kitchens, and Gajrela (Carrot Pudding), a
                                traditional North Indian dessert slow-cooked with carrots, milk, and ghee for a naturally
                                rich flavour.
                            </p>
                            <p>
                                Each dessert carries a piece of India’s culinary heritage, offering the perfect finish to a
                                spicy or savoury meal. Whether you’re craving something warm, comforting, or simply new to
                                try, KDT’s desserts deliver a delicious taste of tradition in every bite.
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

                        <div className="text-white space-y-4 leading-relaxed">
                            <p>
                                Indian cuisine has always been a paradise for plant-based eaters, and KDT Restaurant brings
                                that tradition to Chilliwack with a vibrant selection of vegetarian and vegan dishes. From
                                classics like Aloo Gobi, Chana Masala, and Dal Makhni, to creamy favourites such as Paneer
                                Tikka Masala, every dish is built on fresh vegetables, protein-rich lentils, and bold North
                                Indian spices.
                            </p>
                            <p>
                                Many of our dishes are naturally vegan-friendly and gluten-free, making them a popular
                                choice for health-conscious diners looking for flavour without compromise. Whether you’re
                                fully plant-based or just exploring new meals, KDT’s vegetarian menu offers comforting,
                                colourful, and satisfying curries that make every visit both wholesome and delicious.
                            </p>
                        </div>
                    </div>
                </article>

            </section>
        </div>
    );
}
