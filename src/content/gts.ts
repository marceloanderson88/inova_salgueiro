/**
 * Grupos de Trabalho do Inova Salgueiro.
 *
 * Objetivos, resultados-chave e atividades vêm da Modelagem do Núcleo de
 * Inovação de Salgueiro (SEBRAE / MEGA Consultores, fev. 2026), onde os GTs
 * aparecem como "eixos de trabalho" com OKRs definidos para o 1º semestre
 * de 2026. Textos descritivos e perfis foram redigidos para o público geral.
 */

export type GT = {
  slug: string;
  nome: string;
  nomeCurto: string;
  icone: "building" | "listChecks" | "graduation" | "landmark" | "coins" | "shield";
  resumo: string;
  objetivo: string;
  /** Resultado-chave pactuado para o 1º semestre de 2026. */
  resultadoChave: string;
  descricao: string;
  frentes: string[];
  /** Atividades-chave do plano de trabalho do GT. */
  atividades: string[];
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
      "Estabelecer uma governança integrada, colaborativa e sustentável.",
    resultadoChave: "Modelo de Organização e Funcionamento em operação",
    descricao:
      "O GT Governança cuida das regras do jogo: como o movimento se organiza, como as decisões são tomadas, como os GTs se articulam entre si e como os resultados são acompanhados ao longo do tempo. É o grupo que dá previsibilidade e continuidade ao Inova Salgueiro.",
    frentes: [
      "Modelo de organização e funcionamento",
      "Comunicação e marketing do Núcleo",
      "Controle, avaliação e acompanhamento",
    ],
    atividades: [
      "Definir e implementar o plano de comunicação e marketing do Núcleo",
      "Definir as tecnologias do Núcleo",
      "Definir modelo de controle, avaliação e acompanhamento",
      "Definir a estrutura e as atividades-chave de gestão do Núcleo",
      "Consolidar as informações do Modelo",
      "Definir e implementar a agenda do Núcleo",
      "Publicizar o Modelo",
    ],
    perfil: [
      "Lideranças institucionais e empresariais",
      "Gestores públicos e privados",
      "Profissionais de governança, gestão e planejamento",
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
      "Ter um portfólio de produtos e serviços sistematizado, integrado e em operação.",
    resultadoChave: "V1 do Portfólio publicado",
    descricao:
      "O GT Programas e Ações reúne, organiza e dá visibilidade ao que já acontece em Salgueiro — e identifica o que ainda falta. O resultado é um portfólio vivo, capaz de mostrar a qualquer pessoa ou empresa quais oportunidades existem no território e quem as oferece.",
    frentes: [
      "Portfólio integrado de produtos e serviços",
      "Identificação de oportunidades existentes",
      "Programação e realização das ações do portfólio",
    ],
    atividades: [
      "Levantar produtos e serviços dos parceiros para o Núcleo",
      "Organizar por categorias",
      "Documentar a V1 do portfólio",
      "Programar o evento de lançamento do Núcleo",
      "Realizar o lançamento do Núcleo",
      "Programar as ações da V1 do portfólio",
      "Realizar as ações da V1 do portfólio",
    ],
    perfil: [
      "Coordenadores de programas e gestores de projetos",
      "Empresas que oferecem produtos, serviços ou capacitações",
      "Instituições de ensino e pesquisa",
      "Organizações executoras de ações no território",
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
    resultadoChave: "V1 do Mapeamento dos Ambientes de Inovação",
    descricao:
      "Salgueiro já tem infraestrutura de inovação — laboratórios, incubadoras, coworkings, centros e espaços makers, dentro e fora das instituições de ensino. O GT Ambientes de Inovação mapeia esses espaços, revela o que existe de disponível e articula o uso compartilhado, para que a infraestrutura do território deixe de ser subutilizada.",
    frentes: [
      "Conceito e mapeamento dos ambientes de inovação",
      "Identificação da infraestrutura disponível",
      "Articulação para uso compartilhado de espaços",
    ],
    atividades: [
      "Definir as informações componentes e a acessibilidade da V1 do mapeamento",
      "Definir os conceitos de ambientes de inovação e suas aplicações",
      "Identificar atores com potencial de manter ambientes de inovação",
      "Identificar com os atores quais ambientes já existem",
      "Executar o levantamento",
      "Organizar as informações",
      "Publicizar a V1 do mapeamento",
    ],
    perfil: [
      "Gestores de ambientes de inovação",
      "Empresas com laboratórios, coworkings ou espaços próprios",
      "Pesquisadores, professores e técnicos",
      "Representantes de hubs, incubadoras e espaços makers",
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
    objetivo: "Integrar as ICTIs de Salgueiro.",
    resultadoChave: "Fórum de Líderes de Inovação institucionalizado e operacional",
    descricao:
      "Escolas técnicas, institutos, faculdades e centros de pesquisa formam a base de conhecimento de Salgueiro. O GT ICTIs aproxima essas instituições, identifica lideranças formais e informais de inovação e instala um fórum permanente de cooperação — a porta de entrada para empresas que buscam pesquisa aplicada e talentos.",
    frentes: [
      "Mapeamento das ICTIs do território",
      "Fórum de Líderes de Inovação",
      "Cooperação institucional e com o setor produtivo",
    ],
    atividades: [
      "Identificar e mapear as ICTIs do território",
      "Identificar líderes formais e informais das ICTIs",
      "Levantar interesses estratégicos e expectativas",
      "Definir a proposta de modelo do Fórum",
      "Definir a agenda da reunião de instalação",
      "Realizar a reunião de instalação do Fórum",
    ],
    perfil: [
      "Dirigentes de instituições de ensino e pesquisa",
      "Coordenadores de NITs e núcleos de inovação",
      "Empresas com área de P&D ou demanda por pesquisa aplicada",
      "Pesquisadores, professores e estudantes de pós-graduação",
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
      "Propor políticas para o desenvolvimento de inovação e acompanhar suas implementações.",
    resultadoChave: "V1 do Mapeamento de Políticas de Inovação",
    descricao:
      "Inovação precisa de marco legal, orçamento e continuidade. O GT Políticas Públicas mapeia o que já existe sobre empreendedorismo inovador, identifica lacunas e propõe instrumentos municipais capazes de sustentar o ecossistema para além de um mandato ou de uma gestão.",
    frentes: [
      "Mapeamento de políticas existentes e lacunas",
      "Proposição de instrumentos municipais",
      "Acompanhamento de marcos regulatórios",
    ],
    atividades: [
      "Definir o escopo do mapeamento",
      "Levantar políticas existentes sobre empreendedorismo inovador",
      "Levantar os órgãos responsáveis pelas políticas de inovação",
      "Analisar as aplicabilidades e lacunas",
      "Sistematizar o mapeamento",
      "Publicizar a V1 do mapeamento",
    ],
    perfil: [
      "Gestores e servidores públicos",
      "Vereadores e assessorias legislativas",
      "Associações empresariais e representações do setor produtivo",
      "Advogados, especialistas em políticas públicas e sociedade civil",
    ],
    desafiosRelacionados: [
      "politicas-publicas-frageis",
      "articulacao-quadrupla-helice",
      "acesso-a-recursos",
    ],
    periodicidade: "Reuniões mensais",
  },
  {
    slug: "capital",
    nome: "GT Capital",
    nomeCurto: "Capital",
    icone: "coins",
    resumo:
      "Estrutura a central de fomento e amplia o acesso a investimento no território.",
    objetivo: "Ampliar o acesso a recursos para inovação.",
    resultadoChave: "Modelo da Central de Fomento para inovação estruturado",
    descricao:
      "Boas ideias morrem por falta de recurso. O GT Capital mapeia as fontes disponíveis — editais, programas, financiadores e instituições de apoio —, identifica as necessidades de investimento do território e estrutura uma central de fomento para que empresas e projetos cheguem preparados às oportunidades.",
    frentes: [
      "Mapeamento de fontes de recursos e instrumentos",
      "Central de Fomento para inovação",
      "Conexão com financiadores e investidores",
    ],
    atividades: [
      "Mapear movimentos e contextos atuais de tratamento de fomento",
      "Identificar necessidades de investimentos, financiamentos e fomentos",
      "Mapear fontes de recursos e seus instrumentos",
      "Organizar as informações sobre investimentos, financiamentos e fomentos",
      "Definir e validar o modelo de fomento para inovação",
      "Publicizar o modelo de fomento para inovação",
    ],
    perfil: [
      "Instituições de fomento e bancos de desenvolvimento",
      "Investidores e mentores",
      "Empresas e startups que buscam ou oferecem investimento",
      "Captadores de recursos e elaboradores de projetos",
    ],
    desafiosRelacionados: [
      "acesso-a-recursos",
      "iniciativas-isoladas",
      "cultura-empreendedora",
    ],
    periodicidade: "Reuniões quinzenais",
  },
];

/** Período de referência dos resultados-chave atualmente pactuados. */
export const periodoOKR = "1º semestre de 2026";

export function getGT(slug: string): GT | undefined {
  return gts.find((gt) => gt.slug === slug);
}
