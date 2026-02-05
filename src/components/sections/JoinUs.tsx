import React from 'react';
import { Terminal } from 'lucide-react';
import { teamRecruitment } from '@/content/team';

export const JoinUs: React.FC = () => {
  return (
    <div className="mt-20 p-12 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden">
       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">{teamRecruitment.title}</h2>
            <p className="text-primary/80 font-mono mb-6">{teamRecruitment.content}</p>
            
            {/* Needs List */}
            <div className="flex flex-wrap gap-3">
                {teamRecruitment.needs.map((need, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest">
                        {need}
                    </span>
                ))}
            </div>
          </div>
          
          <a 
            href={`mailto:${teamRecruitment.email}`}
            className="whitespace-nowrap bg-primary text-black px-8 py-4 rounded-lg font-bold tracking-widest hover:shadow-[0_0_25px_rgba(19,236,91,0.4)] transition-all flex items-center justify-center"
          >
            APPLY_NOW
          </a>
       </div>
       {/* Background decoration */}
       <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10 text-primary">
          <Terminal size={400} />
       </div>
    </div>
  );
};
