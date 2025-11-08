"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <div className="w-12 h-12">
            <Image src={"/site_icon.png"} alt="Logo" width={100} height={100} />
          </div>
        </Link>

        {/* Center Section — Links */}
        <div className="flex items-center gap-6">
          <Link
            href="mailto:bipuldubey.dev@gmail.com"
            className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition"
          >
            <Mail className="w-4 h-4" />
            Email
          </Link>

          <Link
            href="https://linkedin.com/in/bipuldubey"
            target="_blank"
            className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>

          <Link
            href="https://github.com/bipuldubey"
            target="_blank"
            className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-lg text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Bipul Dubey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
