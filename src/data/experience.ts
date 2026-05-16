import type { Experience } from '@/types'

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — replace with your real experience
// ─────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  // ── Work ──────────────────────────────────────────────────
  {
    id:          'ramsstacks',
    type:        'work',
    role:        'React Developer',
    company:     'RamsStacks',
    location:    'Lahore, Pakistan',
    startDate:   'Jan 2025',
    endDate:     'Present',
    current:     true,
    description: 'Building complex, high-performance user interfaces and managing global state for production web applications.',
    highlights: [
      'Built complex, high-performance UIs using React.js, TypeScript, and JavaScript',
      'Implemented global state management with Redux for predictable data flow',
      'Designed fully responsive applications using Tailwind CSS',
      'Integrated real-time data handling with Supabase',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Supabase'],
  },
  {
    id:          'synergic',
    type:        'work',
    role:        'Full Stack Developer',
    company:     'Synergic Corporate Solution',
    location:    'Lahore, Pakistan',
    startDate:   'May 2023',
    endDate:     'Jun 2024',
    current:     false,
    description: 'Developed and maintained responsive web applications, integrated REST APIs, and built reusable component architecture.',
    highlights: [
      'Developed and maintained responsive web applications using React.js and Redux',
      'Integrated REST APIs for seamless data flow and optimized performance',
      'Implemented reusable components for scalable front-end architecture',
      'Worked in an agile team with bi-weekly sprint cycles',
    ],
    technologies: ['React.js', 'Redux', 'Node.js', 'REST APIs', 'MongoDB'],
  },
  {
    id:          'gdd',
    type:        'work',
    role:        'Frontend Developer Intern',
    company:     'GD&D Software House',
    location:    'Lahore, Pakistan',
    startDate:   'Jun 2021',
    endDate:     'Sep 2021',
    current:     false,
    description: 'Developed projects and collaborated with team members to enhance UI/UX and improve application performance.',
    highlights: [
      'Developed a to-do list and quiz application from scratch',
      'Collaborated with team members on UI/UX improvements',
      'Worked with HTML, CSS, JavaScript, and Bootstrap',
      'Gained hands-on experience in a professional development environment',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },

  // ── Education ─────────────────────────────────────────────
  {
    id:          'vu',
    type:        'education',
    role:        'BS Software Engineering',
    company:     'Virtual University of Pakistan',
    location:    'Pakistan (Remote)',
    startDate:   '2019',
    endDate:     '2024',
    current:     false,
    description: 'Bachelor of Science in Software Engineering — 5 year program covering software design, algorithms, databases, and systems.',
    highlights: [
      'Completed 4-year BS Software Engineering program',
      'Studied software design, algorithms, databases, and distributed systems',
      'Final year project: Full-stack web application',
    ],
    technologies: [],
  },

  // ── Certifications ────────────────────────────────────────
  {
    id:          'cert-mern',
    type:        'certification',
    role:        'MERN Stack Development',
    company:     'UMT PIAIC',
    location:    'Lahore, Pakistan',
    startDate:   '2023',
    endDate:     '2023',
    current:     false,
    description: 'Intensive MERN Stack Development certification covering MongoDB, Express, React, and Node.js.',
    highlights: [
      'MongoDB, Express.js, React.js, Node.js',
      'REST API design and integration',
      'Authentication and deployment',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    id:          'cert-web3',
    type:        'certification',
    role:        'Web 3.0 Development',
    company:     'UMT PIAIC',
    location:    'Lahore, Pakistan',
    startDate:   '2024',
    endDate:     '2024',
    current:     false,
    description: 'Web 3.0 fundamentals including blockchain concepts and decentralised application development.',
    highlights: [
      'Blockchain fundamentals',
      'Decentralised application concepts',
      'Smart contract basics',
    ],
    technologies: ['Web3', 'Blockchain'],
  },
  {
    id:          'cert-ai',
    type:        'certification',
    role:        'Artificial Intelligence (Python, ML, DL)',
    company:     'UMT PIAIC',
    location:    'Lahore, Pakistan',
    startDate:   '2024',
    endDate:     '2024',
    current:     false,
    description: 'Artificial Intelligence certification covering Python, Machine Learning, and Deep Learning fundamentals.',
    highlights: [
      'Python for data science',
      'Machine learning algorithms',
      'Deep learning fundamentals with neural networks',
    ],
    technologies: ['Python', 'Machine Learning', 'Deep Learning'],
  },
]