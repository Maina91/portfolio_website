'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full min-h-[200px] flex items-center justify-center"
  >
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-secondary-teal/80 dark:bg-secondary-teal/90 rounded-full shadow-lg"
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
    </div>
  </motion.div>
);

export function withDynamicImport(importFunc, loadingComponent = <LoadingSpinner />) {
  const DynamicComponent = dynamic(importFunc, {
    loading: () => loadingComponent,
    ssr: false,
  });

  return function WithDynamicImport(props) {
    return (
      <Suspense fallback={loadingComponent}>
        <DynamicComponent {...props} />
      </Suspense>
    );
  };
}