import Link from 'next/link';

// Shared shell for legal / policy pages. Content is passed as plain data so
// page files stay readable and apostrophes never fight JSX escaping.
//
// sections: [{ id, title, paragraphs: [string], list: [string] (optional) }]
export function LegalShell({ label, title, intro, lastUpdated, sections }) {
  return (
    <div className="flex min-h-dvh flex-col pt-12 sm:pt-16 lg:pt-20">
      <section className="border-b border-ink-100 py-12 sm:py-16">
        <div className="container-narrow container-px">
          <p className="section-label mb-6">{label}</p>
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">{intro}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-narrow container-px">
          {/* On-page nav for longer policies */}
          <nav aria-label="Sections" className="mb-10 rounded-2xl border border-ink-200 bg-white p-5 sm:p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-400">On this page</p>
            <ol className="grid gap-2 sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm font-medium text-brand-600 underline-offset-2 hover:underline">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                  {i + 1}. {s.title}
                </h2>
                {s.paragraphs?.map((p, pi) => (
                  <p key={pi} className="mt-3 max-w-[65ch] leading-relaxed text-ink-600">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-3 max-w-[65ch] list-disc space-y-2 pl-5 text-ink-600">
                    {s.list.map((item, li) => (
                      <li key={li} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-ink-200 bg-ink-100 p-6">
            <p className="text-sm text-ink-600">
              Questions about this policy? Email{' '}
              <a href="mailto:hello@vintify.co.uk" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                hello@vintify.co.uk
              </a>{' '}
              or use the{' '}
              <Link href="/contact" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
