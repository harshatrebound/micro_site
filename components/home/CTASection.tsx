'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  {
    number: '500+',
    label: 'Organizations Transformed'
  },
  {
    number: '100k+',
    label: 'Professionals Impacted'
  },
  {
    number: '40%',
    label: 'Avg. Communication Improvement'
  },
  {
    number: '63%',
    label: 'Enhanced Problem Solving'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#1D1D1F] py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[1000px] w-[1000px] rounded-full bg-gradient-to-b from-[#FF4D29]/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-sf-pro text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Transform Your Team Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/70 font-sf-pro-text"
          >
            Join hundreds of forward-thinking organizations that have elevated their team performance through our science-backed approach
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-8 text-center sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-4 py-8 backdrop-blur-xl"
            >
              <div className="font-sf-pro text-3xl font-bold text-[#FF4D29] sm:text-4xl">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-medium text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#contact-form"
            className="group relative overflow-hidden rounded-full bg-[#FF4D29] px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/[0.1] to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
            Schedule a Free Consultation
          </Link>
          <Link
            href="/case-studies"
            className="group relative overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <span className="absolute inset-0 rounded-full bg-white/[0.05] opacity-0 transition-opacity group-hover:opacity-100" />
            View Success Stories
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 