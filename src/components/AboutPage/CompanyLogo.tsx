"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  image?: string;
  logoTitle?: string;
  size?: "sm" | "md" | "lg"; // control for mobile/desktop
  className?: string;
}

function getInitials(title?: string) {
  if (!title) return "CN";
  const words = title.trim().split(" ");
  if (words.length === 1) return words[0][0]?.toUpperCase() || "C";
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function CompanyLogo({
  image,
  logoTitle,
  size = "md",
  className,
}: CompanyLogoProps) {
  const dimension = size === "sm" ? "w-10 h-10" : "w-14 h-14 ";

  return (
    <span
      className={cn(
        `relative flex items-center justify-center overflow-hidden border border-primary bg-background shadow-sm rounded-xl ${dimension}`,
        className
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={logoTitle || "Company logo"}
          loader={() => image}
          width={size === "sm" ? 40 : 56}
          height={size === "sm" ? 40 : 56}
          className="object-cover w-full h-full rounded-full"
          sizes="(max-width: 768px) 40px, 56px"
        />
      ) : (
        <span
          className={cn(
            `relative flex h-full w-full items-center justify-center text-primary font-extrabold uppercase tracking-wide
            bg-linear-to-br from-primary/10 via-primary/5 to-transparent shadow-inner border border-primary/20`,
            size === "sm" ? "text-lg" : "text-xl"
          )}
        >
          {getInitials(logoTitle)}
          <span className="absolute inset-0 rounded-xl bg-primary/5 blur-[6px] -z-10" />
        </span>
      )}
    </span>
  );
}
