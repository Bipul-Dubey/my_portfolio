import { TTechnology } from "@/types";
import {
  SiNextdotjs,
  SiReact,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

export const technologies: Record<string, TTechnology> = {
  Nextjs: {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
  },
  React: { name: "React", icon: SiReact, color: "text-cyan-400" },
  FastAPI: { name: "FastAPI", icon: SiFastapi, color: "text-emerald-500" },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
  MongoDB: { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  Nodejs: { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  Docker: { name: "Docker", icon: SiDocker, color: "text-blue-400" },
};

export type TechnologyKey = keyof typeof technologies;
