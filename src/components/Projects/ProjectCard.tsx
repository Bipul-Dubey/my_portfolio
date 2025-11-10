"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TProject } from "@/types";
import { ImageCarousel } from "./ProjectImages";
import { TechnologyIcons } from "./TechnologyIcons";

type MorphingProjectCardProps = {
  project: TProject;
};

export const ProjectLink = ({ link }: { link?: string }) => {
  return (
    <>
      {link && (
        <div className="flex items-end flex-wrap gap-5 pt-2 ">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export function ProjectCard({ project }: MorphingProjectCardProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.4,
      }}
    >
      {/* --- Project Card (Trigger) --- */}
      <MorphingDialogTrigger
        style={{ borderRadius: "20px", borderTop: "0px" }}
        className="
          group relative flex flex-col overflow-hidden
          border border-border bg-background
          hover:shadow-lg transition-all duration-300
          rounded-2xl cursor-pointer rounded-t-none
        "
      >
        {/* Image */}
        <div className="relative w-full overflow-hidden">
          <ImageCarousel images={project.images} />

          {/* ✅ Category Tag — bottom-right corner */}
          <span
            className="
              absolute bottom-3 right-3 text-xs md:text-sm font-medium
              px-3 py-1 rounded-full backdrop-blur-sm
              bg-black text-white 
            "
          >
            {project.category}
          </span>
        </div>

        {/* ✅ Card Info */}
        <div className="p-5 space-y-2 text-left">
          <MorphingDialogTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </MorphingDialogTitle>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {Array.isArray(project.description)
              ? project.description[0]
              : String(project.description)}
          </p>

          {/* Tech icons (short preview) */}
          <TechnologyIcons list={project.technology} />

          <ProjectLink link={project.link} />
        </div>
      </MorphingDialogTrigger>

      {/* --- Expanded View (Dialog) --- */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: "28px" }}
          className="
            relative flex flex-col overflow-hidden border border-border
            bg-background dark:bg-zinc-900 shadow-2xl
            w-[92%] sm:w-[540px] md:w-[780px]
          "
        >
          {/* Image */}
          <div className="relative">
            <ImageCarousel images={project.images} />

            {/* ✅ Category — bottom-right corner */}
            <MorphingDialogSubtitle
              className="
                absolute bottom-4 right-4 text-xs md:text-sm font-medium px-4 py-1.5
                rounded-full bg-primary text-white capitalize
              "
            >
              {project.category}
            </MorphingDialogSubtitle>
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Title */}
            <MorphingDialogTitle className="text-2xl sm:text-3xl font-semibold text-foreground">
              {project.title}
            </MorphingDialogTitle>

            {/* Description */}
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
              }}
              className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-1"
            >
              {Array.isArray(project.description) ? (
                project.description.map((d, i) => <p key={i}>{d}</p>)
              ) : (
                <p>{String(project.description)}</p>
              )}
            </MorphingDialogDescription>

            {/* Tech Stack */}
            <TechnologyIcons list={project.technology} detailed />

            {/* Links */}
            <ProjectLink link={project.link} />
          </div>

          {/* Close Button */}
          <MorphingDialogClose
            className="
              absolute top-4 right-4 text-foreground
              hover:text-primary transition-colors
            "
          />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
