"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Link from "next/link";
import { Menu, X, User, FolderGit2, Mail } from "lucide-react";
import Image from "next/image";

// ✅ Make sure all icons are valid Lucide components
const navLinks = [
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Contact", href: "/contact", icon: Mail },
];

function NavItem({
  name,
  href,
  Icon,
  hasHovered,
  setHasHovered,
}: {
  name: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  hasHovered: boolean;
  setHasHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isContact = name.toLowerCase() === "contact";

  const pathVariants = {
    rest: { pathLength: 0 },
    hover: {
      pathLength: 1,
      transition: { duration: 0.5, ease: easeInOut },
    },
    active: {
      pathLength: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const wavePath =
    "M0,5 C20,0 40,10 60,5 S100,10 120,5 S160,10 180,5 S220,10 240,5";

  const handleHoverStart = () => setHasHovered(true);

  return (
    <motion.div
      className="relative group"
      initial="rest"
      animate={isContact && !hasHovered ? "active" : "rest"}
      whileHover="hover"
      onHoverStart={handleHoverStart}
    >
      <Link
        href={href}
        className="flex items-center gap-2 text-lg transition-colors"
        style={{ color: "var(--foreground, #111)" }}
      >
        <Icon className="w-5 h-5" />
        <span>{name}</span>
      </Link>

      <svg
        viewBox="0 0 240 15"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 -bottom-1.5 w-full h-2 pointer-events-none"
        preserveAspectRatio="none"
      >
        <motion.path
          d={wavePath}
          fill="transparent"
          stroke={
            isContact && !hasHovered ? "#1d4ed8" : "var(--foreground, #111)"
          }
          strokeWidth={isContact && !hasHovered ? 4 : 2}
          strokeLinecap="round"
          variants={pathVariants}
        />
      </svg>
    </motion.div>
  );
}

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasHovered) {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        setHasHovered(false);
      }, 3000); // ⏳ restart wave after 3s
    }

    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, [hasHovered]);

  useEffect(() => {
    if (typeof window !== "undefined") setTimeout(() => setMounted(true), 50);

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null;

  const backgroundLight = scrolled
    ? "rgba(255,255,255,0.75)"
    : "linear-gradient(90deg, rgba(246,244,255,0.9) 0%, rgba(250,250,255,0.95) 100%)";

  return (
    <motion.header
      initial={false}
      animate={{
        width: scrolled ? "90%" : "95%",
        borderRadius: "9999px",
        background: backgroundLight,
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 25px rgba(0,0,0,0.08)" : "none",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-5 left-1/2 z-50 flex items-center justify-between px-6 py-3 border border-border -translate-x-1/2"
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 relative">
          <Image src="/site_icon.png" alt="logo" width={100} height={100} />
        </div>
        <span className="font-bold text-lg">Bipul Dubey</span>
      </Link>

      {/* ✅ Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <NavItem
            key={link.name}
            name={link.name}
            href={link.href}
            Icon={link.icon}
            hasHovered={hasHovered}
            setHasHovered={setHasHovered}
          />
        ))}
      </nav>

      {/* ✅ Mobile Menu */}
      <div className="md:hidden relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          className="p-1"
          style={{ color: "var(--primary)" }}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 mt-3 w-56 rounded-xl shadow-lg bg-white border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 py-2 px-3 rounded-md text-lg hover:bg-accent transition"
                    style={{ color: "var(--foreground)" }}
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
