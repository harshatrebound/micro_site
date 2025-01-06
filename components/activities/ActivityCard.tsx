'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity } from '@/types/activity';

interface ActivityCardProps {
  activity: Activity;
  priority?: boolean;
}

export default function ActivityCard({ activity, priority = false }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
    >
      <Link href={`/activities/${activity.slug}`} className="block">
        <div className="aspect-[16/9] relative overflow-hidden rounded-t-2xl">
          <Image
            src={activity.activityImage}
            alt={activity.altText || activity.name}
            fill
            priority={priority}
            className="object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[13px] font-medium text-white ring-1 ring-white/20">
                {activity.activityType}
              </span>
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[13px] font-medium text-white ring-1 ring-white/20">
                {activity.duration}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-white font-sf-pro">
              {activity.name}
            </h3>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-[17px] leading-relaxed text-[#1D1D1F]/80 dark:text-white/80 font-sf-pro-text line-clamp-2">
            {activity.metaDescription}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center text-[15px] font-medium text-[#FF4D29]">
                {activity.groupSize} participants
              </span>
              <span className="inline-flex items-center text-[15px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                {activity.activityLevel}
              </span>
            </div>
            <div className="flex items-center text-[15px] font-medium text-[#FF4D29] group-hover:translate-x-1 transition-transform duration-200">
              Learn more
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 