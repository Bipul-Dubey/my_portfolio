import { XenonStackIcon } from "../assets/index,";
import { TECH_STACK_ICONS } from "./techstackicons";

export const SITE_DETAILS = {
  NAME: "Bipul Dubey",
  RESUME_URL: `https://drive.usercontent.google.com/uc?id=14Ass47trZjIZL-tTUFnSFTmZiPTIodjV&authuser=0&export=download`,
  HERO_SECTION: {
    HEADING:
      "Crafting Digital Experiences | Expertise in Frontend & Backend Development",
    SUB_HEADING:
      "I build and connect seamless web experiences, blending design with functionality.",
  },
  INTORDUCTION_SECTION: {
    HEADING: "Hi, I'm Bipul. Nice to meet you",
    SUB_HEADING:
      "Front-end developer with over 1.5 years of hands-on experience building responsive and user-centric web applications. Passionate about creating clean, intuitive interfaces and enhancing user experiences. Currently expanding into back-end development with a goal of becoming a skilled full-stack developer. Seeking opportunities to contribute to innovative projects and deepen my expertise in modern web technologies.",
  },
  MY_PROJECTS: [
    {
      site_logo_url: "",
      site_name: "Dev Utilities",
      short_description: "It's help developer or IT profession with tools.",
      site_url: "https://devutilities.netlify.app/",
    },
  ],
  PROFESSIONAL_EXPERIENCE: [
    {
      company_name: "XenonStack Private Limited",
      start_date: "Jan",
      end_date: "Sept (2023)",
      position: "Associate Software Engineer",
      role: "UI Engineer",
      responsibilities: [
        "Developed reusable React components.",
        "Implemented complex UI designs.",
        "Optimized app performance, reducing load time by 30%.",
        "Collaborated with backend developers to integrate APIs.",
        "Mentored junior team members.",
        "Wrote unit tests to ensure code quality.",
      ],
      icon: XenonStackIcon,
    },
    {
      company_name: "XenonStack Private Limited",
      start_date: "Jan",
      end_date: "Sept (2023)",
      position: "Software Engineer",
      role: "Full-Stack Developer",
      responsibilities: ["role 1", "role 2"],
      icon: XenonStackIcon,
    },
  ],
  TECHNICAL_SKILL: [
    {
      category: "Development Skills",
      skills: [
        {
          name: "HTML5",
          logo: TECH_STACK_ICONS.HTML5,
        },
        {
          name: "ReactJs",
          logo: TECH_STACK_ICONS.React_JS,
        },
        {
          name: "NextJs",
          logo: TECH_STACK_ICONS.NEXT_JS2,
        },
      ],
    },
  ],
};
