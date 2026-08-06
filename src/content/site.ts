export const site = {
  nome: "Inova Salgueiro",
  titulo: "Inova Salgueiro — Ecossistema de Inovação de Salgueiro",
  descricao:
    "Conheça o Inova Salgueiro, seus Grupos de Trabalho, desafios e formas de participação no ecossistema local de inovação.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://inovasalgueiro.com.br",
  proposito:
    "Transformar Salgueiro em um polo de inovação que conecta talentos e território, gerando oportunidades e qualidade de vida.",
  contato: {
    email: "contato@inovasalgueiro.com.br",
    endereco: "Salgueiro — PE, Brasil",
  },
  // O WhatsApp foi retirado junto com o telefone: o link wa.me expõe o número
  // na própria URL, então mantê-lo anularia a decisão de não divulgá-lo.
  redes: {
    instagram: "https://instagram.com/inovasalgueiro",
    linkedin: "https://linkedin.com/company/inovasalgueiro",
    youtube: "https://youtube.com/@inovasalgueiro",
  },
};

export const navegacao = [
  { href: "/", rotulo: "Início" },
  { href: "/o-que-e", rotulo: "O que é" },
  { href: "/gts", rotulo: "GTs" },
  { href: "/desafios", rotulo: "Desafios" },
  { href: "/como-participar", rotulo: "Como participar" },
  { href: "/contato", rotulo: "Contato" },
];

export const pilares = [
  {
    icone: "network" as const,
    titulo: "Articulação do ecossistema",
    texto:
      "Conectamos pessoas, instituições, empresas, governo e academia para construir pontes e gerar impacto.",
  },
  {
    icone: "users" as const,
    titulo: "Colaboração entre atores",
    texto:
      "Acreditamos na força do trabalho colaborativo e na diversidade de visões para encontrar soluções.",
  },
  {
    icone: "rocket" as const,
    titulo: "Transformação de desafios em ações",
    texto:
      "Organizamos os problemas prioritários do território e mobilizamos parceiros para enfrentá-los.",
  },
  {
    icone: "sprout" as const,
    titulo: "Fortalecimento de iniciativas",
    texto:
      "Ampliamos a visibilidade e a conexão de ações que já acontecem em Salgueiro e na região.",
  },
];

export const passosParticipacao = [
  {
    numero: 1,
    icone: "book" as const,
    titulo: "Entender o movimento",
    texto:
      "Conheça o Inova Salgueiro, seus objetivos, GTs e iniciativas em andamento.",
  },
  {
    numero: 2,
    icone: "user" as const,
    titulo: "Escolher como contribuir",
    texto:
      "Identifique sua área de interesse e escolha como você pode gerar impacto.",
  },
  {
    numero: 3,
    icone: "form" as const,
    titulo: "Preencher o formulário",
    texto:
      "Cadastre seus dados e conte mais sobre você, sua instituição e suas motivações.",
  },
  {
    numero: 4,
    icone: "users" as const,
    titulo: "Integrar-se aos GTs",
    texto:
      "Participe das reuniões, colabore nas iniciativas e ajude a transformar Salgueiro.",
  },
];

export const comoAtuamos = [
  {
    titulo: "Identificar desafios",
    texto:
      "Escutamos o território e organizamos os problemas prioritários do ecossistema.",
  },
  {
    titulo: "Conectar atores e competências",
    texto:
      "Aproximamos quem tem o problema de quem tem o conhecimento, a estrutura ou o recurso.",
  },
  {
    titulo: "Planejar respostas colaborativas",
    texto:
      "Construímos coletivamente, nos GTs, os caminhos possíveis para cada desafio.",
  },
  {
    titulo: "Mobilizar parceiros e recursos",
    texto:
      "Articulamos instituições, editais e investimentos para viabilizar as ações.",
  },
  {
    titulo: "Acompanhar resultados",
    texto:
      "Monitoramos o que foi entregue e devolvemos essa informação para o ecossistema.",
  },
];

/**
 * Quádrupla hélice do ecossistema, como aparece no Canvas de Modelo de
 * Negócios da modelagem do Núcleo (.COM, .EDU, .GOV, .ORG).
 */
