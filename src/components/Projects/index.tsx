"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiFastapi,
  SiMongodb,
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  isPage?: boolean;
}

export default function Projects({ isPage = false }: ProjectsProps) {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setActive(null);
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  const displayedProjects = isPage ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className={cn(
        "container mx-auto px-4 md:px-12 lg:px-20 py-16 lg:py-28",
        isPage ? "pt-28" : ""
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="from-foreground to-foreground/80 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl text-center mb-4"
      >
        {`What I've Built`}
      </motion.h2>

      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        {isPage
          ? "Explore my professional, freelance, and personal projects — filter by tech, category, or search across them."
          : "A glimpse of the projects I've crafted — from scalable backend systems to modern frontend experiences."}
      </p>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center"
          >
            <motion.div
              ref={ref}
              layoutId={`card-${active.title}-${id}`}
              className="relative w-full max-w-[500px] bg-background rounded-2xl overflow-hidden border border-border shadow-xl"
            >
              <Image
                src={active.image}
                alt={active.title}
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{active.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary capitalize">
                    {active.category}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {active.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-3">
                  {active.tech.map((TechIcon, i) => (
                    <TechIcon.icon
                      key={i}
                      className={`${TechIcon.color} w-6 h-6`}
                      title={TechIcon.name}
                    />
                  ))}
                </div>

                {active.live && (
                  <Link
                    href={active.live}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-primary text-sm mt-3 font-medium"
                  >
                    Live Demo <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-2"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.6 },
          },
        }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center"
      >
        {displayedProjects.map((project, i) => (
          <motion.div
            key={i}
            layoutId={`card-${project.title}-${id}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setActive(project)}
            className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer bg-background"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-background/70 backdrop-blur-sm text-primary capitalize">
                {project.category}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center gap-3 mt-3">
                {project.tech.slice(0, 4).map((TechIcon, i) => (
                  <TechIcon.icon
                    key={i}
                    className={`${TechIcon.color} w-5 h-5`}
                    title={TechIcon.name}
                  />
                ))}
              </div>

              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-primary text-sm mt-3 font-medium"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}

        {!isPage && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-center justify-center border border-dashed border-border rounded-2xl p-6 hover:bg-accent/10 transition text-center"
          >
            <Link
              href="/projects"
              className="text-primary font-medium flex items-center gap-2"
            >
              See more projects →
            </Link>
          </motion.div>
        )}
      </motion.div>

      {isPage && displayedProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-10">
          No projects match your filters.
        </p>
      )}
    </section>
  );
}

const projects = [
  {
    title: "RAG Graph AI Platform",
    category: "Professional",
    description:
      "A multi-organization Retrieval-Augmented Generation system built with FastAPI, PostgreSQL (pgvector), and Next.js — featuring document ingestion, embeddings, and chat-based querying.",
    image: "/projects/rag-platform.png",
    live: "",
    tech: [
      { name: "FastAPI", icon: SiFastapi, color: "text-emerald-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-900 dark:text-white",
      },
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    ],
  },
  {
    title: "AI Interview Portal",
    category: "Professional",
    description:
      "An AI-powered interview preparation platform supporting voice-based mock interviews, domain-based Q&A, and real-time evaluation.",
    image: "/projects/ai-interview.png",
    live: "",
    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-900 dark:text-white",
      },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
    ],
  },
  {
    title: "Developer Portfolio",
    category: "Personal",
    description:
      "A modern, interactive portfolio built with Next.js, Tailwind CSS, and Framer Motion — showcasing my work and design aesthetics.",
    image: "/projects/portfolio.png",
    live: "",
    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-900 dark:text-white",
      },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    ],
  },
  {
    title: "Freelance CRM System",
    category: "Freelance",
    description:
      "A lightweight CRM built for small businesses with customer tracking, lead management, and email automation.",
    image: "/projects/crm-app.png",
    live: "",
    tech: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
    ],
  },
];
