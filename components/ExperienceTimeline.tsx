'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { ChevronRight } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="absolute left-0 top-6 w-16 h-1 bg-gradient-to-r from-primary-500 to-transparent hidden md:block" />
            
            <div className="md:ml-24 glass rounded-xl p-6">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary-500 rounded-full border-4 border-slate-950 hidden md:block" />

              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <p className="text-primary-400 font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-400 whitespace-nowrap ml-4">{exp.period}</span>
              </div>

              <p className="text-slate-300 mb-4">{exp.description}</p>

              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, aidx) => (
                  <li key={aidx} className="flex items-start gap-3 text-slate-300 text-sm">
                    <ChevronRight size={16} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
