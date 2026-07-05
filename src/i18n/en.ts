import type { SiteContent } from "./types";

const en: SiteContent = {
  nav: { services: "Services", grove: "Grove", research: "Research", contact: "Contact" },
  hero: {
    title: "Products for the stablecoin economy",
    lead: "We aspire to empower the world with institutional-grade DeFi tools to raise, manage and distribute the capital they need to make a difference.",
    cta: "Book a consultation",
  },
  tvl: {
    eyebrow: "VAULTS & GROVE",
    title: "Test Curator Stablecoin TVL",
    cta: "Earn today in the Test Curator app",
    periods: { yearly: "Yearly", monthly: "Monthly", weekly: "Weekly" },
    chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  servicesSection: {
    title: "Our services",
    lead: "Build products, earn yield, and scale tokenized assets in the stablecoin economy—backed by institutional-grade infrastructure, risk, and advisory.",
  },
  learnMore: "Learn More",
  services: [
    {
      title: "Build products",
      description: "Design and launch institutional-grade stablecoin and yield products that plug directly into your existing app, exchange, or platform.",
      bullets: [
        "Launch white-label stablecoin savings with transparent onchain yield and clear risk bands.",
        "Offer multi-currency safe yield vaults to convert and retain more user deposits.",
        "Plug curated DeFi vaults into your app via APIs or smart contracts.",
      ],
      accent: "emerald",
    },
    {
      title: "Earn yield",
      description: "Access risk-curated DeFi vaults to deploy capital into transparent, diversified strategies with institutional risk controls.",
      bullets: [
        "Allocate treasury or fund capital into prime stablecoin vaults backed by blue-chip collateral.",
        "Access diversified, underwritten yield strategies, including tokenized credit and other RWAs.",
        "Automate allocations via dashboards or onchain rails while keeping full transparency.",
      ],
      accent: "charcoal",
    },
    {
      title: "Seek advisory",
      description: "Work with a specialist team to design, underwrite, and scale your crypto, stablecoin, or tokenized asset strategy end-to-end.",
      bullets: [
        "Define your crypto and stablecoin roadmap, from opportunity mapping to product design.",
        "Structure and underwrite tokenized assets or credit products for DeFi listing and distribution.",
        "Model protocol or treasury economics and design executable onchain allocation plans.",
      ],
      accent: "gold",
    },
    {
      title: "Raise capital",
      description: "We underwrite real-world and crypto credit strategies and connect them to onchain and institutional capital.",
      bullets: [
        "Underwrite and structure credit strategies for safe onchain deployment.",
        "Package strategies into transparent vaults or lending markets.",
        "Connect credible managers to DeFi and institutional capital.",
      ],
      accent: "blend",
    },
  ],
  grove: {
    name: "Grove",
    title: "Capitalizing the stablecoin economy",
    lead: "Grove is an institutional-grade credit and liquidity protocol built on DeFi rails, designed to grow credit and capital markets onchain. Grove helps bring real-world assets and real-world use cases into the stablecoin economy.",
    bullets: [
      "Grove Allocator is an institutional-grade, secure, and scalable system for onchain capital allocation.",
      "Grove Financing is an intelligent financing layer that routes capital dynamically across major lending venues.",
      "Grove Liquidity provides robust liquidity solutions for emerging stablecoins and tokenized assets.",
    ],
    cta: "Learn More",
  },
  research: {
    title: "Insights & case studies on Substack",
    lead: "Test Curator is a leading publisher of DeFi research and insights. Subscribe to our Substack to stay ahead of the curve on all things DeFi.",
    subscribeCta: "Subscribe to Insights",
    cardCta: "View on Substack",
    types: { caseStudy: "Case Study", research: "Research" },
  },
  insights: [
    { type: "caseStudy", title: "Lend your USDC on Coinbase", url: "#" },
    { type: "research", title: "Credit Ratings: Making Stablecoins Legible to Institutions", url: "#" },
    { type: "caseStudy", title: "Structuring Prime Stablecoin Vaults for Institutions", url: "#" },
    { type: "research", title: "Risk Frameworks for Onchain Treasury Management", url: "#" },
  ],
  contact: {
    eyebrow: "Contact us",
    title: "Let's talk",
    lead: "Have a project in mind? Connect with our experts and discover how we can accelerate your financial growth.",
    formLabel: "I'm interested in...",
    submitCta: "Get in touch",
    successMessage: "Thank you — we'll be in touch shortly.",
    namePlaceholder: "Name *",
    emailPlaceholder: "Email *",
    selectPlaceholder: "Select an option",
    messagePlaceholder: "Message",
    interestOptions: [
      "Building products",
      "Earning yield",
      "Seeking advisory",
      "Working at Test Curator",
      "General inquiry",
      "Raising capital",
    ],
  },
  social: { linkedin: "Follow us on LinkedIn", twitter: "Follow us on X" },
  footer: { rights: "All rights reserved." },
};

export default en;
