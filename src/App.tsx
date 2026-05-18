import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { createAppTheme } from '@/theme'
import { useAppSelector } from '@/hooks/useRedux'
import { router } from '@/router'

// ────────────────────────────────────────────────────────────
//  Inner app — has access to Redux store, reads theme mode
// ─────────────────────────────────────────────────────────────
function ThemedApp() {
  const mode = useAppSelector((s) => s.theme.mode)

  // Re-create MUI theme whenever mode changes
  const theme = useMemo(() => createAppTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

// ─────────────────────────────────────────────────────────────
//  Root — wraps everything in Redux Provider
// ─────────────────────────────────────────────────────────────
function App() {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  )
}

export default App