export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  issueDate: string;
  credentialId: string;
  image?: string;
  verificationUrl?: string;
  skillsVerified: string[];
  description: string;
}

export const certificationsData: Certification[] = [
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS) Academy",
    issuerBadge: "AWS Academy",
    issueDate: "2026",
    credentialId: "AWS-ACAD-2024-CF8912",
    image: "/images/certification/AWS.png",
    verificationUrl: "https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-foundations",
    skillsVerified: [
      "Cloud Architecture Primitives",
      "Amazon EC2, S3, RDS, & VPC",
      "IAM Identity & Access Management",
      "Cloud Economics & Total Cost of Ownership",
      "Shared Responsibility Security Model",
    ],
    description:
      "Formal academic completion verifying mastery of cloud concepts, security, architecture, pricing, and foundational services across the AWS global infrastructure.",
  },
  {
    id: "cisco-ethical-hacker",
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    issuerBadge: "Cisco",
    issueDate: "2026",
    credentialId: "CSCO-EH-2024-99812",
    image: "/images/certification/Ethical Hacker.png",
    verificationUrl: "https://www.credly.com/org/cisco/badge/ethical-hacker",
    skillsVerified: [
      "Ethical Penetration Testing Methodologies",
      "Reconnaissance & Footprinting",
      "Port & Vulnerability Scanning (Nmap)",
      "Exploitation Countermeasures",
      "Defensive Security Posture",
    ],
    description:
      "Comprehensive certification covering technical penetration testing ethics, vulnerability exploitation pathways, and remediation strategies to safeguard institutional systems.",
  },
  {
    id: "cisco-cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    issuerBadge: "Cisco",
    issueDate: "2024",
    credentialId: "CSCO-CE-2023-44120",
    image: "/images/certification/cse.png",
    verificationUrl: "https://www.credly.com/org/cisco/badge/cybersecurity-essentials",
    skillsVerified: [
      "Confidentiality, Integrity, & Availability (CIA)",
      "Malware Types & Attack Vectors",
      "Network Protocol Defense",
      "Firewalls & Access Control Lists",
      "Incident Response Fundamentals",
    ],
    description:
      "Foundational certification validating broad security knowledge, understanding of threat vectors, defense-in-depth security principles, and ethical responsibilities.",
  },
  {
    id: "network-defense-essentials",
    title: "Network Defense Essentials (NDE)",
    issuer: "EC-Council / Academic Partner",
    issuerBadge: "EC-Council",
    issueDate: "2024",
    credentialId: "ECC-NDE-2023-1104",
    image: "/images/certification/Sertifikat NDE_FadhlurRahmanFakhri.jpg",
    verificationUrl: "https://www.eccouncil.org/certificates/verify/",
    skillsVerified: [
      "Network Security Controls & Protocols",
      "Packet Filtering & Deep Inspection",
      "IDS / IPS Implementation",
      "Virtual Private Networks (VPN)",
      "Wireless Network Hardening",
    ],
    description:
      "Rigorous certification validating core competencies in defensive network architecture, perimeter security controls, encryption protocols, and traffic anomaly detection.",
  },
  {
    id: "ethical-hacking-essentials",
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council / Academic Partner",
    issuerBadge: "EC-Council",
    issueDate: "2024",
    credentialId: "ECC-EHE-2023-7729",
    image: "/images/certification/Sertifikat EHE_Fadhlur Rahman Fakhri.jpg",
    verificationUrl: "https://www.eccouncil.org/certificates/verify/",
    skillsVerified: [
      "Information Security Fundamentals",
      "Threat Assessment & Vulnerability Analysis",
      "Web Application Security Flaws (OWASP)",
      "Social Engineering Defense",
      "Security Remediation Reporting",
    ],
    description:
      "Validated comprehension of ethical hacking practices, legal compliance frameworks, reconnaissance tools, and foundational vulnerability remediation.",
  },
  {
    id: "mtcna-mikrotik",
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik Academy",
    issuerBadge: "MikroTik",
    issueDate: "2024",
    credentialId: "MT-MTCNA-2024-PCR",
    image: "/images/certification/MTCNA.png",
    skillsVerified: [
      "RouterOS Installation & Configuration",
      "Static & Dynamic Routing Primitives",
      "Firewall Filtering & Source/Destination NAT",
      "Bandwidth Management & Queues",
      "Wireless AP & Station Configurations",
    ],
    description:
      "Certification validating proficiency in MikroTik RouterOS and RouterBOARD hardware for enterprise networking, routing protocols, firewall rules, and traffic management.",
  },
  {
    id: "national-webinar-cybersecurity-tech",
    title: "Animation Webinar – Certificate of Participation",
    issuer: "Devata Studio",
    issuerBadge: "Seminar & Training",
    issueDate: "2025",
    credentialId: "DVT/WBN/V/2025/0386",
    image: "/images/certification/Webinar1.png",
    skillsVerified: [
      "Animation Workflow & Production Pipeline",
      "Creative Process in Animation",
      "Character Design & Visual Storytelling",
      "Insights into the International Animation Industry",
    ],
    description:
      "Webinar participation certificate recognizing insights and knowledge gained from an international animation session with Sashya Subono Halse, exploring animation workflows, creative processes, and professional experiences in the global animation industry.",
  },

  {
    id: "national-webinar-cybersecurity-tech",
    title: "Animation Webinar – Certificate of Participation",
    issuer: "Devata Studio",
    issuerBadge: "Seminar & Training",
    issueDate: "2024",
    credentialId: "CERT-W/DVT.STD/VI/2025/1833",
    image: "/images/certification/Sertifikat - Fadhlur Rahman Fakhri - CERT-W_DVT.STD.jpg",
    skillsVerified: [
      "Animation Production Workflow & Pipeline",
      "Creative Direction & Story Development",
      "Character Development & Visual Storytelling",
      "Animation Industry Insights & Filmmaking Experiences",
    ],
    description:
      "Webinar participation certificate recognizing insights and knowledge gained from an animation session with Indonesian animator and film director Ryan Adriandhy, exploring animation production, creative storytelling, character development, and professional experiences in the Indonesian animation industry.",
  },

  {
    id: "national-webinar-cybersecurity-tech",
    title: "National Polytechnic MTQ – University Representative",
    issuer: "Pangkajene Kepulauan State Polytechnic Of Agriculture",
    issuerBadge: "Participate",
    issueDate: "2024",
    credentialId: "NO. 129/PL22/SR/2024",
    image: "/images/certification/Sertifikat MTQ Politeknik Nasional - Fadhlur Rahman Fakhri.jpg",
    skillsVerified: [
      "University Representative Selection",
      "National-Level Competition Participation",
      "Qur'anic Competition Experience",
      "Discipline & Preparation",
    ],
    description:
      "Certificate recognizing participation as a representative of Politeknik Caltex Riau in the National Polytechnic Musabaqah Tilawatil Qur'an (MTQ), following the university's internal selection process. The event brought together polytechnic students from across Indonesia to participate in a national-level Qur'anic competition.",
  },

  {
    id: "national-webinar-cybersecurity-tech",
    title: "MTQ Certificate for University Students",
    issuer: "Lancang Kuning University",
    issuerBadge: "Participate",
    issueDate: "2025",
    credentialId: "SEM-IT-2024-8841",
    image: "/images/certification/Sertifikat MTQ UNILAK - Fadhlur Rahman Fakhri.jpg",
    skillsVerified: [
      "City-Level Qur'anic Competition",
      "University Student Participation",
      "Qur'anic Recitation & Islamic Learning",
      "Competition Preparation & Discipline",
    ],
    description:
      "Certificate recognizing participation as a contestant in a city-wide Musabaqah Tilawatil Qur'an (MTQ) competition for university students in Pekanbaru. The event provided an opportunity for students from various universities to participate in Qur'anic competitions and demonstrate their dedication to Islamic learning.",
  },

  {
    id: "national-webinar-cybersecurity-tech",
    title: "TOEIC Prediction Test",
    issuer: "Language Training Institution",
    issuerBadge: "Certificate of Achievement",
    issueDate: "2026",
    credentialId: "SEM-IT-2024-8841",
    image: "/images/certification/TOEIC-FadhlurRahmanFakhri.jpeg",
    skillsVerified: [
      "English Listening Comprehension",
      "English Reading Comprehension",
      "TOEIC Test Preparation",
      "English Language Proficiency Assessment",
    ],
    description:
      "Certificate recognizing participation in a TOEIC Prediction Test designed to assess English language proficiency through a simulated TOEIC examination. The test provided an opportunity to evaluate English listening and reading skills in preparation for the official TOEIC test.",
  },
];
