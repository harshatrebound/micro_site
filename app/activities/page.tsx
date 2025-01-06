'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ActivityCard from '@/components/activities/ActivityCard';
import { Activity } from '@/types/activity';

// Mock data - Replace with actual data fetching
const mockActivities: Activity[] = [
  {
    name: 'Acid Bridge',
    slug: 'acid-bridge-8fea8',
    collectionId: '65b7e5d16bf7b75b5d120b26',
    itemId: '676ed65e21f4f8f928607c97',
    metaTitle: 'Acid Bridge Challenge: Build Your Way to Success with Strategic Teamwork',
    metaDescription: 'Take on the Acid Bridge challenge! Perfect for teams looking to enhance their problem-solving, strategic planning, and communication skills in a fun, engaging, and slightly perilous environment.',
    activityImage: 'https://cdn.prod.website-files.com/61ead410cee1ea4809aa2b31/676a7936e484cc03c654e9d7_6644c33ae4b873f3c0cf4808_Acid%2520Bridge.webp',
    altText: '',
    tagline: 'Strategize, Construct, and Traverse: Cross the Acid Bridge to Success!',
    description: 'The ultimate objective of this activity is for the participants to cascade through an imaginary forest covered with lava/acid and the only way to proceed further is by navigating through the forest while stepping on rocks which are resistant to the dangerous acid.',
    activityType: 'Indoor/Outdoor',
    activityVideo: 'https://www.youtube.com/watch?v=9GhKARzK2o0',
    groupSize: '15-20',
    duration: '15 Mins',
    targetAreas: 'Freshers / Mid-Management / Leaders / Start-ups',
    mainStreamActivity: true,
    canonicalTag: '<link rel="canonical" href="https://www.trebound.com/team-building/acid-bridge" />',
    bluePrint: '...',
    activityTags: ['off-the-shelf-activities'],
    activityLevel: 'High',
    impactOnDynamics: '...',
    activityMainTag: '',
    price: 'INR 70000',
    aptFor: ['Freshers', 'Mid-Management', 'Leaders', 'Start-ups'],
    values: ['Problem-Solving']
  }
];

const activityTypes = ['All', 'Indoor', 'Outdoor', 'Indoor/Outdoor', 'Virtual'];
const activityLevels = ['All', 'Low', 'Medium', 'High'];

export default function ActivitiesPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = mockActivities.filter(activity => {
    const matchesType = selectedType === 'All' || activity.activityType.includes(selectedType);
    const matchesLevel = selectedLevel === 'All' || activity.activityLevel === selectedLevel;
    const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.metaDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4D29]/10 to-transparent" />
        <div className="relative mx-auto max-w-[1120px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-sf-pro text-[48px] sm:text-[56px] lg:text-[64px] font-semibold tracking-tight text-[#1D1D1F] dark:text-white mb-6">
              Team Building Activities
            </h1>
            <p className="mx-auto max-w-2xl text-[20px] leading-relaxed text-[#1D1D1F]/80 dark:text-white/80 font-sf-pro-text">
              Discover a wide range of engaging activities designed to strengthen team bonds, enhance communication, and boost productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-10 bg-[#F5F5F7]/80 dark:bg-black/80 backdrop-blur-xl border-b border-[#1D1D1F]/10 dark:border-white/10">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="rounded-full px-4 py-2 text-[15px] bg-white/70 dark:bg-white/5 border border-[#1D1D1F]/10 dark:border-white/10 text-[#1D1D1F] dark:text-white focus:ring-2 focus:ring-[#FF4D29] transition-all duration-200"
              >
                {activityTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="rounded-full px-4 py-2 text-[15px] bg-white/70 dark:bg-white/5 border border-[#1D1D1F]/10 dark:border-white/10 text-[#1D1D1F] dark:text-white focus:ring-2 focus:ring-[#FF4D29] transition-all duration-200"
              >
                {activityLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className="w-full sm:w-auto">
              <input
                type="search"
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-[300px] rounded-full px-4 py-2 text-[15px] bg-white/70 dark:bg-white/5 border border-[#1D1D1F]/10 dark:border-white/10 text-[#1D1D1F] dark:text-white focus:ring-2 focus:ring-[#FF4D29] transition-all duration-200 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredActivities.map((activity, index) => (
              <ActivityCard
                key={activity.itemId}
                activity={activity}
                priority={index < 2}
              />
            ))}
          </div>
          
          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-[#1D1D1F] dark:text-white font-sf-pro">
                No activities found
              </h3>
              <p className="mt-2 text-[#1D1D1F]/60 dark:text-white/60 font-sf-pro-text">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 