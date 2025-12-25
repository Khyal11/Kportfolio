'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Button from './Button';

const HeroVariant3 = () => {
  const roles = ['Full-Stack Developer', 'UI/UX Designer', 'System Architect', 'Tech Innovator'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-custom relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            className="text-primary-400 font-mono text-sm mb-6 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            &lt;welcome /&gt;
          </motion.span>

          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2">Hello, I'm</span>
            <motion.span
              className="gradient-text block text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Khyal Nayak
            </motion.span>
          </h1>

          <motion.div
            className="h-16 flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              {roles.map((role, idx) => (
                <motion.div
                  key={role}
                  className="flex items-center gap-4"
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 12,
                    delay: idx * 3,
                    repeat: Infinity,
                  }}
                >
                  <span className="text-2xl font-semibold text-primary-400">{role}</span>
                  {idx < roles.length - 1 && <span className="text-slate-600">·</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I build exceptional digital products that combine beautiful design with powerful functionality. Let's create something amazing together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button variant="primary" size="lg" href="/projects">
              View My Work
            </Button>
            <Button variant="ghost" size="lg" href="/contact" className="text-primary-400">
              Contact Me <ChevronRight size={20} />
            </Button>
          </motion.div>

          <motion.div
            className="mt-20 pt-12 border-t border-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-sm text-slate-500 mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['TechCorp', 'StartupXYZ', 'InnovateLabs', 'CloudSystems'].map(company => (
                <p key={company} className="text-slate-400 font-semibold">
                  {company}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <svg className="w-8 h-8 text-primary-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroVariant3;
