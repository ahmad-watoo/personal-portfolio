import { Box, Typography, IconButton, Divider, Tooltip } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion } from 'framer-motion'
// Use MUI icons for social platforms — always safe, already installed
import GitHubIcon    from '@mui/icons-material/GitHub'
import LinkedInIcon  from '@mui/icons-material/LinkedIn'
import TwitterIcon   from '@mui/icons-material/Twitter'
import EmailIcon     from '@mui/icons-material/Email'
// lucide-react for generic UI icons
import { ArrowUp, Code2 } from 'lucide-react'
import { NAV_ITEMS } from '@/constants'
import { personalInfo } from '@/data/personal'
import { ScrollReveal } from '@/components/ui'
import type { SvgIconComponent } from '@mui/icons-material'

// Map icon key → MUI icon component
const SOCIAL_ICONS: Record<string, SvgIconComponent> = {
  GitHub:   GitHubIcon,
  LinkedIn: LinkedInIcon,
  Twitter:  TwitterIcon,
  Email:    EmailIcon,
}

const MotionBox = motion(Box)

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--color-bg-2)',
        borderTop: '1px solid var(--color-border)',
        pt: '4rem',
        pb: '2.5rem',
      }}
    >
      <Box sx={{ maxWidth: 'var(--container-max-w)', mx: 'auto', px: { xs: '1.25rem', sm: '1.5rem', lg: '2rem' } }}>
        <ScrollReveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr 1fr' },
              gap: { xs: '2.5rem', md: '3rem' },
              mb: '3rem',
            }}
          >
            {/* Column 1: Brand */}
            <Box>
              <Box
                component="a"
                href="#home"
                onClick={() => handleNavClick('#home')}
                sx={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', mb: '1rem', cursor: 'pointer' }}
              >
                <Box sx={{
                  width: 28, height: 28, borderRadius: '7px',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Code2 size={14} color="#fff" />
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.03em', color: 'text.primary' }}>
                  {personalInfo.name.split(' ')[0]}
                  <Box component="span" sx={{ color: 'primary.main' }}>.</Box>
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: '1.5rem', maxWidth: '280px' }}>
                {personalInfo.title} based in {personalInfo.location}. Building fast, accessible, and beautiful web experiences.
              </Typography>

              {personalInfo.availableForWork && (
                <Box sx={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  px: '0.875rem', py: '0.4rem', borderRadius: '100px',
                  border: `1px solid ${alpha('#22c55e', 0.3)}`,
                  backgroundColor: alpha('#22c55e', 0.07), width: 'fit-content',
                }}>
                  <Box sx={{ position: 'relative', width: 8, height: 8 }}>
                    <Box sx={{
                      position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#22c55e',
                      animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                      '@keyframes ping': {
                        '0%': { transform: 'scale(1)', opacity: 0.75 },
                        '75%, 100%': { transform: 'scale(2)', opacity: 0 },
                      },
                    }} />
                    <Box sx={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  </Box>
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#22c55e' }}>Available for work</Typography>
                </Box>
              )}
            </Box>

            {/* Column 2: Navigation */}
            <Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: '1rem' }}>
                Navigation
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {NAV_ITEMS.map((item) => (
                  <Box
                    key={item.href}
                    component="a"
                    onClick={() => handleNavClick(item.href)}
                    sx={{ color: 'text.secondary', fontSize: '0.9rem', cursor: 'pointer', width: 'fit-content', transition: 'color 0.2s', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Column 3: Contact */}
            <Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: '1rem' }}>
                Get in touch
              </Typography>
              <Box
                component="a"
                href={`mailto:${personalInfo.email}`}
                sx={{ display: 'block', color: 'primary.main', fontSize: '0.9rem', fontWeight: 500, mb: '1.5rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {personalInfo.email}
              </Box>
              <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {personalInfo.socials.map((social) => {
                  const IconComponent = SOCIAL_ICONS[social.icon] ?? GitHubIcon
                  return (
                    <Tooltip key={social.platform} title={social.platform}>
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary', backgroundColor: 'var(--color-bg-3)',
                          border: '1px solid var(--color-border)', width: 36, height: 36,
                          '&:hover': { color: 'primary.main', borderColor: alpha('#6366f1', 0.4), backgroundColor: alpha('#6366f1', 0.06) },
                        }}
                      >
                        <IconComponent sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Tooltip>
                  )
                })}
              </Box>
            </Box>
          </Box>
        </ScrollReveal>

        <Divider />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', pt: '1.5rem' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React + TypeScript.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
            Designed &amp; developed with ❤️
          </Typography>
          <MotionBox whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="Back to top">
              <IconButton
                onClick={scrollToTop}
                size="small"
                sx={{
                  color: 'text.secondary', backgroundColor: 'var(--color-bg-3)',
                  border: '1px solid var(--color-border)', width: 36, height: 36,
                  '&:hover': { color: 'primary.main', borderColor: alpha('#6366f1', 0.4), backgroundColor: alpha('#6366f1', 0.06) },
                }}
              >
                <ArrowUp size={16} />
              </IconButton>
            </Tooltip>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  )
}