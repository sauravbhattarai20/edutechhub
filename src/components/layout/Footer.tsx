import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-extrabold text-base">
                E
              </span>
              <span>EduTech<span className="text-brand-400">Hub</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Independent, research-backed knowledge platform covering School ERP systems, educational management technology, and institutional accounting software.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>Editorial independence strictly maintained.</p>
              <p>Designed for educational administrators, bursars, and IT leads.</p>
            </div>
          </div>

          {/* Col 1: School ERP */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">School ERP</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/school-erp" className="hover:text-white transition">School ERP Overview</Link>
              </li>
              <li>
                <Link href="/school-management-system" className="hover:text-white transition">School Management (SMS)</Link>
              </li>
              <li>
                <Link href="/blog/what-is-a-school-erp" className="hover:text-white transition">What Is a School ERP?</Link>
              </li>
              <li>
                <Link href="/blog/school-erp-vs-excel" className="hover:text-white transition">School ERP vs Excel</Link>
              </li>
              <li>
                <Link href="/blog/how-to-choose-a-school-erp" className="hover:text-white transition">ERP Buyer&apos;s Guide</Link>
              </li>
              <li>
                <Link href="/school-erp/nepal" className="hover:text-white transition flex items-center gap-1.5">
                  <span>School ERP in Nepal</span>
                  <span className="text-[10px] px-1 py-0.5 rounded bg-brand-900 text-brand-300 font-medium">Regional</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Modules & Guides */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Modules & Tech</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog/student-attendance-management-system" className="hover:text-white transition">Attendance Systems</Link>
              </li>
              <li>
                <Link href="/blog/school-examination-management-system" className="hover:text-white transition">Examination & Grading</Link>
              </li>
              <li>
                <Link href="/blog/school-fee-management-system" className="hover:text-white transition">Fee & Invoicing Systems</Link>
              </li>
              <li>
                <Link href="/blog/school-library-management-system" className="hover:text-white transition">Library Barcoding & OPAC</Link>
              </li>
              <li>
                <Link href="/blog/benefits-of-using-school-erp" className="hover:text-white transition">Top 10 ERP Benefits</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Accounting & Trust */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Accounting & Trust</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/accounting" className="hover:text-white transition">Accounting Overview</Link>
              </li>
              <li>
                <Link href="/accounting-software" className="hover:text-white transition">Accounting Software</Link>
              </li>
              <li>
                <Link href="/blog/accounting-software-for-schools" className="hover:text-white transition">School Accounting Guide</Link>
              </li>
              <li>
                <Link href="/accounting-software/nepal" className="hover:text-white transition">Accounting in Nepal</Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/about" className="hover:text-white transition">About Us & Editorial Policy</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} EduTechHub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
