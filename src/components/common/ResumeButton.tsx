"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from "@/components/ui/morphing-dialog";
import { FileText, Download, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ResumeButton({ className }: { className?: string }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const resumeUrl = "/assets/resume_bipul_dubey.pdf";

  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1070);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ⏳ Prevent mismatch during hydration (render nothing until first client check)
  if (isMobile === null) return null;

  // ✅ Mobile behavior — open in new tab
  if (isMobile) {
    return (
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition shadow-sm",
          className
        )}
      >
        <FileText className="w-5 h-5" />
        View Resume
      </a>
    );
  }

  // ✅ Desktop — show Morphing Dialog with PDF preview
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 16,
        duration: 0.5,
      }}
    >
      {/* Trigger Button */}
      <MorphingDialogTrigger
        style={{ borderRadius: "14px" }}
        className={cn(
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
          "bg-primary text-primary-foreground font-medium hover:bg-primary/90  transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105",
          className
        )}
      >
        <FileText className="w-5 h-5" />
        View Resume
      </MorphingDialogTrigger>

      {/* Modal Container */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          className="relative w-[90%] sm:w-[600px] md:w-[800px] lg:w-[900px] h-full max-h-[90vh] overflow-hidden rounded-2xl bg-background border border-border shadow-2xl flex flex-col"
          style={{ borderRadius: "24px" }}
        >
          {/* Close button */}
          <MorphingDialogClose className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition">
            <X className="w-5 h-5" />
          </MorphingDialogClose>

          {/* Embedded PDF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="flex-1 w-full flex items-center justify-center bg-muted/10"
          >
            <object
              data={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              className="w-full h-full rounded-lg border border-border/40"
            >
              <p className="text-center text-muted-foreground p-4">
                Your browser does not support embedded PDFs.{" "}
                <a
                  href={resumeUrl}
                  target="_blank"
                  className="text-primary underline"
                >
                  Click here to open.
                </a>
              </p>
            </object>
          </motion.div>

          {/* Footer: Download Button */}
          <div className="w-full border-t border-border/30 bg-background/90 p-4 flex justify-end">
            <a
              href={resumeUrl}
              download="Bipul_Dubey_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
