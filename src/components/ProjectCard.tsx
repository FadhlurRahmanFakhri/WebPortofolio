"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const hasThumbnail = Boolean(project.thumbnail && project.thumbnail.trim() !== "");
  const hasVideo = !hasThumbnail && Boolean(project.video && project.video.trim() !== "");

  return (
    <article className="group relative flex flex-col bg-white dark:bg-portfolio-darkCard rounded-xl border border-portfolio-border dark:border-portfolio-darkBorder overflow-hidden hover:border-portfolio-accent/60 dark:hover:border-portfolio-accent/60 transition-all duration-300 hover:shadow-md">
      {/* Visual Container: Menampilkan gambar menggunakan atribut thumbnail */}
      <div className="relative w-full overflow-hidden bg-portfolio-tagBg dark:bg-portfolio-darkTagBg">
        <Link
          href={`/projects/${project.slug}`}
          className="relative block w-full aspect-[16/10] overflow-hidden"
          aria-label={`View case study: ${project.title}`}
        >
          {hasThumbnail ? (
            <Image
              src={project.thumbnail!}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : hasVideo ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted bg-portfolio-tagBg dark:bg-portfolio-darkTagBg p-4 text-center">
              <span>{project.title}</span>
              <span className="text-[10px] opacity-70 mt-1">No thumbnail</span>
            </div>
          )}
        </Link>

        {/* Category tag pill */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/75 dark:bg-black/85 text-white backdrop-blur-xs border border-white/10 shadow-xs">
            {project.category}
          </span>
        </div>

        {/* Year tag */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono text-white/90 bg-black/75 dark:bg-black/85 backdrop-blur-xs border border-white/10 shadow-xs">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
        <div className="space-y-2">
          {project.clientOrOrg && (
            <p className="text-xs font-mono text-portfolio-accent font-medium tracking-wide">
              {project.clientOrOrg}
            </p>
          )}

          <h3 className="text-lg font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText group-hover:text-portfolio-accent transition-colors duration-200">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-baseline gap-1"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-portfolio-accent shrink-0 inline" />
            </Link>
          </h3>

          <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-3 border-t border-portfolio-border/70 dark:border-portfolio-darkBorder/70 flex flex-wrap gap-1.5 items-center">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-text/80 dark:text-portfolio-darkText/80"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="text-[10px] font-mono text-portfolio-muted dark:text-portfolio-darkMuted pl-1">
              +{project.tools.length - 4} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
