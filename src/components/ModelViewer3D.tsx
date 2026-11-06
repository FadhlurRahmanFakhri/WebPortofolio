"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Film } from "lucide-react";

export interface ModelViewer3DProps {
  thumbnail?: string;
  video?: string;
  modelUrl?: string;
  mtlUrl?: string;
  alt?: string;
  title?: string;
  scale?: number;
  className?: string;
  interactive?: boolean;
  autoRotate?: boolean;
}

export function ModelViewer3D({
  thumbnail,
  video,
  modelUrl,
  alt = "3D Asset Preview",
  title,
  className = "",
}: ModelViewer3DProps) {
  const [loaded, setLoaded] = useState(false);

  const hasThumbnail = Boolean(thumbnail && thumbnail.trim() !== "");
  const hasVideo = !hasThumbnail && Boolean(video && video.trim() !== "");
  const fallbackSrc = modelUrl || "/images/placeholder.svg";

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#121417] select-none rounded-xl group ${className}`}
    >
      {/* 1. Jika Thumbnail Ada -> Tampilkan Image */}
      {hasThumbnail && (
        <>
          {!loaded && (
            <div className="absolute inset-0 bg-[#161a20] animate-pulse flex items-center justify-center text-white/30 text-xs font-mono">
              Loading thumbnail...
            </div>
          )}

          <Image
            src={thumbnail!}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            onLoad={() => setLoaded(true)}
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-black/75 backdrop-blur-md text-white/95 border border-white/10 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-portfolio-accent" />
              {title || "3D Asset Showcase"}
            </span>
          </div>
        </>
      )}

      {/* 2. Jika Thumbnail Kosong & Video Ada -> Tampilkan Video MP4 */}
      {hasVideo && (
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-contain"
            onLoadedData={() => setLoaded(true)}
          >
            Your browser does not support the video tag.
          </video>

          {/* Badge Video Info */}
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-sm">
              <Film className="w-3.5 h-3.5 text-portfolio-accent" />
              {title || "Animation Video (MP4)"}
            </span>
          </div>
        </div>
      )}

      {/* 3. Fallback jika thumbnail & video keduanya kosong */}
      {!hasThumbnail && !hasVideo && (
        <>
          <Image
            src={fallbackSrc}
            alt={alt}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xs font-mono bg-black/40">
            No media preview available
          </div>
        </>
      )}
    </div>
  );
}
