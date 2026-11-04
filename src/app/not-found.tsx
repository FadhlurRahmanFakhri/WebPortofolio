import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-mono text-portfolio-accent uppercase tracking-widest font-semibold">
          Error 404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
          Page Not Found
        </h1>
        <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed">
          The requested page or project case study could not be located in the archive.
        </p>
      </div>

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-portfolio-text text-portfolio-bg dark:bg-portfolio-darkText dark:text-portfolio-darkBg hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
