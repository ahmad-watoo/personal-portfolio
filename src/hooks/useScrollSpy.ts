import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────
//  useScrollSpy
//  Watches a list of section IDs and returns the ID of
//  whichever section is currently in the viewport.
//  Used by the Navbar to highlight the active link.
//
//  Usage:
//    const active = useScrollSpy(['home','about','projects'])
// ─────────────────────────────────────────────────────────────

export function useScrollSpy(
  sectionIds: string[],
  offset = 100,          // px from top to trigger "active"
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      // Walk sections from bottom to top; first one whose top
      // is above (offset) wins.
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= offset) {
          setActiveId(id)
          return
        }
      }
      // Nothing found — default to first
      setActiveId(sectionIds[0] ?? '')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}