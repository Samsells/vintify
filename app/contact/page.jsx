'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24">
      <section className="border-b border-ink-100 py-20 lg:py-28">
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
              <p className="mt-2 text-ink-500">Fill out the form and we'll get back to you quickly.</p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-ink-200 bg-ink-50 p-8 text-center">
                  <p className="font-display text-lg font-semibold text-ink-900">Message sent</p>
                  <p className="mt-2 text-sm text-ink-500">We'll get back to you within a few hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-ink-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-ink-900"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-ink-900"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send message
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">Other ways to reach us</h2>
              <p className="mt-2 text-ink-500">Pick whatever works best for you.</p>

              <div className="mt-8 space-y-4">
                <a href="mailto:hello@vintify.co.uk" className="flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-ink-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">Email</p>
                    <p className="text-sm text-ink-500">hello@vintify.co.uk</p>
                  </div>
                </a>

                <a href="https://discord.gg/vintify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-ink-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">Discord</p>
                    <p className="text-sm text-ink-500">Join our community server</p>
                  </div>
                </a>

                <a href="https://twitter.com/vintify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-ink-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                    <Twitter size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">Twitter</p>
                    <p className="text-sm text-ink-500">@vintify</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
