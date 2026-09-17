import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'School ERP in Nepal: Guidelines, NEB Grading & Payment Gateways',
  description:
    'A practical guide to implementing School ERP systems in Nepal. Learn about Bikram Sambat (BS) academic calendars, NEB letter grading, and eSewa/Khalti fee collection.',
  canonicalPath: '/school-erp/nepal',
});

export default function SchoolErpNepalPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'School ERP', url: '/school-erp' },
          { name: 'Nepal', url: '/school-erp/nepal' },
        ]}
      />

      <header className="space-y-4 max-w-3xl">
        <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
          Regional Educational Technology Analysis
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          School ERP Implementation in Nepal: Technical &amp; Regulatory Guide
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Educational institutions in Nepal operate under specific regulatory and operational realities. Implementing an international ERP off-the-shelf often fails due to calendar mismatches, rigid grading scales, and incompatible payment methods.
        </p>
      </header>

      {/* 4 Critical Requirements for Nepal */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">4 Non-Negotiable ERP Requirements for Schools in Nepal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>1. Dual Calendar (BS / AD) Support</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nepal operates on the Bikram Sambat (BS) calendar for academic terms, admissions, and exam cycles (Baisakh to Chaitra). The software must support automated conversion between BS and Gregorian (AD) dates across fee invoices and attendance registers.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>2. NEB &amp; CDC Standard Grading Formulas</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Examination modules must adhere strictly to the National Examinations Board (NEB) and Curriculum Development Centre (CDC) letter grading guidelines, including internal assessment weightings (25% or 50%) and NG (Non-Graded) thresholds.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>3. Local Payment Gateway Integration</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To reduce cash queues at school counters, direct integration with licensed Payment Service Providers (PSPs) such as eSewa, Khalti, IME Pay, and connectIPS is critical for instantaneous fee collection and automated receipt generation.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>4. Inland Revenue Department (IRD) Compliance</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fee billing and ancillary sales (stationery, cafeteria) must comply with local tax regulations, including sequential electronic tax invoicing and VAT/TDS reporting where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links to General Resources */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="font-bold text-slate-900 text-base mb-2">Explore Related Foundational Guides:</h3>
        <ul className="space-y-2 text-sm text-brand-600">
          <li>
            <Link href="/blog/what-is-a-school-erp" className="hover:underline flex items-center gap-1.5">
              <ArrowRight className="h-4 w-4" />
              <span>What Is a School ERP? Complete Architecture and Features</span>
            </Link>
          </li>
          <li>
            <Link href="/blog/school-fee-management-system" className="hover:underline flex items-center gap-1.5">
              <ArrowRight className="h-4 w-4" />
              <span>School Fee Management Systems: Automated Billing &amp; Invoicing</span>
            </Link>
          </li>
          <li>
            <Link href="/accounting-software/nepal" className="hover:underline flex items-center gap-1.5">
              <ArrowRight className="h-4 w-4" />
              <span>Accounting Software in Nepal: IRD Compliance &amp; VAT Billing</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
