"use client";

import { Mail, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ResumeButton } from "../common/ResumeButton";
import { getFormattedExperience } from "@/lib/utils";

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
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_2.15fr] gap-8 items-stretch">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative flex sm:w-full min-w-80 lg:min-w-96 flex-col h-fit justify-between bg-linear-to-b from-background/70 to-background/90 rounded-3xl shadow-lg overflow-hidden backdrop-blur-md"
        >
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

          {/* Profile Image */}
          <div className="relative w-full flex items-center justify-center py-8 bg-black/95 transition-transform duration-700 group-hover:scale-[1.03]">
            {" "}
            <div className="w-36 h-36 rounded-full border-4 border-primary/20 overflow-hidden shadow-md mb-7">
              {" "}
              <Image
                src="/my_profile.png"
                alt="Bipul Dubey"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
                priority
              />{" "}
            </div>{" "}
          </div>

          {/* Info Section */}
          <div className="px-4 py-3 flex flex-col flex-1">
            <div
              className="
                flex flex-col items-start justify-start 
                gap-x-6 gap-y-2
                text-left text-base sm:text-lg
              "
            >
              {/* Name */}
              <h2 className="text-[28px] sm:text-3xl font-bold tracking-tight text-foreground">
                Bipul Dubey
              </h2>

              {/* Role */}
              <p className="text-primary font-semibold text-[22px]">
                Software Engineer
              </p>

              {/* Experience */}
              <p className="text-muted-foreground flex items-center gap-1">
                <span className="font-medium text-xl text-foreground/90">
                  {getFormattedExperience()}
                </span>{" "}
                Experience
              </p>

              {/* Location */}
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Gorakhpur, Uttar Pradesh</span>
              </p>
            </div>

            {/* ✅ Contact Me + Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4 w-full"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-5 py-2.5 font-medium shadow-md hover:shadow-lg transition-all duration-300 w-full sm:flex-1"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>

              <ResumeButton className="w-full sm:flex-1" />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative bg-linear-to-b from-background/95 to-background border border-border/40 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6"
        >
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div>
            <Typewriter text="About Me" />

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Hi, I’m <strong>Bipul Dubey</strong> from{" "}
              <strong>Gorakhpur, Uttar Pradesh</strong>. I hold a{" "}
              <strong>Master of Computer Applications (MCA)</strong> from{" "}
              <strong>Chandigarh University</strong>, and I’m passionate about
              building modern, scalable, and impactful digital experiences.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              As a <strong>Full Stack Software Engineer</strong> with{" "}
              {getFormattedExperience()} of experience, I specialize in{" "}
              <strong>
                React, Next.js, TypeScript, Node.js, Express.js, and Golang
              </strong>
              . I focus on crafting clean, high-performing systems that balance
              usability, scalability, and speed — from intuitive UIs to
              optimized backend APIs.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              I’ve worked with startups and organizations to design full-stack
              solutions that turn complex business needs into efficient,
              maintainable products. My expertise spans{" "}
              <strong>
                SaaS platforms, AI-driven systems, REST & GraphQL APIs, and
                real-time apps (WebSockets, SSE)
              </strong>{" "}
              with strong foundations in{" "}
              <strong>
                PostgreSQL, MongoDB, Docker, and both monorepo and microservice
                architectures
              </strong>
              .
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              As a <strong>freelance developer</strong>, I build{" "}
              <strong>
                complete web applications and backend APIs tailored to business
                requirements
              </strong>
              — from static or dynamic sites to automation tools, AI-based
              systems, and analytics dashboards. My goal is to deliver{" "}
              <strong>reliable, efficient, and user-focused solutions</strong>{" "}
              that help businesses grow and innovate.
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
