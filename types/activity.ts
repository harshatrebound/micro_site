export interface Activity {
  name: string;
  slug: string;
  collectionId: string;
  itemId: string;
  metaTitle: string;
  metaDescription: string;
  activityImage: string;
  altText: string;
  tagline: string;
  description: string;
  activityType: string;
  activityVideo?: string;
  groupSize: string;
  duration: string;
  targetAreas: string;
  mainStreamActivity: boolean;
  canonicalTag?: string;
  bluePrint: string;
  activityTags: string[];
  activityLevel: string;
  impactOnDynamics: string;
  activityMainTag: string;
  price: string;
  aptFor: string[];
  values: string[];
}

export interface ActivityCardProps {
  activity: Activity;
  priority?: boolean;
} 