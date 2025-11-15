"use client";

import React from "react";
import { ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import galleryProjects from "../../data/dataProject";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = Number(params.id);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const projectDetails = galleryProjects.find((p) => p.id === projectId);

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === projectDetails.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? projectDetails.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

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
            <div className="flex flex-wrap items-start gap-4">
              <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>
              <span className="px-4 py-2 mt-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm shadow-lg">
                {projectDetails.category}
              </span>
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
                const currentMedia = projectDetails.images[currentImageIndex];
                const mediaUrl = typeof currentMedia === "string" ? currentMedia : currentMedia.src;
                const isYouTube = mediaUrl.includes("youtube.com") || mediaUrl.includes("youtu.be");
                const isVideo = mediaUrl.endsWith(".mp4") || mediaUrl.endsWith(".webm") || mediaUrl.endsWith(".mov");
                
                if (isYouTube) {
                  let embedUrl = "";
                  if (mediaUrl.includes("youtube.com")) {
                    embedUrl = mediaUrl.replace("watch?v=", "embed/");
                  } else if (mediaUrl.includes("youtu.be")) {
                    embedUrl = `https://www.youtube.com/embed/${mediaUrl.split("youtu.be/")[1]}`;
                  }
                  
                  return (
                    <iframe
                      src={embedUrl}
                      title={`${projectDetails.title} - Vidéo ${currentImageIndex + 1}`}
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
                      poster={projectDetails.images[0] && !mediaUrl.endsWith(".mp4") 
                        ? (typeof projectDetails.images[0] === "string" ? projectDetails.images[0] : projectDetails.images[0].src)
                        : undefined
                      }
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  );
                }
                
                return (
                  <Image
                    src={mediaUrl}
                    alt={`${projectDetails.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain transition-opacity duration-500"
                    priority
                  />
                );
              })()}
              
              {/* Boutons de navigation - uniquement si plusieurs images */}
              {projectDetails.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicateurs de position */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {projectDetails.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-primary shadow-lg">
                    {currentImageIndex + 1} / {projectDetails.images.length}
                  </div>
                </>
              )}
            </div>
          </div>

          {projectDetails.images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {projectDetails.images.map((image, index) => {
                const imageUrl = typeof image === "string" ? image : image.src;
                const isYouTube = imageUrl.includes("youtube.com") || imageUrl.includes("youtu.be");
                const isVideo = imageUrl.endsWith(".mp4") || imageUrl.endsWith(".webm") || imageUrl.endsWith(".mov");
                
                let youtubeId = "";
                if (isYouTube) {
                  if (imageUrl.includes("youtube.com")) {
                    youtubeId = imageUrl.split("v=")[1]?.split("&")[0] || "";
                  } else if (imageUrl.includes("youtu.be")) {
                    youtubeId = imageUrl.split("youtu.be/")[1]?.split("?")[0] || "";
                  }
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`aspect-square relative rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
                      index === currentImageIndex
                        ? "border-primary shadow-lg shadow-primary/30"
                        : "border-primary/20 hover:border-primary/40"
                    }`}
                  >
                    {isYouTube && youtubeId ? (
                      <>
                        <Image
                          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                          alt={`Miniature ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        {/* Icône play overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="bg-red-600 rounded-full p-2">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : isVideo ? (
                      <>
                        <video
                          src={imageUrl}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="bg-primary rounded-full p-2">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Image
                        src={imageUrl}
                        alt={`Miniature ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized={imageUrl.startsWith('http')}
                      />
                    )}
                  </button>
                );
              })}
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
                  <Tag size={20} />
                  Tags
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

            <div className="space-y-6">
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