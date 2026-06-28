'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

// ─── Dummy data ────────────────────────────────────────────────────────────────

const ACC_JOBS = [
  { id: 1, property: 'Portola at Scottsdale', address: '7777 E Gainey Ranch Rd', crew: 'Aaron', time: '8:00 AM – 9:00 AM', status: 'scheduled', urgent: false, comments: 'Fwd 3 units, check gate code' },
  { id: 2, property: 'Camden Old Town', address: '4848 N Scottsdale Rd', crew: 'Aaron', time: '9:00 AM – 10:00 AM', status: 'in-progress', urgent: false, comments: '' },
  { id: 3, property: 'Villas at Tempe', address: '1234 S Mill Ave', crew: 'Gabe', time: '8:00 AM – 9:00 AM', status: 'scheduled', urgent: true, comments: 'Urgent — move-out inspection today' },
  { id: 4, property: 'Rio Paradiso', address: '3939 E Camelback Rd', crew: 'Gabe', time: '10:00 AM – 11:00 AM', status: 'scheduled', urgent: false, comments: 'Fwd 2, addons ok' },
  { id: 5, property: 'Arcadia Lofts', address: '4400 N 32nd St', crew: 'Elijah', time: '8:00 AM – 9:00 AM', status: 'completed', urgent: false, comments: '' },
  { id: 6, property: 'Sonoran Flats', address: '789 W Baseline Rd', crew: 'Elijah', time: '9:30 AM – 10:30 AM', status: 'scheduled', urgent: false, comments: 'Gate code: 1432#' },
];

const SWYFT_JOBS = [
  { id: 1, property: 'Sunrise Commons', address: '4521 E Thomas Rd, Phoenix', unit: '204B', type: 'Water Damage Mitigation', deadline: 'Jun 30', tasks: ['Extract standing water', 'Place air movers', 'Set dehumidifiers', 'Photo documentation'], notes: 'Tenant still on-site, work around schedule', urgent: true },
  { id: 2, property: 'Mesa Ridge Apartments', address: '2200 S Dobson Rd, Mesa', unit: '107', type: 'Mold Remediation', deadline: 'Jul 2', tasks: ['Containment setup', 'HEPA vacuuming', 'Anti-microbial treatment', 'Clearance testing'], notes: '', urgent: false },
  { id: 3, property: 'Chandler Crossings', address: '1100 S Price Rd, Chandler', unit: '312', type: 'Fire Damage Cleanup', deadline: 'Jul 5', tasks: ['Debris removal', 'Soot cleaning', 'Deodorization', 'Board-up windows'], notes: 'Access through south entrance only', urgent: false },
];

// ─── Status helpers ────────────────────────────────────────────────────────────

const ACC_STATUS: Record<string, { dot: string; text: string; bg: string; border: string }> = {
  scheduled:   { dot: 'bg-blue-400',   text: 'text-blue-800',   bg: 'bg-blue-50',   border: 'border-blue-200' },
  'in-progress':{ dot: 'bg-amber-400', text: 'text-amber-800',  bg: 'bg-amber-50',  border: 'border-amber-200' },
  completed:   { dot: 'bg-green-400',  text: 'text-green-800',  bg: 'bg-green-50',  border: 'border-green-200' },
};

const CREWS = ['Elijah', 'Aaron', 'Gabe', 'Brandon'];
const CREW_COLORS: Record<string, string> = {
  Elijah: '#6366f1', Aaron: '#f59e0b', Gabe: '#10b981', Brandon: '#ef4444',
};

// ─── ACC Screens ───────────────────────────────────────────────────────────────

