import {
  Briefcase,
  Code2,
  GraduationCap,
  Rocket,
  Globe,
  BarChart3,
  ShoppingCart,
  ListTodo,
  Package,
} from "lucide-react";

export const personalInfo = {
  name: "Shreejan Mishra",
  title: "Full Stack Engineer",
  subtitle: "Building Scalable, High-Performance Web Experiences",
  email: "shrmiswork@gmail.com",
  phone: "+91 96720-26985",
  location: "Bengaluru, 560035, India",
  linkedin: "https://www.linkedin.com/in/shreejan-mishra-425a251b2/",
  github: "https://github.com/shreejanmishra",
  summary:
    "Full Stack Engineer with nearly 4 years of experience building scalable, high-performance web applications using React.js and Node.js. Proven ability to deliver measurable business impact — automating workflows that reduced 30+ FTE effort, optimizing load times by 90%, and improving user efficiency by 60–75%. Strong expertise in UI/UX design, performance optimization, and CI/CD pipelines.",
};

export const skills = {
  "Frontend Development": [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Redux",
    "Jest",
    "Vitest",
    "Axios",
  ],
  "Design & Visualization": [
    "Figma",
    "Ant Design",
    "Material UI",
    "Tailwind CSS",
    "D3.js",
    "WCAG",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
  ],
  DevOps: ["Git/GitHub", "CI/CD", "Linux", "Vercel", "Webpack", "Vite", "Docker"],
  "Project Management": ["Jira", "Agile SDLC", "Confluence"],
  "AI Productivity Tools": [
    "Antigravity",
    "GitHub Copilot",
    "Claude Sonnet/Opus",
  ],
};

export const experiences = [
  {
    company: "Edastra",
    role: "Founding Engineer (Co-Founder)",
    period: "Nov 2025 — May 2026",
    location: "Bengaluru, India",
    icon: Rocket,
    color: "accent",
    highlights: [
      "Built a production-ready edutainment web application from scratch as the founding developer.",
      "Designed and implemented end-to-end UX & UI with reusable component architecture.",
      "Built the backend using Node.js and Express, including REST API endpoints consumed by the frontend.",
      "Designed and integrated MongoDB to store and serve beta tester responses.",
      "Delivered a stable beta used for investor demos — received 13,000+ user responses in 3 months.",
      "Built an interactive investment pitch dashboard reviewed by 4 VCs.",
    ],
  },
  {
    company: "State Street",
    role: "Software Development Engineer (Senior Associate)",
    period: "Jan 2022 — Oct 2025",
    location: "Bengaluru, India",
    icon: Briefcase,
    color: "primary",
    projects: [
      {
        name: "Resiliency Management Intelligence",
        details: [
          "Automated data validation across 50+ parameters, reducing manual recovery effort of ~30 Full-Time Employees.",
          "Optimized UI performance by 70% and increased validation efficiency by 75%.",
          "Streamlined CI/CD image builds, cutting build time by 80%.",
          "Debugged and resolved backend issues across Python services supporting the data validation pipeline.",
          "Trained contractors and end users, and onboarded a new client through internal stakeholder presentations.",
        ],
      },
      {
        name: "Finetuning Service",
        details: [
          "Designed and built the UI from scratch for an internal fine-tuning pipeline that ingests SOPs as training data for LLMs, boosting employee efficiency by 60%.",
          "Made the training workflow intuitive for data scientists — seamless SOP uploads, model configuration, and monitoring — reducing onboarding time by 60%.",
          "Implemented build and performance optimizations for 65% faster initial load and up-to 90% faster future loads.",
        ],
      },
      {
        name: "PIMCO Shadow NAV",
        details: [
          "Validated Multi-Currency Horizon NAV system against PIMCO's Geneva NAV system for data reconciliation, enabling decommissioning of Geneva and saving 5 FTEs per quarter.",
          "Built interactive comparison views, automated discrepancy flagging, and audit-trail UI — boosting analyst efficiency by 70%.",
          "Managed CI/CD pipeline and production deployments, enabling the team to operate with 1 less FTE.",
        ],
      },
    ],
  },
];

export const education = {
  school: "SRM Institute of Science & Technology",
  degree: "Bachelor of Technology, Computer Science & Engineering",
  cgpa: "8.4",
  period: "Jul 2018 — May 2022",
  location: "Chennai, India",
  icon: GraduationCap,
};

