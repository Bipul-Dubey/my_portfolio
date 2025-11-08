"use client";

import { useEffect, useState } from "react";

/**
 * Returns a number representing viewport size:
 * 8 = small (<640px)
 * 12 = medium (≥640px and <1024px)
 * 16 = large (≥1024px and <1280px)
 * 20 = extra-large (≥1280px)
 */
export function useViewportLevel() {
  const [level, setLevel] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const detectViewport = () => {
      const width = window.innerWidth;
      if (width < 640) setLevel(8); // sm
      else if (width < 1024) setLevel(12); // md
      else if (width < 1280) setLevel(16); // lg
      else setLevel(20); // xl or bigger
    };

    detectViewport(); // Run once on mount
    window.addEventListener("resize", detectViewport);
    return () => window.removeEventListener("resize", detectViewport);
  }, []);

  return level;
}
