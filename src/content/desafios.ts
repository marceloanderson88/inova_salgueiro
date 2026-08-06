export type Desafio = {
  slug: string;
  titulo: string;
  tema: "Conexão" | "Cultura" | "Recursos" | "Território" | "Institucional";
  icone:
    | "network"
    | "sprout"
    | "puzzle"
    | "target"
    | "flask"
    | "compass"
    | "database"
    | "scale";
  resumo: string;
  descricao: string;
  impacto: string;
  gts: string[];
};

export const desafios: Desafio[] = [
  {
    slug: "desconexao-entre-atores",
    titulo: "Conectar atores do ecossistema",
    tema: "Conexão",
    icone: "network",
    resumo:
      "Aproximar pessoas e instituições para criar uma rede forte e colaborativa.",
    descricao:
      "Empresas, instituições de ensino, poder público e sociedade civil trabalham em Salgueiro, mas raramente na mesma mesa. Sem canais permanentes de diálogo, cada ator resolve sozinho problemas que seriam mais simples de enfrentar em conjunto.",
    impacto:
      "Esforços duplicados, oportunidades perdidas e soluções que não escalam para além de quem as criou.",
    gts: ["governanca", "ictis", "ambientes-de-inovacao"],
  },
  {
    slug: "iniciativas-isoladas",
    titulo: "Transformar esforços isolados em ações coordenadas",
    tema: "Conexão",
    icone: "puzzle",
    resumo:
      "Organizar ideias, recursos e competências para resultados mais eficazes.",
    descricao:
      "Existem boas iniciativas acontecendo no território, mas de forma dispersa e sem articulação entre si. Falta um lugar onde elas se encontrem, se somem e ganhem escala.",
    impacto:
      "Resultados fragmentados, baixa continuidade e dificuldade de demonstrar o impacto real da inovação no município.",
    gts: ["programas-e-acoes", "governanca", "capital-e-fomento"],
  },
  {
    slug: "baixo-engajamento",
    titulo: "Ampliar participação e oportunidades",
    tema: "Cultura",
    icone: "target",
    resumo:
      "Criar caminhos para que mais pessoas possam contribuir e se desenvolver.",
    descricao:
      "Muita gente quer contribuir com o desenvolvimento de Salgueiro, mas não sabe por onde começar nem a quem procurar. A porta de entrada do ecossistema precisa ser clara, aberta e permanente.",
    impacto:
      "Talento disponível permanece fora do movimento e o ecossistema cresce mais devagar do que poderia.",
    gts: ["governanca", "programas-e-acoes"],
  },
  {
    slug: "cultura-empreendedora",
    titulo: "Fortalecer iniciativas existentes",
    tema: "Cultura",
    icone: "sprout",
    resumo:
      "Apoiar projetos e negócios locais para gerar mais impacto e continuidade.",
    descricao:
      "A cultura de empreendedorismo inovador ainda é incipiente no território. Negócios e projetos nascem, mas encontram poucos apoios estruturados para amadurecer e permanecer.",
    impacto:
      "Iniciativas promissoras se encerram cedo e o conhecimento acumulado se perde.",
    gts: ["programas-e-acoes", "capital-e-fomento", "ambientes-de-inovacao"],
  },
  {
    slug: "acesso-a-recursos",
    titulo: "Facilitar o acesso a recursos e fomento",
    tema: "Recursos",
    icone: "compass",
    resumo:
      "Organizar editais, parcerias e investimento em um caminho claro para quem precisa.",
    descricao:
      "Editais e linhas de financiamento existem, mas a informação chega tarde, fragmentada ou não chega. Quem poderia captar recurso frequentemente descobre a oportunidade depois do prazo.",
    impacto:
      "Recursos disponíveis não chegam ao território e projetos ficam sem viabilidade financeira.",
    gts: ["capital-e-fomento", "politicas-publicas"],
  },
  {
    slug: "informacoes-dispersas",
    titulo: "Consolidar informações do ecossistema",
    tema: "Território",
    icone: "database",
    resumo:
      "Reunir dados sobre atores, ambientes e oportunidades em um lugar só.",
    descricao:
      "Não existe uma fonte consolidada sobre quem faz o quê em Salgueiro. Cada consulta recomeça do zero, dependendo de contatos pessoais e da memória de quem já está no meio.",
    impacto:
      "Decisões tomadas sem base, articulação lenta e dificuldade de atrair parceiros externos.",
    gts: ["programas-e-acoes", "ictis"],
  },
  {
    slug: "fuga-de-talentos",
    titulo: "Reter e atrair talentos",
    tema: "Território",
    icone: "target",
    resumo:
      "Criar oportunidades para que quem se forma aqui possa construir carreira aqui.",
    descricao:
      "Jovens qualificados deixam Salgueiro em busca de oportunidades que o território ainda não oferece de forma organizada. O investimento em formação se converte em ganho para outras cidades.",
    impacto:
      "Perda contínua de capital humano e enfraquecimento da capacidade local de inovar.",
    gts: ["ictis", "programas-e-acoes", "capital-e-fomento"],
  },
  {
    slug: "formacao-e-mercado",
    titulo: "Aproximar formação e mercado",
    tema: "Território",
    icone: "flask",
    resumo:
      "Conectar o que se ensina no território com o que o mercado local precisa.",
    descricao:
      "A distância entre o que as instituições formam e o que empresas e organizações demandam reduz a empregabilidade local e limita a inovação aplicada.",
    impacto:
      "Vagas não preenchidas ao lado de profissionais sem colocação — os dois problemas ao mesmo tempo.",
    gts: ["ictis", "ambientes-de-inovacao"],
  },
  {
    slug: "infraestrutura-subutilizada",
    titulo: "Ativar a infraestrutura já existente",
    tema: "Território",
    icone: "flask",
    resumo:
      "Colocar laboratórios, espaços e equipamentos disponíveis a serviço do ecossistema.",
    descricao:
      "Laboratórios, equipamentos e espaços de inovação existem no município, mas são pouco conhecidos e pouco compartilhados entre instituições.",
    impacto:
      "Capacidade instalada ociosa enquanto projetos param por falta de estrutura.",
    gts: ["ambientes-de-inovacao", "ictis"],
  },
  {
    slug: "politicas-publicas-frageis",
    titulo: "Integrar políticas públicas de inovação",
    tema: "Institucional",
    icone: "scale",
    resumo:
      "Construir marcos e instrumentos que sustentem a inovação para além de uma gestão.",
    descricao:
      "A ausência — ou a baixa integração — de políticas municipais de inovação deixa o ecossistema dependente de esforços individuais e de ciclos políticos.",
    impacto:
      "Descontinuidade das ações e insegurança para quem investe no território a longo prazo.",
    gts: ["politicas-publicas", "governanca"],
  },
  {
    slug: "articulacao-quadrupla-helice",
    titulo: "Articular governo, empresas, academia e sociedade",
    tema: "Institucional",
    icone: "network",
    resumo:
      "Colocar os quatro setores na mesma agenda, com papéis claros e compromissos assumidos.",
    descricao:
      "A articulação entre os quatro setores acontece de forma pontual, geralmente motivada por eventos, e não como prática permanente de planejamento do território.",
    impacto:
      "Agendas desencontradas e baixa capacidade de resposta coletiva aos desafios do município.",
    gts: ["governanca", "politicas-publicas", "ictis"],
  },
];

export const desafiosDestaque = desafios.slice(0, 4);

export const temas = [
  "Conexão",
  "Cultura",
  "Recursos",
  "Território",
  "Institucional",
] as const;

export function getDesafio(slug: string) {
  return desafios.find((d) => d.slug === slug);
}
