"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechNova Inc.",
    date: "2023 – Present",
    description:
      "Led microservices development and mentored team in cloud technologies. Championed automation for higher delivery speed.",
    image: "https://source.unsplash.com/64x64/?tech,avatar,blue",
  },
  {
    role: "Full Stack Developer",
    company: "Saga Labs",
    date: "2020 – 2023",
    description:
      "Architected modular webapps and built RESTful APIs for legal platforms. Enhanced developer workflows with CI/CD tools.",
    image: "https://source.unsplash.com/64x64/?tech,avatar,green",
  },
  {
    role: "Software Engineer",
    company: "Creative Bits",
    date: "2018 – 2020",
    description:
      "Implemented document processing features and contributed to data/UX optimization for B2B platforms.",
    image: "https://source.unsplash.com/64x64/?tech,avatar,pink",
  },
];

const timelineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.18,
      type: "spring" as const,
      stiffness: 100,
      damping: 11,
    },
  }),
};

export default function ExperienceSection() {
  return (
    <div id="experience">
      <section className="w-full py-8 bg-linear-to-b from-background/80 to-background">
        <div className="max-w-3xl md:max-w-4xl mx-auto relative">
          {/* Desktop timeline line */}
          <motion.div
            initial={{ scaleY: 0.2, opacity: 0.3 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:block absolute left-7 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-transparent rounded-full z-0 pointer-events-none"
          />

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl mb-12 font-extrabold text-center tracking-tight text-primary"
          >
            Experience
          </motion.h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={timelineVariants}
            className="relative z-10 flex flex-col gap-12"
          >
            {experiences.map((exp, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start gap-4 md:gap-8 relative"
              >
                {/* Desktop marker with timeline */}
                <div className="hidden md:flex flex-col items-center mr-2">
                  <span className="w-16 h-16 rounded-xl bg-white shadow-lg border border-primary flex items-center justify-center">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      loader={() => exp.image}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                      sizes="40px"
                    />
                  </span>
                </div>
                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.025,
                    boxShadow: "0 8px 32px rgba(50,150,250,.12)",
                  }}
                  className="flex-1 bg-card/60 border border-border/20 backdrop-blur-lg shadow p-7 rounded-2xl transition-all duration-300 hover:bg-card/80"
                >
                  <div className="flex items-center mb-2">
                    {/* Mobile shows image inside card */}
                    <span className="block md:hidden w-10 h-10 mr-3 rounded-full overflow-hidden border border-primary shrink-0">
                      <Image
                        src={exp.image}
                        alt={exp.company}
                        loader={() => exp.image}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        sizes="40px"
                      />
                    </span>
                    <div>
                      <div className="font-semibold text-lg text-foreground">
                        {exp.role}
                      </div>
                      <div className="text-primary font-medium">
                        {exp.company}
                      </div>
                    </div>
                    <span className="ml-auto text-sm text-muted-foreground">
                      {exp.date}
                    </span>
                  </div>
                  <div className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  );
}
