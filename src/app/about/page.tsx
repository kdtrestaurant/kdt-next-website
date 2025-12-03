import Image from "next/image";

export default function AboutPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="about-page text-white">

      {/* HERO SECTION */}
      <section className="about-hero bg-black border-b border-neutral-800 py-20 px-5 text-center">
        <div className="about-hero-inner max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">About Us</h1>
          <p className="text-lg text-[#e4b745]">
            A Journey of Passion and Perseverance
          </p>
        </div>
      </section>

      {/* OWNER SECTION */}
      <section className="about-owner py-16 px-5">
        <div className="about-container owner-flex max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-10">

          <div className="owner-image w-full md:w-auto">
            <Image
              src={`${base}/images/owner-chef.webp`}
              alt="Owner & Chef Harpreet"
              width={450}
              height={450}
              className="rounded-xl border border-neutral-800 shadow-xl"
            />
          </div>

          <div className="owner-text flex-1">
            <h2 className="text-3xl font-semibold mb-5">Meet the Heart Behind KDT</h2>

            <p className="mb-4 leading-relaxed">
              KDT stands for Kaur Di Taur, a name that reflects both identity and
              strength. In Sikh tradition, Kaur represents courage, grace, and
              equality. Taur refers to someone’s unique style and presence.
              Together, the name speaks to the confidence and spirit that define the
              restaurant and its owner, Harpreet.
            </p>

            <p className="mb-4 leading-relaxed">
              Harpreet has spent more than ten years in the food industry. She
              began with a small takeout shop in Yarrow and eventually built KDT
              into the warm and inviting restaurant it is today. Her journey is a
              reminder that passion and persistence can reshape a person’s life.
            </p>

            <p className="mb-4 leading-relaxed">
              Today she is the only chef in the kitchen. Every recipe is hers, and
              every dish carries her personal touch. She cooks with intention,
              using flavours that blend tradition with creativity.
            </p>
          </div>

        </div>
      </section>

      {/* STORY SECTION */}
      <section className="about-story py-10 px-5 pb-20">
        <div className="about-container max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold mb-5">Recipes Made From Love</h2>

          <p className="mb-5 leading-relaxed">
            For Harpreet, cooking is not just about feeding people. It is about
            creating a place where anyone can walk in and feel comfortable. She is
            known for turning doubt into motivation. If someone tells her she
            cannot do something, she takes it as a challenge.
          </p>

          <p className="mb-5 leading-relaxed">
            This mindset is reflected in the menu, which blends comfort,
            tradition, and bold flavour. Her favourite dish, onion naan with chole
            bhatura, carries meaningful memories from a time when she balanced
            running the restaurant with caring for her mother.
          </p>

          <p className="mb-5 leading-relaxed">
            Behind the scenes, her children are her foundation. Their support fuels
            her drive and inspires the warmth and care that KDT is known for.
          </p>

          <p className="mb-5 leading-relaxed">
            Harpreet is in the kitchen every day, overseeing every detail and
            ensuring every meal is made with heart. At KDT, guests are not just
            enjoying food. They are sharing a piece of her story.
          </p>

        </div>
      </section>

    </div>
  );
}
