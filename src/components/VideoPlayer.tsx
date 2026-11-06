"use client";

import React, { useState } from "react";
import { Play, Sparkles, Volume2 } from "lucide-react";

interface VideoPlayerProps {
  url?: string;
  videoId?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  autoPlay?: boolean;
}

export function VideoPlayer({
  url = "https://youtu.be/09vpbyDk_NI",
  videoId = "09vpbyDk_NI",
  title = "Featured Video Showcase",
  subtitle = "Interactive Visual & 3D Motion Reel",
  className = "",
  autoPlay = true,
}: VideoPlayerProps) {
  // Extract YouTube ID if full URL is passed
  const extractedId = React.useMemo(() => {
    if (videoId) return videoId;
    if (!url) return "09vpbyDk_NI";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "09vpbyDk_NI";
  }, [url, videoId]);

  // Construct embed URL with autoplay parameters
  // Modern browsers require mute=1 to permit autoplay
  const embedUrl = `https://www.youtube.com/embed/${extractedId}?autoplay=${
    autoPlay ? "1" : "0"
  }&mute=1&loop=1&playlist=${extractedId}&playsinline=1&rel=0&modestbranding=1`;

  const [isMutedNotice, setIsMutedNotice] = useState(true);

  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Header Label */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-portfolio-accentLight dark:bg-portfolio-accent/20 text-portfolio-accent">
              <Play className="w-3 h-3 fill-current" />
              Featured Showcase
            </span>
            <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted hidden sm:inline">
              YouTube 4K / HD
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-xs sm:text-sm font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
            {subtitle}
          </p>
        )}
      </div>

      {/* Video Container Frame */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-portfolio-border dark:border-portfolio-darkBorder bg-[#0f1115] shadow-lg group">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />

        {/* Subtle top indicator overlay */}
        {isMutedNotice && autoPlay && (
          <div className="absolute bottom-4 right-4 z-10 pointer-events-none transition-opacity duration-500">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-black/80 backdrop-blur-md text-white/90 border border-white/10 shadow-md">
              <Volume2 className="w-3.5 h-3.5 text-portfolio-accent animate-pulse" />
              <span>Autoplaying muted — click video to unmute</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

