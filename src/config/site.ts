import type { NavLink, SocialLink } from "../types/content";

export const site = {
  name: "Test Curator",
  email: "hello@test-curator.xyz",
  tagline: "Products for the stablecoin economy",
} as const;

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Grove", href: "#grove" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Follow us on LinkedIn", href: "https://linkedin.com" },
  { label: "Follow us on X", href: "https://x.com" },
];

export const tvlPeriodScale: Record<string, number> = {
  Yearly: 1,
  Monthly: 0.78,
  Weekly: 0.55,
};
