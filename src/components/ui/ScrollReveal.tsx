import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, scaleUp } from '@/animations/variants'
import type { Variants } from 'framer-motion'

// ─────────────────────────────────────────────────────────────
//  ScrollReveal
//  Wraps any element and reveals it when it enters the viewport.
//  Uses Framer Motion's useInView for reliable triggering.
//
//  Usage:
//    <ScrollReveal>
//      <MyComponent />
//    </ScrollReveal>
//
//    <ScrollReveal variant="left" delay={0.2}>
//      <MyComponent />
//    </ScrollReveal>
// ─────────────────────────────────────────────────────────────

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade'

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
  once?: boolean
}

const variantMap: Record<RevealVariant, Variants> = {
  up:    fadeUp,
  left:  fadeLeft,
  right: fadeRight,
  scale: scaleUp,
  fade: {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
}

export default function ScrollReveal({
  children,
  variant   = 'up',
  delay     = 0,
  duration,
  className,
  style,
  once      = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-80px 0px' })

  const baseVariants = variantMap[variant]

  // Override transition if custom delay/duration provided
  const variants: Variants = delay || duration
    ? {
        hidden: baseVariants.hidden,
        show: {
          ...(baseVariants.show as object),
          transition: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...((baseVariants.show as any).transition ?? {}),
            delay,
            ...(duration ? { duration } : {}),
          },
        },
      }
    : baseVariants

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}