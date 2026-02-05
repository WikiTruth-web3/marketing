import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const Pagination: React.FC = () => {
  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-white/50 transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-black font-bold">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-white/50 transition-colors">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-white/50 transition-colors">3</button>
      <span className="w-10 h-10 flex items-center justify-center text-white/30">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-white/50 transition-colors">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
