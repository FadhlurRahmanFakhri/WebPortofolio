import React from "react";
import type { Metadata } from "next";
import { skillGroups } from "@/data/skills";
import { SkillGroup } from "@/components/SkillGroup";

export const metadata: Metadata = {
  title: "Skills & Technical Capabilities",
  description:
    "Comprehensive skills matrix across Software Engineering, Computer Vision, Cloud Infrastructure, and 3D Digital Creative Production.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
          Competency Matrix
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Skills &amp; Capabilities
        </h1>
        <p className="text-base text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          Categorized overview of computational, architectural, security, and digital 3D production proficiencies acquired through university research and industry practice.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="space-y-16">
        {skillGroups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}

