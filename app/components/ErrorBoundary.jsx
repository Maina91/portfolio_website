'use client';
import { Component } from 'react';
import { motion } from 'framer-motion';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 text-center"
        >
          <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
            Something went wrong
          </h2>
          <p className="text-red-500 dark:text-red-300 mb-4">
            {this.state.error?.message || 'An error occurred while rendering this component'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try again
          </button>
        </motion.div>
      );
    }

    return this.props.children;
  }
}