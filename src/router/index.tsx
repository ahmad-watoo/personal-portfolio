import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import AdminPage from '@/pages/AdminPage'
import NotFound  from '@/pages/NotFound'
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
  {
    // Private admin dashboard — password protected
    path:    '/admin',
    element: <AdminPage />,
  },
   {
    path:    '*',
    element: <NotFound />,
  },
  // Future routes:
  // { path: '/blog',      element: <Blog /> },
  // { path: '/blog/:slug',element: <BlogPost /> },
])