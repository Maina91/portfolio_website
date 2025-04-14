'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-hover shadow-md z-50 border border-gray-200 dark:border-dark-border transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Image
          src="/images/moon_icon.png"
          alt="Dark mode"
          width={24}
          height={24}
          className="w-5 h-5 opacity-80"
        />
      ) : (
        <Image
          src="/images/sun_icon.png"
          alt="Light mode"
          width={24}
          height={24}
          className="w-5 h-5 opacity-90"
        />
      )}
    </motion.button>
  );
}