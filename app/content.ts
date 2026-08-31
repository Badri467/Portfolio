import type { CertificateItem } from "./components/Certifications";

export const profile = {
  name: "Badri Narayana Kancharla",
  role: "Full-Stack & AI Systems Engineer",
  location: "Hyderabad, India",
  intro:
    "I build AI-powered products, backend systems, and production software that turns complex ideas into reliable user experiences.",
  status: ["Oracle ASE Intern", "BE IT, Vasavi College", "Hyderabad"],
  resume: "/resume-badri-narayana-kancharla.pdf",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/badri-narayana-kancharla" },
  { label: "GitHub", href: "https://github.com/Badri467" },
  { label: "LeetCode", href: "https://leetcode.com/u/Badri_Narayana/" },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=badrinarayana467%40gmail.com",
  },
];

export const navSections = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export type Metric = {
  value: string;
  label: string;
  href?: string;
};

export const metrics: Metric[] = [
  { value: "9.55", label: "GPA / 10.0" },
  { value: "CodeChef 2★", label: "Competitive programming", href: "https://www.codechef.com/" },
  {
    value: "400+",
    label: "Problems solved on LeetCode and CodeChef",
    href: "https://leetcode.com/u/Badri_Narayana/",
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2026 — Present",
    title: "Associate Software Engineer Intern",
    company: "Oracle",
    points: [
      "Built a secure SMS retargeting service with multiprocessing workers, API integrations, rule-based targeting, and campaign observability.",
      "Developed REST APIs with caching, retry logic, and structured logging to cut redundant calls and speed incident debugging.",
      "Built a Smart Offers AI Agent that converts customer behavior signals into personalized e-commerce recommendations.",
      "Fixed Fortify findings with parameterized queries and input validation to reduce SQL injection and sanitization risk.",
    ],
  },
  {
    period: "Jun 2024 — Jul 2024",
    title: "AI & Cloud Technology Virtual Internship",
    company: "IBM SkillsBuild + Edunet Foundation",
    points: [
      "Gained hands-on experience deploying machine learning models on IBM Cloud infrastructure.",
      "Completed certified learning in artificial intelligence and cloud computing through IBM SkillsBuild.",
    ],
  },
];

export type Project = {
  name: string;
  date: string;
  stack: string;
  href?: string;
  linkLabel: string;
  summary: string;
  points: string[];
};

