import { newsletter } from '@/lib/data/homepage';

export default function Newsletter() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 via-primary-indigo/5 to-primary-teal/5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-xl backdrop-saturate-150 bg-white/30 dark:bg-gray-800/30 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {newsletter.headline}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {newsletter.description}
            </p>
          </div>
          
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-primary-blue text-white font-medium hover:bg-primary-blue/90 transition-colors duration-200 shadow-lg shadow-primary-blue/20"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
} 