import { GraduationCap, Calendar } from "lucide-react";

export function Experience() {
  const timeline = [
    {
      title: "3ème Année - Bachelor Animation 3D Jeux Vidéo",
      school: "Ynov Campus Toulouse",
      period: "2024 - Présent",
      description:
        "En études supérieures, je suis inscrite à l’école privée Ynov Campus Toulouse, où je poursuis un Bachelor en trois ans.",
      highlight: "Année actuelle",
    },
    {
      title: "Bac Professionnel - Metier de la mode et du vêtement",
      school: "Lycée Le Castel - Dijon",
      period: "2020 - 2023",
      description:
        "Au lycée, j’ai suivi un Bac Professionnel Métiers de la Mode au lycée Le Castel, à Dijon.",
      highlight: "",
    },
    {
      title: "Stage Secteur Maxillo Faciale",
      school: "Hopital de Purpan",
      period: "6 janvier - 6 mars 2025",
      description:
        "J'ai dû réaliser pendant deux mois le texturing des assets réalisé par d'autres stagiaires. Le but de ce L’objectifs durant ce stage était de réaliser une vidéo pédagogique sur la réparation du bec-de-lièvre  (fente labiale et/ou palatine). Cette vidéo avait pour finalité d’être présentée aux internes en chirurgie, afin d’évaluer si cet outil visuel pouvait les aider à mieux comprendre les différentes étapes de l’intervention et à améliorer leur maîtrise de la procédure opératoire. Ma tâche était de réaliser le texturing de tous les assets présent dans la vidéo.",
      highlight: "",
    },
    {
      title: "Stage couture dans l'évènementiel ",
      school: "AVS COMMUNICATION",
      period: "07 juin - 05 juillet 2021",
      description: "L'entreprise AVS COMMUNICATION est spécialisé dans la signalétique intérieur et extérieur, le flocage de véhicules en passant par toutes les solutions de communication pour les particuliers et professionnels tels que des affiches et banderoles, ou même des stickers. Durant ce stage j'ai pu voir beaucoup de chose différente, j'ai pu aider à la fabrication de grande banderole qui ont servi à être exposé à des stands pour des conventions, j'ai pu assister à l'impression et à la découpe d'affiche pour être exposé sur des roll-up, j'ai réalisé des découpes sur des tissus à l'aide de fer à bruler. Et j'ai aussi réalisé énormément de couture pour des pochettes, des affiches nécessitant des remplis, et beaucoup d'autres choses.",
      highlight: "",
    },
    {
      title: "Stage de couture dans une boutique de retouche de robe de mariée.",
      school: "Epsilon mariage",
      period: "22 novembre - 17 décembre 2021",
      description:
        "Epsilon Mariage est une boutique de robe de marié ainsi que des robes coktails, costume, tenues de cérémonies et accessoires , j'ai pu être prise en stage pour m'occuper des retouches à effectuer sur les robes. Que ce soit les raccourcir, les retailler pour les mariés, rajouter des boutons ou en enlever, poser du tulle et de la dentelle.",
      highlight: "",
    },
    {
      title: "Stage de couture dans une boutique artisanal d'accessoires pour bambins",
      school: "Guilli Gribouilli",
      period: "07 mars - 11 avril 2022",
      description:
        "Stage de couture dans une boutique artisanal d'accessoires pour bambins.",
      highlight: "",
    },
    {
      title: "Stage de couture dans une entreprise de confection",
      school: "Remi confection",
      period: "19 septembre - 21 octobre 2022",
      description:
        "Stage de couture dans une entreprise de confection francaise de vêtement de travail, j'ai réalisé mes propres vêtements (robes, top, gilet,chemise,…).",
      highlight: "",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl pb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mon parcours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My education and growth as a 3D designer 🎓
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-primary">{item.title}</h3>
                    {item.highlight && (
                      <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <GraduationCap size={16} className="text-primary" />
                    <span>{item.school}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>{item.period}</span>
                </div>
              </div>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
