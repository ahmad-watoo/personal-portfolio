import type { NavItem } from '@/types'

// ── Navigation items ─────────────────────────────────────────
// href uses anchor IDs — matches section id attributes in the DOM
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

// ── Misc constants ────────────────────────────────────────────
export const NAVBAR_HEIGHT   = 72         // px — also set in globals.css scroll-padding-top
export const SECTION_IDS     = NAV_ITEMS.map(n => n.href.replace('#', ''))
export const RESUME_URL      = '/resume.pdf'
export const EMAIL            = 'alex@example.com'
export const SITE_URL        = 'https://alexcarter.dev'

// ── Animation delays ──────────────────────────────────────────
// Use these in Framer Motion variants so stagger is consistent
export const STAGGER_CHILD_DELAY = 0.1   // seconds between staggered children
export const ENTRANCE_DURATION   = 0.6   // seconds for slide-up entrance