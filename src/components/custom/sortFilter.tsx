import React from 'react';
import type { SortKey, Language } from '@/types/filter';
import { SORT_META, getMetaLabel, SORT_OPTIONS } from '@/types/filter';
import { ArrowDownWideNarrow } from 'lucide-react';

interface SortFilterProps {
  activeSort: SortKey;
  language: Language;
  onSelect: (sort: SortKey) => void;
}

export const SortFilter: React.FC<SortFilterProps> = ({ 
  activeSort,
  language,
  onSelect 
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-white/50 flex items-center gap-2 text-sm font-medium">
        <ArrowDownWideNarrow size={16} />
      </div>
      <select
        value={activeSort}
        onChange={(e) => onSelect(e.target.value as SortKey)}
        className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#3ebb4e]/50 cursor-pointer appearance-none"
      >
        {SORT_OPTIONS.map((sortKey) => (
          <option key={sortKey} value={sortKey} className="bg-black text-white">
            {getMetaLabel(SORT_META, sortKey, language)}
          </option>
        ))}
      </select>
    </div>
  );
};
