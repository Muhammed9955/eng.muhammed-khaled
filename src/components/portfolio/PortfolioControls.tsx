import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "./projectsData";
import { useLanguage } from "../LanguageContext";

interface PortfolioControlsProps {
  projects: Project[];
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export const PortfolioControls: React.FC<PortfolioControlsProps> = ({
  projects,
  activeIndex,
  onPrev,
  onNext,
  onDotClick
}) => {
  const { language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <>
      {/* Nav Controls */}
      <div className="absolute bottom-6 right-6 md:bottom-auto md:top-6 md:right-8 flex gap-3 z-20" dir="ltr">
        <button
          onClick={isRtl ? onNext : onPrev}
          className="w-10 h-10 rounded-xl glass hover:border-primary/40 hover:text-primary flex items-center justify-center text-slate-400 cursor-pointer transition-all shadow-md active:scale-95"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={isRtl ? onPrev : onNext}
          className="w-10 h-10 rounded-xl glass hover:border-primary/40 hover:text-primary flex items-center justify-center text-slate-400 cursor-pointer transition-all shadow-md active:scale-95"
          aria-label="Next Project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8 md:mt-0">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => onDotClick(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              idx === activeIndex ? "bg-primary w-6" : "bg-slate-700 hover:bg-slate-500"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
};
export default PortfolioControls;
