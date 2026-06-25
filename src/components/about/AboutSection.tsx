"use client";

import React from "react";
import { useLanguage } from "../LanguageContext";
import ExperienceCard from "./ExperienceCard";
import SkillsGrid from "./SkillsGrid";

export const  AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 border-t border-white/5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">{t.about.title}</h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">{t.about.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Write-up (Lg: 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-sm sm:text-base">
              <p className="mb-4">{t.about.description_1}</p>
              <p>{t.about.description_2}</p>
            </div>

            {/* Experience timeline card */}
            <ExperienceCard t={t} />
          </div>

          {/* Skills Grid (Lg: 5 cols) */}
          <div className="lg:col-span-5">
            <SkillsGrid t={t} />
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutSection;
