'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const HeroMinimalist = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dark-bg">
      {/* Simple Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl sm:text-8xl font-bold mb-6 text-white leading-tight"
        >
          Hello,
          <br />
          I'm <span className="text-primary">Your Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
        >
          Full Stack Developer specializing in modern web applications and trading automation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/projects"
            className="text-lg font-semibold text-white hover:text-primary transition-colors flex items-center gap-2"
          >
            View My Work <ArrowRight size={24} />
          </Link>
          <span className="text-gray-600">or</span>
          <Link
            href="/contact"
            className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 pt-20 border-t border-gray-800"
        >
          {[
            { label: 'Projects', value: '15+' },
            { label: 'Experience', value: '3y+' },
            { label: 'Clients', value: '20+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroMinimalist
