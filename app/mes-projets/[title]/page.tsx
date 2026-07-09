"use client";

import React from "react";
import { ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import galleryProjects from "../../data/dataProject";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProjectDetailPage() {
  const params = useParams();
  const titleParam = params.title as string;

  const projectDetails = galleryProjects.find(
    (p) => slugify(p.title) === titleParam
  );

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  if (!projectDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Projet non trouvé</h1>
          <Link href="/mes-projets">
            <Button>Retour à la galerie</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () =>
    setCurrentImageIndex((prev) =>
      prev === projectDetails.images.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectDetails.images.length - 1 : prev - 1
    );

  const goToImage = (index: number) => setCurrentImageIndex(index);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/mes-projets">
              <Button
                variant="outline"
                className="gap-2 border-primary/30 hover:bg-primary/5"
              >
                <ArrowLeft size={20} />
                Retour à la galerie
              </Button>
            </Link>
            <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Détail du Projet
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight pb-1">
                {projectDetails.title}
              </h1>

              <span className="px-4 py-2 mt-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm shadow-lg">
                {projectDetails.category}
              </span>

              {projectDetails.enCours && (
                <span className="px-4 py-2 mt-2 bg-white border border-rose-500 text-rose-500 rounded-full text-sm shadow-lg">
                  Projet en cours
                </span>
              )}
            </div>


            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {projectDetails.date}
              </span>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-video relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
              {(() => {
                const images = projectDetails.images ?? [];

                if (images.length === 0) {
                  return (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      Aucun média disponible pour ce projet.
                    </div>
                  );
                }

                const currentMedia =
                  images[currentImageIndex] ?? images[0];

                if (!currentMedia) {
                  return (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      Média introuvable.
                    </div>
                  );
                }

                const mediaUrl =
                  typeof currentMedia === "string" ? currentMedia : currentMedia.src;

                const isYouTube =
                  mediaUrl.includes("youtube.com") || mediaUrl.includes("youtu.be");

                const isVideo =
                  mediaUrl.endsWith(".mp4") ||
                  mediaUrl.endsWith(".webm") ||
                  mediaUrl.endsWith(".mov");

                if (isYouTube) {
                  let embedUrl = "";
                  if (mediaUrl.includes("youtube.com")) {
                    embedUrl = mediaUrl.replace("watch?v=", "embed/");
                  } else {
                    embedUrl = `https://www.youtube.com/embed/${mediaUrl.split("youtu.be/")[1]
                      }`;
                  }

                  return (
                    <iframe
                      src={embedUrl}
                      title={`Vidéo - ${projectDetails.title}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  );
                }

                if (isVideo) {
                  return (
                    <video
                      src={mediaUrl}
                      controls
                      className="w-full h-full object-cover"
                    />
                  );
                }

                return (
                  <Image
                    src={mediaUrl}
                    alt={`${projectDetails.title} - Image`}
                    fill
                    className="object-contain"
                    priority
                  />
                );
              })()}


              {projectDetails.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>

          {projectDetails.images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {projectDetails.images.length > 1 && (
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                  {projectDetails.images.map((image, index) => {
                    if (!image) return null;

                    const rawUrl = typeof image === "string" ? image : image.src;

                    const isYouTube =
                      rawUrl.includes("youtube.com") || rawUrl.includes("youtu.be");
                    const isVideo =
                      rawUrl.endsWith(".mp4") ||
                      rawUrl.endsWith(".webm") ||
                      rawUrl.endsWith(".mov");

                    let youtubeThumb: string | null = null;
                    if (isYouTube) {
                      let youtubeId = "";
                      if (rawUrl.includes("youtube.com")) {
                        youtubeId = rawUrl.split("v=")[1]?.split("&")[0] || "";
                      } else if (rawUrl.includes("youtu.be")) {
                        youtubeId = rawUrl.split("youtu.be/")[1]?.split("?")[0] || "";
                      }

                      if (youtubeId) {
                        youtubeThumb = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`aspect-square relative rounded-xl overflow-hidden border-2 transition-all ${index === currentImageIndex
                          ? "border-primary shadow-lg shadow-primary/30"
                          : "border-primary/20 hover:border-primary/40"
                          }`}
                      >
                        {isYouTube && youtubeThumb ? (
                          <Image
                            src={youtubeThumb}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        ) : isVideo ? (
                          <video
                            src={rawUrl}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                          />
                        ) : (
                          <Image
                            src={rawUrl}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl border-2 border-primary/20">
                <h3 className="text-primary mb-4">À propos de ce projet</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {projectDetails.fullDescription}
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-primary/20">
                <h3 className="text-primary mb-4 flex items-center gap-2">
                  <Tag size={20} /> Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-xl">
                <h3 className="mb-6">Informations sur le projet</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Logiciel(s)</p>
                    <p>{projectDetails.software}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Catégorie</p>
                    <p>{projectDetails.category}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
