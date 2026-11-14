import React from 'react';
import {
  Settings,
  UploadCloud,
  FileSearch,
  Calculator,
  ShieldCheck,
  AlertCircle,
  FolderLock,
  LineChart,
  UserCheck
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: 1,
      icon: Settings,
      title: 'Set up the workspace',
      description: 'Connect a supported accounting platform and configure document forwarding. Xero is prioritised for the proposed MVP.'
    },
    {
      num: 2,
      icon: UploadCloud,
      title: 'Submit import documents',
      description: 'Upload or forward supplier invoices, freight bills, broker documents and import VAT statements.'
    },
    {
      num: 3,
      icon: FileSearch,
      title: 'Extract and match',
      description: 'Extract relevant information and link records to customs entries. Review uncertain matches.'
    },
    {
      num: 4,
      icon: Calculator,
      title: 'Calculate landed costs',
      description: 'Allocate costs to product lines using the selected method and review proposed accounting adjustments.'
    },
    {
      num: 5,
      icon: ShieldCheck,
      title: 'Reconcile import VAT',
      description: 'Compare statement information with linked documents and accounting records.'
    },
    {
      num: 6,
      icon: AlertCircle,
      title: 'Resolve exceptions',
      description: 'Investigate missing evidence, timing differences, incorrect values, duplicates and other discrepancies.'
    },
    {
      num: 7,
      icon: FolderLock,
      title: 'Prepare and retain evidence',
      description: 'Generate supporting workings and an exception log, then retain the period’s evidence.'
    },
    {
      num: 8,
      icon: LineChart,
      title: 'Monitor costs and relevant imports',
      description: 'Review planned margin alerts and, when available, CBAM monitoring.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white scroll-mt-24 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-3">
            Proposed product workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From import paperwork to reviewable evidence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured eight-step lifecycle designed to move from scattered commercial invoices and transport bills to an auditable, product-level landed-cost ledger.
          </p>
        </div>

        {/* 8 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono text-sm font-bold flex items-center justify-center">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Human Review Visible Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-teal-50/80 border border-teal-200 text-teal-900 flex items-center gap-3.5 shadow-2xs max-w-3xl mx-auto">
          <UserCheck className="w-5 h-5 text-teal-700 shrink-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm font-medium">
            <strong>Human review and approval are part of the proposed workflow.</strong> Uncertain matches and accounting adjustments require user confirmation before finalisation.
          </p>
        </div>

      </div>
    </section>
  );
}
