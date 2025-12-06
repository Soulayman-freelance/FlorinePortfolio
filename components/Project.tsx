"use client";
import { Eye, Heart, ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import galleryProjects from "../app/data/dataProject";

interface ProjectsProps {
  onViewGallery?: () => void;
}

export function Projects({ onViewGallery }: ProjectsProps) {

  const selectedIds = [9, 35, 41, 20];

  const displayedProjects = selectedIds
    .map(id => galleryProjects.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl pb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Voici mes projets sélectionnés !
          </p>

          {onViewGallery && (
            <Button
              onClick={onViewGallery}
              size="lg"
              className="gap-2 shadow-lg shadow-primary/20"
            >
              View Full Gallery <ArrowRight size={20} />
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => {
            const firstMedia = project.images[0]!;
const mediaUrl =
  typeof firstMedia === "string" ? firstMedia : firstMedia.src;

            const isYouTube =
              mediaUrl.includes("youtube.com") || mediaUrl.includes("youtu.be");
            const isVideo =
              mediaUrl.endsWith(".mp4") ||
              mediaUrl.endsWith(".webm") ||
              mediaUrl.endsWith(".mov");

            let youtubeId = "";
            if (isYouTube) {
              if (mediaUrl.includes("youtube.com")) {
                youtubeId = mediaUrl.split("v=")[1]?.split("&")[0] || "";
              } else if (mediaUrl.includes("youtu.be")) {
                youtubeId = mediaUrl.split("youtu.be/")[1]?.split("?")[0] || "";
              }
            }

            return (
              <Link key={project.id} href={`/mes-projets/${slugify(project.title)}`}>
                <div className="bg-white rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all group hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                    {isYouTube && youtubeId ? (
                      <Image
                        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    ) : isVideo ? (
                      <video
                        src={mediaUrl}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={mediaUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-primary rounded-full text-sm shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-primary">{project.title}</h3>
                    <p className="text-foreground/70">{project.description}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {project.date}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-3 py-1 text-primary/60 rounded-full text-sm">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        className="gap-2 flex-1 shadow-md shadow-primary/20"
                      >
                        <Eye size={16} />
                        View Project
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary/30 hover:bg-primary/5"
                      >
                        <Heart size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link href={"/mes-projets"}>
            <Button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Voir tous mes projets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
