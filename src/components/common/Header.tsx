"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setMounted(true);
      }, 50);
    }

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return;

  // Adaptive background using palette tones
  const backgroundLight = scrolled
    ? "rgba(255, 255, 255, 0.7)"
    : "linear-gradient(90deg, rgba(246,244,255,0.9) 0%, rgba(250,250,255,0.95) 100%)";

  return (
    <motion.header
      initial={false}
      animate={{
        width: scrolled ? "90%" : "95%",
        borderRadius: "9999px",
        background: backgroundLight,
        backdropFilter: "blur(12px)",
        boxShadow: scrolled
          ? "0 4px 25px rgba(0, 0, 0, 0.08)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-5 left-1/2 z-99 flex items-center justify-between px-6 py-3
        border border-border 
        -translate-x-1/2 bg-transparent pointer-events-auto"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <div className="w-8 h-8">
          <Image src={"/site_icon.png"} alt="Logo" width={100} height={100} />
        </div>
        <span className="text-xl font-bold">Bipul Dubey</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="transition-colors"
            style={{
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--foreground)")
            }
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right Controls */}
      <div className="hidden md:flex items-center gap-3">
        <div>Contact</div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="transition"
          style={{ color: "var(--primary)" }}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="absolute right-0 mt-3 w-48 rounded-xl shadow-xl overflow-hidden border"
              style={{
                background: "var(--popover)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex flex-col p-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md py-2 px-3 transition-colors"
                    style={{
                      color: "var(--foreground)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.background =
                        "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.background =
                        "transparent")
                    }
                  >
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
