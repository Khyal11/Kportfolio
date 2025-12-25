'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket } from 'lucide-react'
import Link from 'next/link'

const HeroColorful = () => {
  const colors = ['from-primary', 'from-secondary', 'from-accent']

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-bg" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 rounded-full opacity-20 mix-blend-multiply blur-3xl ${
              colors[i % colors.length]
            }`}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
              background: ['rgb(0, 212, 255)', 'rgb(255, 0, 110)', 'rgb(131, 56, 236)'][
                i % 3
              ],
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Creative Digital Solutions
          </span>
        </motion.div>

        {/* Main Headline with Stagger */}
        <div className="mb-6">
          {['Crafting', 'Digital', 'Experiences'].map((word, i) => (
            <motion.h1
              key={i}
              className="text-5xl sm:text-7xl font-black leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className="block">
                {word}
                {i === 2 && <span className="text-primary"> That Stand Out</span>}
              </span>
            </motion.h1>
          ))}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Combining cutting-edge technology with creative design to deliver web solutions that captivate and convert.
        </motion.p>

        {/* Animated CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark-bg rounded-lg font-bold hover:shadow-glow transition-all duration-300"
            >
              Explore Portfolio <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
            >
              <Rocket size={20} />
              Start a Project
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700"
        >
          {[
            { num: '15+', label: 'Projects' },
            { num: '90+', label: 'Score' },
            { num: '3y+', label: 'Experience' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                {item.num}
              </motion.div>
              <div className="text-sm text-gray-400 mt-2">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-primary text-sm font-medium flex items-center gap-2"
      >
        <span>Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-primary rounded-full flex items-start justify-center pt-1">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default HeroColorful
