"use client";

import React from "react";
import { useLanguage } from "../LanguageContext";
import HeroContent from "./HeroContent";
import HeroAvatar from "./HeroAvatar";

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <HeroContent t={t} language={language} />
          <HeroAvatar language={language} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
