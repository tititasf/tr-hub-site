// Arquivo temporário - Supabase será implementado quando a dependência for instalada
import type { Lead, ComboInterest, Testimonial, CaseStudy } from '@/types';

// ===========================
// PLACEHOLDER FUNCTIONS
// ===========================

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function calculateLeadScore(_leadData: Partial<Lead>): number {
  // Implementação temporária
  return 50;
}

export const leadService = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(_leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'score'>) {
    console.log('Lead service temporarily disabled');
    return {} as Lead;
  },
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateScore(_leadId: string, _score: number) {
    console.log('Lead service temporarily disabled');
  },
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getByEmail(_email: string) {
    console.log('Lead service temporarily disabled');
    return null;
  },
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getHighScoreLeads(_minScore: number = 80) {
    console.log('Lead service temporarily disabled');
    return [] as Lead[];
  }
};

export const comboInterestService = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(_interestData: Omit<ComboInterest, 'created_at'>) {
    console.log('Combo interest service temporarily disabled');
    return {} as ComboInterest;
  },
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getByLead(_leadId: string) {
    console.log('Combo interest service temporarily disabled');
    return [] as ComboInterest[];
  }
};

export const testimonialService = {
  async getVerified() {
    console.log('Testimonial service temporarily disabled');
    return [] as Testimonial[];
  },
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getFeatured(_limit: number = 3) {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async trackPageView(_page: string, _title: string, _utmParams?: unknown) {
    console.log('Analytics service temporarily disabled');
  },
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async trackConversion(_type: string, _leadId?: string, _value?: number, _combo?: string) {
    console.log('Analytics service temporarily disabled');
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSessionId(): string {
  return 'temp-session-id';
}

export const createTables = async () => {
  console.log('Database setup temporarily disabled');
};
