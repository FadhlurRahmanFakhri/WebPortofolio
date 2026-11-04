"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { projectsData, projectCategories, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CategoryFilter } from "@/components/CategoryFilter";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projectsData.length };
    projectCategories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.tools.some((t) => t.toLowerCase().includes(q)) ||
        (project.clientOrOrg && project.clientOrOrg.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
          Portfolio Archive
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Engineering &amp; Creative Projects
        </h1>
        <p className="text-base text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          A comprehensive showcase spanning Computer Vision systems, full-stack software architectures, and studio-grade 3D environment modeling and animation.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />

          {/* Search Input */}
          <div className="relative min-w-[240px] max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-portfolio-muted dark:text-portfolio-darkMuted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool, tech, or title..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono rounded-lg border border-portfolio-border dark:border-portfolio-darkBorder bg-white dark:bg-portfolio-darkCard text-portfolio-text dark:text-portfolio-darkText placeholder:text-portfolio-muted dark:placeholder:text-portfolio-darkMuted focus:outline-hidden focus:border-portfolio-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-portfolio-muted hover:text-portfolio-text"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Metadata Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted pt-1">
          <span>
            Showing <strong className="text-portfolio-text dark:text-portfolio-darkText">{filteredProjects.length}</strong> of {projectsData.length} projects
          </span>
          {activeCategory !== "All" && (
            <button
              onClick={() => setActiveCategory("All")}
              className="text-portfolio-accent hover:underline cursor-pointer"
            >
              Reset filter
            </button>
          )}
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} priority={idx < 3} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-3 bg-white dark:bg-portfolio-darkCard rounded-xl border border-portfolio-border dark:border-portfolio-darkBorder">
          <p className="font-mono text-sm text-portfolio-text dark:text-portfolio-darkText">
            No projects found matching &ldquo;{searchQuery}&rdquo; in {activeCategory}.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-mono text-portfolio-accent hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

