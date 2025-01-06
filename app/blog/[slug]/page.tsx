'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPostBySlug, getRelatedPosts, BlogPost } from '@/lib/data/blog-posts';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const currentPost = getPostBySlug(params.slug);
    if (currentPost) {
      setPost(currentPost);
      setRelatedPosts(getRelatedPosts(currentPost));
    }
  }, [params.slug]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="relative mx-auto max-w-[800px] px-6 lg:px-8 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[14px] font-medium text-white ring-1 ring-white/20">
                  {post.category}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[14px] font-medium text-white ring-1 ring-white/20">
                  {post.readTime}
                </span>
              </div>
              <h1 className="font-sf-pro text-[48px] sm:text-[56px] lg:text-[64px] font-semibold tracking-tight text-white mb-6">
                {post.title}
              </h1>
              <p className="text-[24px] leading-relaxed text-white/90 font-sf-pro-text mb-12">
                {post.subtitle}
              </p>
              <div className="flex items-center gap-6">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="rounded-full ring-2 ring-white/20"
                />
                <div>
                  <p className="text-[18px] font-medium text-white">
                    {post.author.name}
                  </p>
                  <p className="text-[15px] text-white/60">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-sf-pro prose-headings:tracking-tight
                  prose-h2:text-[32px] prose-h2:font-semibold prose-h2:mt-16 prose-h2:mb-6
                  prose-h3:text-[24px] prose-h3:font-semibold prose-h3:mt-12 prose-h3:mb-4
                  prose-p:font-sf-pro-text prose-p:text-[18px] prose-p:leading-relaxed prose-p:text-[#1D1D1F]/80 dark:prose-p:text-white/80
                  prose-a:text-[#FF4D29] hover:prose-a:text-[#FF4D29]/80 prose-a:no-underline
                  prose-strong:text-[#1D1D1F] dark:prose-strong:text-white prose-strong:font-semibold
                  prose-ul:my-6 prose-li:text-[#1D1D1F]/80 dark:prose-li:text-white/80 prose-li:font-sf-pro-text prose-li:text-[18px] prose-li:leading-relaxed
                  prose-img:rounded-2xl prose-img:shadow-xl"
              >
                {/* Article Headers */}
                <div className="not-prose mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[#1D1D1F]/5 dark:bg-white/10 px-4 py-1.5 text-[14px] font-medium text-[#1D1D1F] dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-[32px] font-semibold text-[#1D1D1F] dark:text-white mb-4">
                    Key Takeaways
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF4D29]/10 dark:bg-[#FF4D29]/20 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-[#FF4D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[17px] text-[#1D1D1F]/80 dark:text-white/80">
                        Psychological safety is crucial for high-performing teams
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF4D29]/10 dark:bg-[#FF4D29]/20 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-[#FF4D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[17px] text-[#1D1D1F]/80 dark:text-white/80">
                        Shared mental models improve team performance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF4D29]/10 dark:bg-[#FF4D29]/20 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-[#FF4D29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[17px] text-[#1D1D1F]/80 dark:text-white/80">
                        Structured play enhances team dynamics
                      </span>
                    </li>
                  </ul>
                </div>

                <ReactMarkdown>{post.content}</ReactMarkdown>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-12">
                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-3xl bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl p-8"
                >
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] dark:text-white mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-[15px] text-[#1D1D1F]/60 dark:text-white/60 mb-6">
                    Get the latest insights on team building and organizational development delivered to your inbox.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Work email"
                        className="w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-full bg-[#FF4D29] px-6 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    >
                      Subscribe
                    </button>
                  </form>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-3xl bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl p-8"
                >
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] dark:text-white mb-6">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Team Science', 'Leadership', 'Remote Work', 'Innovation', 'Wellness'].map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center rounded-full bg-[#1D1D1F]/5 dark:bg-white/10 px-4 py-1.5 text-[14px] font-medium text-[#1D1D1F] dark:text-white hover:bg-[#1D1D1F]/10 dark:hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Posts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="rounded-3xl bg-white/[0.7] dark:bg-white/[0.05] backdrop-blur-xl shadow-2xl p-8"
                >
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] dark:text-white mb-6">
                    Recent Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedPosts.slice(0, 3).map((relatedPost) => (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                        <div className="group">
                          <h4 className="text-[16px] font-medium text-[#1D1D1F] dark:text-white group-hover:text-[#FF4D29] transition-colors duration-200 mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-[14px] text-[#1D1D1F]/60 dark:text-white/60">
                            {relatedPost.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-12 border-t border-[#1D1D1F]/10 dark:border-white/10">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#1D1D1F]/5 dark:bg-white/10 px-4 py-2 text-[15px] font-medium text-[#1D1D1F] dark:text-white hover:bg-[#1D1D1F]/10 dark:hover:bg-white/20 transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-white dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-sf-pro text-[32px] font-semibold text-[#1D1D1F] dark:text-white mb-12">
                More Articles Like This
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {relatedPosts.map((relatedPost, index) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="group h-full"
                    >
                      <div className="rounded-2xl overflow-hidden aspect-[3/2] mb-6 bg-[#F5F5F7] dark:bg-black">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4">
                        <span className="inline-flex items-center rounded-full bg-[#1D1D1F]/5 dark:bg-white/10 px-4 py-1.5 text-[14px] font-medium text-[#1D1D1F] dark:text-white">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-[20px] font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#FF4D29] transition-colors duration-200">
                          {relatedPost.title}
                        </h3>
                        <p className="text-[16px] text-[#1D1D1F]/60 dark:text-white/60 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                          <Image
                            src={relatedPost.author.avatar}
                            alt={relatedPost.author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <div>
                            <p className="text-[14px] font-medium text-[#1D1D1F] dark:text-white">
                              {relatedPost.author.name}
                            </p>
                            <p className="text-[12px] text-[#1D1D1F]/60 dark:text-white/60">
                              {relatedPost.readTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
} 