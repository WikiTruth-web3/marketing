import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  img: string;
  icon: LucideIcon;
  href: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <a href={post.href} target="_blank" rel="noopener noreferrer">
    <div className="group glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,236,91,0.2)] transition-all duration-300 flex flex-col h-full">
      <div className="aspect-video w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
        <img 
          src={post.img} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between">
          <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
            {post.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed flex-1 font-light">
          {post.excerpt}
        </p>
        
        <div className="pt-4 mt-auto border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <post.icon size={14} />
          </div>
          <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
};
