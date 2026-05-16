import React from 'react';
import type { CategoryKey, Language } from '@/types/filter';
import { CATEGORY_META, getMetaLabel } from '@/types/filter';

interface CategoryFilterProps {
  categories: CategoryKey[];
  activeCategory: CategoryKey;
  language: Language;
  onSelect: (category: CategoryKey) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory,
  language,
  onSelect 
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
            activeCategory === cat 
              ? 'bg-primary text-black border-primary' 
              : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
          }`}
        >
          {getMetaLabel(CATEGORY_META, cat, language)}
        </button>
      ))}
    </div>
  );
};
