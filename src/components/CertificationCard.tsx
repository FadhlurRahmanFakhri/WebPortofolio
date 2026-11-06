"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, CheckCircle, Maximize2, X } from "lucide-react";
import { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder flex flex-col justify-between overflow-hidden hover:border-portfolio-accent/60 transition-all duration-300 shadow-xs hover:shadow-md">
        {/* Certificate Image Preview */}
        {certification.image && (
          <div
            onClick={() => setModalOpen(true)}
            className="relative aspect-[16/10] w-full overflow-hidden bg-[#121519] border-b border-portfolio-border/70 dark:border-portfolio-darkBorder/70 cursor-pointer group/img"
          >
            <Image
              src={certification.image}
              alt={certification.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="object-contain p-2 transition-transform duration-500 ease-out group-hover/img:scale-103"
            />

            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-mono">
              <Maximize2 className="w-4 h-4 text-portfolio-accent" />
              <span>Preview Certificate</span>
            </div>

            {/* Issuer Badge on Top-Left */}
            <div className="absolute top-3 left-3 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-black/80 text-white backdrop-blur-xs border border-white/10 shadow-xs">
                <Award className="w-3.5 h-3.5 text-portfolio-accent" />
                {certification.issuerBadge}
              </span>
            </div>

            {/* Issue Year on Top-Right */}
            <div className="absolute top-3 right-3 pointer-events-none">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-black/80 text-white/90 backdrop-blur-xs border border-white/10">
                {certification.issueDate}
              </span>
            </div>
          </div>
        )}

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between gap-5">
          <div className="space-y-3">
            {/* If no image, show fallback badge header */}
            {!certification.image && (
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-portfolio-accentLight dark:bg-portfolio-accent/20 text-portfolio-accent">
                  <Award className="w-3.5 h-3.5" />
                  {certification.issuerBadge}
                </span>
                <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                  {certification.issueDate}
                </span>
              </div>
            )}

            <div>
              <h3 className="text-base sm:text-lg font-bold text-portfolio-text dark:text-portfolio-darkText">
                {certification.title}
              </h3>
              <p className="text-xs font-medium text-portfolio-muted dark:text-portfolio-darkMuted mt-0.5">
                Issued by {certification.issuer}
              </p>
            </div>

            <p className="text-xs text-portfolio-text/80 dark:text-portfolio-darkText/80 leading-relaxed">
              {certification.description}
            </p>

            {/* Verified Competencies */}
            <div className="pt-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-portfolio-accent font-semibold mb-2">
                Verified Competencies:
              </p>
              <ul className="space-y-1 text-xs text-portfolio-muted dark:text-portfolio-darkMuted">
                {certification.skillsVerified.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-portfolio-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Footer */}
          <div className="pt-4 border-t border-portfolio-border dark:border-portfolio-darkBorder flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="font-mono text-[11px] text-portfolio-muted dark:text-portfolio-darkMuted truncate">
              ID: <span className="text-portfolio-text dark:text-portfolio-darkText font-medium">{certification.credentialId}</span>
            </div>

            <div className="flex items-center gap-3">
              {certification.image && (
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="text-xs font-mono text-portfolio-muted hover:text-portfolio-text dark:hover:text-portfolio-darkText flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Maximize2 className="w-3 h-3 text-portfolio-accent" />
                  <span>Preview</span>
                </button>
              )}

              {certification.verificationUrl && (
                <a
                  href={certification.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-portfolio-accent hover:underline shrink-0"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      {modalOpen && certification.image && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white dark:bg-portfolio-darkCard rounded-2xl overflow-hidden border border-portfolio-border dark:border-portfolio-darkBorder shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-tagBg dark:bg-portfolio-darkTagBg">
              <div>
                <h4 className="text-sm font-bold text-portfolio-text dark:text-portfolio-darkText">
                  {certification.title}
                </h4>
                <p className="text-xs text-portfolio-muted dark:text-portfolio-darkMuted">
                  {certification.issuer} • Credential ID: {certification.credentialId}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-portfolio-muted hover:text-portfolio-text dark:hover:text-portfolio-darkText hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full h-[65vh] bg-[#101216] flex items-center justify-center p-3">
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
