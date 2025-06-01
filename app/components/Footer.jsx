'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/footerData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 sm:col-span-1 space-y-2 sm:space-y-4"
            >
              <Link href="/" className="text-xl sm:text-2xl font-bold text-primary-navy dark:text-dark-text-primary">
                Maina
              </Link>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-dark-text-secondary">
                Full-stack software engineer specializing in building exceptional digital experiences.
              </p>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2 sm:space-y-4"
            >
              <h3 className="text-base sm:text-lg font-semibold text-primary-navy dark:text-dark-text-primary">Connect</h3>
              <ul className="space-y-1 sm:space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-dark-text-muted hover:text-secondary-teal dark:hover:text-secondary-teal transition-colors"
                    >
                      <span className="w-4 h-4 sm:w-5 sm:h-5">{link.icon}</span>
                      <span className="text-xs sm:text-sm">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2 sm:space-y-4"
            >
              <h3 className="text-base sm:text-lg font-semibold text-primary-navy dark:text-white">Contact</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm">mainaedwin913@gmail.com</span>
                </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                  <span className="text-xs sm:text-sm">+254 769 307 566</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Nairobi, Kenya</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-gray-200 dark:border-dark-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
          >
            <p className="text-xs sm:text-sm text-gray-600 dark:text-dark-text-muted">
              © {currentYear} Maina Edwin. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}