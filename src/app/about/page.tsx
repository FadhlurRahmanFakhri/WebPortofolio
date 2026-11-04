"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Target,
  Compass,
  CheckCircle,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { CVModal } from "@/components/CVModal";

export default function AboutPage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
          About &amp; Background
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Engineering rigor anchored by creative spatial curiosity.
        </h1>
        <p className="text-base sm:text-lg text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          {profileData.subheadline}
        </p>
      </div>

      {/* 1. Professional Narrative Summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Professional Narrative
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          {profileData.bioParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* 2. Educational Background */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-portfolio-accent">
          <GraduationCap className="w-5 h-5" />
          <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Educational Background
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 mb-1">
                {profileData.education.status}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-portfolio-text dark:text-portfolio-darkText">
                {profileData.education.degree}
              </h3>
              <p className="text-sm font-medium text-portfolio-accent">
                {profileData.education.institution}
              </p>
            </div>
            <div className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted sm:text-right">
              <p>{profileData.education.period}</p>
              <p className="font-semibold text-portfolio-text dark:text-portfolio-darkText mt-0.5">
                {profileData.education.honors}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
            <p>
              <strong>Academic Specialization:</strong> {profileData.education.focus}.
            </p>
            <p>
              Core coursework encompassed Machine Learning Foundations, Computer Vision &amp; Image Processing, Object-Oriented Software Architecture, Relational Database Systems, Network Defense Protocols, and 3D Computer Graphics Simulation.
            </p>
            <p>
              <strong>Capstone Thesis:</strong> Hybrid Face &amp; Gesture Recognition System combining low-latency Haar Cascade classifiers with a lightweight Convolutional Neural Network (CNN) for edge inference.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Technical Interests & Creative Focus */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-portfolio-accent">
          <Compass className="w-5 h-5" />
          <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Technical Interests &amp; Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profileData.interests.map((interest, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder flex items-start gap-3"
            >
              <CheckCircle className="w-4 h-4 text-portfolio-accent shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-portfolio-text dark:text-portfolio-darkText">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Soft Skills & Work Ethic */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-portfolio-accent">
          <Sparkles className="w-5 h-5" />
          <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Soft Skills &amp; Methodology
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-portfolio-text dark:text-portfolio-darkText">
            {profileData.softSkills.map((skill, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Career Objectives */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-portfolio-accent">
          <Target className="w-5 h-5" />
          <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Career Objectives
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-portfolio-bg dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-4">
          <p className="text-sm sm:text-base text-portfolio-text dark:text-portfolio-darkText leading-relaxed">
            {profileData.careerObjectives}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setCvModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-portfolio-text text-portfolio-bg hover:bg-black dark:bg-portfolio-darkText dark:text-portfolio-darkBg dark:hover:bg-white transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Full CV</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-portfolio-text dark:text-portfolio-darkText border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent transition-colors"
            >
              <span>Contact Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <CopyEmailButton variant="secondary" label="Copy Email Address" />
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

