import type { Config } from 'tailwindcss'

const config: Config = {
  // Only scan src files — avoids conflicts with MUI class names
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  // Important: prefix Tailwind so it never collides with MUI
  // Use tw- prefix: className="tw-flex tw-gap-4"
  prefix: 'tw-',

  // Let MUI handle dark mode via its own ThemeProvider
  // We hook into it via a CSS class on <html>
  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    extend: {
      // Mirror your MUI palette here for use in Tailwind utilities
      colors: {
        primary: {
          DEFAULT: '#6366f1',  // indigo-500 — change to your brand color
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent: {
          DEFAULT: '#06b6d4',  // cyan-500
          light: '#22d3ee',
          dark: '#0891b2',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#0f0f13',
        },
        'surface-2': {
          DEFAULT: '#f8f8fc',
          dark: '#16161e',
        },
        'surface-3': {
          DEFAULT: '#f0f0f8',
          dark: '#1e1e2a',
        },
      },

      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter Variable', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '600' }],
      },

      spacing: {
        'section': '7rem',
        'section-sm': '5rem',
      },

      maxWidth: {
        'container': '1140px',
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },

      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config