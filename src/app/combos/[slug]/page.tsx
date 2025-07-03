'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { combos } from '@/lib/combos';
import { PricingCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return combos.map((c) => ({ slug: c.id }));
}

export default function ComboDetailsPage({ params }: Props) {
  const combo = combos.find((c) => c.id === params.slug);

  if (!combo) return notFound();

  return (
    <main className="section container">
      <div className="mb-12">
        <Link href="/combos" className="text-primary-600 hover:underline">
          ← Voltar para todos os combos
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        <PricingCard
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
          onSelect={() => {
            // TODO: Link para formulário de interesse
            window.location.href = '/recursos/diagnostico';
          }}
        />

        <div className="text-center mt-12">
          <Link href="/recursos/diagnostico">
            <Button variant="primary" size="lg">
              Solicitar Diagnóstico Gratuito
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 