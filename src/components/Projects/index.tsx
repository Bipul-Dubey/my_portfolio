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
import { SectionHeader } from "../common/SectionHeader";

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
          "container mx-auto px-4 py-16 lg:py-28",
          isPage ? "pt-28" : ""
        )}
      >
        <SectionHeader
          title={`What I've Built`}
          description={
            isPage
              ? "Explore my professional, freelance, and personal projects — filter by tech, category, or search across them."
              : "A glimpse of the projects I've crafted — from scalable backend systems to modern frontend experiences."
          }
        />

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
              className={cn(
                "flex items-center justify-center border border-dashed border-border rounded-2xl p-6",
                "bg-background text-primary font-medium cursor-pointer",
                "transition-all duration-300 hover:border-transparent hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.25)]",
                "relative overflow-hidden group"
              )}
            >
              {/* Gradient glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/15 via-primary/25 to-primary/15 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

              <Link
                href="/projects"
                className="relative flex items-center gap-2 text-lg font-semibold group text-primary z-10"
              >
                See more projects
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
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
