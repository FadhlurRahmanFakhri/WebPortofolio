import React from "react";
import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience — PT Devata Studio & Campus Leadership",
  description:
    "Professional 3D studio experience at PT Devata Studio Kreatif for the original IP 'Uda Ijal & Amaik' and university leadership roles.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
          Career &amp; Leadership
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Experience &amp; Track Record
        </h1>
        <p className="text-base text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          From production 3D asset engineering at PT Devata Studio Kreatif to presiding over university championships and student community governance.
        </p>
      </div>

      {/* Experience Timeline */}
      <ExperienceTimeline />
    </div>
  );
}
