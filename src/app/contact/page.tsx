'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Mail, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact Our Editorial &amp; Advisory Team
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
          Have an inquiry about our School ERP guides, editorial recommendations, or software corrections? Send us a message and our team will get back to you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6 md:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-4">
            <h2 className="font-bold text-slate-900 text-base">Editorial Inquiries</h2>
            
            <div className="flex items-start gap-3 text-xs text-slate-600">
              <Mail className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800">Email</p>
                <p>editorial@schoolerptech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-600">
              <Clock className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800">Response Window</p>
                <p>Within 1 to 2 business days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-600 pt-3 border-t border-slate-200">
              <MessageSquare className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800">Advisory</p>
                <p>We do not sell software directly. We provide objective guidance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center space-y-3">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-emerald-900">Thank You for Your Message</h3>
              <p className="text-sm text-emerald-700">
                Your inquiry has been received. Our editorial coordinators will review your submission and reply shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g., Jane Doe"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                    Work / Institutional Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@school.edu"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700">
                  Topic / Inquiry Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                >
                  <option value="">Select an inquiry type</option>
                  <option value="editorial">Editorial Feedback / Article Correction</option>
                  <option value="school-erp">School ERP Selection Question</option>
                  <option value="accounting">Accounting Software Inquiry</option>
                  <option value="regional">Regional / Nepal Software Guide</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
                  Message Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Provide context regarding your school size, current challenges, or specific questions..."
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-700 transition"
              >
                <Send className="h-4 w-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
