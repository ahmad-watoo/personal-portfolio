# Personal Portfolio — Alex Carter

A modern, performant developer portfolio built with React, TypeScript, and a carefully chosen stack. Designed to be easy to maintain, fully responsive, and visually polished.

---

## Tech Stack

- **React 18** + **TypeScript** — component architecture with full type safety
- **Vite** — fast dev server and optimized production builds
- **MUI (Material UI v5)** — component library with a fully custom theme
- **Tailwind CSS** — utility classes alongside MUI (prefixed `tw-` to avoid conflicts)
- **Framer Motion** — scroll-triggered and entrance animations
- **Redux Toolkit** — global state (theme mode, persisted to localStorage)
- **React Router v6** — client-side routing
- **React Hook Form + Zod** — contact form with schema validation
- **Lucide React** — lightweight icon set

---

## Getting Started

### Prerequisites

Node.js **v18+** and npm **v9+** required.

```bash
node --version  # v18+
npm --version   # v9+
```

### Install & Run

```bash
# Clone the repo
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Opens at `http://localhost:3000`.

---

## Project Structure

```
src/
├── animations/        # Framer Motion variants (reusable)
├── components/
│   ├── layout/        # Navbar, Footer
│   └── ui/            # Primitives: Tag, GradientText, ScrollReveal, etc.
├── constants/         # Nav items, site-wide constants
├── data/              # All content: personal.ts, projects.ts, skills.ts, experience.ts
├── hooks/             # useInView, useScrollSpy, useRedux
├── pages/             # Home.tsx (assembles all sections)
├── router/            # React Router config
├── sections/          # Hero, About, Projects, Experience, Contact
├── store/             # Redux store + themeSlice
├── styles/            # globals.css (CSS variables, Tailwind base)
├── theme/             # MUI theme: palette, typography, component overrides
└── types/             # All TypeScript interfaces
```

---

## Customisation

All content lives in `src/data/` — you never need to touch component code to update your info.

| File | What to edit |
|---|---|
| `data/personal.ts` | Name, title, bio, location, email, socials |
| `data/projects.ts` | Projects, links, tags, descriptions |
| `data/skills.ts` | Skills and proficiency levels |
| `data/experience.ts` | Work history and education |

To change the brand color, update `--color-primary` in `src/styles/globals.css` and `BRAND.primary.main` in `src/theme/palette.ts`.

---

## Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build (runs tsc first)
npm run preview      # Preview production build locally
npm run type-check   # TypeScript check without building
npm run lint         # ESLint
```

---

## Deployment

This is a static site — deploy anywhere that serves HTML.

**Vercel (recommended)**
```bash
npm i -g vercel
vercel
```

**Netlify** — drag and drop the `dist/` folder after `npm run build`.

**GitHub Pages** — push to a repo, set Pages source to `dist/` via GitHub Actions.

---

## License

MIT — use it however you like.