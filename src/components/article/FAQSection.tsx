'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types/content';
import JsonLd from '@/components/seo/JsonLd';
import { generateFAQSchema } from '@/lib/schema';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const schema = generateFAQSchema(faqs);

  return (
    <section className="my-10 pt-8 border-t border-slate-200" aria-labelledby="faq-heading">
      <JsonLd data={schema} />
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-5 w-5 text-brand-600" />
        <h2 id="faq-heading" className="text-xl font-bold text-slate-900 m-0">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-white transition-all overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-600' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
