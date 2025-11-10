"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { MorphingDialogImage } from "../ui/morphing-dialog";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
}

export function ImageCarousel({
  images,
  interval = 3500,
  className,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.7 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide only when visible & not paused
  useEffect(() => {
    if (!isInView || paused) return;
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, paused, isInView, images.length, interval]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl group select-none bg-black/5 dark:bg-white/5 p-1",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-muted/10 will-change-transform">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 80, damping: 20 },
              opacity: { duration: 0.25 },
            }}
            className="absolute inset-0"
          >
            <MorphingDialogImage
              src={images[index]}
              alt={`Project image ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ borderRadius: "inherit" }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div
        className={cn(
          "absolute bottom-6 flex left-1/2 -translate-x-1/2 z-20 items-center justify-center gap-2"
        )}
      >
        {images.map((_, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            onKeyDown={(e) => e.key === "Enter" && setIndex(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 border",
              i === index
                ? "bg-white border-white shadow-[0_0_6px_rgba(255,255,255,0.8)] scale-110"
                : "bg-white/40 border-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
