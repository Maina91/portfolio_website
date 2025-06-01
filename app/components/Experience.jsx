'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState(0);

  const experiences = [
    {
      title: 'Full-Stack Software Engineer',
      company: 'Wizglobal Kenya',
      location: 'Parklands, Nairobi',
      date: 'Sep 2024 - Present',
      description: [
        'Designed and implemented dynamic user portals using Vue.js, Laravel, and CSS, enhancing user experience and responsiveness across multiple devices',
        'Developed and optimized RESTful APIs, ensuring seamless communication between frontend and backend systems while improving data retrieval efficiency'
      ],
      technologies: ['Vue.js', 'Laravel', 'CSS', 'RESTful APIs']
    },
    {
      title: 'Junior Developer Intern',
      company: 'Wizglobal Kenya',
      location: 'Parklands, Nairobi',
      date: 'Jan 2024 - Sep 2024',
      description: [
        'Engineered and maintained scalable backend services using Node.js and Laravel, optimizing system performance and reliability',
        'Implemented secure authentication and authorization mechanisms, enhancing data protection and access control',
        'Optimized API integrations, reducing response times and enhancing overall application performance'
      ],
      technologies: ['Node.js', 'Laravel', 'Authentication', 'API Integration']
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      location: 'Nairobi',
      date: 'Aug 2023 - Sep 2024',
      description: [
        'Designed and developed custom, responsive websites for clients, ensuring optimal usability and modern aesthetics across devices',
        'Integrated RESTful APIs and database solutions, enabling seamless functionality and efficient data management',
        'Optimized website performance, security, and SEO, improving page load speed, search engine visibility, and user engagement'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'RESTful APIs', 'SEO']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-primary-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-primary-navy dark:text-white mb-4"
          >
            Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          >
            My professional journey in software development
          </motion.p>
          
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-2">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    variants={itemVariants}
                    onClick={() => setSelectedTab(index)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                      selectedTab === index
                        ? 'bg-accent-light dark:bg-accent-dark text-primary-light dark:text-secondary-teal shadow-md transform scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-primary-light hover:shadow-sm'
                    }`}
                  >
                    <div className="font-semibold mb-1">{exp.company}</div>
                    <div className="text-sm opacity-75">{exp.date}</div>
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-8">
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="border-l-4 border-secondary-teal pl-6 mb-6">
                  <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">
                    {experiences[selectedTab].title}
                  </h3>
                  <p className="text-lg text-secondary-teal dark:text-secondary-teal">
                    {experiences[selectedTab].company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {experiences[selectedTab].location} | {experiences[selectedTab].date}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {experiences[selectedTab].description.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-3 text-secondary-teal text-xl">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-3">
                  {experiences[selectedTab].technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 text-sm bg-accent-light dark:bg-accent-dark text-primary-light dark:text-secondary-teal rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}