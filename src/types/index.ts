// ===========================
// CORE TYPES - TR HUB ENTERPRISE
// ===========================

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: number;
  current_pain: 'telefonia' | 'seguranca' | 'internet' | 'backup' | 'outro';
  score: number;
  source: 'website' | 'landing' | 'referral' | 'direct';
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at: string;
  updated_at: string;
}

export interface ComboType {
  id: 'essencial' | 'proativo' | '360';
  name: string;
  subtitle: string;
  description: string;
  basePrice: number;
  maxPrice: number;
  period: 'mensal' | 'anual';
  features: string[];
  idealFor: string[];
  popular?: boolean;
  recommended?: boolean;
  enterprise?: boolean;
}

export interface ComboInterest {
  lead_id: string;
  combo: ComboType['id'];
  customizations: Record<string, any>;
  estimated_value: number;
  created_at: string;
}

export interface Partner {
  id: string;
  name: string;
  category: 'comunicacao' | 'seguranca' | 'conectividade' | 'continuidade';
  description: string;
  services: string[];
  logo_url: string;
  website_url: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  result: string;
  photo_url: string;
  rating: number;
  verified: boolean;
  created_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    roi_percentage: number;
    savings_monthly: number;
    implementation_time: string;
  };
  image_url: string;
  featured: boolean;
}

// ===========================
// FORM TYPES
// ===========================

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  current_pain: string;
  message?: string;
  combo_interest?: ComboType['id'];
  utm_params?: UTMParams;
}

export interface DiagnosticFormData {
  // Company Info
  company: string;
  industry: string;
  employees: number;
  revenue_range: string;
  
  // Current Situation
  current_telecom_cost: number;
  current_it_cost: number;
  downtime_hours_monthly: number;
  security_incidents: number;
  
  // Pain Points
  main_challenges: string[];
  urgency_level: 'baixa' | 'media' | 'alta' | 'critica';
  
  // Contact
  name: string;
  email: string;
  phone: string;
  role: string;
}

export interface ROICalculatorInputs {
  employees: number;
  currentTelecom: number;
  currentIT: number;
  downtimeHours: number;
  hourlyRevenue: number;
  securityIncidents: number;
}

export interface ROICalculatorResults {
  currentTotalCost: number;
  trhubCost: number;
  monthlySavings: number;
  annualROI: number;
  paybackMonths: number;
  riskReduction: number;
}

// ===========================
// ANALYTICS TYPES
// ===========================

export interface AnalyticsEvent {
  event_name: string;
  parameters: Record<string, any>;
  timestamp: string;
  user_id?: string;
  session_id: string;
}

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface PageView {
  page: string;
  title: string;
  referrer: string;
  timestamp: string;
  session_id: string;
  utm_params?: UTMParams;
}

export interface ConversionEvent {
  type: 'lead_generated' | 'demo_requested' | 'proposal_downloaded' | 'combo_selected';
  lead_id?: string;
  value?: number;
  combo?: ComboType['id'];
  source: string;
  timestamp: string;
}

// ===========================
// UI COMPONENT TYPES
// ===========================

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'soft' | 'medium' | 'large';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlay?: boolean;
}

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

// ===========================
// API RESPONSE TYPES
// ===========================

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface WebhookPayload {
  event: string;
  data: Record<string, any>;
  timestamp: string;
  signature: string;
}

// ===========================
// NAVIGATION TYPES
// ===========================

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
  external?: boolean;
  featured?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  href?: string;
  current: boolean;
}

// ===========================
// SEO TYPES
// ===========================

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, any>;
}

// ===========================
// NOTIFICATION TYPES
// ===========================

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  autoClose?: boolean;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// ===========================
// THEME TYPES
// ===========================

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    neutral: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
}

// ===========================
// UTILITY TYPES
// ===========================

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ===========================
// ERROR TYPES
// ===========================

export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: string;
  stack?: string;
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

// ===========================
// PERFORMANCE MONITORING
// ===========================

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: 'ms' | 's' | 'bytes' | 'count';
  timestamp: string;
  page?: string;
}

export interface WebVital {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: string;
}

// ===========================
// FEATURE FLAGS
// ===========================

export interface FeatureFlag {
  key: string;
  enabled: boolean;
  description: string;
  rollout_percentage?: number;
  conditions?: Record<string, any>;
}

// ===========================
// INTEGRATION TYPES
// ===========================

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  serviceKey?: string;
}

export interface N8NWebhook {
  url: string;
  event: string;
  payload: Record<string, any>;
  headers?: Record<string, string>;
}

export interface EmailConfig {
  provider: 'resend' | 'sendgrid';
  apiKey: string;
  fromEmail: string;
  fromName: string;
}

// ===========================
// EXPORT ALL
// ===========================

export type {
  // Re-export React types for convenience
  ReactNode,
  ReactElement,
  FC,
  ComponentProps,
  CSSProperties
} from 'react';