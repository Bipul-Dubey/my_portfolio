"use client";

import BeamsBackground from "../../ui/beams-background";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { OrbitingIcons } from "./OrbitIcons";

const HeroSection = () => {
  return (
    <BeamsBackground>
      <div className="container mx-auto px-4 md:px-12 lg:px-20 pt-28 lg:pt-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side — Text */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full border border-border text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for opportunities
          </motion.div>

          {/* Name + Title */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent-foreground/80 text-xl md:text-2xl font-medium"
            >
              {`Hi, I’m Bipul Dubey`}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Software{" "}
              <span className="bg-linear-to-r from-[#00c6ff] via-[#7a5fff] to-[#00c6ff] bg-clip-text text-transparent animate-gradient-x [text-shadow:0_0_15px_rgba(124,58,237,0.3)]">
                Engineer
              </span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-accent-foreground/80 max-w-lg leading-relaxed"
          >
            Crafting elegant solutions through clean code and innovative
            thinking.{" "}
            <span className="text-foreground font-semibold">
              Building digital experiences that make a difference.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3 rounded-xl font-semibold border border-border hover:bg-secondary/80 transition-all hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 pt-4"
          >
            <a
              href="https://github.com/Bipul-Dubey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/bipul-dubey-34ab8b225"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:bipuldubeyofficial@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div className="w-px h-6 bg-border mx-2" />
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <OrbitingIcons />
        </motion.div>
      </div>
    </BeamsBackground>
  );
};

export default HeroSection;
