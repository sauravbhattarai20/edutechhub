import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Clock, Calendar, ArrowRight, Tag, BookOpen } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Articles & Practical Software Guides',
  description:
    'Comprehensive editorial guides, architectural breakdowns, and procurement checklists for School ERPs, Student Information Systems, and Accounting Software.',
  canonicalPath: '/blog',
});

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogIndexPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const allArticles = getAllArticles();

  const filteredArticles = category
    ? allArticles.filter(
        (a) => a.frontmatter.category.toLowerCase() === category.toLowerCase()
      )
    : allArticles;

  const categories = [
    'All Topics',
    'School ERP',
    'School Management System',
    'Accounting',
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Articles & Guides', url: '/blog' }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-brand-600 font-semibold text-xs uppercase tracking-wider">
          <BookOpen className="h-4 w-4" />
          <span>Knowledge Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Educational Software &amp; Accounting Guides
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          In-depth technical guides, module blueprints, and practical advice designed to help school leaders build efficient, transparent institutions.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {categories.map((cat) => {
          const isAll = cat === 'All Topics';
          const isActive = isAll ? !category : category?.toLowerCase() === cat.toLowerCase();
          const href = isAll ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`;

          return (
            <Link
              key={cat}
              href={href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                isActive
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.frontmatter.slug}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 font-medium">
                  {article.frontmatter.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readingTime} min
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mt-1">
                <Link href={`/blog/${article.frontmatter.slug}`}>
                  {article.frontmatter.title}
                </Link>
              </h2>

              <p className="text-sm text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                {article.frontmatter.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>By {article.frontmatter.author.name}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-slate-400" />
                  {article.frontmatter.publishedAt}
                </span>
              </div>

              <Link
                href={`/blog/${article.frontmatter.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:text-brand-700"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
