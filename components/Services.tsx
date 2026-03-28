import FadeIn from "./FadeIn";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
    title: "Scheduling & Dispatch Tools",
    description:
      "If you're still running your crew off a whiteboard or a spreadsheet, we can fix that. Custom scheduling software built around how your business actually works.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    title: "Field Management Software",
    description:
      "Job tracking, crew management, property databases, print-ready work orders. Everything your field team needs, nothing they don't.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Customer & Client Portals",
    description:
      "Give your clients a simple place to request work, view job status, and communicate. Professional without being complicated.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: "Internal Operations Tools",
    description:
      "Intake forms, dashboards, reporting, approval workflows. Custom-built tools that eliminate the manual work eating your day.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase">
                Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              What we build.
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Practical tools for businesses that run on people, not software subscriptions.
            </p>
          </div>
        </FadeIn>

        {/* Service cards — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <div className="group p-8 bg-[#111111] border border-white/[0.06] rounded-2xl hover:border-[#f59e0b]/20 hover:bg-[#131313] transition-all duration-300">
                <div className="text-[#f59e0b] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
