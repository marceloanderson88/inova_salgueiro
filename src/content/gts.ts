export type GT = {
  slug: string;
  nome: string;
  nomeCurto: string;
  icone: "building" | "listChecks" | "graduation" | "landmark" | "coins" | "shield";
  resumo: string;
  objetivo: string;
  descricao: string;
  frentes: string[];
  entregas: string[];
  perfil: string[];
  desafiosRelacionados: string[];
  periodicidade: string;
  observacao?: string;
};

export const gts: GT[] = [
  {
    slug: "governanca",
    nome: "GT Governança",
    nomeCurto: "Governança",
    icone: "shield",
    resumo:
      "Define diretrizes, acompanha resultados e garante a sustentabilidade do movimento.",
    objetivo:
      "Estabelecer uma governança integrada, colaborativa e sustentável para o Inova Salgueiro.",
    descricao:
      "O GT Governança cuida das regras do jogo: como o movimento se organiza, como as decisões são tomadas, como os GTs se articulam entre si e como os resultados são acompanhados ao longo do tempo. É o grupo que dá previsibilidade e continuidade ao Inova Salgueiro.",
    frentes: [
      "Modelo de organização e funcionamento",
      "Regras de participação e agenda de reuniões",
      "Monitoramento de resultados e sustentabilidade",
    ],
    entregas: [
      "Modelo de organização e funcionamento do núcleo",
      "Regras de participação nos GTs",
      "Agenda periódica de reuniões",
      "Plano de comunicação institucional",
      "Painel de monitoramento de resultados",
      "Avaliação e acompanhamento dos GTs",
      "Estratégia de sustentabilidade do movimento",
    ],
    perfil: [
      "Lideranças institucionais",
      "Gestores públicos e privados",
      "Profissionais de governança e planejamento",
      "Representantes de entidades do ecossistema",
    ],
    desafiosRelacionados: [
      "desconexao-entre-atores",
      "iniciativas-isoladas",
      "baixo-engajamento",
    ],
    periodicidade: "Reuniões mensais",
  },
  {
    slug: "programas-e-acoes",
    nome: "GT Programas e Ações",
    nomeCurto: "Programas e Ações",
    icone: "listChecks",
    resumo:
      "Estrutura e articula programas, projetos e ações que geram valor para o ecossistema.",
    objetivo:
      "Organizar um portfólio integrado de produtos, serviços, programas e ações do ecossistema de inovação.",
    descricao:
      "O GT Programas e Ações reúne, organiza e dá visibilidade ao que já acontece em Salgueiro — e identifica o que ainda falta. O resultado é um portfólio vivo, capaz de mostrar a qualquer pessoa quais oportunidades existem no território e quem as oferece.",
    frentes: [
      "Portfólio integrado de programas e ações",
      "Identificação de oportunidades existentes",
      "Apoio à divulgação e ao planejamento colaborativo",
    ],
    entregas: [
      "Portfólio de programas e ações do ecossistema",
      "Mapa de oportunidades disponíveis no território",
      "Integração das iniciativas dos parceiros",
      "Calendário compartilhado de ações",
    ],
    perfil: [
      "Coordenadores de programas",
      "Gestores de projetos",
      "Instituições de ensino e pesquisa",
      "Empresas e organizações executoras",
    ],
    desafiosRelacionados: [
      "iniciativas-isoladas",
      "informacoes-dispersas",
      "cultura-empreendedora",
    ],
    periodicidade: "Reuniões quinzenais",
    observacao:
      "O GT organiza, articula e dá visibilidade às iniciativas. A execução poderá ser realizada pelas instituições responsáveis por cada programa ou ação.",
  },
  {
    slug: "ambientes-de-inovacao",
    nome: "GT Ambientes de Inovação",
    nomeCurto: "Ambientes de Inovação",
    icone: "building",
    resumo:
      "Conecta laboratórios, coworkings, incubadoras e espaços makers do território.",
    objetivo: "Fortalecer os ambientes de inovação de Salgueiro.",
    descricao:
      "Salgueiro já tem infraestrutura de inovação — laboratórios, incubadoras, coworkings, centros e espaços makers. O GT Ambientes de Inovação mapeia esses espaços, revela o que existe de disponível e articula o uso compartilhado, para que a infraestrutura do território deixe de ser subutilizada.",
    frentes: [
      "Mapeamento dos ambientes de inovação",
      "Identificação da infraestrutura disponível",
      "Articulação para uso compartilhado de espaços",
    ],
    entregas: [
      "Mapeamento dos ambientes de inovação do município",
      "Conexão entre laboratórios, incubadoras, coworkings e espaços makers",
      "Inventário de infraestrutura disponível",
      "Acordos de uso compartilhado de ambientes",
    ],
    perfil: [
      "Gestores de ambientes de inovação",
      "Pesquisadores e professores",
      "Empreendedores e técnicos",
      "Representantes de laboratórios, hubs, incubadoras e coworkings",
    ],
    desafiosRelacionados: [
      "infraestrutura-subutilizada",
      "formacao-e-mercado",
      "desconexao-entre-atores",
    ],
    periodicidade: "Reuniões mensais",
  },
  {
    slug: "ictis",
    nome: "GT ICTIs",
    nomeCurto: "ICTIs",
    icone: "graduation",
    resumo:
      "Integra as instituições científicas, tecnológicas e de inovação do território.",
    objetivo:
      "Integrar as Instituições Científicas, Tecnológicas e de Inovação (ICTIs) do território.",
    descricao:
      "Escolas técnicas, institutos, faculdades e centros de pesquisa formam a base de conhecimento de Salgueiro. O GT ICTIs aproxima essas instituições, identifica lideranças de inovação e cria um fórum permanente de cooperação institucional.",
    frentes: [
      "Mapeamento das ICTIs do território",
      "Fórum de líderes de inovação",
      "Promoção da cooperação institucional",
    ],
    entregas: [
      "Mapeamento das ICTIs de Salgueiro e região",
      "Identificação de lideranças de inovação",
      "Levantamento de interesses estratégicos",
      "Estruturação de fórum de líderes de inovação",
      "Acordos de cooperação institucional",
    ],
    perfil: [
      "Dirigentes de instituições de ensino e pesquisa",
      "Coordenadores de NITs e núcleos de inovação",
      "Pesquisadores e professores",
      "Estudantes de pós-graduação",
    ],
    desafiosRelacionados: [
      "formacao-e-mercado",
      "fuga-de-talentos",
      "desconexao-entre-atores",
    ],
    periodicidade: "Reuniões mensais",
  },
  {
    slug: "politicas-publicas",
    nome: "GT Políticas Públicas",
    nomeCurto: "Políticas Públicas",
    icone: "landmark",
    resumo:
      "Propõe políticas para o desenvolvimento da inovação e acompanha sua implementação.",
    objetivo:
      "Propor políticas para o desenvolvimento da inovação e acompanhar sua implementação.",
    descricao:
      "Inovação precisa de marco legal, orçamento e continuidade. O GT Políticas Públicas mapeia o que já existe, identifica lacunas e propõe instrumentos municipais capazes de sustentar o ecossistema para além de um mandato ou de uma gestão.",
    frentes: [
      "Mapeamento de políticas existentes e lacunas",
      "Proposição de instrumentos municipais",
      "Acompanhamento de marcos regulatórios",
    ],
    entregas: [
      "Mapeamento das políticas públicas de inovação vigentes",
      "Identificação de lacunas regulatórias",
      "Proposição de instrumentos municipais de fomento",
      "Articulação permanente com órgãos públicos",
      "Acompanhamento de políticas e marcos regulatórios",
    ],
    perfil: [
      "Gestores e servidores públicos",
      "Vereadores e assessorias legislativas",
      "Advogados e especialistas em políticas públicas",
      "Representantes da sociedade civil organizada",
    ],
    desafiosRelacionados: [
      "politicas-publicas-frageis",
      "articulacao-quadrupla-helice",
      "acesso-a-recursos",
    ],
    periodicidade: "Reuniões mensais",
  },
  {
    slug: "capital-e-fomento",
    nome: "GT Capital e Fomento",
    nomeCurto: "Capital e Fomento",
    icone: "coins",
    resumo:
      "Prospecta editais, parcerias e investimento para viabilizar as iniciativas do ecossistema.",
    objetivo: "Ampliar o acesso a recursos para inovação em Salgueiro.",
    descricao:
      "Boas ideias morrem por falta de recurso. O GT Capital e Fomento organiza as fontes disponíveis — editais, programas, investidores e instituições de apoio — e ajuda o ecossistema a chegar preparado às oportunidades de financiamento.",
    frentes: [
      "Mapeamento de editais e fontes de recursos",
      "Central de fomento do ecossistema",
      "Conexão com financiadores e investidores",
    ],
    entregas: [
      "Mapeamento de editais e fontes de recursos",
      "Identificação das necessidades de investimento do território",
      "Organização das oportunidades de fomento",
      "Estruturação de uma central de fomento",
      "Conexão com financiadores, investidores e instituições de apoio",
    ],
    perfil: [
      "Instituições de fomento e bancos de desenvolvimento",
      "Investidores e mentores",
      "Captadores de recursos e elaboradores de projetos",
      "Empreendedores e startups",
    ],
    desafiosRelacionados: [
      "acesso-a-recursos",
      "iniciativas-isoladas",
      "cultura-empreendedora",
    ],
    periodicidade: "Reuniões quinzenais",
  },
];

export function getGT(slug: string): GT | undefined {
  return gts.find((gt) => gt.slug === slug);
}
