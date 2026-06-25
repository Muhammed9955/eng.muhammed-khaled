"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="py-8 border-t border-white/5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <p className="mb-2">
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
        </p>
        <p className="flex items-center justify-center gap-1">
          <span>{t.footer.designed_by}</span>
          <span className="text-red-500">❤️</span>
          <span>{language === "ar" ? "باستخدام Next.js & Tailwind" : "with Next.js & Tailwind"}</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
