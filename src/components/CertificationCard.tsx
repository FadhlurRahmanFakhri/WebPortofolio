import React from "react";
import { Award, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";
import { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder flex flex-col justify-between gap-5 hover:border-portfolio-accent/60 transition-all duration-200 shadow-2xs">
      <div className="space-y-3">
        {/* Top Badging */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-portfolio-accentLight dark:bg-portfolio-accent/20 text-portfolio-accent">
            <Award className="w-3.5 h-3.5" />
            {certification.issuerBadge}
          </span>
          <span className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
            {certification.issueDate}
          </span>
        </div>

        {/* Title & Issuer */}
        <div>
          <h3 className="text-lg font-bold text-portfolio-text dark:text-portfolio-darkText">
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

      {/* Footer / Credential ID & Link */}
      <div className="pt-4 border-t border-portfolio-border dark:border-portfolio-darkBorder flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="font-mono text-[11px] text-portfolio-muted dark:text-portfolio-darkMuted truncate">
          ID: <span className="text-portfolio-text dark:text-portfolio-darkText font-medium">{certification.credentialId}</span>
        </div>

        {certification.verificationUrl && (
          <a
            href={certification.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-portfolio-accent hover:underline shrink-0"
          >
            <span>Verify Badge</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
