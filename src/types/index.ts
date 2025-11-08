import { IconType } from "react-icons";

export type TProject = {
  title: string;
  description: string | string[];
  category: "Professional" | "Freelance" | "Personal";
  images: string[];
  technology: string[];
  link?: string;
};

export type TTechnology = {
  name: string;
  icon: IconType;
  color: string;
};
