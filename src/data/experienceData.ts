// Ce fichier contient les données d'expérience professionnelle pour le CV.
export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Formation en Développement Web",
    company: "Ecole 241",
    dates: "27/11/2024 - 27/08/2024",
    description: [
      "À l'École 241, j'ai suivi une formation intensive en développement web, explorant en profondeur l'architecture et le fonctionnement des applications côté serveur. L'approche pédagogique active de l'école, distincte des méthodes traditionnelles, a été déterminante : elle m'a permis de développer concrètement mes compétences en logique métier, en sécurité des données et en gestion des infrastructures à travers des projets stimulants. Cette immersion m'a activement préparé(e) à concevoir et à déployer des solutions back-end performantes et évolutives"]
  },
  /*{
    title: "",
    company: "",
    dates: "",
    description: [ ]
  }*/
];