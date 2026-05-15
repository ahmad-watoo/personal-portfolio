import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/variants'

// ─────────────────────────────────────────────────────────────
//  SectionHeading
//  Used at the top of every section for visual consistency.
//
//  Renders:
//    ——  LABEL (overline, e.g. "About Me")
//    Large bold Title
//    Optional muted Subtitle paragraph
// ─────────────────────────────────────────────────────────────

interface SectionHeadingProps {
  label: string       // small overline label
  title: string       // large heading
  subtitle?: string   // optional paragraph below title
  centered?: boolean  // center-align everything
  inView: boolean     // from useInView hook — triggers animation
}

const MotionBox = motion(Box)

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  inView,
}: SectionHeadingProps) {
  return (
    <MotionBox
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      sx={{
        mb:        { xs: '3rem', md: '4rem' },
        textAlign: centered ? 'center' : 'left',
        maxWidth:  centered ? '640px' : '560px',
        mx:        centered ? 'auto' : 0,
      }}
    >
      {/* ── Overline label ── */}
      <motion.div variants={fadeUp}>
        <Box
          sx={{
            display:    'inline-flex',
            alignItems: 'center',
            gap:        '0.6rem',
            mb:         '1rem',
          }}
        >
          {/* Decorative line */}
          <Box
            sx={{
              width:           20,
              height:          1.5,
              backgroundColor: 'primary.main',
              borderRadius:    1,
              flexShrink:      0,
            }}
          />
          <Typography
            variant="overline"
            sx={{
              color:         'primary.main',
              fontWeight:    700,
              letterSpacing: '0.12em',
              fontSize:      '0.7rem',
            }}
          >
            {label}
          </Typography>
        </Box>
      </motion.div>

      {/* ── Main title ── */}
      <motion.div variants={fadeUp}>
        <Typography
          variant="h2"
          sx={{
            mb:         subtitle ? '1rem' : 0,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {/* ── Optional subtitle ── */}
      {subtitle && (
        <motion.div variants={fadeUp}>
          <Typography
            variant="subtitle1"
            sx={{
              color:     'text.secondary',
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </MotionBox>
  )
}