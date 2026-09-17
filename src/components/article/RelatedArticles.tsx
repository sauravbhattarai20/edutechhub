import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Article } from '@/types/content';

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="my-12 pt-8 border-t border-slate-200" aria-labelledby="related-heading">
      <div className="flex items-center justify-between mb-6">
        <h2 id="related-heading" className="text-xl font-bold text-slate-900 m-0">
          Related In-Depth Guides
        </h2>
        <Link
          href="/blog"
          className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.frontmatter.slug}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-medium">
                  {article.frontmatter.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readingTime} min
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm line-clamp-2 group-hover:text-brand-600 transition-colors mt-1">
                <Link href={`/blog/${article.frontmatter.slug}`}>
                  {article.frontmatter.title}
                </Link>
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                {article.frontmatter.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href={`/blog/${article.frontmatter.slug}`}
                className="text-xs font-semibold text-brand-600 group-hover:text-brand-700 flex items-center gap-1"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
