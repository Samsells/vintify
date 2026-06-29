'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, GitBranch, Sparkles, Bug, Shield, Zap, Wrench, Palette, Rocket } from 'lucide-react';

const TAG_CONFIG = {
  'New Feature': { icon: Sparkles, color: 'bg-brand-500/10 text-brand-700 border-brand-200', dot: 'bg-brand-500' },
  'Improvement': { icon: Zap, color: 'bg-amber-500/10 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  'Bug Fix': { icon: Bug, color: 'bg-accent-500/10 text-accent-700 border-accent-200', dot: 'bg-accent-500' },
  'Design': { icon: Palette, color: 'bg-purple-500/10 text-purple-700 border-purple-200', dot: 'bg-purple-500' },
  'Security': { icon: Shield, color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
  'Performance': { icon: Rocket, color: 'bg-blue-500/10 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
  'Maintenance': { icon: Wrench, color: 'bg-ink-500/10 text-ink-700 border-ink-200', dot: 'bg-ink-500' },
};

const ALL_TAGS = Object.keys(TAG_CONFIG);

export default function ChangelogTimeline({ versions }) {
  const [activeTag, setActiveTag] = useState(null);

  const filteredVersions = activeTag
    ? versions.filter(v => v.tags.includes(activeTag))
    : versions;

  function countByTag(tag) {
    return versions.filter(v => v.tags.includes(tag)).length;
  }

  return (
    <>
      {/* ── Filter bar — sticky ── */}
      <section className="sticky top-12 z-20 border-b border-ink-200 bg-white/90 py-3 backdrop-blur-md sm:top-16 lg:top-20">
        <div className="container-max container-px">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="mr-1 hidden font-mono text-xs uppercase tracking-wider text-ink-400 sm:inline">Filter updates:</span>
            <button
              onClick={() => setActiveTag(null)}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition-all hover:scale-105 ${
                activeTag === null
                  ? 'border-ink-900 bg-ink-900 text-white'
                  : 'border-ink-200 bg-white text-ink-600'
              }`}
            >
              All
              <span className={`rounded-full px-1.5 text-[10px] font-bold ${activeTag === null ? 'bg-white/20 text-white' : 'bg-ink-100 text-ink-500'}`}>
                {versions.length}
              </span>
            </button>
            {ALL_TAGS.map((tag) => {
              const config = TAG_CONFIG[tag];
              const Icon = config.icon;
              const count = countByTag(tag);
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(isActive ? null : tag)}
                  className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition-all hover:scale-105 ${
                    isActive
                      ? `${config.color} ring-2 ring-offset-1 ring-brand-300`
                      : config.color
                  }`}
                >
                  <Icon size={12} />
                  {tag}
                  <span className="rounded-full bg-white/70 px-1.5 text-[10px] font-bold">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Latest updates heading ── */}
      <section className="bg-ink-50 pt-12 sm:pt-16 lg:pt-20">
        <div className="container-max container-px">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Latest updates</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              {activeTag ? `Filtered: ${activeTag}` : 'Every release in plain English.'}
            </h2>
            <p className="mt-3 text-sm text-ink-500 sm:text-base">
              {activeTag
                ? `Showing ${filteredVersions.length} ${filteredVersions.length === 1 ? 'version' : 'versions'} tagged with ${activeTag}.`
                : 'Every release is written in plain English so you know exactly what changed and why it matters.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Version timeline ── */}
      <section className="bg-ink-50 pb-12 sm:pb-20 lg:pb-28">
        <div className="container-max container-px">
          <div className="mx-auto max-w-3xl pt-8 sm:pt-12">
            {filteredVersions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-ink-200 bg-white p-12 text-center">
                <p className="text-sm text-ink-400">No versions tagged with {activeTag}.</p>
              </div>
            ) : (
              filteredVersions.map((v, idx) => (
                <div key={v.version} className="relative">
                  {/* Timeline gradient line */}
                  {idx < filteredVersions.length - 1 && (
                    <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-gradient-to-b from-brand-300 via-ink-200 to-transparent sm:left-7" />
                  )}

                  <div className="relative flex gap-4 pb-10 sm:gap-6 sm:pb-14">
                    {/* Version dot */}
                    <div className="relative z-10 flex shrink-0 flex-col items-center">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-2xl border-2 shadow-sm transition-all sm:h-14 sm:w-14 ${v.tag === 'Latest' ? 'border-brand-500 bg-brand-500 shadow-brand-500/30' : 'border-ink-200 bg-white'}`}>
                        <GitBranch size={16} className={v.tag === 'Latest' ? 'text-white' : 'text-ink-400'} />
                      </div>
                      {v.tag === 'Latest' && (
                        <span className="mt-2 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                          LATEST
                        </span>
                      )}
                    </div>

                    {/* Version card */}
                    <div className="flex-1">
                      <div className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-lg ${v.tag === 'Latest' ? 'border-brand-200 ring-1 ring-brand-500/10' : 'border-ink-200'}`}>
                        {/* Card header */}
                        <div className="border-b border-ink-100 bg-gradient-to-r from-ink-50 to-white p-5 sm:p-7">
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                              v{v.version}
                            </h2>
                            <span className="font-mono text-xs text-ink-400 sm:text-sm">{v.date}</span>
                          </div>
                          <p className="mt-1.5 text-sm font-semibold text-ink-700 sm:text-base">{v.title}</p>

                          {/* Tag pills */}
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            {v.tags.map(tag => {
                              const config = TAG_CONFIG[tag];
                              const Icon = config.icon;
                              return (
                                <span
                                  key={tag}
                                  className={`flex items-center gap-1 rounded-lg border px-2 py-0.5 text-[10px] font-semibold ${config.color}`}
                                >
                                  <Icon size={10} />
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* What changed + Why it matters */}
                        <div className="grid divide-y divide-ink-50 md:grid-cols-2 md:divide-y-0 md:divide-x md:divide-ink-50">
                          {/* What changed */}
                          <div className="p-5 sm:p-7">
                            <div className="mb-4 flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-500/10">
                                <Wrench size={13} className="text-brand-600" />
                              </div>
                              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-500">What changed</span>
                            </div>
                            <ul className="space-y-3">
                              {v.whatChanged.map((change, ci) => (
                                <li key={ci} className="flex gap-3">
                                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                  <span className="text-sm text-ink-600 leading-relaxed">{change}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Why it matters */}
                          <div className="bg-brand-50/30 p-5 sm:p-7">
                            <div className="mb-4 flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-500/10">
                                <Sparkles size={13} className="text-brand-600" />
                              </div>
                              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-600">Why it matters</span>
                            </div>
                            <ul className="space-y-3">
                              {v.whyItMatters.map((matter, mi) => (
                                <li key={mi} className="flex gap-3">
                                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                                  <span className="text-sm text-ink-600 leading-relaxed">{matter}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CTA */}
          <div className="mt-4 text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-400">Want all these features?</p>
            <Link href="/pricing" className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/30 active:scale-95">
              Start your 7-day free trial
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
