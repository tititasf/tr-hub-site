import React from 'react';
import Link from 'next/link';
import { pillars } from '@/lib/pillars';
import { FeatureCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Soluções Integradas',
  description: 'Conheça os 4 pilares que formam a Plataforma de Resiliência Operacional da TR Hub.'
};

export default function SolucoesPage() {
  return (
    <main className="section container">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
          4 Pilares Integrados
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Comunicação, Segurança, Conectividade e Continuidade trabalhando juntos para eliminar fragilidade tecnológica.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {pillars.map((p) => (
          <Link key={p.id} href={`/solucoes/${p.id}`}>
            <FeatureCard
              icon={<span className="text-4xl">{p.icon}</span>}
              title={p.teaser}
              description={p.name}
              className="cursor-pointer hover:scale-105 transition-transform"
            />
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/recursos/diagnostico">
          <Button variant="primary" size="lg">
            Solicitar Diagnóstico Gratuito
          </Button>
        </Link>
      </div>
    </main>
  );
} 