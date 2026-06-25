import React from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { Project } from "./projectsData";

interface ProjectDetailsProps {
  project: Project;
  activeIndex: number;
  totalProjects: number;
  language: "en" | "ar";
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  activeIndex,
  totalProjects,
  language
}) => {
  const { theme } = useLanguage();
  const isDark = theme === "dark";
  const name = language === "ar" ? project.name.ar : project.name.en;
  const desc = language === "ar" ? project.desc.ar : project.desc.en;

  const tagBg = isDark ? "#1e293b" : "#f1f5f9";
  const tagText = isDark ? "#f1f5f9" : "#1e293b";
  const tagBorder = isDark ? "rgba(255,255,255,0.10)" : "rgba(8,145,178,0.18)";
  const descColor = isDark ? "#e2e8f0" : "#374151";


  return (
    <div className="space-y-6 text-start">
      <span className="text-xs sm:text-sm text-primary uppercase font-bold tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-2 rounded-full">
        {language === "ar"
          ? `مشروع ${activeIndex + 1} من ${totalProjects}`
          : `Project ${activeIndex + 1} of ${totalProjects}`}
      </span>

      <h3 className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight leading-tight">
        {name}
      </h3>

      <p style={{ color: descColor }} className="text-base sm:text-lg leading-relaxed">
        {desc}
      </p>

      {/* Live Link Button */}
      <div className="pt-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm sm:text-base bg-primary/10 border border-primary/20 hover:border-primary/50 hover:bg-primary/20 text-primary hover:text-primary-hover font-bold px-5 py-3 rounded-xl transition duration-300 shadow-sm cursor-pointer"
        >
          <span>{language === "ar" ? "زيارة الموقع الإلكتروني" : "Visit Live Website"}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: tagBg,
              color: tagText,
              border: `1px solid ${tagBorder}`,
            }}
            className="text-sm px-4 py-2 rounded-lg font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectDetails;
