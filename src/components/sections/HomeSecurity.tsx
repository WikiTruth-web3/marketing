import React from 'react';
import { securityData, securityTitle, securityDescription } from '@/content/home';

export const HomeSecurity: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         {/* Text Side */}
         <div>
            <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">Security First</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {securityTitle}
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
                {securityDescription}
            </p>
         </div>

         {/* Features Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {securityData.map((item, index) => {
                 const Icon = item.icon;
                 return (
                     <div key={index} className="glass-panel p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                         <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                             <Icon className="text-emerald-400 w-5 h-5" />
                         </div>
                         <h4 className="text-white font-bold mb-2">{item.title}</h4>
                         <p className="text-white/60 text-sm">{item.description}</p>
                     </div>
                 );
             })}
         </div>
      </div>
    </section>
  );
};
