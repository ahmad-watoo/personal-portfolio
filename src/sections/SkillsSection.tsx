import { useRef, useState } from 'react'
import { Box, Typography, Tab, Tabs } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { skills } from '@/data/skills'
import { SectionWrapper, SectionHeading, ScrollReveal } from '@/components/ui'
import type { SkillCategory } from '@/types'

const MotionBox = motion(Box)

const CATEGORIES: { label: string; value: SkillCategory | 'all' }[] = [
  { label: 'All',      value: 'all'      },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend',  value: 'backend'  },
  { label: 'Tools',    value: 'devops'   },
]

// Tools shown in the bottom grid
const TECH_ICONS = [
  { name: 'React',      emoji: '⚛️'  },
  { name: 'TypeScript', emoji: '🔷'  },
  { name: 'JavaScript', emoji: '🟡'  },
  { name: 'Node.js',    emoji: '🟢'  },
  { name: 'MongoDB',    emoji: '🍃'  },
  { name: 'Redux',      emoji: '🔮'  },
  { name: 'Next.js',    emoji: '▲'   },
  { name: 'Tailwind',   emoji: '🎨'  },
  { name: 'Git',        emoji: '🐙'  },
  { name: 'Supabase',   emoji: '⚡'  },
  { name: 'Express',    emoji: '🚂'  },
  { name: 'Ant Design', emoji: '🐜'  },
]

function SkillBar({ name, level, inView, delay }: { name: string; level: number; inView: boolean; delay: number }) {
  return (
    <Box sx={{ mb: '1.1rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '0.4rem' }}>
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'text.primary' }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'primary.main' }}>
          {level}%
        </Typography>
      </Box>
      <Box sx={{
        height:          6,
        backgroundColor: 'var(--color-border)',
        borderRadius:    3,
        overflow:        'hidden',
      }}>
        <MotionBox
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay }}
          sx={{
            height:       '100%',
            borderRadius: 3,
            background:   level >= 88
              ? 'linear-gradient(90deg, #6366f1, #06b6d4)'
              : level >= 75
              ? 'linear-gradient(90deg, #6366f1, #818cf8)'
              : 'linear-gradient(90deg, #818cf8, #a5b4fc)',
          }}
        />
      </Box>
    </Box>
  )
}

export default function SkillsSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState<SkillCategory | 'all'>('all')

  const filtered = activeTab === 'all'
    ? skills
    : skills.filter(s => s.category === activeTab)

  return (
    <SectionWrapper id="skills">
      <Box ref={ref}>
        <SectionHeading
          label="Skills"
          title="Technologies I work with."
          subtitle="A full-stack skill set built over 2+ years of professional experience and continuous learning."
          centered
          inView={inView}
        />

        {/* Category tabs */}
        <ScrollReveal>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: '3rem' }}>
            <Tabs
              value={activeTab}
              onChange={(_, v) => setActiveTab(v)}
              sx={{
                backgroundColor: 'var(--color-bg-2)',
                borderRadius:    '12px',
                p:               '4px',
                border:          '1px solid var(--color-border)',
                minHeight:       'unset',
                '& .MuiTabs-indicator': { display: 'none' },
                '& .MuiTab-root': {
                  minHeight:     '34px',
                  py:            '0.4rem',
                  px:            '1rem',
                  borderRadius:  '8px',
                  fontSize:      '0.825rem',
                  fontWeight:    500,
                  color:         'text.secondary',
                  textTransform: 'none',
                  transition:    'all 0.2s',
                  '&.Mui-selected': {
                    color:           'primary.main',
                    backgroundColor: alpha('#6366f1', 0.1),
                    fontWeight:      700,
                  },
                },
              }}
            >
              {CATEGORIES.map(c => (
                <Tab key={c.value} label={c.label} value={c.value} />
              ))}
            </Tabs>
          </Box>
        </ScrollReveal>

        {/* Skills bars grid */}
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap:                 { xs: '1.5rem', md: '2rem' },
              mb:                  '4rem',
            }}
          >
            {filtered.map((skill, i) => (
              <Box
                key={skill.id}
                sx={{
                  p:               '1.25rem',
                  borderRadius:    '14px',
                  border:          '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg-2)',
                  transition:      'border-color 0.25s, transform 0.25s',
                  '&:hover': {
                    borderColor: alpha('#6366f1', 0.3),
                    transform:   'translateY(-2px)',
                  },
                }}
              >
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                  inView={inView}
                  delay={0.1 + (i % 6) * 0.08}
                />
                {/* Category label */}
                <Box sx={{
                  display:         'inline-block',
                  fontSize:        '0.68rem',
                  fontWeight:      600,
                  letterSpacing:   '0.05em',
                  textTransform:   'uppercase',
                  color:           'text.secondary',
                  px:              '0.5rem',
                  py:              '0.15rem',
                  borderRadius:    '4px',
                  backgroundColor: 'var(--color-bg-3)',
                  mt:              '0.25rem',
                }}>
                  {skill.category}
                </Box>
              </Box>
            ))}
          </MotionBox>
        </AnimatePresence>

        {/* Tech icons grid */}
        <ScrollReveal>
          <Box
            sx={{
              p:               { xs: '1.5rem', md: '2rem' },
              borderRadius:    '16px',
              border:          '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg-2)',
            }}
          >
            <Typography
              sx={{
                fontSize:      '0.75rem',
                fontWeight:    700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         'text.secondary',
                textAlign:     'center',
                mb:            '1.5rem',
              }}
            >
              Technologies &amp; Tools
            </Typography>
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: {
                  xs: 'repeat(4, 1fr)',
                  sm: 'repeat(6, 1fr)',
                  md: 'repeat(12, 1fr)',
                },
                gap: '0.75rem',
              }}
            >
              {TECH_ICONS.map((tech, i) => (
                <ScrollReveal key={tech.name} delay={i * 0.04}>
                  <Box
                    sx={{
                      display:         'flex',
                      flexDirection:   'column',
                      alignItems:      'center',
                      gap:             '0.35rem',
                      p:               '0.75rem 0.25rem',
                      borderRadius:    '10px',
                      border:          '1px solid transparent',
                      cursor:          'default',
                      transition:      'all 0.2s',
                      '&:hover': {
                        backgroundColor: 'var(--color-bg)',
                        borderColor:     'var(--color-border)',
                        transform:       'translateY(-2px)',
                      },
                    }}
                  >
                    <Box sx={{ fontSize: '1.5rem', lineHeight: 1 }}>{tech.emoji}</Box>
                    <Typography sx={{ fontSize: '0.62rem', fontWeight: 600, color: 'text.secondary', textAlign: 'center', lineHeight: 1.2 }}>
                      {tech.name}
                    </Typography>
                  </Box>
                </ScrollReveal>
              ))}
            </Box>
          </Box>
        </ScrollReveal>
      </Box>
    </SectionWrapper>
  )
}