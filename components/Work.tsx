import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    screenshot: "/screenshots/taxedfor.png",
    label: "Web Application",
    title: "TaxedFor",
    description:
      "A federal tax transparency tool that shows Americans exactly where their tax dollars go. Built from concept to live product in under a week.",
    tags: ["Web App", "Public Tool", "React"],
    link: "https://taxedfor.com",
    linkLabel: "taxedfor.com",
  },
  {
    screenshot: "/screenshots/acc.png",
    label: "Field Management Software",
    title: "Arizona Carpet Care Scheduler",
    description:
      "Custom scheduling software replacing a legacy paid tool. Crew-based daily calendar, printable job sheets, and property management — built simple for non-tech staff.",
    tags: ["Operations", "Scheduling", "React"],
    link: null,
    linkLabel: null,
  },
  {
    screenshot: "/screenshots/swyft.png",
    label: "Operations Software",
    title: "Swyft Restoration Scheduler",
    description:
      "End-to-end job scheduling and property management platform for a restoration company. Replaced spreadsheets with a clean, role-based web app.",
    tags: ["Operations", "Field Management", "React"],
    link: null,
    linkLabel: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase">
                Work
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Built. Shipped. Used.
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Real software solving real problems for real businesses.
            </p>
          </div>
        </FadeIn>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 120}>
              <article className="group relative bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] hover:bg-[#161616] transition-all duration-300">
                {/* Screenshot */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay gradient at bottom of screenshot */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#111111] to-transparent" />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#f59e0b] tracking-wider uppercase">
                    {project.label}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/40 bg-white/[0.05] px-2.5 py-1 rounded-full border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#f59e0b] hover:text-[#fbbf24] transition-colors font-medium"
                    >
                      {project.linkLabel}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 9.5l7-7M9.5 9.5V2.5H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
