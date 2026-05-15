import type { Skill } from '@/types'

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — add/remove skills, change levels (1-100)
// ─────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  // Frontend
  { id: 'react',       name: 'React / Next.js', category: 'frontend', level: 92 },
  { id: 'typescript',  name: 'TypeScript',       category: 'frontend', level: 88 },
  { id: 'tailwind',    name: 'Tailwind CSS',     category: 'frontend', level: 90 },
  { id: 'framer',      name: 'Framer Motion',    category: 'frontend', level: 80 },

  // Backend
  { id: 'nodejs',      name: 'Node.js / Express',  category: 'backend', level: 85 },
  { id: 'postgresql',  name: 'PostgreSQL',          category: 'backend', level: 80 },
  { id: 'mongodb',     name: 'MongoDB',             category: 'backend', level: 75 },
  { id: 'python',      name: 'Python / FastAPI',    category: 'backend', level: 70 },

  // DevOps
  { id: 'docker',      name: 'Docker',      category: 'devops', level: 72 },
  { id: 'aws',         name: 'AWS',         category: 'devops', level: 68 },
  { id: 'git',         name: 'Git / CI/CD', category: 'devops', level: 90 },

  // Design
  { id: 'figma',       name: 'Figma',       category: 'design', level: 82 },
  { id: 'ux',          name: 'UI/UX Design',category: 'design', level: 78 },
]