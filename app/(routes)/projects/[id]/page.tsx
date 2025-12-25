'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import projects from '@/lib/projects.json';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id;

  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Project Not Found</h1>
        <p className="text-xl text-slate-400 mb-8">
          The project you are looking for does not exist.
        </p>
        <Link href="/projects">
          <Button variant="primary">
            <ArrowLeft size={20} className="mr-2" /> Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title={project.title} subtitle={project.description} />

        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden mb-12 shadow-lg">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {project.longDescription || project.description}
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button primary"
                >
                  <Github size={20} className="mr-2" /> View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button secondary"
                >
                  <ExternalLink size={20} className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-1 glass p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Project Info</h3>
            <ul className="space-y-3 text-slate-300">
              {project.metrics && (
                <>
                  <li className="font-semibold text-primary">Key Metrics:</li>
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <li key={key} className="flex justify-between items-center text-sm">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-bold text-white">{value}</span>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="primary">
              <ArrowLeft size={20} className="mr-2" /> Back to All Projects
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
