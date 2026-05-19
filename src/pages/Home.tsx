import { Box } from '@mui/material'
import { Navbar, Footer } from '@/components/layout'
import HeroSection       from '@/sections/HeroSection'
import AboutSection      from '@/sections/AboutSection'
import SkillsSection     from '@/sections/SkillsSection'
import ProjectsSection   from '@/sections/ProjectsSection'
import ExperienceSection from '@/sections/ExperienceSection'
import ContactSection    from '@/sections/ContactSection'
import { NAVBAR_HEIGHT } from '@/constants'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, pt: `${NAVBAR_HEIGHT}px` }}>
     
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  )
}