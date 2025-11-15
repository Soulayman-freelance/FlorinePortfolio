import { Heart, MailIcon } from "lucide-react";
import { FaYoutube, FaArtstation, FaLinkedin, FaInstagram } from "react-icons/fa6";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="mb-2">Florine PERREAUT</h3>
            <p className="text-white/80 flex items-center gap-2 justify-center md:justify-start">
              Designer 3D & Artiste numérique{" "}
              <Heart size={16} className="fill-white/60" />
            </p>
          </div>
          <div className="flex gap-6">
            <a
                href="https://www.instagram.com/_amichii/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <FaInstagram size={24} />
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
                <FaLinkedin size={24} />
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
                <MailIcon size={24} />
              </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>© {currentYear} Made with love and lots of Blender ✨</p>
        </div>
      </div>
    </footer>
  );
}
