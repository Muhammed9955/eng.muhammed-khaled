import React from "react";
import { useLanguage } from "../LanguageContext";

interface HeroStatsProps {
  language: "en" | "ar";
}

export const HeroStats: React.FC<HeroStatsProps> = ({ language }) => {
  const { theme } = useLanguage();
  const isAr = language === "ar"; 
  const isDark = theme === "dark";
  const cardBgClass = isDark ? "bg-slate-900" : "bg-white shadow-sm";

  return (
    <div className={`grid grid-cols-3 gap-4 pt-4 max-w-md  `}>
      <div className={`border border-white/5 p-3.5 rounded-xl text-center ${cardBgClass}`}>
        <span className="block text-2xl font-black text-primary">5+</span>
        <span className="text-xs text-slate-500 uppercase font-bold mt-1 block">
          {language === "ar" ? "سنوات خبرة" : "Years Exp"}
        </span>
      </div>
      <div className={`border border-white/5 p-3.5 rounded-xl text-center ${cardBgClass}`}>
        <span className="block text-2xl font-black text-emerald-400">100%</span>
        <span className="text-xs text-slate-500 uppercase font-bold mt-1 block">
          {language === "ar" ? "تطبيق عملي" : "Hands-on"}
        </span>
      </div>
      <div className={`border border-white/5 p-3.5 rounded-xl text-center ${cardBgClass}`}>
        <span className="block text-2xl font-black text-amber-500">Active</span>
        <span className="text-xs text-slate-500 uppercase font-bold mt-1 block">
          {language === "ar" ? "مطور برمجيات" : "Developer"}
        </span>
      </div>
    </div>
  );
};

export default HeroStats;
