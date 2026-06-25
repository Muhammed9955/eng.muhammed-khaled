"use client";

import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import ContactCard from "./ContactCard";

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const activeWhatsappMessage = language === "ar"
    ? "مرحباً م. محمد، أريد التواصل معك بخصوص مشروعات البرمجة أو التدريب."
    : "Hello Eng. Muhammed, I'd like to get in touch with you regarding your development/coaching services!";

  const contactWhatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(activeWhatsappMessage)}`;

  return (
    <section id="contact" className="py-20  border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">{t.contact.title}</h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">{t.contact.subtitle}</p>
        </div>

        {/* Layout cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* WhatsApp Card */}
          <ContactCard
            title={t.contact.whatsapp_title}
            description={t.contact.whatsapp_desc}
            borderClass="border-t-emerald-500"
            iconBgClass="bg-emerald-500/10"
            iconColorClass="text-emerald-500"
            icon={
              <svg className="w-6 h-6 fill-emerald-500 text-emerald-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.372-9.865 9.8.001 2.11.549 4.15 1.597 5.979l-.997 3.646 3.819-.981zm11.286-6.4c-.3-.149-1.772-.864-2.046-.962-.273-.1-.472-.149-.672.15-.2.298-.772.962-.947 1.16-.175.199-.349.224-.649.075-.3-.149-1.266-.46-2.41-1.466-.89-.783-1.49-1.75-1.665-2.049-.175-.3-.019-.462.13-.611.135-.133.3-.349.45-.523.15-.174.2-.298.3-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.175-.004-.375-.005-.574-.005-.2 0-.524.074-.798.372-.273.298-1.045 1.007-1.045 2.457 0 1.449 1.07 2.85 1.22 3.049.15.198 2.105 3.172 5.099 4.442.713.303 1.269.484 1.703.621.716.226 1.368.194 1.882.119.573-.085 1.772-.715 2.022-1.407.25-.691.25-1.284.175-1.407-.075-.124-.275-.199-.575-.349z"/>
              </svg>
            }
            actionElement={
              <a
                href={contactWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg w-full transition-all text-center block"
              >
                {language === "ar" ? "راسلني الآن" : "Message on WhatsApp"}
              </a>
            }
          />

          {/* LinkedIn Card */}
          <ContactCard
            title={t.contact.linkedin_title}
            description={t.contact.linkedin_desc}
            borderClass="border-t-primary"
            iconBgClass="bg-primary/10"
            iconColorClass="text-primary"
            icon={
              <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            }
            actionElement={
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-5 py-2.5 rounded-lg w-full transition-all text-center block"
              >
                {language === "ar" ? "الملف الشخصي" : "View Profile"}
              </a>
            }
          />

          {/* Email Card */}
          <ContactCard
            title={t.contact.email_title}
            description={t.contact.email_desc}
            borderClass="border-t-amber-500"
            iconBgClass="bg-amber-500/10"
            iconColorClass="text-amber-500"
            icon={<Mail className="w-6 h-6" />}
            actionElement={
              <button
                onClick={copyEmail}
                className="bg-slate-900 border border-slate-700 hover:border-slate-500 text-black text-xs font-bold px-5 py-2.5 rounded-lg w-full transition-all cursor-pointer block"
              >
                {copiedEmail ? (
                  <span className="text-black">{language === "ar" ? "تم النسخ!" : "Copied!"}</span>
                ) : (
                  <span>{language === "ar" ? "نسخ البريد" : "Copy Email Address"}</span>
                )}
              </button>
            }
          />

        </div>
      </div>
    </section>
  );
};
export default ContactSection;
