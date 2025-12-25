'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid = ({ skills }: SkillsGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map(skill => (
        <motion.div key={skill.id} variants={itemVariants} className="glass rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 pb-4 border-b border-slate-700">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skill.skills.map(s => (
              <motion.span
                key={s}
                className="badge-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
