import { createTheme, alpha } from '@mui/material/styles'
import type { ThemeMode } from '@/types'
import { getPalette } from './palette'
import { typography } from './typography'

// ─────────────────────────────────────────────────────────────
//  createAppTheme(mode)
//  Call this whenever the user toggles dark/light mode.
//  Returns a full MUI Theme object.
// ─────────────────────────────────────────────────────────────

export const createAppTheme = (mode: ThemeMode) => {
  const palette = getPalette(mode)
  const isLight = mode === 'light'

  return createTheme({
    palette,
    typography,

    shape: {
      borderRadius: 10,
    },

    spacing: 8, // 1 unit = 8px

    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },

    shadows: [
      'none',
      isLight ? '0 1px 3px rgba(0,0,0,0.08)'  : '0 1px 3px rgba(0,0,0,0.30)',
      isLight ? '0 2px 6px rgba(0,0,0,0.08)'  : '0 2px 6px rgba(0,0,0,0.35)',
      isLight ? '0 4px 12px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.40)',
      isLight ? '0 6px 20px rgba(0,0,0,0.08)' : '0 6px 20px rgba(0,0,0,0.45)',
      isLight ? '0 8px 28px rgba(0,0,0,0.10)' : '0 8px 28px rgba(0,0,0,0.50)',
      isLight ? '0 12px 40px rgba(0,0,0,0.10)': '0 12px 40px rgba(0,0,0,0.55)',
      ...Array(18).fill('none') as string[],
      isLight ? '0 24px 60px rgba(0,0,0,0.14)': '0 24px 60px rgba(0,0,0,0.60)',
    ] as import('@mui/material').Shadows,

    components: {
      // ── CssBaseline ────────────────────────────────────────
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: 'none',
            scrollBehavior: 'smooth',
          },
        },
      },

      // ── Button ─────────────────────────────────────────────
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '10px 22px',
            fontWeight: 600,
            textTransform: 'none',
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(99,102,241,0.30)',
            },
          },
          outlined: {
            borderColor: isLight
              ? 'rgba(0,0,0,0.15)'
              : 'rgba(255,255,255,0.12)',
            '&:hover': {
              backgroundColor: isLight
                ? alpha('#6366f1', 0.04)
                : alpha('#6366f1', 0.08),
              borderColor: '#6366f1',
            },
          },
          sizeLarge: {
            padding: '12px 28px',
            fontSize: '1rem',
          },
          sizeSmall: {
            padding: '6px 14px',
            fontSize: '0.8125rem',
          },
        },
      },

      // ── Card ───────────────────────────────────────────────
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.06)'}`,
            backgroundImage: 'none',
            transition: 'box-shadow 250ms ease, transform 250ms ease, border-color 250ms ease',
            '&:hover': {
              boxShadow: isLight
                ? '0 8px 32px rgba(0,0,0,0.12)'
                : '0 8px 32px rgba(0,0,0,0.50)',
            },
          },
        },
      },

      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 24,
            '&:last-child': { paddingBottom: 24 },
          },
        },
      },

      // ── Chip ───────────────────────────────────────────────
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            fontSize: '0.75rem',
            borderRadius: 6,
            letterSpacing: '0.02em',
          },
          outlined: {
            borderColor: isLight
              ? 'rgba(0,0,0,0.12)'
              : 'rgba(255,255,255,0.10)',
          },
        },
      },

      // ── TextField ─────────────────────────────────────────
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          fullWidth: true,
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6366f1',
            },
          },
        },
      },

      // ── Tooltip ────────────────────────────────────────────
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 6,
            fontSize: '0.75rem',
            fontWeight: 500,
            backgroundColor: isLight ? '#1e1e2a' : '#f0f0f8',
            color: isLight ? '#f0f0f8' : '#1e1e2a',
          },
        },
      },

      // ── Divider ────────────────────────────────────────────
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: isLight
              ? 'rgba(0,0,0,0.07)'
              : 'rgba(255,255,255,0.07)',
          },
        },
      },

      // ── Link ───────────────────────────────────────────────
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },

      // ── Paper ──────────────────────────────────────────────
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: `1px solid ${isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.06)'}`,
          },
        },
      },
    },
  })
}