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
        "J'ai dû réaliser pendant deux mois le texturing des assets réalisé par d'autres stagiaires. L’objectifs durant ce stage était de réaliser une vidéo pédagogique sur la réparation du bec-de-lièvre (fente labiale et/ou palatine). Cette vidéo avait pour finalité d’être présentée aux internes en chirurgie, afin d’évaluer si cet outil visuel pouvait les aider à mieux comprendre les différentes étapes de l’intervention et à améliorer leur maîtrise de la procédure opératoire. Ma tâche était de réaliser le texturing de tous les assets présent dans la vidéo.",
      highlight: "",
    },
    {
      title: "Stage de couture dans une entreprise de confection",
      school: "Remi confection",
      period: "19 septembre - 21 octobre 2022",
      description:
        "Durant ce stage, j’ai eu l’opportunité de concevoir différents vêtements selon mes envies, tout en bénéficiant de l’accompagnement de professionnels expérimentés. J’ai ainsi appris à réaliser un vêtement de A à Z, et ai pu confectionner des robes, des tops, des chemises, effectuer des broderies, ainsi que bien d’autres créations variées.",
      highlight: "",
    },
    {
      title: "Stage de couture dans une boutique artisanal d'accessoires pour bambins",
      school: "Guilli Gribouilli",
      period: "07 mars - 11 avril 2022",
      description:
        "Guilli Gribouilli est une entreprise artisanale spécialisée dans la création d’accessoires du quotidien pour les bambins Tous les tissus utilisés sont testés et certifiés adaptés aux bébés, afin de garantir leur sécurité et d’éviter tout risque d’accident. Durant ma période de stage, j’ai eu l’occasion de réaliser différents accessoires, tels que des tapis d’éveil, des serviettes de douche, des gigoteuses, des lingettes, des pochettes, et bien d’autres créations destinées aux enfants qu'imaginait ma maitresse de stage. ",
      highlight: "",
    },
    {
      title: "Stage de couture dans une boutique de retouche de robe de mariée.",
      school: "Epsilon mariage",
      period: "22 novembre - 17 décembre 2021",
      description:
        "Epsilon Mariage est une boutique spécialisée dans les robes de mariée, les robes de cocktail, les costumes, ainsi que les tenues de cérémonie et accessoires. J’ai eu l’opportunité d’y effectuer un stage de couture, principalement consacré aux retouches sur les robes. Mon rôle consistait à raccourcir et ajuster les robes selon les besoins des mariés, ajouter ou retirer des boutons, ainsi qu’à poser du tulle et de la dentelle pour parfaire les finitions.",
      highlight: "",
    },
    {
      title: "Stage couture dans l'évènementiel ",
      school: "AVS COMMUNICATION",
      period: "07 juin - 05 juillet 2021",
      description: "L’entreprise AVS Communication est spécialisée dans la signalétique intérieure et extérieure, le flocage de véhicules, ainsi que dans diverses solutions de communication destinées aussi bien aux particuliers qu’aux professionnels : affiches, banderoles, stickers, et bien d’autres supports. Durant ce stage, j’ai eu l’occasion de découvrir de nombreux aspects du métier. J’ai participé à la fabrication de grandes banderoles destinées à être exposées sur des stands lors de conventions. J’ai également assisté à l’impression et à la découpe d’affiches utilisées pour des roll-ups, ainsi qu’à la découpe de tissus à l’aide d’un fer à brûler. Enfin, j’ai réalisé une grande quantité de couture, notamment pour la confection de pochettes, d’affiches nécessitant des ourlets, et pour bien d’autres projets variés.",
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
            Mon évolution dans ma carrière
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
