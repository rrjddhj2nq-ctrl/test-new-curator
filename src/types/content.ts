export type ButtonVariant = "emerald-filled" | "emerald-outline" | "gold-outline";

export type NavLink = { label: string; href: string };

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  accent: "emerald" | "charcoal" | "gold" | "blend";
};

export type Insight = { type: string; title: string; url: string };

export type ChartPoint = { label: string; value: number };

export type TvlPeriod = "Yearly" | "Monthly" | "Weekly";

export type SocialLink = { label: string; href: string };
