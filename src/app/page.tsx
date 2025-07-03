'use client';

import React from 'react';
import Link from 'next/link';
import { Button, CTAButton } from '@/components/ui/Button';
import { Card, FeatureCard, TestimonialCard, StatsCard, PricingCard } from '@/components/ui/Card';
import { clsx } from 'clsx';

// Hero Section Component
const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-success-50 pt-20 pb-16 lg:pt-32 lg:pb-24">
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    
    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-navy mb-6 text-balance">
            "Fim do Jogo de{' '}
            <span className="gradient-text">Empurra-Empurra</span>{' '}
            Tecnológico"
          </h1>
          
          <p className="text-xl lg:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            A TR Hub é a única <strong>Plataforma de Resiliência Operacional</strong> que integra 
            comunicação, segurança, conectividade e continuidade sob um único 
            ponto de responsabilidade para PMEs.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard value="R$ 1.500+" label="Economia/mês" className="bg-white/60 backdrop-blur-sm" />
            <StatsCard value="< 2h" label="SLA Resposta" className="bg-white/60 backdrop-blur-sm" />
            <StatsCard value="4 em 1" label="Soluções" className="bg-white/60 backdrop-blur-sm" />
            <StatsCard value="24x7" label="Monitoria" className="bg-white/60 backdrop-blur-sm" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Link href="/recursos/diagnostico">
              <CTAButton size="xl" glow>
                Diagnóstico Gratuito de Resiliência
              </CTAButton>
            </Link>
            <Link href="/combos">
              <Button variant="outline" size="xl">
                Ver Combos Integrados
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="text-sm text-neutral-600 space-y-1">
            <div>🏆 Confiado por 25+ PMEs em crescimento</div>
            <div>🤝 Parceria JRC PABX, ITGX, AP Networks, InovaInfo</div>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative">
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-primary-600 to-success-500 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-lg font-semibold">Dashboard TR Hub</div>
                <div className="text-sm opacity-90">Monitoramento em Tempo Real</div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-warning-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-success-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  </section>
);

