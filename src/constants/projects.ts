import type { TProject } from "@/types";
import type { TechnologyKey } from "./technologies";

export const ProjectsList: (TProject & { technology: TechnologyKey[] })[] = [
  {
    title: "NGO Awareness & Outreach Platform",
    category: "Freelance",
    description: [
      "Developed a modern static website for an NGO to showcase its mission, ongoing initiatives, and impact stories.",
      "Designed clean, accessible layouts using Tailwind CSS and Framer Motion for smooth, engaging animations.",
      "Implemented responsive design to ensure an optimal experience across devices — improving engagement and reach.",
      "Deployed and optimized the site on Vercel for fast performance, SEO readiness, and easy content updates.",
    ],
    images: ["/projects/freelance/aadarshnavjyoti/img_1.png"],
    technology: ["Nextjs", "TailwindCSS", "FramerMotion", "Vercel"],
    link: "https://aadarshnavjyoti.com/",
  },
  {
    title: "AI-Based Platforms",
    category: "Professional",
    description: [
      "Built AI-powered web platforms with real-time chat, analytics, and live data insights.",
      "Connected frontend to AI backends via REST APIs, WebSockets, and Server-Sent Events for seamless interactions.",
      "Developed modular, responsive features using Next.js App Router, Shadcn UI, Zustand, and Recharts for dynamic dashboards.",
      "Ensured accessibility and optimal navigation for smooth user experience across all devices.",
    ],
    images: ["/projects/professional/ai_platform/img_1.png"],
    technology: [
      "Nextjs",
      "TailwindCSS",
      "Nodejs",
      "Shadcn",
      "Zustand",
      "Recharts",
      "WebSocket",
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
    images: ["/projects/professional/whatsapp_campaign/img_1.jpg"],
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
      "/projects/professional/transport_order/img_1.jpg",
      "/projects/professional/transport_order/img_2.jpg",
    ],
    technology: [
      "Nextjs",
      "Golang",
      "PostgreSQL",
      "Redux",
      "MUI",
      "StyledComponents",
      "ReactIntl",
    ],
  },
];
