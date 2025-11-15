"use client";

import { motion, Variants } from "framer-motion";
import { CompanyLogo } from "./CompanyLogo";

type ExperienceDescription =
  | string
  | string[]
  | React.ReactNode
  | React.ReactNode[];

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: ExperienceDescription;
  image: string;
  logoTitle: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Jupitice Justice Technologies Private Limited",
    date: "Sep 2025 – Present",
    description: (
      <>
        Leading development of scalable <strong>REST APIs</strong> using{" "}
        <strong>Express.js</strong> and <strong>Node.js</strong> to modernize
        case-management workflows. Delivered a high-performance, SEO-optimized{" "}
        <strong>Next.js</strong> website that improved visibility and user
        engagement. Enhanced overall application <strong>UI/UX</strong> by
        improving responsiveness, optimizing layouts, and refining interactive
        components.
      </>
    ),
    image: "",
    logoTitle: "Jupitice Justice Technologies",
  },

  {
    role: "Software Engineer",
    company: "Xenonstack Private Limited",
    date: "Aug 2023 – Jul 2025",
    description: (
      <>
        Built production-level web applications using <strong>React.js</strong>{" "}
        and <strong>Next.js</strong>, integrating <strong>REST</strong>,{" "}
        <strong>GraphQL</strong>, and{" "}
        <strong>real-time APIs (WebSocket/SSE)</strong> to deliver seamless,
        fast user experiences. Developed backend services using{" "}
        <strong>Golang microservices</strong> and{" "}
        <strong>Node.js/Express.js</strong>, improving application scalability,
        performance, and reliability across multiple product lines.
      </>
    ),
    image: "",
    logoTitle: "Xenon Stack",
  },

  {
    role: "Associate Software Engineer",
    company: "Xenonstack Private Limited",
    date: "Jan 2023 – Aug 2023",
    description: (
      <>
        Developed flexible, reusable <strong>React.js UI components</strong> and
        integrated them with backend <strong>REST APIs</strong> to deliver
        smooth product experiences. Built backend routes, middleware, and data
        flows using <strong>Golang</strong> and <strong>PostgreSQL</strong>,
        improving system performance and enabling more reliable feature
        deployments across the platform.
      </>
    ),
    image: "",
    logoTitle: "Xenon Stack",
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

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl mb-12 font-extrabold text-center tracking-tight text-primary"
          >
            Experience
          </motion.h2>

          {/* Timeline */}
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
                {/* Desktop marker */}
                <div className="hidden md:flex flex-col items-center mr-2">
                  <CompanyLogo
                    image={exp.image}
                    logoTitle={exp.logoTitle}
                    size="md"
                  />
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
                    {/* Mobile logo / initials */}
                    <div className="md:hidden mr-3 shrink-0">
                      <CompanyLogo
                        image={exp.image}
                        logoTitle={exp.logoTitle}
                        size="sm"
                      />
                    </div>

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
                  <div className="text-muted-foreground leading-relaxed prose prose-invert max-w-none">
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc ml-6 space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="leading-snug">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{exp.description}</p>
                    )}
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
