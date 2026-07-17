import { 
  RequirementPreset, 
  RequirementAnalysis, 
  IA_Node, 
  DesignTokenGroup, 
  TokenMapping, 
  UISpecification, 
  AuditFinding,
  BankTask,
  BankCustomer
} from '../types';

export const PRESETS: RequirementPreset[] = [
  {
    id: 'banking_rm',
    title: 'WealthAdvisor Agentic Copilot',
    subtitle: 'High-Trust Financial RM Platform',
    description: 'An AI-driven wealth advisor dashboard prioritizing proactive relationship intervention, structured short-term memory rails, and rigid financial compliance guardrails.',
    icon: 'Building2',
    requirementText: 'Create a state-of-the-art relationship workspace for private bank wealth managers. Design a high-fidelity dashboard that displays real-time agentic reasoning loops (Trigger -> Context Analysis -> Proposal), lists prioritized client interventions, structures client asset and holding summaries, and hosts a dedicated Human-in-the-Loop (HITL) control desk for script editing, CRM writeback, and regulatory compliance validation.'
  },
  {
    id: 'saas_analytics',
    title: 'ChurnGuard Autonomous Retention Agent',
    subtitle: 'Enterprise SaaS Copilot Workspace',
    description: 'An autonomous customer retention center focused on predictive churn signals, generative campaign synthesis, and risk-adjusted winback playbooks.',
    icon: 'BarChart3',
    requirementText: 'Build an elegant customer retention hub for SaaS operators. Feature multi-dimensional charts tracking revenue momentum, interactive cohort retention grids, and an AI-driven outreach console. The system must monitor client telemetry dropoffs, formulate cohort-specific risk-mitigation email playbooks, and secure human authorization before firing bulk winback operations.'
  },
  {
    id: 'ecommerce_checkout',
    title: 'CheckoutNegotiator Adaptive Agent',
    subtitle: 'Conversational Price-Matching Checkout',
    description: 'A dynamic, multi-modal checkout funnel optimized for conversational bargaining, localized delivery preference adaptation, and secure transaction handshakes.',
    icon: 'ShoppingCart',
    requirementText: 'Design a highly engaging, adaptive 3-step conversational checkout form. Step 1: Secure user credentials with dynamic field validation; Step 2: Adaptive conversational interface allowing real-time, agent-authorized discount negotiations and delivery matching; Step 3: Fast payments integrated with automatic localized compliance. Features dynamic sitemaps and accessibility indicators.'
  }
];

// --- Banking RM Workspace Generation Pipeline Mock Data ---
export const BANKING_RM_PIPELINE = {
  analysis: {
    userGoals: [
      'Empower wealth managers to instantly capture high-value portfolio drifts and clients at risk.',
      'Deliver highly personalized, legally compliant talking points synthesized via multi-source customer data.',
      'Enforce a strict, frictionless Human-in-the-Loop (HITL) system to authorize and log external actions.'
    ],
    primaryTasks: [
      'Monitor daily operations telemetry (Key Clients, Pending Tasks, Outbound Churn Risks, Completed Audits).',
      'Examine agent-driven operational recommendations ranked by cognitive confidence level.',
      'Review complete client profiles combining liquid assets, life stage, risk appetite, and transaction footprints.',
      'Refine, copy, and log generated customer interaction scripts to the core banking ledger.'
    ],
    businessEntities: [
      'Relationship Manager Profile (Branch ID, Active Quotas, Personal Commission Ledger)',
      'Client Record (Liquid Holdings, AUM Volatility, Risk tolerance rating, Dynamic behavioral tags)',
      'Intervention Ticket (Proactive Trigger Reason, Copilot Cognitive Reasoning, Matched Financial Product, Compliance Warning Guardrail, Interaction Script)'
    ],
    stateRequirements: [
      'Task List Filtration: Sorting by priority (High, Medium, Standard) or risk type (AUM Outbound, Mortgage Overdue, Reinvestment Opportunity).',
      'Unified Context Sync: Clicking an active task must immediately mount the corresponding client profile and agent suggestion.',
      'Interactive Speech Playground: Supporting real-time speech-script overrides, copying feedback alerts, and simulated writeback to banking CRM databases.'
    ]
  } as RequirementAnalysis,

  ia: {
    id: 'root',
    label: 'WealthAdvisor Workstation',
    type: 'section',
    description: 'Multi-column agentic relationship workspace',
    priority: 'High',
    children: [
      {
        id: 'header',
        label: 'Platform Navigation & Profile',
        type: 'module',
        description: 'Displays current RM identification, branch metrics, live clock, and data reset controllers.',
        priority: 'High'
      },
      {
        id: 'metrics',
        label: 'Strategic Operations Dashboard',
        type: 'module',
        description: 'Bento-style summary indicators displaying crucial portfolio tracking parameters and high-priority ticket counts.',
        priority: 'High'
      },
      {
        id: 'workspace_split',
        label: 'Workspace Execution Panel',
        type: 'section',
        description: 'Three-column synchronized pane linking the operational backlog, rich customer context, and the AI advisor.',
        priority: 'High',
        children: [
          {
            id: 'task_hub',
            label: 'Actionable Intervention Feed',
            type: 'module',
            description: 'Backlog of prioritized, agent-compiled client situations with multi-status filters.',
            priority: 'High'
          },
          {
            id: 'client_insight',
            label: 'Focused Client Profile Canvas',
            type: 'module',
            description: 'Unified client panel containing asset breakdowns, risk appetites, life stages, and behavioral logs.',
            priority: 'High'
          },
          {
            id: 'agent_sidebar',
            label: 'AI Agent recommendations Terminal',
            type: 'widget',
            description: 'Core agentic engine showing trigger analysis, matched product suggestions, compliance warnings, and HITL actions.',
            priority: 'High'
          }
        ]
      }
    ]
  } as IA_Node,

  mapping: {
    colorPalette: 'Apple Silicon Silver & High-Trust Cobalt Blue. Canvas: Crisp Off-White (#F6F8FB). Glass Panels: Semi-transparent White (#FFFFFFB2) with 24px background-blur and fine outline (#FFFFFF40). Accents: Deep Financial Cobalt (#1D4ED8) for trust elements, Emerald Green (#059669) for opportunities, Soft Amber (#D97706) for compliance gates, and Charcoal Black (#1F2937) for text.',
    typography: 'Primary Sans: Inter (engineered for rapid readability, tags, and data tables). Display: Space Grotesk (tech-forward font for telemetry numbers and major card titles). Monospace: JetBrains Mono (specifically for currency, timestamps, and database paths).',
    spacing: 'Spacious & breathing. Desktop grid gaps standardized to 24px (gap-6), mobile gaps set to 16px (gap-4). Panel interior padding is locked to 24px (p-6) to maintain an elegant, high-end Apple vibe.',
    borderRadius: 'Fluid curves. Main workspace containers utilize 24px (rounded-3xl). Cards, inputs, and action buttons are bound to 16px (rounded-2xl) to project modern software premium standards.',
    components: [
      {
        name: 'TranslucentGlassmorphicCard',
        rationale: 'Creates an immersive visual hierarchy using backdrop-blur tokens and soft borders, establishing deep enterprise software credibility.',
        props: ['blur: 24px', 'bgOpacity: 0.7', 'borderColor: rgba(255,255,255,0.4)', 'shadow: light-soft']
      },
      {
        name: 'AgenticTelemetryMetric',
        rationale: 'Draws focus to high-value portfolio indicators using large Space Grotesk display typography coupled with secondary mini-trend charts.',
        props: ['label: string', 'value: string', 'trendType: "gain" | "loss"', 'description: string']
      },
      {
        name: 'HumanInTheLoopControlPanel',
        rationale: 'Hosts the action core. Highlights compliance warnings using distinct border contrasts and lets users refine and authorize generated speech records.',
        props: ['scriptContent: string', 'onEdit: Function', 'onCopy: Function', 'onExecute: Function']
      }
    ]
  } as TokenMapping,

  spec: {
    layoutPattern: 'Asymmetric Bento Framework + Multi-Column Actionable Console (Proportions 4:4:4 Grid Distribution)',
    responsiveGrid: {
      mobile: 'Linear vertical stack prioritizing the operational metrics row, task cards, the active control desk, and finally client profile cards.',
      tablet: 'Split dual-column structure (Column 1: Backlog & Metrics, Column 2: Context Profile & Control Desk).',
      desktop: 'Fluid three-column architecture displaying all panels simultaneously on a single widescreen portal to ensure high operational density.'
    },
    components: [
      {
        id: 'comp_metrics',
        type: 'Operations Dashboard Row',
        title: 'Today Strategic Operations Telemetry',
        states: ['Default State', 'Loading State', 'Anomalous Value State (highlighted border)'],
        rules: [
          'All numbers must render with proper thousand comma delimiters and prefix currencies.',
          'State colors must strictly follow token variables: Emerald (#059669) for positive yields, Rose (#E11D48) for high risks.'
        ]
      },
      {
        id: 'comp_task_list',
        type: 'Actionable Feed',
        title: 'Prioritized Agentic Interventions',
        states: ['Pending Tasks', 'Empty Queue', 'Task Execution Complete Animation'],
        rules: [
          'Cards must be sorted dynamically by confidence score and risk priority (High -> Medium -> Standard).',
          'Selecting an item must immediately trigger a client context mount in the primary workspace.'
        ]
      },
      {
        id: 'comp_speech_generator',
        type: 'HITL Control Terminal',
        title: 'Contextual Action Script Studio',
        states: ['Initial Synthesized draft', 'Custom Modified script', 'Clipboard Copy', 'Ledger Logged'],
        rules: [
          'TextArea must allow direct manual overrides prior to external authorization.',
          'Copy action must write plain-text payload to clipboard and show an organic glass banner.',
          'Execute log button must persist state to core CRM ledger and show a success telemetry check.'
        ]
      }
    ]
  } as UISpecification,

  review: [
    {
      id: 'audit_1',
      category: 'accessibility',
      severity: 'error',
      target: 'Advisory Banner Background Contrast',
      message: 'Compliance advice banner was initially rendered with soft light-yellow (#FEF3C7) and grey text (#8E8E93), producing a low contrast ratio of 2.1:1, failing WCAG AA.',
      recommendation: 'Enforce high-contrast warning design: Amber-50 background with Amber-800 text and Alert-Triangle icon.',
      codeSuggestion: '<div className="flex gap-2.5 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs font-medium">'
    },
    {
      id: 'audit_2',
      category: 'consistency',
      severity: 'warning',
      target: 'Client Classification Tags',
      message: 'Inconsistent layout attributes detected for client class tags (VIP levels), yielding disjointed horizontal margin flows.',
      recommendation: 'Enforce standard capsule tag token structure with explicit borders and 50% opacity overlays.',
      codeSuggestion: '<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100">'
    },
    {
      id: 'audit_3',
      category: 'tokens',
      severity: 'info',
      target: 'Backlog Navigation Backdrop Blur',
      message: 'Backlog panel lacks translucent properties, breaking the glassmorphic depth continuity of the project.',
      recommendation: 'Standardize opacity and backdrop-blur tokens to align with Apple-style design rules.',
      codeSuggestion: 'className="bg-white/70 backdrop-blur-md border-r border-slate-200/50"'
    }
  ] as AuditFinding[]
};

// --- SaaS Metrics Hub Generation Pipeline Mock Data ---
export const SAAS_ANALYTICS_PIPELINE = {
  analysis: {
    userGoals: [
      'Empower SaaS operators to visual-track MRR fluctuations and cohort momentum at a glance.',
      'Highlight active churn risk anomalies calculated via usage metrics and feature adoption dropoffs.',
      'Synthesize hyper-targeted customer email playbooks and dispatch them securely.'
    ],
    primaryTasks: [
      'Monitor key operational statistics (MRR, LTV, Active Churn, Retention index).',
      'Examine high-risk accounts flagged by the predictive attrition engine.',
      'Trigger custom cohort-specific recovery outreach playbooks.'
    ],
    businessEntities: [
      'SaaS Platform Operator',
      'Client Account Record (Company Name, Current Subscription Tier, Attrition Risk, Last Active Date)',
      'Cohort Matrix Table (Retention percentages mapped across a 12-month timeline)'
    ],
    stateRequirements: [
      'Toggle Chart Intervals (Monthly, Quarterly, Yearly viewports).',
      'Filter Attrition Risks (Severe Dropoff, Slow Gradual degradation).',
      'Outreach Playbook Selector (Custom template configurations).'
    ]
  } as RequirementAnalysis,

  ia: {
    id: 'saas_root',
    label: 'ChurnGuard Command Center',
    type: 'section',
    description: 'SaaS retention and metrics dashboard layout',
    priority: 'High',
    children: [
      {
        id: 'telemetry',
        label: 'Revenue & Churn Telemetry Grid',
        type: 'module',
        description: 'Translucent metrics row displaying ARR, MRR, churn rate, and NRR trends.',
        priority: 'High'
      },
      {
        id: 'charts_grid',
        label: 'Growth Momentum Analytics Row',
        type: 'module',
        description: 'Interactive telemetry area charts plotting MRR trends paired with cohort grids.',
        priority: 'High'
      },
      {
        id: 'churn_panel',
        label: 'Cognitive Mitigation Workspace',
        type: 'widget',
        description: 'Backlog of high-risk business accounts offering automated outreach synthesis.',
        priority: 'High'
      }
    ]
  } as IA_Node,

  mapping: {
    colorPalette: 'Clean Developer Slate & Mint Green. Canvas Background: #F8FAFC. Grid Vectors: #E2E8F0. Accent Highlights: Mint Green (#10B981) for MRR expansions, Coral Red (#EF4444) for churn anomalies, and Classic Slate (#475569) for secondary metrics.',
    typography: 'Sans-serif: Inter (utilized for core metrics, charts, and table lists). Monospace: JetBrains Mono (for code blocks, API payloads, and query structures).',
    spacing: 'Structured bento spacing. Inter-element gutter locked to 20px (gap-5). Internal card padding set to 20px (p-5). Margins kept strictly parallel for a clean developer aesthetic.',
    borderRadius: 'Tech-forward borders. Main panel corners: 12px (rounded-xl). Control tabs and CTA buttons: 8px (rounded-md) for a technical, high-precision developer vibe.',
    components: [
      {
        name: 'AreaTelemetryChart',
        rationale: 'Renders revenue momentum with smooth curves and soft gradient fills, creating immediate visual trend clarity.',
        props: ['data: Array', 'strokeColor: string', 'gradientColor: string']
      },
      {
        name: 'CohortHeatmapTable',
        rationale: 'Shows cohort longevity across 12 periods using cell opacity levels to indicate density.',
        props: ['cohorts: Array', 'colorGradient: string']
      }
    ]
  } as TokenMapping,

  spec: {
    layoutPattern: 'Symmetric Bento Matrix + Split Sidebar Console (2x2 Primary Grid + 1x3 Control Panel)',
    responsiveGrid: {
      mobile: 'Vertical single-column layout with performance curves collapsed into swipable viewports.',
      tablet: 'Double-column layout with metrics aggregating into summary tables.',
      desktop: 'Dense bento layout featuring concurrent revenue charts, cohort grids, and active AI-prediction panels.'
    },
    components: [
      {
        id: 'comp_saas_mrr',
        type: 'Interactive Chart',
        title: 'MRR Growth Timeline',
        states: ['Monthly Timeline', 'Quarterly Timeline', 'Yearly Timeline'],
        rules: [
          'Hover crosshairs must snap to discrete data coordinate points.',
          'Tooltips must display MRR, expansion values, and churn contraction factors simultaneously.'
        ]
      },
      {
        id: 'comp_retention_grid',
        type: 'Heatmap Table',
        title: 'Cohort Account Retention Heatmap',
        states: ['Full Grid View', 'Filtered Tier Matrix'],
        rules: [
          'Cell coloration opacity must scale dynamically: 100% retention maps to solid dark-mint, 0% retention maps to white.'
        ]
      }
    ]
  } as UISpecification,

  review: [
    {
      id: 'saas_audit_1',
      category: 'accessibility',
      severity: 'warning',
      target: 'Heatmap Low Contrast Values',
      message: 'Retention levels below 30% display small grey values over white cells, yielding insufficient text contrast.',
      recommendation: 'Invert text colors based on background value: use deep slate-800 for lighter grids.',
      codeSuggestion: 'className={retentionValue < 40 ? "text-slate-800 font-medium" : "text-white"}'
    }
  ] as AuditFinding[]
};

// --- E-Commerce Checkout Generation Pipeline Mock Data ---
export const ECOMMERCE_CHECKOUT_PIPELINE = {
  analysis: {
    userGoals: [
      'Empower merchants to provide conversational, real-time discount negotiation interfaces during checkout.',
      'Dynamically adapt shipping routes and tax calculations using real-time geolocation signals.',
      'Acknowledge and highlight advanced cryptographic trust guarantees to eliminate payment friction.'
    ],
    primaryTasks: [
      'Secure buyer identity and physical destination parameters.',
      'Review real-time localized shipping quotes matched against priority carrier routes.',
      'Engage with the conversational bargaining widget to match alternative vendor coupon pricing.'
    ],
    businessEntities: [
      'Consumer Transaction Identity',
      'Target Delivery Coordinates (Country, Sub-division, Postal/Zip, Address Line)',
      'Dynamic Price Composition (Cart subtotal, negotiated discount, freight charge, final total)',
      'Compliant Payment Processor Payload'
    ],
    stateRequirements: [
      'Multi-step progression states: Step 1 (Credentials & Shipping) -> Step 2 (Agent Bargaining Desk) -> Step 3 (Secure Handshake).',
      'Dynamic boundary errors (real-time zip structure checks customized per country).',
      'Instantaneous pricing calculation updates (re-querying carrier costs in milliseconds).'
    ]
  } as RequirementAnalysis,

  ia: {
    id: 'checkout_root',
    label: 'Negotiator Checkout Funnel',
    type: 'section',
    description: 'E-commerce conversational checkout experience',
    priority: 'High',
    children: [
      {
        id: 'stepper',
        label: 'Dynamic Progress Stepper',
        type: 'module',
        description: 'Displays current transactional phases with clear compliance visual states.',
        priority: 'High'
      },
      {
        id: 'checkout_cols',
        label: 'Asymmetric Split Columns',
        type: 'section',
        description: 'Dual column layout splitting user credential entries from the dynamic invoice panel.',
        priority: 'High',
        children: [
          {
            id: 'form_panel',
            label: 'Adaptive Interactive Console',
            type: 'module',
            description: 'Houses shipping fields and conversational bargaining modules.',
            priority: 'High'
          },
          {
            id: 'summary_panel',
            label: 'Dynamic Order Breakdown',
            type: 'module',
            description: 'Lists purchase items, current active deductions, and instant totalizers.',
            priority: 'High'
          }
        ]
      }
    ]
  } as IA_Node,

  mapping: {
    colorPalette: 'Warm Editorial Cashmere & Trust-First Emerald. Canvas background: Pure Alabaster (#FAF9F6). Card backgrounds: Studio White (#FFFFFF). Action Highlights: Forest Emerald (#0F766E) for successful transactions, Amber Gold (#D97706) for price matching states, and Slate Gray (#374151) for wireframes.',
    typography: 'Primary Sans: Inter. Editorial Display Title: Playfair Display (utilized for luxury headings and trust credentials).',
    spacing: 'Compact, focused, and secure. Gutter spacing set to 16px (gap-4). Interior padding: 24px (p-6) for field groups, 16px (p-4) for headers.',
    borderRadius: 'Organic curvilinear shapes. Outer cards set to 16px (rounded-2xl). Inputs and payment select buttons set to 9999px (rounded-full) to provide a soft, safe, high-touch brand experience.',
    components: [
      {
        name: 'StepProgressBar',
        rationale: 'Renders progress with micro animations and checkmarks, increasing checkout trust and lowering dropoffs.',
        props: ['currentStep: number', 'steps: Array<string>']
      },
      {
        name: 'FloatingLabelInput',
        rationale: 'Saves critical vertical real estate while keeping labels visible when active, optimizing form validation density.',
        props: ['label: string', 'placeholder: string', 'error: string']
      }
    ]
  } as TokenMapping,

  spec: {
    layoutPattern: 'Asymmetric Split Column (Left column 60% for detail entries & chat, Right column 40% for invoice summary)',
    responsiveGrid: {
      mobile: 'Single column flow. The order invoice panel floats sticky at the top of the screen to maintain cost visibility.',
      tablet: 'Double columns with order invoice floating on the right viewport side.',
      desktop: 'Full screen immersive split layout supporting secure card rows and fluid layouts.'
    },
    components: [
      {
        id: 'comp_ecommerce_address',
        type: 'Dynamic Address Form',
        title: 'Customer Shipping Address Input',
        states: ['Empty Form', 'Valid Fields', 'Invalid Zip Code Format Error'],
        rules: [
          'Fields must parse inputs dynamically (e.g., US Zip requires exactly 5 digits, UK postcodes require alphanumeric spacing).',
          'Country dropdown selection must automatically recalculate shipping tariffs in the background.'
        ]
      }
    ]
  } as UISpecification,

  review: [
    {
      id: 'checkout_audit_1',
      category: 'accessibility',
      severity: 'error',
      target: 'Credit card form input label placeholder',
      message: 'Using placeholders in place of visible labels causes accessibility failure, as the label disappears when user types.',
      recommendation: 'Enforce persistent floating labels above form inputs.',
      codeSuggestion: '<label className="block text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">'
    }
  ] as AuditFinding[]
};

// --- INTERACTIVE BANK RM WORKSPACE MOCK DATA (RM Assistant) ---
export const BANK_TASKS_MOCK: BankTask[] = [
  {
    id: 'task_001',
    title: 'Client Retention - Gold Tier AUM Drop Warning',
    type: 'followup',
    priority: 'High',
    customerName: 'David Zhang',
    triggerReason: 'Recent liquidity transfer detected: checkings balance decreased by more than $200,000, causing total assets (AUM) to drop to $1,580,000 (-15% MoM). High risk of asset flight to external institutions.',
    aumChange: '-$220,000',
    dueDate: 'Today 18:00',
    status: 'pending',
    agentAnalysis: 'This client has held a mortgage with us for 2 years and recently realized cash gains. However, a significant portion of liquid funds was transferred out instead of being allocated to our internal wealth management. Immediate proactive outbound follow-up is critical to retain assets.',
    agentAdvice: 'Reach out via personal wealth relationship line. Express appreciation for his long-term loyalty and offer an exclusive advisory on our premium low-risk "SecureYield 30-Day Liquid Trust" yielding 4.25% - 4.50%. Offer a customized liquidity map.',
    speechScript: 'Hi Mr. Zhang, this is your dedicated wealth advisor. I noticed some recent liquidity movements in your account. Given current market rate fluctuations, keeping funds in a basic checking account misses out on yield. We have opened a premium private placement slot for our "SecureYield 30-Day Liquid Trust" yielding 4.25% - 4.50% with absolute flexibility. I would love to build a customized cash-management plan for you. Would you be free for a brief 10-minute call this afternoon?',
    productName: 'SecureYield 30-Day Liquid Trust (Premium)',
    productExpectedYield: '4.25% - 4.50%',
    complianceWarning: 'Do NOT guarantee specific future returns or state "zero-risk" verbally or in writing. Remind client that asset management trusts are subject to standard market conditions. Ensure client risk profile is updated and certified as Balanced (R2) or higher before sending proposal.'
  },
  {
    id: 'task_002',
    title: 'Wealth Reinvestment - Maturing Fixed Term Trust Allocation',
    type: 'finance',
    priority: 'Medium',
    customerName: 'Sarah Jenkins',
    triggerReason: 'Held fixed-term deposit of $500,000 in "WealthFocus A Plan" is maturing in 3 days (July 19th), releasing full liquidity into checking balance.',
    dueDate: 'Tomorrow 12:00',
    status: 'pending',
    agentAnalysis: 'Ms. Jenkins is a conservative senior client who highly values safety and capital preservation. Historically, she invests exclusively in fixed-income or treasury certificates. If we fail to proactively reinvest this maturing capital, there is a high probability of funds automatically drifting to high-yield sweep platforms or third-party brokers.',
    agentAdvice: 'Recommend "SafeTreasury 9-Month Capital Guaranteed Deposit", historically delivering 3.15% APY. This fits her PR1 conservative profile perfectly. As a high-touch value add, invite her to the branch\'s Private Tea & Estate Planning Salon this Friday.',
    speechScript: 'Hi Mrs. Sarah, this is your wealth assistant. I wanted to remind you that your $500,000 WealthFocus deposit is maturing this Saturday! With interest rates declining, we have reserved a special allocation in our new "SafeTreasury 9-Month Capital Guaranteed Deposit" at 3.15% APY just for our mature loyal clients. Would you like me to reserve your spot? Also, our branch is hosting an exclusive Private Tea & Estate Planning Salon this Friday afternoon, and I have saved a VIP seat for you. Would you like to attend?',
    productName: 'SafeTreasury 9-Month Capital Guaranteed Deposit',
    productExpectedYield: '3.15% APY (Fully Guaranteed)',
    complianceWarning: 'Ensure the capital-guarantee clauses are presented clearly matching regulatory guidelines. Disclose that early withdrawal before the 9-month lock-in period may forfeit accrued premium yields.'
  },
  {
    id: 'task_003',
    title: 'Loan Advisory - Mortgage Payment Account Balance Shortfall',
    type: 'loan',
    priority: 'High',
    customerName: 'Marcus Vance',
    triggerReason: 'Monthly mortgage autopay of $12,500 is due in 2 days (July 18th). The linked repayment checking account balance is currently only $850, which is insufficient and will trigger a payment failure and a credit report delinquency flag.',
    dueDate: 'Today 17:00',
    status: 'pending',
    agentAnalysis: 'The client has maintained an excellent credit score and on-time payments for 24 months. This shortfall is likely an oversight rather than financial distress. A polite, proactive alert will protect his pristine credit standing and reinforce our premium relationship brand.',
    agentAdvice: 'Send a standard priority SMS or initiate a polite personal call. Guide him to instantly fund his repayment account using our mobile app Quick-Transfer widget to prevent automated payment rejection.',
    speechScript: 'Hi Mr. Marcus, this is your mortgage service team. We want to send a quick, friendly reminder that your monthly home loan autopay of $12,500 is scheduled in 2 days on July 18th. Currently, the linked account ending in 8899 has a balance of $850. To prevent any automatic transaction failure or involuntary credit reporting impact, we suggest transferring the remaining balance into this card today. You can easily do this via a quick ACH transfer in our mobile app. Have a wonderful day!',
    productName: 'Mobile App Quick-Transfer Portal',
    productExpectedYield: 'Active credit protection',
    complianceWarning: 'Ensure repayment reminders maintain an advisory, supportive tone. Strictly avoid collection-like language or legal threats prior to actual delinquency. Protect client privacy by verifying identity before discussing specific bill amounts.'
  },
  {
    id: 'task_004',
    title: 'Private Event - Exclusive Family Trust Salon Invitation',
    type: 'salon',
    priority: 'Low',
    customerName: 'Sophia Chen',
    triggerReason: 'UHNW Diamond client (AUM $8,200,000) recently received a massive corporate equity liquidation inflow of $1,200,000. Mobile search queries indicate a strong current interest in legacy planning and family trust structuring.',
    dueDate: 'Within 3 days',
    status: 'pending',
    agentAnalysis: 'Ms. Sophia Chen holds substantial capital but is currently facing corporate restructuring and multigenerational succession questions. She is in the research stage for a private family trust structure. Our premier "Legacy & Multi-Generational Trust Summit" in downtown Silicon Valley this Saturday is the perfect catalyst.',
    agentAdvice: 'Extend a personal VIP invitation via private phone. Secure her a VIP seat and offer an exclusive, private 15-minute 1v1 consultation with our chief trust specialist immediately following the main session.',
    speechScript: 'Hi Sophia, this is your private wealth relationship manager. I hope your week is going well. I noticed your recent interest in legacy preservation and asset isolation. This Saturday afternoon, our Premier Private Banking branch is hosting an exclusive "Legacy & Multi-Generational Trust Summit" led by our Managing Director of Trust Services. I have reserved one of our very limited VIP slots for you. If you can make it, I have also secured a private 15-minute 1v1 advisory session for you with our chief specialist right after. May I send you the electronic VIP invitation over text?',
    productName: 'Aurora Private Family Trust Advisory',
    productExpectedYield: 'Comprehensive wealth shielding',
    complianceWarning: 'Trust consultations are strictly confidential; recording or distribution of materials is prohibited. Emphasize trust property independence and avoid promising absolute tax avoidance, in compliance with asset shielding laws.'
  }
];

export const BANK_CUSTOMERS_MOCK: Record<string, BankCustomer> = {
  'David Zhang': {
    name: 'David Zhang',
    level: 'Gold Tier Member',
    aum: '$1,580,000 (MoM -15%)',
    loanBalance: '$2,100,000 (Combined Housing & Commercial)',
    riskPreference: 'Balanced (R2)',
    lifeStage: 'Mid-Career Professional - Steadily rising corporate income, facing high monthly mortgage liabilities; prefers high liquidity paired with stable yield.',
    tags: ['AUM Severe Drop', 'Mortgage Premium', 'High Checking Balance', 'Core Relationship', 'Yield Sensitive'],
    recentActivity: 'Transferred $220,000 from cash checking to an external brokerage account 3 days ago; logged into mobile wealth portal 2 times yesterday searching for active index funds.',
    growthOpportunity: 'Client capital is heavily concentrated in liquid checking, missing out on returns. Offering short-term, high-yield structured products can lock in his capital and prevent further external outbound transfers.'
  },
  'Sarah Jenkins': {
    name: 'Sarah Jenkins',
    level: 'Platinum Elite Member',
    aum: '$2,350,000 (Stable)',
    loanBalance: 'No Outstanding Loans',
    riskPreference: 'Conservative (R1)',
    lifeStage: 'Retired Executive - Prioritizes absolute wealth preservation, medical cover, and tax-efficient estate planning. Loves high-touch branch community events.',
    tags: ['Fixed Income Focus', 'Treasury Preference', 'Senior Segment', 'Branch Regular', 'Deposit Maturity Warning'],
    recentActivity: 'Visited branch last week to redeem matured state savings certificates; frequently uses mobile app to verify deposit balances. Regular guest at monthly health & lifestyle seminars.',
    growthOpportunity: 'Ms. Sarah places extreme trust in her RM. Securing her maturing $500,000 deposit via safe, guaranteed capital products will solidifies this high-AUM relationship and capture long-term loyalty.'
  },
  'Marcus Vance': {
    name: 'Marcus Vance',
    level: 'Regular Banking Member',
    aum: '$48,200',
    loanBalance: '$3,850,000 (First-time Homebuyer Mortgage)',
    riskPreference: 'Growth-Oriented (R3)',
    lifeStage: 'Rising Tech Lead - Strong career projection, heavily leveraged with monthly home loan liabilities, prefers aggressive equity growth portfolios.',
    tags: ['Mortgage Customer', 'Pristine Credit Score', 'High App Engagement', 'Balance Shortfall Risk', 'Tech Adopter'],
    recentActivity: 'Logged card payment transactions of $8,500 yesterday; has maintained a 100% perfect mortgage payment record for the past 24 months.',
    growthOpportunity: 'While current deposits are low, his career path represents massive potential. Providing high-touch post-loan service like early shortage warnings builds high goodwill, opening doors for his future corporate wealth and investment asset transfers.'
  },
  'Sophia Chen': {
    name: 'Sophia Chen',
    level: 'Diamond Private Bank',
    aum: '$8,200,000 (MoM +18%)',
    loanBalance: 'No Outstanding Debt',
    riskPreference: 'Balanced (R2)',
    lifeStage: 'Established Founder - Managing complex corporate capital structures, estate planning, and asset protection across international borders.',
    tags: ['UHNW Private Bank', 'Business Owner', 'Trust Prospect', 'Equity Liquidation Capital', 'Executive Relationship'],
    recentActivity: 'Corporate dividends and equity payout of $1,200,000 successfully settled in personal accounts 5 days ago. Checked trust structures and tax isolation online 4 times this week.',
    growthOpportunity: 'Highly representative of high-net-worth estate planning needs. Guiding her legacy transition into active trust agreements will successfully secure over $5,000,000 in long-term Private Banking asset management AUM.'
  }
};
