'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ResumeContent() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-navy dark:text-white mb-4">My Resume</h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">View or download my complete professional background</p>
            </div>
            <Link
              href="/Maina_Edwin_Resume.pdf"
              target="_blank"
              // className="flex items-center gap-3 bg-secondary-teal hover:bg-secondary-teal/90 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
              className="flex items-center gap-3 border border-secondary-teal text-secondary-teal hover:bg-accent-light px-6 py-3 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-gray-800"
            >
              <Image
                src="/images/download-icon.png"
                alt="Download"
                width={24}
                height={24}
                className="w-6 h-6 dark:invert transform group-hover:-translate-y-1 transition-transform duration-300"
              />
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm mx-auto max-w-[1100px]"
          >
            <div className="relative p-4 md:p-6 bg-gradient-to-b from-gray-50/50 to-white/20 dark:from-gray-800/50 dark:to-gray-900/20">
              <iframe
                src="/Maina_Edwin_Resume.pdf#zoom=95&view=Fit"
                className="w-full h-[calc(100vh-320px)] md:h-[calc(100vh-280px)] max-h-[950px] min-h-[750px] rounded-xl shadow-inner bg-white dark:bg-gray-900"
                title="Resume"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none rounded-2xl" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Can't view the resume?
              <Link
                href="/Maina_Edwin_Resume.pdf"
                target="_blank"
                className="text-secondary-teal hover:text-secondary-teal/90 font-medium inline-flex items-center gap-1 group"
              >
                Download it here
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}