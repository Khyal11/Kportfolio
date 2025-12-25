'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import resumeData from '@/lib/resume.json';
import Button from '@/components/Button';
import { Download } from 'lucide-react';
import ExperienceTimeline from '@/components/ExperienceTimeline';

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

export default function ResumePage() {
  return (
    <div className="container-custom py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle
          title="My Resume"
          subtitle="A comprehensive overview of my professional journey, skills, and achievements"
        />

        {/* Profile Section */}
        <motion.div variants={itemVariants} className="mb-16 flex flex-col md:flex-row items-center gap-12 glass p-8 rounded-lg">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg shadow-primary-500/50 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Khyal Nayak</h2>
            <p className="text-lg text-slate-300 mb-2">Full-Stack Developer & Digital Innovator</p>
            <p className="text-slate-400 mb-6">
              Passionate about building scalable, high-performance applications with modern technologies. 
              Specialized in creating elegant solutions to complex problems through clean code and best practices.
            </p>
            <Button href="/api/download-resume" variant="primary" size="lg">
              <Download size={20} /> Download Resume (PDF)
            </Button>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-primary/20 pb-4">
            Experience
          </h2>
          <ExperienceTimeline experiences={resumeData.experience} />
        </motion.section>

        {/* Education Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-primary/20 pb-4">
            Education
          </h2>
          <div className="space-y-8">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="glass p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-1">{edu.school}</h3>
                <p className="text-lg text-white mb-1">{edu.degree} in {edu.field}</p>
                <p className="text-slate-400 text-sm mb-2">{edu.year}</p>
                <p className="text-slate-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-primary/20 pb-4">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-lg shadow-lg hover:border-primary transition-all block"
              >
                <h3 className="text-xl font-semibold text-primary mb-1">{cert.name}</h3>
                <p className="text-lg text-white mb-1">{cert.issuer}</p>
                <p className="text-slate-400 text-sm">{cert.date}</p>
              </a>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
