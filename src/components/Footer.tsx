"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { profileData } from "@/data/profile";
import { CopyEmailButton } from "./CopyEmailButton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setLocalTime(timeString);
      } catch {
        setLocalTime("GMT+7");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkBg text-portfolio-text dark:text-portfolio-darkText pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-portfolio-border dark:border-portfolio-darkBorder">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <p className="font-bold text-lg tracking-tight text-portfolio-text dark:text-portfolio-darkText">
                {profileData.fullName}
              </p>
              <p className="text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted mt-0.5">
                {profileData.title}
              </p>
            </div>
            <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted leading-relaxed max-w-sm">
              {profileData.tagline} Focused on computational computer vision, robust web architectures, and high-fidelity 3D digital worlds.
            </p>
            <div className="pt-2">
              <CopyEmailButton variant="secondary" label="Copy Email Address" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-portfolio-accent">
              Directory
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText transition-colors"
                >
                  Featured &amp; All Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText transition-colors"
                >
                  About &amp; Education
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText transition-colors"
                >
                  PT Devata &amp; Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText transition-colors"
                >
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText transition-colors"
                >
                  Credentials &amp; Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText transition-colors"
                >
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Timezone */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-portfolio-accent">
              Location &amp; Network
            </h3>

            {/* Live Clock Card */}
            <div className="p-3.5 rounded-lg border border-portfolio-border dark:border-portfolio-darkBorder bg-white dark:bg-portfolio-darkCard space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
                <span>Riau, Indonesia (WIB)</span>
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-lg font-mono font-bold text-portfolio-text dark:text-portfolio-darkText">
                {localTime || "12:00:00"} <span className="text-xs text-portfolio-muted font-normal">GMT+7</span>
              </p>
              <p className="text-[11px] text-portfolio-muted dark:text-portfolio-darkMuted">
                Available for remote roles &amp; studio commissions.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent transition-colors bg-white dark:bg-portfolio-darkCard"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-portfolio-muted" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent transition-colors bg-white dark:bg-portfolio-darkCard"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-portfolio-muted" />
              </a>
              <a
                href={profileData.contact.artstation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent transition-colors bg-white dark:bg-portfolio-darkCard"
                aria-label="ArtStation portfolio"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>ArtStation</span>
                <ArrowUpRight className="w-3 h-3 text-portfolio-muted" />
              </a>
              <a
                href={profileData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-portfolio-border dark:border-portfolio-darkBorder hover:border-portfolio-accent transition-colors bg-white dark:bg-portfolio-darkCard"
                aria-label="WhatsApp direct chat"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-portfolio-muted" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
          <p>© {new Date().getFullYear()} {profileData.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>D4 Teknik Informatika — Politeknik Caltex Riau</span>
            <span>•</span>
            <span>Editorial Portfolio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
