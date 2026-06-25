"use client";

import React, { useState, useEffect } from "react";
import { Link as LinkIcon, Check, Share2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface ShareButtonsProps {
  title: string;
  courseId: string;
  courseImage: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, courseId, courseImage }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setShareUrl(`${window.location.origin}/courses/${courseId}`);
    
    if (typeof navigator !== "undefined" && typeof navigator.share !== "undefined") {
      setCanNativeShare(true);
    }
  }, [courseId]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleNativeShare = async () => {
    const shareData: ShareData = {
      title: `${title} | Eng. Muhammed Khaled`,
      text: language === "ar"
        ? `سجل الآن في دورة "${title}" وتعلّم تطوير الويب من الصفر حتى الاحتراف مع م. محمد خالد! تفاصيل الكورس هنا:`
        : `Enroll now in "${title}" and learn web development from scratch with Eng. Muhammed Khaled! Course details:`,
      url: shareUrl,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        console.error("Error sharing natively:", err);
      }
    }
  };

  const getWhatsAppShareLink = () => {
    const text = language === "ar"
      ? `سجل الآن في دورة "${title}" وتعلّم تطوير الويب من الصفر حتى الاحتراف مع م. محمد خالد! تفاصيل الكورس هنا:`
      : `Enroll now in "${title}" and learn web development from scratch with Eng. Muhammed Khaled! Course details:`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text + "\n" + shareUrl)}`;
  };

  const getFacebookShareLink = () => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  };

  return (
    <div className="glass-card p-5 border border-white/5 text-start space-y-4">
      <div className="flex items-center gap-2 text-white">
        <Share2 className="w-5 h-5 text-primary" />
        <h4 className="font-bold text-base">
          {language === "ar" ? "مشاركة الكورس" : "Share this Course"}
        </h4>
      </div>
      
      <p className="text-xs text-slate-400 leading-relaxed">
        {language === "ar" 
          ? "هل تعتقد أن هذا الكورس قد يفيد أحداً من أصدقائك؟ شاركه معهم الآن!" 
          : "Think this course might help someone? Share the link with them!"}
      </p>

      <div className="space-y-3 pt-2">
        {/* Native Mobile Share */}
        {canNativeShare && (
          <button
            onClick={handleNativeShare}
            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-xl transition duration-300 cursor-pointer text-xs shadow-md"
          >
            <Share2 className="w-4 h-4" />
            <span>{language === "ar" ? "مشاركة عبر تطبيقات الهاتف" : "Share via App"}</span>
          </button>
        )}

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`flex items-center justify-between w-full font-bold py-3 px-4 rounded-xl border transition duration-300 cursor-pointer text-xs ${
            copied
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              : "bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center gap-2">
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <LinkIcon className="w-4 h-4 text-primary" />}
            <span>{copied ? (language === "ar" ? "تم النسخ!" : "Copied!") : (language === "ar" ? "نسخ رابط الكورس" : "Copy Link")}</span>
          </div>
        </button>

        {/* Social Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Share on WhatsApp */}
          <a
            href={getWhatsAppShareLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl transition duration-300 text-xs cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.372-9.865 9.8.001 2.11.549 4.15 1.597 5.979l-.997 3.646 3.819-.981zm11.286-6.4c-.3-.149-1.772-.864-2.046-.962-.273-.1-.472-.149-.672.15-.2.298-.772.962-.947 1.16-.175.199-.349.224-.649.075-.3-.149-1.266-.46-2.41-1.466-.89-.783-1.49-1.75-1.665-2.049-.175-.3-.019-.462.13-.611.135-.133.3-.349.45-.523.15-.174.2-.298.3-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.175-.004-.375-.005-.574-.005-.2 0-.524.074-.798.372-.273.298-1.045 1.007-1.045 2.457 0 1.449 1.07 2.85 1.22 3.049.15.198 2.105 3.172 5.099 4.442.713.303 1.269.484 1.703.621.716.226 1.368.194 1.882.119.573-.085 1.772-.715 2.022-1.407.25-.691.25-1.284.175-1.407-.075-.124-.275-.199-.575-.349z" />
            </svg>
            <span>{language === "ar" ? "واتساب" : "WhatsApp"}</span>
          </a>

          {/* Share on Facebook */}
          <a
            href={getFacebookShareLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 px-4 rounded-xl transition duration-300 text-xs cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>{language === "ar" ? "فيسبوك" : "Facebook"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ShareButtons;
