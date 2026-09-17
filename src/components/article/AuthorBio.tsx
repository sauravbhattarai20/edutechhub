import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Author } from '@/types/content';

interface AuthorBioProps {
  author: Author;
  publishedAt: string;
  updatedAt?: string;
}

export default function AuthorBio({ author, publishedAt, updatedAt }: AuthorBioProps) {
  return (
    <div className="my-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-lg">
          {author.name.charAt(0)}
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <span>{author.name}</span>
                <span title="Verified Editorial Contributor">
                  <ShieldCheck className="h-4 w-4 text-brand-600" />
                </span>
              </div>
              <p className="text-xs text-slate-500">{author.role}</p>
            </div>
            <div className="text-xs text-slate-400">
              <span>Published: {publishedAt}</span>
              {updatedAt && updatedAt !== publishedAt && (
                <span className="ml-2 pl-2 border-l border-slate-200">Updated: {updatedAt}</span>
              )}
            </div>
          </div>
          {author.bio && (
            <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100 mt-2">
              {author.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
