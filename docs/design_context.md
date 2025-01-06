# Design System & Inspiration Guide

## Core Design Principles
1. **Modern Minimalism**
   - Clean, uncluttered layouts
   - Purposeful white space
   - Focus on content hierarchy

2. **Immersive Imagery**
   - Full-screen hero sections
   - Subtle parallax effects
   - High-quality scientific activity photos
   - Smooth hover animations

## Color Palette

### Primary Colors
```css
--primary-orange: #FF4D29;  /* Vibrant Orange - Primary brand color */
--primary-dark: #1D1D1F;    /* Dark - Headings & text */
--primary-gray: #6B7280;    /* Neutral Gray - Body text */
```

### Background Colors
```css
--bg-light: #F5F5F7;        /* Light gray - Main background */
--bg-dark: #1D1D1F;         /* Dark - Dark mode background */
--bg-card: #F9FAFB;         /* Light gray - Card backgrounds */
```

### Text Colors
```css
--text-heading: #1D1D1F;    /* Dark - Headings */
--text-body: #1D1D1F/70;    /* Medium gray - Body text */
--text-light: #9CA3AF;      /* Light gray - Secondary text */
--text-white: #FFFFFF;      /* White - On dark backgrounds */
```

### UI Colors
```css
--ui-border: #E5E7EB;       /* Light borders */
--ui-hover: #F3F4F6;        /* Hover states */
--ui-focus: #E5E7EB;        /* Focus rings */
--ui-divider: #F3F4F6;      /* Subtle dividers */
```

## Frosted Glass Effects

### Primary Frost (Light)
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Dark Mode Frost
```css
background: rgba(29, 29, 31, 0.7);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Card Frost
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.2);
```

## Typography

### Font Stack
- Primary: SF Pro Display (Apple's system font)
- Secondary: SF Pro Text (For body text)
- Fallback: -apple-system, BlinkMacSystemFont, system-ui, sans-serif

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-7xl: 4.5rem;    /* 72px */
```

## Spacing System
```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
--spacing-3xl: 4rem;     /* 64px */
```

## UI Components

### Buttons
1. **Primary Button**
   ```css
   background: #FF4D29;
   color: white;
   border-radius: 9999px;
   padding: 1rem 2rem;
   transition: all 0.3s ease;
   hover:scale-[1.02];
   hover:shadow-lg;
   ```

2. **Secondary Button**
   ```css
   background: transparent;
   color: #FF4D29;
   border: 2px solid #FF4D29;
   border-radius: 9999px;
   padding: 1rem 2rem;
   transition: all 0.3s ease;
   hover:scale-[1.02];
   hover:shadow-lg;
   ```

### Cards
1. **Feature Cards**
   ```css
   background: rgba(255, 255, 255, 0.7);
   backdrop-filter: blur(12px) saturate(180%);
   border: 1px solid rgba(255, 255, 255, 0.2);
   border-radius: 1.5rem;
   padding: 2rem;
   transition: all 0.3s ease;
   hover:scale-[1.02];
   hover:shadow-xl;
   ```

2. **Activity Cards**
   ```css
   border-radius: 1.5rem;
   overflow: hidden;
   background: #FF4D29;
   mix-blend-multiply;
   transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
   ```

## Animation Guidelines

### Micro-interactions
- Scale on hover: 1.02
- Transition duration: 300ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Subtle opacity changes
- Button state animations

### Content Animations
- Stagger children: 150ms
- Fade up distance: 20px
- Duration: 400ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)

### Image Hover Effects
- Scale: 1.05
- Duration: 700ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Overlay opacity changes

## Dark Mode
- Text: White with 70% opacity for body
- Background: #1D1D1F
- Cards: rgba(0, 0, 0, 0.4)
- Accent: #FF4D29 (consistent with light mode)
- Frosted glass: rgba(29, 29, 31, 0.7)

## Responsive Design
- Mobile-first approach
- Breakpoints:
  ```css
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px
  ```
- Fluid typography
- Adaptive layouts
- Stack on mobile, grid on desktop
- Maintain proper spacing hierarchy 