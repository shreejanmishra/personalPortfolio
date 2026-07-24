import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ label, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-400 mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-white/40 text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
