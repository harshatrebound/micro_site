'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Trust & Psychological Safety',
    points: [
      'Create an environment where team members feel safe to take risks',
      'Build genuine connections through shared experiences and challenges'
    ],
    icon: (
      <svg className="h-10 w-10 text-[#FF4D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Communication & Collaboration',
    points: [
      'Develop effective communication patterns that last beyond activities',
      'Master the art of collaborative problem-solving',
      'Break down silos between teams and departments'
    ],
    icon: (
      <svg className="h-10 w-10 text-[#FF4D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Innovation & Growth',
    points: [
      'Foster a culture of creative thinking and experimentation',
      'Develop adaptability through diverse challenges',
      'Build resilience through shared achievements'
    ],
    icon: (
      <svg className="h-10 w-10 text-[#FF4D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
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

export default function KeyBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] dark:bg-[#1D1D1F] py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[800px] w-[800px] rotate-45 rounded-full border border-[#FF4D29]/10" />
        <div className="absolute h-[600px] w-[600px] rotate-45 rounded-full border border-[#FF4D29]/10" />
        <div className="absolute h-[400px] w-[400px] rotate-45 rounded-full border border-[#FF4D29]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sf-pro text-3xl font-bold tracking-tight text-[#FF4D29] sm:text-4xl lg:text-5xl">
            The Pillars of Strong Teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1D1D1F]/70 dark:text-white/70 font-sf-pro-text">
            Our scientifically designed activities strengthen the core elements that make teams truly exceptional
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-8 shadow-lg backdrop-blur-xl backdrop-saturate-[1.8] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:bg-black/40 dark:hover:bg-black/50">
                <div className="mb-6 inline-block rounded-2xl bg-[#F5F5F7] p-4 dark:bg-[#1D1D1F]/50">
                  {benefit.icon}
                </div>
                <h3 className="font-sf-pro mb-4 text-xl font-semibold text-[#FF4D29]">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.points.map((point, index) => (
                    <li key={index} className="flex items-start text-[#1D1D1F]/70 dark:text-white/70">
                      <svg className="mr-2 mt-1.5 h-4 w-4 flex-shrink-0 text-[#FF4D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="font-sf-pro-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 