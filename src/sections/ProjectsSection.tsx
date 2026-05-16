import { useRef, useState } from 'react'
import {
  Box, Typography, Button, Chip, Dialog,
  DialogContent, IconButton,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, CheckCircle2, Star, GitBranch } from 'lucide-react'
import { projects, projectCategories } from '@/data/projects'
import { SectionWrapper, SectionHeading, ScrollReveal, Tag } from '@/components/ui'
import type { Project } from '@/types'

const MotionBox = motion(Box)

const STATUS_COLOR: Record<string, string> = {
  live:     '#22c55e',
  wip:      '#f59e0b',
  archived: '#6b7280',
}
const STATUS_LABEL: Record<string, string> = {
  live:     'Live',
  wip:      'In Progress',
  archived: 'Archived',
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <MotionBox
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      onClick={() => onOpen(project)}
      sx={{
        backgroundColor: 'var(--color-bg-2)',
        border:          '1px solid var(--color-border)',
        borderRadius:    '16px',
        overflow:        'hidden',
        cursor:          'pointer',
        transition:      'all 0.3s ease',
        display:         'flex',
        flexDirection:   'column',
        '&:hover': {
          borderColor: alpha('#6366f1', 0.3),
          transform:   'translateY(-5px)',
          boxShadow:   '0 20px 50px rgba(0,0,0,0.15)',
        },
      }}
    >
      {/* Thumbnail */}
      <Box
        sx={{
          aspectRatio:     '16/9',
          background:      `linear-gradient(135deg, ${alpha('#6366f1', 0.15)} 0%, ${alpha('#06b6d4', 0.1)} 100%)`,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          borderBottom:    '1px solid var(--color-border)',
          position:        'relative',
          overflow:        'hidden',
        }}
      >
        {/* Decorative grid */}
        <Box sx={{
          position:   'absolute',
          inset:      0,
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          opacity:        0.5,
        }} />
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '2.5rem', mb: '0.25rem' }}>
            {project.category === 'Full-Stack' ? '🏗️' : project.category === 'AI / ML' ? '🤖' : '💻'}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'primary.main', letterSpacing: '0.05em' }}>
            {project.category}
          </Typography>
        </Box>

        {/* Featured badge */}
        {project.featured && (
          <Box sx={{
            position:        'absolute',
            top:             '0.75rem',
            left:            '0.75rem',
            backgroundColor: alpha('#f59e0b', 0.15),
            border:          `1px solid ${alpha('#f59e0b', 0.3)}`,
            borderRadius:    '6px',
            px:              '0.5rem',
            py:              '0.2rem',
            display:         'flex',
            alignItems:      'center',
            gap:             '0.3rem',
          }}>
            <Star size={11} color="#f59e0b" fill="#f59e0b" />
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: '#f59e0b' }}>Featured</Typography>
          </Box>
        )}

        {/* Status badge */}
        <Box sx={{
          position:        'absolute',
          top:             '0.75rem',
          right:           '0.75rem',
          backgroundColor: alpha(STATUS_COLOR[project.status] ?? '#6b7280', 0.12),
          border:          `1px solid ${alpha(STATUS_COLOR[project.status] ?? '#6b7280', 0.3)}`,
          borderRadius:    '6px',
          px:              '0.5rem',
          py:              '0.2rem',
        }}>
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: STATUS_COLOR[project.status] }}>
            {STATUS_LABEL[project.status]}
          </Typography>
        </Box>
      </Box>

      {/* Card body */}
      <Box sx={{ p: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', mb: '0.75rem' }}>
          {project.tags.slice(0, 3).map(tag => (
            <Tag key={tag} label={tag} variant="primary" />
          ))}
          {project.tags.length > 3 && (
            <Tag label={`+${project.tags.length - 3}`} variant="subtle" />
          )}
        </Box>

        <Typography sx={{ fontWeight: 700, fontSize: '1rem', mb: '0.4rem', color: 'text.primary' }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, mb: '1rem', flex: 1 }}>
          {project.tagline}
        </Typography>

        {/* Links */}
        <Box sx={{ display: 'flex', gap: '0.75rem', mt: 'auto' }}>
          {project.links.map(link => (
            <Box
              key={link.label}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              sx={{
                display:    'flex',
                alignItems: 'center',
                gap:        '0.3rem',
                fontSize:   '0.78rem',
                fontWeight: 600,
                color:      'text.secondary',
                transition: 'color 0.2s',
                '&:hover':  { color: 'primary.main' },
              }}
            >
              {link.type === 'github' ? <GitBranch size={13} /> : <ExternalLink size={13} />}
              {link.label}
            </Box>
          ))}
          <Box
            onClick={(e) => { e.stopPropagation(); onOpen(project) }}
            sx={{
              display:    'flex',
              alignItems: 'center',
              gap:        '0.3rem',
              fontSize:   '0.78rem',
              fontWeight: 600,
              color:      'primary.main',
              cursor:     'pointer',
              ml:         'auto',
              '&:hover':  { opacity: 0.75 },
            }}
          >
            Details →
          </Box>
        </Box>
      </Box>
    </MotionBox>
  )
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog
      open={!!project}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            backgroundColor: 'var(--color-bg)',
            backgroundImage: 'none',
            border:          '1px solid var(--color-border)',
            borderRadius:    '20px',
            overflow:        'hidden',
          },
        },
      }}
    >
      {project && (
        <DialogContent sx={{ p: 0 }}>
          {/* Modal header */}
          <Box
            sx={{
              p:               '1.5rem',
              borderBottom:    '1px solid var(--color-border)',
              display:         'flex',
              justifyContent:  'space-between',
              alignItems:      'flex-start',
              backgroundColor: 'var(--color-bg-2)',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', gap: '0.5rem', mb: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.slice(0, 4).map(t => <Tag key={t} label={t} variant="primary" />)}
              </Box>
              <Typography sx={{ fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em' }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: '0.25rem' }}>
                {project.year} · {project.category}
              </Typography>
            </Box>
            <IconButton onClick={onClose} size="small" sx={{ color: 'text.secondary' }}>
              <X size={20} />
            </IconButton>
          </Box>

          {/* Modal body */}
          <Box sx={{ p: '1.5rem' }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: '1.5rem' }}>
              {project.description}
            </Typography>

            {project.highlights && project.highlights.length > 0 && (
              <Box sx={{ mb: '1.5rem' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: '0.75rem', color: 'text.primary' }}>
                  Key Highlights
                </Typography>
                {project.highlights.map((h, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: '0.6rem', mb: '0.5rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={15} color="var(--color-primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{h}</Typography>
                  </Box>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {project.links.map(link => (
                <Button
                  key={link.label}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={link.type === 'demo' ? 'contained' : 'outlined'}
                  startIcon={link.type === 'github' ? <GitBranch size={15} /> : <ExternalLink size={15} />}
                  sx={{ borderRadius: '8px', fontWeight: 600 }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default function ProjectsSection() {
  const ref      = useRef<HTMLDivElement>(null)
  const inView   = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const [active, setActive]   = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <SectionWrapper id="projects" alt>
      <Box ref={ref}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', mb: '3rem' }}>
          <SectionHeading label="Projects" title="Things I've built." inView={inView} />
          <ScrollReveal>
            <Button
              component="a"
              href="https://github.com/ahmad-watoo"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{ borderRadius: '10px', fontWeight: 600, whiteSpace: 'nowrap', mb: '1.5rem' }}
            >
              View GitHub →
            </Button>
          </ScrollReveal>
        </Box>

        {/* Filter tabs */}
        <ScrollReveal>
          <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', mb: '2.5rem' }}>
            {projectCategories.map(cat => (
              <Button
                key={cat}
                onClick={() => setActive(cat)}
                variant={active === cat ? 'contained' : 'outlined'}
                size="small"
                sx={{
                  borderRadius:    '8px',
                  fontWeight:      600,
                  fontSize:        '0.8rem',
                  px:              '1rem',
                  borderColor:     active !== cat ? 'var(--color-border)' : undefined,
                  color:           active !== cat ? 'text.secondary' : undefined,
                  backgroundColor: active === cat ? undefined : 'transparent',
                  boxShadow:       'none',
                  '&:hover': { boxShadow: 'none' },
                }}
              >
                {cat}
              </Button>
            ))}
          </Box>
        </ScrollReveal>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <MotionBox
            key={active}
            sx={{
              display:             'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: '1.5rem',
            }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </MotionBox>
        </AnimatePresence>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </Box>
    </SectionWrapper>
  )
}