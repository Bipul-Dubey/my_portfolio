import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getExperience(startDate: string = "2023-01-17") {
  const start = new Date(startDate);
  const now = new Date();

  const diffInMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  return { years, months };
}

export function getFormattedExperience(
  dateString: string = "17/01/2023"
): string {
  const [day, month, year] = dateString.split("/").map(Number);
  const startDate = new Date(year, month - 1, day);
  const now = new Date();

  // Calculate total difference in months
  const diffInMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  // Build formatted string
  if (years === 0 && months === 0) return "just started";
  if (years === 0) return `${months} month${months > 1 ? "s" : ""}`;
  if (months === 0) return `${years}+ year${years > 1 ? "s" : ""}`;
  return `${years}+ year${years > 1 ? "s" : ""} ${months} month${
    months > 1 ? "s" : ""
  }`;
}
