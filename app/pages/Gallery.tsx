"use client";

import React from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "../../components/ui/button";
import galleryProjects from "../data/dataProject";
import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  const allTags = Array.from(
    new Set(galleryProjects.flatMap((project) => project.tags))
  );

  const [selectedTag, setSelectedTag] = React.useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? galleryProjects
      : galleryProjects.filter((project) =>
          project.tags.includes(selectedTag)
        );

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button
                variant="outline"
                className="gap-2 border-primary/30 hover:bg-primary/5"
              >
                <ArrowLeft size={20} />
                Retour à l&apos;accueil
              </Button>
            </Link>
            <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Galerie de Projets
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl pb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tout mes projets !
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une collection de tout les projets réalisés
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-12">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full px-6 py-4 text-lg rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white appearance-none cursor-pointer transition-all"
          >
            <option value="All">Toutes les catégories</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const firstMedia = project.images[0];
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

            const slugify = (str: string): string =>
              str
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");

            return (
              <Link
                key={project.title}
                href={`/mes-projets/${slugify(project.title)}`}
              >
                <div className="bg-white rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all group hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
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

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-primary rounded-full text-sm shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-primary">{project.title}</h3>
                    <p className="text-foreground/70 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {project.date}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            Aucun projet ne correspond à ce tag.
          </p>
        )}
      </div>
    </div>
  );
}