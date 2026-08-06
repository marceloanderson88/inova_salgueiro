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

### Versão do Next.js

O projeto está fixado na linha **15.5.x**. A Vercel **bloqueia o deploy** de versões do
Next.js com CVE aberto — a mensagem aparece já na etapa `Deploying outputs...`, depois de
o build ter concluído com sucesso:

```
Vulnerable version of Next.js detected, please update immediately.
```

Ao atualizar, confira antes com `npm audit` se a versão escolhida está limpa. Manter-se
na linha 15.5 evita as mudanças de breaking change do 16.

Sobra um aviso de `sharp` (dependência transitiva do próprio Next.js, usada em otimização
de imagem). Ele não bloqueia o deploy e não tem efeito prático aqui: o site não usa nenhuma
imagem raster e, na Vercel, a otimização é feita pela infraestrutura da plataforma. Corrigi-lo
exigiria subir para o Next.js 16. O `postcss` já vem forçado para uma versão corrigida via
`overrides` no `package.json`.

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
npm run lint       # ESLint CLI (o `next lint` foi deprecado no Next.js 15.5)
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

O arquivo `vercel.json` aplica os cabeçalhos de segurança. A região das funções
**não** é fixada ali de propósito: a chave `regions` é restrita a planos pagos e
faz o deploy falhar no plano Hobby. Para escolher a região (`gru1`, São Paulo),
use Settings → Functions → Function Region no painel da Vercel.

## Variáveis de ambiente

| Variável | Obrigatória | Para que serve |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL pública usada em canonical URLs, sitemap e Open Graph. |
| `SUPABASE_URL` | Não | URL do projeto Supabase. |
| `SUPABASE_SERVICE_ROLE_KEY` | Não | Service role key, usada apenas no servidor. **Nunca** prefixe com `NEXT_PUBLIC_`. |
| `RESEND_API_KEY` | Não | Ativa o envio de e-mail. Sem ela, nenhuma mensagem é enviada. |
| `EMAIL_REMETENTE` | Com Resend | Remetente, ex.: `Inova Salgueiro <contato@inovasalgueiro.org.br>`. |
| `EMAIL_NOTIFICACAO` | Não | Caixa da governança que recebe o aviso de cada manifestação. |

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

### Origem do conteúdo

Objetivos, resultados-chave e atividades dos GTs vêm da **Modelagem do Núcleo de
Inovação de Salgueiro** (SEBRAE / MEGA Consultores), onde os GTs aparecem como
"eixos de trabalho" com OKRs pactuados para o 1º semestre de 2026. Ao virar o
período, atualize `resultadoChave` de cada GT e a constante `periodoOKR` em
`src/content/gts.ts`.

A segmentação em quádrupla hélice (`segmentos`) e a via de mão dupla
(`trocaEcossistema`), em `src/content/site.ts`, derivam do Canvas de Modelo de
Negócios e do quadro de contribuições da mesma modelagem.

## Formulários

Há um único caminho de entrada: o formulário de `/como-participar`, que envia
para `POST /api/interesse`. Ele reúne todos os campos exigidos pelo SDD —
GTs de interesse, formas de contribuição, motivação (mínimo de 30 caracteres),
disponibilidade e os dois aceites obrigatórios (privacidade e regras de
participação).

Os CTAs espalhados pelo site — hero, cards de GT, seções e header — apontam
todos para lá, em vez de capturar dados soltos em vários lugares.

Proteções ativas: validação com Zod no cliente e no servidor, campo honeypot
(responde 200 silencioso para bots) e rate limiting de 5 envios por
IP + e-mail a cada 10 minutos. O rate limiting é em memória — em escala,
troque por Vercel KV ou Upstash.

Links profundos funcionam: `/como-participar?gt=ictis` já marca o GT correspondente.

### E-mail

Cada manifestação dispara duas mensagens:

1. **confirmação** para quem preencheu, com o protocolo e os próximos passos;
2. **aviso** para `EMAIL_NOTIFICACAO`, com todos os campos preenchidos e o
   `reply_to` apontando para a pessoa interessada — responder no cliente de
   e-mail já fala diretamente com ela.

Os envios acontecem em `after()`, depois que a resposta HTTP já saiu: o
visitante vê a confirmação na hora e uma indisponibilidade do provedor não
invalida um cadastro já registrado. Falhas ficam no log da função.

Para ligar, crie uma API key em <https://resend.com/api-keys> e preencha
`RESEND_API_KEY` e `EMAIL_REMETENTE` na Vercel. **O domínio do remetente
precisa estar verificado no Resend.** Para testar antes disso, use
`Inova Salgueiro <onboarding@resend.dev>` — nesse modo o Resend entrega apenas
para o e-mail dono da conta.

Trocar de provedor (Brevo, SMTP institucional) significa mexer só na função
`enviar` de `src/lib/email.ts`; os modelos não mudam.

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
