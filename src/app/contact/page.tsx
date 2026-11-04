import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Let's Connect & Collaborate",
  description:
    "Get in touch with M. Fakhri for software engineering roles, computer vision projects, 3D modeling commissions, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-portfolio-border dark:border-portfolio-darkBorder pb-8">
        <p className="text-xs font-mono uppercase tracking-wider text-portfolio-accent font-semibold">
          Get In Touch
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Start a Conversation
        </h1>
        <p className="text-base text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          Open to full-time Software Engineer positions, Computer Vision opportunities, 3D Technical Artist engagements, and creative freelance collaborations.
        </p>
      </div>

      {/* Interactive Contact Section */}
      <ContactForm />
    </div>
  );
}

