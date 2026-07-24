import React from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="All Projects"
          description="Each project represents a unique challenge and my approach to solving it with clean code, thoughtful design, and measurable impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
