import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getArticlesByCategory } from '@/lib/content';
import { Layers, ArrowRight, CheckCircle2, ShieldCheck, Database, Users, CreditCard, BookOpen } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'School ERP Systems: Complete Architectural Guide & Modules',
  description:
    'The ultimate pillar guide to School Enterprise Resource Planning (ERP). Learn how unified database systems streamline academic workflows, fees, and campus management.',
  canonicalPath: '/school-erp',
});

export default function SchoolErpPillarPage() {
  const articles = getArticlesByCategory('School ERP');

  const erpModules = [
    { title: 'Student Management & SIS', desc: 'Centralized enrollment records, document vaults, and demographic histories.' },
    { title: 'Teacher & Staff Administration', desc: 'Faculty allocation, workload management, and certification tracking.' },
    { title: 'Student Attendance Automation', desc: 'Biometric, RFID, and mobile roll-call tracking with instant parent SMS.' },
    { title: 'Examination & GPA Computing', desc: 'Automated assessment scales, custom grade formulas, and digital report cards.' },
    { title: 'Fee Invoicing & Payment Gateways', desc: 'Tuition slabs, concessions, automated arrears alerts, and online wallets.' },
    { title: 'School Accounting & Ledgers', desc: 'Direct synchronization between front-desk fee collections and general ledgers.' },
    { title: 'Barcode Library Management', desc: 'OPAC student search, barcode book checkout, and overdue fine computation.' },
    { title: 'Transportation & GPS Tracking', desc: 'Bus route optimization, pickup stop fee zones, and live vehicle tracking.' },
    { title: 'Parent Portal & Mobile Apps', desc: 'Direct engagement channels for homework, notices, and academic milestones.' },
    { title: 'School Data Migration & Cloud', desc: 'Secure transitions from legacy spreadsheets to encrypted cloud databases.' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ name: 'School ERP Pillar', url: '/school-erp' }]} />

      {/* Hero */}
      <div className="max-w-4xl space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/70 px-3 py-1 text-xs font-semibold text-brand-800">
          <Layers className="h-3.5 w-3.5 text-brand-600" />
          <span>Institutional Architecture Guide</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          School ERP Systems: The Ultimate Institutional Operating Guide
        </h1>

        <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
          An Enterprise Resource Planning (ERP) platform is the digital nervous system of an educational institution. It replaces disconnected spreadsheets with an integrated, secure, and auditable software architecture.
        </p>
      </div>

      {/* Architecture Overview */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">What Makes a School ERP Essential?</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Unlike point solutions that address single tasks in isolation, an ERP ensures that every department works from a <strong>single source of truth</strong>. When a bursar enters a fee payment, student attendance status updates, parents receive a notification, and the accounting ledger reconciles instantly.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <Database className="h-6 w-6 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Unified Database</h3>
            <p className="text-xs text-slate-600">Zero data duplication across admissions, classrooms, and bursaries.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <CreditCard className="h-6 w-6 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Financial Integrity</h3>
            <p className="text-xs text-slate-600">Automated tuition calculation, arrears tracking, and zero fee leakage.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <Users className="h-6 w-6 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Parent Engagement</h3>
            <p className="text-xs text-slate-600">Live mobile updates for morning attendance, homework, and reports.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <ShieldCheck className="h-6 w-6 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Data Security</h3>
            <p className="text-xs text-slate-600">Role-based permissions, cloud backups, and complete audit trails.</p>
          </div>
        </div>
      </section>

      {/* ERP Modules Breakdown */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Core School ERP Modules &amp; Functional Scope</h2>
          <p className="text-sm text-slate-600 mt-1">Key functional modules comprising an enterprise-grade school software ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {erpModules.map((mod, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white">
              <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">{mod.title}</h3>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cluster Articles Directory */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">In-Depth Guides in This Cluster</h2>
            <p className="text-sm text-slate-600 mt-1">Detailed technical and operational walkthroughs.</p>
          </div>
          <Link
            href="/blog?category=School+ERP"
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <span>View All ({articles.length})</span>
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
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-brand-600 transition-colors line-clamp-2">
                  <Link href={`/blog/${article.frontmatter.slug}`}>
                    {article.frontmatter.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                  {article.frontmatter.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">{article.readingTime} min read</span>
                <Link
                  href={`/blog/${article.frontmatter.slug}`}
                  className="font-semibold text-brand-600 group-hover:text-brand-700 flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
