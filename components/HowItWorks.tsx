import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Free Discovery",
    description:
      "We sit down (or hop on a call) and learn your business. No pitch, no pressure. Just us asking the right questions.",
  },
  {
    number: "02",
    title: "We Build It",
    description:
      "One fixed price. We design, build, and test your software. You see progress along the way and have final say on everything.",
  },
  {
    number: "03",
    title: "You Own It",
    description:
      "It's yours. We hand over the keys. Optional maintenance plans available for updates, new features, and support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase">
                Process
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              How it works.
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Straightforward from first conversation to final delivery.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 150} className="flex-1">
              <div className="relative p-8 md:p-10">
                {/* Step number bubble */}
                <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#f59e0b]/30 bg-[#111111] mb-6">
                  <span className="text-[#f59e0b] text-sm font-bold">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>

                {/* Connector arrow (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-6 mb-2 pl-7">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M4 9l4 4 4-4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
