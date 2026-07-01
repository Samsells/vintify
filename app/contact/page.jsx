'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, LifeBuoy, ShieldCheck, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setError('Connection failed. Please try again, or email hello@vintify.co.uk.');
      setStatus('error');
    }
  };

  return (
    <div className="flex min-h-dvh flex-col pt-12 sm:pt-16 lg:pt-20">
      <section className="border-b border-ink-100 py-12 sm:py-20 lg:py-28">
        <div className="container-max container-px">
          <p className="section-label mb-6">Contact</p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Get in touch.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-600">
            Questions about Vintify? Want to see a demo? Need help getting set up? We usually reply within a few hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max container-px">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">Send us a message</h2>
              <p className="mt-2 text-ink-500">Fill out the form and we&apos;ll get back to you quickly.</p>

              {status === 'success' ? (
                <div className="mt-8 rounded-xl border border-ink-200 bg-ink-50 p-8 text-center">
                  <p className="font-display text-lg font-semibold text-ink-900">Message sent</p>
                  <p className="mt-2 text-sm text-ink-500">We&apos;ll get back to you within a few hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink-700">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      maxLength={120}
                      value={form.name}
                      onChange={update('name')}
                      className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink-700">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={update('email')}
                      className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink-700">Message</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      maxLength={5000}
                      value={form.message}
                      onChange={update('message')}
                      className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500"
                      placeholder="How can we help?"
                    />
                  </div>
                  {/* Honeypot — hidden from real users, autofilled by bots */}
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={update('company')}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  {status === 'error' && (
                    <p className="rounded-lg border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-700" role="alert">
                      {error}
                    </p>
                  )}
                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      'Send message'
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">Other ways to reach us</h2>
              <p className="mt-2 text-ink-500">Pick whatever works best for you.</p>

              <div className="mt-8 space-y-4">
                <a href="mailto:hello@vintify.co.uk" className="flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">Email</p>
                    <p className="text-sm text-ink-500">hello@vintify.co.uk</p>
                  </div>
                </a>

                <Link href="/faq" className="flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                    <LifeBuoy size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">FAQ</p>
                    <p className="text-sm text-ink-500">Most setup and billing questions are answered there</p>
                  </div>
                </Link>

                <Link href="/security" className="flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">Security</p>
                    <p className="text-sm text-ink-500">How we handle your account and data</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
