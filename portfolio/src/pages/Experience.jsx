import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsGrid from "../components/SkillsGrid";
import { education } from "../data/portfolioData";

const Experience = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Career"
          title="Experience & Education"
          description="My professional journey — from building enterprise applications at State Street to co-founding an edtech startup."
        />

        {/* Experience Timeline */}
        <div className="mb-20">
          <ExperienceTimeline />
        </div>

        {/* Education */}
        <div className="mb-20">
          <SectionHeader label="Education" title="Academic Background" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 md:p-8 hover:border-white/[0.12] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <GraduationCap size={22} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-white/50 text-sm">{education.school}</p>
                  <div className="flex items-center gap-4 mt-2 text-white/30 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {education.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {education.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <Award size={16} className="text-amber-400" />
                  <span className="text-sm font-medium text-amber-400/80">
                    CGPA {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div>
          <SectionHeader
            label="Expertise"
            title="Skills & Technologies"
            description="The tools and technologies I use to bring ideas to life."
          />
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
};

export default Experience;
