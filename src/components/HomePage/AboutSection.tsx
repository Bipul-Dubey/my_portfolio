"use client";

import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { Mail, Terminal, Layers, GraduationCap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    Icon: Terminal,
    name: "Hi, I'm Bipul Dubey 👋",
    description:
      "I’m a passionate Software Engineer who specializes in building robust, scalable, and visually engaging web applications. I love turning complex ideas into elegant digital solutions that blend performance with great design.",
    href: "/about",
    cta: "More about me",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src="/about_bg_1.jpg"
          alt="About Bipul Dubey"
          fill
          className="object-cover opacity-60 scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-background via-background/60 to-transparent" />
      </div>
    ),
  },
  {
    Icon: Mail,
    name: "Let’s Connect",
    description:
      "I’m always open to new opportunities, collaborations, and meaningful discussions. Whether it's a product idea or a technical chat — feel free to reach out!",
    href: "/contact",
    cta: "Contact Me",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src="/about_bg_2.jpg"
          alt="contact Bipul Dubey"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-background via-background/60 to-transparent" />
      </div>
    ),
  },
  {
    Icon: Layers,
    name: "What I Build",
    description:
      "I love building complete web applications — from crafting sleek, interactive frontends to designing scalable backend APIs and seamless system integrations that bring everything together.",
    href: "/projects",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl flex items-center justify-center bg-background">
        <Image
          src="/about_bg_3.jpg"
          alt="web development background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-background via-background/70 to-transparent" />
      </div>
    ),
  },
  {
    Icon: GraduationCap,
    name: "Career Journey",
    description:
      "I hold a Master's degree in Computer Applications and have 3+ years of hands-on experience building web applications and APIs using modern frameworks and cloud technologies. My journey has been driven by curiosity, growth, and creating scalable digital solutions.",
    href: "/journey",
    cta: "View Experience",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src="/about_bg_4.png"
          alt="Career Journey"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-background via-background/70 to-transparent" />
      </div>
    ),
  },
];

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 lg:px-20 py-12 lg:py-24">
      <h2 className="from-foreground to-foreground/80 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl text-center mb-4">
        About Me
      </h2>

      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        A quick snapshot of who I am, what I do, and the tools that power my
        work.
      </p>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutSection;
