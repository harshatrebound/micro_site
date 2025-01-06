import { whyChooseUs } from '@/lib/data/homepage';

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-indigo/5" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <div 
              key={index}
              className="backdrop-blur-md backdrop-saturate-150 bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 border border-white/20 shadow-xl"
            >
              {/* Icon placeholder - replace with actual icons */}
              <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-primary-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              
              <ul className="space-y-3">
                {reason.points.map((point, pointIndex) => (
                  <li 
                    key={pointIndex}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-primary-blue mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 