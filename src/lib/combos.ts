export interface Combo {
  id: 'essencial' | 'proativo' | '360';
  name: string;
  subtitle: string;
  priceRange: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  recommended?: boolean;
  enterprise?: boolean;
}

export const combos: Combo[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    subtitle: 'Comunicação Segura',
    priceRange: 'R$ 890-1.200 / mês',
    description: 'PMEs iniciantes em maturidade digital',
    features: [
      'PABX Virtual 10 ramais',
      'Firewall Gerenciado',
      'Backup Cloud 500GB',
      'Suporte < 4h comercial',
      'Relatórios Mensais'
    ],
    cta: 'Começar Teste Grátis',
    popular: true
  },
  {
    id: 'proativo',
    name: 'Proativo',
    subtitle: 'Fortaleza Digital',
    priceRange: 'R$ 1.800-2.500 / mês',
    description: 'PMEs crescimento com dados críticos',
    features: [
      'Combo Essencial +',
      'SOC 24x7 Monitoramento',
      'Pentest Semestral',
      'Wi-Fi Enterprise',
      'Dashboard Cliente',
      'Consultoria 4h/mês'
    ],
    cta: 'Solicitar Proposta',
    recommended: true
  },
  {
    id: '360',
    name: '360°',
    subtitle: 'Resiliência Estratégica',
    priceRange: 'R$ 3.500-5.000 / mês',
    description: 'PMEs maduras, setores regulados',
    features: [
      'Combo Proativo +',
      'CISO as a Service 20h/mês',
      'MSP Completo',
      'Disaster Recovery',
      'Compliance LGPD/ISO',
      'CTO Virtual 12h/mês'
    ],
    cta: 'Falar com Especialista',
    enterprise: true
  }
]; 