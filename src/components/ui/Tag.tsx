import { Chip, type ChipProps } from '@mui/material'
import { alpha } from '@mui/material/styles'

// ─────────────────────────────────────────────────────────────
//  Tag
//  Small pill label used for tech tags, categories, etc.
//  Three variants:
//    primary  — indigo tinted  (default)
//    subtle   — neutral gray
//    accent   — cyan tinted
// ─────────────────────────────────────────────────────────────

type TagVariant = 'primary' | 'subtle' | 'accent'

interface TagProps extends Omit<ChipProps, 'variant' | 'color'> {
  variant?: TagVariant
}

export default function Tag({ variant = 'subtle', sx, ...rest }: TagProps) {
  const styles = {
    primary: {
      backgroundColor: (theme: { palette: { primary: { main: string } } }) =>
        alpha(theme.palette.primary.main, 0.1),
      color:            'primary.main',
      border:           (theme: { palette: { primary: { main: string } } }) =>
        `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    },
    subtle: {
      backgroundColor: 'var(--color-bg-3)',
      color:           'text.secondary',
      border:          '1px solid var(--color-border)',
    },
    accent: {
      backgroundColor: (theme: { palette: { secondary: { main: string } } }) =>
        alpha(theme.palette.secondary.main, 0.1),
      color:            'secondary.main',
      border:           (theme: { palette: { secondary: { main: string } } }) =>
        `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
    },
  }

  return (
    <Chip
      size="small"
      sx={{
        height:        '24px',
        fontSize:      '0.72rem',
        fontWeight:    600,
        letterSpacing: '0.03em',
        borderRadius:  '6px',
        ...styles[variant],
        ...sx,
      }}
      {...rest}
    />
  )
}