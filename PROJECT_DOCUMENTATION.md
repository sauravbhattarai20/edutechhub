# Project Documentation: EduTechHub Knowledge Platform

An editorial, high-performance, search-engine-first knowledge platform designed to provide authoritative, research-backed information on **School ERP**, **School Management Systems**, and **Accounting Software**.

---

## 1. Project Purpose

The primary objective of this platform is to build a fast, scalable, search-engine-friendly content ecosystem that attracts organic Google search traffic from:
- School administrators, principals, and board members
- School bursars, accountants, and finance directors
- Academic IT coordinators and registrars
- Small business owners seeking institutional and commercial accounting software

The platform establishes topical authority through a clean **pillar-cluster content model**, high editorial transparency (E-E-A-T), and zero reliance on heavy databases or client-side JavaScript for indexing.

---

## 2. Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router.
- **Rendering Paradigm**: **Server Components (RSC)** by default with Static Site Generation (SSG). 100% crawlable raw HTML delivered to search engines.
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode) for type-safe frontmatter, routes, and metadata.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography` for editorial layouts and fast First Contentful Paint (FCP).
- **Content Engine**: File-based Markdown/MDX with `gray-matter` for typed frontmatter and `marked` for zero-latency server-side HTML rendering.
- **Icons**: `lucide-react` (featherweight tree-shakeable SVG icons).
- **Deployment**: Vercel-ready with zero serverless cold-starts on static routes.

---

## 3. Folder Structure

```
e:\Website\
├── content\                          # Pure content repository (easy for non-devs to edit)
│   ├── articles\                     # All blog and cluster articles (.mdx / .md)
│   │   ├── what-is-a-school-erp.mdx
│   │   ├── what-is-a-school-management-system.mdx
│   │   ├── benefits-of-using-school-erp.mdx
│   │   ├── school-erp-vs-excel.mdx
│   │   ├── how-to-choose-a-school-erp.mdx
│   │   ├── student-attendance-management-system.mdx
│   │   ├── school-examination-management-system.mdx
│   │   ├── school-fee-management-system.mdx
│   │   ├── school-library-management-system.mdx
│   │   └── accounting-software-for-schools.mdx
│   └── authors\                      # Author credentials for E-E-A-T
│       └── editorial-team.json
│
├── public\                           # Static assets
│   ├── images\                       # Visual diagrams and social cards
│   │   ├── og-default.svg
│   │   ├── logo.svg
│   │   └── authors\
│   └── favicon.ico
│
├── src\
│   ├── app\                          # Next.js App Router routes
│   │   ├── layout.tsx                # Root layout (Header, Nav, Footer, Fonts, Global Meta)
│   │   ├── page.tsx                  # Knowledge Hub Homepage
│   │   ├── not-found.tsx             # Custom 404 page
│   │   ├── sitemap.ts                # Dynamic XML sitemap generator
│   │   ├── robots.ts                 # Clean robots.txt generator
│   │   │
│   │   ├── school-erp\               # Pillar Section: School ERP
│   │   │   ├── page.tsx              # Pillar guide & cluster directory
│   │   │   └── nepal\page.tsx        # Regional landing guide for Nepal
│   │   │
│   │   ├── school-management-system\ # Pillar Section: Academic Operations
│   │   │   └── page.tsx
│   │   │
│   │   ├── accounting\               # Pillar Section: Financial Technology
│   │   │   └── page.tsx
│   │   │
│   │   ├── accounting-software\      # Pillar Section: Software Selection
│   │   │   ├── page.tsx
│   │   │   └── nepal\page.tsx        # Regional guide for Nepal (IRD/VAT)
│   │   │
│   │   ├── blog\                     # Blog Hub & Dynamic Articles
│   │   │   ├── page.tsx              # Categorized Blog Archive
│   │   │   └── [slug]\page.tsx       # Dynamic High-Performance Article Template
│   │   │
│   │   ├── about\page.tsx            # Trust Page (Editorial Policy & E-E-A-T)
│   │   ├── contact\page.tsx          # Contact Page with accessible form
│   │   ├── privacy-policy\page.tsx   # Legal & Trust
│   │   └── terms\page.tsx            # Legal & Trust
│   │
│   ├── components\                   # Reusable Editorial Components
│   │   ├── layout\
│   │   │   ├── Navbar.tsx            # Responsive desktop & mobile navigation
│   │   │   ├── Footer.tsx            # Comprehensive sitemap footer
│   │   │   └── Breadcrumbs.tsx       # Visual + Schema-backed breadcrumbs
│   │   ├── article\
│   │   │   ├── TableOfContents.tsx   # Dynamic anchor navigation
│   │   │   ├── Callout.tsx           # Editorial callout boxes (info, tip, warning)
│   │   │   ├── RelatedArticles.tsx   # Contextual internal linking grid
│   │   │   ├── AuthorBio.tsx         # Author credibility card
│   │   │   └── FAQSection.tsx        # Accordion with FAQPage schema support
│   │   └── seo\
│   │       └── JsonLd.tsx            # Type-safe Schema.org script injector
│   │
│   ├── lib\                          # Core Utilities & Content Layer
│   │   ├── content.ts                # Markdown loader, frontmatter parser, TOC & reading time
│   │   ├── markdown.ts               # Server-side HTML renderer with heading IDs
│   │   ├── seo.ts                    # Metadata & OpenGraph helper utilities
│   │   └── schema.ts                 # Schema.org JSON-LD builders
│   │
│   └── types\                        # TypeScript Definitions
│       └── content.ts                # Article, Category, Author, SEO types
│
├── .env.example                      # Documented environment variables
├── next.config.mjs                   # Performance & security headers
├── tailwind.config.ts                # Design tokens & typography config
├── tsconfig.json                     # Strict TypeScript configuration
├── PROJECT_DOCUMENTATION.md          # Complete project manual (this file)
└── SEO_CHECKLIST.md                  # Editorial pre-publishing checklist
```

---

## 4. Content Architecture & Pillar-Cluster Model

To dominate organic search without keyword cannibalization, content is organized into a **topical hierarchy**:

```
[Homepage: /]
   ├── [Pillar: /school-erp]
   │      ├── [Cluster Article: /blog/what-is-a-school-erp]
   │      ├── [Cluster Article: /blog/benefits-of-using-school-erp]
   │      ├── [Cluster Article: /blog/school-erp-vs-excel]
   │      ├── [Cluster Article: /blog/how-to-choose-a-school-erp]
   │      └── [Regional Sub-Pillar: /school-erp/nepal]
   │
   ├── [Pillar: /school-management-system]
   │      ├── [Cluster Article: /blog/what-is-a-school-management-system]
   │      ├── [Cluster Article: /blog/student-attendance-management-system]
   │      ├── [Cluster Article: /blog/school-examination-management-system]
   │      ├── [Cluster Article: /blog/school-fee-management-system]
   │      └── [Cluster Article: /blog/school-library-management-system]
   │
   └── [Pillar: /accounting] & [/accounting-software]
          ├── [Cluster Article: /blog/accounting-software-for-schools]
          └── [Regional Sub-Pillar: /accounting-software/nepal]
