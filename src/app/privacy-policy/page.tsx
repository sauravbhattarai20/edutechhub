import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Our privacy commitments regarding visitor data, analytics, cookies, and personal information handling.',
  canonicalPath: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Effective Date: September 17, 2026 | Last Reviewed: September 17, 2026</p>
      </header>

      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6">
        <section>
          <h2>1. Introduction &amp; Commitment</h2>
          <p>
            EduTechHub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates an educational and informational platform providing guides on School ERP systems and accounting software. We respect your privacy and are committed to protecting any information you share while visiting our site.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We only collect information necessary to provide and improve our educational resources:</p>
          <ul>
            <li><strong>Voluntarily Submitted Information:</strong> Name and email address when you contact us via our contact form.</li>
            <li><strong>Anonymous Aggregated Analytics:</strong> Basic device type, browser, country, and page views to understand which guides are most helpful. We do not sell or monetize personal browsing history.</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies &amp; Tracking Technologies</h2>
          <p>
            We use minimal, privacy-conscious cookies to analyze website performance and ensure fast content delivery. You can disable cookies through your individual browser settings at any time without restricting your access to our informational guides.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Links &amp; Software Mentions</h2>
          <p>
            Our guides may contain external links to software vendors, official educational boards (such as NEB or CDC), and tax authorities (such as the IRD). We are not responsible for the privacy policies or practices of external third-party websites.
          </p>
        </section>

        <section>
          <h2>5. Contact Us Regarding Your Privacy</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request deletion of any correspondence sent to us, please reach out via our <a href="/contact">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
