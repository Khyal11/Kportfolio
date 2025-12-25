'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from './Button';

const HeroVariant1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-blob animation-delay-1" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-blob animation-delay-3" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-400">Welcome to my portfolio</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Creative Full-Stack</span>
            <br />
            <span className="text-white">Developer & Designer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I craft exceptional digital experiences with cutting-edge technologies. Specialized in scalable architecture, modern UI/UX, and cloud solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="primary" size="lg" href="/projects">
              View My Work <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/Khyal11"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-primary-500/20 text-slate-300 hover:text-primary-400 transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/KhyalNayak"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-primary-500/20 text-slate-300 hover:text-primary-400 transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:khyal725@gmail.com.com"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-primary-500/20 text-slate-300 hover:text-primary-400 transition-all"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-slate-700"
          >
            <p className="text-sm text-slate-400 mb-6">Tech Stack</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'AWS'].map(tech => (
                <span key={tech} className="badge-primary">{tech}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroVariant1;
