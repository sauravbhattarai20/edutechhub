# Pre-Publishing SEO & Editorial Checklist

Follow this step-by-step checklist before publishing any new article or guide on the platform to ensure high search engine performance, user intent satisfaction, and Core Web Vitals health.

---

## 1. Search Intent & Topic Research
- [ ] **Target Keyword Identified**: Have you chosen a primary keyword with clear search volume and user intent (e.g., informational, commercial, comparative)?
- [ ] **Secondary Keywords Selected**: Have you identified 2 to 4 semantic variations or long-tail questions to address naturally?
- [ ] **Search Intent Satisfied**: Does the article directly answer the user's primary query in the first 2 paragraphs without unnecessary preamble or fluff?
- [ ] **Unique Value Add**: Does the article provide original explanations, diagrams, or practical domain knowledge rather than generic AI filler?

---

## 2. Frontmatter & Metadata Setup
- [ ] **Title Tag**: Is the title under 60 characters and does it include the target keyword near the beginning?
- [ ] **Meta Description**: Is the description between 140 and 160 characters, with an actionable summary that encourages clicks in search results?
- [ ] **Slug**: Is the URL slug short, lowercase, hyphen-separated, and free of stop words or special characters (e.g., `school-fee-management-system`)?
- [ ] **Category & Tags**: Is the category assigned correctly (`School ERP`, `School Management System`, or `Accounting`)?
- [ ] **Author Assigned**: Is the author correctly credited to maintain E-E-A-T transparency?
- [ ] **Dates Configured**: Are `publishedAt` and `updatedAt` set in `YYYY-MM-DD` ISO format?

---

## 3. On-Page Content & Heading Structure
- [ ] **Single H1 Tag**: Ensure only one H1 tag exists on the page (handled automatically by the article title).
- [ ] **Logical Heading Hierarchy**: Are sections organized cleanly using `##` (H2) and `###` (H3)? No skipped heading levels (e.g., never jump from H2 to H4).
- [ ] **Table of Contents Checked**: Do all H2 and H3 headings have clear, descriptive text for easy anchor navigation?
- [ ] **Callouts & Key Takeaways**: Have you used callout blocks (`info`, `tip`, `warning`) to highlight critical decision points for busy readers?
- [ ] **Scannability**: Are paragraphs kept under 4–5 sentences with bullet points and comparison tables where appropriate?

---

## 4. Internal & External Linking
- [ ] **Pillar Page Link**: Does the article link upward to its parent pillar page (e.g., `/school-erp` or `/accounting`)?
- [ ] **Lateral Cluster Links**: Does the article link to at least 2 other related guides in the body text?
- [ ] **Descriptive Anchor Text**: Are anchor texts natural and descriptive (e.g., `review our school fee billing guide`) instead of generic phrases like `click here`?
- [ ] **No Orphan Pages**: Is this article linked from at least one existing article, pillar page, or category archive?

---

## 5. Structured Data & Rich Snippets
- [ ] **Article Schema**: Verified that `TechArticle` / `Article` schema generates correctly in JSON-LD.
- [ ] **BreadcrumbList Schema**: Verified that breadcrumb items reflect the proper topical hierarchy.
- [ ] **FAQ Schema**: If the article includes an FAQ section, are questions and answers genuine, concise, and non-promotional?

---

## 6. Image & Media Optimization
- [ ] **Descriptive Alt Text**: Does every image have an `alt` attribute that accurately describes the visual content to screen readers and search engines?
- [ ] **Modern Image Format**: Are images stored in WebP or SVG format for rapid loading?
- [ ] **File Naming**: Are image filenames descriptive and hyphenated (e.g., `student-attendance-biometric-workflow.webp` instead of `IMG_0923.jpg`)?

---

## 7. Technical Verification & Build Test
- [ ] **Local Build Test**: Run `npm run build` to confirm zero TypeScript errors and successful static generation.
- [ ] **Mobile Responsiveness**: Preview on a mobile viewport to confirm tables scroll cleanly and text remains comfortably readable.
- [ ] **XML Sitemap Check**: Verify that `/sitemap.xml` automatically lists the new article slug.
- [ ] **No Broken Links**: Click all internal links to verify no 404 errors occur.
