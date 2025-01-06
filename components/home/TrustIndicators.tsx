import { trustIndicators } from '@/lib/data/homepage';

export default function TrustIndicators() {
  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="backdrop-blur-md backdrop-saturate-150 bg-white/30 dark:bg-gray-800/30 rounded-full px-6 py-3 border border-white/20"
            >
              <div className="flex items-center space-x-2">
                {/* Badge Icon */}
                <svg
                  className="w-5 h-5 text-primary-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {indicator}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 