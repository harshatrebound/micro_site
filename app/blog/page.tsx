'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getRecentPosts, getFeaturedPosts, BlogPost } from '@/lib/data/blog-posts';

const categories = [
  'All',
  'Research & Insights',
  'Remote Work',
  'Wellness',
  'Innovation'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const featuredPosts = getFeaturedPosts();
  const allPosts = getRecentPosts();
  
  const filteredPosts = selectedCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Blog Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="relative mx-auto max-w-[1120px] px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-sf-pro text-[48px] sm:text-[56px] lg:text-[64px] font-semibold tracking-tight text-white mb-6">
                Insights & Stories
              </h1>
              <p className="max-w-2xl text-[20px] leading-relaxed text-white/90 font-sf-pro-text">
                Explore the latest research, trends, and strategies in team building and organizational development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="relative -mt-32 mb-24 z-10">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="space-y-4">
                      <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[14px] font-medium text-white ring-1 ring-white/20">
                        {post.category}
                      </span>
                      <h2 className="text-[28px] font-semibold text-white">
                        {post.title}
                      </h2>
                      <p className="text-[16px] text-white/80 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 pt-4">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="rounded-full ring-2 ring-white/20"
                        />
                        <div>
                          <p className="text-[14px] font-medium text-white">
                            {post.author.name}
                          </p>
                          <p className="text-[12px] text-white/60">
                            {post.readTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-20 py-4 bg-[#F5F5F7]/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  inline-flex items-center rounded-full px-6 py-2.5 text-[15px] font-medium transition-all duration-200
                  ${selectedCategory === category
                    ? 'bg-[#1D1D1F] text-white dark:bg-white dark:text-[#1D1D1F] shadow-lg'
                    : 'bg-white/60 text-[#1D1D1F] hover:bg-white/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="rounded-2xl overflow-hidden aspect-[3/2] mb-8 bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-lg">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-[#1D1D1F]/5 dark:bg-white/10 px-4 py-1.5 text-[14px] font-medium text-[#1D1D1F] dark:text-white">
                        {post.category}
                      </span>
                      <span className="text-[14px] text-[#1D1D1F]/60 dark:text-white/60">
                        {post.readTime}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[24px] font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#FF4D29] transition-colors duration-200 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-[16px] text-[#1D1D1F]/60 dark:text-white/60 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-[#1D1D1F]/5 dark:border-white/10">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-[14px] font-medium text-[#1D1D1F] dark:text-white">
                          {post.author.name}
                        </p>
                        <p className="text-[12px] text-[#1D1D1F]/60 dark:text-white/60">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 