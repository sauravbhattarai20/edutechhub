import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Accounting Software in Nepal: IRD Certification, VAT & e-Billing',
  description:
    'A practical guide to choosing IRD-compliant accounting software in Nepal. Learn about electronic billing, Annex 13 VAT books, TDS deduction, and Bikram Sambat fiscal years.',
  canonicalPath: '/accounting-software/nepal',
});

export default function AccountingSoftwareNepalPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Accounting Software', url: '/accounting-software' },
          { name: 'Nepal', url: '/accounting-software/nepal' },
        ]}
      />

      <header className="space-y-4 max-w-3xl">
        <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
          Regional Financial Technology Guide
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Accounting Software in Nepal: IRD Compliance &amp; e-Billing Guide
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Operating an accounting or ERP system in Nepal requires compliance with the directives of the Inland Revenue Department (IRD). Deploying uncertified software can lead to rejected financial audits, invalid tax invoices, and compliance penalties.
        </p>
      </header>

      {/* Key Compliance Criteria */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">4 Core Legal &amp; Technical Requirements in Nepal</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>1. Official IRD Software Certification</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under the Electronic Billing Procedure, the software vendor must be registered with the IRD. The system must prevent invoice deletion or editing once posted, ensuring an immutable sequential audit log.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>2. Automated VAT Sales &amp; Purchase Books</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The system must generate standardized VAT Purchase Registers and VAT Sales Registers matching the IRD Annex 13 format, supporting 13% standard VAT and exempt educational heads.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>3. Withholding Tax (TDS) Tracking</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Accurate tracking of statutory TDS deductions (e.g., 1.5% on contracts, 10% on rent, 15% on consultancy) with automated TDS certificate generation and periodic reconciliation against IRD portals.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>4. Bikram Sambat (BS) Fiscal Year Alignment</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Financial years in Nepal run from Shrawan 1 to Ashad end (approx. mid-July to mid-July). Ledgers and trial balances must support BS period-closing alongside standard Gregorian calendars.
            </p>
          </div>
        </div>
      </section>

      {/* Warning callout */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5 flex gap-3 text-sm text-amber-900">
        <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold">Buyer Advisory</p>
          <p className="text-xs text-amber-800 mt-1 leading-relaxed">
            Always verify that the software vendor provides an official IRD Approval Letter and has a physical local support presence in Kathmandu or major regional hubs before finalizing deployment.
          </p>
        </div>
      </div>

      {/* Internal links */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="font-bold text-slate-900 text-base mb-2">Related Resources:</h3>
        <ul className="space-y-2 text-sm text-brand-600">
          <li>
            <Link href="/blog/accounting-software-for-schools" className="hover:underline flex items-center gap-1.5">
              <ArrowRight className="h-4 w-4" />
              <span>Accounting Software for Schools: Chart of Accounts &amp; Audits</span>
            </Link>
          </li>
          <li>
            <Link href="/school-erp/nepal" className="hover:underline flex items-center gap-1.5">
              <ArrowRight className="h-4 w-4" />
              <span>School ERP Implementation in Nepal</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
