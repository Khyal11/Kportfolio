'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Rocket } from 'lucide-react';
import Button from './Button';

const HeroVariant2 = () => {
  const features = [
    { icon: Code2, label: 'Clean Code', value: 'Production Ready' },
    { icon: Zap, label: 'High Performance', value: '90+ Lighthouse' },
    { icon: Rocket, label: 'Fast Delivery', value: 'Agile Approach' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                <span className="text-primary-400 text-sm font-semibold">Crafting Digital Excellence</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Turning Ideas Into</span>
              <span className="gradient-text">Scalable Solutions</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Building next-generation web applications with modern technologies. From concept to deployment, I deliver excellence at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="/projects">
                Explore Projects
              </Button>
              <Button variant="secondary" size="lg" href="/api/download-resume">
                Download Resume
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              {['Available for freelance', 'Currently Learning AI/ML', 'Open Source Contributor'].map((item, idx) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl" />
              <div className="absolute inset-0 glass rounded-3xl flex items-center justify-center">
                <div className="space-y-6">
                  {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.label}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                          <Icon size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{feature.label}</p>
                          <p className="text-sm text-slate-400">{feature.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant2;
