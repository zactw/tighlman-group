import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#f59e0b]" />
                <span className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase">
                  About
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-8">
                A direct line.{" "}
                <span className="text-white/40">No middlemen.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                The Tilghman Group is a one-person operation with a network of trusted specialists for larger projects. That means you get a direct line to the person building your software — not a project manager, not a ticket system. Just someone who cares about solving your problem.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                We work with service businesses, contractors, and operators who know their trade but don&apos;t have time to become software experts. That&apos;s our job.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center">
                  <span className="text-[#f59e0b] font-bold text-sm">ZW</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Zachary Williams</p>
                  <p className="text-white/40 text-sm">Founder, The Tilghman Group</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Values / Differentiators */}
          <FadeIn delay={150}>
            <div className="space-y-4">
              {[
                {
                  title: "You talk to the builder",
                  body: "No account managers, no ticket queues. The person you meet is the person writing your code.",
                },
                {
                  title: "Fixed pricing",
                  body: "Scope agreed upfront. Price locked in. No hourly billing surprises at the end of the month.",
                },
                {
                  title: "Built for non-tech teams",
                  body: "Your crew shouldn't need a manual. We build software that makes sense on day one.",
                },
                {
                  title: "You own everything",
                  body: "Your code, your data, your server. We don't hold keys to your business.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-5 bg-[#111111] border border-white/[0.06] rounded-xl hover:border-white/[0.1] transition-colors"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] mt-2" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-white/45 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
