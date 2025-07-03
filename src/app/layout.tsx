import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'TR Hub - Plataforma de Resiliência Operacional',
    template: '%s | TR Hub'
  },
  description: 'Transforme caos tecnológico em vantagem competitiva. A única Plataforma de Resiliência Operacional que integra comunicação, segurança, conectividade e continuidade para PMEs.',
  keywords: [
    'PABX empresarial',
    'segurança cibernética PME',
    'TI terceirizada',
    'comunicação empresarial',
    'resiliência operacional',
    'transformação digital',
    'JRC PABX',
    'ITGX segurança',
    'AP Networks'
  ],
  authors: [{ name: 'TR Hub Team' }],
  creator: 'TR Hub',
  publisher: 'TR Hub',
  metadataBase: new URL('https://trhub.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://trhub.com.br',
    title: 'TR Hub - Plataforma de Resiliência Operacional',
    description: 'Fim do jogo de empurra-empurra tecnológico. Integração completa de comunicação, segurança, conectividade e continuidade para PMEs.',
    siteName: 'TR Hub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TR Hub - Resiliência Operacional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TR Hub - Plataforma de Resiliência Operacional',
    description: 'Transforme caos tecnológico em vantagem competitiva para PMEs.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1E40AF" />
        <meta name="color-scheme" content="light" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TR Hub de Soluções",
              "description": "Plataforma de Resiliência Operacional para PMEs",
              "url": "https://trhub.com.br",
              "logo": "https://trhub.com.br/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://linkedin.com/company/trhub"
              ]
            })
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TR Hub",
              "description": "Plataforma de Resiliência Operacional",
              "url": "https://trhub.com.br",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://trhub.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Skip to main content */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          Pular para o conteúdo principal
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <div id="main-content">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="bg-dark-navy text-white">
          <div className="container py-16">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-success-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">TR</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">TR Hub</div>
                    <div className="text-xs text-neutral-400 -mt-1">Resiliência Operacional</div>
                  </div>
                </div>
                <p className="text-neutral-400 mb-4">
                  Transformando caos tecnológico em vantagem competitiva para PMEs.
                </p>
                <div className="space-y-2 text-sm text-neutral-400">
                  <div>📞 (11) 99999-9999</div>
                  <div>✉️ contato@trhub.com.br</div>
                  <div>📍 São Paulo, SP</div>
                </div>
              </div>
              
              {/* Solutions */}
              <div>
                <h3 className="font-semibold text-white mb-4">Soluções</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><a href="/solucoes/comunicacao" className="hover:text-white transition-colors">Comunicação (JRC)</a></li>
                  <li><a href="/solucoes/seguranca" className="hover:text-white transition-colors">Segurança (ITGX)</a></li>
                  <li><a href="/solucoes/conectividade" className="hover:text-white transition-colors">Conectividade (AP Networks)</a></li>
                  <li><a href="/solucoes/continuidade" className="hover:text-white transition-colors">Continuidade (InovaInfo)</a></li>
                </ul>
              </div>
              
              {/* Combos */}
              <div>
                <h3 className="font-semibold text-white mb-4">Combos</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><a href="/combos/essencial" className="hover:text-white transition-colors">Essencial</a></li>
                  <li><a href="/combos/proativo" className="hover:text-white transition-colors">Proativo</a></li>
                  <li><a href="/combos/360" className="hover:text-white transition-colors">360°</a></li>
                  <li><a href="/recursos/calculadora-roi" className="hover:text-white transition-colors">Calculadora ROI</a></li>
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h3 className="font-semibold text-white mb-4">Recursos</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><a href="/recursos/cases" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
                  <li><a href="/recursos/blog" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="/empresa" className="hover:text-white transition-colors">Sobre Nós</a></li>
                  <li><a href="/contato" className="hover:text-white transition-colors">Contato</a></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-neutral-400 mb-4 md:mb-0">
                © 2024 TR Hub de Soluções. Todos os direitos reservados.
              </div>
              <div className="flex space-x-6 text-sm text-neutral-400">
                <a href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="/lgpd" className="hover:text-white transition-colors">LGPD</a>
              </div>
            </div>
          </div>
        </footer>
        
        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da TR Hub."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-success-500 hover:bg-success-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Falar no WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}