// Problem Section Component
const ProblemSection = () => {
  const problems = [
    {
      icon: '📞',
      title: 'Telefonia Caótica',
      problems: [
        'PABX antigo sempre com problemas',
        'Calls perdidas = clientes perdidos',
        'Sem integração WhatsApp/0800',
        'Relatórios inexistentes'
      ],
      cost: 'R$ 800+/mês desperdiçados'
    },
    {
      icon: '🛡️',
      title: 'Segurança Fragmentada',
      problems: [
        'Antivírus básico insuficiente',
        'Dados críticos sem backup',
        'LGPD compliance ignorada',
        'Vulnerabilidades não monitoradas'
      ],
      cost: 'R$ 6.75M custo médio hack'
    },
    {
      icon: '💻',
      title: 'TI Terceirizada Ineficiente',
      problems: [
        'Jogo de empurra-empurra constante',
        'Múltiplos fornecedores, zero responsabilidade',
        'SLA inexistente ou não cumprido',
        'Custos descontrolados e crescentes'
      ],
      cost: 'R$ 1.200+/mês sem resultados'
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
            "Sua empresa está perdendo dinheiro todos os dias"
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            PMEs perdem em média <strong>R$ 3.500/mês</strong> com tecnologia fragmentada, 
            insegura e mal gerenciada. Você reconhece estes problemas?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} hover className="text-center h-full">
              <div className="text-6xl mb-6">{problem.icon}</div>
              <h3 className="text-2xl font-bold text-dark-navy mb-4">{problem.title}</h3>
              
              <ul className="text-left space-y-2 mb-6">
                {problem.problems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">❌</span>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="text-red-600 font-semibold">{problem.cost}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/recursos/calculadora-roi">
            <Button variant="primary" size="lg">
              Calcular Quanto Sua Empresa Perde Por Mês
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Solution Section Component
const SolutionSection = () => {
  const pillars = [
    {
      icon: '📢',
      title: 'VOZ DO COMANDO',
      subtitle: 'Comunicação (JRC)',
      color: 'blue',
      features: [
        'PABX Virtual + Gravação',
        'WhatsApp Business API',
        '0800 Presença Nacional',
        'Omnichannel Integrado',
        'Relatórios BI Chamadas'
      ],
      result: 'Comunicação vira ferramenta de crescimento'
    },
    {
      icon: '🛡️',
      title: 'MURALHAS DIGITAIS',
      subtitle: 'Segurança (ITGX)',
      color: 'green',
      features: [
        'SOC 24x7 + Analistas',
        'Firewall Gerenciado',
        'Pentest Semestral',
        'SIEM + Threat Intel',
        'LGPD Compliance'
      ],
      result: 'Empresa vira fortaleza defendida'
    },
    {
      icon: '🌐',
      title: 'FUNDAÇÕES SÓLIDAS',
      subtitle: 'Conectividade (AP Networks)',
      color: 'purple',
      features: [
        'Wi-Fi Enterprise Gerenciado',
        'Infraestrutura Juniper',
        'VPN Corporativa',
        'QoS Avançado',
        'Monitoramento 24x7'
      ],
      result: 'Infraestrutura vira via expressa'
    },
    {
      icon: '❤️',
      title: 'CORAÇÃO PULSANTE',
      subtitle: 'Continuidade (InovaInfo)',
      color: 'orange',
      features: [
        'MSP Completo',
        'Cloud Backup Geo-Redundante',
        'Disaster Recovery < 4h',
        'Monitoramento Preditivo',
        'Suporte Proativo 24x7'
      ],
      result: 'Operação ganha sistema imunológico'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
            "A Única Plataforma de Resiliência Operacional"
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            4 pilares integrados que trabalham juntos para transformar caos tecnológico 
            em vantagem competitiva. <strong>Um único fornecedor, uma única responsabilidade.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <FeatureCard
              key={index}
              icon={<span className="text-4xl">{pillar.icon}</span>}
              title={pillar.title}
              description={pillar.subtitle}
              className="h-full"
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/solucoes">
            <Button variant="primary" size="lg">
              Ver Como os 4 Pilares Trabalham Juntos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Combos Section Component
const CombosSection = () => {
  const combos = [
    {
      tier: 'Essencial',
      subtitle: 'Comunicação Segura',
      price: 'R$ 890-1.200',
      period: '/mês',
      description: 'PMEs iniciantes em maturidade digital',
      features: [
        'PABX Virtual 10 ramais',
        'Firewall Gerenciado',
        'Backup Cloud 500GB',
        'Suporte < 4h comercial',
        'Relatórios Mensais'
      ],
      popular: true,
      cta: 'Começar Teste Grátis'
    },
    {
      tier: 'Proativo',
      subtitle: 'Fortaleza Digital',
      price: 'R$ 1.800-2.500',
      period: '/mês',
      description: 'PMEs crescimento com dados críticos',
      features: [
        'Combo Essencial +',
        'SOC 24x7 Monitoramento',
        'Pentest Semestral',
        'Wi-Fi Enterprise',
        'Dashboard Cliente',
        'Consultoria 4h/mês'
      ],
      recommended: true,
      cta: 'Solicitar Proposta'
    },
    {
      tier: '360°',
      subtitle: 'Resiliência Estratégica',
      price: 'R$ 3.500-5.000',
      period: '/mês',
      description: 'PMEs maduras, setores regulados',
      features: [
        'Combo Proativo +',
        'CISO as a Service 20h/mês',
        'MSP Completo',
        'Disaster Recovery',
        'Compliance LGPD/ISO',
        'CTO Virtual 12h/mês'
      ],
      enterprise: true,
      cta: 'Falar com Especialista'
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-primary-50 to-success-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
            "Combos Integrados: Sua Escolha Estratégica"
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Não vendemos produtos isolados. Oferecemos <strong>soluções integradas</strong> que 
            crescem com sua empresa. Escolha seu nível de maturidade digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {combos.map((combo, index) => (
            <PricingCard
              key={index}
              tier={combo.tier}
              subtitle={combo.subtitle}
              price={combo.price}
              period={combo.period}
              description={combo.description}
              features={combo.features}
              cta={combo.cta}
              popular={combo.popular}
              recommended={combo.recommended}
              enterprise={combo.enterprise}
              onSelect={() => {
                // Analytics tracking would go here
                window.location.href = '/combos';
              }}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/combos">
            <Button variant="outline" size="lg">
              Comparar Todos os Combos em Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Social Proof Section Component
const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "A TR Hub acabou com nossa dor de cabeça de TI. Antes eram 4 fornecedores, cada um jogando a culpa no outro. Agora é um telefone só.",
      author: "Dr. Carlos Mendoza",
      company: "Clínica Odonto Mais",
      role: "Diretor Geral",
      rating: 5,
      photo: "https://ui-avatars.com/api/?name=Carlos+Mendoza&background=1E40AF&color=fff"
    },
    {
      quote: "O ROI foi imediato. No primeiro mês já economizamos mais que o valor do combo. E a segurança... dormimos tranquilos.",
      author: "Ana Beatriz Silva",
      company: "Escritório Silva & Associados",
      role: "Sócia-Diretora",
      rating: 5,
      photo: "https://ui-avatars.com/api/?name=Ana+Silva&background=10B981&color=fff"
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
            "Resultados Comprovados, Clientes Satisfeitos"
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              role={testimonial.role}
              rating={testimonial.rating}
              photo={testimonial.photo}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatsCard value="98.7%" label="Uptime Médio" />
          <StatsCard value="< 1h" label="Tempo Médio Resolução" />
          <StatsCard value="R$ 2.100" label="Economia Média/Mês" />
          <StatsCard value="4.9/5" label="Satisfação Cliente" />
        </div>

        <div className="text-center mt-12">
          <Link href="/recursos/cases">
            <Button variant="primary" size="lg">
              Ver Mais Cases de Sucesso
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Homepage Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CombosSection />
      <SocialProofSection />
    </main>
  );
}