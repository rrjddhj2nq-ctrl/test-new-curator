export type ButtonVariant = "emerald-filled" | "emerald-outline" | "gold-outline";

export type ServiceDetail = {
  overview: string;
  capabilities: string[];
  idealFor: string;
  deliverables: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  accent: "emerald" | "charcoal" | "gold" | "blend";
  detail: ServiceDetail;
};

export type GroveModule = {
  name: string;
  summary: string;
  features: string[];
};

export type Insight = {
  id: string;
  type: "caseStudy" | "research";
  title: string;
  readTime: string;
  excerpt: string;
  summary: string;
  keyPoints: string[];
};

export type Stat = { value: string; label: string };
