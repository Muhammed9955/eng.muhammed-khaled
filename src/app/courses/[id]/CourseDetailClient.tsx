"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { coursesData } from "@/config/courses";
import { siteConfig } from "@/config/site";
import ShareButtons from "@/components/ShareButtons";
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Users, 
  CheckCircle2, 
  Calendar,
  Award,
  BookOpen,
  MessageCircle,
  ShieldCheck
} from "lucide-react";

export default function CourseDetailClient({ id }: { id: string }) {
  const { language } = useLanguage();
  
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const title = language === "ar" ? course.title.ar : course.title.en;
  const desc = language === "ar" ? course.desc.ar : course.desc.en;
  const badge = course.badge ? (language === "ar" ? course.badge.ar : course.badge.en) : null;
  const duration = language === "ar" ? course.duration.ar : course.duration.en;
  const targetAudience = language === "ar" ? course.targetAudience.ar : course.targetAudience.en;
  const longDesc = language === "ar" ? course.longDesc.ar : course.longDesc.en;
  const outcomes = language === "ar" ? course.outcomes.ar : course.outcomes.en;
  const syllabus = language === "ar" ? course.syllabus.ar : course.syllabus.en;
  const customMessage = language === "ar" ? course.whatsappMessage.ar : course.whatsappMessage.en;
  
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className="flex-1 flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Banner */}
      <header className="relative w-full py-16 md:py-24 border-b border-white/5 ">
        <div className="max-w-5xl mx-auto text-center px-4 relative z-10 space-y-4">
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-4 text-xs sm:text-sm font-bold transition-all"
          >
            {language === "ar" ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{language === "ar" ? "العودة لجميع الكورسات" : "Back to All Courses"}</span>
          </Link>

          {badge && (
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-200 leading-tight max-w-3xl mx-auto">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {desc}
          </p>
        </div>
      </header>

      {/* Main content grid */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Poster / Flyer */}
            <div className="glass-card border border-white/5 overflow-hidden flex justify-center items-center">
              <div className="relative rounded-lg overflow-hidden border border-white/5  max-w-2xl w-full aspect-[4/3]">
                <img
                  src={course.image}
                  alt={title}
                  className="w-full h-full object-contain object-center "
                />
              </div>
            </div>

            {/* Quick specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Duration Card */}
              <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-base mb-1">
                    {language === "ar" ? "المدة الزمنية" : "Duration"}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold">{duration}</p>
                </div>
              </div>

              {/* Target Audience Card */}
              <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-base mb-1">
                    {language === "ar" ? "الفئة المستهدفة" : "Target Audience"}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed">{targetAudience}</p>
                </div>
              </div>
            </div>

            {/* Course axis details */}
            <section className="glass-card p-6 sm:p-8 border border-white/5 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 border-l-4 border-l-primary pl-3 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span>{language === "ar" ? "تفاصيل ومحاور الكورس" : "Course Overview"}</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {longDesc}
              </p>
            </section>

            {/* Outcomes */}
            <section className="glass-card p-6 sm:p-8 border border-white/5 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 border-l-4 border-l-primary pl-3">
                {language === "ar" ? "ماذا ستتعلم في هذا الكورس؟" : "What you will learn in this course:"}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {outcomes.map((outcome, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-3  p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Detailed Syllabus */}
            <section className="glass-card p-6 sm:p-8 border border-white/5 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 border-l-4 border-l-primary pl-3">
                {language === "ar" ? "منهج الكورس التفصيلي" : "Detailed Course Curriculum"}
              </h2>
              <div className="space-y-4">
                {syllabus.map((lesson, idx) => (
                  <div 
                    key={idx} 
                    className=" border border-white/5 p-5 rounded-xl flex gap-4 items-start"
                  >
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold border border-primary/20 shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-200 text-base mb-1">{lesson.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{lesson.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: CTA Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Registration Box */}
            <div className=" border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg sm:text-xl font-bold text-slate-200 mb-4 relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{language === "ar" ? "التسجيل وحجز المقاعد" : "Reserve Your Seat"}</span>
              </h3>
              
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
                {language === "ar" 
                  ? "بادر بالتسجيل لتأكيد حضورك مع الدفعة الحالية، الأماكن محدودة لضمان المتابعة الفردية." 
                  : "Register early to secure your spot with the current batch. Seats are strictly limited to ensure personal reviews."}
              </p>

              {/* Pricing breakdown */}
              <div className=" border border-white/5 p-4 rounded-xl mb-6 relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase line-through">
                    {course.originalPrice} {course.priceCurrency}
                  </span>
                  <span className="block text-lg font-black text-slate-200">
                    {course.discountedPrice} {course.priceCurrency}
                  </span>
                </div>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-2 py-1 rounded">
                  {language === "ar" ? "خصم 50%" : "50% OFF"}
                </span>
              </div>

              <div className="space-y-4 relative z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                  <span>{language === "ar" ? "حجز الكورس عبر واتساب" : "Book via WhatsApp"}</span>
                </a>
              </div>
            </div>

            {/* Sharing component */}
            <ShareButtons title={title} courseId={course.id} courseImage={course.image} />

            {/* Trust box */}
            <div className="glass-card p-6 border border-white/5 text-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm mb-1">
                {language === "ar" ? "ضمان استرداد بالكامل" : "Full Money-Back Guarantee"}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {language === "ar" 
                  ? "تأكيد تام: لو حضرت الحصة الأولى ولم يناسبك الكورس، يمكنك استرداد قيمة حجزك بالكامل."
                  : "If you attend the first class and feel the course is not for you, get a full instant refund."}
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
