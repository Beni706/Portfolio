export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Système de gestion de presence",
    summary:
      "Pour mon école de formation, j'ai créé un système de gestion de présence qui libère les enseignants des tâches manuelles et garantit un suivi précis de l'assiduité des étudiants, réduisant significativement les erreurs.",
    images: ["/App-pointage.jpg", "/App-pointage2.jpg"],
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Express",
      "sqLite",
      "Docker",
    ],
    details: {
      challenge:
        "Un établissement éducatif souhaite digitaliser la gestion des présences des apprenants qui sont actuellement suivies manuellement, ce qui engendre des erreurs et une perte de temps.",
      solution:
        "L’objectif est de concevoir une application moderne, accessible et efficace pour automatiser ce processus.",
      impact: [
        "Amélioration de la précision des données de présence, facilitant le suivi académique.",
        "Facilitation de l'accès aux données pour les enseignants et les administrateurs.",
      ],
    },
  },
  {
    id: 2,
    title: "PharmaLab",
    summary:
      "C'est une application qui localise les pharmacies qui sont situées à proximité de l'utilisateur, permettant ainsi de trouver rapidement les médicaments nécessaires.",
    images: ["/pharmacy.jpg", "/pharmacy2.jpg"],
    tags: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Next.js",
      "sqLite",
      "Prisma",
    ],
    details: {
      challenge:
        "Les utilisateurs ont souvent du mal à trouver des pharmacies à proximité, ce qui peut entraîner des retards dans l'accès aux médicaments d'urgence.",
      solution:
        "Développer une application qui utilise la géolocalisation pour localiser les pharmacies à proximité et fournir des informations sur les médicaments disponibles.",
      impact: [
        "Réduction du temps de recherche pour les utilisateurs, facilitant l'accès aux soins.",
        "Amélioration de la satisfaction des utilisateurs grâce à une interface conviviale.",
      ],
    },
  },
];
