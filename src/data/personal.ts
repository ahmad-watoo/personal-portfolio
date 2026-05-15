import type { PersonalInfo, Stat } from '@/types'

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update all personal info across the site.
//
//  social icon values must match keys in SOCIAL_ICONS map
//  inside Footer.tsx and Navbar.tsx:
//    "GitHub" | "LinkedIn" | "Twitter" | "Email"
// ─────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name:             'Muhammad Ahmad',
  title:            'Full-Stack Developer',
  tagline:          'Building digital things that matter.',
  bio: [
    "I'm a full-stack developer with 2+ years of experience crafting web applications that are fast, scalable, and a joy to use.",
    "Whether it's a consumer product, internal tooling, or a complex API integration — I bring structure, creativity, and care to every project.",
    "When I'm not coding, I'm exploring new technologies, contributing to open source, or sketching UI concepts.",
  ],
  location:         'New Iqbal park Lahore, Pakistan',
  email:            'pakmuhammadahmad8@gmail.com',
  availableForWork: true,
  avatar:           '/images/avatar.jpg',
  resume:           './ahmad-resume.pdf',
  socials: [
    { platform: 'GitHub',   url: 'https://github.com/ahmad-watoo',     icon: 'GitHub'   },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-ahmad-5192b6220/', icon: 'LinkedIn' },
    { platform: 'Facebook',  url: 'https://www.facebook.com/profile.php?id=100091976807098',     icon: 'Facebook'  },
  ],
}

export const heroStats: Stat[] = [
  { label: 'Years Experience', value: '2',  suffix: '+' },
  { label: 'Projects Shipped', value: '20', suffix: '+' },
  { label: 'Happy Clients',    value: '12', suffix: '+' },
]