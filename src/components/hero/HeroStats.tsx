import React from "react";
import { useLanguage } from "../LanguageContext";

interface HeroStatsProps {
  language: "en" | "ar";
}

export const HeroStats: React.FC<HeroStatsProps> = ({ language }) => {
  const { theme } = useLanguage();
  const isAr = language === "ar"; 
  const isDark = theme === "dark";
  const labelColor = isDark ? "#e2e8f0" : "#374151";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(8,145,178,0.15)";

  return (
    <div className={`grid grid-cols-3 gap-4 pt-4 max-w-md`}>
      <div style={{ border: cardBorder }} className={`p-3.5 rounded-xl text-center ${cardBgClass}`}>
        <span className="block text-2xl font-black text-primary">5+</span>
        <span style={{ color: labelColor }} className="text-xs uppercase font-bold mt-1 block">
          {language === "ar" ? "سنوات خبرة" : "Years Exp"}
        </span>
      </div>
      <div style={{ border: cardBorder }} className={`p-3.5 rounded-xl text-center ${cardBgClass}`}>
        <span className="block text-2xl font-black text-emerald-400">100%</span>
        <span style={{ color: labelColor }} className="text-xs uppercase font-bold mt-1 block">
          {language === "ar" ? "تطبيق عملي" : "Hands-on"}
        </span>
      </div>
      <div style={{ border: cardBorder }} className={`p-3.5 rounded-xl text-center ${cardBgClass}`}>
        <span className="block text-2xl font-black text-amber-500">Active</span>
        <span style={{ color: labelColor }} className="text-xs uppercase font-bold mt-1 block">
          {language === "ar" ? "مطور برمجيات" : "Developer"}
        </span>
      </div>
    </div>
  );
};

export default HeroStats;
