import { useRef, useState } from 'react'
import {
  Box, Typography, Button, Dialog,
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

// ─────────────────────────────────────────────────────────────
//  ProjectThumbnail
//  Shows the real screenshot if available.
//  Falls back to a styled placeholder if the image 404s.
// ─────────────────────────────────────────────────────────────
function ProjectThumbnail({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)

  // Category → gradient + emoji for the fallback
  const FALLBACK: Record<string, { emoji: string; from: string; to: string }> = {
    'Full-Stack':   { emoji: '🏗️', from: '#6366f1', to: '#06b6d4' },
    'Landing Page': { emoji: '🎨', from: '#f59e0b', to: '#ef4444' },
    'Backend':      { emoji: '⚙️', from: '#22c55e', to: '#06b6d4' },
    'AI / ML':      { emoji: '🤖', from: '#8b5cf6', to: '#06b6d4' },
  }
  const fb = FALLBACK[project.category] ?? { emoji: '💻', from: '#6366f1', to: '#818cf8' }

  return (
    <Box
      sx={{
        aspectRatio: '16/9',
        position:    'relative',
        overflow:    'hidden',
        borderBottom:'1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-3)',
      }}
    >
      {/* ── Real screenshot ─────────────────────────────── */}
      {!imgError && project.thumbnail && (
        <Box
          component="img"
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          onError={() => setImgError(true)}
          sx={{
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            objectPosition: 'top center',
            display:    'block',
            transition: 'transform 0.5s ease',
            '.MuiBox-root:hover &': {
              transform: 'scale(1.04)',
            },
          }}
        />
      )}

      {/* ── Fallback placeholder ─────────────────────────── */}
      {(imgError || !project.thumbnail) && (
        <Box
          sx={{
            width:          '100%',
            height:         '100%',
            background:     `linear-gradient(135deg, ${alpha(fb.from, 0.18)} 0%, ${alpha(fb.to, 0.12)} 100%)`,
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            '0.4rem',
          }}
        >
          {/* Subtle grid pattern */}
          <Box sx={{
            position:   'absolute',
            inset:      0,
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            opacity:        0.45,
          }} />
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Typography sx={{ fontSize: '2.5rem', lineHeight: 1, mb: '0.35rem' }}>
              {fb.emoji}
            </Typography>
            <Typography sx={{
              fontSize:      '0.72rem',
              fontWeight:    700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color:         'primary.main',
            }}>
              {project.category}
            </Typography>
          </Box>
        </Box>
      )}

      {/* ── Overlay on hover (only on real images) ──────── */}
      {!imgError && project.thumbnail && (
        <Box sx={{
          position:        'absolute',
          inset:           0,
          background:      'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
          opacity:         0,
          transition:      'opacity 0.3s ease',
          '.MuiBox-root:hover &': { opacity: 1 },
          display:         'flex',
          alignItems:      'flex-end',
          p:               '0.75rem',
        }}>
          <Typography sx={{
            fontSize:   '0.75rem',
            fontWeight: 600,
            color:      '#fff',
            opacity:    0.9,
          }}>
            Click to view details
          </Typography>
        </Box>
      )}

      {/* ── Featured badge ───────────────────────────────── */}
      {project.featured && (
        <Box sx={{
          position:        'absolute',
          top:             '0.75rem',
          left:            '0.75rem',
          backgroundColor: alpha('#f59e0b', 0.15),
          border:          `1px solid ${alpha('#f59e0b', 0.35)}`,
          borderRadius:    '6px',
          px:              '0.5rem',
          py:              '0.2rem',
          display:         'flex',
          alignItems:      'center',
          gap:             '0.3rem',
          backdropFilter:  'blur(8px)',
          zIndex:          2,
        }}>
          <Star size={11} color="#f59e0b" fill="#f59e0b" />
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: '#f59e0b' }}>
            Featured
          </Typography>
        </Box>
      )}

      {/* ── Status badge ─────────────────────────────────── */}
      <Box sx={{
        position:        'absolute',
        top:             '0.75rem',
        right:           '0.75rem',
        backgroundColor: alpha(STATUS_COLOR[project.status] ?? '#6b7280', 0.15),
        border:          `1px solid ${alpha(STATUS_COLOR[project.status] ?? '#6b7280', 0.35)}`,
        borderRadius:    '6px',
        px:              '0.5rem',
        py:              '0.2rem',
        backdropFilter:  'blur(8px)',
        zIndex:          2,
      }}>
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: STATUS_COLOR[project.status] }}>
          {STATUS_LABEL[project.status]}
        </Typography>
      </Box>
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
//  ProjectCard
// ─────────────────────────────────────────────────────────────
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
      <ProjectThumbnail project={project} />

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
        <Box sx={{ display: 'flex', gap: '0.75rem', mt: 'auto', flexWrap: 'wrap' }}>
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
            onClick={e => { e.stopPropagation(); onOpen(project) }}
            sx={{
              display:    'flex',
              alignItems: 'center',
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

// ─────────────────────────────────────────────────────────────
//  ProjectModal — detail view with full screenshot
// ─────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [imgError, setImgError] = useState(false)

  // Reset imgError when project changes
  const prevId = useRef<string | null>(null)
  if (project?.id !== prevId.current) {
    prevId.current = project?.id ?? null
    if (imgError) setImgError(false)
  }

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
          {/* Full screenshot at top of modal */}
          {project.thumbnail && !imgError && (
            <Box sx={{
              width:           '100%',
              aspectRatio:     '16/7',
              overflow:        'hidden',
              borderBottom:    '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg-3)',
              position:        'relative',
            }}>
              <Box
                component="img"
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                onError={() => setImgError(true)}
                sx={{
                  width:          '100%',
                  height:         '100%',
                  objectFit:      'cover',
                  objectPosition: 'top center',
                  display:        'block',
                }}
              />
              {/* Gradient fade at bottom */}
              <Box sx={{
                position:   'absolute',
                bottom:     0,
                left:       0,
                right:      0,
                height:     '40%',
                background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
              }} />
            </Box>
          )}

          {/* Modal header */}
          <Box
            sx={{
              p:               '1.5rem',
              borderBottom:    '1px solid var(--color-border)',
              display:         'flex',
              justifyContent:  'space-between',
              alignItems:      'flex-start',
              backgroundColor: project.thumbnail && !imgError ? 'transparent' : 'var(--color-bg-2)',
              mt:              project.thumbnail && !imgError ? '-2rem' : 0,
              position:        'relative',
              zIndex:          1,
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
            <IconButton onClick={onClose} size="small" sx={{ color: 'text.secondary', flexShrink: 0 }}>
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
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {h}
                    </Typography>
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
                  sx={{ borderRadius: '8px', fontWeight: 600, boxShadow: 'none' }}
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

// ─────────────────────────────────────────────────────────────
//  ProjectsSection
// ─────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const [active, setActive]     = useState('All')
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
                  boxShadow:       'none',
                  borderColor:     active !== cat ? 'var(--color-border)' : undefined,
                  color:           active !== cat ? 'text.secondary' : undefined,
                  backgroundColor: active !== cat ? 'transparent' : undefined,
                  '&:hover':       { boxShadow: 'none' },
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
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap:                 '1.5rem',
            }}
          >
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </MotionBox>
        </AnimatePresence>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </Box>
    </SectionWrapper>
  )
}