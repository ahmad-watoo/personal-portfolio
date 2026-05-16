import type { Skill } from '@/types'

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — add/remove skills, change levels (1-100)
// ─────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  // Frontend
  { id: 'react',       name: 'React.js',          category: 'frontend', level: 92 },
  { id: 'nextjs',      name: 'Next.js',            category: 'frontend', level: 80 },
  { id: 'typescript',  name: 'TypeScript',         category: 'frontend', level: 85 },
  { id: 'javascript',  name: 'JavaScript (ES6+)',  category: 'frontend', level: 90 },
  { id: 'redux',       name: 'Redux / RTK',        category: 'frontend', level: 88 },
  { id: 'tailwind',    name: 'Tailwind CSS',       category: 'frontend', level: 88 },
  { id: 'bootstrap',   name: 'Bootstrap',          category: 'frontend', level: 85 },
  { id: 'antd',        name: 'Ant Design',         category: 'frontend', level: 80 },
  { id: 'html',        name: 'HTML5 / CSS3',       category: 'frontend', level: 95 },

  // Backend
  { id: 'nodejs',      name: 'Node.js',            category: 'backend',  level: 80 },
  { id: 'express',     name: 'Express.js',         category: 'backend',  level: 78 },
  { id: 'mongodb',     name: 'MongoDB',            category: 'backend',  level: 80 },
  { id: 'restapi',     name: 'REST APIs',          category: 'backend',  level: 85 },
  { id: 'supabase',    name: 'Supabase',           category: 'backend',  level: 72 },
  { id: 'reactquery',  name: 'React Query',        category: 'backend',  level: 78 },

  // DevOps / Tools
  { id: 'git',         name: 'Git / GitHub',       category: 'devops',   level: 88 },
  { id: 'agile',       name: 'Agile / Scrum',      category: 'devops',   level: 80 },
  { id: 'unittest',    name: 'Unit Testing',       category: 'devops',   level: 70 },
]