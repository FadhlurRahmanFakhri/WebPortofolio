"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { profileData } from "@/data/profile";

interface CopyEmailButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "subtle";
  label?: string;
}

export function CopyEmailButton({
  className = "",
  variant = "secondary",
  label = "Copy Email",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = profileData.contact.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md cursor-pointer select-none";

  const variantStyles = {
    primary:
      "bg-portfolio-text text-portfolio-bg hover:bg-black dark:bg-portfolio-darkText dark:text-portfolio-darkBg dark:hover:bg-white shadow-sm",
    secondary:
      "bg-white dark:bg-portfolio-darkCard text-portfolio-text dark:text-portfolio-darkText border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent dark:hover:border-portfolio-accent shadow-xs",
    subtle:
      "text-portfolio-muted dark:text-portfolio-darkMuted hover:text-portfolio-text dark:hover:text-portfolio-darkText hover:bg-portfolio-tagBg dark:hover:bg-portfolio-darkTagBg",
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleCopy}
        aria-label="Copy email address to clipboard"
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">
              Copied to Clipboard!
            </span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-portfolio-accent" />
            <span>{label}</span>
          </>
        )}
      </button>

      {/* Floating subtle toast tooltip */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-xs font-mono py-1 px-2.5 rounded shadow-lg whitespace-nowrap animate-fade-in"
        >
          {profileData.contact.email}
        </div>
      )}
    </div>
  );
}

