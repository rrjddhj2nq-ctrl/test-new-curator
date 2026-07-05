import type { SiteContent } from "./types";

const zh: SiteContent = {
  nav: { services: "服务", grove: "Grove", research: "研究", contact: "联系" },
  hero: {
    title: "稳定币经济的产品基础设施",
    lead: "我们致力于以机构级 DeFi 工具，赋能全球筹集、管理和分配资本，创造真实价值。",
    cta: "预约咨询",
  },
  tvl: {
    eyebrow: "金库与 GROVE",
    title: "Test Curator 稳定币 TVL",
    cta: "立即在 Test Curator 应用中赚取收益",
    periods: { yearly: "年度", monthly: "月度", weekly: "周度" },
    chartLabels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
  },
  servicesSection: {
    title: "我们的服务",
    lead: "在稳定币经济中构建产品、获取收益、扩展代币化资产——依托机构级基础设施、风险框架与顾问服务。",
  },
  learnMore: "了解更多",
  services: [
    {
      title: "构建产品",
      description: "设计并上线机构级稳定币与收益产品，直接接入您的应用、交易所或平台。",
      bullets: [
        "上线白标稳定币储蓄，提供透明链上收益与清晰风险分层。",
        "提供多币种安全收益金库，提升用户存款转化与留存。",
        "通过 API 或智能合约，将精选 DeFi 金库接入您的应用。",
      ],
      accent: "emerald",
    },
    {
      title: "获取收益",
      description: "接入经风险筛选的 DeFi 金库，在机构级风控下部署资本至透明、多元化的策略。",
      bullets: [
        "将国库或基金资本配置至由优质抵押品支持的 prime 稳定币金库。",
        "接入多元化、经承销的收益策略，包括代币化信贷及其他真实世界资产。",
        "通过仪表盘或链上通道自动化配置，保持全程透明。",
      ],
      accent: "charcoal",
    },
    {
      title: "寻求顾问",
      description: "与专业团队合作，端到端设计、承销并扩展您的加密、稳定币或代币化资产战略。",
      bullets: [
        "制定加密与稳定币路线图，从机会梳理到产品设计。",
        "结构化并承销代币化资产或信贷产品，用于 DeFi 上架与分发。",
        "建模协议或国库经济学，设计可执行的链上配置方案。",
      ],
      accent: "gold",
    },
    {
      title: "筹集资本",
      description: "我们承销真实世界与加密信贷策略，并将其连接至链上与机构资本。",
      bullets: [
        "承销并结构化信贷策略，安全部署至链上。",
        "将策略打包为透明金库或借贷市场。",
        "连接优质管理人与 DeFi 及机构流动性提供者。",
      ],
      accent: "blend",
    },
  ],
  grove: {
    name: "Grove",
    title: "赋能稳定币经济",
    lead: "Grove 是基于 DeFi 基础设施的机构级信贷与流动性协议，旨在链上发展信贷与资本市场，将真实世界资产与用例引入稳定币经济。",
    bullets: [
      "Grove Allocator：机构级、安全、可扩展的链上资本配置系统。",
      "Grove Financing：智能融资层，动态路由资本至主要借贷场所。",
      "Grove Liquidity：为新兴稳定币与代币化资产提供稳健的流动性解决方案。",
    ],
    cta: "了解更多",
  },
  research: {
    title: "Substack 洞察与案例研究",
    lead: "Test Curator 是领先的 DeFi 研究与洞察发布者。订阅 Substack，把握 DeFi 前沿动态。",
    subscribeCta: "订阅洞察",
    cardCta: "在 Substack 查看",
    types: { caseStudy: "案例研究", research: "研究报告" },
  },
  insights: [
    { type: "caseStudy", title: "在 Coinbase 上出借 USDC", url: "#" },
    { type: "research", title: "信用评级：让稳定币对机构可读", url: "#" },
    { type: "caseStudy", title: "如何为机构结构化 Prime 稳定币金库", url: "#" },
    { type: "research", title: "链上国库管理的风险框架", url: "#" },
  ],
  contact: {
    eyebrow: "联系我们",
    title: "聊聊合作",
    lead: "有项目想法？与我们的专家沟通，探索如何加速您的金融增长。",
    formLabel: "我感兴趣的是…",
    submitCta: "取得联系",
    successMessage: "感谢提交，我们将在两个工作日内回复。",
    namePlaceholder: "姓名 *",
    emailPlaceholder: "邮箱 *",
    selectPlaceholder: "请选择",
    messagePlaceholder: "留言",
    interestOptions: [
      "构建产品",
      "获取收益",
      "寻求顾问",
      "加入 Test Curator",
      "一般咨询",
      "筹集资本",
    ],
  },
  social: { linkedin: "关注 LinkedIn", twitter: "关注 X (Twitter)" },
  footer: { rights: "保留所有权利。" },
};

export default zh;
