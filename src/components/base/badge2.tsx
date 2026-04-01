import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full border border-primary-dim text-primary-dim font-label text-xs tracking-widest font-bold uppercase">
      {children}
    </span>
  );
}
