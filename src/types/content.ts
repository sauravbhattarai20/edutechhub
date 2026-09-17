export interface Author {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleFrontmatter {
  title: string;
  seoTitle?: string;
  description: string;
  slug: string;
  targetKeyword: string;
  secondaryKeywords?: string[];
  searchIntent?: 'informational' | 'commercial' | 'transactional' | 'navigational' | 'comparative';
  category: 'School ERP' | 'School Management System' | 'Accounting' | 'School Tech';
  tags: string[];
  author: Author;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  isFeatured?: boolean;
  faq?: FAQItem[];
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTime: number; // in minutes
  headings: { id: string; text: string; level: number }[];
}

export interface PillarMeta {
  title: string;
  slug: string;
  description: string;
  targetKeyword: string;
  category: string;
  subtopics: string[];
}
