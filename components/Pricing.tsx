'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const examples = [
  {
    label: 'Service Business',
    title: 'Field Management Software',
    subtitle: 'Like our Arizona Carpet Care scheduler',
    description:
      'Custom scheduling software for service businesses. Crew-based daily calendar, printable job sheets, and property management — built simple for non-tech staff.',
    features: [
      'Custom job scheduling & calendar',
      'Crew-based daily job views',
      'Property & client management',
      'Printable job sheets',
      'Up to 5 users included',
    ],
    build: 2000,
    monthly: 120,
    annual: 1000,
    perUserMonthly: 10,
    perUserAnnual: 100,
    featured: false,
  },
  {
    label: 'Operations Platform',
    title: 'Restoration & Construction FMS',
    subtitle: 'Like our Swyft Restoration scheduler',
    description:
      'End-to-end job scheduling and property management for restoration or construction companies. Role-based views, audit logs, and field-ready design.',
    features: [
      'Role-based manager & crew views',
      'Property & job history tracking',
      'Activity log & audit feed',
      'Priority flagging & deadlines',
      'Up to 5 users included',
    ],
    build: 1400,
    monthly: 100,
    annual: 800,
    perUserMonthly: 10,
    perUserAnnual: 100,
    featured: true,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <FadeIn>
          <div className="mb-12">
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
              No retainers, no surprises. Real prices from real projects we&apos;ve shipped.
            </p>
          </div>
        </FadeIn>

        {/* Billing toggle */}
        <FadeIn delay={60}>
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-1 bg-[#111111] border border-white/[0.08] rounded-xl p-1">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  billing === 'monthly'
                    ? 'bg-[#f59e0b] text-black shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  billing === 'annual'
                    ? 'bg-[#f59e0b] text-black shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Annual
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Three-column layout: Discovery + 2 examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Discovery card */}
          <FadeIn delay={80}>
            <div className="relative flex flex-col h-full bg-[#111111] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-8 transition-all duration-300">
              <div className="mb-8">
                <p className="text-xs text-white/40 font-semibold tracking-widest uppercase mb-3">
                  Discovery
                </p>
                <div className="mb-1">
                  <span className="text-3xl font-black text-white">Free</span>
                </div>
                <p className="text-xs text-white/30 mb-4">No credit card. No commitment.</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  A no-pressure conversation to understand your problem and see if we&apos;re the right fit.
                </p>
              </div>

              <div className="h-px bg-white/[0.06] mb-6" />

              <div className="flex-1">
                <p className="text-xs text-white/30 font-semibold uppercase tracking-wider mb-4">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {[
                    '1-hour discovery call',
                    'Problem assessment',
                    'Rough scope estimate',
                    'Honest recommendation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <svg className="shrink-0 mt-0.5 text-[#f59e0b]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="block text-center py-3.5 rounded-lg font-semibold text-sm border border-white/15 text-white/70 hover:border-white/30 hover:text-white transition-all duration-200"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Example app cards */}
          {examples.map((ex, i) => {
            const recurringPrice = billing === 'monthly' ? ex.monthly : ex.annual;
            const recurringLabel = billing === 'monthly' ? '/mo' : '/yr';
            const perUserRate = billing === 'monthly' ? ex.perUserMonthly : ex.perUserAnnual;

            return (
              <FadeIn key={ex.title} delay={160 + i * 120}>
                <div
                  className={`relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300 ${
                    ex.featured
                      ? 'bg-[#111111] border-2 border-[#f59e0b]/40 shadow-xl shadow-amber-500/5'
                      : 'bg-[#111111] border border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  {ex.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#f59e0b] text-black text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase whitespace-nowrap">
                        Sample Project
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <p className="text-xs text-white/40 font-semibold tracking-widest uppercase mb-3">
                      {ex.label}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-1">{ex.title}</h3>
                    <p className="text-xs text-white/30 italic mb-4">{ex.subtitle}</p>

                    {/* Build price */}
                    <div className="mb-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                      <p className="text-xs text-white/30 uppercase tracking-wider mb-1">One-time build</p>
                      <span className="text-2xl font-black text-white">
                        ${ex.build.toLocaleString()}
                      </span>
                    </div>

                    {/* Recurring */}
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider mb-1">
                        {billing === 'monthly' ? 'Monthly' : 'Annual'} maintenance
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-black ${ex.featured ? 'text-[#f59e0b]' : 'text-white'}`}>
                          ${recurringPrice.toLocaleString()}
                        </span>
                        <span className="text-white/40 text-sm font-medium">{recurringLabel}</span>
                      </div>
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed mt-3">{ex.description}</p>
                  </div>

                  <div className="h-px bg-white/[0.06] mb-6" />

                  <div className="flex-1">
                    <p className="text-xs text-white/30 font-semibold uppercase tracking-wider mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {ex.features.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                          <svg className="shrink-0 mt-0.5 text-[#f59e0b]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-xs text-white/25 border-t border-white/[0.05] pt-4">
                      Additional users: ${perUserRate}/user{billing === 'monthly' ? '/mo' : '/yr'}
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className={`block text-center py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        ex.featured
                          ? 'bg-[#f59e0b] text-black hover:bg-[#fbbf24] shadow-lg shadow-amber-500/20'
                          : 'border border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Footer note */}
        <FadeIn delay={450}>
          <div className="mt-10 text-center space-y-2">
            <p className="text-white/25 text-sm">
              Out-of-scope work billed at <span className="text-white/40">$100/hr</span>.
              Prices above reflect real projects — your build may vary based on scope.
            </p>
            <p className="text-white/20 text-xs">
              Hosting, bug fixes, minor updates, and priority support included in maintenance.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
