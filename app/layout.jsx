import './globals.css';
import { Hanken_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  metadataBase: new URL('https://vintify.co.uk'),
  title: {
    default: 'Vintify — Vinted Accounting Software & Growth Bot for Resellers',
    template: '%s | Vintify',
  },
  description:
    'Vintify is the all-in-one platform for Vinted resellers. Track true profit per sale, automate listings with AI, drop prices automatically, and generate HMRC-ready tax reports — 55+ features, one subscription.',
  keywords: [
    'Vinted accounting software',
    'Vinted growth bot',
    'Vinted profit tracker',
    'Vinted tax calculator UK',
    'Vinted reseller tools',
    'Vinted listing automation',
    'Vinted price drop bot',
    'Vinted auto repricer',
    'Vinted AI listing writer',
    'Vinted seller dashboard',
    'HMRC ready tax reports',
    'Vinted reseller spreadsheet',
    'Vintify',
  ],
  authors: [{ name: 'Vintify' }],
  creator: 'Vintify',
  publisher: 'Vintify',
  category: 'Business Software',
  icons: {
    icon: '/logo/app-icon.png',
    apple: '/logo/app-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://vintify.co.uk',
    siteName: 'Vintify',
    title: 'Vintify — Vinted Accounting Software & Growth Bot for Resellers',
    description:
      'Track true profit per sale, automate listings with AI, drop prices automatically, and generate HMRC-ready tax reports — 55+ features, one subscription.',
    // Share image comes from app/opengraph-image.jsx (generated at request
    // time) — do not point at static files that may not exist.
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vintify — Vinted Accounting Software & Growth Bot for Resellers',
    description:
      'Track true profit per sale, automate listings with AI, drop prices automatically, and generate HMRC-ready tax reports — 55+ features, one subscription.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://vintify.co.uk',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vintify',
  url: 'https://vintify.co.uk',
  logo: 'https://vintify.co.uk/logo/logo-full.png',
  description: 'All-in-one platform for Vinted resellers — accounting, growth automation, sourcing, and analytics.',
  sameAs: [],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Vintify',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://vintify.co.uk',
  description: 'All-in-one platform for Vinted resellers. Track profit, automate listings, generate HMRC-ready tax reports, and grow your Vinted business.',
  offers: {
    '@type': 'Offer',
    price: '25',
    priceCurrency: 'GBP',
    description: 'Monthly subscription — all features included',
  },
};

export const viewport = {
  // Deep navy to match the dark theme's page background.
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
