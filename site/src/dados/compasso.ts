// Cenário criado exclusivamente para demonstração. Não contém dados de clientes.
export const versoes = {
  antes: {
    titulo: "Compasso | Início",
    descricao: "",
    h1: "Mais tempo. Mais possibilidades.",
    abertura: "Uma solução completa para transformar a sua rotina. Conheça um novo jeito de organizar o que importa e ir além.",
    acao: "Saiba mais",
  },
  depois: {
    titulo: "Agendamento online para autônomos | Compasso",
    descricao: "Conheça a proposta da Compasso: uma agenda online para profissionais autônomos organizarem serviços, horários disponíveis e pedidos de agendamento em um só lugar.",
    h1: "Agendamento online para profissionais autônomos.",
    abertura: "Apresente seus serviços, defina os horários disponíveis e reúna os pedidos de agendamento em uma única agenda.",
    acao: "Explorar a agenda de exemplo",
  },
};

export const diagnostico = [
  { id: "01", prioridade: "Alta", esforco: "Baixo", problema: "Título restrito à marca", evidencia: "O título original é “Compasso | Início”. Ele não informa a categoria do produto nem a quem se destina.", decisao: "Nomear agendamento online e profissionais autônomos no título e na abertura.", validacao: "Comparar o <title> e o H1 das duas páginas.", dependencia: "Confirmar a oferta e o público definidos no briefing." },
  { id: "02", prioridade: "Alta", esforco: "Baixo", problema: "Promessa sem explicação do produto", evidencia: "“Mais tempo. Mais possibilidades.” poderia descrever vários serviços. A abertura não explica o que o visitante pode fazer.", decisao: "Apresentar serviços, disponibilidade e pedidos de agendamento como funções específicas da proposta.", validacao: "Verificar se a abertura responde o que é, para quem é e o que permite fazer.", dependencia: "Manter as funcionalidades dentro do escopo fictício." },
  { id: "03", prioridade: "Alta", esforco: "Médio", problema: "Próximo passo pouco claro", evidencia: "O link “Saiba mais” leva a outro bloco genérico, sem mostrar o produto.", decisao: "Direcionar a ação principal para uma agenda ilustrativa na própria página.", validacao: "Acionar o link e confirmar a chegada à seção da agenda.", dependencia: "Construir uma demonstração coerente com a oferta." },
  { id: "04", prioridade: "Média", esforco: "Baixo", problema: "Ausência de descrição da página", evidencia: "A versão inicial foi construída sem meta description.", decisao: "Escrever uma descrição alinhada ao conteúdo da página, sem prometer resultados.", validacao: "Conferir a tag de descrição no HTML da versão proposta. Sua exibição na busca não é garantida.", dependencia: "Finalizar a mensagem principal." },
  { id: "05", prioridade: "Média", esforco: "Médio", problema: "Dúvidas de avaliação sem resposta", evidencia: "A página inicial não explica o fluxo de uso, os recursos ou as limitações da proposta.", decisao: "Organizar seções de funcionamento, recursos e perguntas frequentes, com navegação por âncoras.", validacao: "Navegar pelas seções e abrir as respostas pelo teclado.", dependencia: "Definir o que faz parte da proposta e o que está fora do escopo." },
];

export const arquitetura = [
  { rota: "/", objetivo: "Entender a oferta", conteudo: "Produto, público, funcionamento e demonstração.", estado: "Implementado neste estudo" },
  { rota: "/recursos/agenda-online/", objetivo: "Avaliar a solução", conteudo: "Disponibilidade, serviços e organização de agendamentos.", estado: "Expansão proposta" },
  { rota: "/conteudos/organizar-agendamentos/", objetivo: "Compreender o problema", conteudo: "Processo para organizar horários e evitar desencontros.", estado: "Expansão proposta" },
];

export const perguntas = [
  { pergunta: "Para quem a Compasso foi pensada?", resposta: "O cenário considera profissionais autônomos que atendem com hora marcada, como professores particulares, fotógrafos e prestadores de serviços." },
  { pergunta: "Como seria o agendamento?", resposta: "Na proposta de produto, o profissional cadastra os serviços e os horários disponíveis. O cliente escolhe uma opção, e o pedido aparece na agenda. Esta página apresenta apenas a interface ilustrativa desse fluxo." },
  { pergunta: "A agenda envia mensagens ou recebe pagamentos?", resposta: "Não. Pagamentos, envio de mensagens e integrações não fazem parte do escopo deste protótipo." },
  { pergunta: "Posso criar uma conta ou fazer uma reserva?", resposta: "Não. A Compasso é uma empresa fictícia criada para um estudo de portfólio. Não há cadastro, coleta de dados ou serviço de agendamento ativo." },
];
