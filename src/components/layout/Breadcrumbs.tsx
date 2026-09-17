import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullTrail = [{ name: 'Home', url: '/' }, ...items];
  const schema = generateBreadcrumbSchema(fullTrail);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="my-4 text-xs font-medium text-slate-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-slate-500 hover:text-brand-600 transition"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-slate-400" />
                {isLast ? (
                  <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-slate-500 hover:text-brand-600 transition truncate max-w-[150px]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
