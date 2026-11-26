export const profile = {
  firstName: "Junior",
  lastName: "KENGNE",
  fullName: "KENGNE Junior",
  handle: "AquaEndays",
  role: "Développeur Full-Stack",
  roles: [
    "Développeur Full-Stack",
    "Architecte Next.js & Spring Boot",
    "Ingénierie Logicielle & IA",
    "Systèmes & Réseaux Cisco",
  ],
  tagline:
    "Étudiant en Licence Informatique & IA à Keyce, je conçois des applications web complètes et robustes, de l'API Spring Boot jusqu'à l'interface Next.js.",
  availability: "Disponible pour opportunités & collaborations",
  school: "Keyce Informatique et IA",
  level: "Licence",
  location: "Douala, Cameroun",
  email: "juniorkengne861@gmail.com",
  github: "https://github.com/AquaEndays",
  linkedin: "https://www.linkedin.com/in/aqua-endays-437113378",
  photoUrl: "/photo.jpg",
  cvUrl: "",
};

export const about = {
  lead: "Comprendre chaque couche d'un produit, de la base de données jusqu'à l'écran.",
  paragraphs: [
    "Étudiant en Licence à Keyce Informatique et IA, je me spécialise dans le génie logiciel et le développement full-stack. J'aime concevoir des applications complètes : une API solide côté serveur, une interface soignée côté client, et un déploiement propre en ligne.",
    "Au fil de mes projets académiques et de mon stage en entreprise, j'ai travaillé sur le web (Next.js, Spring Boot, ASP.NET Core), l'intelligence artificielle (vision par ordinateur, intégration d'API d'IA) ainsi que les réseaux et la sécurité.",
  ],
  pillars: [
    {
      index: "01",
      title: "Architecture Frontend",
      detail:
        "Interfaces Next.js, React et TypeScript pensées pour la fluidité, l'accessibilité et une exécution visuelle irréprochable.",
    },
    {
      index: "02",
      title: "Backend & Persistance",
      detail:
        "APIs REST structurées en Spring Boot, Node.js ou ASP.NET Core avec authentification JWT et modélisation relationnelle PostgreSQL / SQL Server.",
    },
    {
      index: "03",
      title: "Systèmes, IA & Réseaux",
      detail:
        "Applications natives JavaFX, vision par ordinateur sous OpenCV et conception d'infrastructures segmentées et sécurisées sous Cisco.",
    },
  ],
  facts: [
    { label: "Formation", value: "Licence · Keyce Informatique et IA" },
    { label: "Spécialité", value: "Génie logiciel / Full-Stack" },
    { label: "Localisation", value: "Douala, Cameroun" },
    { label: "GitHub", value: "@AquaEndays" },
  ],
  passions: ["Développement", "Jeux vidéo", "Mangas", "Sport"],
};

export const marquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Spring Boot",
  "Java",
  "JavaFX",
  "Node.js",
  "ASP.NET Core",
  "PostgreSQL",
  "OpenCV",
  "Cisco ASA",
  "Packet Tracer",
  "Vercel",
];

export type SkillGroup = {
  id: string;
  code: string;
  title: string;
  hint: string;
  summary: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    code: "01",
    title: "Frontend",
    hint: "Interfaces modernes et réactives",
    summary: "Composants typés, rendu SSR/SSG, responsive design et micro-interactions fluides.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    id: "backend",
    code: "02",
    title: "Backend & APIs",
    hint: "Logique métier et sécurité",
    summary: "Architecture en couches, endpoints REST sécurisés, contrôle d'accès et validation.",
    items: ["Java / Spring Boot", "Spring Security · JWT", "Node.js / Express", "ASP.NET Core / C#"],
  },
  {
    id: "database",
    code: "03",
    title: "Bases de données",
    hint: "Modélisation et persistance",
    summary: "Conception relationnelle, requêtes optimisées et mapping objet-relationnel.",
    items: ["PostgreSQL", "MySQL", "SQL Server", "JPA / Hibernate", "Entity Framework Core"],
  },
  {
    id: "desktop",
    code: "04",
    title: "Desktop & UI",
    hint: "Applications natives Java",
    summary: "Architecture MVC, vues FXML, liaison de données JDBC et packaging Maven.",
    items: ["JavaSE", "JavaFX", "Java Swing", "FXML / DAO JDBC"],
  },
  {
    id: "ai",
    code: "05",
    title: "IA & Vision",
    hint: "Intégration intelligente",
    summary: "Traitement d'image, reconnaissance faciale algorithmique et intégration de LLM.",
    items: ["OpenCV", "Eigenfaces / Fisherfaces / LBPH", "API Claude", "Prompt Engineering"],
  },
  {
    id: "network",
    code: "06",
    title: "Réseaux & Sécurité",
    hint: "Infrastructures segmentées",
    summary: "Segmentation VLAN, pare-feu périmétrique, tunnels chiffrés et durcissement ACL.",
    items: ["Cisco Packet Tracer", "VLAN / Inter-VLAN", "Pare-feu ASA & DMZ", "VPN IPSec", "Cisco CyberOps"],
  },
];

