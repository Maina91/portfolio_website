'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {error.message || 'An error occurred while loading this page.'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-secondary-teal hover:bg-accent-dark text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-secondary-teal text-secondary-teal hover:bg-accent-light px-6 py-2 rounded-lg transition-colors dark:text-secondary-teal dark:border-secondary-teal dark:hover:bg-dark-hover"
          >
            Go home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}