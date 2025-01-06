'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const companies = [
  {
    name: 'Microsoft',
    logo: 'https://logo.clearbit.com/microsoft.com',
  },
  {
    name: 'Google',
    logo: 'https://logo.clearbit.com/google.com',
  },
  {
    name: 'Amazon',
    logo: 'https://logo.clearbit.com/amazon.com',
  },
  {
    name: 'Meta',
    logo: 'https://logo.clearbit.com/meta.com',
  },
  {
    name: 'IBM',
    logo: 'https://logo.clearbit.com/ibm.com',
  },
  {
    name: 'Deloitte',
    logo: 'https://logo.clearbit.com/deloitte.com',
  },
  {
    name: 'KPMG',
    logo: 'https://logo.clearbit.com/kpmg.com',
  },
  {
    name: 'PwC',
    logo: 'https://logo.clearbit.com/pwc.com',
  },
  {
    name: 'Accenture',
    logo: 'https://logo.clearbit.com/accenture.com',
  },
  {
    name: 'EY',
    logo: 'https://logo.clearbit.com/ey.com',
  },
];

export default function CompanyLogos() {
  return (
    <section className="relative bg-[#F5F5F7] dark:bg-black py-24">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sf-pro text-[28px] font-semibold text-[#1D1D1F] dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-2 text-[17px] text-[#1D1D1F]/60 dark:text-white/60 font-sf-pro-text">
            Join 500+ organizations transforming their teams with our science-backed approach
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F5F7] dark:from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F5F7] dark:from-black to-transparent z-10" />
          
          {/* Logo Slider */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 h-12 w-32 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 