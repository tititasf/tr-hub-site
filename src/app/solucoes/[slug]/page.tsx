import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { pillars } from '@/lib/pillars';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.id }));
}

export default function PilarDetailsPage({ params }: Props) {
  const pillar = pillars.find((p) => p.id === params.slug);
  if (!pillar) return notFound();

  return (
    <main className="section container max-w-3xl mx-auto">
      <Link href="/solucoes" className="text-primary-600 hover:underline">
        ← Voltar para todas as soluções
      </Link>

      <header className="text-center mt-8 mb-12">
        <div className="text-6xl mb-4">{pillar.icon}</div>
        <h1 className="text-4xl font-bold text-dark-navy mb-2">{pillar.teaser}</h1>
        <h2 className="text-xl text-neutral-600 mb-4">{pillar.name}</h2>
        <p className="text-neutral-700">{pillar.description}</p>
      </header>

      <Card className="mb-12">
        <h3 className="text-2xl font-semibold text-dark-navy mb-4">Principais Benefícios</h3>
        <ul className="space-y-2 list-disc list-inside">
          {pillar.features.map((f, i) => (
            <li key={i} className="text-neutral-700">{f}</li>
          ))}
        </ul>
      </Card>

      <div className="text-center">
        <Link href="/recursos/diagnostico">
          <Button variant="primary" size="lg">
            Agendar Diagnóstico Focado em {pillar.teaser}
          </Button>
        </Link>
      </div>
    </main>
  );
} 