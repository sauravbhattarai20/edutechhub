import React from 'react';
import Link from 'next/link';
import { Layers, BookOpen, Calculator, ShieldCheck, ArrowRight, Clock, CheckCircle2, Search } from 'lucide-react';
import { getAllArticles, getFeaturedArticles } from '@/lib/content';

export default function HomePage() {
  const articles = getAllArticles();
  const featuredArticles = getFeaturedArticles(4);
  const recentArticles = articles.slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* Editorial Knowledge Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white pt-12 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-800 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-600" />
              <span>Independent Educational & Financial Technology Authority</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Practical Knowledge for Modern <span className="text-brand-600">School ERP</span> &amp; <span className="text-slate-700">Accounting Systems</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Clear, research-backed guides and architectural comparisons helping school administrators, bursars, and IT coordinators select, deploy, and master educational software.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/school-erp"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-700 transition"
              >
                <span>School ERP Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/accounting"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                <span>Accounting Technology</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-600 transition"
              >
                <Search className="h-4 w-4" />
                <span>Browse All Articles ({articles.length})</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Topic Clusters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Core Knowledge Clusters</h2>
          <p className="text-sm text-slate-600 mt-1">Explore our primary pillar resources by institutional discipline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cluster 1: School ERP */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">School ERP Systems</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Centralized database architecture unifying admissions, student rolls, fees, and operational modules into one system.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                  <span>Module integration &amp; single database truth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                  <span>Spreadsheet replacement &amp; audit trails</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                  <span>Procurement &amp; buyer selection frameworks</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href="/school-erp"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
              >
                <span>Explore School ERP Pillar</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Cluster 2: School Management */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">School Management (SMS)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Academic operations, student information tracking, daily roll calls, timetable scheduling, and examination grading.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Student lifecycle &amp; profile archives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Automated biometric &amp; RFID roll calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
                  <span>GPA grading &amp; digital report cards</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href="/school-management-system"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>Explore SMS Pillar</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Cluster 3: Accounting */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Accounting Software</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Institutional bookkeeping, fund accounting, automated fee counter syncing, multi-branch ledgers, and audit compliance.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Automated fee ledger synchronization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Fund accounting &amp; donor grant separation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Statutory audit readiness &amp; balance sheets</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href="/accounting"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                <span>Explore Accounting Pillar</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Strategic Guides */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Featured In-Depth Guides</h2>
            <p className="text-sm text-slate-600 mt-1">Foundational reading for understanding modern institutional software.</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <span>All Guides</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <article
              key={article.frontmatter.slug}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 font-medium">
                    {article.frontmatter.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readingTime} min read
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  <Link href={`/blog/${article.frontmatter.slug}`}>
                    {article.frontmatter.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {article.frontmatter.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">By {article.frontmatter.author.name}</span>
                <Link
                  href={`/blog/${article.frontmatter.slug}`}
                  className="font-semibold text-brand-600 group-hover:text-brand-700 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Latest Technical Articles Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Recently Published Resources</h2>
          <p className="text-sm text-slate-600 mt-1">Practical technical breakdowns across admissions, billing, and examinations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <article
              key={article.frontmatter.slug}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
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
                  <span>Read Guide</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Regional Focus / Geo-SEO Callout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50/40 p-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
              Regional Software Analysis
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Evaluating Educational &amp; Accounting Software in Nepal
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Schools and businesses operating in Nepal require localized payment gateway integrations (eSewa, Khalti, connectIPS), IRD tax invoice compliance, and local curriculum support. Explore our dedicated regional breakdowns.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/school-erp/nepal"
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
              >
                School ERP Systems in Nepal &rarr;
              </Link>
              <Link
                href="/accounting-software/nepal"
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
              >
                Accounting Software in Nepal &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
