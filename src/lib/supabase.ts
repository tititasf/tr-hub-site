import { createClient } from '@supabase/supabase-js';
import type { Lead, ComboInterest, Testimonial, CaseStudy } from '@/types';

// ===========================
// SUPABASE CLIENT SETUP
// ===========================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // We don't need authentication for this project
  },
});

// ===========================
// LEAD SCORING ALGORITHM
// ===========================

export function calculateLeadScore(leadData: Partial<Lead>): number {
  let score = 0;
  
  // Company size scoring (30 points max)
  if (leadData.employees) {
    if (leadData.employees >= 10 && leadData.employees <= 50) {
      score += 30; // Sweet spot for TR Hub
    } else if (leadData.employees > 50 && leadData.employees <= 100) {
      score += 25; // Still good
    } else if (leadData.employees > 5 && leadData.employees < 10) {
      score += 15; // Smaller but viable
    } else {
      score += 10; // Edge cases
    }
  }
  
  // Email domain scoring (20 points max)
  if (leadData.email) {
    const domain = leadData.email.split('@')[1];
    const personalDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
    
    if (!personalDomains.includes(domain.toLowerCase())) {
      score += 20; // Corporate email
    } else {
      score += 5; // Personal email (lower score but not zero)
    }
  }
  
  // Pain level scoring (25 points max)
  const painScores = {
    'seguranca': 25,    // Highest urgency
    'telefonia': 23,    // Core TR Hub strength
    'backup': 20,       // Continuity need
    'internet': 18,     // Connectivity
    'outro': 10         // Generic
  };
  
  if (leadData.current_pain && painScores[leadData.current_pain as keyof typeof painScores]) {
    score += painScores[leadData.current_pain as keyof typeof painScores];
  }
  
  // Source quality scoring (15 points max)
  const sourceScores = {
    'website': 15,      // Direct interest
    'landing': 12,      // Targeted campaign
    'referral': 10,     // Word of mouth
    'direct': 8         // Unknown source
  };
  
  if (leadData.source && sourceScores[leadData.source]) {
    score += sourceScores[leadData.source];
  }
  
  // UTM campaign bonus (10 points max)
  if (leadData.utm_campaign) {
    if (leadData.utm_campaign.includes('premium') || leadData.utm_campaign.includes('enterprise')) {
      score += 10;
    } else if (leadData.utm_campaign.includes('combo')) {
      score += 8;
    } else {
      score += 5;
    }
  }
  
  return Math.min(score, 100); // Cap at 100
}

// ===========================
// LEAD SERVICE
// ===========================

export const leadService = {
  async create(leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'score'>) {
    const score = calculateLeadScore(leadData);
    const now = new Date().toISOString();
    
    const { data, error } = await supabase
      .from('leads')
      .insert({
        ...leadData,
        score,
        created_at: now,
        updated_at: now
      })
      .select()
      .single();
      
    if (error) {
      console.error('Error creating lead:', error);
      throw new Error('Failed to create lead');
    }
    
    return data as Lead;
  },
  
  async updateScore(leadId: string, score: number) {
    const { error } = await supabase
      .from('leads')
      .update({ 
        score,
        updated_at: new Date().toISOString()
      })
      .eq('id', leadId);
      
    if (error) {
      console.error('Error updating lead score:', error);
      throw new Error('Failed to update lead score');
    }
  },
  
  async getByEmail(email: string) {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('email', email)
      .single();
      
    if (error && error.code !== 'PGRST116') { // Not found is OK
      console.error('Error fetching lead:', error);
      throw new Error('Failed to fetch lead');
    }
    
    return data as Lead | null;
  },
  
  async getHighScoreLeads(minScore: number = 80) {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .gte('score', minScore)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching high score leads:', error);
      throw new Error('Failed to fetch leads');
    }
    
    return data as Lead[];
  }
};

// ===========================
// COMBO INTEREST SERVICE
// ===========================

export const comboInterestService = {
  async create(interestData: Omit<ComboInterest, 'created_at'>) {
    const { data, error } = await supabase
      .from('combo_interests')
      .insert({
        ...interestData,
        created_at: new Date().toISOString()
      })
      .select()
      .single();
      
    if (error) {
      console.error('Error creating combo interest:', error);
      throw new Error('Failed to create combo interest');
    }
    
    return data as ComboInterest;
  },
  
  async getByLead(leadId: string) {
    const { data, error } = await supabase
      .from('combo_interests')
      .select('*')
      .eq('lead_id', leadId)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching combo interests:', error);
      throw new Error('Failed to fetch combo interests');
    }
    
    return data as ComboInterest[];
  }
};

// ===========================
// TESTIMONIALS SERVICE
// ===========================

