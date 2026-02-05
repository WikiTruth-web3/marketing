import React from 'react';

export const BlogHeader: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-tighter">
        Archive_<span className="text-primary">Logs</span>
      </h1>
      <p className="text-white/50 font-mono flex items-center gap-2">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        Fetching latest cryptographic intelligence...
      </p>
    </div>
  );
};
