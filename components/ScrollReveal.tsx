'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) => {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -50 }
      case 'right':
        return { opacity: 0, x: 50 }
      case 'down':
        return { opacity: 0, y: -50 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
