import Link from 'next/link';
import { Check, X } from 'lucide-react';

export const metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Vinted resellers. Accounting software and growth bot plans from £9/month.',
};

const TIERS = [
  {
    name: 'Starter',
    description: 'For side-hustlers getting organised.',
    price: '£9',
    interval: '/month',
    features: [
      'Up to 100 live listings tracked',
      'Basic inventory & sales tracking',
      'Expense logging',
      'Standard analytics',
      'Chrome Extension sync',
    ],
    notIncluded: [
      'AI listing writer',
      'UK tax report exports',
      'Auto-lister',
    ],
    cta: 'Start Starter trial',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For serious resellers scaling up.',
    price: '£19',
    interval: '/month',
    features: [
      'Unlimited live listings',
      'Advanced inventory tracking',
      'HMRC-ready tax reports (CSV & PDF)',
      'AI listing writer (100/mo)',
      'Advanced analytics & goal tracking',
      'Chrome Extension sync',
    ],
    notIncluded: [
      'Bulk auto-lister',
    ],
    cta: 'Start Pro trial',
    popular: true,
  },
  {
    name: 'Business',
    description: 'For full-time Vinted operations.',
    price: '£39',
    interval: '/month',
    features: [
      'Everything in Pro',
      'Unlimited AI listing writer',
      'Bulk auto-lister to Vinted',
      'Smart Matches engine',
      'Priority support',
      'Multiple Vinted accounts',
    ],
    notIncluded: [],
    cta: 'Start Business trial',
    popular: false,
  }
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24 bg-white">
      <section className="border-b border-ink-100 py-20 lg:py-28">
        <div className="container-max container-px">
          <p className="section-label mb-6">Pricing</p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Simple pricing. No surprises.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-600">
            Start with a 14-day free trial on any plan. Downgrade or cancel anytime.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-max container-px">
          <div className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <div 
                key={tier.name} 
                className={`relative flex flex-col rounded-xl border p-8 ${
                  tier.popular 
                    ? 'border-ink-900 bg-white' 
                    : 'border-ink-200 bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-8 rounded-full bg-ink-900 px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-ink-900">{tier.name}</h3>
                  <p className="mt-2 text-sm text-ink-500 min-h-[40px]">{tier.description}</p>
                </div>
                <div className="mb-8 flex items-baseline text-ink-900">
                  <span className="font-display text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-base font-medium text-ink-400">{tier.interval}</span>
                </div>
                
                <Link 
                  href="/contact" 
                  className={`mb-8 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                    tier.popular 
                      ? 'bg-ink-900 text-white hover:bg-ink-800' 
                      : 'border border-ink-200 text-ink-900 hover:bg-ink-50'
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-400 mb-4">Included</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-ink-900" />
                        <span className="text-sm text-ink-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.notIncluded.length > 0 && (
                    <ul className="mt-4 space-y-3 opacity-40">
                      {tier.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <X size={16} className="mt-0.5 shrink-0 text-ink-400" />
                          <span className="text-sm text-ink-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center">
            <p className="font-mono text-xs text-ink-400">
              All plans include the Chrome Extension. Prices exclude VAT.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
