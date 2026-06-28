"use client";

import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

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

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

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

        {/* Mobile dropdown — uses <details> so the first tap works pre-hydration */}
        <details ref={detailsRef} className="md:hidden nav-details">
          <summary
            className="list-none cursor-pointer text-white/80 hover:text-white p-2 select-none -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between nav-bars">
              <span className="block h-0.5 bg-current rounded-full transition-all duration-300" />
              <span className="block h-0.5 bg-current rounded-full transition-all duration-300" />
              <span className="block h-0.5 bg-current rounded-full transition-all duration-300" />
            </div>
          </summary>

          <div className="absolute left-0 right-0 top-full bg-[#0f0f0f] border-b border-white/5 shadow-xl shadow-black/40">
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
        </details>
      </nav>
    </header>
  );
}
