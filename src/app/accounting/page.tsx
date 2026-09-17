import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, DollarSign, FileSpreadsheet, PieChart } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Accounting & Financial Systems: Architecture, Ledgers & Audits',
  description:
    'The foundational guide to institutional accounting software, double-entry general ledgers, fund accounting, and compliance reporting.',
  canonicalPath: '/accounting',
});

export default function AccountingPillarPage() {
  const accountingModules = [
    { title: 'Double-Entry General Ledger', desc: 'Maintains real-time debit and credit balances with immutable transaction audit trails.' },
    { title: 'Chart of Accounts (CoA)', desc: 'Customizable multi-tier account numbering across assets, liabilities, equity, revenues, and expenses.' },
    { title: 'Automated Billing & Accounts Receivable', desc: 'Syncs incoming fees and customer invoices directly with cash and bank registers.' },
    { title: 'Accounts Payable & Vendor Ledger', desc: 'Purchase orders, 3-way invoice matching, and payment disbursement tracking.' },
    { title: 'Payroll & Statutory Deductions', desc: 'Automates tax computations, provident funds, insurance, and direct salary transfers.' },
    { title: 'Fund Accounting & Grants', desc: 'Segregates restricted endowments, building funds, and donor grants from operational cash.' },
    { title: 'Multi-Branch & Campus Consolidation', desc: 'Unified financial statements across multiple branches or institutional campuses.' },
    { title: 'Financial Auditing & Compliance', desc: 'One-click generation of Trial Balance, Profit & Loss, and Balance Sheet statements.' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Accounting Systems', url: '/accounting' }]} />

      <header className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800">
          <Calculator className="h-3.5 w-3.5 text-emerald-600" />
          <span>Financial Technology Pillar</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Accounting &amp; Financial Management Systems: Architectural Overview
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Robust accounting software is essential for maintaining institutional solvency, regulatory compliance, and fiscal transparency. Learn how automated general ledgers eliminate bookkeeping backlogs.
        </p>
      </header>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          <DollarSign className="h-6 w-6 text-emerald-600" />
          <h2 className="text-base font-bold text-slate-900">Zero Reconciliation Delay</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Eliminate end-of-month spreadsheet scrambling. Front-counter transactions immediately reflect across balance sheets and bank books.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          <FileSpreadsheet className="h-6 w-6 text-emerald-600" />
          <h2 className="text-base font-bold text-slate-900">Automated Audit Trails</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every transaction logs timestamp, user identity, and IP address, preventing fraudulent journal modifications and unauthorized reversals.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          <PieChart className="h-6 w-6 text-emerald-600" />
          <h2 className="text-base font-bold text-slate-900">Statutory Reporting</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Generate standardized financial reports—including Trial Balance, Cash Flow, and Statements of Financial Position—with one click.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Essential Accounting Modules</h2>
          <p className="text-sm text-slate-600 mt-1">Foundational accounting features required for institutional and enterprise operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accountingModules.map((mod, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">{mod.title}</h3>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured In-Depth Guide */}
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Recommended Guide</span>
          <h2 className="text-2xl font-bold text-slate-900">
            Accounting Software for Schools: Chart of Accounts, Ledgers &amp; Audits
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Discover why educational institutions need specialized fund accounting structures rather than generic commercial retail software.
          </p>
          <div className="pt-2">
            <Link
              href="/blog/accounting-software-for-schools"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
