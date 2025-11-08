"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionValue, useTransform } from "framer-motion";

// ✅ 1️⃣ Strictly typed platform names
type Platform =
  | "Amazon Web Services"
  | "Microsoft Azure"
  | "Udemy"
  | "NPTEL"
  | "Coursera";

// ✅ 2️⃣ Colors for each platform
const platformColors: Record<Platform, string> = {
  "Amazon Web Services": "#FACC15", // yellow-400
  "Microsoft Azure": "#2563EB", // blue-600
  Udemy: "#22C55E", // green-500
  NPTEL: "#FB923C", // orange-400
  Coursera: "#4F46E5", // indigo-600
};

// ✅ 3️⃣ Certification type
interface Certification {
  platform: Platform;
  logo: string;
  title: string;
  date: string;
  link?: string;
}

// ✅ 4️⃣ Sample Data
const certifications: Certification[] = [
  {
    platform: "Amazon Web Services",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
    title: "AWS Certified Solutions Architect – Associate",
    date: "Jan 2024",
    link: "#",
  },
  {
    platform: "Microsoft Azure",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg",
    title: "Azure Fundamentals (AZ-900)",
    date: "Dec 2023",
    link: "#",
  },
  {
    platform: "Udemy",
    logo: "https://cdn.worldvectorlogo.com/logos/udemy-2.svg",
    title: "The Complete Node.js Developer Course",
    date: "Sep 2023",
    link: "#",
  },
  {
    platform: "NPTEL",
    logo: "https://nptel.ac.in/assets/images/logo.png",
    title: "AI: Search Methods for Problem Solving",
    date: "May 2023",
    link: "#",
  },
  {
    platform: "Coursera",
    logo: "https://logos-download.com/wp-content/uploads/2016/06/Coursera_logo_wordmark.png",
    title: "Machine Learning by Stanford University",
    date: "Apr 2022",
    link: "#",
  },
];

// ✅ 5️⃣ Single Certification Card component
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
          src={cert.logo}
          alt={cert.platform}
          loader={() => cert.logo}
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

// ✅ 6️⃣ Main Grid component
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
