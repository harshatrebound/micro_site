'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg-light">
      {/* Primary Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-gradient-radial from-accent-orange/30 to-transparent blur-3xl"
      />

      {/* Secondary Gradient */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -right-[10%] top-[40%] h-[600px] w-[600px] rounded-full bg-gradient-radial from-accent-blue/20 to-transparent blur-3xl"
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"
        style={{
          backgroundSize: '30px 30px',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
        }}
      />
    </div>
  );
} 