```

### Internal Linking Rules:
1. Every cluster article links upward to its parent pillar page in its introduction and breadcrumbs.
2. Every pillar page links downward to all published cluster articles in that discipline.
3. Every cluster article displays a **Related In-Depth Guides** module linking laterally to related topics in the same category.
4. No page is an orphan. Every URL is reachable from navigation menus, sitemaps, and category archives.

---

## 5. SEO Architecture & Systems

### A. Metadata Generation (`src/lib/seo.ts`)
Every page uses Next.js `generateMetadata` to generate:
- **Title Tag**: Clear, query-satisfying title under 60 characters formatted as `<Page Title> | School ERP & Accounting Hub`.
- **Meta Description**: Compelling summary between 140–160 characters.
- **Self-Referencing Canonical URL**: Prevents duplicate content issues across URL parameters or protocol variants.
- **OpenGraph & Twitter Cards**: Branded social preview cards with standard 1200x630 dimensions.
- **Robots Directives**: Default `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`.

### B. Structured Data / Schema.org (`src/lib/schema.ts`)
Valid JSON-LD schemas are injected directly into server-rendered HTML:
1. **`WebSite` & `Organization`**: On homepage and root layout (site identity, logo, search action).
2. **`BreadcrumbList`**: On all article and subpage breadcrumbs.
3. **`TechArticle` / `Article`**: On every article (headline, author info, publication timestamps, publisher logo).
4. **`FAQPage`**: Dynamically injected on articles containing genuine FAQs.

### C. XML Sitemap (`src/app/sitemap.ts`)
- Automatically traverses all static pillar pages and all markdown articles in `content/articles/`.
- Uses each article's `updatedAt` (or `publishedAt`) as the `<lastmod>` tag so crawlers prioritize fresh content.

### D. Robots.txt (`src/app/robots.ts`)
- Allows search engine crawlers across all public content.
- Restricts internal API endpoints (`/api/`).
- Declares the dynamic sitemap URL automatically.

---

## 6. How to Add a New Article

To publish a new article, create a new file in `content/articles/[slug].mdx`:

1. **Create the file**: e.g., `content/articles/school-transportation-management.mdx`.
2. **Add frontmatter**:
```yaml
---
title: "School Transportation Management System: GPS Tracking & Route Optimization"
seoTitle: "School Transportation Management System: GPS & Safety (2026)"
description: "A complete guide on school bus management systems. Learn how GPS tracking, RFID student boarding, and automated route planning enhance student safety."
slug: "school-transportation-management"
targetKeyword: "school transportation management system"
secondaryKeywords:
  - "school bus tracking system"
  - "school fleet management software"
