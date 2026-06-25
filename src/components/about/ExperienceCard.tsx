import React from "react";
import { Briefcase, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ExperienceCardProps {
  t: any;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ t }) => {
  return (
    <div className="glass-card p-6 border-l-4 border-l-primary mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h3 className="font-extrabold text-slate-200 text-lg flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <span>{t.about.sehapracto_role}</span>
        </h3>
        <span className="text-sm text-slate-500 font-bold">{t.about.sehapracto_date}</span>
      </div>
      <p className="text-base text-slate-400 leading-relaxed mb-4">
        {t.about.sehapracto_desc}
      </p>
      <a
        href={siteConfig.socials.sehapracto}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover font-extrabold"
      >
        <span>Visit SehaPracto</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
export default ExperienceCard;
