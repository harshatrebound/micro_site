'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';

interface Activity {
  title: string;
  description: string;
  image: string;
  category: string;
}

const activities: Activity[] = [
  {
    title: 'Collaborative Innovation Lab',
    description: 'Transform ideas into reality through structured innovation workshops and hands-on experimentation.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    category: 'Innovation'
  },
  {
    title: 'Strategic Thinking Challenges',
    description: 'Develop critical thinking and problem-solving skills through data-driven decision making scenarios.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'Leadership'
  },
  {
    title: 'Sustainability Quest',
    description: 'Engage teams in environmental challenges that promote sustainable thinking and social responsibility.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80',
    category: 'Social Impact'
  },
  {
    title: 'Future-Ready Teams',
    description: "Prepare your team for tomorrow's challenges with adaptive learning and emerging technology workshops.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    category: 'Technology'
  }
];

export default function FeaturedActivities() {
  return (
    <section className="relative bg-[#F5F5F7] dark:bg-black py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F5F7]/50 to-[#F5F5F7] dark:via-black/50 dark:to-black pointer-events-none" />
      
      <div className="relative mx-auto max-w-[1120px] px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sf-pro text-[40px] font-semibold tracking-tight text-[#FF4D29] sm:text-[44px] lg:text-[48px] mb-4"
          >
            Transformative Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-[20px] leading-relaxed text-[#1D1D1F]/80 dark:text-white/80 font-sf-pro-text"
          >
            Discover unique activities that strengthen bonds and develop essential team capabilities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/9] relative overflow-hidden rounded-t-2xl">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[13px] font-medium text-white ring-1 ring-white/20">
                    {activity.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-white font-sf-pro">
                    {activity.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-[17px] leading-relaxed text-[#1D1D1F]/80 dark:text-white/80 font-sf-pro-text">
                  {activity.description}
                </p>
                <div className="mt-6 flex items-center">
                  <button className="inline-flex items-center text-[15px] font-medium text-[#FF4D29] hover:text-[#FF4D29]/80 transition-colors duration-200">
                    Learn more
                    <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 