// ─────────────────────────────────────────────────────────────
//  src/types/index.ts
//  Single source of truth for all data types in the portfolio.
//  Update this file first whenever you add a new data field.
// ─────────────────────────────────────────────────────────────

// ── Theme ─────────────────────────────────────────────────────
export type ThemeMode = 'light' | 'dark'

// ── Navigation ───────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string       // anchor id e.g. "#about" or a route "/blog"
  external?: boolean
}

// ── Skills ───────────────────────────────────────────────────
export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'devops'
  | 'design'
  | 'other'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: number        // 1–100
  icon?: string        // URL or component key
}

// ── Projects ─────────────────────────────────────────────────
export type ProjectStatus = 'live' | 'wip' | 'archived'

export interface ProjectLink {
  label: string
  url: string
  type: 'demo' | 'github' | 'case-study' | 'other'
}

export interface Project {
  id: string
  title: string
  tagline: string        // One-liner for cards
  description: string    // Longer text for modal/detail
  thumbnail: string      // Image URL or path
  tags: string[]         // Tech tags e.g. ["React", "Node.js"]
  category: string       // Filter category e.g. "Full-Stack", "Frontend"
  status: ProjectStatus
  featured: boolean
  links: ProjectLink[]
  year: number
  highlights?: string[]  // Bullet points for the detail view
}

// ── Experience ───────────────────────────────────────────────
export type ExperienceType = 'work' | 'education' | 'freelance'

export interface Experience {
  id: string
  type: ExperienceType
  role: string
  company: string
  companyUrl?: string
  location: string
  startDate: string    // "Jan 2022" format
  endDate: string      // "Present" or "Dec 2023"
  current: boolean
  description: string
  highlights: string[]
  technologies?: string[]
  logo?: string
}

// ── About / Personal ─────────────────────────────────────────
export interface SocialLink {
  platform: string
  url: string
  icon: string   // lucide icon name
}

export interface PersonalInfo {
  name: string
  title: string           // "Full-Stack Developer"
  tagline: string         // Hero headline
  bio: string[]           // Array of paragraphs
  location: string
  email: string
  availableForWork: boolean
  avatar: string          // Image URL
  resume: string          // PDF URL
  socials: SocialLink[]
}

// ── Statistics (hero section) ─────────────────────────────────
export interface Stat {
  label: string
  value: string           // "3+" or "20+"
  suffix?: string
}

// ── Contact Form ──────────────────────────────────────────────
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}