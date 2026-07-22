import {
  NavLink,
  ExcellenceCard,
  ServiceCard,
  PortfolioItem,
  DifferentialItem,
  ProcessStep,
  TestimonialItem,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { id: "portfolio", label: "Projetos", href: "#portfolio" },
  { id: "servicos", label: "Serviços", href: "#servicos" },
  { id: "sobre", label: "Sobre", href: "#sobre" },
  { id: "processo", label: "Metodologia", href: "#processo" },
];

export const EXCELLENCE_CARDS: ExcellenceCard[] = [
  {
    id: "resp",
    title: "Responsabilidade",
    description:
      "Compromisso ético absoluto, cumprimento rigoroso de prazos e conformidade com as normas vigentes.",
    iconName: "ClipboardCheck",
  },
  {
    id: "qual",
    title: "Qualidade",
    description:
      "Materiais de alto desempenho, acompanhamento técnico constante e fino acabamento na execução.",
    iconName: "Award",
  },
  {
    id: "preco",
    title: "Preço Justo",
    description:
      "Orçamentos transparentes, competitivos e planejados para maximizar a eficiência de custos.",
    iconName: "Wrench",
  },
  {
    id: "seg",
    title: "Segurança",
    description:
      "Foco inabalável na integridade física, proteção estrutural e cumprimento estrito das legislações.",
    iconName: "ShieldCheck",
  },
];

export const SERVICES: ServiceCard[] = [
  {
    id: "const-ref",
    title: "Construção e Reforma",
    description:
      "Execução e gerenciamento completo de obras residenciais e comerciais de alta complexidade com rigor técnico e acabamento de alto nível.",
    iconName: "Building2",
  },
  {
    id: "reg-imoveis",
    title: "Regularização de Imóveis",
    description:
      "Regularização de plantas, aprovação de projetos técnicos, alvarás de funcionamento e habite-se junto às prefeituras e órgãos responsáveis.",
    iconName: "FileText",
  },
  {
    id: "lpi-lta",
    title: "ILPI e LTA para Casas de Repouso e outros estabelecimentos",
    description:
      "Desenvolvimento de projetos específicos e emissão do Laudo Técnico de Avaliação (LTA) para Instituições de Longa Permanência para Idosos (ILPI), clínicas e estabelecimentos sob as diretrizes da Vigilância Sanitária.",
    iconName: "HeartPulse",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "proj-1",
    title: "Reforma Residencial de Alto Padrão",
    category: "Construção e Reforma",
    image: "/images/Imagem-2.png",
    description:
      "Reforma e ampliação residencial de alto padrão executada com controle de prazos rigoroso, fino acabamento e responsabilidade técnica.",
    details: [
      "Área: 450 m²",
      "Estrutura: Concreto e Aço",
      "Local: Hortolândia - SP",
    ],
  },
  {
    id: "proj-2",
    title: "Regularização de Edificação Comercial",
    category: "Regularização de Imóveis",
    image: "/images/Imagem-3.png",
    description:
      "Processo completo de laudos técnicos de conformidade estrutural e aprovação de habite-se para centro empresarial.",
    details: [
      "Área: 3.200 m²",
      "Laudo: Conformidade Técnica",
      "Local: Hortolândia - SP",
    ],
  },
  {
    id: "proj-3",
    title: "Projeto de LTA - Clínica ILPI Vovó Maria",
    category: "ILPI e LTA",
    image: "/images/Imagem-4.png",
    description:
      "Desenvolvimento do layout de acessibilidade, memorial descritivo e aprovação do LTA perante a Vigilância Sanitária Municipal.",
    details: [
      "Licenciamento: LTA Aprovado",
      "Especialidade: Acessibilidade NBR 9050",
      "Local: Hortolândia - SP",
    ],
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "resp-tecn",
    title: "Responsabilidade Máxima",
    description:
      "Cumprimento absoluto de cronogramas e conformidade técnica conduzida por equipe qualificada.",
    iconName: "UserCheck",
  },
  {
    id: "qual-elite",
    title: "Qualidade Garantida",
    description:
      "Supervisão técnica minuciosa realizada pelo Engenheiro Responsável Kaique Miranda da Cruz.",
    iconName: "Users",
  },
  {
    id: "preco-justo",
    title: "Preço Justo e Transparente",
    description:
      "Previsibilidade orçamentária para a sua obra, com transparência e sem surpresas no faturamento.",
    iconName: "CalendarRange",
  },
  {
    id: "atend-sp",
    title: "Especialistas em Hortolândia",
    description:
      "Domínio total dos trâmites administrativos, códigos de obras e vigilância sanitária local.",
    iconName: "SearchCode",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Atendimento",
    description:
      "Entendimento detalhado de sua necessidade civil ou trâmite de regularização.",
  },
  {
    number: 2,
    title: "Estudo Técnico",
    description:
      "Análise de viabilidade estrutural, levantamento de campo ou regras locais em Hortolândia.",
  },
  {
    number: 3,
    title: "Projeto & Orçamento",
    description:
      "Criação do plano de engenharia ou memorial descritivo com preço justo e transparência.",
  },
  {
    number: 4,
    title: "Execução & Acompanhamento",
    description:
      "Condução da obra ou processo de licenciamento com foco em qualidade e segurança.",
  },
  {
    number: 5,
    title: "Entrega Concluída",
    description:
      "Emissão de alvarás aprovados ou chaves na mão com documentação 100% regularizada.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    stars: 5,
    quote:
      "Excelentes profissionais, que combinam preço bom, agilidade e qualidade, profissionalismo do começo ao fim. Super indico",
    author: "Willians Britto",
    role: "",
    company: "",
    avatarColor: "bg-blue-600",
  },
  {
    id: "test-2",
    stars: 5,
    quote:
      "Pessoal super atencioso, uma empresa ótima, qualidade do serviço, Excelente, super indico.",
    author: "Rosilene Pires",
    role: "",
    company: "",
    avatarColor: "bg-emerald-600",
  },
  {
    id: "test-3",
    stars: 5,
    quote:
      "Ótima empresa, profissionais qualificados, exclusivamente o engenheiro kaique, obrigado pela atenção, e o serviço prestado minha suite esta ficando absolute cinema!!!",
    author: "Kaue Moreira",
    role: "",
    company: "",
    avatarColor: "bg-indigo-600",
  },
];
