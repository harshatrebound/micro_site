import { testimonials } from '@/lib/data/homepage';

export default function Testimonials() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white dark:from-gray-900" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-gray-900" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="backdrop-blur-xl backdrop-saturate-150 bg-white/30 dark:bg-gray-800/30 rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary-blue"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>
              
              {/* Content */}
              <blockquote className="relative">
                <p className="text-lg text-gray-900 dark:text-white mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 