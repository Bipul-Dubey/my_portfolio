import type { TProject } from "@/types";
import type { TechnologyKey } from "./technologies";

export const ProjectsList: (TProject & { technology: TechnologyKey[] })[] = [
  {
    title: "AI-Based Platforms (Internal)",
    category: "Professional",
    description: [
      "Built AI-powered web platforms with real-time chat, analytics, and live data insights.",
      "Connected frontend to AI backends via REST APIs, WebSockets, and Server-Sent Events for seamless interactions.",
      "Developed modular, responsive features using Next.js App Router, Shadcn UI, Zustand, and Recharts for dynamic dashboards.",
      "Ensured accessibility and optimal navigation for smooth user experience across all devices.",
    ],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&q=80",
      "https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200&q=80",
    ],
    technology: [
      "Nextjs",
      "TypeScript",
      "Nodejs",
      "Shadcn",
      "Zustand",
      "Recharts",
      "WebSocket",
      "REST",
    ],
  },
  {
    title: "WhatsApp Campaign Automation Platform",
    category: "Professional",
    description: [
      "Developed and maintained end-to-end features for automating personalized WhatsApp campaigns.",
      "Implemented backend routes and APIs in Express.js and managed campaign data via GraphQL.",
      "Integrated authentication with Clerk and role-based access control for secure operations.",
      "Worked with AWS Amplify, DynamoDB, React.js, and MUI/Ant Design for scalable UI and cloud integration.",
    ],
    images: [
      "https://images.unsplash.com/photo-1603791452906-b9f8fb2e7d3a?w=1200&q=80",
      "https://images.unsplash.com/photo-1584697964403-5d7f57b3c7f2?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    technology: [
      "Express",
      "GraphQL",
      "React",
      "Redux",
      "AWS",
      "Clerk",
      "Nodejs",
      "MUI",
      "AntDesign",
      "DynamoDB",
      "AWS-Amplify",
      "Zod",
    ],
  },
  {
    title: "Logistics Management Platform",
    category: "Professional",
    description: [
      "Created a management system for deliveries, pickups, and fleet tracking across multiple organizations.",
      "Built frontend dashboards and operational tools with Next.js, supporting multilingual and multi-role access.",
      "Engineered backend microservices in Golang and PostgreSQL, optimizing data flow and performance.",
      "Used REST APIs, Redux, Styled-Components, and React-Intl for scalable applications and improved UX.",
      "Optimized API calls with debouncing and pagination for reduced server load and enhanced responsiveness.",
    ],
    images: [
      "https://images.unsplash.com/photo-1581093588401-22aa06f2a7b7?w=1200&q=80",
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    ],
    technology: [
      "Nextjs",
      "Golang",
      "PostgreSQL",
      "Redux",
      "REST",
      "MaterialUI",
      "Styled-Components",
      "React-Intl",
    ],
  },
];
