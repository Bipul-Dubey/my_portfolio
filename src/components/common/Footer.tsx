"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactLinks } from "@/constants/site_constant";

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
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {ContactLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
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
