import React from 'react';
import { List } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) return null;

  return (
    <div className="my-8 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
      <div className="flex items-center gap-2 font-semibold text-slate-900 mb-3 text-sm">
        <List className="h-4 w-4 text-brand-600" />
        <span>Table of Contents</span>
      </div>
      <nav aria-label="Table of Contents">
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? 'pl-4 text-xs text-slate-600' : 'font-medium text-slate-700'}
            >
              <a
                href={`#${heading.id}`}
                className="hover:text-brand-600 hover:underline transition-colors block py-0.5"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
