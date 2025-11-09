"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  isModal?: boolean;
}

export function ImageCarousel({
  images,
  interval = 3500,
  className,
  isModal = false,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 }); // 👈 start animating when ~40% visible
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
        "relative w-full overflow-hidden rounded-2xl group select-none bg-black/5 dark:bg-white/5",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image Wrapper */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl">
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
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={images[index]}
              alt={`Slide ${index + 1}`}
              loader={() => images[index]}
              fill
              className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              priority={index === 0}
            />

            {/* Dark Overlay for visibility */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/15 to-transparent rounded-2xl pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div
        className={cn(
          "absolute bottom-3 left-1/2 -translate-x-1/2 z-20  items-center justify-center gap-2",
          isModal ? "flex" : "hidden md:flex"
        )}
      >
        {images.map((_, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${i + 1}`}
            onClick={(e) => {
              e.preventDefault();
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
