import React, { useState } from 'react';
// import { Search, Shield, Cpu, Activity, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { BlogHeader } from '@/components/sections/BlogHeader';
import { CategoryFilter } from '@/components/customer/CategoryFilter';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { Pagination } from '@/components/base/Pagination';
// import { BlogPost } from '@/components/customer/BlogCard';
import { postsData, aiResearchData, news, categories } from '@/content/blog';

const Blog: React.FC = () => {
  const [activeCat, setActiveCat] = useState('All_Entries');

  const posts = [...postsData, ...aiResearchData, ...news];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
        <BlogHeader />
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCat} 
          onSelect={setActiveCat} 
        />
      </div>

      {/* Grid */}
      <BlogGrid posts={posts} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Blog;