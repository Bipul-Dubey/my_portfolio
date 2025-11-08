"use client";

import BeamsBackground from "../../ui/beams-background";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { OrbitingIcons } from "./OrbitIcons";
import Link from "next/link";
import { AnimatedShinyText } from "@/components/ui/shiny-badge";
import { cn } from "@/lib/utils";
import { MorphingText } from "@/components/ui/morphing-text";

const HeroSection = () => {
  return (
    <BeamsBackground>
      <div
        className="
          container px-4 mx-auto 
          grid grid-cols-1 lg:grid-cols-2 
          gap-6
          items-center
          text-center lg:text-left
        "
      >
        <div
          className="
            flex flex-col items-center lg:items-start 
            justify-center 
            space-y-8 
            z-10
          "
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="ml-2">Available for opportunities</span>
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Name + Title */}
          <div className="space-y-4 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent-foreground/80 text-xl md:text-2xl lg:text-3xl font-medium"
            >
              {`Hi, I’m Bipul Dubey`}
            </motion.p>

            <div className="h-32 md:h-40 lg:h-44 w-full">
              <MorphingText
                texts={[
                  "Software Engineer",
                  "Frontend Developer",
                  "Backend Developer",
                ]}
              />
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-accent-foreground/80 max-w-lg leading-relaxed"
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
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3 rounded-xl font-semibold border border-border hover:bg-secondary/80 transition-all hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4"
          >
            <Link
              href="https://github.com/Bipul-Dubey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/bipul-dubey-34ab8b225"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:bipuldubeyofficial@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <div className="w-px h-6 bg-border mx-2" />
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 text-base lg:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
              <ChevronRight className="w-4 lg:w-5 h-4 lg:h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Right Side — Orbit Icons (visible only on large) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex justify-end"
        >
          <OrbitingIcons />
        </motion.div>
      </div>
    </BeamsBackground>
  );
};

export default HeroSection;