export const testimonialsService = {
  async getVerified() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('verified', true)
      .order('rating', { ascending: false })
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching testimonials:', error);
      throw new Error('Failed to fetch testimonials');
    }
    
    return data as Testimonial[];
  },
  
  async getFeatured(limit: number = 3) {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('verified', true)
      .gte('rating', 4.5)
      .order('rating', { ascending: false })
      .limit(limit);
      
    if (error) {
      console.error('Error fetching featured testimonials:', error);
      throw new Error('Failed to fetch testimonials');
    }
    
    return data as Testimonial[];
  }
};

// ===========================
// CASE STUDIES SERVICE
// ===========================

export const caseStudiesService = {
  async getFeatured() {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('featured', true)
      .order('metrics->roi_percentage', { ascending: false });
      
    if (error) {
      console.error('Error fetching case studies:', error);
      throw new Error('Failed to fetch case studies');
    }
    
    return data as CaseStudy[];
  },
  
  async getAll() {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .order('metrics->roi_percentage', { ascending: false });
      
    if (error) {
      console.error('Error fetching all case studies:', error);
      throw new Error('Failed to fetch case studies');
    }
    
    return data as CaseStudy[];
  }
};

// ===========================
// ANALYTICS SERVICE
// ===========================

export const analyticsService = {
  async trackPageView(page: string, title: string, utmParams?: any) {
    const { error } = await supabase
      .from('page_views')
      .insert({
        page,
        title,
        referrer: typeof window !== 'undefined' ? document.referrer : '',
        timestamp: new Date().toISOString(),
        session_id: getSessionId(),
        utm_params: utmParams
      });
      
    if (error) {
      console.error('Error tracking page view:', error);
    }
  },
  
  async trackConversion(type: string, leadId?: string, value?: number, combo?: string) {
    const { error } = await supabase
      .from('conversions')
      .insert({
        type,
        lead_id: leadId,
        value,
        combo,
        source: typeof window !== 'undefined' ? window.location.hostname : 'server',
        timestamp: new Date().toISOString()
      });
      
    if (error) {
      console.error('Error tracking conversion:', error);
    }
  }
};

// ===========================
// UTILITIES
// ===========================

function getSessionId(): string {
  if (typeof window === 'undefined') return 'server-session';
  
  let sessionId = sessionStorage.getItem('trhub_session_id');
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('trhub_session_id', sessionId);
  }
  
  return sessionId;
}

// ===========================
// DATABASE SCHEMA HELPERS
// ===========================

export const createTables = async () => {
  // This would be run in Supabase SQL editor
  const schema = `
    -- Leads table
    CREATE TABLE IF NOT EXISTS leads (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      company TEXT NOT NULL,
      employees INTEGER NOT NULL,
      current_pain TEXT NOT NULL,
      score INTEGER DEFAULT 0,
      source TEXT NOT NULL,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Combo interests table
    CREATE TABLE IF NOT EXISTS combo_interests (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      lead_id UUID REFERENCES leads(id),
      combo TEXT NOT NULL,
      customizations JSONB DEFAULT '{}',
      estimated_value DECIMAL(10,2),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Testimonials table
    CREATE TABLE IF NOT EXISTS testimonials (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      company TEXT NOT NULL,
      role TEXT NOT NULL,
      content TEXT NOT NULL,
      result TEXT NOT NULL,
      photo_url TEXT,
      rating DECIMAL(2,1) DEFAULT 5.0,
      verified BOOLEAN DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Case studies table
    CREATE TABLE IF NOT EXISTS case_studies (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title TEXT NOT NULL,
      company TEXT NOT NULL,
      industry TEXT NOT NULL,
      challenge TEXT NOT NULL,
      solution TEXT NOT NULL,
      results TEXT[] NOT NULL,
      metrics JSONB NOT NULL,
      image_url TEXT,
      featured BOOLEAN DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Analytics tables
    CREATE TABLE IF NOT EXISTS page_views (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      page TEXT NOT NULL,
      title TEXT NOT NULL,
      referrer TEXT,
      timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      session_id TEXT NOT NULL,
      utm_params JSONB
    );
    
    CREATE TABLE IF NOT EXISTS conversions (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      type TEXT NOT NULL,
      lead_id UUID REFERENCES leads(id),
      value DECIMAL(10,2),
      combo TEXT,
      source TEXT NOT NULL,
      timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Indexes for performance
    CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
    CREATE INDEX IF NOT EXISTS idx_leads_score ON leads(score DESC);
    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_combo_interests_lead_id ON combo_interests(lead_id);
    CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
    CREATE INDEX IF NOT EXISTS idx_conversions_type ON conversions(type);
  `;
  
  return schema;
};
