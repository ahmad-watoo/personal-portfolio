import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────────────────────
//  useInView
//  Returns a ref + boolean. Attach the ref to any element;
//  `inView` becomes true when it enters the viewport.
//  Used by sections to trigger Framer Motion animations.
//
//  Usage:
//    const { ref, inView } = useInView()
//    <div ref={ref}><motion.div animate={inView ? 'show' : 'hidden'} /></div>
// ─────────────────────────────────────────────────────────────

interface UseInViewOptions {
  threshold?: number    // 0-1, how much of the element must be visible
  once?: boolean        // if true, stays true after first trigger
  rootMargin?: string   // e.g. "-100px 0px"
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
) {
  const { threshold = 0.15, once = true, rootMargin = '0px' } = options
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return { ref, inView }
}