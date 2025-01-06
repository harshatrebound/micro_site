import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] dark:bg-black border-t border-[#1D1D1F]/10 dark:border-white/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Trebound"
                width={140}
                height={40}
                className="dark:invert"
              />
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed text-[#1D1D1F]/60 dark:text-white/60 max-w-sm">
              Transforming team dynamics through science-backed activities and immersive experiences. Building stronger teams, one activity at a time.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {['twitter', 'linkedin', 'instagram'].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com/trebound`}
                  className="w-10 h-10 rounded-full bg-white dark:bg-white/5 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src={`/icons/${social}.svg`}
                    alt={social}
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {['About', 'Careers', 'Press', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-[15px] text-[#1D1D1F]/60 dark:text-white/60 hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              {['Activities', 'Ice Breakers', 'Team Science', 'Case Studies'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[15px] text-[#1D1D1F]/60 dark:text-white/60 hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {['Contact', 'Help Center', 'Terms', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-[15px] text-[#1D1D1F]/60 dark:text-white/60 hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-6">
              Stay Updated
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full bg-[#FF4D29] px-6 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1D1D1F]/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[14px] text-[#1D1D1F]/60 dark:text-white/60">
              © {new Date().getFullYear()} Trebound. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/terms"
                className="text-[14px] text-[#1D1D1F]/60 dark:text-white/60 hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-[14px] text-[#1D1D1F]/60 dark:text-white/60 hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-[14px] text-[#1D1D1F]/60 dark:text-white/60 hover:text-[#FF4D29] dark:hover:text-[#FF4D29] transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 