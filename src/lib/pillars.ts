export interface Pillar {
  id: 'comunicacao' | 'seguranca' | 'conectividade' | 'continuidade';
  icon: string;
  name: string;
  teaser: string;
  description: string;
  features: string[];
}

export const pillars: Pillar[] = [
  {
    id: 'comunicacao',
    icon: '📢',
    name: 'Comunicação (JRC)',
    teaser: 'Voz do Comando',
    description:
      'Integre PABX Virtual, WhatsApp Business e Omnichannel numa única plataforma gerenciada.',
    features: [
      'PABX Virtual + Gravação',
      'WhatsApp Business API',
      '0800 Presença Nacional',
      'Omnichannel Integrado',
      'Relatórios BI Chamadas'
    ]
  },
  {
    id: 'seguranca',
    icon: '🛡️',
    name: 'Segurança (ITGX)',
    teaser: 'Muralhas Digitais',
    description:
      'SOC 24x7, Firewall Gerenciado e Pentest Semestral que blindam sua PME contra ataques.',
    features: [
      'SOC 24x7 + Analistas',
      'Firewall Gerenciado',
      'Pentest Semestral',
      'SIEM + Threat Intel',
      'LGPD Compliance'
    ]
  },
  {
    id: 'conectividade',
    icon: '🌐',
    name: 'Conectividade (AP Networks)',
    teaser: 'Fundações Sólidas',
    description:
      'Wi-Fi Enterprise, Infraestrutura Juniper e VPN Corporativa monitoradas 24x7.',
    features: [
      'Wi-Fi Enterprise Gerenciado',
      'Infraestrutura Juniper',
      'VPN Corporativa',
      'QoS Avançado',
      'Monitoramento 24x7'
    ]
  },
  {
    id: 'continuidade',
    icon: '❤️',
    name: 'Continuidade (InovaInfo)',
    teaser: 'Coração Pulsante',
    description:
      'MSP completo, Cloud Backup Geo-Redundante e Disaster Recovery em <4h.',
    features: [
      'MSP Completo',
      'Cloud Backup Geo-Redundante',
      'Disaster Recovery < 4h',
      'Monitoramento Preditivo',
      'Suporte Proativo 24x7'
    ]
  }
]; 