// src/components/sections/Footer.tsx

'use client';

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-12 border-t-2 border-[#e4b745] text-white font-poly">
      <div className="footer-content max-w-6xl mx-auto flex flex-wrap justify-between gap-12 text-center">

        {/* HOURS OF OPERATION */}
        <div className="footer-section footer-hours flex-1 min-w-[240px]">
          <h3 className="text-[#e4b745] text-lg mb-4 tracking-wide">KDT Restaurant Hours of Operation</h3>
          <p className="flex items-center justify-center gap-2 mb-2">
            <svg className="contact-icon w-4 h-4 fill-[#e4b745]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm.5-14h-1v6l5.25 3.15.5-.84L12.5 7z"/>
            </svg>
            Sun - Thu (11 AM - 8 PM)
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <svg className="contact-icon w-4 h-4 fill-[#e4b745]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm.5-14h-1v6l5.25 3.15.5-.84L12.5 7z"/>
            </svg>
            Fri - Sat (11 AM - 8:30 PM)
          </p>
          <p className="closed flex items-center justify-center gap-2 text-[#e4b745] font-bold">
            <svg className="contact-icon w-4 h-4 fill-[#e4b745]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm.5-14h-1v6l5.25 3.15.5-.84L12.5 7z"/>
            </svg>
            CLOSED TUESDAYS
          </p>
        </div>

        {/* LOGO */}
        <div className="footer-section footer-logo flex-1 min-w-[240px]">
          <div className="logo mx-auto">
            <a href="/">
              <img src="https://www.kdtrestaurant.com/mystaging01/wp-content/uploads/2025/11/kdt_logo_no_bg-5.webp" alt="KDT Logo" className="w-44 h-auto mx-auto" />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-section footer-contact flex-1 min-w-[240px]">
          <h3 className="text-[#e4b745] text-lg mb-4 tracking-wide">Contact</h3>
          <p className="flex items-center justify-center gap-2 mb-2">
            <svg className="contact-icon w-4 h-4 fill-[#e4b745]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"/>
            </svg>
            42206 Yarrow Central Rd. Chilliwack
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <svg className="contact-icon w-4 h-4 fill-[#e4b745]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5z"/>
            </svg>
            <a href="mailto:Kdt.restaurant@gmail.com" className="hover:text-[#f2cc4d] transition-colors">Kdt.restaurant@gmail.com</a>
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <svg className="contact-icon w-4 h-4 fill-[#e4b745]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.69.59 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.49 21 3 13.51 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.29.2 2.55.59 3.69a1 1 0 0 1-.24 1.01l-2.23 2.09z"/>
            </svg>
            <a href="tel:6044904424" className="hover:text-[#f2cc4d] transition-colors">(604) 490 4424</a>
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-icons flex justify-center gap-4 mt-3">
            <a href="https://www.facebook.com/p/KDT-Restaurant-61571475397206/" target="_blank" aria-label="Facebook">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#a58331">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/kdt_restaurant/" target="_blank" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#a58331" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.ubereats.com/ca/store/kdt-restaurant/yOEmLdHNXBuFTUMH2EhsVg" target="_blank" aria-label="Uber Eats">
              <svg width="24" height="19" viewBox="0 0 24 19" fill="#FACC15" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.000999928V4.998C0 6.881 1.332 8.128 3.084 8.128C3.4829 8.13371 3.87886 8.059 4.24826 7.90832C4.61765 7.75764 4.9529 7.53409 5.234 7.251V7.994H6.445V0H5.223V4.934C5.223 6.199 4.353 7.054 3.228 7.056C2.089 7.054 1.231 6.222 1.231 4.934V0.000999928H0ZM7.363 0.000999928V7.994H8.525V7.262C9.08723 7.82281 9.84888 8.13783 10.643 8.138C11.0492 8.14841 11.4533 8.07741 11.8316 7.92916C12.2099 7.78092 12.5547 7.55844 12.8457 7.27484C13.1367 6.99124 13.3679 6.65226 13.5258 6.27789C13.6837 5.90351 13.765 5.50131 13.765 5.095C13.765 4.68869 13.6837 4.28649 13.5258 3.91211C13.3679 3.53774 13.1367 3.19876 12.8457 2.91516C12.5547 2.63156 12.2099 2.40908 11.8316 2.26084C11.4533 2.11259 11.0492 2.04159 10.643 2.052Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom flex justify-center mt-12 pt-6 border-t border-[#222] text-[13px] opacity-70">
        <p>
          © 2025 Kdt.restaurant, All Rights Reserved. Designed By{' '}
          <a href="https://nutab.ca" target="_blank" rel="noopener noreferrer" className="text-[#e4b745] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#e4b745] after:transition-all hover:after:w-full hover:text-[#f2cc4d]">
            Nutab Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
