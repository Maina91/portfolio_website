'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { skills } from './data/skills';
import { techStack } from './data/stack';
import { projects } from './data/projects';

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: false });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (heroInView) {
      console.log('Hero section is in view');
    }
    if (skillsInView) {
      console.log('Skills section is in view');
    }
    if (projectsInView) {
      console.log('Projects section is in view');
    }
  }, [heroInView, skillsInView, projectsInView]);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="min-h-[calc(100vh-5rem)] flex items-center bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I&apos;m{' '}
                <span className="text-secondary-teal dark:text-secondary-teal">
                  Maina Edwin
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A Full-Stack Software Engineer specializing in building scalable web applications
                with modern technologies. Expert in both Laravel (PHP) and JavaScript ecosystems.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="border border-secondary-teal text-secondary-teal hover:bg-accent-light px-8 py-3 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-gray-800"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="border border-secondary-teal text-secondary-teal hover:bg-accent-light px-8 py-3 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-gray-800"
                >
                  View Work
                </Link>
                <Link
                  href="/Maina_Edwin_Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-3 border border-secondary-teal text-secondary-teal hover:bg-accent-light px-8 py-3 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-gray-800"
                >
                  <Image
                    src="/images/download-icon.png"
                    alt="Download"
                    width={24}
                    height={24}
                    className="w-6 h-5 text-secondary-teal [filter:invert(48%)_sepia(91%)_saturate(427%)_hue-rotate(135deg)_brightness(101%)_contrast(101%)] transform group-hover:-translate-y-1 transition-transform duration-300"
                  />
                  Download Resume
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="images/animation.png"
                  alt="Maina Edwin"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={skillsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive skill set across the full stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-accent-light dark:bg-accent-dark text-primary-light dark:text-secondary-teal text-sm rounded-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-primary-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Technologies I work with
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-colors"
              >
                <motion.div 
                  className="relative w-12 h-12"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={50} // Set a fixed width
                    height={50} // Set a fixed height
                    className="object-contain"
                  />
                </motion.div>
                <span className="px-3 py-1 bg-accent-light/90 dark:bg-accent-dark/90 text-primary-light dark:text-secondary-teal text-sm rounded-lg">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={projectsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
          </motion.div>

          {/* Horizontal carousel container */}
          <div className="relative mb-12">
            {/* Left scroll button */}
            <motion.button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                const container = document.getElementById('project-carousel');
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Carousel */}
            <motion.div 
              id="project-carousel"
              className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide hide-scrollbar"
              style={{ 
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .hide-scrollbar {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-none w-full sm:w-[85%] md:w-[45%] lg:w-[30%] px-4 snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 50
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                    whileHover={{ 
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute top-3 right-3">
                        <motion.div 
                          className="flex space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {project.github && (
                            <motion.a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                              whileHover={{ y: -3, scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a 
                              href={project.live} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                              whileHover={{ y: -3, scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </motion.a>
                          )}
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
                        {project.description}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`/projects#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-secondary-teal hover:text-secondary-teal-dark inline-flex items-center gap-2 font-medium text-sm"
                        >
                          View details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right scroll button */}
            <motion.button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                const container = document.getElementById('project-carousel');
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-secondary-teal dark:text-secondary-teal hover:text-accent-dark font-medium"
            >
              View all projects
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-primary-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-100 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
            <Link
              href="/contact"
              className="border border-secondary-teal text-secondary-teal hover:bg-accent-light px-8 py-3 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-gray-800"
              >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
