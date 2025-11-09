"use client";

import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ResumeButton } from "../common/ResumeButton";
import { getExperience } from "@/lib/utils";

// ✅ Typewriter animation (unchanged)
const Typewriter = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typingInterval);
    }, 80);

    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlink);
    };
  }, [text]);

  return (
    <h3 className="text-3xl font-semibold mb-5 text-foreground flex items-center gap-1">
      {displayed}
      <span
        className={`inline-block w-[3px] h-6 bg-primary transition-opacity duration-300 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </h3>
  );
};

const Introduction = () => {
  const { years: experienceYears, months: experienceMonths } = getExperience();

  const contactLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/bipul-dubey-34ab8b225",
      text: "linkedin.com/in/bipul-dubey-34ab8b225",
    },
    {
      icon: Github,
      href: "https://github.com/Bipul-Dubey",
      text: "github.com/Bipul-Dubey",
    },
    {
      icon: Mail,
      href: "mailto:bipuldubeyofficial@gmail.com",
      text: "bipuldubeyofficial@gmail.com",
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_2.15fr] gap-8 items-stretch">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative flex min-w-96 flex-col h-fit justify-between bg-linear-to-b from-background/70 to-background/90 rounded-3xl shadow-lg overflow-hidden backdrop-blur-md"
        >
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

          {/* Profile Image */}
          <div className="relative w-full flex items-center justify-center py-8 bg-muted/10">
            <div className="w-36 h-36 rounded-full border-4 border-primary/20 overflow-hidden shadow-md mb-7">
              <Image
                src="/my_profile.png"
                alt="Bipul Dubey"
                fill
                className="object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 200px"
                priority
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="px-4 py-3 flex flex-col flex-1">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Bipul Dubey
              </h2>
              <p className="text-primary font-medium mt-1">Software Engineer</p>
              <p className="text-muted-foreground text-sm mt-1">
                {experienceYears}+ Years {experienceMonths} Months Experience
              </p>
            </div>

            {/* Contact Links */}
            <div className="mt-6 space-y-2">
              {contactLinks.map(({ icon: Icon, href, text }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="flex items-center gap-3 rounded-xl px-4 py-2 bg-background/60 hover:bg-primary/10 border border-border/40 shadow hover:shadow transition-all duration-200"
                >
                  <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 group-hover:bg-primary/30 transition">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {text}
                  </span>
                </Link>
              ))}
            </div>

            {/* ✅ Contact Me Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4 w-full"
            >
              {/* Contact Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-5 py-2.5 font-medium shadow-md hover:shadow-lg transition-all duration-300 w-full sm:flex-1"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>

              {/* Resume Button */}
              <ResumeButton className="w-full sm:flex-1" />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative bg-linear-to-b from-background/95 to-background border border-border/40 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div>
            <Typewriter text="About Me" />

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              I’m a <strong>Full Stack Software Engineer</strong> with over{" "}
              {experienceYears}+ years of hands-on experience crafting scalable,
              user-focused web applications. I specialize in{" "}
              <strong>
                React, Next.js, TypeScript, Node.js, Express.js, and Golang
              </strong>{" "}
              — building systems that balance clean architecture, speed, and
              usability.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              Over the years, I’ve worked with startups and organizations to
              design and deliver full-stack solutions — from responsive
              frontends to high-performance backend APIs. I’m passionate about
              translating business needs into efficient, maintainable code and
              ensuring seamless integration between frontend and backend
              systems.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              My expertise includes{" "}
              <strong>
                RAG-based AI systems, SaaS platforms, RESTful & GraphQL APIs,
                and real-time architectures (WebSockets, SSE)
              </strong>
              . I also have strong experience with{" "}
              <strong>
                PostgreSQL, MongoDB, Docker, and microservice architectures
              </strong>
              , enabling me to deliver robust, production-grade systems.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              As a <strong>freelance developer</strong>, I collaborate with
              businesses and founders to build custom web platforms — whether
              it’s an MVP, automation system, or a long-term SaaS product. My
              goal is to create solutions that are technically solid, visually
              refined, and scalable as your product grows.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              I’m currently focused on building{" "}
              <strong>AI-powered, data-driven platforms</strong> that combine
              intelligent backend logic with exceptional UI experiences. I’m
              open to freelance projects and technical partnerships that
              challenge creativity and innovation.
            </p>
          </div>

          {/* ✅ Projects CTA */}
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="mt-8 flex justify-end"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium text-sm sm:text-base hover:underline"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
