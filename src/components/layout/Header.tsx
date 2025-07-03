'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/Button';

const navigation = [
  {
    name: 'Soluções',
    href: '/solucoes',
    children: [
      { name: 'Comunicação (JRC)', href: '/solucoes/comunicacao', description: 'PABX Virtual + WhatsApp Business' },
      { name: 'Segurança (ITGX)', href: '/solucoes/seguranca', description: 'SOC 24x7 + Firewall Gerenciado' },
      { name: 'Conectividade (AP Networks)', href: '/solucoes/conectividade', description: 'Wi-Fi Enterprise + VPN' },
      { name: 'Continuidade (InovaInfo)', href: '/solucoes/continuidade', description: 'MSP + Backup + Recovery' }
    ]
  },
  {
    name: 'Combos',
    href: '/combos',
    children: [
      { name: 'Essencial', href: '/combos/essencial', description: 'R$ 890-1.200/mês - Comunicação Segura' },
      { name: 'Proativo', href: '/combos/proativo', description: 'R$ 1.800-2.500/mês - Fortaleza Digital' },
      { name: '360°', href: '/combos/360', description: 'R$ 3.500-5.000/mês - Resiliência Estratégica' }
    ]
  },
  {
    name: 'Empresa',
    href: '/empresa',
    children: [
      { name: 'Quem Somos', href: '/empresa', description: 'Nossa missão e valores' },
      { name: 'Equipe', href: '/empresa/equipe', description: 'Conheça nossos fundadores' },
      { name: 'Parceiros', href: '/empresa/parceiros', description: 'JRC, ITGX, AP Networks, InovaInfo' }
    ]
  },
  {
    name: 'Recursos',
    href: '/recursos',
    children: [
      { name: 'Cases de Sucesso', href: '/recursos/cases', description: 'Histórias de transformação' },
      { name: 'Calculadora ROI', href: '/recursos/calculadora-roi', description: 'Calcule sua economia' },
      { name: 'Blog', href: '/recursos/blog', description: 'Insights sobre resiliência' }
    ]
  }
];

interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  transparent = false, 
  sticky = true 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className={clsx(
      'w-full transition-all duration-300 z-50',
      {
        'sticky top-0': sticky,
        'bg-transparent': transparent,
        'bg-white/95 backdrop-blur-sm border-b border-neutral-200/20': !transparent,
      }
    )}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-success-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TR</span>
            </div>
            <div>
              <div className="text-xl font-bold text-dark-navy">TR Hub</div>
              <div className="text-xs text-neutral-600 -mt-1">Resiliência Operacional</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.children && (
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-large border border-neutral-200 py-4 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-6 py-3 hover:bg-neutral-50 transition-colors duration-200"
                      >
                        <div className="font-medium text-dark-navy mb-1">{child.name}</div>
                        <div className="text-sm text-neutral-600">{child.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/recursos/calculadora-roi">
              <Button variant="outline" size="md">
                Calcular ROI
              </Button>
            </Link>
            <Link href="/recursos/diagnostico">
              <Button variant="primary" size="md">
                Diagnóstico Gratuito
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-neutral-200">
            <div className="space-y-4 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <Link href="/recursos/calculadora-roi" className="block">
                  <Button variant="outline" size="md" className="w-full">
                    Calcular ROI
                  </Button>
                </Link>
                <Link href="/recursos/diagnostico" className="block">
                  <Button variant="primary" size="md" className="w-full">
                    Diagnóstico Gratuito
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 