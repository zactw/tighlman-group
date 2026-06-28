"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "In Action", href: "/#demo" },
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
  ];

  const bookACall =
    "mailto:zachary.williams@tighlmangroup.com?subject=Discovery%20call%20request";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-[#f59e0b] text-xl font-bold tracking-tight">TG</span>
          <span className="text-white font-semibold text-base tracking-wide hidden sm:block">
            The Tighlman Group
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-white/75 hover:text-white transition-colors duration-200 tracking-wide font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookACall}
            className="text-base bg-[#f59e0b] text-black font-semibold px-5 py-2.5 rounded-md hover:bg-[#fbbf24] transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0f0f0f] border-b border-white/5 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookACall}
            onClick={() => setMenuOpen(false)}
            className="text-base bg-[#f59e0b] text-black font-semibold px-5 py-3.5 rounded-md text-center hover:bg-[#fbbf24] transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
