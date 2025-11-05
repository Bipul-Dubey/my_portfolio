"use client";

import React from "react";

const ResumePage = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 lg:px-20 py-12 lg:py-24 flex flex-col items-center">
      <h2 className="from-foreground to-foreground/80 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl text-center mb-6">
        My Resume
      </h2>

      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
        Here’s a detailed overview of my experience, skills, and achievements.
      </p>

      {/* PDF viewer */}
      <div className="w-full flex justify-center">
        <object
          data="/assets/resume_bipul_dubey.pdf#toolbar=0&navpanes=0&scrollbar=0"
          type="application/pdf"
          className="w-full max-w-4xl rounded-xl border border-border shadow-md aspect-[1/1.414]"
        >
          <p className="text-center text-muted-foreground mt-4">
            Your browser does not support viewing PDFs.{" "}
            <a
              href="/assets/resume_bipul_dubey.pdf"
              className="text-primary underline"
              target="_blank"
            >
              Click here to open it directly.
            </a>
          </p>
        </object>
      </div>

      {/* Download Button */}
      <div className="text-center mt-8">
        <a
          href="/assets/resume_bipul_dubey.pdf"
          download="Bipul_Dubey_Resume.pdf"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumePage;
