import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "../data/portfolioData";

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-500/30 via-white/10 to-transparent" />

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative pl-16 md:pl-20"
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-[17px] md:left-[23px] top-6 w-3 h-3 rounded-full border-2 ${
                exp.color === "accent"
                  ? "border-accent-400 bg-accent-400/20"
                  : "border-primary-400 bg-primary-400/20"
              }`}
            />

            {/* Card */}
            <div className="glass rounded-2xl p-6 md:p-8 hover:border-white/[0.12] transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <exp.icon
                      size={18}
                      className={
                        exp.color === "accent"
                          ? "text-accent-400"
                          : "text-primary-400"
                      }
                    />
                    <h3 className="text-lg md:text-xl font-display font-bold text-white">
                      {exp.company}
                    </h3>
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      exp.color === "accent"
                        ? "text-accent-400/70"
                        : "text-primary-400/70"
                    }`}
                  >
                    {exp.role}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0 text-white/30 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Content */}
              {exp.highlights && (
                <ul className="space-y-2">
                  {exp.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-3 text-sm text-white/45 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {exp.projects && (
                <div className="space-y-5">
                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx}>
                      <h4 className="text-sm font-semibold text-white/70 mb-2 flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-white/20" />
                        {proj.name}
                      </h4>
                      <ul className="space-y-1.5 ml-6">
                        {proj.details.map((d, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-3 text-sm text-white/40 leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/15 mt-2 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
