import React from "react";
import { Project } from "./projectsData";

interface ProjectScreenshotProps {
  project: Project;
  language: "en" | "ar";
}

export const ProjectScreenshot: React.FC<ProjectScreenshotProps> = ({
  project,
  language
}) => {
  const name = language === "ar" ? project.name.ar : project.name.en;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="lg:col-span-7 relative group block cursor-pointer"
      title={language === "ar" ? "اضغط لزيارة الموقع" : "Click to visit website"}
    >
      {/* Glowing glow backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-emerald-500/10 rounded-2xl blur-lg group-hover:opacity-40 transition duration-1000 opacity-20 pointer-events-none" />

      <div className="relative rounded-2xl border border-white/5 bg-slate-950/80 overflow-hidden shadow-2xl aspect-[4/3] w-full flex items-center justify-center">
        <img
          src={project.image}
          alt={name}
          className="w-full h-full object-cover object-top transition duration-500 scale-100 group-hover:scale-[1.02]"
        />
      </div>
    </a>
  );
};
export default ProjectScreenshot;