function ACCCalendar({ onSelectJob }: { onSelectJob: (job: typeof ACC_JOBS[0]) => void }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm text-xs font-sans">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400">‹</button>
          <button className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold text-[10px] border border-blue-200">Today</button>
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400">›</button>
          <span className="font-semibold text-gray-800 text-[11px] ml-1">Wednesday, June 25, 2025</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1 px-2 py-1 rounded border border-gray-300 text-gray-600 text-[10px] hover:bg-gray-50">🖨 Print</button>
          <button className="flex items-center gap-1 px-2 py-1 rounded bg-blue-600 text-white text-[10px] font-medium">+ Add Job</button>
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: 520 }}>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 py-1.5 border-r border-gray-200" />
              {CREWS.map(c => (
                <th key={c} className="py-1.5 px-2 text-center border-r border-gray-100 last:border-0">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-gray-600">
                    <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: CREW_COLORS[c] }} />
                    {c}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['8:00 AM','9:00 AM','10:00 AM','11:00 AM'].map((time, rowIdx) => (
              <tr key={time} className={rowIdx % 2 === 0 ? 'bg-amber-50/30' : 'bg-white'} style={{ height: 52 }}>
                <td className="w-12 border-r border-gray-200 text-right pr-2 pt-1 align-top text-[9px] text-gray-400 font-medium">{time}</td>
                {CREWS.map(crew => {
                  const job = ACC_JOBS.find(j => j.crew === crew && j.time.startsWith(time));
                  return (
                    <td key={crew} className="border-r border-gray-100 last:border-0 p-0.5 align-top">
                      {job && (
                        <button
                          onClick={() => onSelectJob(job)}
                          className={`w-full text-left rounded p-1 border-l-2 transition-all hover:brightness-95 ${
                            job.urgent ? 'bg-red-50 border-red-500' : 'bg-white border-gray-300'
                          }`}
                          style={{ borderLeftColor: CREW_COLORS[crew] }}
                        >
                          <div className={`font-semibold leading-tight truncate text-[10px] ${job.urgent ? 'text-red-700' : 'text-gray-800'}`}>
                            {job.urgent && '⚑ '}{job.property}
                          </div>
                          <div className="text-[9px] text-gray-400 truncate">{job.address}</div>
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ACCJobDetail({ job, onBack }: { job: typeof ACC_JOBS[0]; onBack: () => void }) {
  const colors = ACC_STATUS[job.status] || ACC_STATUS.scheduled;
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm text-xs font-sans max-w-sm mx-auto">
      <div className={`px-4 py-3 ${colors.bg} border-b ${colors.border}`}>
        <div className="flex items-start justify-between">
          <div>
            <div className={`font-bold text-sm ${colors.text}`}>{job.property}</div>
            <div className={`text-[11px] opacity-75 ${colors.text}`}>{job.address}</div>
          </div>
          <button onClick={onBack} className="text-gray-400 hover:text-gray-600 text-base leading-none">✕</button>
        </div>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${colors.bg} ${colors.text} ${colors.border}`}>
            {job.status}
          </span>
          {job.urgent && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 border border-red-300">⚑ Urgent</span>
          )}
          <span className="text-[11px] text-gray-500">{job.time}</span>
        </div>
      </div>
      <div className="px-4 py-3 space-y-3">
        <div>
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Assigned Crew</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CREW_COLORS[job.crew] }} />
            <span className="text-[11px] font-medium text-gray-700">{job.crew}</span>
          </div>
        </div>
        {job.comments && (
          <div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Notes</div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-[11px] text-blue-800">{job.comments}</div>
          </div>
        )}
        <div>
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Property Info</div>
          <div className="text-[11px] text-gray-600">Gate Code: <span className="font-semibold text-gray-800">4821#</span></div>
          <div className="text-[11px] text-gray-600 mt-0.5">Mgr: <span className="font-semibold text-gray-800">Sandra M. — (480) 555-0182</span></div>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-gray-100 flex gap-2 justify-end">
        <button className="px-3 py-1.5 text-[11px] border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">Edit</button>
        <button className="px-3 py-1.5 text-[11px] bg-blue-600 text-white rounded-lg hover:bg-blue-700">Mark Complete</button>
      </div>
    </div>
  );
}

function ACCPrintPreview() {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm text-xs font-mono max-w-lg mx-auto">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <span className="font-semibold text-gray-700 text-[11px]">Print Preview — Aaron — Jun 25</span>
        <button className="px-2 py-1 bg-blue-600 text-white rounded text-[10px] font-medium">🖨 Print</button>
      </div>
      <div className="p-4">
        <div className="border-b-2 border-black pb-1 mb-3 flex justify-between items-end">
          <div>
            <div className="text-lg font-bold italic leading-tight">Schedule</div>
            <div className="text-sm font-semibold">Aaron</div>
          </div>
          <div className="text-[11px] text-gray-600">Wednesday, June 25, 2025</div>
        </div>
        {ACC_JOBS.filter(j => j.crew === 'Aaron').map((job, i) => (
          <div key={job.id} className="flex gap-2 py-2 border-b border-gray-300 last:border-0">
            <div className="w-[45%]">
              <div className="font-bold text-[11px] leading-tight">{job.property}</div>
              <div className="text-[10px] text-gray-600">{job.address}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Mgr: Sandra M. (480) 555-0182</div>
            </div>
            <div className="w-[38%]">
              <div className="text-[10px] font-semibold text-gray-500">AM</div>
              <div className="text-[10px] text-gray-700">{job.comments || '—'}</div>
            </div>
            <div className="w-[17%] text-right">
              <div className="text-[10px]">Ph: (480) 555-0{100 + i * 17}</div>
              <div className="text-[10px] mt-3">Total: ____</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Swyft Screens ─────────────────────────────────────────────────────────────

function SwyftSchedule({ onSelectJob }: { onSelectJob: (job: typeof SWYFT_JOBS[0]) => void }) {
  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm text-xs font-sans">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400">‹</button>
          <span className="font-semibold text-gray-800 text-[11px]">Wednesday, June 25, 2025</span>
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400">›</button>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-gray-500 font-medium">{SWYFT_JOBS.length} jobs</span>
          <button className="px-2 py-1 rounded border border-gray-300 text-gray-600 text-[10px] hover:bg-gray-50">Print</button>
          <button className="px-2 py-1 rounded bg-orange-500 text-white text-[10px] font-medium">+ Add Job</button>
        </div>
      </div>
      <div className="p-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SWYFT_JOBS.map((job, i) => (
          <button
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`text-left bg-white rounded-xl border-2 p-3 hover:shadow-md transition-all ${
              job.urgent ? 'border-red-400' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between mb-1.5">
              <div>
                <div className="text-[9px] text-gray-400 font-medium">Job {i + 1}</div>
                <div className={`font-bold text-[11px] leading-tight ${job.urgent ? 'text-red-800' : 'text-gray-800'}`}>
                  {job.urgent && '⚑ '}{job.property}
                </div>
                <div className="text-[9px] text-gray-400">Unit {job.unit}</div>
              </div>
              {job.deadline && (
                <div className="text-right">
                  <div className="text-[9px] text-gray-400">Deadline</div>
                  <div className="text-[10px] font-semibold text-gray-700">{job.deadline}</div>
                </div>
              )}
            </div>
            <div className="text-[10px] text-orange-700 font-semibold">{job.type}</div>
            <div className="text-[9px] text-gray-500 mt-1 truncate">{job.address}</div>
            {job.tasks.length > 0 && (
              <div className="mt-2 space-y-0.5">
                {job.tasks.slice(0, 2).map(t => (
                  <div key={t} className="flex items-center gap-1 text-[9px] text-gray-500">
                    <span className="w-2.5 h-2.5 border border-gray-400 rounded-sm inline-block flex-shrink-0" />
                    {t}
                  </div>
                ))}
                {job.tasks.length > 2 && (
                  <div className="text-[9px] text-gray-400">+{job.tasks.length - 2} more tasks</div>
                )}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function SwyftJobDetail({ job, onBack }: { job: typeof SWYFT_JOBS[0]; onBack: () => void }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm text-xs font-sans max-w-sm mx-auto">
      <div className={`px-4 py-3 border-b ${job.urgent ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'}`}>
        <div className="flex items-start justify-between">
          <div>
            <div className={`font-bold text-sm ${job.urgent ? 'text-red-800' : 'text-orange-900'}`}>{job.property}</div>
            <div className={`text-[11px] opacity-75 ${job.urgent ? 'text-red-700' : 'text-orange-800'}`}>{job.address}</div>
          </div>
          <button onClick={onBack} className="text-gray-400 hover:text-gray-600 text-base leading-none">✕</button>
        </div>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          {job.urgent && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 border border-red-300">⚑ Urgent</span>}
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-100 text-orange-800 border border-orange-300">{job.type}</span>
          <span className="text-[10px] text-gray-500">Unit {job.unit}</span>
        </div>
      </div>
      <div className="px-4 py-3 space-y-3">
        <div>
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Task Checklist</div>
          <div className="space-y-1.5">
            {job.tasks.map(t => (
              <label key={t} className="flex items-start gap-2 cursor-pointer">
                <span className="w-3.5 h-3.5 border-2 border-gray-400 rounded-sm flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-gray-700">{t}</span>
              </label>
            ))}
          </div>
        </div>
        {job.notes && (
          <div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Special Notes</div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-[11px] text-yellow-800">{job.notes}</div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Deadline</div>
            <div className="text-[11px] font-semibold text-gray-800">{job.deadline}</div>
          </div>
          <button className="px-3 py-1.5 text-[10px] font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700">Mark Complete</button>
        </div>
      </div>
    </div>
  );
}

function SwyftHistory() {
  const entries = [
    { date: 'Jun 18', type: 'Water Damage Mitigation', status: 'Completed', tech: 'Marcus R.' },
    { date: 'May 2', type: 'Carpet Cleaning', status: 'Completed', tech: 'Devon H.' },
    { date: 'Mar 15', type: 'Mold Inspection', status: 'Completed', tech: 'Marcus R.' },
  ];
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm text-xs font-sans max-w-md mx-auto">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <div>
          <div className="font-bold text-[12px] text-gray-800">Sunrise Commons — Unit 204B</div>
          <div className="text-[10px] text-gray-500">4521 E Thomas Rd, Phoenix</div>
        </div>
        <span className="text-[10px] font-semibold text-gray-400">{entries.length} jobs</span>
      </div>
      <div className="divide-y divide-gray-100">
        {entries.map((e, i) => (
          <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-gray-50">
            <div>
              <div className="text-[11px] font-semibold text-gray-800">{e.type}</div>
              <div className="text-[10px] text-gray-500">{e.tech} · {e.date}</div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-100 text-green-700 border border-green-200">{e.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────

type AppTab = 'acc' | 'swyft';
type ACCScreen = 'calendar' | 'detail' | 'print';
type SwyftScreen = 'schedule' | 'detail' | 'history';

export default function AppShowcase() {
  const [activeApp, setActiveApp] = useState<AppTab>('acc');
  const [accScreen, setAccScreen] = useState<ACCScreen>('calendar');
  const [accJob, setAccJob] = useState<typeof ACC_JOBS[0] | null>(null);
  const [swyftScreen, setSwyftScreen] = useState<SwyftScreen>('schedule');
  const [swyftJob, setSwyftJob] = useState<typeof SWYFT_JOBS[0] | null>(null);

  const accScreens: { key: ACCScreen; label: string }[] = [
    { key: 'calendar', label: 'Calendar' },
    { key: 'detail', label: 'Job Detail' },
    { key: 'print', label: 'Print View' },
  ];

  const swyftScreens: { key: SwyftScreen; label: string }[] = [
    { key: 'schedule', label: 'Daily Schedule' },
    { key: 'detail', label: 'Job Detail' },
    { key: 'history', label: 'Property History' },
  ];

  const handleAccJob = (job: typeof ACC_JOBS[0]) => {
    setAccJob(job);
    setAccScreen('detail');
  };

  const handleSwyftJob = (job: typeof SWYFT_JOBS[0]) => {
    setSwyftJob(job);
    setSwyftScreen('detail');
  };

  return (
    <section id="demo" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-base font-semibold tracking-widest uppercase">
                Live Preview
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              See it in action.
            </h2>
            <p className="text-white/70 text-xl max-w-2xl">
              Click through real screens from software we&apos;ve built. This is what your team would actually use.
            </p>
          </div>
        </FadeIn>

        {/* App tabs */}
        <FadeIn delay={80}>
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveApp('acc')}
              className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                activeApp === 'acc'
                  ? 'bg-[#f59e0b] text-black'
                  : 'bg-[#111111] text-white/50 border border-white/[0.08] hover:text-white'
              }`}
            >
              MAX
            </button>
            <button
              onClick={() => setActiveApp('swyft')}
              className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                activeApp === 'swyft'
                  ? 'bg-[#f59e0b] text-black'
                  : 'bg-[#111111] text-white/50 border border-white/[0.08] hover:text-white'
              }`}
            >
              Light
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden">

            {/* Screen nav */}
            <div className="flex items-center gap-0 border-b border-white/[0.06] px-4 pt-3">
              {(activeApp === 'acc' ? accScreens : swyftScreens).map(({ key, label }) => {
                const isActive = activeApp === 'acc' ? accScreen === key : swyftScreen === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      if (activeApp === 'acc') setAccScreen(key as ACCScreen);
                      else setSwyftScreen(key as SwyftScreen);
                    }}
                    className={`px-4 py-2 text-sm font-semibold rounded-t-lg transition-all border-b-2 ${
                      isActive
                        ? 'text-[#f59e0b] border-[#f59e0b] bg-white/[0.04]'
                        : 'text-white/50 border-transparent hover:text-white/80'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}

              {/* Click hint */}
              <span className="ml-auto text-xs text-white/40 pr-1 pb-2 hidden sm:inline">
                Click job cards to explore →
              </span>
            </div>

            {/* Screen content */}
            <div className="p-4 sm:p-6">
              {activeApp === 'acc' && (
                <>
                  {accScreen === 'calendar' && <ACCCalendar onSelectJob={handleAccJob} />}
                  {accScreen === 'detail' && accJob && (
                    <ACCJobDetail job={accJob} onBack={() => setAccScreen('calendar')} />
                  )}
                  {accScreen === 'detail' && !accJob && (
                    <div className="text-center py-12 text-white/50 text-base">
                      Click a job on the Calendar tab to view its details.
                    </div>
                  )}
                  {accScreen === 'print' && <ACCPrintPreview />}
                </>
              )}
              {activeApp === 'swyft' && (
                <>
                  {swyftScreen === 'schedule' && <SwyftSchedule onSelectJob={handleSwyftJob} />}
                  {swyftScreen === 'detail' && swyftJob && (
                    <SwyftJobDetail job={swyftJob} onBack={() => setSwyftScreen('schedule')} />
                  )}
                  {swyftScreen === 'detail' && !swyftJob && (
                    <div className="text-center py-12 text-white/50 text-base">
                      Click a job on the Daily Schedule tab to view its details.
                    </div>
                  )}
                  {swyftScreen === 'history' && <SwyftHistory />}
                </>
              )}
            </div>

          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={200}>
          <p className="text-center text-white/55 text-lg mt-8">
            Want something like this for your business?{' '}
            <a href="#contact" className="text-[#f59e0b] hover:text-[#fbbf24] font-semibold">
              Let&apos;s talk →
            </a>
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
