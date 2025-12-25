'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

const HeroFuturistic = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg" />
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* 3D Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              y: [0, -200],
              x: Math.sin(i) * 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content with Perspective */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        {/* 3D Box Background */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            perspective: '1200px',
          }}
        >
          <motion.div
            className="w-full h-full rounded-3xl border-2 border-primary/20 bg-primary/5 backdrop-blur-sm"
            animate={{
              rotateX: [0, 5, 0],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <Zap size={16} className="text-primary animate-pulse" />
            <span className="text-sm font-medium">Next-Gen Web Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl sm:text-7xl font-black mb-6 leading-tight"
          >
            <span className="block text-white">Future-Ready</span>
            <span className="block gradient-text">Web Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Leveraging the latest technologies to build immersive, performant, and scalable web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark-bg rounded-lg font-semibold hover:scale-110 transition-transform duration-300 shadow-glow"
            >
              Explore Work <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Start Project
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroFuturistic
