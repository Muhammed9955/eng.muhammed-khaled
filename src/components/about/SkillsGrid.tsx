import React from "react";
import { Cpu, UserCheck } from "lucide-react";
import { skills } from "@/config/data";

interface SkillsGridProps {
  t: any;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ t }) => {
  return (
    <div className="glass-card border border-white/5 p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
        <Cpu className="text-primary w-5 h-5" />
        <span>{t.about.skills_title}</span>
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-950/60 border border-white/5 p-3 rounded-xl flex items-center gap-2 hover:border-slate-800 transition-all"
          >
            <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-sm sm:text-base text-slate-300 font-semibold truncate">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsGrid;
