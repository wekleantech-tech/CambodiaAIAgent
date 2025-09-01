
import type { AgentConfig, Metrics } from './types';
import { Niche } from './types';

export const INITIAL_CONFIG: AgentConfig = {
  agentName: 'Cambodia Cash Agent',
  niche: Niche.AffiliateMarketing,
  primaryGoal: 'Maximize Revenue',
  targetAudience: 'Tourists & Expats in Cambodia',
  language: 'English',
  monetizationMethods: ['Affiliate Links', 'Google AdSense'],
};

export const INITIAL_METRICS: Metrics = {
  totalRevenue: 1250.75,
  websiteTraffic: 178034,
  conversionRate: 2.3,
  revenueData: [
    { name: 'Jan', revenue: 150 },
    { name: 'Feb', revenue: 200 },
    { name: 'Mar', revenue: 180 },
    { name: 'Apr', revenue: 250 },
    { name: 'May', revenue: 300 },
    { name: 'Jun', revenue: 470 },
  ],
};

export const MONETIZATION_OPTIONS = [
    'Affiliate Links',
    'Google AdSense',
    'Digital Product Sales',
    'Sponsorships',
    'Dropshipping',
];

export const NICHE_DETAILS = {
  [Niche.AffiliateMarketing]: {
    description: "Promote local services like tours and hotels to earn commissions.",
    icon: "Megaphone",
  },
  [Niche.DigitalProducts]: {
    description: "Create and sell e-books, templates, or online courses on local topics.",
    icon: "BookOpen",
  },
  [Niche.AutomatedContent]: {
    description: "Build blogs or YouTube channels with AI-generated content for ad revenue.",
    icon: "Youtube",
  },
  [Niche.OnlineTutoring]: {
    description: "Set up automated tutoring platforms or sell recorded lesson bundles.",
    icon: "GraduationCap",
  },
};
