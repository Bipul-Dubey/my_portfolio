"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left" | "right";
}

export function SectionHeader({
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  // simple fade-up animation variants
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const alignments = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={variants}
      className={cn("space-y-4 mb-12", alignments[align], className)}
    >
      <motion.h2
        variants={variants}
        className="bg-clip-text text-4xl font-bold tracking-tight text-accent-foreground md:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={variants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
