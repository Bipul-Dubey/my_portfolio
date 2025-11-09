"use client";

import { technologies } from "@/constants/technologies";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TechnologyIconsProps {
  list: string[]; // list of technology keys
  detailed?: boolean; // show with names (for modal view)
  limit?: number; // limit icons (for compact preview)
  className?: string;
}

export function TechnologyIcons({
  list,
  detailed = false,
  limit,
  className,
}: TechnologyIconsProps) {
  const displayList = limit ? list.slice(0, limit) : list;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 sm:gap-4",
        detailed ? "pt-3" : "pt-2",
        className
      )}
    >
      {displayList.map((techKey, i) => {
        const tech = technologies[techKey];
        if (!tech) return null;

        const Icon = tech.icon;
        const iconClasses = cn(
          tech.color || "text-foreground",
          "w-5 h-5 shrink-0"
        );

        return (
          <div
            key={i}
            className={cn(
              "flex items-center gap-2 text-sm text-muted-foreground",
              !detailed && "opacity-80"
            )}
          >
            {Icon ? (
              <Icon className={iconClasses} title={tech.name} />
            ) : tech.svg ? (
              <Image
                src={tech.svg}
                alt={tech.name}
                width={20}
                height={20}
                className="object-contain opacity-90"
                title={tech.name}
              />
            ) : null}

            {detailed && <span>{tech.name}</span>}
          </div>
        );
      })}
    </div>
  );
}
