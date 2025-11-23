import { socialStyles } from "@/constants/socialStyles";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { MyInfo } from "./myInfo";

export const BASE_URL = "https://bipuldubey-portfolio.vercel.app";

export const ContactLinks = [
  {
    label: "Email",
    href: `mailto:${MyInfo.email}`,
    icon: Mail,
    gradient: socialStyles.email.gradient,
    hover: socialStyles.email.hover,
  },
  {
    label: "LinkedIn",
    href: MyInfo.linkedInUrl,
    icon: Linkedin,
    gradient: socialStyles.linkedin.gradient,
    hover: socialStyles.linkedin.hover,
  },
  {
    label: "GitHub",
    href: MyInfo.githubUrl,
    icon: Github,
    gradient: socialStyles.github.gradient,
    hover: socialStyles.github.hover,
  },
  {
    label: "Instagram",
    href: MyInfo.instagramUrl,
    icon: Instagram,
    gradient: socialStyles.instagram.gradient,
    hover: socialStyles.instagram.hover,
  },
];
