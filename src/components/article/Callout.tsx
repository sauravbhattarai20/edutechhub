import React from 'react';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'tip';
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const configs = {
    info: {
      border: 'border-blue-200 bg-blue-50/70 text-blue-900',
      icon: <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />,
      defaultTitle: 'Important Note',
    },
    warning: {
      border: 'border-amber-200 bg-amber-50/70 text-amber-900',
      icon: <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />,
      defaultTitle: 'Caution',
    },
    success: {
      border: 'border-emerald-200 bg-emerald-50/70 text-emerald-900',
      icon: <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />,
      defaultTitle: 'Pro Tip',
    },
    tip: {
      border: 'border-purple-200 bg-purple-50/70 text-purple-900',
      icon: <Lightbulb className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />,
      defaultTitle: 'Best Practice',
    },
  };

  const current = configs[type];

  return (
    <div className={`my-6 flex gap-3.5 rounded-xl border p-4 text-sm leading-relaxed ${current.border}`}>
      {current.icon}
      <div className="space-y-1">
        <p className="font-semibold">{title || current.defaultTitle}</p>
        <div className="text-slate-700">{children}</div>
      </div>
    </div>
  );
}
