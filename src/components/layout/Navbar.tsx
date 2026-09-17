'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen, Layers, Calculator, FileText, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [erpDropdownOpen, setErpDropdownOpen] = useState(false);
  const [accDropdownOpen, setAccDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo / Site Title */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900 hover:text-brand-600 transition-colors">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white font-extrabold text-lg shadow-sm">
            E
          </span>
          <span className="text-lg tracking-tight font-semibold">
            EduTech<span className="text-brand-600">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-700" aria-label="Main Navigation">
          <Link href="/" className="px-3 py-2 rounded-md hover:text-brand-600 hover:bg-slate-50 transition">
            Home
          </Link>

          {/* School ERP Dropdown */}
          <div className="relative group" onMouseLeave={() => setErpDropdownOpen(false)}>
            <button
              onClick={() => setErpDropdownOpen(!erpDropdownOpen)}
              onMouseEnter={() => setErpDropdownOpen(true)}
              className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-brand-600 hover:bg-slate-50 transition"
              aria-expanded={erpDropdownOpen}
            >
              <span>School ERP</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
            {erpDropdownOpen && (
              <div 
                className="absolute left-0 mt-1 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-lg z-50"
                onMouseEnter={() => setErpDropdownOpen(true)}
                onMouseLeave={() => setErpDropdownOpen(false)}
              >
                <Link
                  href="/school-erp"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-md font-medium"
                >
                  <Layers className="h-4 w-4 text-brand-600" />
                  <span>ERP Overview Pillar</span>
                </Link>
                <Link
                  href="/school-management-system"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-md"
                >
                  <BookOpen className="h-4 w-4 text-brand-600" />
                  <span>School Management System</span>
                </Link>
                <Link
                  href="/school-erp/nepal"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-md"
                >
                  <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Nepal</span>
                  <span>School ERP in Nepal</span>
                </Link>
              </div>
            )}
          </div>

          {/* Accounting Dropdown */}
          <div className="relative group" onMouseLeave={() => setAccDropdownOpen(false)}>
            <button
              onClick={() => setAccDropdownOpen(!accDropdownOpen)}
              onMouseEnter={() => setAccDropdownOpen(true)}
              className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-brand-600 hover:bg-slate-50 transition"
              aria-expanded={accDropdownOpen}
            >
              <span>Accounting</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
            {accDropdownOpen && (
              <div 
                className="absolute left-0 mt-1 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-lg z-50"
                onMouseEnter={() => setAccDropdownOpen(true)}
                onMouseLeave={() => setAccDropdownOpen(false)}
              >
                <Link
                  href="/accounting"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-md font-medium"
                >
                  <Calculator className="h-4 w-4 text-brand-600" />
                  <span>Accounting Pillar</span>
                </Link>
                <Link
                  href="/accounting-software"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-md"
                >
                  <FileText className="h-4 w-4 text-brand-600" />
                  <span>Accounting Software Guides</span>
                </Link>
                <Link
                  href="/accounting-software/nepal"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-md"
                >
                  <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Nepal</span>
                  <span>Accounting Software in Nepal</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="px-3 py-2 rounded-md hover:text-brand-600 hover:bg-slate-50 transition">
            Articles & Guides
          </Link>

          <Link href="/about" className="px-3 py-2 rounded-md hover:text-brand-600 hover:bg-slate-50 transition">
            About
          </Link>

          <Link href="/contact" className="px-3 py-2 rounded-md hover:text-brand-600 hover:bg-slate-50 transition">
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 transition"
          >
            Explore Knowledge Hub
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
          >
            Home
          </Link>
          <div className="pt-2 pb-1 border-t border-slate-100">
            <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">School ERP</span>
            <Link
              href="/school-erp"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
            >
              School ERP Overview
            </Link>
            <Link
              href="/school-management-system"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
            >
              School Management System
            </Link>
            <Link
              href="/school-erp/nepal"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
            >
              School ERP in Nepal
            </Link>
          </div>
          <div className="pt-2 pb-1 border-t border-slate-100">
            <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Accounting</span>
            <Link
              href="/accounting"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
            >
              Accounting Overview
            </Link>
            <Link
              href="/accounting-software"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
            >
              Accounting Software
            </Link>
            <Link
              href="/accounting-software/nepal"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
            >
              Accounting Software in Nepal
            </Link>
          </div>
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Articles & Guides
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
