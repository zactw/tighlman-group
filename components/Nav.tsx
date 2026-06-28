"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    // iOS Safari (esp. PWA standalone) sometimes fails to register taps on
    // a fixed header until the first scroll. Nudge the layout once on mount.
    const id = window.requestAnimationFrame(() => {
      window.scrollTo(window.scrollX, window.scrollY + 1);
      window.scrollTo(window.scrollX, window.scrollY - 1);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(id);
    };
  }, []);

  const links = [
    { label: "In Action", href: "/#demo" },
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
  ];

  const bookACall =
    "mailto:zachary.williams@tighlmangroup.com?subject=Discovery%20call%20request";

  const closeMenu = () => {
    const cb = document.getElementById("mob-nav") as HTMLInputElement | null;
    if (cb) cb.checked = false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* CSS-only mobile menu toggle — works on first tap, pre-hydration */}
      <input
        id="mob-nav"
        type="checkbox"
        className="mob-nav-toggle"
        aria-label="Toggle navigation menu"
      />

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

        {/* Hamburger label — clicking flips the checkbox, no JS needed */}
        <label
          htmlFor="mob-nav"
          className="md:hidden cursor-pointer text-white/85 p-3 -mr-3 select-none touch-manipulation"
          aria-hidden="true"
        >
          <div className="w-6 h-5 flex flex-col justify-between nav-bars">
            <span className="block h-0.5 bg-current rounded-full transition-transform duration-300" />
            <span className="block h-0.5 bg-current rounded-full transition-opacity duration-300" />
            <span className="block h-0.5 bg-current rounded-full transition-transform duration-300" />
          </div>
        </label>
      </nav>

      {/* Mobile dropdown — sibling of nav, controlled by ~ checked selector */}
      <div className="mob-nav-panel md:hidden absolute left-0 right-0 top-20 bg-[#0f0f0f] border-b border-white/5 shadow-xl shadow-black/40">
        <div className="px-6 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-white/85 hover:text-white text-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookACall}
            onClick={closeMenu}
            className="text-base bg-[#f59e0b] text-black font-semibold px-5 py-3.5 rounded-md text-center hover:bg-[#fbbf24] transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
