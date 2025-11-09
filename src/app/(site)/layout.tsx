import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { StarsBackground } from "@/components/ui/stars";
import { cn } from "@/lib/utils";
import React from "react";

import type { Metadata } from "next";
import { BASE_URL } from "@/constants/site_constant";

export const metadata: Metadata = {
  title: {
    default: "Bipul Dubey | Software Engineer",
    template: "%s | Bipul Dubey",
  },
  description:
    "Portfolio of Bipul Dubey — a Software Engineer specializing in modern web development using React, Next.js, TypeScript, and cloud technologies.",
  keywords: [
    "Bipul Dubey",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Javascript",
    "Go",
    "Golang",
    "TypeScript",
    "FastAPI",
    "Web Developer",
  ],
  authors: [{ name: "Bipul Dubey", url: BASE_URL }],
  creator: "Bipul Dubey",
  metadataBase: new URL(BASE_URL),

  // ✅ Favicon and App Icons
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: { url: "/favicon_io/apple-touch-icon.png", type: "image/png" },
    shortcut: "/favicon_io/favicon.ico",
  },

  // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Bipul Dubey – Software Engineer",
    description:
      "Explore Bipul Dubey’s portfolio showcasing projects, experience, and skills in full-stack web development.",
    url: BASE_URL,
    siteName: "Bipul Dubey Portfolio",
    images: [
      {
        url: "/site_icon.png",
        width: 512,
        height: 512,
        alt: "Bipul Dubey | Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter / X Metadata
  twitter: {
    card: "summary_large_image",
    title: "Bipul Dubey – Software Engineer",
    description:
      "Full Stack Developer portfolio showcasing professional experience, AI projects, and web innovations.",
    images: ["/site_icon.png"],
  },

  // ✅ Canonical & Category
  alternates: {
    canonical: BASE_URL,
  },
  category: "portfolio",

  // ✅ Manifest (for PWA)
  manifest: "/favicon_io/site.webmanifest",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <StarsBackground
        starColor={"#000"}
        className={cn(
          "bg-[radial-gradient(ellipse_at_bottom,#f5f5f5_0%,#fff_100%)]"
        )}
      >
        {children}
      </StarsBackground>
      <Footer />
    </>
  );
}
