import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { FileText, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Accounting Software Guides: Business, Billing & SME Selection',
  description:
    'Comprehensive buyer guides and architectural analysis of accounting software for small businesses, educational trusts, and multi-branch enterprises.',
  canonicalPath: '/accounting-software',
});

export default function AccountingSoftwarePage() {
  const categories = [
    {
      title: 'Small Business Bookkeeping',
      desc: 'Affordable, cloud-native platforms supporting invoicing, basic expense tracking, and tax compliance.',
      features: ['Automated bank feeds', 'Mobile receipt scanning', 'Simple P&L reports'],
    },
    {
      title: 'Institutional & School Accounting',
      desc: 'Purpose-built systems with student ledger sync, fee counter journals, and tuition receivables.',
      features: ['Direct bursary sync', 'Fund accounting', 'Arrears aging reports'],
    },
    {
      title: 'Enterprise ERP Financials',
      desc: 'Complex multi-currency, multi-entity consolidation with advanced procurement approval hierarchies.',
      features: ['Multi-entity rollups', 'Custom financial dimensions', 'Rigorous audit logs'],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Accounting Software', url: '/accounting-software' }]} />

      <header className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          <FileText className="h-3.5 w-3.5 text-brand-600" />
          <span>Software Selection Guide</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Accounting Software: Evaluation &amp; Feature Comparison
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Selecting the right accounting platform depends on operational scale, transaction volume, and regulatory compliance demands. Explore our comparative breakdowns.
        </p>
      </header>

      {/* Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">{cat.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
              <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                {cat.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Regional Focus Callout */}
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Regional Accounting</span>
          <h2 className="text-xl font-bold text-slate-900">
            Accounting Software in Nepal: IRD Certified Invoicing &amp; VAT
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Businesses and schools in Nepal must adhere to Inland Revenue Department (IRD) electronic billing regulations and Annex 13 reporting. Read our dedicated guide on IRD-compliant software selection.
          </p>
          <div className="pt-2">
            <Link
              href="/accounting-software/nepal"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-900 hover:text-emerald-950 underline underline-offset-4"
            >
              <span>Explore Nepal Accounting Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h3 className="font-bold text-slate-900 text-base">In-Depth Accounting Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <Link
            href="/blog/accounting-software-for-schools"
            className="p-4 rounded-xl border border-slate-200 hover:border-brand-300 transition block"
          >
            <p className="font-semibold text-slate-900">Accounting Software for Schools</p>
            <p className="text-xs text-slate-500 mt-1">Chart of accounts, fee sync, and annual audit readiness.</p>
          </Link>
          <Link
            href="/accounting"
            className="p-4 rounded-xl border border-slate-200 hover:border-brand-300 transition block"
          >
            <p className="font-semibold text-slate-900">Financial Systems Overview</p>
            <p className="text-xs text-slate-500 mt-1">Foundational principles of modern double-entry ledgers.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
