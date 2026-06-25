import React from "react";

interface HeroAvatarProps {
  language: "en" | "ar";
}

export const HeroAvatar: React.FC<HeroAvatarProps> = ({ language }) => {
  return (
    <div className="lg:col-span-5 flex justify-center relative">
      {/* Glowing border container */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-slate-900 border border-slate-800 p-2 shadow-2xl">
        {/* Decorative glowing lines */}
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary to-emerald-500 rounded-3xl opacity-30 blur animate-pulse" />
        
        <div className="relative w-full h-full rounded-[20px] bg-slate-950 overflow-hidden border border-white/5 group">
          <img
            src="/profile.jpg"
            alt="Eng. Muhammed Khaled"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
          />
          
          {/* Bottom Overlay Gradient for Details */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-4 pt-12 flex flex-col items-center text-center">
            <span className="text-lg font-bold text-white tracking-tight">Eng. Muhammed Khaled</span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">Software Engineer @ SehaPracto</span>
          </div>
        </div>
      </div>

      {/* Floating active status tag */}
      <div className="absolute top-10 right-4 sm:-right-6 glass px-5 py-2.5 rounded-xl text-sm flex items-center gap-2.5 border border-emerald-500/20 shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-slate-200 font-semibold">
          {language === "ar" ? "خبرة +5 سنوات" : "5+ Years FullStack Dev"}
        </span>
      </div>
    </div>
  );
};

export default HeroAvatar;
