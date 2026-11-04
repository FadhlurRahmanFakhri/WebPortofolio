"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowUpRight, Box, Image as ImageIcon, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";

// Dynamic import for React Three Fiber canvas to avoid SSR hydration issues
const ModelViewer3D = dynamic(
  () => import("./ModelViewer3D").then((mod) => mod.ModelViewer3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#121417] text-white/70 text-xs font-mono">
        <span className="animate-pulse">Initializing 3D Canvas...</span>
      </div>
    ),
  }
);

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [show3D, setShow3D] = useState(false);
  const has3D = Boolean(project.model3d);

  return (
    <article className="group relative flex flex-col bg-white dark:bg-portfolio-darkCard rounded-xl border border-portfolio-border dark:border-portfolio-darkBorder overflow-hidden hover:border-portfolio-accent/60 dark:hover:border-portfolio-accent/60 transition-all duration-300 hover:shadow-md">
      {/* Visual / 3D Canvas Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-portfolio-tagBg dark:bg-portfolio-darkTagBg">
        {has3D && show3D && project.model3d ? (
          <div className="relative w-full h-full">
            <ModelViewer3D
              modelUrl={project.model3d.modelUrl}
              scale={project.model3d.scale || 1}
            />
          </div>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="relative w-full h-full block"
            aria-label={`View case study: ${project.title}`}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
            />
          </Link>
        )}

        {/* Category tag pill */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/75 dark:bg-black/85 text-white backdrop-blur-xs border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Top-Right: 3D Mode Toggle or Year tag */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          {has3D && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShow3D((prev) => !prev);
              }}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all duration-200 shadow-xs cursor-pointer border ${
                show3D
                  ? "bg-portfolio-accent text-white border-portfolio-accent hover:bg-portfolio-accentHover"
                  : "bg-white/90 dark:bg-black/80 text-portfolio-text dark:text-portfolio-darkText border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent"
              }`}
              title={show3D ? "Switch to 2D Image Preview" : "Inspect Interactive 3D Model (R3F)"}
            >
              {show3D ? (
                <>
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>2D Image</span>
                </>
              ) : (
                <>
                  <Box className="w-3.5 h-3.5 text-portfolio-accent animate-pulse" />
                  <span>3D View</span>
                </>
              )}
            </button>
          )}

          {!show3D && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-mono text-portfolio-muted dark:text-portfolio-darkMuted bg-white/90 dark:bg-black/80 backdrop-blur-xs border border-portfolio-border/60 dark:border-portfolio-darkBorder/60">
              {project.year}
            </span>
          )}
        </div>

        {/* 3D Available Indicator if not yet active */}
        {has3D && !show3D && (
          <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-portfolio-accent/90 text-white backdrop-blur-xs font-medium">
              <Sparkles className="w-3 h-3" />
              Interactive 3D Available
            </span>
          </div>
        )}
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

        {/* 3D Model Info Bar if present */}
        {has3D && project.model3d && (
          <div className="px-3 py-1.5 rounded-md bg-portfolio-accentLight/60 dark:bg-portfolio-accent/10 border border-portfolio-accent/20 flex items-center justify-between text-[11px] font-mono text-portfolio-accent">
            <span className="flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5" />
              {project.model3d.title || "3D Asset"}
            </span>
            <span className="text-portfolio-muted dark:text-portfolio-darkMuted text-[10px]">
              {project.model3d.sourceFile ? "Blender / OBJ" : "glTF"}
            </span>
          </div>
        )}

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
