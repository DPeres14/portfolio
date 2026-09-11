export const projects = [
  {
    id: 1,
    title: 'RepairSync V0.1',
    shortTitle: 'RepairSync',
    category: 'fullstack',

    description:
      'Primeira versão experimental de uma plataforma para gestão de reparações e manutenção.',

    longDescription:
      'O RepairSync V0.1 foi a primeira versão de uma ideia para criar uma plataforma de gestão de reparações e manutenção. O projeto nasceu como uma experiência de desenvolvimento fullstack e permitiu explorar autenticação, gestão de dados, APIs e construção de uma interface completa.',

    image: '/projects/RepairSync.png',

    status: 'archived',
    statusLabel: 'Projeto arquivado',

    year: '2023',

    stack: [
      'React',
      'Node.js',
      'MySQL',
      'REST API',
    ],

    features: [
      'Autenticação de utilizadores',
      'Gestão de reparações',
      'Painel administrativo',
      'Gestão de clientes',
      'API REST',
      'Interface web responsiva',
    ],

    learnings: [
      'Desenvolvimento de aplicações fullstack',
      'Integração entre frontend e backend',
      'Criação e consumo de APIs REST',
      'Autenticação e gestão de utilizadores',
      'Modelação e utilização de bases de dados',
    ],

    code: null,
    live: null,

    note:
      'Esta versão nunca chegou a ser lançada. Serviu como base de aprendizagem e como ponto de partida para a evolução do projeto.',
  },

  {
    id: 2,
    title: 'RepairSync V1.0',
    shortTitle: 'RepairSync',
    category: 'fullstack',

    description:
      'Evolução do RepairSync com uma arquitetura renovada e novas funcionalidades em desenvolvimento.',

    longDescription:
      'O RepairSync V1.0 é a evolução direta da primeira versão do projeto. A experiência adquirida durante o desenvolvimento do V0.1 levou à reformulação da arquitetura e à introdução de novas funcionalidades, com o objetivo de criar uma solução mais completa, escalável e próxima de uma aplicação real.',

    image: '/projects/RepairSync.png',

    status: 'development',
    statusLabel: 'Em desenvolvimento',

    year: '2026',

    stack: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Socket.io',
      'React Native',
    ],

    features: [
      'Autenticação de utilizadores',
      'Gestão de reparações',
      'Comunicação em tempo real',
      'Sistema de notificações',
      'Aplicação web',
      'Aplicação mobile',
      'API REST',
      'Base de dados PostgreSQL',
    ],

    learnings: [
      'Arquitetura de aplicações fullstack',
      'Comunicação em tempo real com WebSockets',
      'Desenvolvimento multiplataforma',
      'Estruturação de APIs com Express',
      'Gestão de bases de dados relacionais',
      'Evolução e refatoração de projetos existentes',
    ],

    code: null,
    live: null,

    note:
      'Projeto atualmente em desenvolvimento. Esta versão representa a evolução da ideia original do RepairSync.',
  },

  {
    id: 3,
    title: 'Softinsa Badge Portal',
    shortTitle: 'Softinsa Badge Portal',
    category: 'fullstack',

    description:
      'Plataforma de gamificação para gestão de badges, níveis e progressão de colaboradores.',

    longDescription:
      'Plataforma desenvolvida para suportar um sistema de gamificação empresarial, permitindo gerir Learning Paths, Service Lines, áreas, badges, níveis e requisitos. A solução inclui diferentes perfis de utilizador e aplicações web e mobile.',

    image: '/projects/Lpaths.png',

    status: 'completed',
    statusLabel: 'Concluído',
      featured: true,

    year: '2026',

    stack: [
      'React',
      'Flutter',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Material UI',
      'WebSockets',
    ],

    features: [
      'Gestão de Learning Paths',
      'Gestão de Service Lines',
      'Gestão de áreas',
      'Sistema de badges e níveis',
      'Progressão de colaboradores',
      'Diferentes perfis de utilizador',
      'Aplicação web',
      'Aplicação mobile',
      'Comunicação em tempo real',
    ],

      contribution:
        'Desenvolvimento frontend e backend, integração web/mobile e coordenação da equipa durante a evolução da plataforma.',

      impact:
        'Uma solução empresarial para acompanhar a progressão de colaboradores através de learning paths, badges e níveis.',

    learnings: [
      'Desenvolvimento de uma plataforma completa',
      'Trabalho com diferentes perfis e permissões',
      'Desenvolvimento frontend e backend',
      'Integração de aplicações web e mobile',
      'Trabalho com WebSockets',
      'Planeamento e coordenação de uma equipa',
    ],

    code: null,

    live: 'https://demo.lpaths.pamar.ddns.net',

    note: null,
  },

  {
    id: 4,
    title: 'Meu Portfólio',
    shortTitle: 'Portfólio',

    category: 'frontend',

    description:
      'Portfólio pessoal desenvolvido para apresentar os meus projetos, competências e percurso.',

    longDescription:
      'O meu portfólio pessoal foi desenvolvido de raiz em React com o objetivo de criar uma experiência simples, moderna e responsiva para apresentar o meu trabalho e evolução enquanto desenvolvedor.',

    image: '/projects/portfolio.png',

    status: 'development',
    statusLabel: 'Em evolução',

    year: '2026',

    stack: [
      'React',
      'Vite',
      'Material UI',
      'Framer Motion',
      'React Router',
    ],

    features: [
      'Página pessoal',
      'Apresentação de projetos',
      'Página detalhada de projetos',
      'Blog',
      'Secção de competências',
      'Formulário de contacto',
      'Design responsivo',
      'Animações e transições',
    ],

    learnings: [
      'Criação de interfaces modernas',
      'Design responsivo',
      'Animações com Framer Motion',
      'Routing com React Router',
      'Organização de projetos React',
    ],

    code: null,
    live: null,

    note:
      'O portfólio continua a ser desenvolvido e atualizado à medida que novos projetos e experiências são adicionados.',
  },
];