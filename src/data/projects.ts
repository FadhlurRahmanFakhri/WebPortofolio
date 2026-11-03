export interface Project {
  slug: string;
  title: string;
  category:
    | "Software Engineering"
    | "Computer Vision & AI"
    | "3D Modeling"
    | "3D Animation"
    | "2D & Digital Artwork";
  shortDescription: string;
  year: string;
  tools: string[];
  featured: boolean;
  thumbnail: string;
  clientOrOrg?: string;
  role: string;
  overview: string;
  background: string;
  objectives: string[];
  contributions: string[];
  developmentProcess: {
    phase: string;
    description: string;
  }[];
  results: string[];
  links: {
    github?: string;
    demo?: string;
    artstation?: string;
    documentation?: string;
    instagram?: string;
  };
  visualHighlights: {
    title: string;
    type: "render" | "code" | "diagram" | "screenshot";
    caption: string;
    colorAccent: string;
  }[];
}

export const projectCategories = [
  "All",
  "Software Engineering",
  "Computer Vision & AI",
  "3D Modeling",
  "3D Animation",
  "2D & Digital Artwork",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectsData: Project[] = [
  {
    slug: "uda-ijal-amaik-3d-environment",
    title: "Uda Ijal & Amaik – 3D Environment & IP World Building",
    category: "3D Modeling",
    shortDescription:
      "Production-ready 3D environment, modular architectural props, and traditional cultural structures crafted for PT Devata Studio Kreatif's original IP.",
    year: "2024",
    tools: ["Blender", "Cycles", "Substance Painter", "Photoshop", "PBR Workflow"],
    featured: true,
    thumbnail: "/images/projects/uda-ijal-env.svg",
    clientOrOrg: "PT Devata Studio Kreatif",
    role: "Environment 3D Modeler & Concept Artist",
    overview:
      "A comprehensive 3D environmental production project for 'Uda Ijal & Amaik', an original intellectual property produced by PT Devata Studio Kreatif. The project required translating 2D conceptual visual sketches into fully realized, optimized 3D sets with custom architectural elements, foliage, and ambient props.",
    background:
      "PT Devata Studio Kreatif was establishing a new animated IP rooted in Indonesian cultural nuances, specifically inspired by Minangkabau vernacular charm. To support dynamic camera movements across animated episodes, the studio required a cohesive, modular 3D environment library that maintained stylistic consistency while rendering efficiently in production pipelines.",
    objectives: [
      "Design and model modular traditional and semi-modern village architectural assets.",
      "Develop high-fidelity PBR texture maps with stylized hand-painted characteristics.",
      "Optimize polygonal topology for real-time viewport scrubbing and rapid rendering in Cycles.",
      "Establish coherent lighting rigs that simulate golden hour tropical village atmospheres.",
    ],
    contributions: [
      "Researched traditional architectural motifs and produced initial 2D thumbnail environment sketches.",
      "Modeled over 25+ unique 3D architectural assets, including wooden stilt dwellings, carved verandas, and rustic village props.",
      "Authored seamless PBR materials in Substance Painter with custom weathered wood, terra-cotta tile, and woven bamboo shaders.",
      "Constructed reusable set-dressing modules in Blender allowing animators to rapidly stage new sequence shots.",
      "Collaborated with the lighting and comp team to calibrate shadow densities and volumetric atmospheric haze.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Concept & Spatial Blocking",
        description:
          "Collaborated with art directors to create rough 3D whitebox layouts determining camera focal lengths, sightlines, and character movement pathways.",
      },
      {
        phase: "Phase 2: High & Low-Poly Modeling",
        description:
          "Sculpted organic micro-details in high-poly meshes, baked normal and ambient occlusion maps onto clean, low-poly game/animation-ready geometry.",
      },
      {
        phase: "Phase 3: UV Unwrapping & Texturing",
        description:
          "Maximized texel density with non-overlapping UV islands; applied bespoke procedural grime, sun-bleach gradients, and edge-wear accents in Substance Painter.",
      },
      {
        phase: "Phase 4: Assembly, Lighting & Render Validation",
        description:
          "Assembled master environment scenes in Blender with multi-layer light rigs, volumetrics, and verified render frame times remained under studio limits.",
      },
    ],
    results: [
      "Delivered 100% of required environmental modules on schedule for the pilot teaser episode.",
      "Reduced render times per frame by 35% through aggressive texture atlasing and polygon optimization.",
      "Received commendation from creative leads for preserving authentic cultural architectural details.",
    ],
    links: {
      artstation: "https://artstation.com/fakhri3d",
      demo: "https://devatastudio.com",
    },
    visualHighlights: [
      {
        title: "Master Village Set Assembly",
        type: "render",
        caption: "Wide establishing render showing modular stilt houses, stone paths, and tropical foliage.",
        colorAccent: "#526B83",
      },
      {
        title: "PBR Material Breakdown",
        type: "render",
        caption: "Albedo, Roughness, Normal, and AO channel separation for aged timber shingles.",
        colorAccent: "#7C6354",
      },
      {
        title: "Topology & Wireframe Inspection",
        type: "diagram",
        caption: "Clean edge loops and quad-dominant topology optimized for shadow deformation.",
        colorAccent: "#3B4E61",
      },
    ],
  },
  {
    slug: "realtime-cv-cnn-haar-cascade",
    title: "Hybrid Face & Gesture Recognition via CNN and Haar Cascade",
    category: "Computer Vision & AI",
    shortDescription:
      "Low-latency dual-stage computer vision system combining Haar Cascade fast localization with a custom CNN for multi-class emotion and gesture classification.",
    year: "2024",
    tools: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy", "CNN", "Haar Cascade"],
    featured: true,
    thumbnail: "/images/projects/cv-cnn-haar.svg",
    clientOrOrg: "Politeknik Caltex Riau — Capstone Research",
    role: "Lead Machine Learning & CV Engineer",
    overview:
      "A high-efficiency real-time computer vision system engineered to overcome computational bottlenecks on edge devices. By pairing an ultra-lightweight Haar Cascade classifier for bounding-box extraction with a custom-trained Convolutional Neural Network (CNN) for deep feature classification, the system achieves stable 45+ FPS inference on standard consumer CPUs without requiring a dedicated discrete GPU.",
    background:
      "Conventional deep learning detectors like heavy SSDs or YOLO variants often suffer from high frame-latency on low-power embedded computing units. This project aimed to design a two-tier hybrid architecture capable of maintaining robust classification accuracy while remaining computationally accessible for resource-constrained academic and commercial deployment.",
    objectives: [
      "Implement a real-time face and hand region detection pipeline operating at >30 FPS on CPU.",
      "Train and fine-tune a custom lightweight CNN model achieving >93% validation accuracy on 7 expression classes.",
      "Minimize bounding-box jitter and false positives under fluctuating ambient illumination conditions.",
      "Build an interactive desktop dashboard with live telemetry overlays for confidence scoring and FPS tracking.",
    ],
    contributions: [
      "Engineered the full computer vision preprocessing pipeline using OpenCV in Python.",
      "Collected, cleaned, and augmented an annotated training dataset of 12,000+ facial expression and gesture samples.",
      "Architected a custom 5-layer CNN with Batch Normalization, Dropout (0.4), and LeakyReLU activations to prevent overfitting.",
      "Implemented temporal smoothing filters to eliminate rapid flickers between consecutive video frames.",
      "Authored rigorous performance benchmarking benchmarks comparing CPU latency vs. GPU inference.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Algorithm Benchmarking",
        description:
          "Evaluated speed and detection reliability tradeoffs between pure DL bounding-box regressors and Haar Cascade integral image calculations.",
      },
      {
        phase: "Phase 2: CNN Architecture Design",
        description:
          "Iterated convolutional filter dimensions (32, 64, 128) and kernel sizes (3x3) with dense softmax heads trained using Adam optimizer with categorical cross-entropy.",
      },
      {
        phase: "Phase 3: Real-Time Stream Integration",
        description:
          "Connected OpenCV multi-threaded camera feeds directly into vectorized numpy arrays for seamless model inference.",
      },
      {
        phase: "Phase 4: Telemetry & Evaluation",
        description:
          "Evaluated confusion matrices, ROC curves, and precision-recall trade-offs across challenging lighting variations.",
      },
    ],
    results: [
      "Achieved 94.2% test set accuracy across 7 facial expression categories.",
      "Maintained an average inference throughput of 48.4 FPS on an Intel Core i5 processor.",
      "Successfully deployed as an interactive demonstration at the Politeknik Caltex Riau Technology Exhibition.",
    ],
    links: {
      github: "https://github.com/fakhri-dev/hybrid-face-gesture-cnn",
      documentation: "https://github.com/fakhri-dev/hybrid-face-gesture-cnn#readme",
    },
    visualHighlights: [
      {
        title: "Two-Tier Architecture Diagram",
        type: "diagram",
        caption: "Data flow from camera stream -> Haar Cascade ROI crop -> CNN classifier -> Output telemetry.",
        colorAccent: "#526B83",
      },
      {
        title: "Confusion Matrix & Performance Metrics",
        type: "diagram",
        caption: "Validation accuracy breakdown across Anger, Happiness, Neutral, Surprise, and Gesture classes.",
        colorAccent: "#386641",
      },
      {
        title: "Live Detection Viewport",
        type: "screenshot",
        caption: "Real-time webcam bounding box with dynamic confidence scoring and FPS telemetry counter.",
        colorAccent: "#6A4C93",
      },
    ],
  },
  {
    slug: "uda-ijal-amaik-character-rigging-animation",
    title: "Uda Ijal & Amaik – Character Rigging & Animation Sequences",
    category: "3D Animation",
    shortDescription:
      "Complete skeletal rigging, facial shape key rigging, and expressive narrative character animation for PT Devata Studio Kreatif.",
    year: "2024",
    tools: ["Blender", "Rigify", "Weight Painting", "Action Editor", "Premiere Pro"],
    featured: true,
    thumbnail: "/images/projects/uda-ijal-anim.svg",
    clientOrOrg: "PT Devata Studio Kreatif",
    role: "3D Animator & Technical Rigging Artist",
    overview:
      "Comprehensive character setup and narrative sequence animation for the flagship characters 'Uda Ijal' and 'Amaik'. Focused on creating intuitive animator-friendly rigs with inverse kinematics (IK/FK switches), squash-and-stretch controls, and authentic comedic performance acting tailored to Southeast Asian folklore storytelling.",
    background:
      "Animation production schedules demand rigs that are robust against mesh collisions, fast to manipulate in Blender viewport, and capable of conveying subtle emotional nuance. As part of PT Devata's IP pipeline, this project bridged static character design with living, breathing screen presence.",
    objectives: [
      "Build clean bipedal rigs featuring modular IK/FK spine, arm, and leg controls.",
      "Create custom facial blend shapes for phonemes, brow furrows, and comedic expressions.",
      "Animate dynamic keyframe sequences showcasing conversational banter and physical comedy.",
      "Ensure flawless weight painting around deformation joints (shoulders, elbows, knees, cloth folds).",
    ],
    contributions: [
      "Rigged primary and secondary characters using Blender's advanced bone hierarchies and custom control shapes.",
      "Painted precise vertex skin weights to eliminate clipping artifacts during extreme poses.",
      "Created 15+ reusable animation actions (idle loops, run cycles, surprised reactions) in Blender's Action Editor.",
      "Animated hero teaser dialogue sequences with lip-sync matched to Indonesian voiceover audio tracks.",
      "Documented animation guideline sheets for junior animators on character key pose silhouettes.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Armature Alignment & Skinning",
        description:
          "Aligned bone pivots with anatomical joint centers; partitioned vertex groups for clean heat-map skin weight distribution.",
      },
      {
        phase: "Phase 2: Facial Setup & Corrective Shapes",
        description:
          "Sculpted corrective shape keys driven by bone rotations to preserve muscular volume around bending joints.",
      },
      {
        phase: "Phase 3: Blocking & Timing",
        description:
          "Blocked key poses on stepped interpolation to lock in character silhouette clarity and narrative timing.",
      },
      {
        phase: "Phase 4: Splining, Polishing & Secondary Motion",
        description:
          "Converted to Bezier splines, added anticipation, follow-through on clothing/hair accessories, and smoothed motion arcs.",
      },
    ],
    results: [
      "Produced 4 completed story sequences utilized in the intellectual property teaser pitch.",
      "Zero mesh breakdown or joint collapse across high-exaggeration comedic movements.",
      "Standardized character rig template adopted across all subsequent studio productions.",
    ],
    links: {
      artstation: "https://artstation.com/fakhri3d",
      demo: "https://devatastudio.com",
    },
    visualHighlights: [
      {
        title: "Armature & Custom Rig Controller Layout",
        type: "render",
        caption: "Bipedal control scheme with custom color-coded widgets for head, limbs, and spine.",
        colorAccent: "#526B83",
      },
      {
        title: "Lip Sync & Facial Expression Matrix",
        type: "render",
        caption: "Phoneme visemes (A, E, I, O, U, M) and comedic expression shape-key targets.",
        colorAccent: "#DDA15E",
      },
      {
        title: "Keyframe Motion Arc Analysis",
        type: "diagram",
        caption: "Graph editor curves showing smooth easing, anticipation, and secondary follow-through.",
        colorAccent: "#BC6C25",
      },
    ],
  },
  {
    slug: "vehicle-traffic-monitoring-vision",
    title: "Multi-Lane Vehicle Tracking & Flow Velocity Estimation",
    category: "Computer Vision & AI",
    shortDescription:
      "Automated highway surveillance pipeline with real-time multi-lane vehicle detection, trajectory tracking, and automated traffic flow velocity calculation.",
    year: "2023",
    tools: ["Python", "OpenCV", "YOLOv8", "DeepSORT", "NumPy", "Matplotlib"],
    featured: false,
    thumbnail: "/images/projects/vehicle-vision.svg",
    clientOrOrg: "Politeknik Caltex Riau — Computer Vision Lab",
    role: "Computer Vision Developer",
    overview:
      "An intelligent transportation analytics system designed to process real-time traffic camera video streams. The system automatically segments multiple highway lanes, tracks individual vehicles using Kalman filter prediction, and calculates instantaneous velocity based on calibrated homography matrices.",
    background:
      "Traditional manual traffic monitoring in urban centers is labor-intensive and prone to recording blind spots. This academic engineering project explored automated video processing techniques to provide civil planners with accurate vehicular counts, congestion alerts, and lane-utilization heatmaps.",
    objectives: [
      "Implement real-time vehicle bounding-box detection utilizing lightweight YOLO inference.",
      "Maintain persistent vehicle IDs across lane changes and occlusions using DeepSORT embeddings.",
      "Calculate vehicle velocity through perspective transformation and real-world ground calibration.",
      "Export structured temporal analytics to CSV/JSON for municipal congestion auditing.",
    ],
    contributions: [
      "Calibrated camera perspective distortion using four-point homography projection.",
      "Configured virtual tripwires and polygon regions of interest (ROIs) for directional counting.",
      "Implemented Kalman filter motion extrapolation to maintain tracking continuity when vehicles overlap.",
      "Generated automated hourly throughput reports with velocity distributions and vehicle type classification.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Video Capture & Homography",
        description:
          "Mapped pixel coordinates to metric roadway distances using known highway line markers as physical references.",
      },
      {
        phase: "Phase 2: Object Detection Integration",
        description:
          "Inference execution for cars, trucks, buses, and motorcycles with class-weighted NMS (Non-Maximum Suppression).",
      },
      {
        phase: "Phase 3: Trajectory Association",
        description:
          "Paired visual appearance features with spatial motion vectors using Hungarian matching algorithm.",
      },
      {
        phase: "Phase 4: Analytics Export",
        description:
          "Automated aggregation of peak-hour volume, median speeds, and dangerous braking incident alerts.",
      },
    ],
    results: [
      "Achieved 91.8% tracking precision on multi-lane daylight and overcast CCTV footage.",
      "Demonstrated velocity estimation error of less than ±4.5 km/h compared to radar baseline data.",
      "Featured as top departmental capstone project in the 2023 Applied Informatics Showcase.",
    ],
    links: {
      github: "https://github.com/fakhri-dev/traffic-vision-tracking",
    },
    visualHighlights: [
      {
        title: "Homography Transformation Matrix",
        type: "diagram",
        caption: "Perspective rectification projecting camera view onto top-down 2D roadway grid.",
        colorAccent: "#526B83",
      },
      {
        title: "Multi-Class Bounding & ID Tracking",
        type: "screenshot",
        caption: "Simultaneous tracking of passenger cars, utility trucks, and motorcycles across 3 lanes.",
        colorAccent: "#2A9D8F",
      },
    ],
  },
  {
    slug: "traditional-rumah-gadang-3d-model",
    title: "Rumah Gadang Vernacular Architecture 3D Study",
    category: "3D Modeling",
    shortDescription:
      "High-detail architectural visualization and 3D historical preservation of traditional Minangkabau vernacular architecture.",
    year: "2023",
    tools: ["Blender 4.0", "Substance Painter", "Cycles", "Photoshop"],
    featured: false,
    thumbnail: "/images/projects/rumah-gadang.svg",
    clientOrOrg: "Personal Cultural Exploration",
    role: "3D Environment & Architectural Artist",
    overview:
      "A dedicated digital heritage preservation study focusing on the intricate timber craftsmanship, sweeping buffalo horn rooflines (Gonjong), and hand-carved floral bas-relief panels of the traditional Minangkabau Rumah Gadang.",
    background:
      "Indigenous Indonesian vernacular architecture embodies centuries of localized environmental wisdom, seismic resilience, and cultural iconography. This personal project aimed to document these complex timber joinery techniques into an accurate, high-fidelity 3D archival model with museum-grade rendering quality.",
    objectives: [
      "Digitally reconstruct authentic interlocking mortise-and-tenon (pasak) wooden joint mechanisms.",
      "Hand-author ornate floral relief carvings across facade timber panels using height/normal maps.",
      "Achieve photorealistic daylighting simulating humid tropical canopy atmosphere in Cycles.",
    ],
    contributions: [
      "Conducted extensive photographic research and dimension surveying of historical heritage sites.",
      "Modelled modular roof curved beams, carved pillars, and woven bamboo wall elements.",
      "Created procedural moss, weathered lacquer, and oxidized bronze materials in Blender shader nodes.",
      "Rendered a series of dramatic 4K beauty shots and architectural detail close-ups.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Architectural Drafting",
        description:
          "Established accurate proportional ratios (9-bay, 4-tier roof geometry) from archival blueprints.",
      },
      {
        phase: "Phase 2: Ornamental Relief Sculpting",
        description:
          "Digitally sculpted Itik Pulang Patang (Ducks Returning in the Afternoon) traditional floral motifs in ZBrush/Blender.",
      },
      {
        phase: "Phase 3: Material Shader Crafting",
        description:
          "Layered wood grain anisotropy, varnish peeling, and tropical humidity weathering shaders.",
      },
      {
        phase: "Phase 4: Lighting & Atmospheric Comp",
        description:
          "Configured physical sky sun angles and volumetric sunbeams passing through surrounding palm trees.",
      },
    ],
    results: [
      "Published as a cultural digital asset study receiving recognition on creative art forums.",
      "Achieved sub-millimeter visual authenticity verified against traditional architectural references.",
    ],
    links: {
      artstation: "https://artstation.com/fakhri3d",
    },
    visualHighlights: [
      {
        title: "Gonjong Roof Curve Elevation",
        type: "render",
        caption: "Orthographic architectural view demonstrating geometric harmony of swooping eaves.",
        colorAccent: "#526B83",
      },
      {
        title: "Intricate Timber Carving Close-Up",
        type: "render",
        caption: "Macro render of hand-painted gold leaf inlay and weathered ironwood grain.",
        colorAccent: "#E76F51",
      },
    ],
  },
  {
    slug: "academic-mtq-competition-portal",
    title: "Centralized Academic Event & MTQ Registration Portal",
    category: "Software Engineering",
    shortDescription:
      "Full-stack event administration platform serving 300+ competition delegates, live scoring, and credential verification during MTQ PCR 2024.",
    year: "2024",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
    featured: false,
    thumbnail: "/images/projects/mtq-portal.svg",
    clientOrOrg: "UKMI & Politeknik Caltex Riau",
    role: "Full-Stack Web Architect & Event Head of Logistics",
    overview:
      "A complete web application engineered to replace manual spreadsheet workflows for large-scale campus competitions. Built for the Musabaqah Tilawatil Quran (MTQ) 2024 at Politeknik Caltex Riau, the platform handled delegate credentialing, jury score submissions, real-time leaderboard aggregation, and digital certificate distribution.",
    background:
      "Previous iterations of the event suffered from fragmented paper submissions, score tally errors, and delayed announcements. Serving as the Ketua Pelaksana (Chairman) for MTQ 2024, I spearheaded the technical engineering of an automated web management portal to streamline operations.",
    objectives: [
      "Eliminate manual registration bottlenecks with self-service delegate onboarding and document verification.",
      "Build a secure, role-based jury interface with cryptographic score sealing and anti-tamper validation.",
      "Display a live public scoreboard updated in real time as judges finalized round scores.",
      "Generate automated, verifiable digital certificates with unique QR verification codes.",
    ],
    contributions: [
      "Designed PostgreSQL relational database schema with Prisma ORM handling participants, categories, judges, and scores.",
      "Developed responsive frontend interface in Next.js and Tailwind CSS optimized for mobile delegate check-in.",
      "Implemented server-side validation and JWT authentication for administrators and tournament adjudicators.",
      "Integrated PDF generation microservice for on-demand participant credential badges and winner certificates.",
      "Maintained 99.9% uptime during the 3-day live campus competition with zero score dispute incidents.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Requirements & Schema Design",
        description:
          "Mapped competition categories (Tilawah, Hifzh, Tartil) into normalized relational entities.",
      },
      {
        phase: "Phase 2: Authentication & Judge Scoring Flow",
        description:
          "Constructed isolated judge evaluation forms with validation guards against missing score parameters.",
      },
      {
        phase: "Phase 3: Real-Time Scoreboard & Caching",
        description:
          "Deployed ISR (Incremental Static Regeneration) and edge API routes for instantaneous spectator score updates.",
      },
      {
        phase: "Phase 4: Operational Deployment",
        description:
          "Conducted stress testing, barcode scanner integration for event gate check-in, and post-event data archiving.",
      },
    ],
    results: [
      "Processed 320+ delegate submissions across 8 distinct competition categories seamlessly.",
      "Reduced score tabulation and announcement turnaround time from 4 hours to under 8 minutes.",
      "Earned official recognition from university student affairs for outstanding event modernization.",
    ],
    links: {
      github: "https://github.com/fakhri-dev/mtq-competition-portal",
      demo: "https://mtq-pcr.example.org",
    },
    visualHighlights: [
      {
        title: "Jury Real-Time Scoring Interface",
        type: "screenshot",
        caption: "Responsive scoring rubric with automated subtotal calculation and submission confirmation.",
        colorAccent: "#526B83",
      },
      {
        title: "Relational Schema Architecture",
        type: "diagram",
        caption: "Entity-Relationship model linking delegates, events, judge rubrics, and certified results.",
        colorAccent: "#264653",
      },
    ],
  },
  {
    slug: "editorial-portfolio-platform",
    title: "Editorial Portfolio & Interactive Creative Archive",
    category: "Software Engineering",
    shortDescription:
      "Minimalist editorial portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS, engineered for high typographic clarity.",
    year: "2024",
    tools: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    featured: false,
    thumbnail: "/images/projects/portfolio-web.svg",
    clientOrOrg: "Personal Engineering Project",
    role: "Frontend Architect & UI Designer",
    overview:
      "The exact digital portfolio platform you are navigating today. Designed strictly following editorial design principles: generous whitespace, high-contrast typography, warm off-white tones, subtle micro-interactions, and instant multi-category filtering.",
    background:
      "Most developer portfolio templates lean toward flashy neon animations or generic SaaS aesthetic clones. This project was conceived to present dual-discipline capabilities (Software Engineering + 3D Art) with the dignity, restraint, and deliberate curation of a fine architectural or editorial monograph.",
    objectives: [
      "Enforce strict typographic hierarchy using Inter, Geist Sans, and JetBrains Mono.",
      "Implement client-side instant category filtering across 5 distinct creative/engineering disciplines.",
      "Support frictionless Dark / Light mode transitions honoring the editorial palette.",
      "Achieve 100/100 Google Lighthouse scores across Performance, Accessibility, and Best Practices.",
    ],
    contributions: [
      "Structured clean Next.js App Router architecture with modular server and client components.",
      "Authored custom SVG architectural thumbnails illustrating each project's essence without heavy image bloat.",
      "Implemented accessible interactive components including one-click clipboard copy with feedback toasts.",
      "Created responsive mobile navigation drawer with keyboard accessibility and focus trapping.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Design System & Color Tokens",
        description:
          "Defined strict palette tokens: Off-white (#F8F8F6), Near-Black (#171717), Muted Blue (#526B83), and Light Gray (#E5E5E5).",
      },
      {
        phase: "Phase 2: Component Engineering",
        description:
          "Built modular ProjectCard, CategoryFilter, ExperienceTimeline, and CertificationCard components.",
      },
      {
        phase: "Phase 3: Performance & Accessibility Tuning",
        description:
          "Validated ARIA labels, semantic landmark elements, keyboard navigation, and zero layout shifts.",
      },
    ],
    results: [
      "Lightning-fast page load times with sub-50ms client-side route transitions.",
      "Fully responsive down to 360px mobile screens up to 4K ultra-wide monitors.",
    ],
    links: {
      github: "https://github.com/fakhri-dev/personal-portfolio",
      demo: "https://fakhri-portfolio.vercel.app",
    },
    visualHighlights: [
      {
        title: "Editorial Design System Spec",
        type: "diagram",
        caption: "Typographic scale, color hierarchy, and grid rhythm documentation.",
        colorAccent: "#526B83",
      },
    ],
  },
  {
    slug: "visual-development-old-archipelago",
    title: "The Old Archipelago – Environmental Visual Development",
    category: "2D & Digital Artwork",
    shortDescription:
      "Atmospheric 2D environment concept paintings and cinematic color scripts exploring coastal Indonesian mythology.",
    year: "2023",
    tools: ["Photoshop", "Procreate", "Blender Grease Pencil", "Color Theory"],
    featured: false,
    thumbnail: "/images/projects/concept-archipelago.svg",
    clientOrOrg: "Creative Ideation & Worldbuilding",
    role: "Concept Artist & Illustrator",
    overview:
      "A collection of digital visual development paintings exploring atmospheric mood, cinematic color scripting, and spatial perspective for an imaginary coastal archipelago setting steeped in ancient maritime folklore.",
    background:
      "Before building heavy 3D production models, rapid 2D concept art establishes the emotional temperature, lighting direction, and shape language of animated scenes. This series explored how humid ocean mist, decaying wooden lighthouses, and limestone sea cliffs interact under tropical twilight.",
    objectives: [
      "Establish cohesive visual keys for animated storytelling and narrative production.",
      "Practice dramatic value groupings and atmospheric perspective using digital brushwork.",
      "Explore hybrid 2D/3D grease pencil workflows for rapid perspective staging.",
    ],
    contributions: [
      "Painted 6 hero visual development keys with full value structure and color temperature balance.",
      "Created compositional thumbnail studies exploring 1-point, 2-point, and wide-angle anamorphic perspectives.",
      "Authored color script progression tracking narrative emotional shifts from sunrise optimism to stormy tension.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Compositional Thumbnails",
        description:
          "Sketched small grayscale silhouettes to lock in strong focal points and clear foreground-midground-background planes.",
      },
      {
        phase: "Phase 2: Color Scripting",
        description:
          "Applied color temperature palettes balancing warm golden highlights against deep oceanic teals.",
      },
      {
        phase: "Phase 3: Texturing & Atmosphere",
        description:
          "Rendered water reflections, atmospheric sea mist, and weathered architectural surfaces.",
      },
    ],
    results: [
      "Serves as the visual foundation for upcoming short animated concepts and personal 3D environment studies.",
      "Featured on curated regional digital art portfolios.",
    ],
    links: {
      artstation: "https://artstation.com/fakhri3d",
      instagram: "https://instagram.com/fakhri.art3d",
    },
    visualHighlights: [
      {
        title: "Twilight Harbor Color Key",
        type: "render",
        caption: "Warm lantern lights reflecting against calm ocean tides under deep indigo twilight skies.",
        colorAccent: "#526B83",
      },
    ],
  },
];
