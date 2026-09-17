import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of EduTechHub educational guides, reviews, and architectural comparisons.',
  canonicalPath: '/terms',
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} />

      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
        <p className="text-xs text-slate-500">Effective Date: September 17, 2026 | Last Reviewed: September 17, 2026</p>
      </header>

      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6">
        <section>
          <h2>1. Educational &amp; Informational Disclaimer</h2>
          <p>
            All content published on EduTechHub is provided solely for educational and informational purposes. While we strive for rigorous accuracy, software specifications, pricing tiers, tax laws, and institutional regulations change over time. Readers should independently verify contractual terms and technical capabilities directly with software vendors prior to commercial procurement.
          </p>
        </section>

        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            All original analysis, architectural diagrams, evaluation checklists, and editorial articles are the intellectual property of EduTechHub. You may quote or link to our guides with appropriate attribution, but republishing entire articles without prior written authorization is prohibited.
          </p>
        </section>

        <section>
          <h2>3. Limitation of Liability</h2>
          <p>
            Under no circumstances shall EduTechHub or its contributors be liable for any direct, indirect, or consequential damages resulting from software procurement decisions, implementation failures, or data loss incurred by your organization.
          </p>
        </section>

        <section>
          <h2>4. Inquiries</h2>
          <p>
            For legal inquiries or permissions regarding our terms, please contact us via our <a href="/contact">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
