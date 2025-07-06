import React from 'react';
import Link from 'next/link';
import { combos } from '@/lib/combos';
import { PricingCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Combos Integrados',
  description: 'Comparar todos os combos de resiliência operacional da TR Hub.'
};

export default function CombosPage() {
  return (
    <main className="section container">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
          Combos Integrados
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Escolha o nível de maturidade digital que se encaixa no estágio da sua PME.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {combos.map((combo) => (
          <PricingCard
            key={combo.id}
            tier={combo.name}
            subtitle={combo.subtitle}
            price={combo.priceRange}
            period="/mês"
            description={combo.description}
            features={combo.features}
            cta={combo.cta}
            popular={combo.popular}
            recommended={combo.recommended}
            enterprise={combo.enterprise}
            // Removido onSelect para compatibilidade com export estático
          />
        ))}
      </div>

      <div className="text-center">
        <Link href="/recursos/diagnostico">
          <Button variant="primary" size="lg">
            Precisa de Ajuda para Escolher?
          </Button>
        </Link>
      </div>
    </main>
  );
} 