export const projects: Project[] = [
  {
    name: "Agentic RAG for Legal Research",
    date: "Aug 2026",
    stack: "FastAPI, LangGraph, Pinecone, BERT, AWS ECS",
    href: "https://github.com/Badri467/LegalRAG-LLM",
    linkLabel: "View source",
    summary:
      "An agentic legal research assistant that routes queries through legal-specific NER, hybrid dense/sparse retrieval, and a two-stage reranking pipeline before generating grounded answers.",
    points: [
      "Reached 97% retrieval accuracy and 95% top-10 precision with the full NER + hybrid + double-reranking pipeline, up from an 85% baseline.",
      "Held P95 response time to 500ms and deployed to AWS ECS behind an application load balancer with SSL termination.",
    ],
  },
  {
    name: "IT Incident Summarizer",
    date: "Jun 2025",
    stack: "React, Flask, RAG, ML, River",
    href: "https://github.com/Badri467/IT_Incident_Summariser",
    linkLabel: "View source",
    summary:
      "A reliability tool for SRE teams that compresses noisy incident logs into concise summaries and predicts root causes with an adaptive online model.",
    points: [
      "Built a hybrid RAG pipeline for high-volume, evolving incident data.",
      "Integrated feedback learning that outperformed static XGBoost and Decision Tree baselines.",
    ],
  },
  {
    name: "DubFlow",
    date: "Jun 2025",
    stack: "React, Node.js, Express, gTTS, FFmpeg",
    href: "https://github.com/Badri467/DubFlow/tree/main",
    linkLabel: "View source",
    summary:
      "A multilingual YouTube dubbing pipeline that turns transcripts into distributed audio processing jobs with resilient translation and transcript fallbacks.",
    points: [
      "Supported dubbing workflows across 32+ languages.",
      "Added recovery paths for missing transcripts and translation failures.",
    ],
  },
  {
    name: "Smart Offers AI Agent",
    date: "Oracle Internship",
    stack: "Signals, recommendations, e-commerce AI",
    linkLabel: "Oracle — Private",
    summary:
      "A behavior-aware offers engine that converts customer signals into personalized commerce recommendations and campaign logic.",
    points: [
      "Mapped shopper behavior, product context, and targeting rules into explainable offer decisions.",
      "Designed for practical campaign delivery, debugging, and measurable customer impact.",
    ],
  },
  {
    name: "Intelligent Pavement Damage Detection",
    date: "May 2025",
    stack: "Python, YOLOv8, CBAM, OpenCV",
    href: "https://github.com/Badri467/RoadDamage",
    linkLabel: "View source",
    summary:
      "A real-time computer vision pipeline for detecting pavement defects across diverse road conditions.",
    points: [
      "Enhanced YOLOv8 with a lightweight CBAM attention mechanism, lifting mAP@50 by 3.8% over the baseline.",
      "Built a defect detection and reporting flow for potholes, cracks, and surface damage.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["C++", "Java", "Python", "JavaScript", "C", "HTML/CSS"] },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "Node.js", "Express.js", "Flask", "REST APIs", "React"],
  },
  {
    title: "Data & Storage",
    skills: ["SQL", "MySQL", "MongoDB", "DBMS", "ETL", "Data Validation"],
  },
  {
    title: "Infrastructure",
    skills: ["Kubernetes", "Docker", "CI/CD", "Git", "Prometheus", "Log Monitoring"],
  },
];

export const education = {
  school: "Vasavi College of Engineering",
  degree: "BE in Information Technology",
  period: "2022 — 2026",
  gpa: "GPA 9.55 / 10.0",
};

export const certifications: CertificateItem[] = [
  {
    date: "2025",
    href: "/certificates/oci-ai-foundations.pdf",
    issuer: "Oracle Cloud Infrastructure",
    name: "OCI AI Foundations Associate",
    tag: "Cloud AI",
  },
  {
    date: "2024",
    href: "/certificates/edunet-ai-cloud-internship.pdf",
    issuer: "IBM SkillsBuild + Edunet Foundation",
    name: "AI & Cloud Technology Virtual Internship",
    tag: "Internship",
  },
  {
    date: "2025",
    href: "/certificates/ibm-ai-basics.pdf",
    issuer: "IBM SkillsBuild",
    name: "Getting Started with Artificial Intelligence",
    tag: "AI",
  },
  {
    date: "2025",
    href: "/certificates/ibm-journey-to-cloud.pdf",
    issuer: "IBM SkillsBuild",
    name: "Journey to Cloud: Envisioning Your Solution",
    tag: "Cloud",
  },
  {
    date: "2024",
    href: "/certificates/nptel-programming-in-java.pdf",
    issuer: "NPTEL",
    name: "Programming in Java — Top 1%",
    tag: "Java",
  },
  {
    date: "2023",
    href: "/certificates/nptel-joy-of-computing-python.pdf",
    issuer: "NPTEL",
    name: "The Joy of Computing Using Python — Top 1%",
    tag: "Python",
  },
  {
    date: "2025",
    href: "/certificates/oracle-dev-gym-databases-foundations.pdf",
    issuer: "Oracle Dev Gym",
    name: "Databases for Developers: Foundations",
    tag: "Database",
  },
  {
    date: "2024",
    href: "/certificates/ccna-introduction-to-networks.pdf",
    issuer: "Cisco Networking Academy",
    name: "CCNAv7: Introduction to Networks",
    tag: "Networking",
  },
  {
    date: "2025",
    href: "/certificates/dsac-web-development-leadership.pdf",
    issuer: "DSAC IT, Vasavi College of Engineering",
    name: "Web Development Leadership",
    tag: "Leadership",
  },
];

export type Achievement = {
  date: string;
  href?: string;
  name: string;
  summary: string;
  tag: string;
};

export const achievements: Achievement[] = [
  {
    date: "First year",
    href: "/achievements/first-year-merit.pdf",
    name: "Academic Excellence Merit Certificate",
    summary: "Recognized for academic performance in the first year of engineering.",
    tag: "Merit",
  },
  {
    date: "Second year",
    href: "/achievements/second-year-merit.pdf",
    name: "Academic Excellence Merit Certificate",
    summary: "Recognized for academic performance in the second year of engineering.",
    tag: "Merit",
  },
  {
    date: "Competition",
    href: "/achievements/codezee-third-place.pdf",
    name: "Codezee — 3rd place",
    summary: "Placed third at Codezee.",
    tag: "Coding",
  },
  {
    date: "Competition",
    name: "Krithomedh — 5th place",
    summary: "Placed fifth at Krithomedh.",
    tag: "Contest",
  },
  {
    date: "Ongoing",
    name: "400+ problems solved",
    summary: "CodeChef 2-Star with 400+ problems solved across LeetCode and CodeChef.",
    tag: "DSA",
  },
];

export type Interest = {
  name: string;
  summary: string;
  tag: string;
};

export const interests: Interest[] = [
  {
    name: "Reading comics",
    summary: "I enjoy visual storytelling, panel pacing, and character-driven worldbuilding.",
    tag: "Stories",
  },
  {
    name: "Watching anime",
    summary: "I like anime for its sharp visual style, long-form arcs, and imaginative systems.",
    tag: "Worlds",
  },
];

export const manhwaRecommendations = [
  "Revenge of the Iron-Blooded Sword Hound",
  "Absolute Sword Sense",
  "Star-Embracing Swordmaster",
  "The Regressed Mercenary's Machinations",
  "Return of the Mount Hua Sect",
  "Nano Machine",
  "Reformation of the Deadbeat Noble",
  "The Extra's Academy Survival Guide",
  "Swordmaster's Youngest Son",
  "Standard of Reincarnation",
  "Goblin Knight",
  "Heavenly Demon Can't Live a Normal Life",
  "Solo Max-Level Newbie",
  "Regressor Instruction Manual",
  "Academy's Genius Swordmaster",
  "Legend of the Reincarnated Demon God",
  "Myst, Might, Mayhem",
  "The Regressed Son of a Duke is an Assassin",
  "Terminally-Ill Genius Dark Knight",
  "Overpowered Sword",
  "Dungeon Odyssey",
  "I Killed an Academy Player",
  "Necromancer's Evolutionary Traits",
  "Talent-Swallowing Magician",
  "Kill the Dragon",
  "My Daughter is the Final Boss",
  "Damn Reincarnation",
];

export const animeRecommendations = [
  "Demon Slayer",
  "Death Note",
  "Naruto",
  "One Piece",
  "Black Clover",
  "Attack on Titan",
  "Dragon Ball Z",
  "Kaguya-sama: Love Is War",
  "Bleach",
  "Inazuma Eleven",
  "Spy x Family",
  "My Hero Academia",
  "That Time I Got Reincarnated as a Slime",
  "The God of High School",
  "Tokyo Ghoul",
  "The Rising of the Shield Hero",
  "The Seven Deadly Sins",
  "Hyouka",
  "Blue Lock",
  "Kaiju No. 8",
  "Wind Breaker",
];
