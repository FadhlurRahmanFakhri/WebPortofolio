"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FileCode } from "lucide-react";
import { Project } from "@/data/projects";

const ModelViewer3D = dynamic(
  () => import("./ModelViewer3D").then((mod) => mod.ModelViewer3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#121417] text-white/60 text-xs font-mono gap-2">
        <span className="animate-pulse">Loading preview...</span>
      </div>
    ),
  }
);

interface ProjectDetailMediaProps {
  project: Project;
}

export function ProjectDetailMedia({ project }: ProjectDetailMediaProps) {
  const has3D = Boolean(project.model3d);

  return (
    <div className="space-y-3">
      {/* Main Large Showcase Viewport */}
      <div className="relative w-full h-[480px] sm:h-[580px] lg:h-[660px] overflow-hidden rounded-2xl border border-portfolio-border dark:border-portfolio-darkBorder bg-[#121417] shadow-sm">
        <ModelViewer3D
          thumbnail={project.thumbnail}
          video={project.video}
          alt={project.title}
          title={project.model3d?.title || project.title}
          className="w-full h-full"
        />
      </div>

      {/* 3D Asset Info Footer (if 3D asset metadata is available) */}
      {has3D && project.model3d && (
        <div className="p-3.5 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
          <div className="flex items-center gap-2">
            <span className="text-portfolio-accent font-semibold">Asset:</span>
            <span>{project.model3d.title ?? "3D Model"}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.model3d.sourceFile && (
              <span className="flex items-center gap-1">
                <FileCode className="w-3.5 h-3.5 text-portfolio-accent" />
                Source: {project.model3d.sourceFile}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-md bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-text dark:text-portfolio-darkText text-[10px] font-medium border border-portfolio-border/40 dark:border-portfolio-darkBorder/40">
              3D Asset Showcase
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
