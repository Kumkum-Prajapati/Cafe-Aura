import React from "react";

function Footer() {
  return (
    <footer className="bg-[#3e2723] text-[#f8f3eb]">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            Café <span className="text-[#c89f7b]">Aura</span>
          </h2>

          <p className="mt-4 text-sm text-[#d8c9bd] leading-6">
            A cozy place for good coffee, delicious food,
            and beautiful moments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm text-[#d8c9bd]">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/menu" className="hover:text-white transition">Menu</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/gallery" className="hover:text-white transition">Gallery</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Visit Us</h3>

          <div className="text-sm text-[#d8c9bd] space-y-3">
            <p>📍 21 Coffee Street, Gwalior</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@cafeaura.com</p>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>

          <div className="text-sm text-[#d8c9bd] space-y-2">
            <p>Monday – Friday</p>
            <p className="text-white">8:00 AM – 10:00 PM</p>

            <p className="pt-2">Saturday – Sunday</p>
            <p className="text-white">9:00 AM – 11:00 PM</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#5a4036]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[#bcaea4]">

          <p>© 2026 Café Aura. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;

