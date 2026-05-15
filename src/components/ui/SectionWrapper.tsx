import { forwardRef } from 'react'
import { Box, type BoxProps } from '@mui/material'
import clsx from 'clsx'

// ─────────────────────────────────────────────────────────────
//  SectionWrapper
//  Every section uses this for consistent vertical padding,
//  max-width centering, and optional alternate background.
//
//  Props:
//    id          — anchor id for scroll-spy
//    alt         — if true, uses bg-2 (slightly different bg)
//    noPaddingTop — skip top padding (e.g. first section after hero)
// ─────────────────────────────────────────────────────────────

interface SectionWrapperProps extends BoxProps {
  id?: string
  alt?: boolean
  noPaddingTop?: boolean
  fullWidth?: boolean
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, alt, noPaddingTop, fullWidth, children, className, sx, ...rest }, ref) => {
    return (
      <Box
        component="section"
        id={id}
        ref={ref}
        className={clsx(className)}
        sx={{
          py:  noPaddingTop ? '0 7rem' : '7rem 0',
          pt:  noPaddingTop ? 0 : '7rem',
          pb:  '7rem',
          backgroundColor: alt
            ? 'var(--color-bg-2)'
            : 'var(--color-bg)',
          position: 'relative',
          overflow: 'hidden',
          ...sx,
        }}
        {...rest}
      >
        {/* Inner container — max-width + horizontal padding */}
        <Box
          sx={{
            maxWidth:  fullWidth ? '100%' : 'var(--container-max-w)',
            mx:        'auto',
            px:        { xs: '1.25rem', sm: '1.5rem', lg: '2rem' },
          }}
        >
          {children}
        </Box>
      </Box>
    )
  },
)

SectionWrapper.displayName = 'SectionWrapper'
export default SectionWrapper