export type FlagshipProject = {
  id: string;
  title: string;
  category: "Web App" | "E-commerce" | "Desktop" | "Plateforme";
  status: "En ligne" | "Code source" | "En cours";
  liveUrl?: string;
  repoUrl?: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  embeddable?: boolean;
  mockupKind: "aurora" | "alibell" | "pavillon" | "endecommerce";
};

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "aurora",
    title: "Aurora",
    category: "Web App",
    status: "En ligne",
    liveUrl: "https://aurora-seven-lovat.vercel.app/",
    repoUrl: "https://github.com/AquaEndays/aurora",
    shortDescription:
      "Application web moderne autour de l'univers du surf, déployée en production sur Vercel.",
    longDescription:
      "Aurora est une vitrine et boutique e-commerce dédiée à l'univers du surf et des tropiques. Conçue avec Next.js et React, elle propose un filtrage dynamique par catégorie, une gestion des favoris, un basculement de thème et une expérience de navigation fluide en production.",
    highlights: [
      "Catalogue interactif avec filtrage instantané par catégories",
      "Gestion d'état fluide (favoris, panier, mode clair/sombre)",
      "Déploiement continu et optimisation des performances sur Vercel",
    ],
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    embeddable: true,
    mockupKind: "aurora",
  },
  {
    id: "alibell",
    title: "Ali Bell",
    category: "E-commerce",
    status: "En ligne",
    liveUrl: "https://ali-bell.vercel.app/",
    shortDescription:
      "Interface e-commerce multi-catégories déployée en production avec recherche et filtres orientés conversion.",
    longDescription:
      "Ali Bell Hub Market est une interface marchande moderne pensée pour la clarté du parcours d'achat. Elle intègre une barre de recherche temps réel, un filtrage par rayons (vêtements, électronique, accessoires) et une hiérarchie visuelle orientée conversion.",
    highlights: [
      "Recherche produit instantanée et filtrage multi-rayons",
      "Architecture d'interface épurée centrée sur la lisibilité du catalogue",
      "Mise en production et hébergement haute disponibilité sur Vercel",
    ],
    tags: ["React", "E-commerce", "Frontend", "Vercel"],
    embeddable: true,
    mockupKind: "alibell",
  },
  {
    id: "pavillon",
    title: "Pavillon Gourmet",
    category: "Desktop",
    status: "Code source",
    repoUrl: "https://github.com/AquaEndays/PavillonGourmet",
    shortDescription:
      "Application desktop JavaFX de gestion de restaurant : réservations de tables, commandes et console d'administration.",
    longDescription:
      "Application de bureau complète développée en équipe en JavaFX avec base de données MySQL. Côté client : inscription en deux étapes, exploration du menu, réservation de table, suivi de commande et portefeuille. Côté administrateur : tableau de bord, gestion des clients, de la carte, des tables et des réservations.",
    highlights: [
      "Architecture MVC rigoureuse (contrôleurs FXML, modèles et couche DAO JDBC)",
      "Double interface Client & Administrateur connectée à MySQL",
      "Gestion de projet structurée et packagée avec Maven",
    ],
    tags: ["JavaFX", "Java", "MySQL", "FXML", "Maven", "DAO"],
    embeddable: false,
    mockupKind: "pavillon",
  },
  {
    id: "endecommerce",
    title: "EndEcommerce",
    category: "Plateforme",
    status: "En cours",
    shortDescription:
      "Plateforme SaaS multi-tenant permettant à des commerçants de créer leur boutique avec sous-domaine dédié.",
    longDescription:
      "Plateforme full-stack en cours de développement : chaque commerçant dispose d'un espace d'administration isolé pour gérer son catalogue, ses stocks et ses commandes, tout en bénéficiant d'une vitrine publique accessible sur son propre sous-domaine.",
    highlights: [
      "Backend Spring Boot avec authentification JWT et isolation multi-tenant",
      "Persistance relationnelle PostgreSQL et routage dynamique par sous-domaine",
      "Frontend Next.js séparant la console marchand et les vitrines publiques",
    ],
    tags: ["Spring Boot", "PostgreSQL", "JWT", "Next.js", "Multi-tenant"],
    embeddable: false,
    mockupKind: "endecommerce",
  },
];

