'use client';

import Header from '@/components/layout/Header';
import AnimatedBackground from '@/components/shared/AnimatedBackground';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="min-h-screen bg-white antialiased">
      <AnimatedBackground />
      <div className="relative min-h-screen backdrop-blur-[100px]">
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </div>
    </body>
  );
} 