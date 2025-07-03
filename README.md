# TR Hub - Plataforma de Resiliência Operacional

![TR Hub Logo](https://img.shields.io/badge/TR%20Hub-Enterprise-blue?style=for-the-badge&logo=shield)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Sobre o Projeto

A **TR Hub** é uma Plataforma de Resiliência Operacional que integra comunicação, segurança, infraestrutura e continuidade para PMEs. Atuamos como "quarto sócio" tecnológico, eliminando a fragmentação de risco tecnológico através de soluções integradas.

### 🎯 Nossa Missão
Transformar PMEs em organizações tecnologicamente resilientes, eliminando o "jogo de empurra-empurra tecnológico" através de soluções integradas e parceiros estratégicos.

## 🏗️ Arquitetura

### Stack Tecnológica
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **Automação**: n8n (Workflows e Integrações)
- **Deploy**: Vercel (Produção) + GitHub Actions (CI/CD)

### Estrutura do Projeto
```
site-trhub/
├── src/
│   ├── app/                 # App Router (Next.js 14)
│   │   ├── combos/         # Páginas de combos
│   │   ├── solucoes/       # Páginas de soluções
│   │   └── layout.tsx      # Layout principal
│   ├── components/         # Componentes React
│   │   ├── business/       # Componentes de negócio
│   │   ├── layout/         # Componentes de layout
│   │   └── ui/            # Componentes base
│   ├── lib/               # Utilitários e configurações
│   ├── styles/            # Estilos globais
│   └── types/             # Definições TypeScript
├── public/                # Assets estáticos
└── docs/                  # Documentação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/tr-hub-site.git
cd tr-hub-site
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

4. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse o projeto**
```
http://localhost:3000
```

## 📦 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run type-check   # Verificação de tipos TypeScript
```

## 🎨 Design System

### Cores Principais
- **Primary Blue**: `#1E40AF` - Cor principal da marca
- **Success Green**: `#10B981` - Indicadores de sucesso
- **Warning Orange**: `#F59E0B` - Alertas e avisos
- **Neutral Gray**: `#6B7280` - Textos e elementos neutros

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Fonte Mono**: JetBrains Mono (código)

### Componentes
- Botões (Primary, Secondary, Outline, Ghost)
- Cards (com hover effects)
- Formulários (inputs, selects)
- Badges (status indicators)
- Seções (containers responsivos)

## 🏢 Nossos Pilares

### 1. Comunicação (JRC PABX)
- PABX Virtual
- Omnichannel
- Integração WhatsApp

### 2. Segurança (ITGX)
- SOC (Security Operations Center)
- Firewall Enterprise
- Pentest e CISO as a Service

### 3. Conectividade (AP Networks)
- Wi-Fi Enterprise
- Infraestrutura Juniper
- Redes corporativas

### 4. Continuidade (InovaInfo)
- MSP (Managed Services)
- Backup e Disaster Recovery
- Suporte 24/7

## 💼 Nossos Combos

### 🎯 Combo Essencial
**R$ 890 - R$ 1.200/mês**
- PABX Virtual + 5 ramais
- Firewall básico
- Wi-Fi corporativo
- Backup local

### 🚀 Combo Proativo
**R$ 1.800 - R$ 2.500/mês**
- Tudo do Essencial +
- SOC básico
- Monitoramento 24/7
- Suporte prioritário

### 🌟 Combo 360°
**R$ 3.500 - R$ 5.000/mês**
- Solução completa
- CISO dedicado
- Infraestrutura enterprise
- SLA garantido

## 🔧 Configuração de Produção

### Variáveis de Ambiente
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Email
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

### Deploy na Vercel
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

## 📊 Métricas e Analytics

- **Performance**: Lighthouse Score 100
- **SEO**: Otimizado para conversão
- **Acessibilidade**: WCAG 2.1 AA
- **Mobile**: Responsivo completo

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Thiago** - Presidente/Visionário (35%)
- **Liliane** - Diretora de Vendas (30%)
- **Thierry** - Diretor de Desenvolvimento (30%)
- **Leonardo** - Diretor Jurídico (5%)

## 📞 Contato

- **Website**: [trhub.com.br](https://trhub.com.br)
- **Email**: contato@trhub.com.br
- **WhatsApp**: (11) 99999-9999
- **LinkedIn**: [TR Hub](https://linkedin.com/company/tr-hub)

## 🎯 Roadmap

- [x] Site institucional
- [x] Páginas de combos
- [x] Sistema de leads
- [ ] Calculadora ROI
- [ ] Dashboard cliente
- [ ] Integração n8n
- [ ] App mobile

---

**TR Hub** - Transformando PMEs em organizações tecnologicamente resilientes. 🚀 