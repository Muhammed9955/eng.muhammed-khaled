"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, theme, toggleTheme } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const navLinks = [
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.course, href: "/#course" },
    { name: language === "ar" ? "جميع الكورسات" : "All Courses", href: "/courses" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 relative overflow-hidden flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-500 p-0.5 shadow-sm group-hover:scale-105 transition-all">
              <img
                src="/profile.jpg"
                alt="Eng. Muhammed Khaled Logo"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-all">
              {t.nav.brand}
            </span>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-400 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-700 hover:border-primary/50 text-slate-400 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Lang switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-bold text-slate-400 dark:text-slate-300 hover:text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-primary/50 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>

            {/* CTA */}
            <a
              href="/#course"
              className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.hero.cta_course}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-primary hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-primary hover:bg-primary/10"
              aria-label="Toggle language"
            >
              <Globe className="w-4.5 h-4.5 text-primary" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-bold text-slate-400 hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <a
                  href="/#course"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-bold shadow-md transition-all text-sm"
                >
                  {t.hero.cta_course}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
