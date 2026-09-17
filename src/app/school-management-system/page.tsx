import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getArticlesByCategory } from '@/lib/content';
import { BookOpen, CheckCircle2, ArrowRight, Clock, Users, Calendar, Award } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'School Management System (SMS): Academic Operations & Workflows',
  description:
    'A practical pillar guide to School Management Systems (SMS). Learn how to streamline student admissions, attendance, timetables, and academic reporting.',
  canonicalPath: '/school-management-system',
});

export default function SchoolManagementSystemPillarPage() {
  const articles = getArticlesByCategory('School Management System');

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ name: 'School Management System', url: '/school-management-system' }]} />

      <header className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/70 px-3 py-1 text-xs font-semibold text-indigo-800">
          <BookOpen className="h-3.5 w-3.5 text-indigo-600" />
          <span>Academic Operations Pillar</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          School Management Systems: Streamlining Academic &amp; Student Operations
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          While an enterprise ERP covers institutional accounting and procurement, a School Management System (SMS) focuses intensely on the academic lifecycle: students, educators, daily classrooms, assessments, and parent collaboration.
        </p>
      </header>

      {/* 3 Core Academic Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">Student Lifecycle &amp; Demographics</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Eliminates lost paper files by housing student identification, medical alerts, emergency contacts, sibling linkages, and historical transcripts in an encrypted digital registry.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Calendar className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">Attendance &amp; Timetable Automation</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Conflict-free classroom scheduling that prevents double-booking of teachers and science laboratories, combined with rapid digital roll call tools.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Award className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">Grading &amp; Assessment Engines</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Calculates GPA, continuous assessments, and terminal marks automatically, delivering standardized report cards directly to parents via web and mobile apps.
          </p>
        </div>
      </section>

      {/* Featured Article Breakdown */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Recommended Guide</span>
          <h2 className="text-2xl font-bold text-slate-900">
            What Is a School Management System? Architecture &amp; Core Modules
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Read our comprehensive teardown of student information systems, teacher grading interfaces, and how small to mid-sized schools deploy SMS platforms.
          </p>
          <div className="pt-2">
            <Link
              href="/blog/what-is-a-school-management-system"
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
            >
              <span>Read Full Breakdown</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Academic Guides */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Academic &amp; Operational Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-xl border border-slate-200 bg-white p-5 hover:border-indigo-300 transition">
            <h3 className="font-semibold text-slate-900 text-sm hover:text-indigo-600">
              <Link href="/blog/student-attendance-management-system">
                Student Attendance Management System: Architecture &amp; RFID
              </Link>
            </h3>
            <p className="text-xs text-slate-600 mt-2 line-clamp-2">
              Learn how automated attendance reduces roll call time and instantly notifies parents of student absences.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 hover:border-indigo-300 transition">
            <h3 className="font-semibold text-slate-900 text-sm hover:text-indigo-600">
              <Link href="/blog/school-examination-management-system">
                School Examination Management System: Grading &amp; Report Cards
              </Link>
            </h3>
            <p className="text-xs text-slate-600 mt-2 line-clamp-2">
              Automating exam timetables, hall tickets, multi-tier grading, and digital report card distribution.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
