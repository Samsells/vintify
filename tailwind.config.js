/** @type {import('tailwindcss').Config} */

// ─────────────────────────────────────────────────────────────
// DARK PREMIUM THEME
//
// The site was originally built light, with `ink` as a
// light-to-dark neutral scale and `white` as the card surface.
// Rather than touching hundreds of class names, the theme is
// flipped here at the token layer:
//
//   ink-50   → page background (deep navy-black)
//   ink-100  → raised section background
//   ink-200  → hairline borders
//   ink-400+ → text (muted → bright)
//   ink-900  → heading text (near-white)
//   white    → card surface (dark navy panel)
//
// `text-white` on colored buttons therefore renders as dark
// navy on bright accents — an intentional part of the look.
// ─────────────────────────────────────────────────────────────
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Card / panel surface (replaces light-mode white)
        white: '#101a30',
        brand: {
          // Light end inverted for dark backgrounds: tints are now deep
          // navy-blues, text shades (600+) are now bright and readable.
          50: '#172554',
          100: '#1e3a8a',
          200: '#1e40af',
          300: '#1d4ed8',
          400: '#2563eb',
          500: '#3b82f6',
          600: '#6094fa',
          700: '#93bbfd',
          800: '#bfd7fe',
          900: '#dbe8fe',
          950: '#eff6ff',
        },
        accent: {
          // Red scale, same inversion: tint backgrounds dark, text bright.
          50: '#2a0d0d',
          100: '#450a0a',
          200: '#7f1d1d',
          300: '#b91c1c',
          400: '#ef4444',
          500: '#ef4444',
          600: '#f87171',
          700: '#fca5a5',
          800: '#fecaca',
          900: '#fee2e2',
          950: '#fef2f2',
        },
        ink: {
          // Navy-tinted neutral scale, dark → light.
          50: '#0a0f1c',
          100: '#0d1424',
          200: '#1b2540',
          300: '#2b3757',
          400: '#697390',
          500: '#98a1ba',
          600: '#b6bdd1',
          700: '#d0d5e4',
          800: '#e6e9f2',
          900: '#f3f5fb',
          950: '#fafbfe',
        },
        // Semantic accents: keep the saturated mid steps, darken the tint
        // steps and brighten the text steps so existing classes read
        // correctly on navy.
        emerald: {
          50: '#07271c',
          100: '#0a3325',
          200: '#115e42',
          600: '#34d399',
          700: '#6ee7b7',
        },
        amber: {
          50: '#291d06',
          100: '#332508',
          200: '#4a3510',
          600: '#fbbf24',
          700: '#fcd34d',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
