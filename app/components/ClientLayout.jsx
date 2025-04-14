'use client';

import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Header from './Header';
import Footer from './Footer';
import ServiceWorkerRegistration from './ServiceWorkerRegistration';
import ScrollToTop from './ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      if (
        // Prevent Ctrl + C, Ctrl + S, Ctrl + U, F12
        (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 83 || e.keyCode === 85)) ||
        e.keyCode === 123
      ) {
        e.preventDefault();
      }
    };

    // Disable clipboard copy
    const handleCopy = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <body className="bg-white dark:bg-dark-bg min-h-screen font-sans text-gray-900 dark:text-dark-text-primary">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-20">
        {children}
      </main>
      <Footer />
      <ThemeToggle />
      <Analytics />
      <ServiceWorkerRegistration />
      <ScrollToTop />
    </body>
  );
}