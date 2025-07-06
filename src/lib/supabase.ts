// Arquivo temporário - Supabase será implementado quando a dependência for instalada
import type { Lead, ComboInterest, Testimonial, CaseStudy } from '@/types';

// ===========================
// PLACEHOLDER FUNCTIONS
// ===========================

export function calculateLeadScore(leadData: Partial<Lead>): number {
  // Implementação temporária
  return 50;
}

export const leadService = {
  async create(leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'score'>) {
    console.log('Lead service temporarily disabled');
    return {} as Lead;
  },
  
  async updateScore(leadId: string, score: number) {
    console.log('Lead service temporarily disabled');
  },
  
  async getByEmail(email: string) {
    console.log('Lead service temporarily disabled');
    return null;
  },
  
  async getHighScoreLeads(minScore: number = 80) {
    console.log('Lead service temporarily disabled');
    return [] as Lead[];
  }
};

export const comboInterestService = {
  async create(interestData: Omit<ComboInterest, 'created_at'>) {
    console.log('Combo interest service temporarily disabled');
    return {} as ComboInterest;
  },
  
  async getByLead(leadId: string) {
    console.log('Combo interest service temporarily disabled');
    return [] as ComboInterest[];
  }
};

export const testimonialService = {
  async getVerified() {
    console.log('Testimonial service temporarily disabled');
    return [] as Testimonial[];
  },
  
  async getFeatured(limit: number = 3) {
    console.log('Testimonial service temporarily disabled');
    return [] as Testimonial[];
  }
};

export const caseStudyService = {
  async getFeatured() {
    console.log('Case study service temporarily disabled');
    return [] as CaseStudy[];
  },
  
  async getAll() {
    console.log('Case study service temporarily disabled');
    return [] as CaseStudy[];
  }
};

export const analyticsService = {
  async trackPageView(page: string, title: string, utmParams?: any) {
    console.log('Analytics service temporarily disabled');
  },
  
  async trackConversion(type: string, leadId?: string, value?: number, combo?: string) {
    console.log('Analytics service temporarily disabled');
  }
};

function getSessionId(): string {
  return 'temp-session-id';
}

export const createTables = async () => {
  console.log('Database setup temporarily disabled');
};
