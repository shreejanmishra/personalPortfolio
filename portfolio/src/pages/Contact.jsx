import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Copy,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { personalInfo } from "../data/portfolioData";

const ContactCard = ({ icon: Icon, label, value, href, copyable }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass rounded-xl p-5 hover:border-white/[0.12] transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-primary-500/10 border border-primary-500/20">
            <Icon size={18} className="text-primary-400" />
          </div>
          <div>
            <p className="text-xs text-white/30 mb-0.5">{label}</p>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {value}
              </a>
            ) : (
              <p className="text-sm text-white/70">{value}</p>
            )}
          </div>
        </div>
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg hover:bg-white/[0.05] text-white/20 hover:text-white/50 transition-all"
            aria-label={`Copy ${label}`}
          >
            {copied ? (
              <CheckCircle size={16} className="text-accent-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Connect"
          title="Get In Touch"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <ContactCard
              icon={Mail}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              copyable
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value={personalInfo.phone}
              copyable
            />
            <ContactCard
              icon={MapPin}
              label="Location"
              value={personalInfo.location}
            />
            <ContactCard
              icon={Github}
              label="GitHub"
              value="github.com/shreejanmishra"
              href={personalInfo.github}
            />
            <ContactCard
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/shreejanmishra"
              href={personalInfo.linkedin}
            />
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Let's Build Something Together
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Whether you need a full-stack application built from scratch,
                  UI/UX design expertise, or performance optimization for your
                  existing product — I'd love to hear about it.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/50">
                    <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                    Available for full-time & freelance opportunities
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/50">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Open to remote & on-site roles
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/50">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    Based in Bengaluru, India
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${personalInfo.email}?subject=Let's%20work%20together`}
                className="mt-8 group flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-xl font-medium text-white transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
              >
                <Send size={18} />
                Send me an email
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
