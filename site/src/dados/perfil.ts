// Conteúdo central do site. Atualize aqui informações que mudam com o tempo.

export const perfil = {
  nome: "Renan Barbosa",
  cargo: "Analista de Marketing",
  local: "Campinas, SP",
  email: "contato@barbosarenan.com.br",
  linkedin: "https://www.linkedin.com/in/barbosa-renan/",
  instagram: "https://instagram.com/testeiaqui.py",
  github: "https://github.com/barbosarenan",
  descricaoSite:
    "Renan Barbosa é analista de marketing em Campinas, SP, e trabalha com SEO técnico, conteúdo B2B e IA aplicada ao marketing.",
  // Foto de perfil usada no Sobre e no schema Person.
  foto: "/sobre/renan-barbosa.jpg",
  // Instituições de formação (schema alumniOf).
  formacao: ["ETEC", "Universidade Paulista (UNIP)", "PUC-Campinas", "PUCPR"],
  site: "https://barbosarenan.com.br",
  // Temas usados no schema (knowsAbout) e no llms.txt.
  conhecimentos: ["SEO", "Estratégia de conteúdo", "Marketing digital", "IA aplicada ao marketing", "Arquitetura de informação", "Desenvolvimento web"],
};

// Identificadores estáveis para o schema.org em todas as páginas.
export const idPessoa = perfil.site + "/#renan";
export const idSite = perfil.site + "/#site";

// Case Compasso como obra criativa: deixa explícito que é demonstrativo e fictício.
export const compassoSchema = {
  "@type": "CreativeWork",
  "@id": perfil.site + "/projetos/compasso/#case",
  name: "Compasso: SEO e arquitetura de conteúdo",
  description: "Projeto demonstrativo de SEO e conteúdo para uma empresa fictícia de agendamento online, com diagnóstico, arquitetura da página e demonstração navegável.",
  url: perfil.site + "/projetos/compasso/",
  genre: "Projeto demonstrativo",
  creativeWorkStatus: "Demonstrativo · empresa e briefing fictícios",
  inLanguage: "pt-BR",
  author: { "@id": idPessoa },
  about: ["SEO", "Arquitetura de conteúdo", "Copywriting", "Experiência do usuário"],
  encoding: { "@type": "MediaObject", contentUrl: perfil.site + "/materiais/compasso-estudo.md", encodingFormat: "text/markdown" },
};

// Case profissional do redesign institucional: sem nome de empresa, dados internos ou métricas.
export const siteInstitucionalSchema = {
  "@type": "CreativeWork",
  "@id": perfil.site + "/projetos/site-institucional/#case",
  name: "Redesign de site institucional B2B",
  description: "Redesign do site WordPress de uma empresa B2B de tecnologia e análise de dados: estrutura de conteúdo, tema próprio, SEO técnico e performance.",
  url: perfil.site + "/projetos/site-institucional/",
  genre: "Case profissional",
  inLanguage: "pt-BR",
  author: { "@id": idPessoa },
  about: ["Redesign de site", "WordPress", "SEO técnico", "Arquitetura de conteúdo"],
};

export const pilares = [
  {
    titulo: "Entender antes de executar",
    texto: "Procuro compreender o problema, seus objetivos e suas restrições antes de definir ferramentas ou soluções.",
  },
  {
    titulo: "Dados como ponto de partida",
    texto: "Utilizo dados de busca, comportamento e performance para identificar oportunidades, validar hipóteses e orientar decisões.",
  },
  {
    titulo: "IA aplicada com critério",
    texto: "Utilizo inteligência artificial para ampliar capacidade de análise, pesquisa, organização e execução, mantendo o julgamento humano como parte central do processo.",
  },
  {
    titulo: "Tecnologia como ferramenta",
    texto: "Quando o problema exige uma solução técnica, busco compreender, prototipar e desenvolver alternativas que possam ser testadas e evoluídas.",
  },
];

export const areas = [
  {
    titulo: "SEO e descoberta em IA",
    texto: "Estratégia de busca, análise de oportunidades, arquitetura de conteúdo e otimização orientada por dados.",
  },
  {
    titulo: "Conteúdo e estratégia",
    texto: "Planejamento e desenvolvimento de conteúdo alinhado à intenção de busca, objetivos de comunicação e prioridades de negócio.",
  },
  {
    titulo: "IA aplicada ao marketing",
    texto: "Experimentação com LLMs, agentes e automações aplicadas a processos de marketing, conteúdo e análise.",
  },
  {
    titulo: "Web",
    texto: "Protótipos web, APIs e integrações para resolver problemas concretos.",
  },
];

