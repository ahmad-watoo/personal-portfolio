import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ThemeMode } from '@/types'

// ─────────────────────────────────────────────────────────────
//  themeSlice
//  Manages dark/light mode. Persists to localStorage.
//  Also syncs data-theme attribute on <html> for CSS vars.
// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'portfolio-theme'

function getInitialMode(): ThemeMode {
  // 1. Check localStorage
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
  if (stored === 'light' || stored === 'dark') return stored

  // 2. Check OS preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

  return 'light'
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute('data-theme', mode)
  localStorage.setItem(STORAGE_KEY, mode)
}

interface ThemeState {
  mode: ThemeMode
}

const initialMode = getInitialMode()
applyTheme(initialMode)  // apply immediately to prevent FOUC

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: initialMode } as ThemeState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload
      applyTheme(action.payload)
    },
    toggleTheme(state) {
      const next: ThemeMode = state.mode === 'light' ? 'dark' : 'light'
      state.mode = next
      applyTheme(next)
    },
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export default themeSlice.reducer