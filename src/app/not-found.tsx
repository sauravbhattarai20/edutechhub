import React from 'react';
import Link from 'next/link';
import { Home, Search, BookOpen, Layers } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 text-center">
      <div className="space-y-4">
        <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
          The resource or article you requested could not be located. It may have been moved or updated.
        </p>

        <div className="pt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-700 transition"
          >
            <Home className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <Search className="h-4 w-4" />
            <span>Search Articles</span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-left">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">Popular Knowledge Hubs:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link
              href="/school-erp"
              className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 hover:border-brand-300 hover:bg-slate-50 transition"
            >
              <Layers className="h-4 w-4 text-brand-600" />
              <div>
                <p className="font-semibold text-slate-800">School ERP Pillar</p>
                <p className="text-slate-500">Core architecture and modules</p>
              </div>
            </Link>
            <Link
              href="/school-management-system"
              className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 hover:border-brand-300 hover:bg-slate-50 transition"
            >
              <BookOpen className="h-4 w-4 text-brand-600" />
              <div>
                <p className="font-semibold text-slate-800">School Management (SMS)</p>
                <p className="text-slate-500">Attendance, grading &amp; profiles</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
