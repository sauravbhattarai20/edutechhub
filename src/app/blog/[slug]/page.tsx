import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/schema';
import { renderMarkdownToHtml } from '@/lib/markdown';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TableOfContents from '@/components/article/TableOfContents';
import AuthorBio from '@/components/article/AuthorBio';
import FAQSection from '@/components/article/FAQSection';
import RelatedArticles from '@/components/article/RelatedArticles';
import JsonLd from '@/components/seo/JsonLd';
import { Clock, Calendar, Tag, ShieldCheck } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.frontmatter.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const { frontmatter } = article;

  return constructMetadata({
    title: frontmatter.seoTitle || frontmatter.title,
    description: frontmatter.description,
    canonicalPath: `/blog/${frontmatter.slug}`,
    ogType: 'article',
    ogImage: frontmatter.featuredImage,
    publishedTime: frontmatter.publishedAt,
    modifiedTime: frontmatter.updatedAt || frontmatter.publishedAt,
    authors: [frontmatter.author.name],
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content, readingTime, headings } = article;
  const relatedArticles = getRelatedArticles(slug, 3);
  const htmlContent = await renderMarkdownToHtml(content);
  const articleSchema = generateArticleSchema(frontmatter, slug);

  const breadcrumbTrail = [
    { name: 'Articles', url: '/blog' },
    { name: frontmatter.category, url: `/blog?category=${encodeURIComponent(frontmatter.category)}` },
    { name: frontmatter.title, url: `/blog/${slug}` },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={articleSchema} />

      {/* Breadcrumb navigation */}
      <Breadcrumbs items={breadcrumbTrail} />

      {/* Main Article Container */}
      <article className="mt-4">
        {/* Header section */}
        <header className="space-y-4 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {frontmatter.category}
            </span>
            {frontmatter.searchIntent && (
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 capitalize">
                {frontmatter.searchIntent} Guide
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {frontmatter.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {frontmatter.description}
          </p>

          {/* Meta bar: Author, Date, Reading Time */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-xs">
                {frontmatter.author.name.charAt(0)}
              </div>
              <div>
                <span className="font-semibold text-slate-800">{frontmatter.author.name}</span>
                <span className="text-slate-400 mx-1.5">•</span>
                <span>{frontmatter.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>Published: {frontmatter.publishedAt}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span>{readingTime} min read</span>
              </span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <TableOfContents headings={headings} />

        {/* Editorial Content Body */}
        <div
          className="prose prose-slate max-w-none my-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Tags */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="my-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <Tag className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold">Explore Related Topics:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio (E-E-A-T) */}
        <AuthorBio
          author={frontmatter.author}
          publishedAt={frontmatter.publishedAt}
          updatedAt={frontmatter.updatedAt}
        />

        {/* FAQ Section with Schema.org FAQPage */}
        {frontmatter.faq && frontmatter.faq.length > 0 && (
          <FAQSection faqs={frontmatter.faq} />
        )}

        {/* Related Internal Articles */}
        <RelatedArticles articles={relatedArticles} />
      </article>
    </div>
  );
}
