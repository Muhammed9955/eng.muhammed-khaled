"use client";

import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { coursesData } from "@/config/courses";
import CourseCard from "./CourseCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CourseSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % coursesData.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + coursesData.length) % coursesData.length);
  };

  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 150 : -150,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const }
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -150 : 150,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" as const }
    })
  };

  return (
    <section id="course" className="py-20 relative overflow-hidden  border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            {language === "ar" ? "أكاديمية التدريب" : "Training Academy"}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-200 leading-tight">
            {language === "ar" ? "الكورسات والورش التدريبية" : "Available Training Courses"}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {language === "ar"
              ? "برامج تدريبية متخصصة ومكثفة تركز على التطبيق العملي لبناء مسيرتك المهنية في هندسة البرمجيات."
              : "Practical, career-focused bootcamps and training sessions designed to take you from zero to production ready."}
          </p>
        </div>

        {/* Desktop View (Show as Responsive Grid) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {coursesData.map((course) => (
            <div key={course.id} className="hover:scale-[1.01] transition-all duration-300">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider view */}
        <div className="lg:hidden relative max-w-md mx-auto min-h-[480px]">
          {/* Navigation Controls */}
          <div className="absolute -top-12 right-0 flex gap-2 z-20" dir="ltr">
            <button
              onClick={language === "ar" ? handleNext : handlePrev}
              className="w-9 h-9 rounded-lg glass hover:border-primary/40 flex items-center justify-center text-slate-400 hover:text-primary transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Previous Course"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={language === "ar" ? handlePrev : handleNext}
              className="w-9 h-9 rounded-lg glass hover:border-primary/40 flex items-center justify-center text-slate-400 hover:text-primary transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Next Course"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Slider Frame */}
          <div className="w-full overflow-hidden py-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <CourseCard course={coursesData[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {coursesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? "right" : "left");
                  setActiveIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex ? "bg-primary w-5" : "bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Explore all courses CTA */}
        <div className="mt-16 text-center pt-8 border-t border-white/5">
          <p className="text-slate-400 text-sm sm:text-base mb-4">
            {language === "ar" 
              ? "هل تريد تصفح كامل تفاصيل ومناهج الكورسات؟" 
              : "Want to check curriculum schedules and full details?"}
          </p>
          <a
            href="/courses"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-white/10 text-white font-bold px-6 py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{language === "ar" ? "تصفح جميع الكورسات والورش" : "Browse All Courses & Workshops"}</span>
            <span>{language === "ar" ? "←" : "→"}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
export default CourseSection;
