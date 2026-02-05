import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface RoadmapCardProps {
    phase: string
    title: string
    quarter: string
    description: string
    alignment: 'left' | 'right'
    status: 'completed' | 'active' | 'upcoming'
    items: string[]
    color: 'primary' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple' | 'pink' | 'red'
    icon: LucideIcon
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  phase,
  title,
  quarter,
  description,
  status,
  items,
  icon: Icon,
  color,
  alignment
}) => {
  
  const colorClasses = {
    'primary': 'border-l-primary text-primary',
    'blue': 'border-l-blue-500 text-blue-500',
    'green': 'border-l-green-500 text-green-500',
    'yellow': 'border-l-yellow-500 text-yellow-500',
    'orange': 'border-l-orange-500 text-orange-500',
    'purple': 'border-l-purple-500 text-purple-500',
    'pink': 'border-l-pink-500 text-pink-500',
    'red': 'border-l-red-500 text-red-500',
  };

  const iconBgClasses = {
    'primary': 'bg-primary/20 border-primary/40 hologram-glow',
    'blue': 'bg-blue-500/20 border-blue-500/40 blue-glow',
    'green': 'bg-green-500/20 border-green-500/40',
    'yellow': 'bg-yellow-500/20 border-yellow-500/40',
    'orange': 'bg-orange-500/20 border-orange-500/40',
    'purple': 'bg-purple-500/20 border-purple-500/40',
    'pink': 'bg-pink-500/20 border-pink-500/40',
    'red': 'bg-red-500/20 border-red-500/40',
  };

  const iconTextClasses = {
    'primary': 'text-primary',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'yellow': 'text-yellow-500',
    'orange': 'text-orange-500',
    'purple': 'text-purple-500',
    'pink': 'text-pink-500',
    'red': 'text-red-500',
  };

  const isUpcoming = status === 'upcoming';
  const isActive = status === 'active';

  return (
    <div className={`
    flex flex-col lg:flex-row items-center justify-center 
    gap-12 lg:gap-32 w-full ${isUpcoming ? 'opacity-60 grayscale' : ''}
    
    `}>
      {/* Card Section */}
      <div className={`
      order-2 lg:order-1 flex-1 flex 
      ${alignment === 'left' ? 'lg:justify-end' : 'lg:order-3 lg:justify-start'}
      `}>
        <div className={`
          glass-card p-8 rounded-xl max-w-md w-full border-l-4 
          ${colorClasses[color]} shadow-2xl 
          transition-all hover:bg-primary/5 
          group
          `}
          >
          <span className={`${colorClasses[color].split(' ')[1]} text-xs font-mono tracking-widest block mb-2 opacity-60`}>
            {quarter}
          </span>
          <h3 className="text-2xl font-bold text-white mb-4">{phase}: {title}</h3>
          <p className="text-white/60 leading-relaxed mb-6">
            {description}
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                 <span className={`text-xs ${iconTextClasses[color]}`}>
                  {/* Simple checkmark or dot for list items */}
                  {color === 'primary' ? '✓' : color === 'blue' ? '◈' : '•'}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Icon Node Section */}
      <div className="order-1 lg:order-2 flex flex-col items-center shrink-0">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center border relative ${iconBgClasses[color]}`}>
          <div className={`${iconTextClasses[color]} ${isActive /* Only active gets pulse */ ? 'animate-pulse' : ''}`}>
             <Icon size={36} />
          </div>
          {isActive /* Only active gets ping ring */ && (
             <div className={`absolute inset-0 rounded-full border opacity-30 animate-ping ${
                color === 'primary' ? 'border-primary' : 
                color === 'blue' ? 'border-blue-500' :
                color === 'green' ? 'border-green-500' :
                color === 'yellow' ? 'border-yellow-500' :
                color === 'orange' ? 'border-orange-500' :
                color === 'purple' ? 'border-purple-500' :
                color === 'pink' ? 'border-pink-500' :
                'border-red-500'
             }`}></div>
          )}
        </div>
        {/* Mobile vertical line connector */}
        <div className={`h-16 w-0.5 bg-gradient-to-b lg:hidden ${color === 'primary' ? 'from-primary' : color === 'blue' ? 'from-blue-500' : 'from-white/20'} to-transparent`}></div>
      </div>

      {/* Spacer Section for Alignment */}
      <div className={`hidden lg:block flex-1 ${alignment === 'left' ? 'lg:order-3' : 'lg:order-1'}`}></div>
    </div>
  );
};
