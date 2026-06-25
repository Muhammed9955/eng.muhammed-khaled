"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/config/translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  dir: "ltr" | "rtl";
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("ar");
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Language;
    if (storedLang && (storedLang === "en" || storedLang === "ar")) {
      setLanguageState(storedLang);
    }
    
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      setThemeState(storedTheme);
    } else if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(prefersDark ? "dark" : "light");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setThemeState(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const t = translations[language];
  const dir = language === "ar" ? "rtl" : "ltr";

  // Update HTML attributes dynamically
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  // Update HTML theme class list dynamically
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, theme, toggleTheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
