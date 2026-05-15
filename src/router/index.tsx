import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'

// ─────────────────────────────────────────────────────────────
//  Router
//  Currently single-page. Add routes here as needed.
//  e.g. a /blog route in Phase 5+
// ─────────────────────────────────────────────────────────────

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // Future routes:
  // { path: '/blog',      element: <Blog /> },
  // { path: '/blog/:slug',element: <BlogPost /> },
])