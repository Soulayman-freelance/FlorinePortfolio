import { Box, Spool, Camera, Brush } from "lucide-react";

export function Skills() {
  const services = [
    {
      icon: Brush,
      title: "Modélisation 2D",
      description:
        "Je crée des personnages 2D avec personnalité et charme, pour des illustrations ou des animations !",
      features: ["Personnages", "Animaux", "Colorisation", "Concept"],
    },
    {
      icon: Box,
      title: "Modélisation 3D",
      description:
        "Donner vie aux idées avec des modèles 3D détaillés. Des accessoires aux environnements, j’adore tout créer !",
      features: ["Animations", "Environnements", "Scultping", "Texturing"],
    },
    {
      icon: Spool,
      title: "Couture",
      description:
        "Je réalise des créations en couture, en travaillant les tissus et les détails !",
      features: ["Brode", "Couture", "Crochet"],
    },
    {
      icon: Camera,
      title: "Photographie",
      description:
        "Je réalise des photographies pour différents projets, qu’il s’agisse de portraits, paysages ou expérimentations créatives !",
      features: ["Modèle Humain", "Modèle Animal", "Environnement"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl pb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mes compétences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Je réalise des assets 3D et des scènes immersives !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all space-y-6 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-primary">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-foreground/70"
                  >
                    <div className="w-4 h-4 flex-shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="url(#grad)"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <defs>
                          <linearGradient
                            id="grad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#e91e8c" />
                            <stop offset="100%" stopColor="#ffb6d9" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
                                 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
                                 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4
                                 6.86-8.55 11.54L12 21.35z"
                        />
                      </svg>
                    </div>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
