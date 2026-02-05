import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  trend?: string;
  icon?: LucideIcon;
  color?: string;
  link?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, sub, trend, icon: Icon, color = "text-primary", link }) => {
  const CardContent = () => (
    <div className={`
      glass-panel h-full
      p-6 rounded-2xl border-l-2 ${color.replace('text-', 'border-')} 
      transition-all duration-300 group hover:bg-white/5
    `}>
      <div className="flex justify-between items-start mb-2">
        <p className="text-white/40 text-xs font-mono tracking-widest uppercase">{label}</p>
        {Icon && <Icon className={`w-5 h-5 ${color} opacity-80 group-hover:scale-110 transition-transform`} />}
      </div>
      
      <h3 className={`text-3xl font-bold text-white mb-2 group-hover:${color} transition-colors`}>{value}</h3>
      
      <div className="flex items-center gap-2">
        {trend && <span className={`${color} text-xs font-bold`}>{trend}</span>}
        <p className="text-white/60 text-xs leading-relaxed">{sub}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};
