// ============================================================
// Types for Sales Mastery Landing Page
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

export interface TimelineStep {
  id: number;
  day: string;
  title: string;
  description: string;
  icon: string;
}

export interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  duration: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface CommunityPost {
  id: number;
  image: string;
  caption: string;
}
