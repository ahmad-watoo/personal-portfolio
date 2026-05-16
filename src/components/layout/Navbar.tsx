import { useState, useEffect } from 'react'
import {
  AppBar, Toolbar, Box, IconButton, Button, Drawer,
  List, ListItem, ListItemButton, ListItemText,
  useScrollTrigger, Tooltip, Divider, Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download, Code2 } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { toggleTheme } from '@/store/slices/themeSlice'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { NAV_ITEMS, SECTION_IDS, NAVBAR_HEIGHT } from '@/constants'
import { personalInfo } from '@/data/personal'

// ─────────────────────────────────────────────────────────────
//  Navbar
//  - Sticky, blurred glass background on scroll
//  - Scroll-spy: highlights the active section link
//  - Dark / light mode toggle (Redux)
//  - Resume download button
//  - Mobile: slide-in Drawer
// ─────────────────────────────────────────────────────────────

const MotionBox = motion(Box)

export default function Navbar() {
  const dispatch    = useAppDispatch()
  const mode        = useAppSelector((s) => s.theme.mode)
  const isDark      = mode === 'dark'
  const activeId    = useScrollSpy(SECTION_IDS)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Detect if user has scrolled at all
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 })

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setDrawerOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setDrawerOpen(false)
    if (href.startsWith('#')) {
      const id = href.slice(1)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ── AppBar ──────────────────────────────────────────── */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height:          NAVBAR_HEIGHT,
          justifyContent:  'center',
          backgroundColor: scrolled
            ? alpha(isDark ? '#0f0f13' : '#ffffff', 0.85)
            : 'transparent',
          backdropFilter:  scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom:    scrolled
            ? `1px solid var(--color-border)`
            : '1px solid transparent',
          transition:      'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          boxShadow:       'none',
        }}
      >
        <Toolbar
          sx={{
            maxWidth:      'var(--container-max-w)',
            width:         '100%',
            mx:            'auto',
            px:            { xs: '1.25rem', sm: '1.5rem', lg: '2rem' },
            display:       'flex',
            alignItems:    'center',
            justifyContent:'space-between',
            minHeight:     `${NAVBAR_HEIGHT}px !important`,
          }}
        >
          {/* ── Logo ──────────────────────────────────────── */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Box
              component="a"
              href="#home"
              onClick={() => handleNavClick('#home')}
              sx={{
                display:        'flex',
                alignItems:     'center',
                gap:            '0.5rem',
                textDecoration: 'none',
                cursor:         'pointer',
              }}
            >
              {/* Logo icon */}
              <Box
                sx={{
                  width:           32,
                  height:          32,
                  borderRadius:    '8px',
                  background:      'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  flexShrink:      0,
                }}
              >
                <Code2 size={16} color="#fff" />
              </Box>

              {/* Name */}
              <Typography
                sx={{
                  fontWeight:    800,
                  fontSize:      '1.1rem',
                  letterSpacing: '-0.03em',
                  color:         'text.primary',
                  lineHeight:    1,
                }}
              >
                {personalInfo.name.split(' ')[1]}
                <Box component="span" sx={{ color: 'primary.main' }}> .</Box>
              </Typography>
            </Box>
          </MotionBox>

          {/* ── Desktop Nav Links ──────────────────────────── */}
          <Box
            component="nav"
            sx={{
              display:    { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap:        '0.25rem',
            }}
          >
            {NAV_ITEMS.map((item, i) => {
              const id        = item.href.replace('#', '')
              const isActive  = activeId === id

              return (
                <MotionBox
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                >
                  <Button
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      position:        'relative',
                      color:            isActive ? 'primary.main' : 'text.secondary',
                      fontWeight:       isActive ? 600 : 400,
                      fontSize:         '0.875rem',
                      px:               '0.75rem',
                      py:               '0.4rem',
                      minWidth:         'unset',
                      borderRadius:     '6px',
                      backgroundColor:  isActive
                        ? alpha('#6366f1', isDark ? 0.12 : 0.07)
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: alpha('#6366f1', isDark ? 0.1 : 0.06),
                        color:           'text.primary',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.label}

                    {/* Active dot indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          style={{
                            position:        'absolute',
                            bottom:          4,
                            left:            '50%',
                            transform:       'translateX(-50%)',
                            width:           4,
                            height:          4,
                            borderRadius:    '50%',
                            backgroundColor: 'var(--color-primary)',
                            display:         'block',
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </Button>
                </MotionBox>
              )
            })}
          </Box>

          {/* ── Right Actions ──────────────────────────────── */}
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            {/* Dark mode toggle */}
            <Tooltip title={isDark ? 'Light mode' : 'Dark mode'} placement="bottom">
              <IconButton
                onClick={() => dispatch(toggleTheme())}
                size="small"
                sx={{
                  color:           'text.secondary',
                  backgroundColor: 'var(--color-bg-3)',
                  border:          '1px solid var(--color-border)',
                  width:           36,
                  height:          36,
                  '&:hover': {
                    backgroundColor: 'var(--color-bg-2)',
                    color:           'text.primary',
                  },
                }}
              >
                {isDark
                  ? <Sun size={16} />
                  : <Moon size={16} />
                }
              </IconButton>
            </Tooltip>

            {/* Resume button — desktop only */}
            <Button
              href={personalInfo.resume}
              download
              variant="outlined"
              size="small"
              startIcon={<Download size={14} />}
              sx={{
                display:      { xs: 'none', md: 'inline-flex' },
                borderRadius: '8px',
                fontSize:     '0.8rem',
                fontWeight:   600,
                px:           '1rem',
                borderColor:  'var(--color-border-strong)',
                color:        'text.primary',
                '&:hover': {
                  borderColor:     'primary.main',
                  color:           'primary.main',
                  backgroundColor: alpha('#6366f1', 0.05),
                },
              }}
            >
              Resume
            </Button>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display:         { xs: 'flex', md: 'none' },
                color:           'text.primary',
                backgroundColor: 'var(--color-bg-3)',
                border:          '1px solid var(--color-border)',
                width:           36,
                height:          36,
              }}
            >
              <Menu size={18} />
            </IconButton>
          </MotionBox>
        </Toolbar>
      </AppBar>

      {/* ── Mobile Drawer ──────────────────────────────────── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width:           '100%',
            maxWidth:        320,
            backgroundColor: 'var(--color-bg)',
            backgroundImage: 'none',
            borderLeft:      '1px solid var(--color-border)',
            p:               '1.5rem',
          },
        }}
      >
        {/* Drawer header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.03em' }}>
            {personalInfo.name.split(' ')[1]}
            <Box component="span" sx={{ color: 'primary.main' }}>.</Box>
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <X size={20} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Drawer nav links */}
        <List disablePadding>
          {NAV_ITEMS.map((item) => {
            const id       = item.href.replace('#', '')
            const isActive = activeId === id

            return (
              <ListItem key={item.href} disablePadding sx={{ mb: '0.25rem' }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    borderRadius:    '10px',
                    py:              '0.75rem',
                    px:              '1rem',
                    backgroundColor: isActive ? alpha('#6366f1', 0.08) : 'transparent',
                    '&:hover': { backgroundColor: alpha('#6366f1', 0.06) },
                  }}
                >
                  <ListItemText
                    primary={(
                      <Typography
                        component="span"
                        sx={{
                          fontWeight: isActive ? 600 : 400,
                          color:      isActive ? 'primary.main' : 'text.primary',
                          fontSize:   '1.05rem',
                        }}
                      >
                        {item.label}
                      </Typography>
                    )}
                  />
                  {isActive && (
                    <Box
                      sx={{
                        width:  6, height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Bottom actions in drawer */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            href={personalInfo.resume}
            download
            variant="outlined"
            fullWidth
            startIcon={<Download size={16} />}
            sx={{ borderRadius: '10px', py: '0.65rem', fontWeight: 600 }}
          >
            Download Resume
          </Button>
          <Button
            onClick={() => { dispatch(toggleTheme()); setDrawerOpen(false) }}
            variant="text"
            fullWidth
            startIcon={isDark ? <Sun size={16} /> : <Moon size={16} />}
            sx={{
              borderRadius: '10px',
              py:           '0.65rem',
              color:        'text.secondary',
              fontWeight:   400,
            }}
          >
            {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </Box>
      </Drawer>
    </>
  )
}