import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import Projects from "@/components/Projects";
import ContactUs from "@/components/contact";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Projects />
      <ContactUs />
    </>
  );
};

export default HomePage;
