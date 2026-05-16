import { useRef } from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Phone, GraduationCap, Briefcase, Award, Download } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { SectionWrapper, SectionHeading, ScrollReveal } from '@/components/ui'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/animations/variants'

const MotionBox = motion(Box)

const INFO_CARDS = [
  {
    icon:  <Briefcase size={20} />,
    label: 'Experience',
    value: '2+ Years',
    sub:   'Professional',
    color: '#6366f1',
  },
  {
    icon:  <GraduationCap size={20} />,
    label: 'Education',
    value: 'BS Software Eng.',
    sub:   'Virtual University',
    color: '#06b6d4',
  },
  {
    icon:  <Award size={20} />,
    label: 'Certifications',
    value: '4 Certs',
    sub:   'MERN · Web3 · AI',
    color: '#f59e0b',
  },
  {
    icon:  <MapPin size={20} />,
    label: 'Location',
    value: 'Lahore',
    sub:   'Pakistan',
    color: '#22c55e',
  },
]

export default function AboutSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="about" alt>
      <Box ref={ref}>
        <SectionHeading
          label="About Me"
          title="Passionate about building things that scale."
          inView={inView}
        />

        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap:                 { xs: '3rem', lg: '5rem' },
            alignItems:          'start',
          }}
        >
          {/* ── Left: Bio + contact ──────────────────────── */}
          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {personalInfo.bio.map((para, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Typography
                  variant="body1"
                  sx={{
                    color:      i === 0 ? 'text.primary' : 'text.secondary',
                    fontWeight: i === 0 ? 500 : 400,
                    mb:         '1.25rem',
                    lineHeight: 1.85,
                    fontSize:   '1rem',
                  }}
                >
                  {para}
                </Typography>
              </motion.div>
            ))}

            {/* Contact details */}
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  display:         'flex',
                  flexDirection:   'column',
                  gap:             '0.75rem',
                  p:               '1.25rem',
                  borderRadius:    '12px',
                  border:          '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                  mb:              '2rem',
                }}
              >
                {[
                  { icon: <Mail size={15} />,  label: 'Email',    value: personalInfo.email    },
                  { icon: <Phone size={15} />, label: 'Phone',    value: personalInfo.phone ?? '' },
                  { icon: <MapPin size={15} />,label: 'Location', value: personalInfo.location  },
                ].map((item) => (
                  <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Box sx={{ color: 'primary.main', flexShrink: 0 }}>{item.icon}</Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: 60 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button
                component="a"
                href={personalInfo.resume}
                download
                variant="contained"
                startIcon={<Download size={16} />}
                sx={{
                  borderRadius: '10px',
                  px:           '1.5rem',
                  fontWeight:   700,
                  background:   'linear-gradient(135deg, var(--color-primary) 0%, #4f46e5 100%)',
                  boxShadow:    'none',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Download My CV
              </Button>
            </motion.div>
          </MotionBox>

          {/* ── Right: Info cards grid ───────────────────── */}
          <MotionBox
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <Grid container spacing={2} sx={{ mb: '2rem' }}>
              {INFO_CARDS.map((card) => (
                <Grid item xs={6} key={card.label}>
                  <ScrollReveal>
                    <Box
                      sx={{
                        p:               '1.25rem',
                        borderRadius:    '14px',
                        border:          '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        height:          '100%',
                        transition:      'all 0.25s ease',
                        '&:hover': {
                          borderColor: alpha(card.color, 0.35),
                          transform:   'translateY(-3px)',
                          boxShadow:   `0 8px 24px ${alpha(card.color, 0.12)}`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width:           40,
                          height:          40,
                          borderRadius:    '10px',
                          backgroundColor: alpha(card.color, 0.1),
                          display:         'flex',
                          alignItems:      'center',
                          justifyContent:  'center',
                          color:           card.color,
                          mb:              '0.85rem',
                        }}
                      >
                        {card.icon}
                      </Box>
                      <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'text.secondary', mb: '0.2rem' }}>
                        {card.label}
                      </Typography>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary', mb: '0.1rem' }}>
                        {card.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
                        {card.sub}
                      </Typography>
                    </Box>
                  </ScrollReveal>
                </Grid>
              ))}
            </Grid>

            {/* What I do — service cards */}
            <ScrollReveal delay={0.2}>
              <Box
                sx={{
                  p:               '1.5rem',
                  borderRadius:    '14px',
                  border:          '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: '1rem', color: 'text.primary' }}>
                  What I do
                </Typography>
                {[
                  { emoji: '⚛️',  text: 'Build responsive React.js UIs with TypeScript & Redux'  },
                  { emoji: '🔗',  text: 'Develop REST APIs with Node.js, Express & MongoDB'       },
                  { emoji: '🎨',  text: 'Design clean interfaces with Tailwind CSS & MUI'         },
                  { emoji: '🚀',  text: 'Integrate real-time data with Supabase & React Query'    },
                ].map((item) => (
                  <Box key={item.text} sx={{ display: 'flex', gap: '0.75rem', mb: '0.75rem', alignItems: 'flex-start' }}>
                    <Box sx={{ fontSize: '1rem', flexShrink: 0, mt: '1px' }}>{item.emoji}</Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </ScrollReveal>
          </MotionBox>
        </Box>
      </Box>
    </SectionWrapper>
  )
}