import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Heading & info */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#f59e0b]" />
                <span className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Let&apos;s talk.
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-10">
                The best projects start with a conversation. Tell us what you&apos;re dealing with — no pitch, no pressure.
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-4">
                <a
                  href="mailto:zachary.williams@tilghmangroup.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] group-hover:bg-[#f59e0b]/20 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/60 group-hover:text-white transition-colors text-sm">
                    zachary.williams@tilghmangroup.com
                  </span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-12 p-6 bg-[#111111] border border-white/[0.06] rounded-2xl">
                <p className="text-xs text-white/30 font-semibold uppercase tracking-wider mb-3">Typical response time</p>
                <p className="text-white/70 text-sm">Within 1 business day. Usually faster.</p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact form */}
          <FadeIn delay={150}>
            <form
              action="mailto:zachary.williams@tilghmangroup.com"
              method="get"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/40 font-semibold uppercase tracking-wider mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#111111] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f59e0b]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-semibold uppercase tracking-wider mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[#111111] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f59e0b]/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 font-semibold uppercase tracking-wider mb-2" htmlFor="business">
                  What kind of business?
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="e.g. Carpet cleaning, roofing, HVAC..."
                  className="w-full bg-[#111111] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f59e0b]/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 font-semibold uppercase tracking-wider mb-2" htmlFor="message">
                  What are you dealing with?
                </label>
                <textarea
                  id="message"
                  name="body"
                  required
                  rows={5}
                  placeholder="Describe the problem you're trying to solve. The more specific, the better."
                  className="w-full bg-[#111111] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f59e0b]/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f59e0b] text-black font-bold py-4 rounded-lg text-sm hover:bg-[#fbbf24] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-amber-500/20"
              >
                Send Message
              </button>

              <p className="text-center text-white/20 text-xs">
                This opens your email client. Or email us directly above.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
