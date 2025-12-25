'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  if (!project) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass rounded-xl overflow-hidden card-hover h-full"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
            <div className="text-center">
              <div className="text-slate-400 text-sm font-semibold">{project.title}</div>
            </div>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="badge text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="badge text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {project.metrics && (
          <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-t border-slate-700">
            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
              <div key={key}>
                <p className="text-primary-400 font-bold text-lg">{value}</p>
                <p className="text-slate-400 text-xs capitalize">{key}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm font-semibold"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary-500/20 hover:bg-primary-500/30 rounded-lg transition-colors text-sm font-semibold text-primary-400"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-colors text-sm font-semibold"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
