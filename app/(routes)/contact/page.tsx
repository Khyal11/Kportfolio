import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for collaborations, projects, or inquiries.',
  openGraph: {
    title: 'Contact | Your Name',
    description: 'Get in touch for collaborations and opportunities',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Work <span className="text-primary">Together</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
