import FadeIn from "./FadeIn";

const tiers = [
  {
    name: "Discovery",
    price: "Free",
    priceNote: "No credit card. No commitment.",
    tagline: "A no-commitment conversation to understand your problem and see if we're the right fit.",
    includes: [
      "1-hour discovery call",
      "Problem assessment",
      "Rough scope estimate",
      "Honest recommendation",
    ],
    cta: "Book a Call",
    ctaHref: "#contact",
    featured: false,
    note: null,
  },
  {
    name: "Build",
    price: "Starting at $____",
    priceNote: "Fixed price. No surprises.",
    tagline: "One fixed price to design, build, and deliver your custom software.",
    includes: [
      "Custom design",
      "Full development",
      "Testing & QA",
      "Deployment",
      "30 days of included support",
    ],
    cta: "Get a Quote",
    ctaHref: "#contact",
    featured: true,
    note: "Additional users beyond 5: $____/mo",
  },
  {
    name: "Maintenance",
    price: "$____/mo",
    priceNote: "or $____/yr (save 2 months)",
    tagline: "Keep your software running, updated, and growing with your business.",
    includes: [
      "Bug fixes",
      "Small updates & improvements",
      "Priority support",
      "Hosting management",
    ],
    cta: "Learn More",
    ctaHref: "#contact",
    featured: false,
    note: "Out-of-scope work billed at $____/hr",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase">
                Pricing
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Transparent. Simple.
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              No retainers, no hourly ambiguity. You know what you&apos;re paying before we start.
            </p>
          </div>
        </FadeIn>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 120}>
              <div
                className={`relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300 ${
                  tier.featured
                    ? "bg-[#111111] border-2 border-[#f59e0b]/40 shadow-xl shadow-amber-500/5"
                    : "bg-[#111111] border border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#f59e0b] text-black text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <p className="text-sm text-white/40 font-semibold tracking-widest uppercase mb-3">
                    {tier.name}
                  </p>
                  <div className="mb-1">
                    <span
                      className={`text-3xl font-black ${
                        tier.featured ? "text-[#f59e0b]" : "text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-xs text-white/30 mb-4">{tier.priceNote}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{tier.tagline}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-6" />

                {/* Includes */}
                <div className="flex-1">
                  <p className="text-xs text-white/30 font-semibold uppercase tracking-wider mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                        <svg
                          className="shrink-0 mt-0.5 text-[#f59e0b]"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2.5 7l3.5 3.5 5.5-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {tier.note && (
                    <p className="mt-4 text-xs text-white/25 border-t border-white/[0.05] pt-4">
                      {tier.note}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href={tier.ctaHref}
                    className={`block text-center py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      tier.featured
                        ? "bg-[#f59e0b] text-black hover:bg-[#fbbf24] shadow-lg shadow-amber-500/20"
                        : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Callout note */}
        <FadeIn delay={400}>
          <p className="text-center text-white/25 text-sm mt-10">
            💡 Prices marked <span className="text-white/40">$____</span> will be filled in shortly — contact us for current rates.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
