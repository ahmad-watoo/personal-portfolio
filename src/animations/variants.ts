import type { Variants } from 'framer-motion'

// ─────────────────────────────────────────────────────────────
//  Framer Motion Variants — single source of truth.
//  Import these in any section/component.
//  Always pair with useInView so animations fire on scroll.
// ─────────────────────────────────────────────────────────────

// ── Fade up (most common entrance) ───────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

// ── Fade in (no movement) ─────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// ── Fade from left ────────────────────────────────────────────
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

// ── Fade from right ───────────────────────────────────────────
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

// ── Scale up (for cards, badges) ─────────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
}

// ── Stagger container ─────────────────────────────────────────
// Wrap children with this so they animate one after another
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren:  0.1,   // delay between each child
      delayChildren:    0.1,   // initial delay before first child
    },
  },
}

// ── Stagger container (faster, for skill bars) ────────────────
export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren:   0.05,
    },
  },
}

// ── Skill bar fill ────────────────────────────────────────────
// Animate width from 0 to the value set via custom prop
export const skillBarVariant: Variants = {
  hidden: { width: '0%' },
  show:   { width: 'var(--target-width)', transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } },
}

// ── Navbar item ───────────────────────────────────────────────
export const navItemVariant: Variants = {
  hidden: { opacity: 0, y: -10 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

// ── Float (for hero decorative elements) ─────────────────────
export const floatVariant: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 0, -8],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}