searchIntent: "informational"
category: "School ERP"
tags:
  - "Transport"
  - "GPS"
  - "Student Safety"
author:
  id: "editorial-team"
  name: "EduTech & Accounting Editorial Team"
  role: "Education Technology Analysts"
publishedAt: "2026-09-20"
updatedAt: "2026-09-20"
featuredImage: "/images/articles/transport.svg"
featuredImageAlt: "School bus tracking interface with live GPS route map and parent alert notifications"
isFeatured: false
faq:
  - question: "How does GPS bus tracking notify parents?"
    answer: "Parents receive automated SMS or mobile push notifications when the school bus is within 1 kilometer of their designated pickup stop."
---
```
3. **Write the content in Markdown**: Use `##` for H2 headings and `###` for H3 headings. The Table of Contents is generated automatically from these headings.
4. **Save the file**: Next.js will automatically detect the new file in dev mode, or include it in static site generation during the next build.

---

## 7. Local Development & Running the Project

Ensure Node.js LTS is installed:
```powershell
# Verify Node and npm
node -v
npm -v

# Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify a production build locally:
```powershell
# Run static build
npm run build

# Preview production build
npm run start
```

---

## 8. Deployment to Vercel

The project is pre-configured for deployment on **Vercel**:
1. Push your code to a GitHub, GitLab, or Bitbucket repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SEO-first knowledge platform"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your Git repository.
4. In the **Environment Variables** section, configure:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-production-domain.com`
   - `NEXT_PUBLIC_SITE_NAME`: `School ERP & Accounting Hub`
   - `NEXT_PUBLIC_GSC_VERIFICATION_TOKEN`: *(Google Search Console verification token, optional)*
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: *(Google Analytics Measurement ID, optional)*
5. Click **Deploy**. Vercel will build all static pages and dynamic sitemaps in under 60 seconds.

---

## 9. Future Expansion Strategy

- **Regional / Geo-SEO Expansion**: Expand `/school-erp/nepal` and `/accounting-software/nepal` into city-specific guides (e.g., `/school-erp/kathmandu`, `/accounting-software/pokhara`) only when containing unique local vendor interviews or municipality regulations.
- **Ethical Monetization**:
  - Unobtrusive sponsorship slots in sidebars or article footers.
  - Transparent software comparison matrices with affiliate links clearly disclosed.
  - Institutional lead-generation consultation forms for schools requesting ERP RFP assistance.
- **Search Console Performance Monitoring**: Review query impressions every 30 days in Google Search Console to identify emerging search queries and update existing articles with new H2 sections to satisfy user intent.
