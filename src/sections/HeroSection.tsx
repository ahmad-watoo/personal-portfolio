import { useRef } from 'react'
import { Box, Typography, Button, Chip } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useInView } from 'framer-motion'
import { Download, ArrowDown, MapPin, Mail } from 'lucide-react'
import { personalInfo, heroStats } from '@/data/personal'
import { GradientText, AnimatedText } from '@/components/ui'
import { staggerContainer, fadeUp,  fadeRight, scaleUp } from '@/animations/variants'

const MotionBox = motion(Box)

// Tech stack chips shown on the hero card
const STACK_TAGS = ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redux', 'Tailwind']

export default function HeroSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      id="home"
      ref={ref}
      component="section"
      sx={{
        minHeight:      '100vh',
        display:        'flex',
        alignItems:     'center',
        position:       'relative',
        overflow:       'hidden',
        backgroundColor:'var(--color-bg)',
      }}
    >
      {/* ── Background glow blobs ──────────────────────────── */}
      <Box
        aria-hidden
        sx={{
          position:   'absolute',
          inset:      0,
          pointerEvents: 'none',
          overflow:   'hidden',
          zIndex:     0,
        }}
      >
        {/* Primary glow — top right */}
        <Box sx={{
          position:        'absolute',
          top:             '-10%',
          right:           '-5%',
          width:           '55%',
          height:          '70%',
          borderRadius:    '50%',
          background:      'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter:          'blur(40px)',
        }} />
        {/* Accent glow — bottom left */}
        <Box sx={{
          position:        'absolute',
          bottom:          '5%',
          left:            '-10%',
          width:           '45%',
          height:          '50%',
          borderRadius:    '50%',
          background:      'radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)',
          filter:          'blur(50px)',
        }} />
        {/* Grid pattern */}
        <Box sx={{
          position:   'absolute',
          inset:      0,
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity:        0.4,
          maskImage:      'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />
      </Box>

      {/* ── Main content ──────────────────────────────────── */}
      <Box
        sx={{
          maxWidth: 'var(--container-max-w)',
          mx:       'auto',
          px:       { xs: '1.25rem', sm: '1.5rem', lg: '2rem' },
          width:    '100%',
          pt:       { xs: '2rem', md: '0' },
          zIndex:   1,
        }}
      >
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap:                 { xs: '3rem', lg: '4rem' },
            alignItems:          'center',
            minHeight:           { lg: '100vh' },
            py:                  { xs: '5rem', lg: '0' },
          }}
        >
          {/* ── Left: Text content ──────────────────────── */}
          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp}>
              <Box sx={{ mb: '1.5rem' }}>
                <Chip
                  label="Available for new opportunities"
                  size="small"
                  sx={{
                    backgroundColor: alpha('#22c55e', 0.1),
                    color:           '#22c55e',
                    border:          `1px solid ${alpha('#22c55e', 0.25)}`,
                    fontWeight:      600,
                    fontSize:        '0.75rem',
                    letterSpacing:   '0.02em',
                    height:          28,
                    '& .MuiChip-label': { px: '0.75rem' },
                    '&::before': {
                      content:         '""',
                      display:         'inline-block',
                      width:           7,
                      height:          7,
                      borderRadius:    '50%',
                      backgroundColor: '#22c55e',
                      mr:              '0.5rem',
                      animation:       'pulse 2s infinite',
                    },
                  }}
                />
              </Box>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={fadeUp}>
              <Typography
                component="h1"
                sx={{
                  fontSize:      { xs: '2.6rem', sm: '3.25rem', md: '3.75rem', lg: '4rem' },
                  fontWeight:    800,
                  lineHeight:    1.08,
                  letterSpacing: '-0.04em',
                  mb:            '0.5rem',
                  color:         'text.primary',
                }}
              >
                Hi, I'm{' '}
                <GradientText>Ahmad</GradientText>
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Box sx={{ mb: '1.5rem', minHeight: { xs: 'auto', md: '3.5rem' } }}>
                <AnimatedText
                  text={personalInfo.title}
                  inView={inView}
                  delay={3}
                  el="h2"
                  className="hero-subtitle-animated"
                />
              </Box>
            </motion.div>

            {/* Subtext */}
            <motion.div variants={fadeUp}>
              <Typography
                variant="subtitle1"
                sx={{
                  color:     'text.secondary',
                  mb:        '2rem',
                  maxWidth:  '480px',
                  lineHeight: 1.8,
                  fontSize:  { xs: '0.95rem', md: '1.05rem' },
                }}
              >
                I build scalable web applications with the MERN stack — from pixel-perfect
                UIs to robust backends — and I care about every layer of the stack.
              </Typography>
            </motion.div>

            {/* Location + email */}
            <motion.div variants={fadeUp}>
              <Box sx={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', mb: '2.5rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'text.secondary' }}>
                  <MapPin size={14} />
                  <Typography variant="body2">{personalInfo.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'text.secondary' }}>
                  <Mail size={14} />
                  <Typography variant="body2">{personalInfo.email}</Typography>
                </Box>
              </Box>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeUp}>
              <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', mb: '3.5rem' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleScrollDown}
                  sx={{
                    px:           '1.75rem',
                    fontWeight:   700,
                    borderRadius: '10px',
                    boxShadow:    'none',
                    background:   'linear-gradient(135deg, var(--color-primary) 0%, #4f46e5 100%)',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(99,102,241,0.35)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  View My Work ↓
                </Button>
                <Button
                  component="a"
                  href={personalInfo.resume}
                  download
                  variant="outlined"
                  size="large"
                  startIcon={<Download size={16} />}
                  sx={{
                    px:           '1.75rem',
                    fontWeight:   600,
                    borderRadius: '10px',
                    borderColor:  'var(--color-border-strong)',
                    color:        'text.primary',
                    '&:hover': {
                      borderColor:     'primary.main',
                      backgroundColor: alpha('#6366f1', 0.05),
                      transform:       'translateY(-2px)',
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  display:     'flex',
                  gap:         { xs: '1.5rem', md: '2.5rem' },
                  pt:          '2rem',
                  borderTop:   '1px solid var(--color-border)',
                  flexWrap:    'wrap',
                }}
              >
                {heroStats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      sx={{
                        fontSize:      { xs: '1.75rem', md: '2.25rem' },
                        fontWeight:    800,
                        letterSpacing: '-0.04em',
                        lineHeight:    1,
                        mb:            '0.25rem',
                        background:    'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor:  'transparent',
                        backgroundClip:       'text',
                      }}
                    >
                      {stat.value}{stat.suffix}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </MotionBox>

          {/* ── Right: Profile card ──────────────────────── */}
          <MotionBox
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'center' }}
          >
            <Box sx={{ position: 'relative', width: '100%', maxWidth: 400 }}>
              {/* Floating badge 1 */}
              <MotionBox
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                sx={{
                  position:        'absolute',
                  top:             '-1.5rem',
                  right:           '-1rem',
                  backgroundColor: 'var(--color-bg-2)',
                  border:          '1px solid var(--color-border)',
                  borderRadius:    '10px',
                  px:              '0.9rem',
                  py:              '0.5rem',
                  display:         'flex',
                  alignItems:      'center',
                  gap:             '0.5rem',
                  zIndex:          2,
                  boxShadow:       'var(--shadow-md)',
                }}
              >
                <Box sx={{ fontSize: '1rem' }}>🚀</Box>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: 'text.primary', whiteSpace: 'nowrap' }}>
                  Open to Work
                </Typography>
              </MotionBox>

              {/* Floating badge 2 */}
              <MotionBox
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                sx={{
                  position:        'absolute',
                  bottom:          '3rem',
                  left:            '-2rem',
                  backgroundColor: 'var(--color-bg-2)',
                  border:          '1px solid var(--color-border)',
                  borderRadius:    '10px',
                  px:              '0.9rem',
                  py:              '0.5rem',
                  display:         'flex',
                  alignItems:      'center',
                  gap:             '0.5rem',
                  zIndex:          2,
                  boxShadow:       'var(--shadow-md)',
                }}
              >
                <Box sx={{ fontSize: '1rem' }}>⚡</Box>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: 'text.primary', whiteSpace: 'nowrap' }}>
                  2+ Years Exp.
                </Typography>
              </MotionBox>

              {/* Main card */}
              <MotionBox
                variants={scaleUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                sx={{
                  backgroundColor: 'var(--color-bg-2)',
                  border:          '1px solid var(--color-border)',
                  borderRadius:    '20px',
                  p:               '2rem',
                  position:        'relative',
                  overflow:        'hidden',
                  boxShadow:       'var(--shadow-lg)',
                }}
              >
                {/* Card glow */}
                <Box sx={{
                  position:   'absolute',
                  top:        '-30%',
                  right:      '-20%',
                  width:      '60%',
                  height:     '60%',
                  borderRadius: '50%',
                  background:   'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)',
                  pointerEvents:'none',
                }} />

                {/* Avatar */}
                <Box
                  sx={{
                    width:          72,
                    height:         72,
                    borderRadius:   '50%',
                    background:     'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    mb:             '1.25rem',
                    fontSize:       '1.75rem',
                    fontWeight:     800,
                    color:          '#fff',
                    fontFamily:     'inherit',
                    flexShrink:     0,
                    boxShadow:      '0 8px 24px rgba(99,102,241,0.35)',
                  }}
                >
                  MA
                </Box>

                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: '0.2rem' }}>
                  Muhammad Ahmad
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: '1.25rem' }}>
                  Full Stack Developer (MERN)
                </Typography>

                {/* Stack tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', mb: '1.75rem' }}>
                  {STACK_TAGS.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        fontSize:        '0.7rem',
                        fontWeight:      600,
                        px:              '0.6rem',
                        py:              '0.25rem',
                        borderRadius:    '6px',
                        backgroundColor: alpha('#6366f1', 0.08),
                        color:           'primary.main',
                        border:          `1px solid ${alpha('#6366f1', 0.18)}`,
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>

                {/* Skill bars */}
                {[
                  { label: 'React.js',   value: 92 },
                  { label: 'TypeScript', value: 85 },
                  { label: 'Node.js',    value: 80 },
                ].map((skill, i) => (
                  <Box key={skill.label} sx={{ mb: i < 2 ? '0.85rem' : 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '0.3rem' }}>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary' }}>
                        {skill.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.72rem', color: 'text.muted' }}>
                        {skill.value}%
                      </Typography>
                    </Box>
                    <Box sx={{ height: 4, backgroundColor: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
                      <MotionBox
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.value}%` } : { width: 0 }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.5 + i * 0.15 }}
                        sx={{
                          height:       '100%',
                          borderRadius: 2,
                          background:   'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </MotionBox>
            </Box>
          </MotionBox>
        </Box>

        {/* ── Scroll indicator ────────────────────────────── */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
          sx={{
            position:       'absolute',
            bottom:         '2rem',
            left:           '50%',
            transform:      'translateX(-50%)',
            display:        { xs: 'none', md: 'flex' },
            flexDirection:  'column',
            alignItems:     'center',
            gap:            '0.4rem',
            cursor:         'pointer',
            color:          'text.secondary',
          }}
          onClick={handleScrollDown}
        >
          <Typography sx={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll
          </Typography>
          <MotionBox
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </MotionBox>
        </MotionBox>
      </Box>

      {/* Animated subtitle style */}
      <style>{`
        .hero-subtitle-animated {
          font-size: clamp(1.3rem, 3vw, 2rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--color-text-secondary);
          line-height: 1.3;
        }
      `}</style>
    </Box>
  )
}