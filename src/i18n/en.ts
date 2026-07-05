import type { SiteContent } from "./types";

const en: SiteContent = {
  nav: { services: "Services", grove: "Grove", research: "Research", contact: "Contact" },
  hero: {
    title: "Products for the stablecoin economy",
    lead: "We empower institutions with curated DeFi vaults, transparent risk frameworks, and onchain capital infrastructure—so you can raise, manage, and deploy stablecoin capital with confidence.",
    cta: "Book a consultation",
  },
  stats: [
    { value: "$2.4B+", label: "TVL under curation" },
    { value: "15", label: "Live vault strategies" },
    { value: "48", label: "Daily risk checks per vault" },
    { value: "8–12 wks", label: "Typical product launch timeline" },
  ],
  tvl: {
    eyebrow: "VAULTS & GROVE",
    title: "Test Curator Stablecoin TVL",
    caption: "Aggregate stablecoin assets deployed across curated vaults and Grove liquidity modules, updated daily.",
    cta: "Earn today in the Test Curator app",
    periods: { yearly: "Yearly", monthly: "Monthly", weekly: "Weekly" },
    chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  servicesSection: {
    title: "Our services",
    lead: "From white-label yield products to treasury deployment and credit underwriting—each engagement ships with clear deliverables, risk bands, and ongoing monitoring.",
  },
  common: {
    learnMore: "Learn More",
    close: "Close",
    readMore: "Read full brief",
    capabilities: "What you get",
    idealFor: "Ideal for",
    deliverables: "Deliverables",
    keyTakeaways: "Key takeaways",
    contactCta: "Discuss this with us",
  },
  services: [
    {
      id: "build-products",
      title: "Build products",
      description: "Design and launch institutional-grade stablecoin and yield products that plug directly into your existing app, exchange, or platform.",
      bullets: [
        "Launch white-label stablecoin savings with transparent onchain yield and clear risk bands.",
        "Offer multi-currency safe yield vaults to convert and retain more user deposits.",
        "Plug curated DeFi vaults into your app via APIs or smart contracts.",
      ],
      accent: "emerald",
      detail: {
        overview:
          "We take you from product concept to live vault in 8–12 weeks. Our team handles vault architecture, smart contract integration, risk band design, and compliance-ready reporting—so your users earn yield without you building DeFi infrastructure from scratch.",
        capabilities: [
          "White-label vault UI components and embeddable widgets",
          "REST & onchain APIs for deposits, withdrawals, and balance queries",
          "Three-tier risk bands (Conservative / Balanced / Growth) with documented collateral rules",
          "Real-time APY feeds, historical performance, and audit trail exports",
          "Integration support for Ethereum, Base, and Arbitrum mainnet deployments",
        ],
        idealFor: "Fintechs, exchanges, neobanks, and wallet apps launching stablecoin savings or earn features for retail or corporate users.",
        deliverables: [
          "Product specification & vault architecture document",
          "Integration guide (API + smart contract reference)",
          "Risk disclosure templates and user-facing copy",
          "Launch checklist and post-launch monitoring setup",
        ],
      },
    },
    {
      id: "earn-yield",
      title: "Earn yield",
      description: "Access risk-curated DeFi vaults to deploy capital into transparent, diversified strategies with institutional risk controls.",
      bullets: [
        "Allocate treasury or fund capital into prime stablecoin vaults backed by blue-chip collateral.",
        "Access diversified, underwritten yield strategies, including tokenized credit and other RWAs.",
        "Automate allocations via dashboards or onchain rails while keeping full transparency.",
      ],
      accent: "charcoal",
      detail: {
        overview:
          "Deploy idle USDC, USDT, or DAI treasury into curated vaults monitored 24/7. Every strategy is pre-screened for collateral quality, liquidity depth, and smart contract risk—with daily reports and configurable alert thresholds.",
        capabilities: [
          "Prime stablecoin vaults (Morpho, Aave, curated lending markets)",
          "Automated rebalancing based on your allocation policy",
          "Daily risk dashboard: collateral mix, utilization, drawdown alerts",
          "Tiered liquidity: T+0 instant, T+1 standard, T+7 enhanced yield tranches",
          "Monthly performance attribution and benchmark comparison",
        ],
        idealFor: "DAOs, corporate treasuries, family offices, and funds holding stablecoin balances that need yield without sacrificing transparency or control.",
        deliverables: [
          "Signed allocation policy & risk limits document",
          "Vault dashboard access with role-based permissions",
          "Monthly performance & risk report (PDF + data export)",
          "Quarterly strategy review with curator team",
        ],
      },
    },
    {
      id: "seek-advisory",
      title: "Seek advisory",
      description: "Work with a specialist team to design, underwrite, and scale your crypto, stablecoin, or tokenized asset strategy end-to-end.",
      bullets: [
        "Define your crypto and stablecoin roadmap, from opportunity mapping to product design.",
        "Structure and underwrite tokenized assets or credit products for DeFi listing and distribution.",
        "Model protocol or treasury economics and design executable onchain allocation plans.",
      ],
      accent: "gold",
      detail: {
        overview:
          "Our advisory practice covers the full lifecycle: opportunity assessment, product design, credit underwriting, tokenization structuring, and go-to-market. Engagements typically run 4–8 weeks with a dedicated lead curator and weekly working sessions.",
        capabilities: [
          "Stablecoin & RWA market mapping and competitive analysis",
          "Credit underwriting frameworks for onchain deployment",
          "Tokenization legal structure coordination (with partner counsel)",
          "Protocol treasury economics modeling and stress testing",
          "DeFi listing strategy: venue selection, liquidity planning, launch sequencing",
        ],
        idealFor: "Asset managers, protocol teams, RWA issuers, and institutions entering DeFi for the first time who need expert guidance before committing capital.",
        deliverables: [
          "Strategy memo with recommended product roadmap",
          "Risk framework document (methodology + parameter set)",
          "Financial model with base / stress / tail scenarios",
          "90-day implementation plan with milestones and owners",
        ],
      },
    },
    {
      id: "raise-capital",
      title: "Raise capital",
      description: "We underwrite real-world and crypto credit strategies and connect them to onchain and institutional capital.",
      bullets: [
        "Underwrite and structure credit strategies for safe onchain deployment.",
        "Package strategies into transparent vaults or lending markets.",
        "Connect credible managers to DeFi and institutional capital.",
      ],
      accent: "blend",
      detail: {
        overview:
          "We bridge credit originators and onchain capital. After underwriting your strategy, we structure it into an institutional-grade vault, set transparent risk parameters, and introduce you to our LP network—including DAO treasuries, stablecoin issuers, and allocators in the Grove ecosystem.",
        capabilities: [
          "Credit strategy due diligence and onchain suitability review",
          "Vault structuring: tranches, covenants, and liquidation waterfalls",
          "LP matching across DeFi pools and institutional mandates",
          "Ongoing covenant monitoring and performance reporting",
          "Secondary liquidity support via Grove Financing module",
        ],
        idealFor: "Credit funds, fintech lenders, trade finance platforms, and RWA originators seeking scalable onchain distribution.",
        deliverables: [
          "Underwriting memo and approved strategy parameters",
          "Vault term sheet and smart contract specification",
          "Capital introduction to qualified allocators",
          "Monthly investor reporting template",
        ],
      },
    },
  ],
  grove: {
    name: "Grove",
    title: "Capitalizing the stablecoin economy",
    lead: "Grove is an institutional-grade credit and liquidity protocol built on DeFi rails, designed to grow credit and capital markets onchain.",
    bullets: [
      "Grove Allocator — programmatic capital deployment across lending venues",
      "Grove Financing — dynamic routing for optimal borrow and lend rates",
      "Grove Liquidity — depth provision for emerging stablecoins and RWAs",
    ],
    cta: "Explore Grove",
    detailTitle: "Grove protocol modules",
    detailLead:
      "Grove is the onchain infrastructure layer behind Test Curator vaults. Three integrated modules handle allocation, financing, and liquidity—giving institutions a single interface for capital deployment across DeFi.",
    modules: [
      {
        name: "Grove Allocator",
        summary: "Institutional-grade capital allocation engine that deploys stablecoin reserves across pre-approved lending venues based on your policy.",
        features: [
          "Policy-driven allocation across Morpho, Aave, Compound, and curated markets",
          "Automatic rebalancing when utilization or rates shift beyond thresholds",
          "Onchain audit log of every allocation decision",
          "Integration with Test Curator risk dashboard for unified monitoring",
        ],
      },
      {
        name: "Grove Financing",
        summary: "Intelligent financing layer that routes borrow demand to the best available rates while maintaining collateral health.",
        features: [
          "Cross-venue rate comparison and automatic venue switching",
          "Collateral health monitoring with pre-liquidation alerts",
          "Support for multi-stablecoin borrow and repay workflows",
          "Designed for treasury teams managing working capital onchain",
        ],
      },
      {
        name: "Grove Liquidity",
        summary: "Liquidity provision infrastructure for new stablecoins and tokenized assets entering DeFi markets.",
        features: [
          "Bootstrap liquidity pools with curated LP incentives",
          "Market-making coordination with approved partners",
          "Slippage and depth analytics for institutional-size trades",
          "Used by issuers launching USDC-alternative or RWA-backed tokens",
        ],
      },
    ],
  },
  research: {
    title: "Insights & case studies",
    lead: "Practical research on stablecoin yield, vault risk, and institutional DeFi adoption—written by our curator team for operators and allocators.",
    subscribeCta: "Subscribe to Insights",
    cardCta: "Read full brief",
    types: { caseStudy: "Case Study", research: "Research" },
  },
  insights: [
    {
      id: "coinbase-usdc",
      type: "caseStudy",
      title: "Lend your USDC on Coinbase",
      readTime: "6 min read",
      excerpt: "How a fintech integrated Coinbase-hosted USDC into a white-label earn product with three risk tiers.",
      summary:
        "A mid-size fintech wanted to offer yield on user USDC balances without building DeFi infrastructure. We structured a three-tier product: Instant (T+0, lower APY), Standard (T+1, balanced), and Plus (T+7, enhanced yield via curated vaults). Integration took 9 weeks from kickoff to mainnet launch.",
      keyPoints: [
        "Tiered liquidity reduced withdrawal friction while preserving yield upside",
        "Risk bands were documented in plain language for compliance review",
        "APY feeds updated hourly via Test Curator API—no manual ops",
        "Post-launch: 34% increase in USDC deposit retention over 90 days",
      ],
    },
    {
      id: "credit-ratings",
      type: "research",
      title: "Credit Ratings: Making Stablecoins Legible to Institutions",
      readTime: "12 min read",
      excerpt: "A framework for mapping onchain credit exposure to institutional risk categories.",
      summary:
        "Institutional allocators struggle to evaluate DeFi credit because traditional ratings don't map to onchain structures. We propose a four-axis framework—Collateral Quality, Counterparty Risk, Smart Contract Risk, and Liquidity Depth—each scored 1–5 and aggregated into an overall vault grade (A–D).",
      keyPoints: [
        "Four-axis scoring aligns with how treasury teams already evaluate fixed income",
        "Grades A/B suitable for corporate treasury; C/D for opportunistic allocators only",
        "Framework applied to 15 live vaults in the Test Curator portfolio",
        "Downloadable scorecard template available on request",
      ],
    },
    {
      id: "prime-vaults",
      type: "caseStudy",
      title: "Structuring Prime Stablecoin Vaults for Institutions",
      readTime: "8 min read",
      excerpt: "Design patterns for vaults that meet institutional liquidity, reporting, and risk requirements.",
      summary:
        "We document the architecture of our Prime USDC vault: overcollateralized lending on Morpho and Aave, 80% max utilization cap, daily NAV calculation, and T+1 redemption standard. The vault serves three corporate treasury clients with combined $180M AUM.",
      keyPoints: [
        "80% utilization cap prevents liquidity crunch during market stress",
        "Daily NAV with third-party oracle verification for audit trails",
        "Separate admin and curator keys with 48-hour timelock on parameter changes",
        "Benchmark: 4.2% net APY over 12 months vs. 3.1% traditional MMF average",
      ],
    },
    {
      id: "treasury-risk",
      type: "research",
      title: "Risk Frameworks for Onchain Treasury Management",
      readTime: "10 min read",
      excerpt: "Operational checklist for DAOs and corporates holding stablecoins onchain.",
      summary:
        "Onchain treasury management requires different controls than traditional finance. We outline a practical framework covering: wallet governance, allocation limits, counterparty exposure caps, incident response playbooks, and reporting cadence. Based on reviews of 20+ DAO and corporate treasury setups.",
      keyPoints: [
        "Recommend max 25% single-venue exposure for treasuries >$10M",
        "Multi-sig + timelock required for any allocation policy changes",
        "Monthly risk committee review with documented sign-off",
        "Incident playbook template included: depeg, exploit, liquidity freeze scenarios",
      ],
    },
  ],
  contact: {
    eyebrow: "Contact us",
    title: "Let's talk",
    lead: "Tell us about your stablecoin product, treasury, or credit strategy. We respond within two business days with a scoped next step—not a generic sales pitch.",
    formLabel: "I'm interested in...",
    submitCta: "Get in touch",
    successMessage: "Thank you — we'll be in touch within two business days.",
    namePlaceholder: "Name *",
    emailPlaceholder: "Email *",
    selectPlaceholder: "Select an option",
    messagePlaceholder: "Briefly describe your project or question",
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
