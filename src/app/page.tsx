"use client";

import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import CourseSection from "@/components/course/CourseSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";

import { courseSchema } from "@/config/data";

export default function Home() {


  return (
    <>
      {/* Insert JSON-LD Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <div className="relative overflow-hidden min-h-screen">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <CourseSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
