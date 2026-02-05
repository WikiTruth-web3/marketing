import React from 'react';
import { Github, Twitter, Send } from 'lucide-react';

export interface TeamMemberProps {
  name: string;
  role: string;
  img: string;
  type: 'blue' | 'green' | 'cyan' | 'purple';
  github?: string;
  twitter?: string;
  telegram?: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, img, type, github, twitter, telegram }) => {
  // CSS filters to simulate the holographic look from the reference
  const filterStyle = {
    blue: 'grayscale(100%) sepia(100%) hue-rotate(190deg) saturate(300%) brightness(0.8) contrast(1.2)',
    green: 'grayscale(100%) sepia(100%) hue-rotate(70deg) saturate(300%) brightness(0.8) contrast(1.2)',
    cyan: 'grayscale(100%) sepia(100%) hue-rotate(130deg) saturate(300%) brightness(0.9) contrast(1.2)',
    purple: 'grayscale(100%) sepia(100%) hue-rotate(250deg) saturate(300%) brightness(0.8) contrast(1.2)',
  };

  const borderColor = {
    blue: 'border-blue-500/30',
    green: 'border-primary/30',
    cyan: 'border-cyan-400/30',
    purple: 'border-purple-500/30',
  };

  const glowColor = {
    blue: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    green: 'group-hover:shadow-[0_0_20px_rgba(19,236,91,0.3)]',
    cyan: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]',
    purple: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
  };

  return (
    <div className={`glass-panel p-6 rounded-xl flex flex-col gap-4 group transition-all duration-300 ${glowColor[type]} hover:-translate-y-1`}>
      <div className={`relative w-full aspect-square rounded-lg overflow-hidden border ${borderColor[type]} bg-slate-900`}>
        {/* Hologram scanlines overlay */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 to-transparent" />
        
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ filter: filterStyle[type] }}
        />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white font-display">{name}</h3>
        <p className={`text-xs font-mono uppercase tracking-widest ${
          type === 'green' ? 'text-primary' : type === 'blue' ? 'text-blue-400' : type === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
        }`}>
          {role}
        </p>
      </div>

      <div className="flex gap-4 mt-2">
        {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Twitter size={18} />
            </a>
        )}
        {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Github size={18} />
            </a>
        )}
        {telegram && (
            <a href={telegram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Send size={18} />
            </a>
        )}
      </div>
    </div>
  );
};
