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
  const tags = ["All", ...allTags];

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
                Retour à l'accueil
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
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My 3D Art Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of all my 3D projects, experiments, and creative
            adventures! ✨
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedTag === tag
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-foreground border-2 border-primary/20 hover:border-primary/40"
              }`}
            >
              {tag}
            </button>
          ))}
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

            return (
              <Link key={project.id} href={`/mes-projets/${project.id}`}>
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
