'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const techStack = [
  { name: 'PHP', icon: '/images/php.png' },
  { name: 'Laravel', icon: '/images/laravel.png' },
  { name: 'JavaScript', icon: '/images/javascript.webp' },
  { name: 'Node.js', icon: '/images/nodejs.webp' },
  { name: 'Express.js', icon: '/images/expressjs.webp' },
  { name: 'React', icon: '/images/reactjs.webp' },
  { name: 'Next.js', icon: '/images/next.svg' },
  { name: 'HTML', icon: '/images/html.webp' },
  { name: 'CSS', icon: '/images/css.webp' },
  { name: 'TailwindCSS', icon: '/images/tailwind.png' },
  { name: 'PostgreSQL', icon: '/images/postgresql.png' },
  { name: 'MySQL', icon: '/images/mysql.avif' },
];

const skills = {
  backend: ['PHP (Laravel)', 'JavaScript (NodeJs)'],
  frontend: ['Next.js', 'Blade', 'Bootstrap', 'Tailwind CSS', 'AJAX', 'HTML5', 'CSS3'],
  databases: ['PostgreSQL', 'MySQL', 'Sequelize'],
  apiDevelopment: ['REST', 'SOAP', 'GraphQL', 'M-Pesa Integration'],
  devOpsCloud: ['Docker'],
  architectureSecurity: ['System Design', 'Error Management', 'Security Best Practices'],
};

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform",
    image: "/images/work-1.png",
    problem: "Small businesses needed an affordable way to sell online",
    solution: "Built a scalable e-commerce solution with modern tech stack",
    impact: "Helped 10+ small businesses establish online presence",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    image: "/images/work-2.png",
    problem: "Teams struggled with remote collaboration",
    solution: "Created an intuitive task management system",
    impact: "Improved team productivity by 40%",
    techStack: ["React", "Express", "PostgreSQL", "Socket.io"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.demo.com"
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system",
    image: "/images/work-3.png",
    problem: "Clinics needed better patient data management",
    solution: "Developed a secure healthcare management portal",
    impact: "Reduced administrative work by 60%",
    techStack: ["Vue.js", "Laravel", "MySQL", "AWS"],
    github: "https://github.com/yourusername/project3",
    live: "https://project3.demo.com"
  }
];

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
                A Full-Stack Software Developer specializing in building scalable web applications
                with modern technologies. Expert in both Laravel and Next.js ecosystems.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="bg-secondary-teal hover:bg-accent-dark text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="border border-secondary-teal text-secondary-teal hover:bg-accent-light px-8 py-3 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-gray-800"
                >
                  View Work
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Some of my recent work
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <motion.div 
                  className="relative h-64 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <motion.h3 
                        className="text-white text-xl font-semibold mb-2"
                        initial={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-200 mb-4"
                        initial={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`/projects#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-secondary-teal hover:text-accent-light inline-flex items-center gap-2"
                        >
                          Learn more
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-secondary-teal dark:text-secondary-teal hover:text-accent-dark"
            >
              View all projects
              <motion.svg 
                className="w-4 h-4" 
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
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
