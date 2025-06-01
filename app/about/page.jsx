'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: false });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false });

  const skills = [
    { 
      title: 'Frontend Development',
      icon: '/images/frontend.jpg',
      description: 'Building responsive and interactive user interfaces',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      icon: '/images/backend.jpg',
      description: 'Creating robust server-side applications',
      technologies: ['PHP', 'Node.js', 'Express', 'RESTful APIs']
    },
    {
      title: 'UI/UX Design',
      icon: '/images/design.jpg',
      description: 'Designing intuitive and beautiful user experiences',
      technologies: ['Figma', 'Adobe XD', 'WordPress']
    }
  ];

  return (
    <div className="py-20 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-primary-navy">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="images/animation.png"
                alt="Animation"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Full-Stack Software Engineer
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack software engineer with expertise in backend and frontend development,
                 specializing in Laravel (PHP), JavaScript, and REST API design and documentation. Skilled
                 in building scalable, high-performance, and secure applications while adhering to best coding
                  practices and agile methodologies. Experienced in optimizing system efficiency, enhancing security, 
                  and integrating third-party APIs. Passionate about problem-solving, continuous learning, and developing 
                  innovative software solutions that improve user experience and drive business success.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={skillsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
              >
                <div className="flex items-center justify-center mb-6 w-full">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={240}
                    height={240}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 text-md">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4 pt-4"
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
      </div>
    </div>
  );
}