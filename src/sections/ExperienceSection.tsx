import { useRef, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {  useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react'
import { experiences } from '@/data/experience'
import { SectionWrapper, SectionHeading, ScrollReveal, Tag } from '@/components/ui'
import type { ExperienceType } from '@/types'

// const MotionBox = motion(Box)

const TYPE_CONFIG: Record<ExperienceType, { icon: React.ReactNode; color: string; label: string }> = {
  work:          { icon: <Briefcase size={16} />,     color: '#6366f1', label: 'Work'          },
  education:     { icon: <GraduationCap size={16} />, color: '#06b6d4', label: 'Education'     },
  freelance:     { icon: <Briefcase size={16} />,     color: '#f59e0b', label: 'Freelance'     },
  certification: { icon: <Award size={16} />,         color: '#22c55e', label: 'Certification' },
}

const FILTER_TABS: { label: string; value: ExperienceType | 'all' }[] = [
  { label: 'All',            value: 'all'          },
  { label: 'Work',           value: 'work'         },
  { label: 'Education',      value: 'education'    },
  { label: 'Certifications', value: 'certification'},
]

export default function ExperienceSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState<ExperienceType | 'all'>('all')

  const filtered = filter === 'all'
    ? experiences
    : experiences.filter(e => e.type === filter)

  return (
    <SectionWrapper id="experience">
      <Box ref={ref}>
        <SectionHeading
          label="Experience"
          title="My journey so far."
          subtitle="Professional experience, education, and certifications that shaped my skills."
          inView={inView}
        />

        {/* Filter tabs */}
        <ScrollReveal>
          <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', mb: '3rem' }}>
            {FILTER_TABS.map(tab => (
              <Button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                variant={filter === tab.value ? 'contained' : 'outlined'}
                size="small"
                sx={{
                  borderRadius:    '8px',
                  fontWeight:      600,
                  fontSize:        '0.8rem',
                  px:              '1rem',
                  boxShadow:       'none',
                  borderColor:     filter !== tab.value ? 'var(--color-border)' : undefined,
                  color:           filter !== tab.value ? 'text.secondary' : undefined,
                  backgroundColor: filter !== tab.value ? 'transparent' : undefined,
                  '&:hover': { boxShadow: 'none' },
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Box>
        </ScrollReveal>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Vertical line — desktop only */}
          <Box sx={{
            display:         { xs: 'none', md: 'block' },
            position:        'absolute',
            left:            '50%',
            top:             0,
            bottom:          0,
            width:           2,
            backgroundColor: 'var(--color-border)',
            transform:       'translateX(-50%)',
            zIndex:          0,
          }} />

          {filtered.map((exp, i) => {
            const cfg    = TYPE_CONFIG[exp.type]
            const isLeft = i % 2 === 0

            return (
              <ScrollReveal key={exp.id} delay={i * 0.08} variant={isLeft ? 'left' : 'right'}>
                <Box
                  sx={{
                    display:             'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 60px 1fr' },
                    alignItems:          'start',
                    mb:                  '2rem',
                    position:            'relative',
                    zIndex:              1,
                  }}
                >
                  {/* Left slot */}
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {isLeft && <TimelineCard exp={exp} cfg={cfg} />}
                  </Box>

                  {/* Centre dot */}
                  <Box sx={{
                    display:        { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    pt:             '1.5rem',
                  }}>
                    <Box sx={{
                      width:           40,
                      height:          40,
                      borderRadius:    '50%',
                      backgroundColor: alpha(cfg.color, 0.12),
                      border:          `2px solid ${cfg.color}`,
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      color:           cfg.color,
                      zIndex:          2,
                      flexShrink:      0,
                      boxShadow:       `0 0 0 4px var(--color-bg), 0 0 0 6px ${alpha(cfg.color, 0.2)}`,
                    }}>
                      {cfg.icon}
                    </Box>
                  </Box>

                  {/* Right slot */}
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {!isLeft && <TimelineCard exp={exp} cfg={cfg} />}
                  </Box>

                  {/* Mobile: always full width */}
                  <Box sx={{
                    display:   { xs: 'flex', md: 'none' },
                    gap:       '0.75rem',
                    alignItems:'flex-start',
                  }}>
                    <Box sx={{
                      width:           36,
                      height:          36,
                      borderRadius:    '50%',
                      backgroundColor: alpha(cfg.color, 0.12),
                      border:          `2px solid ${cfg.color}`,
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      color:           cfg.color,
                      flexShrink:      0,
                      mt:              '0.25rem',
                    }}>
                      {cfg.icon}
                    </Box>
                    <TimelineCard exp={exp} cfg={cfg} />
                  </Box>
                </Box>
              </ScrollReveal>
            )
          })}
        </Box>
      </Box>
    </SectionWrapper>
  )
}

function TimelineCard({
  exp,
  cfg,
}: {
  exp: (typeof experiences)[number]
  cfg: { icon: React.ReactNode; color: string; label: string }
}) {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-bg-2)',
        border:          '1px solid var(--color-border)',
        borderRadius:    '16px',
        p:               '1.5rem',
        transition:      'all 0.25s ease',
        '&:hover': {
          borderColor: alpha(cfg.color, 0.35),
          transform:   'translateY(-2px)',
          boxShadow:   `0 8px 24px ${alpha(cfg.color, 0.1)}`,
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', mb: '0.75rem' }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.4rem', mb: '0.25rem' }}>
            <Box sx={{
              fontSize:        '0.65rem',
              fontWeight:      700,
              letterSpacing:   '0.08em',
              textTransform:   'uppercase',
              color:           cfg.color,
              backgroundColor: alpha(cfg.color, 0.08),
              px:              '0.5rem',
              py:              '0.15rem',
              borderRadius:    '4px',
              border:          `1px solid ${alpha(cfg.color, 0.2)}`,
            }}>
              {cfg.label}
            </Box>
            {exp.current && (
              <Box sx={{
                fontSize:        '0.65rem',
                fontWeight:      700,
                color:           '#22c55e',
                backgroundColor: alpha('#22c55e', 0.08),
                px:              '0.5rem',
                py:              '0.15rem',
                borderRadius:    '4px',
                border:          `1px solid ${alpha('#22c55e', 0.2)}`,
              }}>
                Current
              </Box>
            )}
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}>
            {exp.role}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'primary.main' }}>
              {exp.company}
            </Typography>
            {exp.companyUrl && (
              <Box
                component="a"
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', display: 'flex', '&:hover': { color: 'primary.main' } }}
              >
                <ExternalLink size={12} />
              </Box>
            )}
          </Box>
        </Box>

        <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
          <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', fontWeight: 500 }}>
            {exp.startDate} — {exp.endDate}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
            {exp.location}
          </Typography>
        </Box>
      </Box>

      {/* Description */}
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: '0.85rem', lineHeight: 1.7 }}>
        {exp.description}
      </Typography>

      {/* Highlights */}
      {exp.highlights.length > 0 && (
        <Box sx={{ mb: '0.85rem' }}>
          {exp.highlights.slice(0, 3).map((h, i) => (
            <Box key={i} sx={{ display: 'flex', gap: '0.5rem', mb: '0.4rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={13} color={cfg.color} style={{ marginTop: 3, flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem', lineHeight: 1.6 }}>
                {h}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Technologies */}
      {exp.technologies && exp.technologies.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {exp.technologies.map(t => (
            <Tag key={t} label={t} variant="subtle" />
          ))}
        </Box>
      )}
    </Box>
  )
}