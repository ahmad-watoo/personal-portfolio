import { Box, type BoxProps } from '@mui/material'

// ─────────────────────────────────────────────────────────────
//  GradientText
//  Wraps any text in a primary → accent gradient.
//  Use inside a Typography component for headings.
//
//  Usage:
//    <Typography variant="h1">
//      Building <GradientText>digital things</GradientText> that matter.
//    </Typography>
// ─────────────────────────────────────────────────────────────

interface GradientTextProps extends BoxProps {
  from?: string   // start color (defaults to primary)
  to?: string     // end color (defaults to accent/secondary)
}

export default function GradientText({
  from = 'var(--color-primary)',
  to   = 'var(--color-accent)',
  children,
  sx,
  ...rest
}: GradientTextProps) {
  return (
    <Box
      component="span"
      sx={{
        background:              `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        WebkitBackgroundClip:    'text',
        WebkitTextFillColor:     'transparent',
        backgroundClip:          'text',
        display:                 'inline',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}