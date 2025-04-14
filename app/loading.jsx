'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-gray-900">
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-secondary-teal dark:bg-secondary-teal/90 rounded-full shadow-lg"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}