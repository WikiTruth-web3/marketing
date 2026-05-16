import React, { useEffect, useState } from 'react';
import type { MarkdownHeading } from 'astro';

interface TableOfContentsProps {
  headings: MarkdownHeading[];
  lang: 'en' | 'zh' | 'ko';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings, lang }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const filteredHeadings = headings.filter((h) => h.depth <= 3);

  return (
    <nav className="sticky top-32">
      <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
        {lang === 'zh' ? '目录' : (lang === 'ko' ? '목차' : 'Table of Contents')}
      </h4>
      <ul className="space-y-4">
        {filteredHeadings.map((heading) => (
          <li
            key={heading.slug}
            style={{ paddingLeft: `${(heading.depth - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.slug}`}
              className={`block text-sm transition-all duration-300 ${
                activeId === heading.slug
                  ? 'text-primary font-medium'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
