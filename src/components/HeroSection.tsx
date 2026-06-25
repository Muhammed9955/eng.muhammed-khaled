"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Star } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/5 text-primary text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span>{t.hero.tag}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Micro stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
              <div className="bg-slate-900/50 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-2xl font-black text-primary">5+</span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold mt-1 block">
                  {language === "ar" ? "سنوات خبرة" : "Years Exp"}
                </span>
              </div>
              <div className="bg-slate-900/50 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-2xl font-black text-emerald-400">100%</span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold mt-1 block">
                  {language === "ar" ? "تطبيق عملي" : "Hands-on"}
                </span>
              </div>
              <div className="bg-slate-900/50 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-2xl font-black text-amber-500">Active</span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold mt-1 block">
                  {language === "ar" ? "مطور برمجيات" : "Developer"}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a
                href="/#course"
                className="bg-primary hover:bg-primary-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                {t.hero.cta_course}
              </a>
              <a
                href="/#contact"
                className="bg-transparent hover:bg-white/5 border border-slate-700 text-white text-base font-bold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                {t.hero.cta_contact}
              </a>
            </div>
          </div>

          {/* Graphic/Avatar Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Glowing border container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-slate-900 border border-slate-800 p-2 shadow-2xl">
              {/* Decorative glowing lines */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary to-emerald-500 rounded-3xl opacity-30 blur animate-pulse" />
              
              <div className="relative w-full h-full rounded-[20px] bg-slate-950 overflow-hidden border border-white/5 group">
                <img
                  src="/profile.jpg"
                  alt="Eng. Muhammed Khaled"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Bottom Overlay Gradient for Details */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-4 pt-12 flex flex-col items-center text-center">
                  <span className="text-lg font-bold  tracking-tight">Eng. Muhammed Khaled</span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5">Software Engineer @ SehaPracto</span>
                </div>
              </div>
            </div>

            {/* Floating tags */}
            <div className="absolute top-10 right-4 sm:-right-6 glass px-4 py-2 rounded-xl text-xs flex items-center gap-2 border border-emerald-500/20 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-200">5+ Years FullStack Dev</span>
            </div>
            {/* <div className="absolute bottom-10 left-4 sm:-left-6 glass px-4 py-2 rounded-xl text-xs flex items-center gap-2 border border-primary/20 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-slate-200">React Native & Nest.js</span>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
