import { FaCheckCircle } from "react-icons/fa";

export default function CompetenceSection() {
  const competences = [
    "Développement d'API REST",
    "Gestion de bases de données SQL (MySQL)",
    "Conception d'architectures backend scalables",
    "Déploiement avec Docker",
    "Sécurité des applications web",
    "Documentation API REST avec Swagger",
    "Next.js + Tailwind CSS",
    "Méthodologies agiles & Scrum",
    "Authentification moderne (JWT)",
    "Hachage sécurisé avec bcryptjs",
    "Versioning avec Git & GitHub",
    "Intégration et manipulation de bases de données avec Prisma",
  ];

  return (
    <section className="relative bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 tracking-tight text-white">
          Mes Compétences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competences.map((competence, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-400 mt-1" />
                <p className="text-white text-base font-medium leading-snug">
                  {competence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
