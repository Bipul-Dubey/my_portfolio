"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionValue, useTransform } from "framer-motion";

// Strictly typed platform names
type Platform = "Amazon Web Services" | "Udemy" | "NPTEL";

// Colors for each platform
const platformColors: Record<Platform, string> = {
  "Amazon Web Services": "#FF9900", // AWS Orange
  Udemy: "#EC5252", // Udemy Red
  NPTEL: "#E85C0D", // NPTEL Orange
};

const platformLogos: Record<Platform, string> = {
  "Amazon Web Services":
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",

  Udemy: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",

  NPTEL:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/NPTEL_Logo.png/600px-NPTEL_Logo.png",
};

// Certification type
interface Certification {
  platform: Platform;
  title: string;
  date: string;
  link?: string;
}

// Sample Data
const certifications: Certification[] = [
  {
    platform: "Amazon Web Services",
    title: "AWS Certified Developer – Associate",
    date: "2024",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/LFN755210FEE1FK8",
  },
  {
    platform: "Udemy",
    title: "The Complete JavaScript Course",
    date: "2023",
    link: "https://www.udemy.com/certificate/UC-21c61d15-09f3-483d-92d8-6a16c972ddee/",
  },
  {
    platform: "NPTEL",
    title: "AI: Search Methods for Problem Solving",
    date: "2023",
    link: "https://www.kindpng.com/picc/m/152-1520962_nptel-logo-hd-png-download.png",
  },
  {
    platform: "Udemy",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    date: "2022",
    link: "https://www.udemy.com/certificate/UC-bff23248-057c-4052-81f0-4ecc5a0214f5/",
  },
];

// Single Certification Card component
function CertificationCard({ cert }: { cert: Certification }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);
  const color = platformColors[cert.platform];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const logo = platformLogos[cert.platform];

  return (
    <motion.article
      style={{ rotateX, rotateY, borderColor: color }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.04,
        boxShadow: `0 0 30px ${color}40`,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 15,
        duration: 0.4,
      }}
      className="rounded-2xl bg-white/70 border shadow-md p-6 flex flex-col items-center transition-all duration-300 text-center backdrop-blur-xl"
    >
      {/* Logo */}
      <div
        className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center bg-white mb-4 border border-gray-200 shadow-sm"
        style={{ boxShadow: `0 2px 10px ${color}25` }}
      >
        <Image
          src={logo}
          alt={cert.platform}
          loader={() => logo}
          width={48}
          height={48}
          className="object-contain w-12 h-12"
          sizes="(max-width: 768px) 48px, 64px"
          priority={false}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {cert.title}
      </h3>

      {/* Platform */}
      <div className="text-sm font-medium mb-1" style={{ color }}>
        {cert.platform}
      </div>

      {/* Date */}
      <div className="text-muted-foreground text-xs mb-5">{cert.date}</div>

      {/* View Credential */}
      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-1 rounded-full text-white text-xs font-semibold transition-all"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}50`,
          }}
        >
          View Credential
        </a>
      )}
    </motion.article>
  );
}

// Main Grid component
export default function CertificationsGrid() {
  return (
    <section className="py-12 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-primary text-center mb-14"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certifications.map((cert, i) => (
          <CertificationCard cert={cert} key={cert.title + i} />
        ))}
      </div>
    </section>
  );
}
