import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  themeColor: '#006ac9',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Practical School ERP & Accounting Knowledge`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Independent educational guides and technical comparisons on School ERPs, School Management Systems, and Accounting Software for administrators, bursars, and IT directors.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      'Independent educational guides and technical comparisons on School ERPs, School Management Systems, and Accounting Software.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_TOKEN || undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();
  const siteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className="h-full">
      <head>
        <JsonLd data={orgSchema} />
        <JsonLd data={siteSchema} />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
