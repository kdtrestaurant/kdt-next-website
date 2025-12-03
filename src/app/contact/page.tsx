'use client';

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    setStatus(null);

    fetch('https://formspree.io/f/xwpgbagq', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    })
      .then(async (res) => {
        if (res.ok) {
          setStatus('success');
          form.reset();
          return;
        }
        // Try to parse error from Formspree
        try {
          const json = await res.json();
          // Optionally, you could surface json.errors
        } catch {}
        setStatus('error');
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-page bg-black text-white px-4 md:px-8 lg:px-16">
      {/* HERO SECTION */}
      <section className="contact-hero max-w-3xl mx-auto text-center my-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e4b745] mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-white opacity-90">
          We’re here to help. Reach out with any questions or inquiries!
        </p>
      </section>

      <section className="contact-container max-w-3xl mx-auto flex flex-col md:flex-row gap-12 mb-16">
        {/* INFO SECTION */}
        <div className="kdt-contact-info bg-[#111] p-6 md:p-8 rounded-xl shadow-lg text-center flex-1">
          <h2 className="text-2xl font-bold text-[#e4b745] mb-4">Get in Touch</h2>

          <p className="mb-2"><strong>Phone:</strong> (604) 490-4424</p>
          <p className="mb-2"><strong>Email:</strong> kdt.restaurant@gmail.com</p>
          <p className="mb-2"><strong>Address:</strong> 42206 Yarrow Central Rd. Chilliwack</p>

          <div className="contact-hours mt-6">
            <h3 className="text-[#e4b745] font-bold mb-2">Hours</h3>
            <p>Sunday – Thursday: 11:00am – 8:00pm</p>
            <p>Friday – Saturday: 11:00am – 8:30pm</p>
            <p>CLOSED TUESDAYS</p>
          </div>
        </div>

        {/* CONTACT FORM SECTION */}
        <div className="contact-form-wrapper flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e4b745] text-center mb-6">
            Send Us a Message
          </h2>

          {/* Status Messages */}
          {status && (
            <div className="contact-msg font-bold text-center mb-4">
              {status === 'success' && (
                <p className="text-[#e4b745]">Your message has been sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500">There was an error sending your message. Please try again.</p>
              )}
            </div>
          )}

          <form
            className="kdt-contact-form bg-[#111] border border-[#333] rounded-xl p-8 flex flex-col gap-5 shadow-lg"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xwpgbagq"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block font-bold text-[#e4b745] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[#e4b745] focus:shadow-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold text-[#e4b745] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[#e4b745] focus:shadow-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-bold text-[#e4b745] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[#e4b745] focus:shadow-md resize-vertical"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#e4b745] text-black font-extrabold px-6 py-3 rounded-lg self-center hover:bg-[#f2cc4d] hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
