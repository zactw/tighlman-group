"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Parallax on mouse move — skip on touch devices to save CPU/battery
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const glow = el.querySelector<HTMLElement>(".hero-glow");
      if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
      id="hero"
    >
      {/* Ambient glow */}
      <div
        className="hero-glow ambient-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)" }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <span className="text-[#f59e0b] text-base font-semibold tracking-widest uppercase">
              Software Consultancy
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 sm:mb-8">
            Software
            <br />
            <span className="text-[#f59e0b]">that works.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 max-w-2xl leading-relaxed mb-8 sm:mb-12">
            We build custom software for businesses that need it to just work.
            No jargon, no bloat —{" "}
            <span className="text-white">just tools your team will actually use.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:zachary.williams@tighlmangroup.com?subject=Discovery%20call%20request"
              className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-black font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-lg text-base sm:text-lg hover:bg-[#fbbf24] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
            >
              Book a discovery call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/80 font-medium px-6 sm:px-8 py-4 sm:py-5 rounded-lg text-base sm:text-lg hover:border-white/30 hover:text-white transition-all duration-200"
            >
              See our work
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-white/50 text-sm sm:text-base">
            <span>Scheduling tools</span>
            <span className="text-white/10">·</span>
            <span>Field management</span>
            <span className="text-white/10">·</span>
            <span>Client portals</span>
            <span className="text-white/10">·</span>
            <span>Operations software</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
