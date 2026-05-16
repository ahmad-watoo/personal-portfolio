import { useRef, useState } from 'react'
import {
  Box, Typography, TextField, Button,
   CircularProgress,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useInView } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { SectionWrapper, SectionHeading, ScrollReveal } from '@/components/ui'
import type { ContactFormData } from '@/types'

// ── Zod validation schema ─────────────────────────────────────
const schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName:  z.string().min(2, 'Last name must be at least 2 characters'),
  email:     z.string().email('Please enter a valid email address'),
  subject:   z.string().min(4, 'Subject must be at least 4 characters'),
  message:   z.string().min(20, 'Message must be at least 20 characters'),
})

const CONTACT_CHANNELS = [
  {
    icon:  <Mail size={20} />,
    label: 'Email',
    value: personalInfo.email,
    href:  `mailto:${personalInfo.email}`,
    color: '#6366f1',
  },
  {
    icon:  <Phone size={20} />,
    label: 'Phone',
    value: personalInfo.phone ?? '',
    href:  `tel:${personalInfo.phone ?? ''}`,
    color: '#06b6d4',
  },
  {
    icon:  <MapPin size={20} />,
    label: 'Location',
    value: personalInfo.location,
    href:  'https://maps.google.com/?q=Lahore,Pakistan',
    color: '#22c55e',
  },
]

export default function ContactSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: ContactFormData) => {
    setLoading(true)
    // Simulate API call — replace with EmailJS or your backend
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    reset()
  }

  return (
    <SectionWrapper id="contact" alt>
      <Box ref={ref}>
        <SectionHeading
          label="Contact"
          title="Let's work together."
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you. I typically respond within 24 hours."
          centered
          inView={inView}
        />

        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1.6fr' },
            gap:                 { xs: '3rem', lg: '4rem' },
            alignItems:          'start',
          }}
        >
          {/* ── Left: contact info ───────────────────────── */}
          <Box>
            {/* Availability badge */}
            <ScrollReveal>
              {personalInfo.availableForWork && (
                <Box
                  sx={{
                    display:         'flex',
                    alignItems:      'center',
                    gap:             '0.75rem',
                    p:               '1rem 1.25rem',
                    borderRadius:    '12px',
                    border:          `1px solid ${alpha('#22c55e', 0.25)}`,
                    backgroundColor: alpha('#22c55e', 0.06),
                    mb:              '2rem',
                  }}
                >
                  <Box sx={{ position: 'relative', width: 10, height: 10, flexShrink: 0 }}>
                    <Box sx={{
                      position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#22c55e',
                      animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                      '@keyframes ping': { '0%': { transform: 'scale(1)', opacity: 0.75 }, '75%, 100%': { transform: 'scale(2)', opacity: 0 } },
                    }} />
                    <Box sx={{ position: 'relative', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#22c55e' }}>
                      Available for opportunities
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      Open to full-time roles &amp; freelance projects
                    </Typography>
                  </Box>
                </Box>
              )}
            </ScrollReveal>

            {/* Contact channels */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', mb: '2rem' }}>
              {CONTACT_CHANNELS.map((ch, i) => (
                <ScrollReveal key={ch.label} delay={i * 0.1}>
                  <Box
                    component="a"
                    href={ch.href}
                    target={ch.label === 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    sx={{
                      display:         'flex',
                      alignItems:      'center',
                      gap:             '1rem',
                      p:               '1rem 1.25rem',
                      borderRadius:    '12px',
                      border:          '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg)',
                      textDecoration:  'none',
                      transition:      'all 0.25s ease',
                      '&:hover': {
                        borderColor: alpha(ch.color, 0.4),
                        backgroundColor: alpha(ch.color, 0.04),
                        transform:   'translateX(4px)',
                      },
                    }}
                  >
                    <Box sx={{
                      width:          42,
                      height:         42,
                      borderRadius:   '10px',
                      backgroundColor:alpha(ch.color, 0.1),
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      color:          ch.color,
                      flexShrink:     0,
                    }}>
                      {ch.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'text.secondary', mb: '0.1rem' }}>
                        {ch.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, color: 'text.primary' }}>
                        {ch.value}
                      </Typography>
                    </Box>
                  </Box>
                </ScrollReveal>
              ))}
            </Box>

            {/* Quick note */}
            <ScrollReveal delay={0.3}>
              <Box sx={{
                p:               '1.25rem',
                borderRadius:    '12px',
                border:          '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
              }}>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: '0.5rem' }}>
                  💬 Quick note
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  I'm currently based in Lahore and open to both remote and on-site roles across Pakistan and globally.
                  The best way to reach me is via email.
                </Typography>
              </Box>
            </ScrollReveal>
          </Box>

          {/* ── Right: Contact form ──────────────────────── */}
          <ScrollReveal delay={0.15}>
            <Box
              sx={{
                p:               { xs: '1.5rem', md: '2rem' },
                borderRadius:    '20px',
                border:          '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                boxShadow:       'var(--shadow-md)',
              }}
            >
              {submitted ? (
                // Success state
                <Box sx={{ textAlign: 'center', py: '2rem' }}>
                  <Box sx={{
                    width:          64,
                    height:         64,
                    borderRadius:   '50%',
                    backgroundColor:alpha('#22c55e', 0.1),
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    mx:             'auto',
                    mb:             '1.5rem',
                  }}>
                    <CheckCircle size={32} color="#22c55e" />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', mb: '0.5rem' }}>
                    Message sent!
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: '1.5rem' }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setSubmitted(false)}
                    sx={{ borderRadius: '8px', fontWeight: 600 }}
                  >
                    Send another message
                  </Button>
                </Box>
              ) : (
                // Form
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: '1.5rem', color: 'text.primary' }}>
                    Send a message
                  </Typography>

                  {/* Name row */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '1rem', mb: '1rem' }}>
                    <TextField
                      label="First Name"
                      placeholder="Muhammad"
                      {...register('firstName')}
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      sx={inputSx}
                    />
                    <TextField
                      label="Last Name"
                      placeholder="Ahmad"
                      {...register('lastName')}
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                      sx={inputSx}
                    />
                  </Box>

                  <TextField
                    label="Email"
                    placeholder="you@example.com"
                    type="email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{ ...inputSx, mb: '1rem' }}
                  />

                  <TextField
                    label="Subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    {...register('subject')}
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                    sx={{ ...inputSx, mb: '1rem' }}
                  />

                  <TextField
                    label="Message"
                    placeholder="Tell me about your project or opportunity..."
                    multiline
                    rows={5}
                    {...register('message')}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={{ ...inputSx, mb: '1.5rem' }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <Send size={16} />}
                    sx={{
                      borderRadius: '10px',
                      py:           '0.85rem',
                      fontWeight:   700,
                      fontSize:     '0.95rem',
                      background:   'linear-gradient(135deg, var(--color-primary) 0%, #4f46e5 100%)',
                      boxShadow:    'none',
                      '&:hover':    { boxShadow: '0 8px 24px rgba(99,102,241,0.35)', transform: 'translateY(-1px)' },
                      '&:disabled': { opacity: 0.7 },
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              )}
            </Box>
          </ScrollReveal>
        </Box>
      </Box>
    </SectionWrapper>
  )
}

const inputSx = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    fontSize: '0.9rem',
    '& fieldset': { borderColor: 'var(--color-border)' },
    '&:hover fieldset': { borderColor: 'var(--color-primary)' },
  },
  '& .MuiInputLabel-root': { fontSize: '0.9rem' },
}