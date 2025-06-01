'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';


export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [contentRef, isContentInView] = useInView({ threshold: 0.2 });
  const [statsRef, isStatsInView] = useInView({ threshold: 0.2 });

  const stats = [
    { 
      label: 'Years Experience', 
      value: '3+',
      description: 'Creating innovative web solutions'
    },
    { 
      label: 'Projects Completed', 
      value: '20+',
      description: 'Diverse portfolio of successful deliveries'
    },
    { 
      label: 'Satisfied Clients', 
      value: '15+',
      description: 'Happy clients worldwide'
    },
    { 
      label: 'Technologies', 
      value: '10+',
      description: 'Modern tech stack expertise'
    }
  ];

  const skills = [
    { name: 'Frontend', techs: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', techs: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL'] },
    { name: 'Database', techs: ['MongoDB', 'PostgreSQL', 'Redis'] },
    { name: 'DevOps', techs: ['AWS', 'Docker', 'Git', 'CI/CD'] }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-primary-navy dark:to-primary-light min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Introduction Header */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy dark:text-white mb-4">
              Crafting Digital Experiences
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Turning complex problems into elegant, user-friendly solutions
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="images/animation.png"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-accent-light dark:bg-accent-dark rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-secondary-teal rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl leading-relaxed"
                >
                  Hello! I'm a Full-Stack Software Engineer passionate about creating innovative digital solutions that make a difference. With expertise in modern web technologies, I bridge the gap between design and functionality.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base sm:text-lg leading-relaxed"
                >
                  My approach combines technical excellence with creative problem-solving, ensuring each project not only meets but exceeds expectations. I specialize in building scalable applications that prioritize user experience and performance.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white rounded-lg font-medium transition-colors hover:bg-opacity-90"
                  >
                    Let's Collaborate
                  </motion.a>
                  <motion.a
                    href="/resume"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary-teal text-secondary-teal rounded-lg font-medium hover:bg-secondary-teal hover:text-white transition-colors"
                  >
                    View Resume
                  </motion.a>
                </div>
              </div>

              {/* Stats Grid */}
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative text-center p-4 bg-white dark:bg-primary-light rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-secondary-teal mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                    {hoveredStat === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-2 left-0 right-0 transform translate-y-full z-10 px-4 py-2 bg-white dark:bg-primary-light rounded-md shadow-lg text-xs text-gray-600 dark:text-gray-300"
                      >
                        {stat.description}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-6">
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="p-4 bg-white dark:bg-primary-light rounded-lg shadow-md"
                    >
                      <h4 className="text-lg font-medium text-secondary-teal mb-3">
                        {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-accent-light dark:bg-accent-dark text-primary-navy dark:text-gray-300 rounded-full hover:bg-secondary-teal hover:text-white transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
