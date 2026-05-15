import { motion } from 'framer-motion'
import { JSX } from 'react'

// ─────────────────────────────────────────────────────────────
//  AnimatedText
//  Splits text into words, animates each one in with stagger.
//  Uses `custom` prop for per-word delay — correctly typed.
// ─────────────────────────────────────────────────────────────

interface AnimatedTextProps {
  text: string
  inView: boolean
  className?: string
  el?: keyof JSX.IntrinsicElements
  delay?: number   // extra delay offset in units (each unit = 0.07s)
}

export default function AnimatedText({
  text,
  inView,
  className,
  el: Element = 'span',
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(' ')

  const Component = Element as React.ElementType

  return (
    <Component className={className} style={{ display: 'block' }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.55,
                    ease: [0.4, 0, 0.2, 1],
                    // per-word stagger + any extra delay
                    delay: (i + delay) * 0.07,
                  },
                }
              : { opacity: 0, y: 24, filter: 'blur(4px)' }
          }
        >
          {word}
        </motion.span>
      ))}
    </Component>
  )
}