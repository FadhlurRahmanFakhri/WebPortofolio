import React from "react";
import type { Metadata } from "next";
import { Award, ShieldCheck } from "lucide-react";
import { certificationsData } from "@/data/certifications";
import { CertificationCard } from "@/components/CertificationCard";

export const metadata: Metadata = {
  title: "Certifications — AWS, Cisco & Networking Credentials",
  description:
    "Verified professional credentials and industry certifications from Amazon Web Services (AWS), Cisco Networking Academy, EC-Council, and MikroTik.",
};

export default function CertificationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <div className="flex items-center gap-2">
          <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
            Verified Credentials
          </p>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-portfolio-accentLight dark:bg-portfolio-accent/20 text-portfolio-accent font-medium">
            {certificationsData.length} Verified
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-base sm:text-lg text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed max-w-3xl">
          Standardized industry credentials validating cloud engineering architecture, defensive cybersecurity concepts, ethical penetration testing, and enterprise network routing.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
}