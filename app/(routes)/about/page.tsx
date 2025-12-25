import { Metadata } from 'next'
import { motion } from 'framer-motion'
import SkillsShowcase from '@/components/SkillsShowcase'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background, skills, and journey as a developer.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto mb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate developer with expertise in full-stack development and algorithmic trading
          </p>
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a full-stack developer and trading automation specialist based in Pātan, Gujarat. With a Master's degree in Computer Science, I combine technical expertise with creative problem-solving to build innovative solutions.
              </p>
              <p>
                My journey started with a fascination for algorithmic trading, which led me to master Python and market analysis. Over time, I expanded into full-stack web development, leveraging modern frameworks like Next.js and React to create scalable applications.
              </p>
              <p>
                I'm passionate about automating complex processes, optimizing performance, and creating beautiful user experiences. When I'm not coding, I enjoy content creation on LinkedIn, event promotion, and exploring new technologies.
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-4">
            <div className="p-4 bg-dark-card rounded-lg border border-gray-800">
              <h3 className="text-primary font-semibold mb-2">Education</h3>
              <p className="text-gray-300 text-sm">
                Master's in Computer Science from Indian Institute
              </p>
            </div>
            <div className="p-4 bg-dark-card rounded-lg border border-gray-800">
              <h3 className="text-primary font-semibold mb-2">Location</h3>
              <p className="text-gray-300 text-sm">
                Pātan, Gujarat, India
              </p>
            </div>
            <div className="p-4 bg-dark-card rounded-lg border border-gray-800">
              <h3 className="text-primary font-semibold mb-2">Focus Areas</h3>
              <p className="text-gray-300 text-sm">
                Full-Stack Web Development, Algorithmic Trading, Automation
              </p>
            </div>
            <div className="p-4 bg-dark-card rounded-lg border border-gray-800">
              <h3 className="text-primary font-semibold mb-2">Interests</h3>
              <p className="text-gray-300 text-sm">
                AI/ML, Cloud Computing, DevOps, Content Creation
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '15+ Projects',
                description: 'Successfully completed and deployed projects',
              },
              {
                title: '20+ Clients',
                description: 'Satisfied clients in various industries',
              },
              {
                title: '90+ Lighthouse',
                description: 'Performance score across all projects',
              },
            ].map((achievement, i) => (
              <div
                key={i}
                className="p-6 bg-dark-card rounded-lg border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsShowcase />
    </div>
  )
}
