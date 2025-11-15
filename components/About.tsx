import { Award, Book, Heart, Palette } from "lucide-react";

export function About() {
  const stats = [
    { icon: Book, value: "3ème", label: "Année d'étude" },
    { icon: Palette, value: "+5", label: "Projets créer" },
    { icon: Heart, value: "∞", label: "Passion" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center pb-12">
          <h2 className="text-4xl md:text-5xl pb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-snug md:leading-normal">
            A propos de moi
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une âme créative avec une passion pour l’art 3D
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground/80">
              Depuis mon plus jeune âge, il m’était impossible de m’épanouir
              dans la vie sans une bonne créativité. Toutes sources de mon
              bonheur et de ma liberté réunies en un seul univers : le mien. Je
              touche à tous styles d’art qui me passionnent et me façonnent,
              vivants à travers mes créations.
            </p>
            <p className="text-foreground/80">
              Depuis 2017, l’art est devenu une source infinie de créativité
              quand j’ai découvert que mes mains étaient plus agiles que ce que
              je pouvais imaginer. J’ai alors commencé par du dessin papier de
              personnages tout en évoluant dans la plupart des domaines que je
              pouvais aborder.
            </p>
            <p className="text-foreground/80">
              En 2024, me voilà en école d’art à créer tout ce qui me passe par
              la tête avec des couleurs, des formes et des styles différents à
              chacune de mes œuvres.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center space-y-2 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <h3 className="text-3xl text-primary">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
