import React from "react";
import type { Metadata } from "next";
import { Award, ShieldCheck } from "lucide-react";
import { certificationsData } from "@/data/certifications";
import { CertificationCard } from "@/components/CertificationCard";

export const metadata: Metadata = {
  title: "Certifications — AWS & Cisco Credentials",
  description:
    "Verified professional credentials and academic certifications from Amazon Web Services, Cisco Networking Academy, and EC-Council.",
};

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
          Verified Credentials
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-base text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          Standardized industry credentials validating cloud engineering architecture, defensive cybersecurity concepts, and ethical penetration testing fundamentals.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
}

