import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Paragraph } from '../base/paragraph';

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  trend?: string;
  icon?: LucideIcon;
  color?: string;
  link?: string;
}

export const DataCard: React.FC<StatCardProps> = ({ label, value, sub, trend, icon: Icon, color = "primary", link }) => {
  const textColor = color.startsWith('text-') ? color : `text-${color}`;

  const content = (
    <div className={`
       h-full
      p-6 rounded-2xl border-l-3 border-primary-dim
      transition-all duration-300 group bg-surface-high/60 
      hover:bg-surface/60 hover:border hover:border-l-3 hover:border-primary-dim
    `}>
      <div className="flex justify-between items-start mb-2">
        <p className="text-text-dim text-xs tracking-widest uppercase line-clamp-1">{label}</p>
        {Icon && <Icon className={`w-5 h-5 ${textColor} opacity-80 group-hover:scale-110 transition-transform`} />}
      </div>

      <h3 className={`text-3xl font-bold mb-2 group-hover:${textColor} transition-colors uppercase`}>{value}</h3>

      <div className="flex items-center gap-2">
        {trend && <span className={`${textColor} text-xs font-bold`}>{trend}</span>}
        <p className="text-text-dim text-xs md:text-sm leading-relaxed line-clamp-2">{sub}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
        {content}
      </a>
    );
  }

  return content;
};

