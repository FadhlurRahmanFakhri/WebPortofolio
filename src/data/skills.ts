export interface SkillItem {
  name: string;
  category: "Software Engineering & IT" | "Cloud & Cybersecurity" | "3D & Digital Creative";
  level: "Proficient" | "Advanced" | "Intermediate";
  description: string;
  keywords: string[];
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: SkillItem[];
}

export const skillGroups: SkillCategoryGroup[] = [
  {
    id: "software-engineering",
    title: "Software Engineering & IT",
    subtitle: "Core Computing, Computer Vision & Web Systems",
    description:
      "Deep foundational understanding of algorithmic problem solving, machine learning applied to computer vision pipelines, and production-ready full-stack web applications.",
    skills: [
      {
        name: "Python",
        category: "Software Engineering & IT",
        level: "Advanced",
        description:
          "Primary language for data manipulation, computer vision scripting, machine learning modeling, and automation tooling.",
        keywords: ["NumPy", "OpenCV", "TensorFlow", "Scripting", "Matplotlib"],
      },
      {
        name: "Computer Vision",
        category: "Software Engineering & IT",
        level: "Advanced",
        description:
          "Image preprocessing, morphological operations, contour detection, homography perspective warping, and real-time video stream analytics.",
        keywords: ["OpenCV", "Video Analytics", "ROI Filtering", "Homography"],
      },
      {
        name: "CNN (Convolutional Neural Networks)",
        category: "Software Engineering & IT",
        level: "Proficient",
        description:
          "Designing, training, and fine-tuning convolutional architectures for feature extraction, facial expression recognition, and visual classification.",
        keywords: ["TensorFlow", "Keras", "Deep Learning", "Classification"],
      },
      {
        name: "Haar Cascade Classifiers",
        category: "Software Engineering & IT",
        level: "Advanced",
        description:
          "Rapid object and face localization on edge devices using integral image representations and cascade boosted classifiers for low-latency detection.",
        keywords: ["Face Detection", "Real-Time Tracking", "Low-Latency CPU"],
      },
      {
        name: "Web Development",
        category: "Software Engineering & IT",
        level: "Proficient",
        description:
          "Building responsive, high-performance web applications using modern component-driven architectures, TypeScript, and utility CSS.",
        keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
      },
      {
        name: "Database Fundamentals",
        category: "Software Engineering & IT",
        level: "Intermediate",
        description:
          "Relational database modeling, query optimization, entity-relationship schemas, and ORM integration.",
        keywords: ["PostgreSQL", "MySQL", "Prisma ORM", "SQL Schema"],
      },
      {
        name: "Programming Fundamentals",
        category: "Software Engineering & IT",
        level: "Advanced",
        description:
          "Object-oriented programming, data structures, algorithm design, version control, and clean code principles.",
        keywords: ["OOP", "Data Structures", "Git", "Clean Code"],
      },
    ],
  },
  {
    id: "cloud-cybersecurity",
    title: "Cloud & Cybersecurity",
    subtitle: "Infrastructure, Threat Defense & Network Architecture",
    description:
      "Certified knowledge in cloud computing primitives, network architecture defense, ethical penetration testing concepts, and information security hygiene.",
    skills: [
      {
        name: "AWS Cloud Foundations",
        category: "Cloud & Cybersecurity",
        level: "Intermediate",
        description:
          "Certified understanding of core AWS services (EC2, S3, RDS, IAM, VPC), cloud economics, shared responsibility model, and architectural best practices.",
        keywords: ["AWS Academy Graduate", "S3", "EC2", "IAM", "Cloud Economics"],
      },
      {
        name: "Ethical Hacking",
        category: "Cloud & Cybersecurity",
        level: "Intermediate",
        description:
          "Reconnaissance, vulnerability scanning, network traffic analysis, privilege escalation vectors, and authorized defense countermeasures.",
        keywords: ["Cisco Certified", "Vulnerability Assessment", "Nmap", "Wireshark"],
      },
      {
        name: "Network Security & Defense",
        category: "Cloud & Cybersecurity",
        level: "Proficient",
        description:
          "Firewall configuration, packet filtering, network segmentation, IDS/IPS concepts, and perimeter threat mitigation.",
        keywords: ["Network Defense Essentials", "Packet Inspection", "Subnetting"],
      },
      {
        name: "Cybersecurity Fundamentals",
        category: "Cloud & Cybersecurity",
        level: "Proficient",
        description:
          "Confidentiality-Integrity-Availability (CIA) triad, cryptographic primitives, authentication protocols, and security incident response basics.",
        keywords: ["CIA Triad", "Cryptography", "Identity Access", "Security Hygiene"],
      },
    ],
  },
  {
    id: "3d-digital-creative",
    title: "3D & Digital Creative",
    subtitle: "Spatial Design, Digital Assets & Motion Production",
    description:
      "Hands-on studio experience crafting production-grade 3D assets, stylized environments, character deformation armatures, and animated storytelling.",
    skills: [
      {
        name: "Blender 3D Suite",
        category: "3D & Digital Creative",
        level: "Advanced",
        description:
          "Mastery of polygonal modeling, curve modeling, modifier stacks, geometry nodes basics, and custom pipeline workflows.",
        keywords: ["Polygonal Modeling", "Modifier Stacks", "Hard Surface", "Low/High Poly"],
      },
      {
        name: "Environment Modeling",
        category: "3D & Digital Creative",
        level: "Advanced",
        description:
          "Designing modular architectural structures, stylized organic props, terrain blocking, and immersive worldbuilding sets.",
        keywords: ["Modular Assets", "Architectural Sets", "Set Dressing", "Foliage"],
      },
      {
        name: "3D Animation",
        category: "3D & Digital Creative",
        level: "Proficient",
        description:
          "Keyframe animation principles, anticipation, timing, easing, walk/run cycles, lip-sync phonemes, and expressive acting sequences.",
        keywords: ["Action Editor", "Graph Curves", "Timing & Spacing", "Keyframing"],
      },
      {
        name: "Character Modeling & Rigging",
        category: "3D & Digital Creative",
        level: "Intermediate",
        description:
          "Bipedal character topology, armature construction, IK/FK bone setups, weight paint calibration, and facial shape keys.",
        keywords: ["Armature Setup", "Weight Painting", "IK/FK Switch", "Shape Keys"],
      },
      {
        name: "Prop Modeling & Asset Optimization",
        category: "3D & Digital Creative",
        level: "Advanced",
        description:
          "Creating game- and animation-ready hard surface props with strict poly budgets, clean baking normals, and efficient LODs.",
        keywords: ["Clean Topology", "Normal Baking", "UV Layout", "Asset Optimization"],
      },
      {
        name: "Texturing & Shading",
        category: "3D & Digital Creative",
        level: "Proficient",
        description:
          "PBR map authoring (Albedo, Roughness, Metallic, Normal, Height), hand-painted stylized accents, and procedural node materials.",
        keywords: ["Substance Painter", "PBR Workflow", "Shader Nodes", "Hand-Painted"],
      },
      {
        name: "Lighting & Rendering (Cycles / Eevee)",
        category: "3D & Digital Creative",
        level: "Advanced",
        description:
          "Three-point cinematic lighting, atmospheric volumetrics, HDRI illumination, render pass composition, and GPU render optimization.",
        keywords: ["Cycles Engine", "Eevee", "Volumetrics", "Three-Point Lighting"],
      },
    ],
  },
];
