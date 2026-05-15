import type { ThemeMode } from '@/types'

// ─────────────────────────────────────────────────────────────
//  MUI Palette — one file controls all MUI color tokens.
//  Change your brand color here, everything updates.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  primary: {
    50:   '#eef2ff',
    100:  '#e0e7ff',
    200:  '#c7d2fe',
    300:  '#a5b4fc',
    400:  '#818cf8',
    500:  '#6366f1',   // ← MAIN BRAND COLOR — change this
    600:  '#4f46e5',
    700:  '#4338ca',
    800:  '#3730a3',
    900:  '#312e81',
    main:         '#6366f1',
    light:        '#818cf8',
    dark:         '#4f46e5',
    contrastText: '#ffffff',
  },
  secondary: {
    main:         '#06b6d4',
    light:        '#22d3ee',
    dark:         '#0891b2',
    contrastText: '#ffffff',
  },
}

export const getPalette = (mode: ThemeMode) => ({
  mode,

  primary:   BRAND.primary,
  secondary: BRAND.secondary,

  background: mode === 'light'
    ? {
        default: '#ffffff',
        paper:   '#f8f8fc',
      }
    : {
        default: '#0f0f13',
        paper:   '#16161e',
      },

  text: mode === 'light'
    ? {
        primary:   '#0f0f13',
        secondary: '#6b7280',
        disabled:  '#9ca3af',
      }
    : {
        primary:   '#f0f0f8',
        secondary: '#9ca3af',
        disabled:  '#6b7280',
      },

  divider: mode === 'light'
    ? 'rgba(0,0,0,0.08)'
    : 'rgba(255,255,255,0.07)',

  action: {
    hoverOpacity:   0.06,
    selectedOpacity: 0.10,
    disabledOpacity: 0.38,
  },
})