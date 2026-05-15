import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Future slices go here:
    // ui:       uiReducer,      // Phase 4 — modal open/close, active filter
    // contact:  contactReducer, // Phase 5 — form status
  },
})

// Inferred types — use these everywhere instead of importing the store directly
export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch