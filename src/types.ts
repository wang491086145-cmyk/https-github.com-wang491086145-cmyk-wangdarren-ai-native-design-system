export type PresetId = 'banking_rm' | 'saas_analytics' | 'ecommerce_checkout';

export interface RequirementPreset {
  id: PresetId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  requirementText: string;
}

// Requirement Analysis Types
export interface RequirementAnalysis {
  userGoals: string[];
  primaryTasks: string[];
  businessEntities: string[];
  stateRequirements: string[];
}

// Information Architecture Types
export interface IA_Node {
  id: string;
  label: string;
  type: 'section' | 'module' | 'widget' | 'action';
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  children?: IA_Node[];
}

// Design System Token Mapping Types
export interface DesignTokenGroup {
  category: string;
  description: string;
  tokens: {
    name: string;
    value: string;
    description: string;
  }[];
}

export interface ComponentRecommendation {
  name: string;
  rationale: string;
  props: string[];
}

export interface TokenMapping {
  colorPalette: string;
  typography: string;
  spacing: string;
  borderRadius: string;
  components: ComponentRecommendation[];
}

// UI Specification Types
export interface UISpecification {
  layoutPattern: string;
  responsiveGrid: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  components: {
    id: string;
    type: string;
    title: string;
    states: string[];
    rules: string[];
  }[];
}

// Design Review Audit Types
export interface AuditFinding {
  id: string;
  category: 'accessibility' | 'consistency' | 'tokens' | 'ux';
  severity: 'error' | 'warning' | 'info';
  target: string;
  message: string;
  recommendation: string;
  codeSuggestion?: string;
}

// Bank RM (RM 小助) Specific Types
export interface BankTask {
  id: string;
  title: string;
  type: 'followup' | 'finance' | 'loan' | 'postloan' | 'salon';
  priority: 'High' | 'Medium' | 'Low';
  customerName: string;
  triggerReason: string;
  aumChange?: string;
  dueDate: string;
  status: 'pending' | 'completed';
  agentAnalysis: string;
  agentAdvice: string;
  speechScript: string;
  productName?: string;
  productExpectedYield?: string;
  complianceWarning: string;
}

export interface BankCustomer {
  name: string;
  level: string;
  aum: string;
  loanBalance: string;
  riskPreference: string;
  lifeStage: string;
  tags: string[];
  recentActivity: string;
  growthOpportunity: string;
}
