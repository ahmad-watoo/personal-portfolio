// cat > /mnt/user-data/outputs/portfolio-v2/src/data/projects.ts << 'EOF'
import type { Project } from '@/types'

// ─────────────────────────────────────────────────────────────
//  Real projects — Muhammad Ahmad
//  Thumbnails: place your images in public/images/projects/
//  Naming: fitness-club.png, nexcent.png, finance-bank.png,
//          nutrioscale.png, elixir.png, widian.png,
//          planer-ai.png, data-scraping.png, kaza-landing.png,
//          kazaswap.png, aiquill.png, mochi-trade.png, ai-chatbot.png
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ── 1 ────────────────────────────────────────────────────
  {
    id:          'fitness-club',
    title:       'Fitness Club Landing Page',
    tagline:     'Animated fitness brand landing page built from Figma.',
    description: 'A high-performance fitness club landing page built with React, Tailwind CSS, and Framer Motion animations. Includes smooth scroll sections, circular progress bars for stats, and fully responsive layout across all devices.',
    thumbnail:   '/images/projects/fitness-club.png',
    tags:        ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    category:    'Landing Page',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://landing-page-one-henna-psi.vercel.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/LandingPageOne', type: 'github' },
    ],
    highlights: [
      'Built from offline Figma design with pixel-perfect accuracy',
      'Framer Motion scroll and entrance animations throughout',
      'Circular progress bar for statistics display',
      'Fully responsive — mobile, tablet, and desktop',
    ],
  },

  // ── 2 ────────────────────────────────────────────────────
  {
    id:          'nexcent',
    title:       'Nexcent Homepage',
    tagline:     'Modern SaaS homepage with countup, sliders, and dark UI.',
    description: 'A fully responsive SaaS-style homepage for Nexcent, built from a community Figma design. Features animated number countups, Swiper carousels, Framer Motion animations, and a clean TypeScript codebase.',
    thumbnail:   '/images/projects/nexcent.png',
    tags:        ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Swiper'],
    category:    'Landing Page',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://home-page-one.netlify.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/home-page-one', type: 'github' },
      { label: 'Figma',       url: 'https://www.figma.com/design/bQKZNsn7HWVG2JRjtCPELA', type: 'case-study' },
    ],
    highlights: [
      'Built from a community Figma UI design',
      'react-countup for animated statistics',
      'Swiper carousel for testimonials and slides',
      'React Icons for consistent iconography',
    ],
  },

  // ── 3 ────────────────────────────────────────────────────
  {
    id:          'finance-bank',
    title:       'Finance Bank Landing Page',
    tagline:     'Finance brand website with dark/light mode and animations.',
    description: 'A sleek finance and banking landing page built with React + TypeScript. Implements Tailwind CSS dark/light mode theming, Framer Motion animations, and Tailwind CSS custom animations for a premium feel.',
    thumbnail:   '/images/projects/finance-bank.png',
    tags:        ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Dark Mode'],
    category:    'Landing Page',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://landing-page-two-finance.netlify.app/#', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/LandingPageTwo', type: 'github' },
    ],
    highlights: [
      'Tailwind CSS dark/light mode theming',
      'Framer Motion entrance and scroll animations',
      'Built from Figma design with full responsiveness',
      'Clean TypeScript architecture',
    ],
  },

  // ── 4 ────────────────────────────────────────────────────
  {
    id:          'nutrioscale',
    title:       'NutrioScale Calories App',
    tagline:     'Nutrition tracking landing page with charts, sliders, and dark mode.',
    description: 'A feature-rich nutrition and calorie tracking landing page. Includes Recharts data visualizations, circular progress bars, Swiper carousels, dark/light mode, and Framer Motion animations — all from a Figma design.',
    thumbnail:   '/images/projects/nutrioscale.png',
    tags:        ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Swiper', 'Framer Motion'],
    category:    'Landing Page',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://landing-page-nutiroscale-calories.netlify.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/LandingPageThree', type: 'github' },
    ],
    highlights: [
      'Recharts integration for nutrition data visualizations',
      'react-circular-progressbar for calorie tracking UI',
      'Swiper carousel for meal and plan sliders',
      'Tailwind CSS dark/light mode theming',
      'Tailwind-merge for clean class management',
    ],
  },

  // ── 5 ────────────────────────────────────────────────────
  {
    id:          'elixir-automation',
    title:       'Elixir Automation Website',
    tagline:     'Automation company website built with Ant Design and draggable sliders.',
    description: 'A full company website for Elixir Automation, a real business site. Built with React, TypeScript, Ant Design component library, and a draggable slider. Uses React Router for multi-page navigation and Framer Motion for animations.',
    thumbnail:   '/images/projects/elixir.png',
    tags:        ['React', 'TypeScript', 'Ant Design', 'Framer Motion', 'React Router', 'Swiper'],
    category:    'Full-Stack',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://landing-page-four-lake.vercel.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/LandingPageFour', type: 'github' },
    ],
    highlights: [
      'Ant Design component system with custom theming',
      'react-draggable-slider for interactive UI',
      'Multi-page navigation with React Router',
      'Built from the real Elixirautomation.com design',
    ],
  },

  // ── 6 ────────────────────────────────────────────────────
  {
    id:          'widian',
    title:       'WIDIAN Perfume Brand',
    tagline:     'Luxury perfume brand website with premium animations.',
    description: 'A luxury perfume brand e-commerce landing page for WIDIAN Conversion, built from a Figma design. Features Ant Design components, Framer Motion premium animations, and React Router multi-page navigation in a TypeScript codebase.',
    thumbnail:   '/images/projects/widian.png',
    tags:        ['React', 'TypeScript', 'Ant Design', 'Framer Motion', 'Tailwind CSS'],
    category:    'Landing Page',
    status:      'live',
    featured:    false,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://landing-page-five-theta-nine.vercel.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/LandingPageFive', type: 'github' },
    ],
    highlights: [
      'Luxury brand aesthetic with premium Framer Motion animations',
      'Ant Design components with custom styling',
      'Built from detailed Figma design',
      'Multi-page structure with React Router',
    ],
  },

  // ── 7 ────────────────────────────────────────────────────
  {
    id:          'planer-ai',
    title:       'Planer AI — Training Plan Generator',
    tagline:     'AI-powered training plan generator using Netlify background functions.',
    description: 'An AI-powered training plan generator that uses Netlify background functions (serverless Node.js) to generate personalized workout plans. Built with React, TypeScript, shadcn/ui, and Tailwind CSS. Long-running AI tasks handled via background functions.',
    thumbnail:   '/images/projects/planer-ai.png',
    tags:        ['React', 'TypeScript', 'shadcn/ui', 'Netlify Functions', 'Node.js', 'Tailwind CSS'],
    category:    'Full-Stack',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://netlify-functions-app.netlify.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/ahmad-watoo/netlify-bg-function', type: 'github' },
    ],
    highlights: [
      'Netlify background functions for long-running AI tasks',
      'shadcn/ui component library for clean, accessible UI',
      'Serverless Node.js backend on Netlify',
      'Framer Motion animations throughout',
      'Fully responsive with Tailwind CSS',
    ],
  },

  // ── 8 ────────────────────────────────────────────────────
  {
    id:          'data-scraping',
    title:       'Web Data Scraper',
    tagline:     'Scraped 7,000+ pages and exported structured Excel data.',
    description: 'A Node.js CLI tool that scrapes 7,000+ web pages from URLs provided in a CSV file. Uses Cheerio for HTML parsing, Axios for data fetching, and generates structured XLSX Excel output. Built for a real client data extraction project.',
    thumbnail:   '/images/projects/data-scraping.png',
    tags:        ['Node.js', 'Cheerio', 'Axios', 'CSV Parser', 'XLSX'],
    category:    'Backend',
    status:      'live',
    featured:    false,
    year:        2024,
    links: [
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/sitemap-scrapping', type: 'github' },
    ],
    highlights: [
      'Scraped 7,000+ pages from URLs in a CSV sitemap',
      'Cheerio for fast HTML content parsing',
      'Axios for concurrent HTTP data fetching',
      'XLSX export for structured Excel output',
      'csv-parser for input file processing',
    ],
  },

  // ── 9 ────────────────────────────────────────────────────
  {
    id:          'kaza-landing',
    title:       'Kaza Swap Landing Page',
    tagline:     'House swap platform landing page with Reactjs and tailwind  css.',
    description: 'A landing page for Kaza Swap, a house swap platform. Built with React, TypeScript, Bootstrap, and jQuery. Includes Swiper carousel, Axios API integration, and multi-page routing.',
    thumbnail:   '/images/projects/kaza-landing.png',
    tags:        ['React', 'TypeScript', 'Bootstrap', 'jQuery', 'Swiper', 'Axios'],
    category:    'Landing Page',
    status:      'live',
    featured:    false,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://landing-kaza.vercel.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/landing-kaza', type: 'github' },
    ],
    highlights: [
      'Bootstrap + custom CSS for layout and styling',
      'jQuery for DOM interactions',
      'Swiper for page sliding and carousels',
      'Axios for API data integration',
    ],
  },

  // ── 10 ───────────────────────────────────────────────────
  {
    id:          'kazaswap',
    title:       'Kaza Swap Full Website',
    tagline:     'Full production website for a live crypto swap platform.',
    description: 'The full production website for Kazaswap.co — a live cryptocurrency swap platform. Built with React, TypeScript, Ant Design, Bootstrap, Formik + Yup form validation, and Node.js backend integration.',
    thumbnail:   '/images/projects/kazaswap.png',
    tags:        ['React', 'TypeScript', 'Ant Design', 'Formik', 'Yup', 'Bootstrap', 'Node.js'],
    category:    'Full-Stack',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Site',   url: 'https://kazaswap.co/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/johannalsyb/landing-kaza', type: 'github' },
    ],
    highlights: [
      'Live production crypto swap platform at kazaswap.co',
      'Formik + Yup for robust form validation',
      'Ant Design components with custom theming',
      'Node.js backend integration via Axios',
      'jQuery + React hooks hybrid architecture',
    ],
  },

  // ── 11 ───────────────────────────────────────────────────
  {
    id:          'aiquill',
    title:       'aiQuill Chat Dashboard',
    tagline:     'AI-powered chat and dashboard application with slider UI.',
    description: 'An AI-powered chat dashboard built with React, TypeScript, and Node.js. Features react-slick carousel for onboarding sliders, Axios API integration, and a clean dashboard layout with custom CSS.',
    thumbnail:   '/images/projects/aiquill.png',
    tags:        ['React', 'TypeScript', 'Node.js', 'Axios', 'react-slick'],
    category:    'Full-Stack',
    status:      'wip',
    featured:    false,
    year:        2024,
    links: [
      { label: 'Source Code', url: 'https://github.com/momensity/chat_dash', type: 'github' },
    ],
    highlights: [
      'react-slick for onboarding carousel flow',
      'Axios for API and AI model integration',
      'Clean dashboard layout with custom CSS',
      'Node.js backend',
    ],
  },

  // ── 12 ───────────────────────────────────────────────────
  {
    id:          'mochi-trade',
    title:       'Mochi Trade Landing Page',
    tagline:     'Trading app landing page with typewriter effects and animations.',
    description: 'A sleek trading application landing page for Mochi Trade. Built with React, TypeScript, Framer Motion, and react-simple-typewriter for animated text effects. Clean multi-page routing with React Router.',
    thumbnail:   '/images/projects/mochi-trade.png',
    tags:        ['React', 'TypeScript', 'Framer Motion', 'react-simple-typewriter'],
    category:    'Landing Page',
    status:      'live',
    featured:    false,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://landing-page-six-ten.vercel.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/naveedbasharat06/landing-page-six', type: 'github' },
    ],
    highlights: [
      'react-simple-typewriter for animated headline effects',
      'Framer Motion for scroll and entrance animations',
      'Clean custom CSS design inspired by mochitrade.com',
      'React Router multi-page navigation',
    ],
  },

  // ── 13 ───────────────────────────────────────────────────
  {
    id:          'ai-chatbot',
    title:       'AI Chatbot App',
    tagline:     'Full-stack AI chatbot with auth, dark mode, and Supabase.',
    description: 'A full-stack AI chatbot application powered by OpenAI ChatGPT API. Features Supabase database and authentication (sign in/sign up), dark/light theme switching, Framer Motion animations, and Axios API integration — all in a React + TypeScript codebase.',
    thumbnail:   '/images/projects/ai-chatbot.png',
    tags:        ['React', 'TypeScript', 'OpenAI API', 'Supabase', 'Framer Motion', 'Axios'],
    category:    'Full-Stack',
    status:      'live',
    featured:    true,
    year:        2024,
    links: [
      { label: 'Live Demo',   url: 'https://ai-chatbot-ten-pi-22.vercel.app/', type: 'demo'   },
      { label: 'Source Code', url: 'https://github.com/ahmad-watoo/ai-chatbot', type: 'github' },
    ],
    highlights: [
      'OpenAI ChatGPT API integration for real AI responses',
      'Supabase authentication — sign in and sign up flows',
      'Supabase database for conversation history persistence',
      'Dark/light theme switching',
      'Framer Motion animations and smooth transitions',
    ],
  },
]

// ── Helpers ───────────────────────────────────────────────────
export const featuredProjects = projects.filter(p => p.featured)

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map(p => p.category))),
]