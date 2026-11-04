# M. Fakhri — Personal Portfolio Website

> **Editorial, Minimalist, and Functional Portfolio** showcasing Software Engineering, Computer Vision systems, and 3D Digital Creative works.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 1. Product Overview

Personal Portfolio Website designed for **M. Fakhri**, Fresh Graduate in Informatics Engineering (*D4 Teknik Informatika*) from **Politeknik Caltex Riau**. 

The portfolio unifies two core disciplines:
1. **Software Engineering & IT**: Computer Vision algorithms (OpenCV, CNNs, Haar Cascade), full-stack web applications (Next.js, TypeScript, PostgreSQL), and cloud infrastructure (AWS Certified, Cisco Ethical Hacker).
2. **3D & Digital Creative**: Production experience at **PT Devata Studio Kreatif** developing 3D environments, character rigs, and animation sequences for the original IP *Uda Ijal & Amaik*.

---

## 2. Design System & Editorial Direction

Inspired by curated design publications on Dribbble, Awwwards, and modern monograph portfolios:

- **Palette**:
  - Background: Off-white (`#F8F8F6`) / Dark: (`#0F1011`)
  - Primary Text: Near Black (`#171717`) / Dark: (`#EAEAEA`)
  - Secondary Text: Slate Gray (`#777777`) / Dark: (`#9CA3AF`)
  - Accent: Muted Blue (`#526B83`)
  - Border: Subtle Gray (`#E5E5E5`) / Dark: (`#272A2E`)
- **Typography**:
  - Body & Headings: `Inter` / System Sans-serif
  - Monospace: `JetBrains Mono` for technical parameters, timestamps, and category pills
- **Principles**:
  - Generous whitespace and high contrast
  - Masonry-inspired responsive card grid
  - Zero bloated neon gradients or unnecessary decorative clutter
  - Authentic case study breakdowns with technical depth

---

## 3. Website Structure & Key Features

| Route | Page | Key Functionality & Content |
|---|---|---|
| `/` | **Home / Landing** | Editorial hero, availability status pulse, dual-discipline highlight, featured projects, metrics, CTAs. |
| `/projects` | **Project Gallery** | Instant multi-category filter tabs, live search input, project count indicator, responsive card grid. |
| `/projects/[slug]` | **Project Case Studies** | Dynamic detail routes with structured case studies: overview, background, objectives, my role, tools used, phase-by-phase development process, visual breakdown, and results. |
| `/about` | **About Me** | Professional summary, educational background (*Politeknik Caltex Riau*), technical philosophy, soft skills, and career objectives. |
| `/experience` | **Experience Timeline** | Professional studio experience at **PT Devata Studio Kreatif** and university governance (*MTQ 2024 Chairman*, *MTQ 2025 SC*, *UKMI Department Head*, *PCR Kuansing Vice Chairman*). |
| `/skills` | **Skills Matrix** | Categorized into *Software Engineering & IT*, *Cloud & Cybersecurity*, and *3D & Digital Creative* with proficiency badges and keyword tags. |
| `/certifications` | **Certifications** | Standardized credentials from **AWS Academy**, **Cisco Networking Academy**, and **EC-Council** with direct credential links. |
| `/contact` | **Contact & Inquiries** | One-click **Copy Email** interaction with animated toast notification, interactive inquiry form, WhatsApp link, and social profiles. |
| Global Modal | **Download / Preview CV** | Accessible curriculum vitae preview dialog with direct print-to-PDF functionality. |
| Global Navbar | **Theme Switcher** | Editorial Dark Mode & Light Mode toggle with local storage persistence. |

---

## 4. Technology Stack

- **Framework:** Next.js 15 (App Router, Server & Client Components, SSG)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom editorial color tokens & dark mode class strategy)
- **Icons:** Lucide React & Custom SVG Vector Glyphs
- **Vector Assets:** Custom architectural & technical SVGs for project showcases

---

## 5. Getting Started Locally

### Prerequisites
- Node.js 18+ (Node.js 26 LTS tested)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/fakhri-dev/personal-portfolio.git

# Enter project directory
cd personal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static and server pages
npm run build

# Start production server
npm run start
```

---

## 6. Author

**Muhammad Fakhri**  
*D4 Teknik Informatika — Politeknik Caltex Riau*  
- Email: [fakhri.dev3d@gmail.com](mailto:fakhri.dev3d@gmail.com)  
- LinkedIn: [linkedin.com/in/mfakhri-id](https://linkedin.com/in/mfakhri-id)  
- GitHub: [github.com/fakhri-dev](https://github.com/fakhri-dev)  
- ArtStation: [artstation.com/fakhri3d](https://artstation.com/fakhri3d)

