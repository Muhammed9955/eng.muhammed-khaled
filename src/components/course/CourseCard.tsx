"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";
import { siteConfig } from "@/config/site";
import { Course } from "@/config/courses";
import { ArrowLeft, ArrowRight, Share2, Check } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { language, theme } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isDark = theme === "dark";

  const titleColor = isDark ? "#ffffff" : "#111827";
  const descColor = isDark ? "#e2e8f0" : "#374151";
  const durationColor = isDark ? "#94a3b8" : "#6b7280";
  const cardBg = isDark ? "rgba(17,24,39,0.6)" : "rgba(255,255,255,0.9)";

  const title = language === "ar" ? course.title.ar : course.title.en;
  const desc = language === "ar" ? course.desc.ar : course.desc.en;
  const badge = course.badge ? (language === "ar" ? course.badge.ar : course.badge.en) : null;
  const duration = language === "ar" ? course.duration.ar : course.duration.en;
  
  const customMessage = language === "ar" ? course.whatsappMessage.ar : course.whatsappMessage.en;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/courses/${course.id}`;
    
    if (typeof navigator !== "undefined" && typeof navigator.share !== "undefined") {
      try {
        await navigator.share({
          title: `${title} | Eng. Muhammed Khaled`,
          text: desc,
          url: shareUrl,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error(err);
        }
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

  return (
    <div style={{ background: cardBg }} className="flex flex-col justify-between overflow-hidden group h-full rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden border-b border-white/5">
        <Link href={`/courses/${course.id}`} className="block w-full h-full">
          <img
            src={course.image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
          />
          {badge && (
            <span className="absolute top-4 right-4 bg-primary text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-full shadow-lg border border-white/10">
              {badge}
            </span>
          )}
        </Link>
        
        {/* Float Share Button */}
        <button
          onClick={handleShare}
          className="absolute top-4 left-4 w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-primary/40 transition-all shadow-md cursor-pointer"
          title="Share Course"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span style={{ color: durationColor }} className="text-xs font-semibold uppercase tracking-wider block mb-2">
            {duration}
          </span>
          <h3 style={{ color: titleColor }} className="text-lg sm:text-xl font-bold group-hover:text-primary transition-all line-clamp-2 leading-snug mb-3">
            <Link href={`/courses/${course.id}`}>
              {title}
            </Link>
          </h3>
          <p style={{ color: descColor }} className="text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
            {desc}
          </p>
        </div>

        <div>
          {/* Divider */}
          <div className="border-t border-white/5 my-4" />

          {/* Action Footer */}
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/courses/${course.id}`}
              className="text-sm text-primary hover:text-primary-hover font-extrabold flex items-center gap-1.5 transition-all"
            >
              <span>{language === "ar" ? "تفاصيل الكورس" : "Course Details"}</span>
              {language === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-5 py-3 rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.372-9.865 9.8.001 2.11.549 4.15 1.597 5.979l-.997 3.646 3.819-.981zm11.286-6.4c-.3-.149-1.772-.864-2.046-.962-.273-.1-.472-.149-.672.15-.2.298-.772.962-.947 1.16-.175.199-.349.224-.649.075-.3-.149-1.266-.46-2.41-1.466-.89-.783-1.49-1.75-1.665-2.049-.175-.3-.019-.462.13-.611.135-.133.3-.349.45-.523.15-.174.2-.298.3-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.175-.004-.375-.005-.574-.005-.2 0-.524.074-.798.372-.273.298-1.045 1.007-1.045 2.457 0 1.449 1.07 2.85 1.22 3.049.15.198 2.105 3.172 5.099 4.442.713.303 1.269.484 1.703.621.716.226 1.368.194 1.882.119.573-.085 1.772-.715 2.022-1.407.25-.691.25-1.284.175-1.407-.075-.124-.275-.199-.575-.349z" />
              </svg>
              <span>{language === "ar" ? "احجز الآن" : "Book Now"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
