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
    default: 'Vintify — Vinted Accounting Software & Growth Bot',
    template: '%s | Vintify',
  },
  description:
    'Vintify is the accounting and growth platform for Vinted resellers. Track profit margins, automate listings, generate HMRC-ready tax reports, and grow your Vinted business.',
  keywords: [
    'Vinted accounting software',
    'Vinted growth bot',
    'Vinted profit tracker',
    'Vinted tax calculator UK',
    'Vinted reseller tools',
    'Vinted listing automation',
    'Vintify',
  ],
  authors: [{ name: 'Vintify' }],
  creator: 'Vintify',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://vintify.co.uk',
    siteName: 'Vintify',
    title: 'Vintify — Vinted Accounting Software & Growth Bot',
    description:
      'Track profit margins, automate listings, generate HMRC-ready tax reports, and grow your Vinted business.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vintify — Vinted Accounting Software & Growth Bot',
    description:
      'Track profit margins, automate listings, generate HMRC-ready tax reports, and grow your Vinted business.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#f9f9ff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
