import React from "react";
import { Star } from "lucide-react";
import HeroStats from "./HeroStats";

interface HeroContentProps {
  t: any;
  language: "en" | "ar";
}

export const HeroContent: React.FC<HeroContentProps> = ({ t, language }) => {
  return (
    <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
      {/* Top Tagline */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-white/5 text-primary text-sm font-bold">
        <Star className="w-3.5 h-3.5 fill-primary text-primary" />
        <span>{t.hero.tag}</span>
      </div>
      
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-200 leading-tight">
        {t.hero.title}
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
        {t.hero.subtitle}
      </p>

      {/* Stats row */}
      <HeroStats language={language} />

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
        <a
          href="/#course"
          className="bg-primary hover:bg-primary-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
        >
          {t.hero.cta_course}
        </a>
        <a
          href="/#contact"
          className="bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-slate-300 dark:border-slate-700 text-foreground text-base font-bold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
        >
          {t.hero.cta_contact}
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
