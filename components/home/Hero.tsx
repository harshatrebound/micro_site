'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
        alt="Team building activity"
        fill
        className="object-cover object-center scale-[1.02] transition-transform duration-[20s] motion-safe:animate-subtle-zoom"
        priority
      />
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.7] p-12 shadow-2xl backdrop-blur-2xl backdrop-saturate-[1.8] dark:bg-black/[0.7] transition-all duration-500">
          <h1 className="font-sf-pro mb-6 text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building Exceptional Teams
            <span className="mt-2 block text-[#FF4D29] dark:text-[#FF4D29]">
              Through Science & Play
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-[#1D1D1F]/80 dark:text-white/80 md:text-2xl font-sf-pro-text">
            Transform your workplace culture with research-backed team building experiences that foster trust, enhance communication, and spark innovation
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              href="/activities"
              className="group relative overflow-hidden rounded-full bg-[#FF4D29] px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/[0.1] to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
              Explore Team Activities
            </Link>
            <Link 
              href="/contact"
              className="group relative overflow-hidden rounded-full border-2 border-[#FF4D29] bg-transparent px-8 py-4 text-lg font-semibold text-[#FF4D29] transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <span className="absolute inset-0 rounded-full bg-[#FF4D29]/[0.05] opacity-0 transition-opacity group-hover:opacity-100" />
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="h-8 w-8 text-white/80 drop-shadow-lg transition-opacity hover:text-white"
          fill="none" 
          strokeWidth="1.5" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 