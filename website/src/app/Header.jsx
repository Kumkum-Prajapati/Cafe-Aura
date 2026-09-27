import React from "react";

function Header() {
  return (
    <header className="w-full bg-[#f8f3eb] border-b border-[#e5ddd2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-[#3e2723]">
          Café <span className="text-[#8b5e3c]">Aura</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-[#3e2723] hover:text-[#8b5e3c] transition"
          >
            Home
          </a>

          <a
            href="/menu"
            className="text-[#3e2723] hover:text-[#8b5e3c] transition"
          >
            Menu
          </a>

          <a
            href="/about"
            className="text-[#3e2723] hover:text-[#8b5e3c] transition"
          >
            About
          </a>

          <a
            href="/gallery"
            className="text-[#3e2723] hover:text-[#8b5e3c] transition"
          >
            Gallery
          </a>

          <a
            href="/contact"
            className="text-[#3e2723] hover:text-[#8b5e3c] transition"
          >
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-[#3e2723] text-white px-5 py-2.5 rounded-full hover:bg-[#8b5e3c] transition">
          Book a Table
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#3e2723] text-2xl">
          ☰
        </button>

      </div>
    </header>
  );
}

export default Header;