export type AppProject = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  type: "network" | "ai" | "desktop" | "other";
  downloadUrl?: string;
  downloadLabel?: string;
};

export const longstarTopology = {
  title: "Infrastructure Réseau Longstar",
  subtitle: "Topologie multi-sites sécurisée sous Cisco Packet Tracer",
  summary:
    "Conception, configuration et durcissement complet d'un réseau d'entreprise multi-sites : segmentation VLAN, pare-feu Cisco ASA avec zone démilitarisée (DMZ), tunnel VPN IPSec site-à-site et validation par tests d'intrusion et d'ACL.",
  zones: [
    {
      id: "lan",
      label: "LAN Segmenté",
      detail: "4 VLANs isolés (Utilisateurs, Serveurs, Management, Invités) avec routage inter-VLAN.",
    },
    {
      id: "asa",
      label: "Pare-feu Cisco ASA",
      detail: "Filtrage stateful entrant/sortant, inspection de paquets et contrôle strict des ACL.",
    },
    {
      id: "dmz",
      label: "Zone DMZ",
      detail: "Exposition maîtrisée des services Web, DNS et DHCP dans un segment isolé.",
    },
    {
      id: "vpn",
      label: "Tunnel VPN IPSec",
      detail: "Chiffrement site-à-site entre le siège social et la succursale distante.",
    },
  ],
  tags: ["Cisco Packet Tracer", "VLAN", "Cisco ASA", "DMZ", "VPN IPSec", "ACL"],
  downloadUrl: "/longstar.pkt",
  downloadLabel: "Télécharger longstar.pkt",
};

export const appProjects: AppProject[] = [
  {
    id: "facial",
    title: "Reconnaissance faciale",
    description:
      "Application desktop de vision par ordinateur combinant Eigenfaces, Fisherfaces et LBPH, pilotée par une interface Java Swing et un backend Spring Boot.",
    tags: ["JavaSE", "Java Swing", "OpenCV", "Spring Boot"],
    type: "ai",
  },
  {
    id: "javafx-suite",
    title: "Suite d'applications JavaFX",
    description:
      "Ensemble d'applications de bureau natives : interfaces riches, gestion réactive d'événements, liaison de données et packaging distribuable.",
    tags: ["JavaFX", "JavaSE", "Desktop"],
    type: "desktop",
  },
  {
    id: "fleet",
    title: "Gestion de flotte & GPS",
    description:
      "API et tableaux de bord multi-rôles pour le suivi d'une flotte de transport public avec simulation GPS et télémétrie temps réel.",
    tags: ["Next.js", "Node.js", "API REST"],
    type: "other",
  },
  {
    id: "africatech",
    title: "AfricaTech",
    description:
      "Boutique en ligne de matériel électronique reconditionné pensée pour Douala et Yaoundé (projet réalisé en équipe).",
    tags: ["WordPress", "WooCommerce", "E-commerce"],
    type: "other",
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  status: string;
  description: string;
  tags: string[];
};

export const experience: TimelineItem[] = [
  {
    title: "Stage de développement web",
    org: "OVA-CONSULTING",
    period: "6 août – 6 novembre",
    status: "Expérience",
    description:
      "Stage de 3 mois au sein de l'équipe technique : conception et développement d'applications web métier sur toute la chaîne (backend, frontend, base de données) jusqu'à la mise en production.",
    tags: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "Full-Stack"],
  },
];

export const education: TimelineItem[] = [
  {
    title: "Licence · Informatique et IA",
    org: "Keyce Informatique et IA",
    period: "En cours",
    status: "Formation",
    description:
      "Formation orientée génie logiciel, architecture applicative, intelligence artificielle et administration de réseaux sécurisés.",
    tags: ["Génie logiciel", "Intelligence Artificielle", "Réseaux & Sécurité"],
  },
];
