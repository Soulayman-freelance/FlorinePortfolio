import { ArrowRight, Linkedin, Instagram, Mail, Sparkles } from "lucide-react";
import { FaArtstation } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaYoutube } from "react-icons/fa6";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                Hello ! Je suis
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PERREAUT Florine
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Designer 3D & Artiste numérique
              </h2>
            </div>

            <p className="text-lg text-foreground/70 max-w-xl">
              Actuellement en troisième année d’études en design 3D, j’adore
              créer des personnages mignons, des environnements oniriques et
              donner vie à l’imagination grâce à l’art 3D
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gap-2 shadow-lg shadow-primary/20"
              >
                Parlons enssemble ! <ArrowRight size={20} />
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/5"
              >
                Mes projets
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/_amichii/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.artstation.com/florineperreaut1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <FaArtstation size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/florine-perreaut-2642b330a/"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@amichii1557"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="mailto:floriineperreaut@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/40 to-accent overflow-hidden shadow-2xl shadow-primary/20">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="w-full h-full rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent">
                    <Image
                      src="/assets/img/profile.JPG"
                      alt="Profile"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
