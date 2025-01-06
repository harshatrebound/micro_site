'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Activities', href: '/activities' },
    { name: 'Ice Breakers', href: '/ice-breakers' },
    { name: 'Team Science', href: '/team-science' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      {/* Backdrop with gradient */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg' 
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
        }`} 
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Trebound"
                width={140}
                height={40}
                className={`transition-opacity duration-300 ${
                  isScrolled ? 'dark:invert' : 'brightness-0 invert'
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[15px] font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[#1D1D1F] dark:text-white' 
                    : 'text-white hover:text-white/90'
                } hover:text-[#FF4D29] dark:hover:text-[#FF4D29]`}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#FF4D29] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-4"
          >
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-200 ${
                isScrolled
                  ? 'text-[#1D1D1F] dark:text-white hover:bg-[#1D1D1F]/5 dark:hover:bg-white/10'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-[#FF4D29] px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden rounded-full p-2 hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${
                isScrolled ? 'text-[#1D1D1F] dark:text-white' : 'text-white'
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl mt-4 px-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[15px] font-medium text-[#1D1D1F] dark:text-white hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <Link
                href="/contact"
                className="block text-[15px] font-medium text-[#1D1D1F] dark:text-white hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="block w-full text-center rounded-full bg-[#FF4D29] px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
} 