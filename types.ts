
export enum Page {
  Dashboard = 'Dashboard',
  Strategy = 'Strategy',
  Workflow = 'Workflow',
  Monitoring = 'Monitoring',
  Logs = 'Logs',
}

export enum Niche {
  AffiliateMarketing = 'Affiliate Marketing',
  DigitalProducts = 'Digital Products',
  AutomatedContent = 'Automated Content Creation',
  OnlineTutoring = 'Online Tutoring',
}

export enum AgentStatus {
    Idle = 'Idle',
    Initializing = 'Initializing',
    Executing = 'Executing',
    Optimizing = 'Optimizing',
    Error = 'Error'
}

export enum WorkflowStepStatus {
    Pending = 'Pending',
    InProgress = 'In Progress',
    Completed = 'Completed',
    Failed = 'Failed'
}

export interface WorkflowStep {
    id: number;
    title: string;
    description: string;
    status: WorkflowStepStatus;
}

export interface AgentConfig {
  agentName: string;
  niche: Niche;
  primaryGoal: string;
  targetAudience: string;
  language: 'Khmer' | 'English' | 'Bilingual';
  monetizationMethods: string[];
}

export interface Metrics {
    totalRevenue: number;
    websiteTraffic: number;
    conversionRate: number;
    revenueData: { name: string; revenue: number }[];
}

export interface LogEntry {
    timestamp: string;
    message: string;
    status: 'SUCCESS' | 'IN_PROGRESS' | 'FAILED';
}

export interface TrendAnalysis {
    summary: string;
    trendScore: number;
    relatedKeywords: string[];
}