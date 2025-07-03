# 🚀 Instruções para Publicar no GitHub

## Passo 1: Criar Repositório no GitHub

1. **Acesse**: https://github.com/new
2. **Nome do repositório**: `tr-hub-site`
3. **Descrição**: `TR Hub - Plataforma de Resiliência Operacional Enterprise`
4. **Visibilidade**: ✅ Public
5. **Inicialização**: ❌ NÃO marque "Add a README file"
6. **Clique**: "Create repository"

## Passo 2: Conectar Repositório Local

Após criar o repositório, execute estes comandos no terminal:

```bash
# Renomear branch para main
git branch -M main

# Adicionar repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/tr-hub-site.git

# Fazer push do código
git push -u origin main
```

## Passo 3: Configurar GitHub Pages (Opcional)

Se quiser hospedar o site no GitHub Pages:

1. Vá em **Settings** > **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main
4. **Folder**: / (root)
5. **Save**

## Passo 4: Configurar Vercel (Recomendado)

Para deploy automático:

1. Acesse: https://vercel.com
2. Conecte sua conta GitHub
3. Importe o repositório `tr-hub-site`
4. Configure as variáveis de ambiente
5. Deploy automático a cada push

## Passo 5: Configurar Secrets (Opcional)

Para CI/CD, configure estes secrets no GitHub:

1. Vá em **Settings** > **Secrets and variables** > **Actions**
2. Adicione:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📁 Estrutura do Projeto

```
tr-hub-site/
├── .github/workflows/ci.yml    # CI/CD automático
├── src/
│   ├── app/                    # Páginas Next.js 14
│   ├── components/             # Componentes React
│   ├── lib/                    # Utilitários
│   └── styles/                 # CSS/Tailwind
├── README.md                   # Documentação
├── vercel.json                 # Config Vercel
└── package.json                # Dependências
```

## 🎯 Próximos Passos

1. ✅ Repositório criado
2. ✅ Código enviado
3. 🔄 Configurar domínio personalizado
4. 🔄 Integrar Supabase
5. 🔄 Configurar n8n
6. 🔄 Implementar formulários

## 📞 Suporte

Se precisar de ajuda:
- Email: thierry@trhub.com.br
- WhatsApp: (11) 99999-9999

---

**TR Hub** - Transformando PMEs em organizações tecnologicamente resilientes 🚀 