import React from "react";
import { ExternalLink } from "lucide-react";
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
  const name = language === "ar" ? project.name.ar : project.name.en;
  const desc = language === "ar" ? project.desc.ar : project.desc.en;

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

      <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
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
            className="text-sm bg-slate-900 border border-white/5 px-4 py-2 rounded-lg text-slate-300 font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectDetails;
