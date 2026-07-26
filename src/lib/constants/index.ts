import type {
  NavItem,
  ExperienceItem,
  SkillCategory,
  Project,
  ServiceItem,
  SocialLink,
  ArticleQuoteData,
} from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "/projects" },
  // { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const RESUME_URL = "/Ahmed_Abdelsalam_Resume.pdf";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "vbookingFullStack",
    title: "Full Stack Engineer",
    company: "VBooking",
    companyColor: "rgb(var(--color-primary-container))",
    period: "2024 - Present",
    isCurrent: true,
    description:
      "Promoted to drive full-stack enhancements for a high-traffic travel CRM serving prominent clients like Riva Trip and VioletSprings. Engineered scalable, client-facing B2C platforms and unified CRM dashboards by leveraging the Ant Design (AntD) UI development system to ensure structural visual consistency and rapid frontend component development. Integrated global external suppliers (Akbar and TBO Holidays) for automated flight and hotel booking systems. Architected a sophisticated Redis caching infrastructure to optimize external API request handling, drastically minimizing supplier API latency and overhead.",
    technologies: ["React.js", "Ant Design (AntD)", "Express.js", "Node.js", "Redis", "PostgreSQL", "Sequelize"],
  },
  {
    id: "vbookingBackend",
    title: "Backend Engineer",
    company: "VBooking",
    period: "2025 - 2026",
    description:
      "Architected and implemented a secure, multi-tenant payment infrastructure tailored for a specialized SaaS CRM environment. Applied advanced design patterns, utilizing the Abstract Factory pattern to decouple the core system and ensure seamless integration of multiple payment gateways including Tamara, Tabby, and NGenius. Modeled comprehensive Enhanced Entity-Relationship Diagrams (EERD) to enforce strict structural data constraints, optimizing PostgreSQL performance via balanced database normalization. Enforced elite-grade transactional security by designing a custom state machine with distributed locks, AES encryption, schema validation, and multi-layered webhook verification mechanisms (IP and header key validation).",
    technologies: ["Express.js", "Node.js", "PostgreSQL", "Sequelize", "Design Patterns", "Security & Encryption"],
  },
  {
    id: "mutqinAI",
    title: "Frontend Team Lead",
    company: "Mutqin AI",
    period: "Sep 2024 - Sep 2025",
    description:
      "Spearheaded the frontend engineering team to orchestrate a complete architectural refactor and migration of the AI content platform from Vite to Next.js, implementing a modular Atomic Design structure. Championed application performance by pivoting the core rendering strategy toward SSR and SSG to maximize edge-caching via CDNs. Successfully mitigated client-side hydration bottlenecks by replacing Tiptap with a custom Quill configuration and optimizing internationalization (next-intl) to run natively as Server Components. Overhauled the platform's authentication architecture, implementing a secure dual-token JWT mechanism (short-lived tokens in session storage and long-lived tokens in secure cookies with strict TTL settings), managed via Redux Toolkit (RTK).",
    technologies: [
      "Next.js",
      "Vite",
      "Redux Toolkit (RTK)",
      "next-intl",
      "Quill",
      "Atomic Design",
      "JWT Security",
      "SSR/SSG",
    ],
  },
  {
    id: "advertisingAgencyRemote",
    title: "Frontend Engineer (Contract)",
    company: "Advertising Agency",
    period: "Mar 2024 - Sep 2025",
    description:
      "Engineered and optimized high-conversion, hyper-targeted landing pages for critical marketing campaigns using Next.js, implementing advanced performance techniques (code-splitting, lazy loading, and caching) to achieve lightning-fast response times as low as 500ms and exceed Core Web Vitals, SEO, and accessibility standards. Architected scalable, maintainable UI solutions using clean architecture and Atomic Design principles. Designed and implemented highly intuitive, dynamic lead-generation forms featuring frictionless UX/UI to maximize conversion rates. Collaborated cross-functionally with designers and growth marketers to align visual aesthetics with target audience personas, resulting in seamless user journeys and boosted lead capture performance.",
    technologies: ["Next.js", "React.js", "Dynamic Forms", "UX Optimization", "Core Web Vitals", "Tailwind CSS"],
  },
  {
    id: "3teebFullStack",
    title: "Full Stack Developer",
    company: "3TEEB",
    period: "2023 - 2024",
    description:
      "Architected and led the end-to-end development of a high-frequency algorithmic trading platform. Initially engineered an automated Telegram trading bot that ingested real-time trading signals via TradingView webhooks to execute instant buy/sell orders across connected Binance accounts. Scaled the architecture into a comprehensive web platform featuring risk-segregated investment funds, allowing users to securely bind their exchange accounts via APIs and subscribe to automated portfolios based on their risk tolerance. Developed responsive, dynamic dashboards using Flask to display real-time market prices and user portfolios, while implementing elite-grade security and encryption protocols for financial transactions.",
    technologies: [
      "Flask",
      "Python",
      "Telegram Bot API",
      "Binance API",
      "Webhooks",
      "Real-time Data",
      "Financial Security",
    ],
  },
  {
    id: "freelanceMostaql",
    title: "Freelance Software Engineer",
    company: "Mostaql Platform",
    period: "2021 - 2023",
    description:
      "Successfully delivered a diverse portfolio of high-quality software solutions for multiple regional clients. Architected and deployed intelligent Python-based Telegram bots integrated with OpenAI's ChatGPT API to automate natural language processing and user engagement. Developed dynamic, content-driven sports and football web platforms, optimizing frontend performance and backend data delivery. Managed the complete project lifecycle, from initial client requirement gathering and database schema design to final cloud deployment, ensuring agile delivery and high client satisfaction.",
    technologies: ["Python", "OpenAI API", "Telegram Bot API", "JavaScript", "Web Development", "Database Design"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backendSystems",
    title: "Backend & Systems",
    icon: "terminal",
    description: "Designing resilient, distributed systems tailored for high-throughput and low-latency performance.",
    skills: ["Go", "Node.js", "Python", "gRPC", "Kafka"],
  },
  {
    id: "dataStorage",
    title: "Data Storage",
    icon: "storage",
    description: "",
    skills: [],
    proficiencies: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "cloud",
    description: "",
    skills: ["Kubernetes", "Docker", "AWS", "Terraform"],
  },
  {
    id: "frontendDev",
    title: "Frontend Development",
    icon: "web",
    description: "Building performant, accessible, and highly interactive user interfaces.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "fullStackArchitecture",
    title: "Full-Stack Website Architecture",
    description:
      "Designing and building robust, scalable web applications from the ground up, ensuring seamless integration between frontend user experiences and complex backend systems.",
    icon: "architecture",
    technologies: ["React", "Node.js", "Python"],
  },
  {
    id: "webPerformance",
    title: "Web Performance Engineering",
    description:
      "Optimizing web applications for blazing-fast load times and smooth interactions. Identifying bottlenecks and implementing caching, lazy loading, and asset minification.",
    icon: "speed",
    technologies: ["Lighthouse", "Web Vitals", "Redis"],
  },
  {
    id: "devopsCloudInfrastructure",
    title: "DevOps & Cloud Infrastructure",
    description:
      "Establishing reliable CI/CD pipelines and managing cloud infrastructure to ensure continuous delivery, maximum security, and high availability for mission-critical systems.",
    icon: "cloud_sync",
    technologies: ["Docker", "AWS", "Kubernetes"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "wlanMonitor",
    title: "WLAN Network Monitor",
    description:
      "A real-time home network tracking and automation ecosystem that aggregates, normalizes, and monitors active device connections across disparate network hardware (Zyxel Routers and TP-Link Extenders). Engineered with a robust, crash-resilient architecture featuring an autonomous safe-fail recovery loop. Integrates a bidirectional Telegram Bot API for live remote runtime command execution, alongside a secure cryptographic layer managing encrypted router credentials and session states.",
    technologies: ["Python", "Telegram Bot API", "Data Normalization", "Cryptography", "Network Protocols", "YAML"],
    href: "https://github.com/ahmedzzabdalla0/Network-Monitor",
    category: "automation",
    isFeatured: true,
    coverColor: "#35A5F9",
    coverGradient: true,
    logoSrc: "/images/projects/wlan-monitor.png",
    logoAlt: "WLAN Network Monitor Logo",
  },
  {
    id: "secureAuthEcosystem",
    title: "Secure Advanced Auth Engine",
    description:
      "A secure, production-ready full-stack authentication system built with NestJS and React (Atomic Design). It implements advanced token management, isolating refresh tokens in HttpOnly cookies and access tokens in-memory to eliminate XSS risks. Features a custom session breach containment mechanism, CSRF protection, and Docker containerization.",
    technologies: ["NestJS", "React.js", "MongoDB", "Docker", "JWT Security", "Atomic Design", "CSRF Protection"],
    href: "https://github.com/ahmedzzabdalla0/auth-backend",
    category: "full-stack",
    coverColor: "rgb(79 70 229 / 0.88)",
    coverGradient: true,
    logoIcon: "shield_lock",
  },
  {
    id: "nexusCoreInfrastructure",
    title: "Nexus Core Infrastructure",
    description:
      "A scalable, multi-region Kubernetes cluster deployment for a high-traffic fintech application. Automated via Terraform with zero-downtime deployment pipelines.",
    technologies: ["Kubernetes", "Terraform", "AWS"],
    href: "https://vbooking.ai/",
    category: "devops",
    coverColor: "#7A808D",
    logoSrc: "/images/projects/vbooking.svg",
    logoAlt: "Vbooking Logo",
  },
  {
    id: "authXMicroservice",
    title: "AuthX Microservice",
    description: "A high-performance JWT authentication service written in Go, handling 10k+ requests per second.",
    technologies: ["Golang", "Redis"],
    href: "https://mutqinai.com/",
    category: "full-stack",
    coverColor: "#692BEF",
    logoSrc: "/images/projects/mutqinai.svg",
    logoAlt: "Mutqinai Logo",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedabdelsalam0", icon: "link" },
  { label: "GitHub", href: "https://github.com/ahmedzzabdalla0", icon: "code" },
];

export const CONTACT_EMAIL = "ahmedzzabdalla0@gmail.com";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjelnwv";

export const ARTICLE_QUOTE: ArticleQuoteData = {
  quote: "I write about software engineering, system design, and the occasional deep dive into new tech.",
  mediumUrl: "#",
};

export const SITE_OWNER = {
  name: "Ahmed Mohamed Abdelsalam",
  title: "Full-Stack Engineer",
  tagline: "+5 Years Experience. Passionate about scalable web architectures.",
  bio: "I am a Senior Backend Engineer and Full Stack Developer with a passion for building scalable, high-performance applications. I specialize in distributed systems, microservices architecture, and clean code principles.",
  heroHeadline: "Architecting robust backend systems.",
  aboutHeadline: "Let's build something exceptional.",
  aboutSubtitle:
    "Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  photoAlt: "Ahmed Mohamed Abdelsalam - Senior Backend Engineer",
};
