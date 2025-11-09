"use client";

import Introduction from "@/components/AboutPage/Introduction";
import Experience from "@/components/AboutPage/Experience";
import CertificationsShowcase from "@/components/AboutPage/CertificationsShowcase";
import EducationHistory from "@/components/AboutPage/EducationHistory";
import ContactUs from "@/components/contact";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-1">
        <Introduction />
        <Experience />
        <CertificationsShowcase />
        <EducationHistory />
        <ContactUs />
      </div>
    </section>
  );
};

export default AboutPage;
