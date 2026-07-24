import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`relative glass rounded-2xl overflow-hidden ${project.hoverBorder} transition-all duration-500 hover:shadow-lg hover:shadow-black/20`}
      >
        {/* Top gradient accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${project.cardColor} border ${project.borderColor}`}
              >
                <project.icon size={22} className="text-white/80" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 mt-0.5">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className="p-2 rounded-lg hover:bg-white/[0.06] text-white/30 hover:text-white/60 transition-all"
                >
                  <Github size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live site`}
                  className="p-2 rounded-lg hover:bg-white/[0.06] text-white/30 hover:text-white/60 transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <ArrowUpRight
                  size={14}
                  className={`mt-0.5 text-white/25 flex-shrink-0`}
                />
                <span className="text-sm text-white/40">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