export const projects = [
  {
    id: "zageno",
    title: "Zageno",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "A production-grade e-commerce web application featuring ACID-compliant transactions, optimized MongoDB data layer with B-Tree indexing for instant keyword searches, and bulkWrite for O(1) inventory deductions. Includes pagination, React Query caching, hardened security with Zod validation and rate-limiting, and a Dockerized production deployment.",
    tech: [
      "React 19",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Docker",
    ],
    icon: ShoppingCart,
    color: "from-orange-500 to-rose-500",
    cardColor: "from-orange-500/10 to-rose-500/10",
    borderColor: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/40",
    github: "https://github.com/shreejanmishra",
    highlights: [
      "ACID transactions preventing phantom inventory",
      "MongoDB $text B-Tree indexing for instant search",
      "Multi-stage Docker container with non-root security",
      "Chunk-split & minified Vite production builds",
    ],
  },
  {
    id: "edastra",
    title: "Edastra",
    subtitle: "Edutainment Web Application",
    description:
      "A production-ready edutainment platform built from scratch as the founding developer. Features end-to-end UX & UI with reusable components, Node.js/Express backend with REST APIs, and MongoDB integration for beta tester data. Delivered a stable beta used for investor demos that collected 13,000+ user responses in 3 months.",
    tech: [
      "React",
      "Tailwind CSS",
      "D3.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vite",
      "Vercel",
    ],
    icon: Globe,
    color: "from-primary-500 to-blue-500",
    cardColor: "from-primary-500/10 to-blue-500/10",
    borderColor: "border-primary-500/20",
    hoverBorder: "hover:border-primary-500/40",
    liveUrl: "https://edastra.vercel.app",
    github: "https://github.com/shreejanmishra",
    highlights: [
      "13,000+ user responses through beta testing in 3 months",
      "End-to-end UX & UI with reusable component architecture",
      "REST API endpoints with MongoDB integration",
      "WCAG-compliant accessible design",
    ],
  },
  {
    id: "shivam-packaging",
    title: "Shivam Packaging",
    subtitle: "Freelance Business Website",
    description:
      "A production-ready business website built from scratch in a week for a freelance client. Gathered requirements directly from the client, discussed implementation plan, and delivered an optimized webapp with fast load times and smooth interactions. Features responsive design and WCAG compliance.",
    tech: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Vercel CI/CD",
      "WCAG",
      "Responsive",
      "Google Stitch",
    ],
    icon: Package,
    color: "from-emerald-500 to-teal-500",
    cardColor: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    liveUrl: "https://shivam-packaging.vercel.app",
    github: "https://github.com/shreejanmishra",
    highlights: [
      "Delivered production-ready app in one week",
      "Client requirements gathering & implementation planning",
      "Optimized for fast load times & smooth interactions",
      "Responsive & WCAG-accessible design",
    ],
  },
  {
    id: "edastra-pitch",
    title: "Edastra Pitch",
    subtitle: "Interactive Investment Pitch Dashboard",
    description:
      "An interactive, data-driven pitch dashboard built from scratch to present Edastra's investment opportunity to venture capitalists. Designed and implemented end-to-end development with dynamic D3.js visualizations and responsive design. Successfully reviewed by 4 VCs.",
    tech: [
      "React",
      "Tailwind CSS",
      "D3.js",
      "Vite",
      "Vercel CI/CD",
      "WCAG",
      "Responsive",
    ],
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    cardColor: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    liveUrl: "https://edastra-pitch.vercel.app",
    github: "https://github.com/shreejanmishra",
    highlights: [
      "Reviewed by 4 venture capital firms",
      "Interactive D3.js data visualizations",
      "End-to-end design and development",
      "WCAG-compliant & responsive layout",
    ],
  },
  {
    id: "spry-task-management",
    title: "SPRY Task Management",
    subtitle: "Modern Task Management Application",
    description:
      "A highly responsive task management application with complete CRUD operations, dashboard metrics, client-side routing, and localStorage persistence. Features bulk operations, glassmorphic UI, React Context state management, debounced search, pagination, and extensive performance optimizations using useMemo, useCallback, and React.memo.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "localStorage",
      "Vite",
    ],
    icon: ListTodo,
    color: "from-cyan-500 to-blue-500",
    cardColor: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    github: "https://github.com/shreejanmishra",
    highlights: [
      "Bulk operations with multi-select functionality",
      "Extensive React performance optimizations",
      "Debounced search & pagination for smooth 60fps UX",
      "Optimized Vite build with dependency chunking",
    ],
  },
];

export const impactMetrics = [
  { value: "30+", label: "FTEs Automated", suffix: "" },
  { value: "90", label: "Load Time Reduction", suffix: "%" },
  { value: "13K+", label: "Beta User Responses", suffix: "" },
  { value: "4", label: "Years Experience", suffix: "" },
];
