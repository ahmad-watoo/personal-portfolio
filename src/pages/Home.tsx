import { Box } from '@mui/material'
import { Navbar, Footer } from '@/components/layout'
import { NAVBAR_HEIGHT } from '@/constants'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <Box component="main" sx={{ flex: 1, pt: `${NAVBAR_HEIGHT}px` }}>
        {/*
          Sections added phase by phase:
          Phase 3: <HeroSection />  <AboutSection />
          Phase 4: <ProjectsSection />  <ExperienceSection />
          Phase 5: <ContactSection />
        */}

        {/* Phase 2 placeholder */}
        <Box
          sx={{
            minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '1rem', textAlign: 'center', px: '1.5rem',
          }}
        >
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            px: '1rem', py: '0.4rem', borderRadius: '100px',
            border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-2)', mb: '1rem',
          }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'primary.main' }} />
            <Box component="span" sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 500 }}>
              Phase 2 complete — Navbar, Footer & UI Primitives ✅
            </Box>
          </Box>

          <Box component="h1" sx={{
            fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800,
            letterSpacing: '-0.04em', lineHeight: 1.1, color: 'text.primary', m: 0,
          }}>
            Ready for{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Phase 3
            </Box>
          </Box>

          <Box component="p" sx={{ color: 'text.secondary', m: 0, fontSize: '1.05rem' }}>
            Hero &amp; About sections are next.
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}