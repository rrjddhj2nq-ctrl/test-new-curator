import type { SiteContent } from "./types";

const zh: SiteContent = {
  nav: { services: "服务", grove: "Grove", research: "研究", contact: "联系" },
  hero: {
    title: "稳定币经济的产品基础设施",
    lead: "我们以精选 DeFi 金库、透明风险框架和链上资本基础设施，帮助机构自信地筹集、管理和部署稳定币资本。",
    cta: "预约咨询",
  },
  stats: [
    { value: "$24亿+", label: "策展管理 TVL" },
    { value: "15", label: "在运行金库策略" },
    { value: "48", label: "每个金库每日风控检查" },
    { value: "8–12 周", label: "典型产品上线周期" },
  ],
  tvl: {
    eyebrow: "金库与 GROVE",
    title: "Test Curator 稳定币 TVL",
    caption: "分布于精选金库与 Grove 流动性模块的稳定币资产总量，每日更新。",
    cta: "立即在 Test Curator 应用中赚取收益",
    periods: { yearly: "年度", monthly: "月度", weekly: "周度" },
    chartLabels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
  },
  servicesSection: {
    title: "我们的服务",
    lead: "从白标收益产品到国库配置与信贷承销——每项合作均包含明确交付物、风险分层与持续监控。",
  },
  common: {
    learnMore: "了解更多",
    close: "关闭",
    readMore: "阅读完整简报",
    capabilities: "您将获得",
    idealFor: "适合对象",
    deliverables: "交付物",
    keyTakeaways: "核心要点",
    contactCta: "与我们讨论此方案",
  },
  services: [
    {
      id: "build-products",
      title: "构建产品",
      description: "设计并上线机构级稳定币与收益产品，直接接入您的应用、交易所或平台。",
      bullets: [
        "上线白标稳定币储蓄，提供透明链上收益与清晰风险分层。",
        "提供多币种安全收益金库，提升用户存款转化与留存。",
        "通过 API 或智能合约，将精选 DeFi 金库接入您的应用。",
      ],
      accent: "emerald",
      detail: {
        overview:
          "我们从产品概念到金库上线，通常只需 8–12 周。团队负责金库架构、智能合约集成、风险分层设计与合规级报告——让您无需从零搭建 DeFi 基础设施，即可为用户提供收益功能。",
        capabilities: [
          "白标金库 UI 组件与可嵌入小组件",
          "REST 与链上 API：存取、余额查询",
          "三档风险分层（保守 / 平衡 / 成长）及 documented 抵押规则",
          "实时 APY、历史业绩与审计轨迹导出",
          "支持 Ethereum、Base、Arbitrum 主网集成",
        ],
        idealFor: "面向零售或企业用户推出稳定币储蓄或 Earn 功能的金融科技、交易所、数字银行与钱包应用。",
        deliverables: [
          "产品规格书与金库架构文档",
          "集成指南（API + 智能合约参考）",
          "风险披露模板与用户-facing 文案",
          "上线清单与上线后监控配置",
        ],
      },
    },
    {
      id: "earn-yield",
      title: "获取收益",
      description: "接入经风险筛选的 DeFi 金库，在机构级风控下部署资本至透明、多元化的策略。",
      bullets: [
        "将国库或基金资本配置至由优质抵押品支持的 prime 稳定币金库。",
        "接入多元化、经承销的收益策略，包括代币化信贷及其他真实世界资产。",
        "通过仪表盘或链上通道自动化配置，保持全程透明。",
      ],
      accent: "charcoal",
      detail: {
        overview:
          "将闲置 USDC、USDT 或 DAI 国库部署至 7×24 监控的精选金库。每项策略均预先筛查抵押品质量、流动性深度与智能合约风险，并提供日报与可配置告警阈值。",
        capabilities: [
          "Prime 稳定币金库（Morpho、Aave 及精选借贷市场）",
          "按配置策略自动再平衡",
          "每日风险仪表盘：抵押构成、利用率、回撤告警",
          "分层流动性：T+0 即时、T+1 标准、T+7 增强收益档",
          "月度业绩归因与基准对比",
        ],
        idealFor: "持有稳定币余额、需要收益但不愿牺牲透明度或控制权的 DAO、企业国库、家族办公室与基金。",
        deliverables: [
          "签署的配置策略与风险限额文件",
          "带角色权限的金库仪表盘访问权",
          "月度业绩与风险报告（PDF + 数据导出）",
          "与策展团队季度策略回顾",
        ],
      },
    },
    {
      id: "seek-advisory",
      title: "寻求顾问",
      description: "与专业团队合作，端到端设计、承销并扩展您的加密、稳定币或代币化资产战略。",
      bullets: [
        "制定加密与稳定币路线图，从机会梳理到产品设计。",
        "结构化并承销代币化资产或信贷产品，用于 DeFi 上架与分发。",
        "建模协议或国库经济学，设计可执行的链上配置方案。",
      ],
      accent: "gold",
      detail: {
        overview:
          "顾问服务覆盖全周期：机会评估、产品设计、信贷承销、代币化结构与上市策略。典型周期 4–8 周，配备专属主策展人与每周工作会议。",
        capabilities: [
          "稳定币与 RWA 市场 mapping 与竞争分析",
          "链上部署信贷承销框架",
          "代币化法律结构协调（合作律所）",
          "协议国库经济学建模与压力测试",
          "DeFi 上架策略：场所选择、流动性规划、上线节奏",
        ],
        idealFor: "首次进入 DeFi、在投入资本前需要专家指导的资产管理人、协议团队、RWA 发行方与机构。",
        deliverables: [
          "战略备忘录与推荐产品路线图",
          "风险框架文档（方法论 + 参数集）",
          "含基准 / 压力 / 尾部情景的财务模型",
          "90 天实施计划（里程碑与负责人）",
        ],
      },
    },
    {
      id: "raise-capital",
      title: "筹集资本",
      description: "我们承销真实世界与加密信贷策略，并将其连接至链上与机构资本。",
      bullets: [
        "承销并结构化信贷策略，安全部署至链上。",
        "将策略打包为透明金库或借贷市场。",
        "连接优质管理人与 DeFi 及机构流动性提供者。",
      ],
      accent: "blend",
      detail: {
        overview:
          "我们连接信贷发起方与链上资本。承销策略后，将其结构化为机构级金库、设定透明风险参数，并引荐 LP 网络——包括 DAO 国库、稳定币发行方及 Grove 生态配置方。",
        capabilities: [
          "信贷策略尽调与链上适用性审查",
          "金库结构：分级、契约条款与清算瀑布",
          "对接 DeFi 资金池与机构 mandate 的 LP 匹配",
          "持续契约监控与业绩报告",
          "通过 Grove Financing 模块提供二级流动性支持",
        ],
        idealFor: "寻求可扩展链上分发的信贷基金、金融科技贷款方、贸易融资平台与 RWA 发起方。",
        deliverables: [
          "承销备忘录与批准策略参数",
          "金库 term sheet 与智能合约规格",
          "合格配置方资本引荐",
          "月度投资人报告模板",
        ],
      },
    },
  ],
  grove: {
    name: "Grove",
    title: "赋能稳定币经济",
    lead: "Grove 是基于 DeFi 基础设施的机构级信贷与流动性协议，旨在链上发展信贷与资本市场。",
    bullets: [
      "Grove Allocator — 跨借贷场所的程序化资本配置",
      "Grove Financing — 借贷利率动态路由",
      "Grove Liquidity — 为新兴稳定币与 RWA 提供深度",
    ],
    cta: "探索 Grove",
    detailTitle: "Grove 协议模块",
    detailLead:
      "Grove 是 Test Curator 金库背后的链上基础设施层。三个集成模块分别处理配置、融资与流动性——为机构提供跨 DeFi 资本部署的统一接口。",
    modules: [
      {
        name: "Grove Allocator",
        summary: "机构级资本配置引擎，按策略将稳定币储备部署至预批准借贷场所。",
        features: [
          "策略驱动配置：Morpho、Aave、Compound 及精选市场",
          "利用率或利率超阈值时自动再平衡",
          "每次配置决策的链上审计日志",
          "与 Test Curator 风险仪表盘统一监控",
        ],
      },
      {
        name: "Grove Financing",
        summary: "智能融资层，将借款需求路由至最优利率，同时维持抵押品健康。",
        features: [
          "跨场所利率比较与自动切换",
          "抵押品健康监控与预清算告警",
          "支持多稳定币借还流程",
          "面向链上营运资本管理的企业国库团队",
        ],
      },
      {
        name: "Grove Liquidity",
        summary: "为进入 DeFi 市场的新稳定币与代币化资产提供流动性基础设施。",
        features: [
          "以精选 LP 激励 bootstrap 流动性池",
          "与批准合作伙伴的做市协调",
          "机构量级交易的滑点与深度分析",
          "供 USDC 替代或 RWA 背书代币发行方使用",
        ],
      },
    ],
  },
  research: {
    title: "洞察与案例研究",
    lead: "由策展团队撰写，面向运营者与配置方——涵盖稳定币收益、金库风险与机构 DeFi 采用。",
    subscribeCta: "订阅洞察",
    cardCta: "阅读完整简报",
    types: { caseStudy: "案例研究", research: "研究报告" },
  },
  insights: [
    {
      id: "coinbase-usdc",
      type: "caseStudy",
      title: "在 Coinbase 上出借 USDC",
      readTime: "6 分钟阅读",
      excerpt: "一家金融科技如何将 Coinbase 托管 USDC 接入三档风险的白标 Earn 产品。",
      summary:
        "某中型金融科技希望为用户提供 USDC 收益，但不愿自建 DeFi 基础设施。我们设计三档产品：Instant（T+0、较低 APY）、Standard（T+1、平衡）与 Plus（T+7、精选金库增强收益）。从启动到主网上线共 9 周。",
      keyPoints: [
        "分层流动性降低赎回摩擦，同时保留收益空间",
        "风险分层以 plain language 记录，便于合规审查",
        "APY 通过 Test Curator API 每小时更新，无需人工运维",
        "上线后 90 天内 USDC 存款留存提升 34%",
      ],
    },
    {
      id: "credit-ratings",
      type: "research",
      title: "信用评级：让稳定币对机构可读",
      readTime: "12 分钟阅读",
      excerpt: "将链上信贷敞口映射至机构风险类别的框架。",
      summary:
        "机构配置方难以评估 DeFi 信贷，因传统评级无法对应链上结构。我们提出四轴框架——抵押品质量、交易对手风险、智能合约风险、流动性深度——各 1–5 分，汇总为金库总评级（A–D）。",
      keyPoints: [
        "四轴评分与企业国库评估固收的方式一致",
        "A/B 级适合企业国库；C/D 级仅适合 opportunistic 配置方",
        "框架已应用于 Test Curator 组合中 15 个在运行金库",
        "评分卡模板可应要求提供",
      ],
    },
    {
      id: "prime-vaults",
      type: "caseStudy",
      title: "如何为机构结构化 Prime 稳定币金库",
      readTime: "8 分钟阅读",
      excerpt: "满足机构流动性、报告与风险要求的金库设计模式。",
      summary:
        "我们记录 Prime USDC 金库架构：Morpho 与 Aave 超额抵押借贷、80% 最大利用率上限、每日 NAV 计算与 T+1 标准赎回。该金库服务三家企业国库客户，合计 AUM 1.8 亿美元。",
      keyPoints: [
        "80% 利用率上限避免市场 stress 时流动性 crunch",
        "每日 NAV 配合第三方 oracle 验证，便于审计",
        "管理密钥与策展密钥分离，参数变更 48 小时 timelock",
        "12 个月净 APY 4.2%，传统 MMF 平均 3.1%",
      ],
    },
    {
      id: "treasury-risk",
      type: "research",
      title: "链上国库管理的风险框架",
      readTime: "10 分钟阅读",
      excerpt: "面向在链上持有稳定币的 DAO 与企业的 operational 清单。",
      summary:
        "链上国库管理需要不同于传统金融的控制手段。我们 outline 实用框架：钱包治理、配置限额、交易对手敞口上限、 incident 响应 playbook 与报告节奏。基于对 20+ DAO 与企业国库的审查。",
      keyPoints: [
        "建议 >1000 万美元国库单场所敞口不超过 25%",
        "任何配置策略变更需多签 + timelock",
        "月度风险委员会 review 并 documented 签批",
        "含 depeg、 exploit、流动性 freeze 等场景的 incident 模板",
      ],
    },
  ],
  contact: {
    eyebrow: "联系我们",
    title: "聊聊合作",
    lead: "告诉我们您的稳定币产品、国库或信贷策略。我们将在两个工作日内回复具体下一步，而非 generic 销售话术。",
    formLabel: "我感兴趣的是…",
    submitCta: "取得联系",
    successMessage: "感谢提交，我们将在两个工作日内回复。",
    namePlaceholder: "姓名 *",
    emailPlaceholder: "邮箱 *",
    selectPlaceholder: "请选择",
    messagePlaceholder: "简要描述您的项目或问题",
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