export const casos = [
  {
    titulo: "Redesign de site institucional B2B",
    categoria: "Case profissional",
    papel: "web · SEO · conteúdo",
    texto: "Redesign do site WordPress de uma empresa B2B de tecnologia e análise de dados, com estrutura de conteúdo, tema próprio, SEO técnico e performance.",
    href: "/projetos/site-institucional/",
  },
  {
    titulo: "Marketing em empresa de tecnologia",
    categoria: "Experiência profissional",
    papel: "marketing · SEO · conteúdo · web",
    texto: "Atuação em marketing digital, com foco em estratégia de conteúdo, SEO e evolução de experiências web.",
  },
  {
    titulo: "Vireo Digital",
    categoria: "Projeto paralelo",
    papel: "estratégia · marketing · produto",
    texto: "Projeto voltado à aplicação de estratégia, posicionamento, design, performance e tecnologia na construção de soluções digitais.",
  },
  {
    titulo: "Personal Bot",
    categoria: "Experimento de produto",
    papel: "automação · arquitetura · prototipação",
    texto: "Protótipo desenvolvido para explorar a automação de processos por meio da integração entre painel web, API, WhatsApp e banco de dados.",
  },
  {
    titulo: "Este portfólio",
    categoria: "Projeto pessoal",
    papel: "design · conteúdo · SEO · desenvolvimento",
    texto: "Projeto desenvolvido como ambiente contínuo de experimentação em desenvolvimento web, SEO técnico, segurança, performance e experiência do usuário.",
  },
];

// Repositórios públicos em github.com/barbosarenan exibidos no AI Lab.
export const repositorios = [
  { nome: "personal-bot-web", titulo: "Personal Bot · painel", texto: "Painel web do protótipo de automação que integra API, WhatsApp e banco de dados.", linguagem: "TypeScript", cor: "#3178C6", estagio: "Protótipo" },
  { nome: "personal-bot-api", titulo: "Personal Bot · API", texto: "API do mesmo protótipo, separada do painel.", linguagem: "TypeScript", cor: "#3178C6", estagio: "Protótipo" },
  { nome: "site-portfolio", titulo: "Este portfólio", texto: "Código aberto deste site: Astro, conteúdo em Markdown, SEO técnico e deploy na Vercel.", linguagem: "Astro", cor: "#E0582F", estagio: "No ar" },
  { nome: "vireo-digital", titulo: "Vireo Digital", texto: "Site do projeto paralelo de estratégia e produto digital.", linguagem: "HTML", cor: "#E34C26", estagio: "Projeto" },
  { nome: "nlw-spacetime", titulo: "Cápsula do tempo", texto: "Aplicação web responsiva feita em evento de programação.", linguagem: "HTML", cor: "#E34C26", estagio: "Estudo" },
];

export const lab = [
  {
    titulo: "IA no fluxo de conteúdo",
    stack: "LLMs · prompting · auditoria",
    texto: "IA como camada de análise e aceleração, mantendo a decisão editorial humana.",
  },
  {
    titulo: "Vireo Strategos",
    stack: "agentes · automação · estratégia",
    texto: "Conceito de agente de IA desenvolvido para explorar aplicações em estratégia e operação de marketing.",
  },
  {
    titulo: "Personal Bot",
    stack: "web · API · WhatsApp · PostgreSQL",
    texto: "Protótipo de automação que integra interface web, API, WhatsApp e banco de dados.",
  },
  {
    titulo: "Site-portfolio",
    stack: "Astro · Vercel · GitHub",
    texto: "Ambiente de experimentação em desenvolvimento web, SEO, segurança, performance e experiência do usuário.",
  },
];

export const servicos = [
  {
    titulo: "Auditoria de SEO",
    entrega: "diagnóstico + prioridades",
    texto: "Levantamento técnico e de conteúdo organizado por impacto, esforço e dependência.",
  },
  {
    titulo: "Estratégia de conteúdo baseada em dados",
    entrega: "pauta + método",
    texto: "Transformação de sinais do Search Console e da intenção de busca em oportunidades editoriais.",
  },
  {
    titulo: "Experimentação com IA",
    entrega: "diagnóstico + protótipo",
    texto: "Mapeamento de tarefas e desenho de fluxos simples para testar onde IA realmente ajuda.",
  },
];
