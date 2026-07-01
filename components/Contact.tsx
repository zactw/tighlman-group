'use client';

import { useEffect } from 'react';
import FadeIn from './FadeIn';

// ─── Calendly config ──────────────────────────────────────────────────────────
// TODO: Replace with your Calendly URL once your account is set up.
// Steps:
//   1. Go to https://calendly.com and create a free account
//   2. Create a "Discovery Call" event type (30 min recommended)
//   3. In Event Settings → Notifications, enable email confirmations to yourself
//   4. Copy your event link (e.g. https://calendly.com/zachary-tighlman/discovery-call)
//   5. Paste it below, replacing the placeholder
//
// Until then, the fallback mailto link will show instead of the embed.
const CALENDLY_URL = ''; // e.g. 'https://calendly.com/zachary-tighlman/discovery-call'
const BOOK_A_CALL = 'mailto:zachary.williams@tighlmangroup.com?subject=Discovery%20call%20request';

// ─── Calendly inline widget ───────────────────────────────────────────────────

function CalendlyWidget({ url }: { url: string }) {
  useEffect(() => {
    // Load Calendly widget script once
    if (document.getElementById('calendly-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-white/[0.08]"
      data-url={`${url}?hide_gdpr_banner=1&background_color=0f0f0f&text_color=f5f5f5&primary_color=f59e0b`}
      style={{ minWidth: 320, height: 650 }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <span className="text-[#f59e0b] text-base font-semibold tracking-widest uppercase">
              Contact
            </span>
            <div className="h-px w-8 bg-[#f59e0b]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            The best projects start with a conversation. Tell us what
            you&apos;re dealing with — no pitch, no pressure.
          </p>
        </FadeIn>

        {CALENDLY_URL ? (
          /* ── Calendly inline embed ── */
          <FadeIn delay={80}>
            <CalendlyWidget url={CALENDLY_URL} />
            <p className="text-white/40 text-sm mt-5">
              Pick a time that works for you. You&apos;ll get a confirmation email with a call link.
            </p>
          </FadeIn>
        ) : (
          /* ── Fallback: mailto CTA until Calendly is configured ── */
          <>
            <FadeIn delay={100}>
              <a
                href={BOOK_A_CALL}
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-black font-bold px-10 py-5 rounded-lg text-lg hover:bg-[#fbbf24] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
              >
                Book a call
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-white/50 text-base mt-6">
                Opens your email client. Typical response within 1 business day.
              </p>
            </FadeIn>
          </>
        )}
      </div>
    </section>
  );
}
