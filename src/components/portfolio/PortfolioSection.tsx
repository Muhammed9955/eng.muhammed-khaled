"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./projectsData";
import ProjectDetails from "./ProjectDetails";
import ProjectScreenshot from "./ProjectScreenshot";
import PortfolioControls from "./PortfolioControls";

export const PortfolioSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Reset timer on change to prevent immediate skip
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (idx: number) => {
    setDirection(idx > activeIndex ? "right" : "left");
    setActiveIndex(idx);
  };

  const activeProject = projects[activeIndex];

  // Animation variants
  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 180 : -180,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" as const }
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -180 : 180,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    })
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            {language === "ar" ? "معرض أعمالي" : "My Portfolio"}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-200 leading-tight">
            {language === "ar" ? "مشاريع قمت بتطويرها" : "Projects I've Built"}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {language === "ar"
              ? "استعراض لبعض المنصات البرمجية الحقيقية والمشاريع التي قمت ببرمجتها لعملائي."
              : "Explore live production platforms and web applications engineered for optimal client success."}
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative glass-card border border-white/5 p-6 sm:p-8 md:p-12 rounded-3xl overflow-hidden min-h-[480px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Project Slide Animate */}
          <div className="mb-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Info Column */}
                <div className="lg:col-span-5">
                  <ProjectDetails
                    project={activeProject}
                    activeIndex={activeIndex}
                    totalProjects={projects.length}
                    language={language}
                  />
                </div>

                {/* Screenshot Column */}
                <ProjectScreenshot
                  project={activeProject}
                  language={language}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <PortfolioControls
            projects={projects}
            activeIndex={activeIndex}
            onPrev={handlePrev}
            onNext={handleNext}
            onDotClick={handleDotClick}
          />

        </div>

      </div>
    </section>
  );
};
export default PortfolioSection;
