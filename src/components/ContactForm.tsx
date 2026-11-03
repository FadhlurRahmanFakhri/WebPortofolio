"use client";

import React, { useState } from "react";
import { Send, CheckCircle, MessageSquare, Mail, AlertCircle } from "lucide-react";
import { profileData } from "@/data/profile";
import { CopyEmailButton } from "./CopyEmailButton";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    // Construct mailto link as direct seamless fallback + visual confirmation
    setTimeout(() => {
      setStatus("success");
      // Optional mailto trigger
      const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left Column: Direct channels & Quick Action */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-portfolio-text dark:text-portfolio-darkText">
            Let&apos;s Build Together
          </h3>
          <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted mt-1 leading-relaxed">
            Whether you represent a tech engineering team, software house, animation studio, or need computational 3D expertise, feel free to reach out.
          </p>
        </div>

        {/* Email Copy Card */}
        <div className="p-5 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
            <Mail className="w-4 h-4 text-portfolio-accent" />
            <span>DIRECT INBOX</span>
          </div>
          <p className="text-base font-mono font-medium text-portfolio-text dark:text-portfolio-darkText break-all">
            {profileData.contact.email}
          </p>
          <div className="pt-1">
            <CopyEmailButton variant="primary" label="Copy Email Address" />
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="p-5 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-portfolio-muted dark:text-portfolio-darkMuted">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>INSTANT MESSAGING</span>
          </div>
          <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted">
            Prefer direct messaging? Reach out directly via WhatsApp for quick consultation and availability queries.
          </p>
          <a
            href={profileData.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Right Column: Interactive Contact Form */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-portfolio-darkCard border border-portfolio-border dark:border-portfolio-darkBorder shadow-xs">
          {status === "success" ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-portfolio-text dark:text-portfolio-darkText">
                Thank You, {formData.name}!
              </h4>
              <p className="text-sm text-portfolio-muted dark:text-portfolio-darkMuted max-w-md mx-auto">
                Your email client has been prepared with your message. I typically respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-4 px-4 py-2 text-xs font-mono font-medium rounded border border-portfolio-border dark:border-portfolio-darkBorder hover:bg-portfolio-tagBg dark:hover:bg-portfolio-darkTagBg transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-medium text-portfolio-text dark:text-portfolio-darkText"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2 text-sm rounded-md border border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkBg text-portfolio-text dark:text-portfolio-darkText focus:outline-hidden focus:border-portfolio-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium text-portfolio-text dark:text-portfolio-darkText"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-3.5 py-2 text-sm rounded-md border border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkBg text-portfolio-text dark:text-portfolio-darkText focus:outline-hidden focus:border-portfolio-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono font-medium text-portfolio-text dark:text-portfolio-darkText"
                >
                  Subject / Inquiring Focus
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineering Opportunity / 3D Asset Commission"
                  className="w-full px-3.5 py-2 text-sm rounded-md border border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkBg text-portfolio-text dark:text-portfolio-darkText focus:outline-hidden focus:border-portfolio-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium text-portfolio-text dark:text-portfolio-darkText"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, project timeline, or questions..."
                  className="w-full px-3.5 py-2 text-sm rounded-md border border-portfolio-border dark:border-portfolio-darkBorder bg-portfolio-bg dark:bg-portfolio-darkBg text-portfolio-text dark:text-portfolio-darkText focus:outline-hidden focus:border-portfolio-accent transition-colors resize-y"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 text-xs text-red-600 bg-red-50 dark:bg-red-950/40 rounded border border-red-200 dark:border-red-900">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-portfolio-text text-portfolio-bg hover:bg-black dark:bg-portfolio-darkText dark:text-portfolio-darkBg dark:hover:bg-white transition-colors cursor-pointer"
              >
                {status === "submitting" ? (
                  <span>Preparing Dispatch...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
