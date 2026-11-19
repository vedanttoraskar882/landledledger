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
  UserCheck,
  Landmark
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: 1,
      icon: Settings,
      title: 'Connect and configure',
      description: 'Set up document capture and a supported accounting connection. Xero is prioritised for the initial MVP.'
    },
    {
      num: 2,
      icon: UploadCloud,
      title: 'Capture documents',
      description: 'Collect supplier, freight, insurance, broker and import VAT documents through forwarding, upload or sync.'
    },
    {
      num: 3,
      icon: FileSearch,
      title: 'Match and review',
      description: 'Link records to customs entries using exact references and confidence-scored matching. Route uncertain matches for review.'
    },
    {
      num: 4,
      icon: Calculator,
      title: 'Calculate landed costs',
      description: 'Allocate charges to product lines and record the allocation method and foreign-exchange evidence.'
    },
    {
      num: 5,
      icon: AlertCircle,
      title: 'Approve accounting adjustments',
      description: 'Prepare proposed journals or item-cost updates for human approval before any ledger posting.'
    },
    {
      num: 6,
      icon: ShieldCheck,
      title: 'Reconcile import VAT',
      description: 'Compare statement lines with the evidence graph and ledger, classify discrepancies and investigate exceptions.'
    },
    {
      num: 7,
      icon: FolderLock,
      title: 'Lock and retain evidence',
      description: 'Retain the approved period’s supporting records and decisions in the planned tamper-evident vault.'
    },
    {
      num: 8,
      icon: LineChart,
      title: 'Monitor margins and relevant imports',
      description: 'Review planned margin alerts and CBAM monitoring outputs across your imported inventory.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl scroll-reveal">
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
                className="relative p-7 rounded-2xl border border-[#D6CCC2] bg-white card-hover flex flex-col justify-between shadow-2xs scroll-reveal"
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

        {/* Human Review & Banking Governance Notes */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto scroll-reveal">
          {/* Human Review Note */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D6CCC2] text-[#2C2420] flex items-start gap-4 shadow-2xs">
            <div className="p-2.5 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420] shrink-0 mt-0.5">
              <UserCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2C2420] mb-1">Human Review & Approvals</h4>
              <p className="text-xs sm:text-sm text-[#5C524B] leading-relaxed">
                Human review and approval are an integral part of the proposed workflow. Uncertain matches and proposed accounting adjustments require explicit user confirmation before finalisation.
              </p>
            </div>
          </div>

          {/* Planned Bank Feeds Note */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D6CCC2] text-[#2C2420] flex items-start gap-4 shadow-2xs">
            <div className="p-2.5 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420] shrink-0 mt-0.5">
              <Landmark className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2C2420] mb-1">Planned Banking Feeds</h4>
              <p className="text-xs sm:text-sm text-[#5C524B] leading-relaxed">
                Planned read-only feeds through an FCA-authorised open-banking provider for foreign-exchange and duty disbursement reconciliation. LandedLedger is not itself FCA-authorised and does not execute bank payments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
