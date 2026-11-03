"use client";

import React from "react";
import { ProjectCategory, projectCategories } from "@/data/projects";

interface CategoryFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  categoryCounts: Record<string, number>;
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by discipline"
      className="flex flex-wrap gap-2 py-2"
    >
      {projectCategories.map((cat) => {
        const isSelected = activeCategory === cat;
        const count = categoryCounts[cat] ?? 0;

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
              isSelected
                ? "bg-portfolio-text text-portfolio-bg dark:bg-portfolio-darkText dark:text-portfolio-darkBg font-semibold shadow-xs"
                : "bg-white dark:bg-portfolio-darkCard text-portfolio-muted dark:text-portfolio-darkMuted border border-portfolio-border dark:border-portfolio-darkBorder hover:text-portfolio-text dark:hover:text-portfolio-darkText hover:border-portfolio-accent"
            }`}
          >
            <span>{cat}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected
                  ? "bg-white/20 text-white dark:bg-black/20 dark:text-black font-bold"
                  : "bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-muted"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
