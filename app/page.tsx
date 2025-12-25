'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroVariant1 from '@/components/HeroVariant1';
import HeroVariant2 from '@/components/HeroVariant2';
import HeroVariant3 from '@/components/HeroVariant3';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import projects from '@/lib/projects.json';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const HOME_VARIANTS = [
  { id: 1, name: 'Gradient Blur', component: HeroVariant1, description: 'Modern with animated blobs' },
  { id: 2, name: 'Grid & Features', component: HeroVariant2, description: 'Professional grid layout' },
  { id: 3, name: 'Typography Focus', component: HeroVariant3, description: 'Bold and minimal' },
];

export default function Home() {
  const [heroVariant, setHeroVariant] = useState(1);
  const [showSelector, setShowSelector] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const HeroComponent = HOME_VARIANTS.find(v => v.id === heroVariant)?.component || HeroVariant1;
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="w-full">
      {showSelector && (
        <motion.div
          className="fixed top-20 right-6 z-40 glass rounded-lg p-4 md:p-6 max-w-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-white font-bold mb-4">Select Hero Style</h3>
          <div className="space-y-3">
            {HOME_VARIANTS.map(variant => (
              <button
                key={variant.id}
                onClick={() => {
                  setHeroVariant(variant.id);
                  setShowSelector(false);
                }}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  heroVariant === variant.id
                    ? 'bg-primary-500/20 border border-primary-500'
                    : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                }`}
              >
                <p className="font-semibold text-white">{variant.name}</p>
                <p className="text-xs text-slate-400">{variant.description}</p>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <button
        onClick={() => setShowSelector(!showSelector)}
        className="fixed top-24 right-6 z-40 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors"
      >
        {showSelector ? '✕' : '⚙️'} Hero Style
      </button>

      {isMounted && <HeroComponent />}

      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container-custom">
          <SectionTitle
            title="Featured Projects"
            subtitle="Showcase of my best work combining design, functionality, and performance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" size="lg" href="/projects">
              View All Projects <ArrowRight size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Experience', value: '6+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Tech Stack Skills', value: '20+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container-custom">
          <SectionTitle
            title="Ready to Build Something Great?"
            subtitle="Let's collaborate to bring your ideas to life with cutting-edge technology and design"
          />

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" size="lg" href="/contact">
              Get In Touch <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" size="lg" href="/projects">
              View My Work
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
