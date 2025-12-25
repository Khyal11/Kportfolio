'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export const AnimatedCounter = ({
  end,
  duration = 2,
  suffix = '',
}: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0
    const endValue = end
    const durationMs = duration * 1000

    const animationFrame = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const currentValue = Math.round(startValue + (endValue - startValue) * progress)
      setCount(currentValue)

      if (progress === 1) {
        clearInterval(animationFrame)
      }
    }, 16)

    return () => clearInterval(animationFrame)
  }, [isVisible, end, duration])

  return (
    <motion.div ref={ref}>
      <motion.span>{count}</motion.span>
      {suffix}
    </motion.div>
  )
}
