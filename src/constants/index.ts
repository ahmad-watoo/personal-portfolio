import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export const NAVBAR_HEIGHT            = 72
export const SECTION_IDS              = NAV_ITEMS.map(n => n.href.replace('#', ''))
export const RESUME_URL               = '/M_Ahmad_CV.pdf'
export const EMAIL                    = 'pakmuhammadahmad8@gmail.com'
export const SITE_URL                 = 'https://muhammadahmad.dev'
export const STAGGER_CHILD_DELAY      = 0.1
export const ENTRANCE_DURATION        = 0.6