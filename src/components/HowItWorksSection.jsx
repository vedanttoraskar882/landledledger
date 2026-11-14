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
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6CCC2]/35 text-[#2C2420] border border-[#D6CCC2] mb-4">
            Proposed product workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2420] tracking-tight leading-tight">
            From import paperwork to reviewable evidence.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C524B] leading-relaxed">
            A structured eight-step lifecycle designed to move from scattered commercial invoices and transport bills to an auditable, product-level landed-cost ledger.
          </p>
        </div>

        {/* 8 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-7 rounded-2xl border border-[#D6CCC2] bg-white card-hover flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-xl bg-[#2C2420] text-[#F7F5F2] font-mono text-sm font-extrabold flex items-center justify-center">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420]">
                      <Icon className="w-5 h-5 text-[#2C2420]" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#2C2420] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C524B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Human Review Visible Note */}
        <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-white border border-[#D6CCC2] text-[#2C2420] flex items-center gap-4 shadow-2xs max-w-3xl mx-auto">
          <div className="p-2.5 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420] shrink-0">
            <UserCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
            <strong>Human review and approval are part of the proposed workflow.</strong> Uncertain matches and accounting adjustments require user confirmation before finalisation.
          </p>
        </div>

      </div>
    </section>
  );
}
