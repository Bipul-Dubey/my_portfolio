"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectsList } from "@/constants/projects";
import { TProject } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  isPage?: boolean;
}

export default function Projects({ isPage = false }: ProjectsProps) {
  const [active, setActive] = useState<TProject | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setActive(null);
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  const displayedProjects = isPage ? ProjectsList : ProjectsList.slice(0, 4);

  return (
    <div className={isPage ? "" : "bg-secondary"}>
      <section
        id="projects"
        className={cn(
          "container px-4 mx-auto py-16 lg:py-28",
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
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        >
          {displayedProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}

          {!isPage && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center justify-center border border-dashed border-border rounded-2xl p-6 hover:bg-accent/10 transition-all cursor-pointer bg-background text-primary font-medium"
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 text-lg group"
              >
                See more projects
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
    </div>
  );
}
