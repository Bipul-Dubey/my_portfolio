import type { TProject } from "@/types";
import type { TechnologyKey } from "./technologies";

export const ProjectsList: (TProject & { technology: TechnologyKey[] })[] = [
  {
    title: "RAG Graph AI Platform",
    category: "Professional",
    description:
      "A multi-organization Retrieval-Augmented Generation system built with FastAPI, PostgreSQL (pgvector), and Next.js — featuring document ingestion, embeddings, and chat-based querying.",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&q=80",
      "https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200&q=80",
    ],
    technology: ["FastAPI", "PostgreSQL", "Nextjs", "Docker"],
    link: "https://google.com",
  },
  {
    title: "AI Interview Portal",
    category: "Professional",
    description:
      "An AI-powered interview preparation platform supporting voice-based mock interviews, domain-based Q&A, and real-time evaluation.",
    images: [
      "https://images.unsplash.com/photo-1603791452906-b9f8fb2e7d3a?w=1200&q=80",
      "https://images.unsplash.com/photo-1584697964403-5d7f57b3c7f2?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    technology: ["Nextjs", "Nodejs", "MongoDB"],
  },
  {
    title: "Developer Portfolio",
    category: "Personal",
    description:
      "A modern, interactive portfolio built with Next.js, Tailwind CSS, and Framer Motion — showcasing my work and design aesthetics.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    ],
    technology: ["Nextjs", "React", "Docker"],
  },
  {
    title: "Freelance CRM System",
    category: "Freelance",
    description:
      "A lightweight CRM built for small businesses with customer tracking, lead management, and email automation.",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    technology: ["React", "Nodejs", "PostgreSQL"],
  },
  {
    title: "SaaS Billing Dashboard",
    category: "Professional",
    description:
      "A subscription analytics and revenue monitoring dashboard for SaaS startups, built using Next.js and Supabase with Stripe integration.",
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    ],
    technology: ["Nextjs", "Supabase", "Stripe", "TypeScript"],
  },
  {
    title: "Team Collaboration Hub",
    category: "Professional",
    description:
      "A real-time collaboration tool enabling teams to share tasks, notes, and chat using WebSockets and Redis.",
    images: [
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1200&q=80",
      "https://images.unsplash.com/photo-1587620931282-76bcb29b43b0?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    technology: ["React", "Nodejs", "Redis", "Tailwind"],
  },
  {
    title: "Personal Finance Tracker",
    category: "Personal",
    description:
      "A responsive personal finance tracker that visualizes income, expenses, and savings using Recharts and IndexedDB.",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    ],
    technology: ["Nextjs", "Recharts", "TypeScript"],
  },
  {
    title: "AI Resume Analyzer",
    category: "Freelance",
    description:
      "A generative AI-powered tool that reviews resumes, gives suggestions, and matches job descriptions using OpenAI embeddings.",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    technology: ["Nextjs", "FastAPI", "OpenAI", "PostgreSQL"],
  },
  {
    title: "E-Commerce Admin Panel",
    category: "Professional",
    description:
      "An admin dashboard for managing orders, products, and analytics with role-based access and server-side pagination.",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=1200&q=80",
      "https://images.unsplash.com/photo-1581091870622-1e7f1c41e2d1?w=1200&q=80",
    ],
    technology: ["React", "Nodejs", "MongoDB", "Express"],
  },
  {
    title: "Event Booking Platform",
    category: "Freelance",
    description:
      "A ticket booking platform with calendar integration, seat management, and Razorpay payment gateway support.",
    images: [
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      "https://images.unsplash.com/photo-1584697964403-5d7f57b3c7f2?w=1200&q=80",
    ],
    technology: ["Nextjs", "Prisma", "PostgreSQL", "Razorpay"],
  },
  {
    title: "Realtime Chat App",
    category: "Personal",
    description:
      "A full-stack chat application with live message streaming, authentication, and emoji reactions powered by Socket.io.",
    images: [
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&q=80",
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1200&q=80",
    ],
    technology: ["Nextjs", "Socket.io", "MongoDB"],
  },
  {
    title: "Restaurant Ordering System",
    category: "Freelance",
    description:
      "A restaurant web app enabling online ordering, dynamic menus, and table QR code management for dine-in and delivery.",
    images: [
      "https://images.unsplash.com/photo-1543353071-087092ec3933?w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    ],
    technology: ["React", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "Blogging CMS Platform",
    category: "Personal",
    description:
      "A content management system for developers to publish blogs with markdown support, tags, and media uploads.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80",
    ],
    technology: ["Nextjs", "Firebase", "Tailwind"],
  },
  {
    title: "Weather Visualization Dashboard",
    category: "Personal",
    description:
      "A visually appealing weather app that displays forecasts using animated charts, 3D globe view, and live weather APIs.",
    images: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      "https://images.unsplash.com/photo-1581093588401-22aa06f2a7b7?w=1200&q=80",
    ],
    technology: ["Nextjs", "Threejs", "OpenWeather", "Tailwind"],
  },
];
