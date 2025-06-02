'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Restaurant POS System',
    description: 'A comprehensive point-of-sale system designed specifically for restaurants with real-time order management',
    problem: 'Restaurants struggled with order management, inventory tracking, and staff coordination during peak hours',
    solution: 'Developed an intuitive POS system with real-time kitchen notifications, inventory management, and sales analytics',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets', 'Docker'],
    image: '/images/work-6.jpg',
    github: 'https://github.com/Maina91',
    live: 'https://github.com/Maina91'
  },
  {
    title: 'Customer Relationship Management System',
    description: 'A robust CRM system for managing customer data, interaction history, and account details',
    problem: 'Businesses needed an efficient way to track and manage customer interactions and data',
    solution: 'Engineered a comprehensive CRM with secure data storage and optimized retrieval mechanisms',
    techStack: ['Laravel', 'Node.js', 'PostgreSQL', 'RESTful APIs'],
    image: '/images/work-4.png',
    github: 'https://github.com/Maina91',
    live: 'https://github.com/Maina91'
  },
  {
    title: 'Bulk SMS & Email System',
    description: 'High-performance system for sending bulk SMS and email communications',
    problem: 'Businesses needed to reach thousands of customers simultaneously for notifications and marketing',
    solution: 'Developed a scalable system with optimized message delivery and database queries',
    techStack: ['Laravel', 'MySQL', 'Queue Systems', 'API Integration'],
    image: '/images/work-5.jpg',
    github: 'https://github.com/Maina91',
    live: 'https://github.com/Maina91'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    problem: 'Small businesses needed an affordable, scalable online store solution',
    solution: 'Built a customizable platform with integrated payment processing and inventory tracking',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/images/work-1.png',
    github: 'https://github.com/Maina91',
    live: 'https://github.com/Maina91'
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management application for remote teams',
    problem: 'Teams struggled with task coordination in remote work settings',
    solution: 'Developed a real-time collaboration tool with intuitive UI and powerful features',
    techStack: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    image: '/images/work-2.png',
    github: 'https://github.com/Maina91',
    live: 'https://github.com/Maina91'
  },
  {
    title: 'Health Tracking App',
    description: 'Mobile-first health and fitness tracking application',
    problem: 'Users needed a simple way to track health metrics and habits',
    solution: 'Created an intuitive app with data visualization and progress tracking',
    techStack: ['React Native', 'Firebase', 'Chart.js', 'Node.js'],
    image: '/images/work-3.png',
    github: 'https://github.com/Maina91',
    live: 'https://github.com/Maina91'
  }
];

export default function Projects() {
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false });

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-primary-navy">
      <div className="container mx-auto px-4">
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={projectsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary-navy dark:text-white mb-12">Featured Projects</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Problem:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.problem}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.solution}
                    </p>
                  </div>

                  {project.impact && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Impact:
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.impact}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-light dark:bg-accent-dark text-primary-light dark:text-secondary-teal text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-secondary-teal"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-secondary-teal"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}