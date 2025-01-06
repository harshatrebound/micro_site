export interface HeroSection {
  headline: string;
  subheadline: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface KeyBenefit {
  title: string;
  points: string[];
}

export interface Activity {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Newsletter {
  headline: string;
  description: string;
}

export interface BottomCTA {
  headline: string;
  subheadline: string;
  buttons: {
    primary: string;
    secondary: string;
  };
}

export interface HomepageData {
  heroSection: HeroSection;
  keyBenefits: KeyBenefit[];
  featuredActivities: Activity[];
  whyChooseUs: KeyBenefit[];
  testimonials: Testimonial[];
  newsletter: Newsletter;
  trustIndicators: string[];
  bottomCTA: BottomCTA;
} 