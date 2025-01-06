import { bottomCTA } from '@/lib/data/homepage';
import Link from 'next/link';

export default function BottomCTA() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-primary-indigo/10 to-primary-teal/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-blue/20 to-transparent rounded-full blur-3xl animate-slow-spin" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-indigo/20 to-transparent rounded-full blur-3xl animate-slow-spin-reverse" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-xl backdrop-saturate-150 bg-white/30 dark:bg-gray-800/30 rounded-3xl p-8 sm:p-12 text-center border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {bottomCTA.headline}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {bottomCTA.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-blue rounded-full hover:bg-primary-blue/90 transition-colors duration-200 shadow-lg shadow-primary-blue/20"
            >
              {bottomCTA.buttons.primary}
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors duration-200 border border-white/20"
            >
              {bottomCTA.buttons.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 