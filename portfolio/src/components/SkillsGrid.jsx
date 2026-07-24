import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

// Simple Icons (si) for tech brands
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiRedux,
  SiJest,
  SiVitest,
  SiAxios,
  SiFigma,
  SiAntdesign,
  SiMui,
  SiTailwindcss,
  SiD3,

  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithubactions,
  SiLinux,
  SiVercel,
  SiWebpack,
  SiVite,
  SiDocker,
  SiJira,
  SiConfluence,
  SiGithubcopilot,
  SiClaude,
  SiGoogle,
} from "react-icons/si";

import { RefreshCw, Accessibility } from "lucide-react";

/**
 * Maps each skill name to its corresponding icon component.
 * Falls back to null for skills without a matching icon.
 */
const skillIconMap = {
  // Frontend Development
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "HTML/CSS": SiHtml5,
  Redux: SiRedux,
  Jest: SiJest,
  Vitest: SiVitest,
  Axios: SiAxios,

  // Design & Visualization
  Figma: SiFigma,
  "Ant Design": SiAntdesign,
  "Material UI": SiMui,
  "Tailwind CSS": SiTailwindcss,
  "D3.js": SiD3,
  WCAG: Accessibility,

  // Backend Development
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Python: SiPython,
  FastAPI: SiFastapi,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,

  // DevOps
  "Git/GitHub": SiGit,
  "CI/CD": SiGithubactions,
  Linux: SiLinux,
  Vercel: SiVercel,
  Webpack: SiWebpack,
  Vite: SiVite,
  Docker: SiDocker,

  // Project Management
  Jira: SiJira,
  "Agile SDLC": RefreshCw,
  Confluence: SiConfluence,

  // AI Productivity Tools
  Antigravity: SiGoogle,
  "GitHub Copilot": SiGithubcopilot,
  "Claude Sonnet/Opus": SiClaude,
};

const skillCategoryColors = {
  "Frontend Development": "from-blue-500/20 to-indigo-500/20",
  "Design & Visualization": "from-pink-500/20 to-rose-500/20",
  "Backend Development": "from-emerald-500/20 to-green-500/20",
  DevOps: "from-orange-500/20 to-amber-500/20",
  "Project Management": "from-violet-500/20 to-purple-500/20",
  "AI Productivity Tools": "from-cyan-500/20 to-teal-500/20",
};

const skillCategoryBorders = {
  "Frontend Development": "border-blue-500/20",
  "Design & Visualization": "border-pink-500/20",
  "Backend Development": "border-emerald-500/20",
  DevOps: "border-orange-500/20",
  "Project Management": "border-violet-500/20",
  "AI Productivity Tools": "border-cyan-500/20",
};

const skillCategoryIconColors = {
  "Frontend Development": "text-blue-400/70",
  "Design & Visualization": "text-pink-400/70",
  "Backend Development": "text-emerald-400/70",
  DevOps: "text-orange-400/70",
  "Project Management": "text-violet-400/70",
  "AI Productivity Tools": "text-cyan-400/70",
};

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(skills).map(([category, items], idx) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          className={`glass rounded-xl p-5 border ${
            skillCategoryBorders[category] || "border-white/10"
          } hover:border-white/15 transition-all duration-300`}
        >
          <h4 className="text-sm font-semibold text-white/70 mb-3 tracking-wide">
            {category}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {items.map((skill) => {
              const IconComponent = skillIconMap[skill];
              const iconColor =
                skillCategoryIconColors[category] || "text-white/50";

              return (
                <span
                  key={skill}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md bg-gradient-to-r ${
                    skillCategoryColors[category] || "from-white/5 to-white/5"
                  } text-white/60 font-medium`}
                >
                  {IconComponent && (
                    <IconComponent className={`w-3.5 h-3.5 ${iconColor}`} />
                  )}
                  {skill}
                </span>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
