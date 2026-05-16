

import type{ CategoryKey } from "./filter";

export interface BlogSection {
  id: string;
  title: string;
  content: string;
}

export interface InternalBlog {
  id: string;
  title: string;
  excerpt: string;
  category: CategoryKey;
  date: string;
  readTime: string;
  author: string;
  coverImage?: string;
  sections: BlogSection[];
}
