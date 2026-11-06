import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Layers,
  CheckCircle2,
  Award,
  Sparkles,
} from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { GithubIcon } from "@/components/SocialIcons";
import { ProjectDetailMedia } from "@/components/ProjectDetailMedia";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | M. Fakhri Portfolio`,
      description: project.shortDescription,
      images: [{ url: project.thumbnail || "/images/profile-portrait.svg" }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Back to Projects breadcrumb */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="space-y-6 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-portfolio-text text-portfolio-bg dark:bg-portfolio-darkText dark:text-portfolio-darkBg">
            {project.category}
          </span>
          {project.clientOrOrg && (
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-portfolio-accentLight dark:bg-portfolio-accent/20 text-portfolio-accent">
              {project.clientOrOrg}
            </span>
          )}
          <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted ml-auto flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText leading-[1.15]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-portfolio-border/70 dark:border-portfolio-darkBorder/70 text-xs">
          <div>
            <p className="font-mono text-portfolio-muted dark:text-portfolio-darkMuted">My Role</p>
            <p className="font-semibold text-portfolio-text dark:text-portfolio-darkText mt-0.5">
              {project.role}
            </p>
          </div>
          <div>
            <p className="font-mono text-portfolio-muted dark:text-portfolio-darkMuted">Client / Context</p>
            <p className="font-semibold text-portfolio-text dark:text-portfolio-darkText mt-0.5">
              {project.clientOrOrg || "Independent Production"}
            </p>
          </div>
          <div>
            <p className="font-mono text-portfolio-muted dark:text-portfolio-darkMuted">Year</p>
            <p className="font-semibold text-portfolio-text dark:text-portfolio-darkText mt-0.5">
              {project.year}
            </p>
          </div>
        </div>

        {/* Action Links (GitHub, Live Demo, ArtStation) */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-portfolio-text text-portfolio-bg dark:bg-portfolio-darkText dark:text-portfolio-darkBg hover:opacity-90 transition-opacity"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder text-portfolio-text dark:text-portfolio-darkText hover:border-portfolio-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-portfolio-accent" />
              <span>External Link / Studio</span>
            </a>
          )}

          {project.links.artstation && (
            <a
              href={project.links.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder text-portfolio-text dark:text-portfolio-darkText hover:border-portfolio-accent transition-colors"
            >
              <Layers className="w-4 h-4 text-portfolio-accent" />
              <span>View on ArtStation</span>
            </a>
          )}
        </div>
      </header>

      {/* Hero Visual / Interactive 3D Viewport Banner */}
      <ProjectDetailMedia project={project} />

      {/* Structured Case Study Sections */}
      <div className="space-y-12">
        {/* 1. Overview */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* 2. Background & Objectives */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-portfolio-text dark:text-portfolio-darkText">
              Context &amp; Background
            </h3>
            <p className="text-xs sm:text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
              {project.background}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-portfolio-text dark:text-portfolio-darkText">
              Core Objectives
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-portfolio-muted dark:text-portfolio-darkMuted">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-portfolio-accent font-bold mt-0.5">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Role & Personal Contributions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-portfolio-accent">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              My Role &amp; Contribution
            </h2>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-3">
            <ul className="space-y-3 text-sm text-portfolio-muted dark:text-portfolio-darkMuted">
              {project.contributions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-portfolio-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Tools & Technologies Used */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Technologies &amp; Tools Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder text-portfolio-text dark:text-portfolio-darkText"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* 5. Development Process Phases */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Development &amp; Production Process
          </h2>
          <div className="space-y-4">
            {project.developmentProcess.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-1.5"
              >
                <h3 className="text-sm font-mono font-bold text-portfolio-accent">
                  {step.phase}
                </h3>
                <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Visual Highlights & Render Breakdown */}
        {project.visualHighlights.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              Technical &amp; Visual Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.visualHighlights.map((vh, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] text-white"
                      style={{ backgroundColor: vh.colorAccent }}
                    >
                      {vh.type.toUpperCase()}
                    </span>
                    <span className="text-portfolio-muted dark:text-portfolio-darkMuted">
                      Asset #{i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-portfolio-text dark:text-portfolio-darkText">
                    {vh.title}
                  </h3>
                  <p className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
                    {vh.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Results & Key Impact */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-portfolio-accent">
            <Award className="w-5 h-5" />
            <h2 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
              Results &amp; Impact
            </h2>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder">
            <ul className="space-y-2.5 text-sm text-portfolio-muted dark:text-portfolio-darkMuted">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Next / Previous Project Pagination */}
      <footer className="pt-10 border-t border-portfolio-border dark:border-portfolio-darkBorder grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-4 rounded-xl border border-portfolio-border dark:border-portfolio-darkBorder bg-white dark:bg-portfolio-darkCard hover:border-portfolio-accent transition-colors flex flex-col items-start gap-1 group"
          >
            <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous Project
            </span>
            <span className="font-semibold text-sm text-portfolio-text dark:text-portfolio-darkText truncate w-full text-left">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-4 rounded-xl border border-portfolio-border dark:border-portfolio-darkBorder bg-white dark:bg-portfolio-darkCard hover:border-portfolio-accent transition-colors flex flex-col items-end gap-1 group text-right"
          >
            <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Next Project
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold text-sm text-portfolio-text dark:text-portfolio-darkText truncate w-full text-right">
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}
