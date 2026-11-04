"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, Download, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { CVModal } from "./CVModal";
import { profileData } from "@/data/profile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-portfolio-bg/90 dark:bg-portfolio-darkBg/90 backdrop-blur-md border-b border-portfolio-border dark:border-portfolio-darkBorder transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex flex-col focus:outline-hidden"
              aria-label="Home page"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-portfolio-text dark:text-portfolio-darkText">
                  {profileData.name}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
              <span className="text-[11px] text-portfolio-muted dark:text-portfolio-darkMuted font-mono hidden sm:inline-block">
                Software Engineering • 3D Creative
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md transition-all duration-150 ${
                    active
                      ? "text-portfolio-text dark:text-portfolio-darkText font-semibold bg-portfolio-tagBg dark:bg-portfolio-darkTagBg"
                      : "text-portfolio-muted dark:text-portfolio-darkMuted hover:text-portfolio-text dark:hover:text-portfolio-darkText hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            {/* Download CV Button */}
            <button
              onClick={() => setCvModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md border border-portfolio-border dark:border-portfolio-darkBorder bg-white dark:bg-portfolio-darkCard text-portfolio-text dark:text-portfolio-darkText hover:border-portfolio-accent dark:hover:border-portfolio-accent transition-all duration-150 shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-portfolio-accent" />
              <span>CV</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText hover:bg-portfolio-tagBg dark:hover:bg-portfolio-darkTagBg transition-colors cursor-pointer"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-portfolio-accent" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-portfolio-muted hover:text-portfolio-text dark:text-portfolio-darkMuted dark:hover:text-portfolio-darkText hover:bg-portfolio-tagBg dark:hover:bg-portfolio-darkTagBg transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkBg px-4 py-4 space-y-2 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                      active
                        ? "text-portfolio-text dark:text-portfolio-darkText font-semibold bg-portfolio-tagBg dark:bg-portfolio-darkTagBg"
                        : "text-portfolio-muted dark:text-portfolio-darkMuted hover:text-portfolio-text dark:hover:text-portfolio-darkText"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-portfolio-border dark:border-portfolio-darkBorder flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCvModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded-md bg-portfolio-accent text-white"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-accent hover:underline"
              >
                Get in Touch <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}

