import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    // Simplistic rendering: show up to 5 pages around the current page
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      <button 
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
          currentPage === 1 
            ? 'bg-transparent border-white/5 text-white/20 cursor-not-allowed'
            : 'bg-white/5 border-white/10 hover:border-primary hover:text-primary text-white/50'
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {pages[0] > 1 && (
        <>
          <button onClick={() => onPageChange(1)} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-white/50 transition-colors">1</button>
          {pages[0] > 2 && <span className="w-10 h-10 flex items-center justify-center text-white/30">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors font-bold ${
            currentPage === page 
              ? 'bg-primary text-black' 
              : 'bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-white/50'
          }`}
        >
          {page}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <span className="w-10 h-10 flex items-center justify-center text-white/30">...</span>}
          <button onClick={() => onPageChange(totalPages)} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-white/50 transition-colors">{totalPages}</button>
        </>
      )}

      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
          currentPage === totalPages 
            ? 'bg-transparent border-white/5 text-white/20 cursor-not-allowed'
            : 'bg-white/5 border-white/10 hover:border-primary hover:text-primary text-white/50'
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
