"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Terminal,
  Box,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Award,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { professionalExperience } from "@/data/experience";
import { certificationsData } from "@/data/certifications";
import { ProjectCard } from "@/components/ProjectCard";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { CVModal } from "@/components/CVModal";
import { VideoPlayer } from "@/components/VideoPlayer";

export default function HomePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="pt-12 sm:pt-20 md:pt-24 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-14">
            {/* Div 1: Informasi Hero, Headline, CTA, & Stats */}
            <div className="flex-1 max-w-3xl space-y-6">
              {/* Status & University Metadata Header */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                  <GraduationCap className="w-3.5 h-3.5 text-portfolio-accent" />
                  D4 Teknik Informatika — Politeknik Caltex Riau
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText leading-[1.12]">
                Building digitalll experiences through{" "}
                <span className="text-portfolio-accent">technology</span> and{" "}
                <span className="italic font-serif font-normal">creativity</span>.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed max-w-2xl">
                {profileData.subheadline}
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-portfolio-text text-portfolio-bg hover:bg-black dark:bg-portfolio-darkText dark:text-portfolio-darkBg dark:hover:bg-white transition-all shadow-xs"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setCvModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono font-medium bg-white dark:bg-portfolio-darkCard text-portfolio-text dark:text-portfolio-darkText border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent transition-colors shadow-2xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-portfolio-accent" />
                  <span>Download CV</span>
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-portfolio-muted dark:text-portfolio-darkMuted hover:text-portfolio-text dark:hover:text-portfolio-darkText hover:bg-portfolio-tagBg dark:hover:bg-portfolio-darkTagBg transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>

                <div className="hidden sm:inline-block">
                  <CopyEmailButton variant="subtle" label="Copy Email" />
                </div>
              </div>

              {/* Quick Metrics Strip */}
              <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-portfolio-border/70 dark:border-portfolio-darkBorder/70">
                {profileData.stats.map((stat, i) => (
                  <div key={i} className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-bold font-mono text-portfolio-text dark:text-portfolio-darkText">
                      {stat.value}
                    </p>
                    <p className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Div 2: Image Profile dan Nama (Sejajar dengan Div Pertama) */}
            <div className="w-full sm:w-80 lg:w-88 flex flex-col items-center p-5 sm:p-6 rounded-2xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder shadow-xs hover:border-portfolio-accent/60 transition-all duration-300">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-tagBg dark:bg-portfolio-darkTagBg shadow-inner group">
                <Image
                  src="/images/profile-photo.jpg"
                  alt={profileData.fullName}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              <div className="mt-4 text-center space-y-1">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
                  {profileData.fullName}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-portfolio-accent font-medium">
                  {profileData.title}
                </p>
                <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO PLAYER (Above Section 2, Below Section 1) */}
      <VideoPlayer
        url="https://youtu.be/09vpbyDk_NI"
        title="Featured Motion & 3D Showcase"
        subtitle="YouTube Showcase • Autoplay Ready"
      />

      {/* 2. DUAL-DISCIPLINE SPECIALIZATION HIGHLIGHT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
            Interdisciplinary Focus
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Where computational logic meets spatial worldbuilding.
          </h2>
          <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted max-w-2xl leading-relaxed">
            Unlike traditional developers or standalone artists, I combine the algorithmic discipline of Informatics Engineering with the visual storytelling rigor of 3D production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engineering Pillar */}
          <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-4 hover:border-portfolio-accent/60 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-portfolio-accent/10 text-portfolio-accent flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-portfolio-text dark:text-portfolio-darkText">
              Software Engineering &amp; Computer Vision
            </h3>
            <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
              Applying mathematical algorithms, deep learning models, and geospatial data processing to visual streams and enterprise web systems. Experienced in training Convolutional Neural Networks (CNNs), deploying low-latency Haar Cascade classifiers, integrating Web GIS mapping libraries, and architecting responsive full-stack applications.
            </p>
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs">
              {["Python", "OpenCV", "CNN", "Haar Cascade", "OpenLayers", "Next.js", "TensorFlow.js", "ArcGIS & Web GIS"].map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 rounded bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-text/80 dark:text-portfolio-darkText/80 text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 3D Creative Pillar */}
          <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-4 hover:border-portfolio-accent/60 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-portfolio-accent/10 text-portfolio-accent flex items-center justify-center">
              <Box className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-portfolio-text dark:text-portfolio-darkText">
              3D Modeling, IP Assets &amp; Animation
            </h3>
            <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
              Hands-on studio production experience with PT Devata Studio Kreatif. Crafting modular 3D environments, character rigs, and animation sequences for the original IP &apos;Uda Ijal &amp; Amaik&apos; using Blender and Substance Painter.
            </p>
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs">
              {["Blender", "Environment Modeling", "Character Rigging", "3D Animation", "Cycles", "PBR Shading", "Image Texture", "UV Mapping"].map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 rounded bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-text/80 dark:text-portfolio-darkText/80 text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
              Selected Works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-portfolio-accent hover:underline"
          >
            <span>Explore All Projects ({projectsData.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={`${project.slug}-${i}`} project={project} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* 4. INDUSTRY & LEADERSHIP HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
              Track Record
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              Experience Highlights
            </h2>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-portfolio-accent hover:underline"
          >
            <span>View Full Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Studio card */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-portfolio-accent font-medium">
                2023 — 2024 • Studio Production
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-portfolio-accentLight dark:bg-portfolio-accent/20 text-portfolio-accent">
                Original IP
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-portfolio-text dark:text-portfolio-darkText">
                PT Devata Studio Kreatif
              </h3>
              <p className="text-sm font-medium text-portfolio-accent mt-0.5">
                3D Artist &amp; Environment Modeler
              </p>
            </div>
            <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
              Spearheaded 3D environment worldbuilding, modular village structures, and animation sequences for the studio&apos;s new animated IP &apos;Uda Ijal &amp; Amaik&apos;.
            </p>
            <div className="pt-2">
              <Link
                href="/projects/uda-ijal-amaik-3d-environment"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-accent hover:underline"
              >
                <span>Read IP Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Leadership card */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-portfolio-accent font-medium">
                2023 — 2025
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-portfolio-tagBg dark:bg-portfolio-darkTagBg text-portfolio-muted">
                Executive Leadership
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-portfolio-text dark:text-portfolio-darkText">
                Campus Leadership
              </h3>
              <p className="text-sm font-medium text-portfolio-accent mt-0.5">
                MTQ Ketua Pelaksana &amp; UKMI Department Head
              </p>
            </div>
            <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
              Led 50+ committee organizers and 300+ delegates. Built automated competition scoring systems and directed campus-wide student initiatives.
            </p>
            <div className="pt-2">
              <Link
                href="/experience"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-accent hover:underline"
              >
                <span>View Leadership Roles</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CREDENTIALS QUICK GLANCE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
              Industry Certifications
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              AWS, Cisco &amp; Security Credentials
            </h2>
          </div>
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-portfolio-accent hover:underline"
          >
            <span>View All Credentials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.slice(0, 3).map((cert) => (
            <div
              key={cert.id}
              className="group rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder overflow-hidden hover:border-portfolio-accent/60 transition-all shadow-2xs hover:shadow-xs flex flex-col"
            >
              {cert.image && (
                <div className="relative aspect-[16/10] w-full bg-[#121519] border-b border-portfolio-border/70 dark:border-portfolio-darkBorder/70">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-contain p-2"
                  />
                </div>
              )}
              <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                    <span className="font-semibold text-portfolio-accent">{cert.issuerBadge}</span>
                    <span>{cert.issueDate}</span>
                  </div>
                  <h3 className="font-bold text-sm text-portfolio-text dark:text-portfolio-darkText">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder text-center space-y-6 shadow-xs">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
              Open to Opportunities
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              Interested in collaborating or discussing a role?
            </h2>
            <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
              I am actively considering positions in Software Engineering, Computer Vision, and 3D Technical Art, as well as creative studio commissions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium bg-portfolio-text text-portfolio-bg hover:bg-black dark:bg-portfolio-darkText dark:text-portfolio-darkBg dark:hover:bg-white transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <CopyEmailButton variant="secondary" label="Copy Email Address" />

            <button
              onClick={() => setCvModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-mono font-medium border border-portfolio-border dark:border-portfolio-darkBorder bg-white dark:bg-portfolio-darkCard text-portfolio-text dark:text-portfolio-darkText hover:border-portfolio-accent transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-portfolio-accent" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

