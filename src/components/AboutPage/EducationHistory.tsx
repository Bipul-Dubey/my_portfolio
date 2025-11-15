"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const educationHistory = [
  {
    institution: "Divine Public School, Gorakhpur",
    degree: "Senior Secondary (12th)",
    details:
      "Completed 12th in Science stream with Mathematics and Informatics Practices.",
    logo: "/education/divine_public_school.jpeg",
  },
  {
    institution: "Deen Dayal Upadhyay Gorakhpur University (DDU)",
    degree: "Bachelor of Science (B.Sc.)",
    details:
      "Completed B.Sc. with specialization in Mathematics and Computer Science.",
    logo: "/education/ddug.png",
  },
  {
    institution: "Chandigarh University",
    degree: "Master of Computer Applications (MCA)",
    details:
      "Completed MCA with focus on programming, software engineering, and computer applications.",
    logo: "/education/cu.png",
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
              {/* Logo inside card */}
              <div className="relative w-28 h-20 rounded-xl bg-white border border-border/30 shadow-sm flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {edu.logo ? (
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    fill
                    className="object-contain p-1"
                  />
                ) : (
                  <span className="text-lg font-semibold text-primary">
                    {edu.institution.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>

              <div className="text-primary font-medium mb-1">
                {edu.institution}
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
