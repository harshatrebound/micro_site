/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF4D29',
          navy: '#18181B',
          gray: '#6B7280',
        },
        bg: {
          white: '#FFFFFF',
          terminal: '#18181B',
          card: '#F9FAFB',
        },
        text: {
          heading: '#18181B',
          body: '#6B7280',
          light: '#9CA3AF',
          code: '#E5E7EB',
        },
        accent: {
          orange: '#FF4D29',
          blue: '#3B82F6',
          green: '#10B981',
          red: '#EF4444',
        },
        ui: {
          border: '#E5E7EB',
          hover: '#F3F4F6',
          focus: '#E5E7EB',
          divider: '#F3F4F6',
        },
        terminal: {
          red: '#FF5F56',
          yellow: '#FFBD2E',
          green: '#27C93F',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
} 