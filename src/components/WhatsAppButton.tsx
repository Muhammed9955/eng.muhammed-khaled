"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "./LanguageContext";

export const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();
  
  // Custom message prepended based on language
  const customMessage = language === "ar" 
    ? "مرحباً م. محمد، أريد الاستفسار عن كورس تطوير الويب وحجز مقعد!"
    : siteConfig.course.whatsappMessage;
    
  const fullWhatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className={`fixed bottom-6 z-40 ${language === "ar" ? "left-6" : "right-6"}`}>
      {/* Ripple Rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping duration-1000"></span>
      <a
        href={fullWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 hover:rotate-6 active:scale-95 transition-all"
        title="WhatsApp Support"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.372-9.865 9.8.001 2.11.549 4.15 1.597 5.979l-.997 3.646 3.819-.981zm11.286-6.4c-.3-.149-1.772-.864-2.046-.962-.273-.1-.472-.149-.672.15-.2.298-.772.962-.947 1.16-.175.199-.349.224-.649.075-.3-.149-1.266-.46-2.41-1.466-.89-.783-1.49-1.75-1.665-2.049-.175-.3-.019-.462.13-.611.135-.133.3-.349.45-.523.15-.174.2-.298.3-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.175-.004-.375-.005-.574-.005-.2 0-.524.074-.798.372-.273.298-1.045 1.007-1.045 2.457 0 1.449 1.07 2.85 1.22 3.049.15.198 2.105 3.172 5.099 4.442.713.303 1.269.484 1.703.621.716.226 1.368.194 1.882.119.573-.085 1.772-.715 2.022-1.407.25-.691.25-1.284.175-1.407-.075-.124-.275-.199-.575-.349z"/>
        </svg>
      </a>
    </div>
  );
};
export default WhatsAppButton;
