"use client";

import MainFooter from "@/components/main-footer";
import AboutSection from "@/components/sections/about-section";
import ContactMeSection from "@/components/sections/contact-me-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";

// TODO: Assign keys for icons (& other elements) properly

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactMeSection />
      <MainFooter />
    </div>
  );
}
