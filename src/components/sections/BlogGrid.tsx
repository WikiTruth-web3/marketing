import React, { useState, useMemo } from 'react';
import { type BlogPost, BlogCard } from '../custom/blogCard';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { CategoryFilter } from '@/components/custom/categoryFilter';
import { SortFilter } from '@/components/custom/sortFilter';
import { Pagination } from '@/components/base/pagination';
import type { CategoryKey, SortKey, Language } from '@/types/filter';
import { CATEGORY_OPTIONS } from '@/types/filter';

interface BlogGridProps {
  posts: BlogPost[];
  language: Language;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, language }) => {
  const [activeCat, setActiveCat] = useState<CategoryKey>('ALL_ENTRIES');
  const [activeSort, setActiveSort] = useState<SortKey>('DEFAULT');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    // 1. Filter by category
    if (activeCat !== 'ALL_ENTRIES') {
      result = result.filter(post => post.category === activeCat);
    }

    // 2. Sort by date
    if (activeSort === 'RECENTLY_ADDED') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (activeSort === 'OLDEST_FIRST') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return result;
  }, [posts, activeCat, activeSort]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCat, activeSort]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredAndSortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredAndSortedPosts, currentPage]);

  return (
    <Section className='py-5 md:py-10'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-white/10 pb-10'>
          <CategoryFilter
            categories={CATEGORY_OPTIONS}
            activeCategory={activeCat}
            language={language}
            onSelect={setActiveCat}
          />
          <SortFilter 
            activeSort={activeSort}
            language={language}
            onSelect={setActiveSort}
          />
        </div>

        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20 text-white/50">
            {language === 'zh' ? '该分类下暂无博客。' : (language === 'ko' ? '이 카테고리에 블로그가 없습니다.' : 'No blogs found in this category.')}
          </div>
        )}
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Container>
    </Section>
  );
};
