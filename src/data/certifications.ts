export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  issueDate: string;
  credentialId: string;
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
    issueDate: "2024",
    credentialId: "AWS-ACAD-2024-CF8912",
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
    issueDate: "2024",
    credentialId: "CSCO-EH-2024-99812",
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
    issueDate: "2023",
    credentialId: "CSCO-CE-2023-44120",
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
    issueDate: "2023",
    credentialId: "ECC-NDE-2023-1104",
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
    issueDate: "2023",
    credentialId: "ECC-EHE-2023-7729",
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
];
