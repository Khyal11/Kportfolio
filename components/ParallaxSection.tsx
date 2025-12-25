'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  offset?: number
}

export const ParallaxSection = ({
  children,
  offset = 50,
}: ParallaxSectionProps) => {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (value) => value * 0.5)

  return (
    <motion.section ref={ref} style={{ y }}>
      {children}
    </motion.section>
  )
}
