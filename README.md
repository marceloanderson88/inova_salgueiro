# Portal Inova Salgueiro

Site institucional do **Inova Salgueiro**, o ecossistema de inovação de Salgueiro — PE.
Implementa o MVP público descrito no SDD: apresenta o movimento, seu propósito, os seis
Grupos de Trabalho, os desafios do território e recebe manifestações de interesse em participar.

## Stack

| Camada | Escolha |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19 + TypeScript estrito |
| Estilo | Tailwind CSS v4 (configuração CSS-first em `src/app/globals.css`) |
| Ícones | lucide-react |
| Formulários | React Hook Form + Zod |
| Persistência | Supabase (opcional — ver abaixo) |
| Hospedagem | Vercel |

Nenhuma imagem externa é carregada: a paisagem do sertão no hero, o logotipo e os elementos
decorativos são SVG vetoriais gerados no próprio código.

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # opcional: o site sobe sem nenhuma variável
npm run dev                  # http://localhost:3000
```

Outros comandos:

```bash
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Em <https://vercel.com/new>, importe `marceloanderson88/inova_salgueiro`.
3. A Vercel detecta o Next.js sozinho — **não é preciso alterar** build command,
   output directory nem install command.
4. Em **Settings → Environment Variables**, adicione o que for necessário
   (ver a seção seguinte). Para um primeiro deploy, basta:

   ```
   NEXT_PUBLIC_SITE_URL = https://<seu-projeto>.vercel.app
   ```

5. Clique em **Deploy**.
6. Depois de apontar o domínio final (Settings → Domains), atualize
   `NEXT_PUBLIC_SITE_URL` para ele e faça um redeploy — essa variável alimenta
   os metadados canônicos, o `sitemap.xml` e a imagem de Open Graph.

O arquivo `vercel.json` já fixa a região `gru1` (São Paulo) e cabeçalhos de segurança.

## Variáveis de ambiente

| Variável | Obrigatória | Para que serve |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL pública usada em canonical URLs, sitemap e Open Graph. |
| `SUPABASE_URL` | Não | URL do projeto Supabase. |
| `SUPABASE_SERVICE_ROLE_KEY` | Não | Service role key, usada apenas no servidor. **Nunca** prefixe com `NEXT_PUBLIC_`. |

### Sem Supabase o site funciona

Se as variáveis do Supabase não estiverem definidas, a rota `POST /api/interesse`
continua validando os dados, aplicando rate limiting, gerando o protocolo e devolvendo
a confirmação ao visitante — o registro fica no log do servidor
(Vercel → Deployments → Functions → Logs). Isso permite publicar o site antes de o
banco existir, sem perder nenhuma manifestação de vista.

### Ligando o Supabase

1. Crie um projeto em <https://supabase.com>.
2. Rode `supabase/migrations/0001_inova_salgueiro.sql` no SQL Editor. A migração cria
   as tabelas, ativa RLS em todas elas, define as policies por papel
   (`admin`, `governanca`, `lider_gt`, `editor`) e já cadastra os seis GTs.
3. Copie *Project URL* e *service_role key* (Settings → API) para as variáveis na Vercel.
4. Redeploy.

Nenhuma policy libera leitura anônima: dados pessoais nunca ficam públicos.

## Estrutura

```
src/
  app/
    page.tsx                 # página inicial (hero, pilares, propósito, GTs,
                             # desafios, como atuamos, como participar, CTA)
    o-que-e/                 # o movimento, papel e ciclo de atuação
    gts/                     # listagem + página individual de cada GT (SSG)
    desafios/                # lista filtrável por tema
    como-participar/         # etapas, regras e formulário completo
    contato/  obrigado/  privacidade/  termos/
    api/interesse/route.ts   # recebe as manifestações
    sitemap.ts  robots.ts  opengraph-image.tsx  icon.svg
  components/
    layout/    # Header, Footer, CabecalhoPagina
    home/      # seções da página inicial + panorama do sertão
    gts/  desafios/  forms/  marca/  ui/
  content/     # GTs, desafios e textos institucionais (fonte única de conteúdo)
  lib/         # validações Zod e persistência
supabase/migrations/
```

Para editar textos, GTs ou desafios, mexa apenas em `src/content/` — as páginas
derivam tudo dali.

## Formulários

Há dois caminhos de entrada, ambos na mesma rota `POST /api/interesse`:

- **rápido** — card do hero: nome, instituição, área de interesse e e-mail;
- **completo** — `/como-participar`: todos os campos exigidos pelo SDD, incluindo
  GTs de interesse, formas de contribuição, motivação (mínimo de 30 caracteres),
  disponibilidade e os dois aceites obrigatórios (privacidade e regras de participação).

Proteções ativas: validação com Zod no cliente e no servidor, campo honeypot
(responde 200 silencioso para bots) e rate limiting de 5 envios por
IP + e-mail a cada 10 minutos. O rate limiting é em memória — em escala,
troque por Vercel KV ou Upstash.

Links profundos funcionam: `/como-participar?gt=ictis` já marca o GT correspondente.

## Acessibilidade

Alvo WCAG 2.1 AA: hierarquia semântica de títulos, labels reais em todos os campos,
erros associados aos campos via `role="alert"`, foco visível em todos os controles
(inclusive nos chips com input oculto), alvos de toque de no mínimo 44 px, skip link,
`aria-label` nos ícones e respeito a `prefers-reduced-motion`.

## O que ainda não está no MVP

A área administrativa (`/admin`) prevista na seção 11 do SDD — login, dashboard,
listagem de interessados com filtros, alteração de status, notas internas e exportação
CSV — não faz parte desta entrega. O esquema do banco e as policies de RLS que ela
usará já estão criados na migração.
