import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * Smoothly scrolls to the given `id` element if it matches `?id=` in the URL.
 * After scrolling, the query param is removed for a clean URL.
 */
export function useScrollToSection(targetId: string, offset: number = -80) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("id");
    if (sectionId && sectionId === targetId) {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY + offset;

        // Smooth scroll to target section
        window.scrollTo({ top: y, behavior: "smooth" });

        // ✅ Clean the URL (remove ?id=)
        const newUrl = window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }
    }
  }, [searchParams, targetId, offset]);
}
