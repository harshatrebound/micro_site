# Teambuilding.co.in Project Structure

## Files/Folders to Remove
1. `(login)` directory - Not needed for our public site
2. `(dashboard)` directory - Not needed for our public site
3. `drizzle.config.ts` - We'll use a simpler data structure
4. `middleware.ts` - We'll create our own if needed

## Core Structure to Keep
1. `app/` - For Next.js routing
2. `components/` - For reusable UI components
3. `lib/` - For utilities and helpers
4. `docs/` - For documentation
5. Configuration files:
   - `next.config.ts`
   - `package.json`
   - `tsconfig.json`
   - `postcss.config.mjs` (for Tailwind)
   - `.gitignore`

## New Structure to Create

### Pages (in app/)
```
app/
├── page.tsx (Homepage)
├── activities/
│   └── page.tsx
├── ice-breakers/
│   └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

### Components (in components/)
```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── home/
│   ├── Hero.tsx
│   ├── FeaturedActivities.tsx
│   └── Newsletter.tsx
├── activities/
│   ├── ActivityCard.tsx
│   └── ActivityGrid.tsx
├── ice-breakers/
│   ├── IceBreakerCard.tsx
│   └── CategoryFilter.tsx
├── blog/
│   ├── BlogCard.tsx
│   └── BlogGrid.tsx
└── shared/
    ├── Button.tsx
    ├── Card.tsx
    └── Input.tsx
```

### Lib Directory
```
lib/
├── utils/
│   ├── constants.ts
│   └── helpers.ts
└── data/
    ├── activities.ts
    ├── icebreakers.ts
    └── blog-posts.ts
```

## Implementation Steps
1. Clean up unnecessary files and folders
2. Set up basic routing structure
3. Create core layout components
4. Implement homepage
5. Build out feature pages one by one
6. Add content and data
7. Style and polish

## Design System
- Font: Manrope (already configured)
- Colors: Science/Tech-inspired palette
  - Primary: #007AFF (Apple Blue)
  - Secondary: #34C759 (Success Green)
  - Accent: #5856D6 (Deep Purple)
  - Background: #F2F2F7
  - Text: #1C1C1E

## Content Management
- Initially, we'll use static data in the `lib/data` directory
- Later can be connected to a CMS if needed

Would you like me to proceed with cleaning up the unnecessary files and implementing the new structure? 