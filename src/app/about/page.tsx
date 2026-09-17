import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ShieldCheck, CheckCircle2, Award, Users, RefreshCw } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Us: Editorial Standards & Methodology',
  description:
    'Learn about our editorial philosophy, research methodology, and commitment to providing independent, reliable school ERP and accounting software guides.',
  canonicalPath: '/about',
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
          <ShieldCheck className="h-3.5 w-3.5 text-brand-600" />
          <span>Editorial Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About EduTechHub &amp; Our Editorial Principles
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          EduTechHub is an independent, research-oriented knowledge platform dedicated to demystifying educational technology, School ERP architectures, and institutional financial management systems.
        </p>
      </header>

      {/* Mission */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Educational institutions and growing businesses waste thousands of dollars and hundreds of hours each year struggling with poorly selected software. Our mission is to provide rigorous, unbiased, and technically accurate evaluation frameworks so institutional decision-makers can choose and implement software with confidence.
        </p>
      </section>

      {/* 4 Pillars of Editorial Integrity */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Our Editorial Standards (E-E-A-T)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
              <CheckCircle2 className="h-4 w-4 text-brand-600" />
              <span>Independent &amp; Objective</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never accept paid reviews or sponsored rankings that compromise our editorial integrity. Every guide is written from an objective, technical perspective.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
              <Users className="h-4 w-4 text-brand-600" />
              <span>Domain Practitioner Input</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our content is informed by experienced school administrators, education technology consultants, and chartered accountants with hands-on implementation experience.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
              <RefreshCw className="h-4 w-4 text-brand-600" />
              <span>Continuous Fact Checking</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tax laws, data privacy regulations, and ERP software capabilities evolve rapidly. Our articles display both published and last-updated timestamps to maintain freshness.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
              <Award className="h-4 w-4 text-brand-600" />
              <span>No AI Filler or Hallucinations</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We do not fabricate fake statistics, bogus testimonials, or generic boilerplate text. Our content satisfies genuine search intent with clear explanations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact prompt */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p>
          Have a suggestion, correction, or topic inquiry? We welcome constructive feedback from school leaders and software engineers alike. Please visit our <a href="/contact" className="text-brand-600 font-semibold underline">Contact page</a> to get in touch.
        </p>
      </section>
    </div>
  );
}
