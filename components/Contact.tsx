import FadeIn from "./FadeIn";

const BOOK_A_CALL =
  "mailto:zachary.williams@tighlmangroup.com?subject=Discovery%20call%20request";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <span className="text-[#f59e0b] text-base font-semibold tracking-widest uppercase">
              Contact
            </span>
            <div className="h-px w-8 bg-[#f59e0b]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            The best projects start with a conversation. Tell us what
            you&apos;re dealing with — no pitch, no pressure.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <a
            href={BOOK_A_CALL}
            className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-black font-bold px-10 py-5 rounded-lg text-lg hover:bg-[#fbbf24] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
          >
            Book a call
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-white/50 text-base mt-6">
            Opens your email client. Typical response within 1 business day.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
