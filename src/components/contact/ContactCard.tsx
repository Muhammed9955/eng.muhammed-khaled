import React from "react";

interface ContactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderClass: string; // e.g., "border-t-emerald-500", "border-t-primary"
  iconBgClass: string; // e.g., "bg-emerald-500/10", "bg-primary/10"
  iconColorClass: string; // e.g., "text-emerald-500", "text-primary"
  actionElement: React.ReactNode;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  icon,
  borderClass,
  iconBgClass,
  iconColorClass,
  actionElement
}) => {
  return (
    <div className={`glass-card p-6 flex flex-col justify-between items-center text-center group border-t-4 ${borderClass}`}>
      <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center ${iconColorClass} mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white text-lg">{title}</h4>
        <p className="text-sm text-slate-500 mt-1.5 mb-6 px-2">{description}</p>
      </div>
      {actionElement}
    </div>
  );
};
export default ContactCard;
