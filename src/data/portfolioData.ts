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
  githubUrl?: string;
  githubUrls?: string[];
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
    githubUrl: "https://github.com/Beni706/ApiPointage",
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
    githubUrls: [
      "https://github.com/Beni706/PharmaLab-frontend",
      "https://github.com/Beni706/PharmaLab-backend",
    ],
  },

  {
    id: 3,
    title: "Gestion d'anniversaires",
    summary:
      "Cette application permet d'organiser des anniversaires : l'organisateur envoie un lien à ses proches, qui s'inscrivent et reçoivent une confirmation (ou un refus) par e-mail après validation.",
    images: ["/anniv.jpg", "/anniv2.jpg"],
    tags: [
      "Javascript",
      "Node.js",
      "Express.js",
      "sqLite",
      "Prisma",
      "Swagger",
    ],
    details: {
      challenge:
        "Organiser un anniversaire, c'est souvent un vrai casse-tête : inviter les gens, créer des cartes, gérer les réponses, sans oublier la coordination et la centralisation des infos.",
      solution:
        "Développer une application permet de créer l'événement en quelques clics et de partager un lien pour les invitations. Les proches s'inscrivent facilement, et l'organisateur valide (ou refuse) les participations, avec des e-mails automatiques pour informer chacun participant.",
      impact: [
        "Dire adieu au stress !",
        " Vous allez gagner un temps fou.",
        "La participation sera maximisée.",
        " Maîtrise parfaite de votre liste d'invités.",
      ],
    },
    githubUrl: "https://github.com/Beni706/ApiAnniv",
  },

  {
    id: 4,
    title: "Ecole 241 Communities",
    summary:
      "Cette appliaction web permet au permet a l'ecole 241 de fournir des cours en ligne pour permettre aux étudiants de suivre des cours à distance.",
    images: ["/commities.jpg", "/commites2.jpg"],
    tags: [
      "Typescript",
      "Javascript",
      "Next.js",
      "Node.js",
      "sqLite",
      "Prisma",
      "Tailwind CSS",
    ],
    details: {
      challenge:
        "L'École 241 fait face au défi de fournir des cours accessibles à tous ses étudiants, peu importe leur localisation ou leurs contraintes de temps.",
      solution:
        "La solution est de développer une application web robuste et intuitive. Cette plateforme permettra à l'École 241 de proposer l'ensemble de ses cours en ligne, accessibles depuis n'importe quel appareil connecté. L'application inclura des fonctionnalités pour le partage de ressources pédagogiques (vidéos, documents, exercices).",
      impact: [
        "Rendre l'éducation de l'École 241 plus accessible à un plus grand nombre d'étudiants",
        "Offrir une flexibilité d'apprentissage inédite",
        "Permettre aux étudiants de suivre les cours à leur rythme, tout en maintenant un haut niveau d'interaction avec les enseignants et les autres étudiants.",
      ],
    },
    githubUrl: "https://github.com/Beni706/241Communities",
  },

  {
    id: 5,
    title: "Application de gestion de tâches",
    summary:
      "Cette application permet aux utilisateurs de créer, modifier et supprimer des tâches, pour organiser son travail.",
    images: ["/gestionTache.jpg", "/gestionTache2.jpg"],
    tags: [
      "Typescript",
      "Node.js",
      "Next.js",
      "sqlite",
      "Prisma",
      "Tailwind CSS",
    ],
    details: {
      challenge:
        "Les utilisateurs ont besoin d'un moyen efficace pour gérer leurs tâches quotidiennes, mais les applications existantes sont souvent trop complexes.",
      solution:
        "Développer une application simple et intuitive qui permet aux utilisateurs de gérer leurs tâches facilement.",
      impact: [
        "Amélioration de la productivité des utilisateurs grâce à une meilleure gestion du temps.",
        "Réduction du stress lié à la gestion des tâches.",
      ],
    },
    githubUrl: "https://github.com/Beni706/GestionDeTache2",
  },
];
