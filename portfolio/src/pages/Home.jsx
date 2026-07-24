import React from "react";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import SkillsGrid from "../components/SkillsGrid";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  // Show first 3 featured projects on home
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Featured Work"
            title="Selected Projects"
            description="A curated selection of projects that showcase my technical range and attention to detail."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
            >
              View all projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding py-20 md:py-28 relative">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <SectionHeader
            label="Expertise"
            title="Skills & Technologies"
            description="The tools and technologies I use to bring ideas to life."
          />
          <SkillsGrid />
        </div>
      </section>
    </div>
  );
};

export default Home;
