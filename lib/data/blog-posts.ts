export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'science-of-team-building',
    title: 'The Science Behind Effective Team Building',
    subtitle: 'Understanding the psychology of high-performing teams',
    excerpt: 'Discover how modern neuroscience and psychological research are revolutionizing our approach to team building and group dynamics.',
    content: `Team building isn't just about fun activities and trust falls. Modern neuroscience reveals fascinating insights into how our brains respond to collaborative challenges and social bonding experiences.

Recent studies in organizational psychology have identified key factors that contribute to team success:

## Psychological Safety
Google's Project Aristotle found that psychological safety is the most crucial factor in high-performing teams. When team members feel safe to take risks and be vulnerable, innovation flourishes.

## Shared Mental Models
Teams that develop shared mental models - common understanding of goals, processes, and roles - demonstrate superior performance in complex tasks.

## Social Synchrony
Activities that promote synchronized movement and shared experiences trigger the release of oxytocin, often called the "bonding hormone," strengthening team cohesion.

## The Role of Play
Structured play in team building serves multiple cognitive functions:
- Reduces stress and anxiety
- Promotes creative problem-solving
- Strengthens neural pathways for collaboration
- Enhances memory formation

Our approach to team building incorporates these scientific principles to create meaningful, lasting impact on team dynamics.`,
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Organizational Psychologist',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    category: 'Research & Insights',
    tags: ['Psychology', 'Team Science', 'Research', 'Leadership'],
    readTime: '6 min read',
    publishedAt: '2024-02-15',
    featured: true
  },
  {
    id: '2',
    slug: 'remote-team-building-strategies',
    title: 'Remote Team Building in the Digital Age',
    subtitle: 'Creating connection across digital spaces',
    excerpt: 'Learn innovative strategies for building strong team bonds in remote and hybrid work environments.',
    content: `The shift to remote work has transformed how we think about team building. Virtual spaces present unique challenges and opportunities for fostering team connection.

## The Digital Disconnect
Remote work can create feelings of isolation and reduced team cohesion. Understanding these challenges is the first step in addressing them effectively.

## Virtual Team Building Principles
Effective remote team building follows key principles:
- Asynchronous engagement
- Multi-modal communication
- Cultural sensitivity
- Technical accessibility

## Innovative Approaches
Modern remote team building goes beyond virtual happy hours:
- Digital escape rooms
- Cross-cultural virtual cooking classes
- Collaborative online art projects
- Virtual reality team experiences`,
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    author: {
      name: 'Marcus Wong',
      role: 'Remote Work Strategist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    category: 'Remote Work',
    tags: ['Remote Teams', 'Virtual', 'Digital Transformation'],
    readTime: '5 min read',
    publishedAt: '2024-02-10'
  },
  {
    id: '3',
    slug: 'mindfulness-in-team-building',
    title: 'Mindfulness: The Secret Weapon in Team Building',
    subtitle: 'Integrating mindfulness practices into team development',
    excerpt: 'Explore how mindfulness practices can enhance team performance, reduce stress, and improve collaboration.',
    content: `Mindfulness isn't just for individual well-being - it's a powerful tool for enhancing team dynamics and performance.

## The Business Case for Mindfulness
Companies implementing mindfulness programs report:
- 28% reduction in stress levels
- 20% improvement in team communication
- 15% increase in productivity

## Team Mindfulness Practices
Simple yet effective techniques:
- Group meditation sessions
- Mindful listening exercises
- Stress-awareness workshops
- Conscious communication training`,
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    author: {
      name: 'Emma Patel',
      role: 'Mindfulness Coach',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    },
    category: 'Wellness',
    tags: ['Mindfulness', 'Wellness', 'Stress Management'],
    readTime: '4 min read',
    publishedAt: '2024-02-05'
  },
  {
    id: '4',
    slug: 'future-of-team-building',
    title: 'The Future of Team Building: 2024 and Beyond',
    subtitle: 'Emerging trends shaping team development',
    excerpt: "From AI-powered team analytics to immersive VR experiences, discover what's next in team building innovation.",
    content: `The landscape of team building is rapidly evolving with technological advances and new understanding of human collaboration.

## Emerging Technologies
- Virtual Reality team simulations
- AI-powered team analytics
- Biometric feedback systems
- Mixed reality collaboration spaces

## New Methodologies
- Microlearning team development
- Adaptive challenge design
- Cross-cultural intelligence training
- Neurodiversity-inclusive approaches`,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    author: {
      name: 'Dr. James Wilson',
      role: 'Innovation Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    category: 'Innovation',
    tags: ['Future Trends', 'Technology', 'Innovation'],
    readTime: '7 min read',
    publishedAt: '2024-01-30',
    featured: true
  }
];

export const getRecentPosts = () => {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentPost: BlogPost) => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, 3);
}; 