import React from "react";
import { Code2, ShieldCheck, Box, Check } from "lucide-react";
import { SkillCategoryGroup } from "@/data/skills";

const groupIcons: Record<string, React.ReactNode> = {
  "software-engineering": <Code2 className="w-5 h-5" />,
  "cloud-cybersecurity": <ShieldCheck className="w-5 h-5" />,
  "3d-digital-creative": <Box className="w-5 h-5" />,
};

interface SkillGroupProps {
  group: SkillCategoryGroup;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center gap-3 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-4">
        <div className="p-2.5 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
          {groupIcons[group.id] ?? <Code2 className="w-5 h-5" />}
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            {group.title}
          </h3>
          <p className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
            {group.subtitle}
          </p>
        </div>
      </div>

      <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
        {group.description}
      </p>

      {/* Grid of Individual Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 sm:p-5 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent/60 transition-all duration-200 flex flex-col justify-between gap-3 shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h4 className="font-semibold text-sm sm:text-base text-portfolio-text dark:text-portfolio-darkText">
                  {skill.name}
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-medium ${
                    skill.level === "Advanced"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                      : skill.level === "Proficient"
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                      : "bg-portfolio-tagBg text-portfolio-muted dark:bg-portfolio-darkTagBg dark:text-portfolio-darkMuted"
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Keyword tags */}
            <div className="flex flex-wrap gap-1 pt-2 border-t border-portfolio-border/60 dark:border-portfolio-darkBorder/60">
              {skill.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-text/80 dark:text-portfolio-darkText/80"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
