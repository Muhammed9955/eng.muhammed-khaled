"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { coursesData } from "@/config/courses";
import CourseCard from "@/components/course/CourseCard";
import { GraduationCap, Code } from "lucide-react";

export default function CoursesClient() {
  const { language } = useLanguage();

  return (
    <div className="flex-1 flex flex-col min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Banner */}
      <header className="relative w-full py-16 sm:py-24 border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20 shadow-inner">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-200 leading-tight">
            {language === "ar" ? "الدورات والورش التدريبية" : "Courses & Workshops"}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            {language === "ar"
              ? "برامج تدريبية متخصصة وتطبيقية لمساعدتك في بناء مستقبلك البرمجي واكتساب مهارات سوق العمل الفعلي."
              : "Practical, career-focused bootcamps and training sessions designed to help you start your software development career."}
          </p>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex items-center gap-2 mb-8 uppercase tracking-wider text-xs font-semibold">
          <Code className="text-primary w-4.5 h-4.5" />
          <span className="text-slate-400">
            {language === "ar" ? "كل البرامج المتاحة" : "All Available Programs"}
          </span>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}
