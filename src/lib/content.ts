import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, ArticleFrontmatter } from '@/types/content';

const ARTICLES_DIRECTORY = path.join(process.cwd(), 'content', 'articles');

/**
 * Calculates estimated reading time in minutes based on average 200 words/min
 */
function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Extracts h2 and h3 headings from markdown for Table of Contents
 */
function extractHeadings(markdown: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ id, text, level });
  }

  return headings;
}

/**
 * Get all published articles, sorted by publishedAt descending
 */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(ARTICLES_DIRECTORY);
  const articles: Article[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) continue;

    const fullPath = path.join(ARTICLES_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as ArticleFrontmatter;
    // Fallback slug if omitted in frontmatter
    if (!frontmatter.slug) {
      frontmatter.slug = fileName.replace(/\.(md|mdx)$/, '');
    }

    const readingTime = calculateReadingTime(content);
    const headings = extractHeadings(content);

    articles.push({
      frontmatter,
      content,
      readingTime,
      headings,
    });
  }

  return articles.sort((a, b) => {
    return new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime();
  });
}

/**
 * Get a single article by its URL slug
 */
export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find((article) => article.frontmatter.slug === slug) || null;
}

/**
 * Get articles filtered by category
 */
export function getArticlesByCategory(category: string): Article[] {
  const articles = getAllArticles();
  const normalizedCategory = category.toLowerCase();
  return articles.filter(
    (a) => a.frontmatter.category.toLowerCase() === normalizedCategory
  );
}

/**
 * Get related articles based on category and shared tags, excluding the current article
 */
export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const allArticles = getAllArticles();
  const current = allArticles.find((a) => a.frontmatter.slug === currentSlug);

  if (!current) {
    return allArticles.filter((a) => a.frontmatter.slug !== currentSlug).slice(0, limit);
  }

  const otherArticles = allArticles.filter((a) => a.frontmatter.slug !== currentSlug);

  const scored = otherArticles.map((article) => {
    let score = 0;
    if (article.frontmatter.category === current.frontmatter.category) {
      score += 3;
    }
    const sharedTags = article.frontmatter.tags.filter((t) =>
      current.frontmatter.tags.includes(t)
    );
    score += sharedTags.length;
    return { article, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((item) => item.article);
}

/**
 * Get featured articles for homepage / hero sections
 */
export function getFeaturedArticles(limit = 4): Article[] {
  const allArticles = getAllArticles();
  const featured = allArticles.filter((a) => a.frontmatter.isFeatured);
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  // Fill with recent if not enough featured
  const remaining = allArticles.filter((a) => !a.frontmatter.isFeatured);
  return [...featured, ...remaining].slice(0, limit);
}
