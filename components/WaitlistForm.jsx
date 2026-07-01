'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, MailCheck, Loader2, AlertCircle } from 'lucide-react';

export default function WaitlistForm({ className = '' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [pending, setPending] = useState(false); // true = "check your inbox" (double opt-in)
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setPending(Boolean(data.pending));
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    const Icon = pending ? MailCheck : CheckCircle2;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className={`flex flex-col items-center gap-3 ${className}`}
      >
        <div className={`flex h-14 w-14 items-center justify-center rounded-full ${pending ? 'bg-brand-500/10' : 'bg-emerald-500/10'}`}>
          <Icon size={28} className={pending ? 'text-brand-600' : 'text-emerald-500'} />
        </div>
        <p className="text-center text-lg font-semibold text-ink-900">{message}</p>
        {pending && (
          <p className="max-w-xs text-center text-sm text-ink-500">
            Didn&apos;t get it? Check your spam folder — the email comes from hello@getvintify.com.
          </p>
        )}
        <button
          onClick={() => { setStatus('idle'); setPending(false); }}
          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Add another email
        </button>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="you@email.com"
          required
          disabled={status === 'loading'}
          className="w-full flex-1 rounded-xl border border-ink-200 bg-white px-5 py-3.5 text-base text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 sm:px-8"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join founding waitlist
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-3 flex items-center gap-2 text-sm text-accent-600"
          >
            <AlertCircle size={16} />
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