export const segmentos = [
  {
    sigla: ".COM",
    icone: "briefcase" as const,
    titulo: "Empresas e startups",
    texto:
      "Do pequeno negócio à indústria, passando por startups e empreendedores. Trazem demandas reais, capacidade de execução e conexão com o mercado.",
    ganhos: [
      "Acesso a mercados e a conexões estratégicas",
      "Acesso a laboratórios e infraestrutura do território",
      "Orientação para investimento e fomento",
      "Proximidade com talentos em formação",
    ],
  },
  {
    sigla: ".EDU",
    icone: "graduation" as const,
    titulo: "Instituições de ensino e pesquisa",
    texto:
      "Escolas técnicas, institutos, faculdades e centros de pesquisa que formam pessoas e produzem conhecimento aplicável ao território.",
    ganhos: [
      "Aproximação entre formação e demanda do mercado",
      "Parcerias para pesquisa aplicada e extensão",
      "Visibilidade para projetos e competências",
      "Fórum permanente de líderes de inovação",
    ],
  },
  {
    sigla: ".GOV",
    icone: "landmark" as const,
    titulo: "Poder público",
    texto:
      "Prefeitura, órgãos, autarquias e legislativo, responsáveis pelas políticas e pelos instrumentos que sustentam a inovação no município.",
    ganhos: [
      "Diagnóstico consolidado do ecossistema",
      "Propostas de política construídas coletivamente",
      "Interlocução organizada com o setor produtivo",
      "Continuidade para além de um ciclo de gestão",
    ],
  },
  {
    sigla: ".ORG",
    icone: "users" as const,
    titulo: "Organizações da sociedade civil",
    texto:
      "Associações, cooperativas, entidades de classe e coletivos que dão capilaridade às ações e representam a diversidade do território.",
    ganhos: [
      "Capilaridade e acesso às redes do ecossistema",
      "Planejamento colaborativo com outros setores",
      "Informações estratégicas sobre o território",
      "Apoio na captação e na elaboração de projetos",
    ],
  },
];

/**
 * Via de mão dupla entre o Núcleo e o ecossistema, conforme registrado na
 * modelagem: o que cada parte traz e o que cada parte recebe.
 */
export const trocaEcossistema = {
  traz: [
    "Demandas reais por soluções",
    "Engajamento nas ações do Núcleo",
    "Proatividade e mentalidade colaborativa",
    "Recursos e infraestrutura",
    "Conexões estratégicas",
    "Disponibilidade de tempo",
  ],
  recebe: [
    "Conexões estratégicas e acesso a mercados",
    "Acesso a infraestruturas do território",
    "Informações e competências técnicas",
    "Promoção da formação empreendedora",
    "Orientação para investimento e fomento",
    "Planejamentos colaborativos e capilaridade nas redes",
  ],
};

export const avisoInstitucional =
  "O Inova Salgueiro atua como articulador do ecossistema. As ações e programas podem ser executados por instituições parceiras, empresas, organizações sociais, órgãos públicos e integrantes dos GTs.";

export const areasDeInteresse = [
  "Tecnologia e desenvolvimento",
  "Educação e formação",
  "Empreendedorismo e negócios",
  "Pesquisa e extensão",
  "Gestão pública e políticas",
  "Comunicação e engajamento",
  "Agronegócio e sustentabilidade",
  "Saúde",
  "Cultura e economia criativa",
  "Outra",
];

export const tiposParticipacao = [
  { valor: "pessoa_fisica", rotulo: "Pessoa física" },
  { valor: "empresa", rotulo: "Representante de empresa" },
  {
    valor: "instituicao_ensino",
    rotulo: "Representante de instituição de ensino ou pesquisa",
  },
  { valor: "poder_publico", rotulo: "Representante do poder público" },
  {
    valor: "sociedade_civil",
    rotulo: "Representante de organização da sociedade civil",
  },
  { valor: "startup", rotulo: "Startup ou empreendedor" },
  { valor: "investidor", rotulo: "Investidor ou instituição de fomento" },
  { valor: "outro", rotulo: "Outro" },
];

export const tiposContribuicao = [
  { valor: "conhecimento_tecnico", rotulo: "Conhecimento técnico" },
  { valor: "participacao_reunioes", rotulo: "Participação em reuniões" },
  { valor: "execucao_acoes", rotulo: "Execução de ações" },
  { valor: "infraestrutura", rotulo: "Infraestrutura" },
  { valor: "divulgacao", rotulo: "Divulgação e comunicação" },
  { valor: "conexao_parceiros", rotulo: "Conexão com parceiros" },
  { valor: "mentoria", rotulo: "Mentoria" },
  { valor: "captacao_recursos", rotulo: "Captação de recursos" },
  { valor: "politicas", rotulo: "Proposição de políticas" },
  { valor: "dados", rotulo: "Dados e informações" },
  { valor: "voluntariado", rotulo: "Voluntariado" },
  { valor: "outro", rotulo: "Outro" },
];

export const disponibilidades = [
  { valor: "ate_2_horas_mes", rotulo: "Até 2 horas por mês" },
  { valor: "2_4_horas_mes", rotulo: "De 2 a 4 horas por mês" },
  { valor: "4_8_horas_mes", rotulo: "De 4 a 8 horas por mês" },
  { valor: "acima_8_horas_mes", rotulo: "Acima de 8 horas por mês" },
  { valor: "eventual", rotulo: "Participação eventual" },
];

export const regrasParticipacao = [
  "A manifestação de interesse não implica entrada automática nos GTs.",
  "Os dados informados serão avaliados pela governança do Inova Salgueiro.",
  "A participação pode ocorrer como pessoa física ou como representante de instituição.",
  "O envolvimento depende da disponibilidade, do alinhamento e das necessidades de cada GT.",
  "Integrantes devem contribuir ativamente com tempo, competências, conexões ou recursos.",
  "Todas as pessoas participantes assumem princípios de colaboração e respeito.",
];
