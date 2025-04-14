'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    skills: [
      { name: 'Next.js', level: 90, description: 'Server-side rendering and static site generation' },
      { name: 'Blade', level: 85, description: 'Laravel templating engine' },
      { name: 'Bootstrap', level: 90, description: 'Responsive front-end framework' },
      { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS framework' },
      { name: 'AJAX', level: 85, description: 'Asynchronous JavaScript and XML' },
      { name: 'HTML5/CSS3', level: 95, description: 'Modern web development fundamentals' }
    ]
  },
  backend: {
    title: 'Backend Development',
    skills: [
      { name: 'PHP (Laravel)', level: 90, description: 'Professional PHP framework development' },
      { name: 'Node.js', level: 85, description: 'JavaScript runtime environment' },
      { name: 'REST APIs', level: 90, description: 'RESTful web services development' },
      { name: 'SOAP', level: 80, description: 'XML-based messaging protocol' },
      { name: 'GraphQL', level: 85, description: 'Modern API query language' },
      { name: 'M-Pesa Integration', level: 90, description: 'Payment gateway integration' }
    ]
  },
  databases: {
    title: 'Database Management',
    skills: [
      { name: 'PostgreSQL', level: 85, description: 'Advanced relational database' },
      { name: 'MySQL', level: 90, description: 'Open-source relational database' },
      { name: 'Sequelize', level: 85, description: 'ORM for Node.js' },
      { name: 'Database Design', level: 90, description: 'Schema design and optimization' }
    ]
  },
  devops: {
    title: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker', level: 85, description: 'Container orchestration and deployment' },
      { name: 'Linux', level: 80, description: 'Server administration and management' },
      { name: 'Windows', level: 85, description: 'System administration' },
      { name: 'Version Control (Git)', level: 90, description: 'Code versioning and collaboration' }
    ]
  },
  architecture: {
    title: 'Software Architecture',
    skills: [
      { name: 'System Design', level: 85, description: 'Scalable architecture design' },
      { name: 'Performance Optimization', level: 85, description: 'System efficiency and optimization' },
      { name: 'Security Best Practices', level: 90, description: 'Application security implementation' },
      { name: 'Error Management', level: 85, description: 'Error handling and monitoring' }
    ]
  }
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false });

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-primary-navy">
      <div className="container mx-auto px-4">
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={skillsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy dark:text-white mb-4">
              Skills & Expertise
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(skillCategories).map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-secondary-teal text-white shadow-lg scale-105'
                    : 'border border-secondary-teal text-secondary-teal hover:bg-accent-light px-8 py-3 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-gray-800'
                }`}
                whileHover={{ scale: selectedCategory === category ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {skillCategories[category].title}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {skillCategories[selectedCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-navy dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>

                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-secondary-teal"
                  />
                </div>
                
                <div className="mt-2 text-right">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-secondary-teal bg-opacity-95 rounded-xl p-6 flex items-center justify-center"
                  >
                    <p className="text-white text-center">
                      {skill.description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}