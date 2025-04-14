/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1a1a1a',      // Changed from navy to dark gray
          light: '#2dd4bf',     // Changed from blue to teal
          lightest: '#5eead4',   // Changed from light blue to light teal
        },
        secondary: {
          teal: '#2dd4bf',      // Bright teal for accents in dark mode
          purple: '#a855f7',     // Modern purple for special highlights
        },
        accent: {
          light: '#f0fdfa',     // Very light teal for subtle highlights
          dark: '#0d9488',      // Rich teal for dark mode accents
        },
        dark: {
          bg: '#0f172a',        // Main dark background
          card: '#1e293b',      // Card/section background
          hover: '#334155',     // Hover state background
          border: '#475569',    // Border color in dark mode
          text: {
            primary: '#f1f5f9',  // Primary text in dark mode
            secondary: '#cbd5e1', // Secondary text in dark mode
            muted: '#94a3b8',    // Muted text in dark mode
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-inter)', ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.light'),
              '&:hover': {
                color: theme('colors.primary.navy'),
              },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.900'),
              'scroll-margin-top': defaultTheme.spacing[32],
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.secondary.teal'),
              '&:hover': {
                color: theme('colors.accent.light'),
              },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
}
