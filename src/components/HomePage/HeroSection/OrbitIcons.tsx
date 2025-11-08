"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiGit,
  SiFigma,
  SiGo,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { useViewportLevel } from "@/hooks/viewport-level";

const techCategories = [
  {
    label: "Frontend / Languages",
    baseRadius: 270,
    speed: 2.4,
    iconSize: 48,
    reverse: false,
    items: [
      { icon: SiReact, color: "text-cyan-400" },
      { icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
      { icon: SiTypescript, color: "text-blue-500" },
      { icon: SiTailwindcss, color: "text-sky-400" },
      { icon: SiFigma, color: "text-pink-500" },
    ],
  },
  {
    label: "Backend / Tools",
    baseRadius: 190,
    speed: 1.6,
    iconSize: 48,
    reverse: true,
    items: [
      { icon: SiNodedotjs, color: "text-green-500" },
      { icon: SiGo, color: "text-cyan-500" },
      { icon: SiPostgresql, color: "text-sky-500" },
      { icon: SiMongodb, color: "text-emerald-500" },
      { icon: SiDocker, color: "text-sky-500" },
      { icon: SiGithub, color: "text-gray-900 dark:text-white" },
      { icon: SiGit, color: "text-orange-500" },
    ],
  },
];

export function OrbitingIcons() {
  const level = useViewportLevel();

  if (level === null) return null;

  return (
    <div className="relative flex h-[510px] lg:h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Central Brain Icon */}
      <div className="absolute z-20 flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 rounded-full bg-linear-to-r from-primary to-accent border border-border shadow-[0_0_25px_rgba(59,130,246,0.5)] backdrop-blur-sm">
        <FaBrain className="text-4xl text-white drop-shadow-lg animate-pulse" />
      </div>

      {/* Orbiting Circles */}
      {techCategories.map((category, i) => (
        <OrbitingCircles
          key={i}
          radius={level === 16 ? category.baseRadius - 40 : category.baseRadius}
          speed={category.speed}
          reverse={category.reverse}
          iconSize={category.iconSize}
        >
          {category.items.map(({ icon: Icon, color }, j) => (
            <Icon key={j} className={color} size={category.iconSize} />
          ))}
        </OrbitingCircles>
      ))}
    </div>
  );
}
