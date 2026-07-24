import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ChevronDown,
} from "lucide-react";
import { personalInfo, impactMetrics } from "../data/portfolioData";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-8%] w-[500px] h-[500px] bg-primary-500/[0.08] rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-15%] right-[-8%] w-[400px] h-[400px] bg-accent-500/[0.06] rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-purple-500/[0.05] rounded-full blur-[100px] animate-pulse-glow" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-slate-600 dark:text-white/60">Available for opportunities</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4 leading-[1.05]">
          <span className="text-slate-900 dark:text-white">Shreejan </span>
          <span className="gradient-text">Mishra</span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-500 dark:text-white/40 font-display font-light tracking-wide mb-4"
        >
          FULL STACK ENGINEER
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg text-left text-slate-600 dark:text-white/50 max-w-4xl mx-auto mb-6 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-slate-500 dark:text-white/30 text-sm mb-10"
        >
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            to="/projects"
            className="group flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-xl font-medium text-white transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-8 py-3.5 glass glass-hover rounded-xl font-medium text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-3 justify-center"
        >
          {[
            {
              icon: Github,
              href: personalInfo.github,
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: personalInfo.linkedin,
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="p-3 glass glass-hover rounded-xl"
            >
              <social.icon size={20} className="text-slate-500 dark:text-white/50" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Impact Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="relative z-10 w-full max-w-4xl mt-16"
      >
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">
                  {metric.value}
                  {metric.suffix}
                </div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-white/40 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-400 dark:text-white/20"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
