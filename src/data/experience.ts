import type { Experience } from '@/types'

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — replace with your real experience
// ─────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id:          'senior-dev',
    type:        'work',
    role:        'Senior Frontend Developer',
    company:     'TechCorp Inc.',
    companyUrl:  'https://techcorp.example.com',
    location:    'New York, NY (Remote)',
    startDate:   'Jan 2023',
    endDate:     'Present',
    current:     true,
    description: 'Leading frontend architecture and development for a SaaS analytics platform serving 50,000+ users.',
    highlights: [
      'Led migration from Create React App to Vite, cutting build time by 70%',
      'Built a reusable component library adopted by 4 product teams',
      'Mentored 2 junior developers through structured code reviews',
      'Improved Lighthouse score from 62 to 96 through performance optimizations',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS'],
  },
  {
    id:          'mid-dev',
    type:        'work',
    role:        'Full-Stack Developer',
    company:     'StartupXYZ',
    companyUrl:  'https://startupxyz.example.com',
    location:    'San Francisco, CA',
    startDate:   'Jun 2021',
    endDate:     'Dec 2022',
    current:     false,
    description: 'Worked as the second engineer at an early-stage startup, building core product features from scratch.',
    highlights: [
      'Built the entire checkout and billing system with Stripe integration',
      'Designed and implemented a PostgreSQL schema for multi-tenant SaaS',
      'Reduced API response time by 40% through Redis caching',
      'Shipped 3 major product versions in 18 months',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    id:          'freelance',
    type:        'freelance',
    role:        'Freelance Web Developer',
    company:     'Self-Employed',
    location:    'Remote',
    startDate:   'Jan 2021',
    endDate:     'Present',
    current:     true,
    description: 'Building websites and web apps for clients across industries including finance, healthcare, and e-commerce.',
    highlights: [
      '12+ projects delivered across e-commerce, SaaS, and marketing sites',
      'Average client rating: 4.9/5 on Upwork',
      'Specializing in React, TypeScript, and Node.js',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'],
  },
  {
    id:          'education',
    type:        'education',
    role:        'B.Sc. Computer Science',
    company:     'State University',
    location:    'New York, NY',
    startDate:   'Sep 2017',
    endDate:     'May 2021',
    current:     false,
    description: 'Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction.',
    highlights: [
      'GPA: 3.8 / 4.0 — Graduated with Honors',
      'Senior thesis: "Accessibility in Modern Web Applications"',
      'President of the Computer Science Student Society',
      'Teaching Assistant for Data Structures & Algorithms',
    ],
    technologies: [],
  },
]