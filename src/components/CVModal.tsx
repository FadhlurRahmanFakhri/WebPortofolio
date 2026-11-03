"use client";

import React, { useState } from "react";
import { Download, X, Printer, CheckCircle, ExternalLink, FileText } from "lucide-react";
import { profileData } from "@/data/profile";
import { professionalExperience, organizationalExperience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { certificationsData } from "@/data/certifications";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate an authentic printable clean HTML text / blob for direct download
    setDownloadSuccess(true);
    setTimeout(() => {
      window.print();
      setDownloadSuccess(false);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#141618] rounded-xl shadow-2xl border border-portfolio-border dark:border-portfolio-darkBorder flex flex-col overflow-hidden my-auto">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkCard">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-portfolio-accent/10 flex items-center justify-center text-portfolio-accent">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-base font-semibold text-portfolio-text dark:text-portfolio-darkText">
                Curriculum Vitae — {profileData.fullName}
              </h2>
              <p className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted font-mono">
                D4 Teknik Informatika • Politeknik Caltex Riau
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print CV"
              className="p-2 text-portfolio-muted hover:text-portfolio-text dark:hover:text-portfolio-darkText rounded-md hover:bg-portfolio-tagBg dark:hover:bg-portfolio-darkTagBg transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-portfolio-accent text-white hover:bg-portfolio-accentHover transition-colors shadow-xs"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Preparing Print...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download / Print CV</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-portfolio-muted hover:text-portfolio-text dark:hover:text-portfolio-darkText rounded-md hover:bg-portfolio-tagBg dark:hover:bg-portfolio-darkTagBg transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable CV Document */}
        <div className="p-8 sm:p-12 overflow-y-auto print:p-0 print:overflow-visible space-y-8 bg-white dark:bg-[#121314]">
          {/* CV Header */}
          <div className="border-b border-portfolio-border dark:border-portfolio-darkBorder pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
                  {profileData.fullName}
                </h1>
                <p className="text-sm font-medium text-portfolio-accent mt-0.5">
                  {profileData.title}
                </p>
              </div>
              <div className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted font-mono space-y-1 sm:text-right">
                <p>{profileData.contact.email} • {profileData.contact.phone}</p>
                <p>{profileData.location}</p>
                <p>
                  <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-portfolio-accent">LinkedIn</a> •{" "}
                  <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-portfolio-accent">GitHub</a> •{" "}
                  <a href={profileData.contact.artstation} target="_blank" rel="noopener noreferrer" className="hover:underline text-portfolio-accent">ArtStation</a>
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-portfolio-text/90 dark:text-portfolio-darkText/90 leading-relaxed max-w-3xl">
              {profileData.subheadline} {profileData.careerObjectives}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-accent mb-3">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-sm">
              <div>
                <h4 className="font-semibold text-portfolio-text dark:text-portfolio-darkText">
                  {profileData.education.degree}
                </h4>
                <p className="text-portfolio-muted dark:text-portfolio-darkMuted text-xs">
                  {profileData.education.institution} — {profileData.education.honors}
                </p>
                <p className="text-xs text-portfolio-muted/90 dark:text-portfolio-darkMuted/90 mt-1">
                  Focus: {profileData.education.focus}
                </p>
              </div>
              <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                {profileData.education.period}
              </span>
            </div>
          </div>

          {/* Professional Industry Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-accent mb-4">
              Professional Industry Experience
            </h3>
            {professionalExperience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-sm">
                  <div>
                    <h4 className="font-semibold text-portfolio-text dark:text-portfolio-darkText">
                      {exp.role} — <span className="font-normal text-portfolio-accent">{exp.organization}</span>
                    </h4>
                    <p className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                      {exp.highlight}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-portfolio-text/90 dark:text-portfolio-darkText/90 leading-relaxed">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Organizational Leadership Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-accent mb-4">
              Organizational &amp; Leadership Experience
            </h3>
            <div className="space-y-4">
              {organizationalExperience.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-sm">
                    <div>
                      <h4 className="font-medium text-portfolio-text dark:text-portfolio-darkText">
                        {exp.role} — <span className="text-portfolio-muted dark:text-portfolio-darkMuted text-xs">{exp.organization}</span>
                      </h4>
                      {exp.highlight && (
                        <p className="text-xs font-mono text-portfolio-accent/90">
                          {exp.highlight}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-portfolio-text/80 dark:text-portfolio-darkText/80">
                    {exp.responsibilities.slice(0, 2).map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-accent mb-3">
              Technical &amp; Creative Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {skillGroups.map((group) => (
                <div key={group.id} className="p-3 bg-portfolio-bg dark:bg-portfolio-darkCard rounded border border-portfolio-border dark:border-portfolio-darkBorder">
                  <h4 className="font-semibold text-portfolio-text dark:text-portfolio-darkText mb-1.5">
                    {group.title}
                  </h4>
                  <p className="text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
                    {group.skills.map((s) => s.name).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-portfolio-accent mb-3">
              Certifications &amp; Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex items-start justify-between p-2 rounded bg-portfolio-bg dark:bg-portfolio-darkCard">
                  <div>
                    <p className="font-medium text-portfolio-text dark:text-portfolio-darkText">
                      {cert.title}
                    </p>
                    <p className="text-portfolio-muted dark:text-portfolio-darkMuted text-[11px]">
                      {cert.issuer} ({cert.issueDate})
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-portfolio-accent shrink-0 ml-2">
                    {cert.credentialId}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkCard flex items-center justify-between text-xs text-portfolio-muted dark:text-portfolio-darkMuted">
          <span>Prepared for Tech Recruiters &amp; Creative Studios</span>
          <button
            onClick={onClose}
            className="text-xs text-portfolio-text dark:text-portfolio-darkText hover:underline"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
