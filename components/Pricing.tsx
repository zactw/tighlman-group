'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const examples = [
  {
    label: 'MAX',
    title: 'Operations platform',
    subtitle: 'For managers running large crews and complex properties.',
    description:
      'Built for service businesses with multiple crews, big property portfolios, and complicated jobs. Schedule and dispatch crews, track the full history of every property and job, and flag what needs attention first.',
    features: [
      'Multi-crew daily scheduling & dispatch',
      'Property & client database with full job history',
      'Manager and crew views for every job',
      'Priority flagging & deadlines',
      'Printable & exportable job sheets',
      'Up to 5 users included',
    ],
    build: 2000,
    monthly: 120,
    annual: 1000,
    perUserMonthly: 10,
    perUserAnnual: 100,
    featured: true,
  },
  {
    label: 'Light',
    title: 'Crew scheduling & tasks',
    subtitle: 'For smaller teams with lightweight jobs and task management.',
    description:
      'A simple tool for small crews. Schedule the day, hand out task lists, mark jobs done. No bloat, no learning curve — your team can use it on day one.',
    features: [
      'Daily crew schedule',
      'Job task checklists',
      'Simple property & client list',
      'Printable daily sheets',
      'Up to 5 users included',
    ],
    build: 1400,
    monthly: 100,
    annual: 800,
    perUserMonthly: 10,
    perUserAnnual: 100,
    featured: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const annualDiscountPct = Math.floor(
    Math.min(
      ...examples.map((ex) => ((ex.monthly * 12 - ex.annual) / (ex.monthly * 12)) * 100)
    ) / 5
  ) * 5;

  return (
    <section id="pricing" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-base font-semibold tracking-widest uppercase">
                Pricing
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Transparent. Simple.
            </h2>
            <p className="text-white/70 text-xl max-w-2xl">
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
                className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  billing === 'monthly'
                    ? 'bg-[#f59e0b] text-black shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`relative px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 inline-flex items-center gap-2 ${
                  billing === 'annual'
                    ? 'bg-[#f59e0b] text-black shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Annual
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full tracking-wide ${
                    billing === 'annual'
                      ? 'bg-black/15 text-black'
                      : 'bg-[#f59e0b]/15 text-[#f59e0b]'
                  }`}
                >
                  −{annualDiscountPct}%
                </span>
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
                <p className="text-sm text-white/50 font-semibold tracking-widest uppercase mb-3">
                  Discovery
                </p>
                <div className="mb-1">
                  <span className="text-4xl font-black text-white">Free</span>
                </div>
                <p className="text-sm text-white/40 mb-4">No credit card. No commitment.</p>
                <p className="text-white/70 text-base leading-relaxed">
                  A no-pressure conversation to understand your problem and see if we&apos;re the right fit.
                </p>
              </div>

              <div className="h-px bg-white/[0.06] mb-6" />

              <div className="flex-1">
                <p className="text-sm text-white/50 font-semibold uppercase tracking-wider mb-4">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {[
                    '1-hour discovery call',
                    'Problem assessment',
                    'Rough scope estimate',
                    'Honest recommendation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-white/75">
                      <svg className="shrink-0 mt-1 text-[#f59e0b]" width="16" height="16" viewBox="0 0 14 14" fill="none">
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
                  className="block text-center py-4 rounded-lg font-semibold text-base border border-white/15 text-white/80 hover:border-white/30 hover:text-white transition-all duration-200"
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#f59e0b] text-black text-sm font-bold px-4 py-1.5 rounded-full tracking-wide uppercase whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <p className="text-sm text-white/50 font-semibold tracking-widest uppercase mb-3">
                      {ex.label}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-1">{ex.title}</h3>
                    <p className="text-sm text-white/40 italic mb-4">{ex.subtitle}</p>

                    {/* Build price */}
                    <div className="mb-3 p-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                      <p className="text-sm text-white/40 uppercase tracking-wider mb-1">One-time build</p>
                      <span className="text-3xl font-black text-white">
                        ${ex.build.toLocaleString()}
                      </span>
                    </div>

                    {/* Recurring */}
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-wider mb-1">
                        {billing === 'monthly' ? 'Monthly' : 'Annual'} maintenance
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-black ${ex.featured ? 'text-[#f59e0b]' : 'text-white'}`}>
                          ${recurringPrice.toLocaleString()}
                        </span>
                        <span className="text-white/50 text-base font-medium">{recurringLabel}</span>
                      </div>
                    </div>

                    <p className="text-white/65 text-base leading-relaxed mt-3">{ex.description}</p>
                  </div>

                  <div className="h-px bg-white/[0.06] mb-6" />

                  <div className="flex-1">
                    <p className="text-sm text-white/50 font-semibold uppercase tracking-wider mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {ex.features.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base text-white/75">
                          <svg className="shrink-0 mt-1 text-[#f59e0b]" width="16" height="16" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-sm text-white/40 border-t border-white/[0.05] pt-4">
                      Additional users: ${perUserRate}/user{billing === 'monthly' ? '/mo' : '/yr'}
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className={`block text-center py-4 rounded-lg font-semibold text-base transition-all duration-200 ${
                        ex.featured
                          ? 'bg-[#f59e0b] text-black hover:bg-[#fbbf24] shadow-lg shadow-amber-500/20'
                          : 'border border-white/15 text-white/80 hover:border-white/30 hover:text-white'
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
          <div className="mt-10 text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-white/40 text-base">
              Out-of-scope work billed at <span className="text-white/60">$100/hr</span>.
              Hosting, bug fixes, minor updates, and priority support included in maintenance.
            </p>
            <p className="text-white/30 text-sm">
              All prices, plans, features, and discounts shown are estimates for illustrative purposes only, do not constitute an offer, and are subject to change at any time without notice at our sole discretion. Final pricing and terms will be set out in a written engagement agreement.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
