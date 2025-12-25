'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import projects from '@/lib/projects.json'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {featuredProjects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          className="group relative bg-dark-card rounded-xl border border-gray-800 overflow-hidden hover:border-primary transition-all duration-300"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 rounded text-gray-400">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Metrics (if available) */}
            {project.metrics && (
              <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-dark-surface rounded-lg text-xs">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-primary font-bold">{value}</div>
                    <div className="text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-gray-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 px-3 py-2 rounded-lg bg-dark-surface hover:bg-dark-surface/80 text-gray-300 hover:text-primary transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
