/**
 * ─────────────────────────────────────────────────────────────
 *  TOUT LE CONTENU DU PORTFOLIO SE MODIFIE ICI
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "KENGNE JUNIOR", // ← à remplacer
  role: "Développeur Full-Stack",
  tagline:
    "Étudiant en Licence Informatique & IA, je conçois des applications web complètes, de l'API Spring Boot à l'interface Next.js.",
  school: "Keyce Informatique et IA",
  level: "Licence",
  location: "Douala, Cameroun",
  email: "juniorkengne861@gmail.com", // ← à remplacer
  github: "https://github.com/AquaEndays", // ← à remplacer
  linkedin: "https://www.linkedin.com/in/aqua-endays-437113378", // ← à remplacer
  // Photo : placez votre image dans /public/photo.jpg puis laissez "/photo.jpg"
  photoUrl: "/photo.jpg",
  // CV : mettez le PDF dans /public (ex: public/cv.pdf) puis indiquez "/cv.pdf"
  cvUrl: "",
};

export const about = {
  paragraphs: [
    "Étudiant en Licence à Keyce Informatique et IA, je me spécialise dans le génie logiciel et le développement full-stack. J'aime concevoir des applications complètes : une API solide côté serveur, une interface soignée côté client, et un déploiement propre en ligne.",
    "Au fil de mes projets académiques et de mon stage, j'ai travaillé sur le web (Next.js, Spring Boot, ASP.NET Core), l'intelligence artificielle (vision par ordinateur, intégration d'API d'IA) ainsi que les réseaux et la sécurité. Je cherche à comprendre chaque couche d'un produit, de la base de données jusqu'à l'écran.",
  ],
  facts: [
    { label: "Formation", value: "Licence · Keyce Informatique et IA" },
    { label: "Spécialité", value: "Génie logiciel / Full-Stack" },
    { label: "Localisation", value: "Douala, Cameroun" },
  ],
  passions: ["Développement", "Jeux-Vidéos", "Mangas", "Sport"],
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
  "Cisco",
  "Packet Tracer",
  "Vercel",
];

export type SkillGroup = {
  title: string;
  hint: string;
  icon: string;
  items: { name: string; level: number }[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    hint: "Interfaces modernes et performantes",
    icon: "◈",
    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    hint: "APIs et logique métier",
    icon: "⬡",
    items: [
      { name: "Java / Spring Boot", level: 88 },
      { name: "Spring Security · JWT", level: 80 },
      { name: "Node.js / Express", level: 78 },
      { name: "ASP.NET Core / C#", level: 75 },
    ],
  },
  {
    title: "Bases de données",
    hint: "Modélisation et persistance",
    icon: "▣",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQL Server", level: 75 },
      { name: "JPA / Hibernate", level: 82 },
    ],
  },
  {
    title: "Desktop & UI",
    hint: "Applications natives Java",
    icon: "▢",
    items: [
      { name: "JavaSE", level: 85 },
      { name: "JavaFX", level: 80 },
      { name: "Java Swing", level: 78 },
    ],
  },
  {
    title: "IA & vision",
    hint: "Intégrer l'intelligence artificielle",
    icon: "◉",
    items: [
      { name: "OpenCV", level: 75 },
      { name: "Reconnaissance faciale", level: 72 },
      { name: "API Claude / Prompt eng.", level: 70 },
    ],
  },
  {
    title: "Réseaux & sécurité",
    hint: "Infrastructures sécurisées",
    icon: "◎",
    items: [
      { name: "Cisco Packet Tracer", level: 85 },
      { name: "VLAN / VPN IPSec", level: 80 },
      { name: "Pare-feu ASA", level: 75 },
      { name: "Cisco CyberOps", level: 70 },
    ],
  },
];

export type WebProject = {
  title: string;
  url: string;
  description: string;
  tags: string[];
  hue: number;
  status: "live" | "soon";
  coverLabel?: string;
};

export const webProjects: WebProject[] = [
  {
    title: "Aurora",
    url: "https://aurora-seven-lovat.vercel.app/",
    description:
      "Application web moderne déployée en production sur Vercel. Interface soignée, performances optimisées et expérience utilisateur fluide.",
    tags: ["Next.js", "React", "Vercel"],
    hue: 265,
    status: "live",
    coverLabel: "Web App",
  },
  {
    title: "Ali Bell",
    url: "https://ali-bell.vercel.app/",
    description:
      "Interface e-commerce déployée en production. Catalogue, navigation et design orientés conversion.",
    tags: ["E-commerce", "Frontend", "Vercel"],
    hue: 190,
    status: "live",
    coverLabel: "E-commerce",
  },
];

export const webInProgress: WebProject[] = [
  {
    title: "EndEcommerce",
    url: "#",
    description:
      "Site de vente en ligne permettant à des commerçants de créer leur propre boutique, de gérer catalogue et stock, et d'obtenir une vitrine publique avec leur propre sous-domaine.",
    tags: ["Spring Boot", "PostgreSQL", "JWT", "Next.js", "Multi-tenant"],
    hue: 150,
    status: "soon",
    coverLabel: "En cours",
  },
];

export type AppProject = {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  type: "desktop" | "network" | "ai" | "other";
  downloadUrl?: string;
  downloadLabel?: string;
  hue: number;
};

export const appProjects: AppProject[] = [
  {
    title: "Infrastructure Réseau Longstar",
    description:
      "Conception complète d'un réseau d'entreprise sécurisé sous Cisco Packet Tracer.",
    longDescription: `Ce projet simule l'infrastructure réseau complète d'une entreprise fictive « Longstar ». L'objectif était de concevoir, configurer et sécuriser un réseau multi-sites conforme aux bonnes pratiques d'entreprise.

Architecture mise en place :
• Découpage en VLAN (utilisateurs, serveurs, management, invités) pour isoler les flux et limiter la propagation d'incidents.
• Routage inter-VLAN et accès Internet contrôlé via un routeur de bordure.
• Pare-feu Cisco ASA en tête de réseau : filtrage des flux entrants/sortants, zones de confiance et DMZ pour les services exposés.
• VPN site-à-site IPSec entre le siège et une succursale, pour chiffrer le trafic inter-sites.
• Serveurs (DHCP, DNS, web) placés dans des segments dédiés, avec règles d'accès strictes.
• Tests de connectivité, de bascule et de sécurité (simulation d'attaques et vérification des ACL).

Le fichier Packet Tracer (longstar.pkt) contient la topologie complète, les configurations des équipements et la documentation des VLANs, ACL et tunnels VPN. Vous pouvez le télécharger et l'ouvrir dans Cisco Packet Tracer pour explorer ou rejouer le scénario.`,
    tags: ["Cisco Packet Tracer", "VLAN", "ASA", "VPN IPSec", "DMZ"],
    type: "network",
    downloadUrl: "/longstar.pkt",
    downloadLabel: "Télécharger longstar.pkt",
    hue: 200,
  },
  {
    title: "Reconnaissance faciale",
    description:
      "Application desktop de reconnaissance faciale basée sur Eigenfaces, Fisherfaces et LBPH, avec interface Java Swing et backend Spring Boot.",
    tags: ["JavaSE", "Java Swing", "OpenCV", "Spring Boot"],
    type: "ai",
    hue: 280,
  },
  {
    title: "Applications JavaFX",
    description:
      "Suite d'applications de bureau développées en JavaFX : interfaces riches, gestion d'événements, liaison de données et packaging pour distribution.",
    tags: ["JavaFX", "JavaSE", "Desktop"],
    type: "desktop",
    hue: 320,
  },
  {
    title: "Gestion de flotte",
    description:
      "API et tableaux de bord multi-rôles pour une flotte de transport public, avec simulation GPS et suivi en temps réel.",
    tags: ["Next.js", "Node.js", "API"],
    type: "other",
    hue: 160,
  },
  {
    title: "AfricaTech",
    description:
      "Boutique en ligne de matériel électronique reconditionné pour Douala et Yaoundé (projet d'équipe).",
    tags: ["WordPress", "WooCommerce"],
    type: "other",
    hue: 40,
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description?: string;
  tags?: string[];
};

export const experience: TimelineItem[] = [
  {
    title: "Stage de développement web",
    org: "OVA-CONSULTING",
    period: "6 août – 6 novembre",
    description:
      "Stage de 3 mois : conception et développement d'applications web. Travail sur l'ensemble de la chaîne (backend, frontend, base de données) et mise en production de fonctionnalités métier.",
    tags: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "Full-Stack"],
  },
];

export const education = {
  current: {
    title: "Licence · Informatique et IA",
    org: "Keyce Informatique et IA",
    period: "En cours",
  } as TimelineItem,
};
