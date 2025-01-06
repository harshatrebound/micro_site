'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity } from '@/types/activity';
import BookingModal from '@/components/activities/BookingModal';

// Mock data - Replace with actual data fetching
const mockActivity: Activity = {
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
};

const features = [
  {
    name: 'Team Size',
    value: '15-20 participants',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Duration',
    value: '15 Minutes',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Difficulty',
    value: 'High',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: 'Location',
    value: 'Indoor/Outdoor',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ActivityPage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    participants: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image
          src={mockActivity.activityImage}
          alt={mockActivity.altText || mockActivity.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="relative mx-auto max-w-[1120px] px-6 lg:px-8 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[14px] font-medium text-white ring-1 ring-white/20">
                    {mockActivity.activityType}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[14px] font-medium text-white ring-1 ring-white/20">
                    {mockActivity.duration}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[14px] font-medium text-white ring-1 ring-white/20">
                    {mockActivity.groupSize} participants
                  </span>
                </div>
                <h1 className="font-sf-pro text-[48px] sm:text-[56px] lg:text-[64px] font-semibold tracking-tight text-white mb-6">
                  {mockActivity.name}
                </h1>
                <p className="max-w-2xl text-[20px] leading-relaxed text-white/90 font-sf-pro-text">
                  {mockActivity.tagline}
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <div className="rounded-2xl bg-white/[0.15] backdrop-blur-xl p-6 lg:min-w-[320px]">
                  <div className="mb-4">
                    <p className="text-[14px] font-medium text-white/60">
                      Starting from
                    </p>
                    <p className="text-[32px] font-semibold text-white">
                      {mockActivity.price}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#1D1D1F] transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="relative -mt-12 mb-24">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
          <div className="rounded-3xl bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl p-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4D29]/10 dark:bg-[#FF4D29]/20 text-[#FF4D29]">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                      {feature.name}
                    </p>
                    <p className="mt-1 text-[17px] font-semibold text-[#1D1D1F] dark:text-white">
                      {feature.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About Section */}
              <div>
                <h2 className="font-sf-pro text-[32px] font-semibold text-[#1D1D1F] dark:text-white">
                  About the Activity
                </h2>
                <div className="mt-6 text-[17px] leading-relaxed text-[#1D1D1F]/80 dark:text-white/80 font-sf-pro-text">
                  {mockActivity.description}
                </div>
              </div>

              {/* Video Section */}
              {mockActivity.activityVideo && (
                <div>
                  <h3 className="font-sf-pro text-[24px] font-semibold text-[#1D1D1F] dark:text-white mb-6">
                    Watch in Action
                  </h3>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-[#1D1D1F]/5 dark:bg-white/5">
                    <iframe
                      width="100%"
                      height="100%"
                      src={mockActivity.activityVideo.replace('watch?v=', 'embed/')}
                      title="Activity Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Target Areas Section */}
              <div>
                <h3 className="font-sf-pro text-[24px] font-semibold text-[#1D1D1F] dark:text-white mb-6">
                  Perfect For
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mockActivity.aptFor.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-4 rounded-2xl bg-white/40 dark:bg-white/5 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF4D29]/10 dark:bg-[#FF4D29]/20 text-[#FF4D29]">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[15px] font-medium text-[#1D1D1F] dark:text-white">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values Section */}
              <div>
                <h3 className="font-sf-pro text-[24px] font-semibold text-[#1D1D1F] dark:text-white mb-6">
                  Core Values
                </h3>
                <div className="flex flex-wrap gap-3">
                  {mockActivity.values.map((value) => (
                    <span
                      key={value}
                      className="inline-flex items-center rounded-full bg-[#1D1D1F]/10 dark:bg-white/10 px-4 py-2 text-[15px] font-medium text-[#1D1D1F] dark:text-white"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="rounded-3xl bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl p-8">
                  <div className="mb-6">
                    <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                      Starting from
                    </p>
                    <p className="text-[32px] font-semibold text-[#FF4D29]">
                      {mockActivity.price}
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                          Duration
                        </p>
                        <p className="mt-1 text-[15px] font-semibold text-[#1D1D1F] dark:text-white">
                          {mockActivity.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                          Group Size
                        </p>
                        <p className="mt-1 text-[15px] font-semibold text-[#1D1D1F] dark:text-white">
                          {mockActivity.groupSize}
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                          Difficulty
                        </p>
                        <p className="mt-1 text-[15px] font-semibold text-[#1D1D1F] dark:text-white">
                          {mockActivity.activityLevel}
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                          Location
                        </p>
                        <p className="mt-1 text-[15px] font-semibold text-[#1D1D1F] dark:text-white">
                          {mockActivity.activityType}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full inline-flex items-center justify-center rounded-full bg-[#FF4D29] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <div className="rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl p-2">
          <div className="flex items-center gap-4">
            <div className="pl-6">
              <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                Starting from
              </p>
              <p className="text-[17px] font-semibold text-[#FF4D29]">
                {mockActivity.price}
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-[#FF4D29] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        activity={mockActivity}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
} 