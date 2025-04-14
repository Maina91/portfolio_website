'use client';
import { withDynamicImport } from '../components/withDynamicImport';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const DynamicExperience = withDynamicImport(() => import('../components/Experience'));

export default function ExperiencePage() {
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: false });

  return (
    <motion.div
      ref={experienceRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={experienceInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <DynamicExperience />
    </motion.div>
  );
}