export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Professional" | "Organizational";
  description: string;
  responsibilities: string[];
  technologiesOrSkills: string[];
  highlight?: string;
}

export const professionalExperience: ExperienceItem[] = [
  {
    id: "devata-studio",
    role: "3D Artist & Environment Modeler",
    organization: "PT Devata Studio Kreatif",
    location: "Indonesia",
    period: "2023 — 2024",
    type: "Professional",
    highlight: "Core 3D Production for New Original IP 'Uda Ijal & Amaik'",
    description:
      "Contributed as an essential member of the creative 3D production pipeline for the studio's new flagship intellectual property (IP), 'Uda Ijal & Amaik'. Responsible for bridging 2D conceptual visual development with production-ready 3D environment architecture, prop asset libraries, and character animation support.",
    responsibilities: [
      "Concept Art Environment: Produced preliminary 2D environment sketches, mood boards, and architectural elevation references inspired by Indonesian regional vernacular styles.",
      "Environment Modeling: Crafted production-ready 3D sets, modular dwellings, rural village landmarks, and atmospheric foliage in Blender using PBR texturing workflows.",
      "Animation Development: Collaborated closely with lead animators to build clean armatures, set up character deformation rigs, and animate key narrative sequences.",
      "Asset Library Management: Maintained naming conventions, polygon budgets, and texture atlas standards across 30+ environmental assets for maximum scene rendering efficiency in Cycles.",
      "Cross-Department Coordination: Partnered with art directors, lighting specialists, and sound designers to review daily animation dailies and implement iterative art feedback.",
    ],
    technologiesOrSkills: [
      "Blender",
      "Cycles / Eevee",
      "Substance Painter",
      "Environment 3D Modeling",
      "3D Animation",
      "PBR Texturing",
      "Concept Art",
      "Photoshop",
      "Rigging",
    ],
  },
];

export const organizationalExperience: ExperienceItem[] = [
  {
    id: "mtq-2025-sc",
    role: "Steering Committee",
    organization: "Musabaqah Tilawatil Quran (MTQ) PCR 2025",
    location: "Politeknik Caltex Riau",
    period: "2024 — 2025",
    type: "Organizational",
    highlight: "Strategic Advisory & System Transition",
    description:
      "Appointed as senior advisor to oversee the strategic planning, rule standardization, and operational roadmap for the university's annual flagship MTQ championship.",
    responsibilities: [
      "Supervised the executive organizing committee in budgeting, timeline execution, and inter-institutional coordination.",
      "Standardized adjudication criteria and digital score verification protocols across 8 competition categories.",
      "Mentored the incoming organizing committee on technical systems deployment and conflict-resolution procedures.",
    ],
    technologiesOrSkills: [
      "Strategic Governance",
      "Advisory Leadership",
      "Risk Mitigation",
      "Mentorship",
    ],
  },
  {
    id: "mtq-2024-ketua",
    role: "Ketua Pelaksana (Project Chairman)",
    organization: "Musabaqah Tilawatil Quran (MTQ) PCR 2024",
    location: "Politeknik Caltex Riau",
    period: "2023 — 2024",
    type: "Organizational",
    highlight: "Led 50+ Committee Members & 300+ Delegates",
    description:
      "Elected to direct the entire organizational, financial, and digital execution of the prestigious university-wide MTQ 2024 championship. Spearheaded the digital transformation of the event by deploying an automated web-based competition management system.",
    responsibilities: [
      "Led cross-functional committees comprising 50+ members across logistics, event programming, public relations, and technical scoring.",
      "Initiated and oversaw the development of the automated online participant registration and real-time jury scoring web application.",
      "Successfully coordinated logistics and security for 300+ university and regional participants over a 3-day multi-venue tournament.",
      "Managed event budgeting, university sponsorship procurement, and executive reporting to university leadership.",
    ],
    technologiesOrSkills: [
      "Project Leadership",
      "Operations Management",
      "Digital Transformation",
      "Cross-functional Coordination",
      "Financial Budgeting",
    ],
  },
  {
    id: "ukmi-syiar",
    role: "Kepala Departemen Syiar Keumatan",
    organization: "UKMI (Unit Kegiatan Mahasiswa Islam) PCR",
    location: "Politeknik Caltex Riau",
    period: "2022 — 2023",
    type: "Organizational",
    highlight: "Departmental Head & Campus-wide Creative Outreach",
    description:
      "Headed the Department of Syiar Keumatan, driving university-wide community initiatives, educational seminars, creative multimedia publication, and student welfare programs.",
    responsibilities: [
      "Directed departmental strategy and guided a team of 20+ active staff members in executing monthly campus outreach events.",
      "Pioneered high-quality digital multimedia campaigns utilizing creative graphic design and motion visuals to boost student engagement by 40%.",
      "Organized public lectures and webinars featuring regional thought leaders, managing event broadcasting and digital presence.",
      "Coordinated welfare distribution initiatives and community support programs for campus students in need.",
    ],
    technologiesOrSkills: [
      "Team Leadership",
      "Creative Campaign Direction",
      "Public Relations",
      "Event Organization",
    ],
  },
  {
    id: "pcr-kuansing",
    role: "Wakil Ketua (Vice Chairman)",
    organization: "Ikatan Mahasiswa PCR Kuansing (IMPK)",
    location: "Politeknik Caltex Riau & Kuantan Singingi",
    period: "2021 — 2022",
    type: "Organizational",
    highlight: "Regional Student Association Leadership",
    description:
      "Served as Vice Chairman of the Kuansing regional student collective at Politeknik Caltex Riau, fostering academic mentorship, cultural preservation, and university entrance roadshows for high school seniors across Kuantan Singingi regency.",
    responsibilities: [
      "Assisted the Chairman in internal governance, member development, and quarterly evaluation of 4 sub-divisions.",
      "Led the annual 'Campus Goes to School' outreach campaign across 15+ high schools in Kuantan Singingi, increasing applicant interest in informatics engineering.",
      "Organized cultural student gatherings to maintain regional solidarity and provide academic tutoring for junior members.",
    ],
    technologiesOrSkills: [
      "Organizational Governance",
      "Community Outreach",
      "Public Speaking",
      "Educational Mentorship",
    ],
  },
];
