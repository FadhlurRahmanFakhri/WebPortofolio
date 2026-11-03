import React from "react";
import { Briefcase, Users, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { professionalExperience, organizationalExperience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <div className="space-y-16">
      {/* 1. Professional Studio Industry Experience */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              Professional Studio Experience
            </h2>
            <p className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
              Production 3D Pipeline &amp; Original Intellectual Property Development
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {professionalExperience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder shadow-xs hover:border-portfolio-accent/60 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-portfolio-accentLight dark:bg-portfolio-accent/20 text-portfolio-accent mb-2">
                    {exp.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-portfolio-text dark:text-portfolio-darkText">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-portfolio-accent">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted gap-1">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-portfolio-accent" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-portfolio-accent" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-portfolio-text/90 dark:text-portfolio-darkText/90 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="mt-5 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
                  Key Production Contributions &amp; Scope:
                </h4>
                <ul className="space-y-2.5 text-sm text-portfolio-muted dark:text-portfolio-darkMuted">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-portfolio-accent shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Skills */}
              <div className="mt-6 pt-4 border-t border-portfolio-border/70 dark:border-portfolio-darkBorder/70 flex flex-wrap gap-1.5 items-center">
                <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted mr-2">
                  Stack:
                </span>
                {exp.technologiesOrSkills.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-text dark:text-portfolio-darkText"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Organizational Leadership & Campus Governance */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              Organizational &amp; Leadership Experience
            </h2>
            <p className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
              Event Directorship, Community Governance, &amp; Academic Leadership
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizationalExperience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder flex flex-col justify-between hover:border-portfolio-accent/60 transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-portfolio-accent font-medium">
                    {exp.period}
                  </span>
                  {exp.highlight && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-muted">
                      {exp.highlight}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-portfolio-text dark:text-portfolio-darkText">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-portfolio-accent mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                <p className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 pt-2 text-xs text-portfolio-text/80 dark:text-portfolio-darkText/80">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-portfolio-accent font-bold mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-portfolio-border/70 dark:border-portfolio-darkBorder/70 flex flex-wrap gap-1">
                {exp.technologiesOrSkills.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-muted dark:text-portfolio-darkMuted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
