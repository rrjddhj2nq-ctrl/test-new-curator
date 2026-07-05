import type { GroveModule, Insight, Service, Stat } from "../types/content";

export type Locale = "en" | "zh";

export type TvlPeriodKey = "yearly" | "monthly" | "weekly";

export interface SiteContent {
  nav: { services: string; grove: string; research: string; contact: string };
  hero: { title: string; lead: string; cta: string };
  stats: Stat[];
  tvl: {
    eyebrow: string;
    title: string;
    caption: string;
    cta: string;
    periods: Record<TvlPeriodKey, string>;
    chartLabels: string[];
  };
  servicesSection: { title: string; lead: string };
  services: Service[];
  common: {
    learnMore: string;
    close: string;
    readMore: string;
    capabilities: string;
    idealFor: string;
    deliverables: string;
    keyTakeaways: string;
    contactCta: string;
  };
  grove: {
    name: string;
    title: string;
    lead: string;
    bullets: string[];
    cta: string;
    detailTitle: string;
    detailLead: string;
    modules: GroveModule[];
  };
  research: {
    title: string;
    lead: string;
    subscribeCta: string;
    cardCta: string;
    types: { caseStudy: string; research: string };
  };
  insights: Insight[];
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    formLabel: string;
    submitCta: string;
    successMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    selectPlaceholder: string;
    messagePlaceholder: string;
    interestOptions: string[];
  };
  social: { linkedin: string; twitter: string };
  footer: { rights: string };
}

export const tvlPeriodScale: Record<TvlPeriodKey, number> = {
  yearly: 1,
  monthly: 0.78,
  weekly: 0.55,
};

export const tvlChartValues = [58, 64, 70, 76, 84, 91, 100];

export const siteMeta = {
  name: "Test Curator",
  email: "hello@test-curator.xyz",
} as const;

export const navHrefs = [
  { key: "services" as const, href: "#services" },
  { key: "grove" as const, href: "#grove" },
  { key: "research" as const, href: "#research" },
  { key: "contact" as const, href: "#contact" },
];

export const socialHrefs = [
  { key: "linkedin" as const, href: "https://linkedin.com" },
  { key: "twitter" as const, href: "https://x.com" },
];
