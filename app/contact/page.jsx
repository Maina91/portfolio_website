'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { socialLinks } from '../data/footerData';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });
        reset(); // Clear the form
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={contactInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary-navy dark:text-white mb-12">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      maxLength: { value: 50, message: 'Name cannot exceed 50 characters' },
                      pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message: 'Name should only contain letters and spaces'
                      }
                    })}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary-teal bg-white dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      },
                      maxLength: { value: 100, message: 'Email cannot exceed 100 characters' }
                    })}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary-teal bg-white dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters long' },
                      maxLength: { value: 1000, message: 'Message cannot exceed 1000 characters' }
                    })}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary-teal bg-white dark:bg-gray-700 dark:text-white`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                  )}
                </div>

                {submitStatus.message && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold text-primary-navy dark:text-white mb-4">
                  Connect With Me
                </h2>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mainaedwin913@gmail.com
                  </p>
                  <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +254 769 307 566
                  </p>
                  <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 text-secondary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Nairobi, Kenya
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-secondary-teal dark:text-gray-400 dark:hover:text-secondary-teal transition-colors duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036285!2d36.7069375!3d-1.3028583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1680444363700!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}