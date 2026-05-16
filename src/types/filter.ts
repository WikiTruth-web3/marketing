import type { LanguageType, LanguageItem } from "./language";

export type CategoryKey = 'ALL_ENTRIES' | 'NEWS' | 'RESEARCH' | 'SUCCESS_STORIES' | 'CRYPTO' | 'AI' | 'EVENTS' | 'TECHNOLOGY' | 'FINANCE';
export type SortKey = 'RECENTLY_ADDED' | 'OLDEST_FIRST' | 'DEFAULT';
export type FilterKey = 'ALL' | 'INTERNAL' | 'EXTERNAL';


export const CATEGORY_META: Record<CategoryKey, LanguageItem> = {
  ALL_ENTRIES: { en: 'All Entries', zh: '全部', ko: '모든 항목' },
  NEWS: { en: 'News', zh: '新闻', ko: '뉴스' },
  RESEARCH: { en: 'Research', zh: '研究', ko: '연구' },
  SUCCESS_STORIES: { en: 'Success Stories', zh: '成功案例', ko: '성공 사례' },
  CRYPTO: { en: 'Crypto', zh: '加密项目', ko: '암호화폐 프로젝트' },
  AI: { en: 'AI', zh: '人工智能', ko: '인공지능' },
  EVENTS: { en: 'Events', zh: '事件', ko: '사건' },
  TECHNOLOGY: { en: 'Technology', zh: '技术', ko: '기술' },
  FINANCE: { en: 'Finance', zh: '金融', ko: '금융' },
};

export const SORT_META: Record<SortKey, LanguageItem> = {
  RECENTLY_ADDED: { en: 'Recently Added', zh: '最近添加', ko: '최근 추가됨' },
  OLDEST_FIRST: { en: 'Oldest First', zh: '从旧到新', ko: '오래된 순' },
  DEFAULT: { en: 'Default', zh: '默认', ko: '기본' },
};

export const FILTER_META: Record<FilterKey, LanguageItem> = {
  ALL: { en: 'All', zh: '全部', ko: '전체' },
  INTERNAL: { en: 'Internal Blog', zh: '内部博客', ko: '내부 블로그' },
  EXTERNAL: { en: 'External Blog', zh: '外部博客', ko: '외부 블로그' },
};

export const CATEGORY_OPTIONS = Object.keys(CATEGORY_META) as CategoryKey[];
export const SORT_OPTIONS = Object.keys(SORT_META) as SortKey[];
export const FILTER_OPTIONS = Object.keys(FILTER_META) as FilterKey[];


export const getMetaLabel = (
  meta: Record<string, LanguageItem>, 
  key: string, 
  language: LanguageType
): string => {
  return meta[key as keyof typeof meta]?.[language] || key;
};
