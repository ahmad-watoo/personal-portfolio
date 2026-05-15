import type { Project } from '@/types'

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — replace with your real projects
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id:          'financeflow',
    title:       'FinanceFlow Dashboard',
    tagline:     'Real-time personal finance tracker with bank sync.',
    description: 'A comprehensive personal finance application with real-time bank synchronization, spending analytics, and budget goal tracking. Built for scale and currently used by 1,000+ active users.',
    thumbnail:   '/images/projects/financeflow.png',
    tags:        ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    category:    'Full-Stack',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',    url: '#', type: 'demo'   },
      { label: 'Source Code',  url: '#', type: 'github' },
    ],
    highlights: [
      'Real-time bank sync via Plaid API',
      'Interactive D3 spending charts',
      'Budget goal tracking with push notifications',
      'Multi-currency support',
    ],
  },
  {
    id:          'aiassist',
    title:       'AIAssist Chat App',
    tagline:     'AI-powered productivity chat with custom knowledge bases.',
    description: 'An AI-powered productivity chat application with custom knowledge bases, multi-session support, and markdown rendering. Integrates with OpenAI GPT-4.',
    thumbnail:   '/images/projects/aiassist.png',
    tags:        ['Next.js', 'OpenAI', 'Tailwind', 'Prisma', 'Vercel AI SDK'],
    category:    'AI / ML',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: '#', type: 'demo'   },
      { label: 'Source Code', url: '#', type: 'github' },
    ],
    highlights: [
      'Custom knowledge base ingestion',
      'Multi-session conversation history',
      'Markdown + code syntax highlighting',
      'Streaming responses via Vercel AI SDK',
    ],
  },
  {
    id:          'shopkit',
    title:       'ShopKit E-Commerce',
    tagline:     'Full-featured storefront with Stripe payments.',
    description: 'A full-featured e-commerce storefront with cart management, Stripe payments, inventory tracking, and a comprehensive admin dashboard.',
    thumbnail:   '/images/projects/shopkit.png',
    tags:        ['React', 'Stripe', 'MongoDB', 'Express', 'Cloudinary'],
    category:    'Full-Stack',
    status:      'live',
    featured:    true,
    year:        2023,
    links: [
      { label: 'Live Demo',   url: '#', type: 'demo'   },
      { label: 'Source Code', url: '#', type: 'github' },
    ],
    highlights: [
      'Stripe checkout with webhook sync',
      'Real-time inventory management',
      'Admin dashboard with analytics',
      'Image optimization via Cloudinary',
    ],
  },
  {
    id:          'maptrack',
    title:       'MapTrack Fleet App',
    tagline:     'Real-time GPS fleet tracking for logistics.',
    description: 'Real-time GPS fleet tracking dashboard with route optimization, driver metrics, and alert notifications. Used by a mid-size logistics company.',
    thumbnail:   '/images/projects/maptrack.png',
    tags:        ['React', 'Mapbox', 'Express', 'WebSockets', 'PostgreSQL'],
    category:    'Frontend',
    status:      'live',
    featured:    false,
    year:        2023,
    links: [
      { label: 'Live Demo',   url: '#', type: 'demo'   },
      { label: 'Source Code', url: '#', type: 'github' },
    ],
    highlights: [
      'Live GPS tracking with sub-second updates',
      'Route optimization algorithm',
      'Driver performance metrics',
      'Geofence alert system',
    ],
  },
  {
    id:          'noteflow',
    title:       'NoteFlow PWA',
    tagline:     'Collaborative note-taking with real-time sync.',
    description: 'A collaborative note-taking PWA with real-time sync, rich text editing, tags, and full offline support. Rated 5 stars on Product Hunt.',
    thumbnail:   '/images/projects/noteflow.png',
    tags:        ['Vue.js', 'Firebase', 'PWA', 'TipTap', 'Pinia'],
    category:    'Frontend',
    status:      'live',
    featured:    false,
    year:        2022,
    links: [
      { label: 'Live Demo',   url: '#', type: 'demo'   },
      { label: 'Source Code', url: '#', type: 'github' },
    ],
    highlights: [
      'Offline-first with service workers',
      'Real-time collaboration via Firebase',
      'Rich text editor with TipTap',
      '5-star Product Hunt launch',
    ],
  },
  {
    id:          'designos',
    title:       'DesignOS Whiteboard',
    tagline:     'Multiplayer collaborative whiteboard — Figma-inspired.',
    description: 'A multiplayer collaborative whiteboard with freehand drawing, shapes, sticky notes, and real-time cursor presence. Inspired by Figma\'s multiplayer UX.',
    thumbnail:   '/images/projects/designos.png',
    tags:        ['React', 'Canvas API', 'WebSockets', 'Node.js', 'Redis'],
    category:    'Full-Stack',
    status:      'wip',
    featured:    false,
    year:        2024,
    links: [
      { label: 'Source Code', url: '#', type: 'github' },
    ],
    highlights: [
      'Canvas-based drawing engine',
      'Real-time cursor presence via WebSockets',
      'Shape, pen, and sticky note tools',
      'Undo/redo with operation history',
    ],
  },
]

// Helper — get only featured projects
export const featuredProjects = projects.filter(p => p.featured)

// Helper — get unique categories for filter tabs
export const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]