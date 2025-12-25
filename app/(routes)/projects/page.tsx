'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/lib/projects.json'

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const allTechs = [...new Set(projects.flatMap((p) => p.technologies))]

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work in web development and trading automation
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedTech === null
                  ? 'bg-primary text-dark-bg'
                  : 'bg-dark-card border border-gray-700 hover:border-primary'
              }`}
            >
              All Projects
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedTech === tech
                    ? 'bg-primary text-dark-bg'
                    : 'bg-dark-card border border-gray-700 hover:border-primary'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
