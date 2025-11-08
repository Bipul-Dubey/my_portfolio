"use client";

import { motion } from "framer-motion";

const educationHistory = [
  {
    institution: "Stanford University",
    degree: "Bachelor of Science in Computer Science",
    years: "2014 - 2018",
    details: "Graduated with Honors, focused on AI and algorithms.",
  },
  {
    institution: "MIT",
    degree: "Master of Science in EECS",
    years: "2018 - 2020",
    details: "Specialized in Machine Learning and Distributed Systems.",
  },
  {
    institution: "Harvard University",
    degree: "Professional Certificate in Data Science",
    years: "2021",
    details:
      "Completed an intensive data science program with real-world projects.",
  },
  {
    institution: "NPTEL",
    degree: "Online Course: Deep Learning",
    years: "2022",
    details: "Covered advanced neural network techniques.",
  },
  {
    institution: "NPTEL",
    degree: "Online Course: Deep Learning",
    years: "2022",
    details: "Covered advanced neural network techniques.",
  },
];

export default function EducationTimeline() {
  return (
    <section className="w-full py-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-primary text-center mb-14"
      >
        Education
      </motion.h2>

      {/* Timeline container with wrapping */}
      <div className="relative flex flex-wrap md:justify-center gap-y-14 gap-x-6 max-w-6xl mx-auto">
        {educationHistory.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center md:text-left w-full md:w-[320px] min-h-[230]"
          >
            {/* Card */}
            <div className="relative z-10 bg-card/80 backdrop-blur-md border border-border/40 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 rounded-2xl px-6 py-6 w-full h-full group">
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <div className="text-primary font-medium mb-1">
                {edu.institution}
              </div>
              <div className="text-muted-foreground text-xs mb-2">
                {edu.years}
              </div>
              <p className="text-muted-foreground text-sm leading-snug">
                {edu.details}
              </p>
            </div>

            {/* Connector line */}
            {i !== educationHistory.length - 1 && (
              <>
                {/* Desktop horizontal line */}
                <div className="hidden md:block absolute top-1/2 -right-12 w-12 h-0.5 bg-linear-to-r from-primary/80 to-transparent rounded-full" />
                {/* Mobile vertical line */}
                <div className="md:hidden w-0.5 h-12 bg-linear-to-b from-primary/70 to-transparent mt-4 rounded-full" />
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
