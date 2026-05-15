// ─────────────────────────────────────────────────────────────
//  MUI Typography — matches Tailwind fontSize scale.
// ─────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: '"Inter", system-ui, -apple-system, sans-serif',

  fontWeightLight:   300,
  fontWeightRegular: 400,
  fontWeightMedium:  500,
  fontWeightBold:    700,

  h1: {
    fontSize:      'clamp(3rem, 6vw, 4.5rem)',
    fontWeight:    700,
    lineHeight:    1.1,
    letterSpacing: '-0.04em',
  },
  h2: {
    fontSize:      'clamp(2.25rem, 4vw, 3rem)',
    fontWeight:    700,
    lineHeight:    1.15,
    letterSpacing: '-0.03em',
  },
  h3: {
    fontSize:      'clamp(1.5rem, 2.5vw, 2rem)',
    fontWeight:    600,
    lineHeight:    1.3,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontSize:      '1.5rem',
    fontWeight:    600,
    lineHeight:    1.4,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontSize:      '1.25rem',
    fontWeight:    600,
    lineHeight:    1.5,
  },
  h6: {
    fontSize:      '1.125rem',
    fontWeight:    600,
    lineHeight:    1.5,
  },
  body1: {
    fontSize:   '1rem',
    lineHeight: 1.75,
    fontWeight: 400,
  },
  body2: {
    fontSize:   '0.875rem',
    lineHeight: 1.65,
    fontWeight: 400,
  },
  subtitle1: {
    fontSize:   '1.125rem',
    lineHeight: 1.65,
    fontWeight: 400,
  },
  subtitle2: {
    fontSize:   '0.9rem',
    lineHeight: 1.6,
    fontWeight: 500,
  },
  caption: {
    fontSize:      '0.75rem',
    lineHeight:    1.5,
    letterSpacing: '0.04em',
  },
  overline: {
    fontSize:      '0.7rem',
    fontWeight:    700,
    lineHeight:    1.5,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
  },
  button: {
    fontWeight:    600,
    letterSpacing: '0.02em',
    textTransform: 'none' as const,   // disable ALL-CAPS on MUI buttons
  },
}