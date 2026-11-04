"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box, ImageIcon, Sparkles, Layers, FileCode } from "lucide-react";
import { Project } from "@/data/projects";

const ModelViewer3D = dynamic(
  () => import("./ModelViewer3D").then((mod) => mod.ModelViewer3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#121417] text-white/70 text-xs font-mono">
        <span className="animate-pulse">Loading React Three Fiber Viewport...</span>
      </div>
    ),
  }
);

interface ProjectDetailMediaProps {
  project: Project;
}

export function ProjectDetailMedia({ project }: ProjectDetailMediaProps) {
  const [activeTab, setActiveTab] = useState<"2d" | "3d">(
    project.model3d ? "3d" : "2d"
  );
  const has3D = Boolean(project.model3d);

  return (
    <div className="space-y-3">
      {/* Top Media Bar with Mode Switcher */}
      {has3D && (
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-portfolio-accent font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Viewport Mode
            </span>
          </div>

          <div className="flex items-center gap-1 bg-portfolio-tagBg dark:bg-portfolio-darkTagBg p-1 rounded-lg border border-portfolio-border dark:border-portfolio-darkBorder">
            <button
              type="button"
              onClick={() => setActiveTab("3d")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-md transition-all cursor-pointer ${
                activeTab === "3d"
                  ? "bg-portfolio-accent text-white shadow-xs"
                  : "text-portfolio-muted hover:text-portfolio-text dark:hover:text-portfolio-darkText"
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Interactive 3D (R3F)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("2d")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-md transition-all cursor-pointer ${
                activeTab === "2d"
                  ? "bg-portfolio-text text-portfolio-bg dark:bg-portfolio-darkText dark:text-portfolio-darkBg shadow-xs"
                  : "text-portfolio-muted hover:text-portfolio-text dark:hover:text-portfolio-darkText"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>2D Render</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Viewport Box */}
      <div className="relative aspect-16/10 sm:aspect-16/9 w-full rounded-2xl overflow-hidden border border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-tagBg dark:bg-portfolio-darkTagBg">
        {has3D && activeTab === "3d" && project.model3d ? (
          <div className="relative w-full h-full">
            <ModelViewer3D
              modelUrl={project.model3d.modelUrl}
              scale={project.model3d.scale || 1}
            />
          </div>
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        )}
      </div>

      {/* 3D Metadata Footer Info (if 3D active) */}
      {has3D && project.model3d && activeTab === "3d" && (
        <div className="p-3 rounded-lg bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
          <div className="flex items-center gap-2">
            <span className="text-portfolio-accent font-semibold">Asset:</span>
            <span>{project.model3d.title || "3D Model"}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.model3d.sourceFile && (
              <span className="flex items-center gap-1">
                <FileCode className="w-3.5 h-3.5 text-portfolio-accent" />
                Source: {project.model3d.sourceFile}
              </span>
            )}
            <span className="px-2 py-0.5 rounded bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-text dark:text-portfolio-darkText text-[10px]">
              Engine: React Three Fiber (Three.js)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
