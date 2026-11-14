import React from 'react';
import {
  Inbox,
  GitPullRequest,
  Calculator,
  ShieldCheck,
  Archive,
  TrendingUp,
  CheckCircle,
  Clock,
  FileCheck2,
  Lock,
  Compass
} from 'lucide-react';

export default function PlatformSection() {
  const modules = [
    {
      num: 'MODULE 1',
      title: 'Capture & Extract',
      status: 'Proposed MVP',
      statusType: 'mvp',
      icon: Inbox,
      scope: [
        'Receive documents through email, uploads and accounting sync.',
        'Extract invoice details, currencies, weights, line items and customs references.',
        'Prepare information for matching and review.'
      ],
      benefit: 'Reduce repeated data entry and organise import paperwork.'
    },
    {
      num: 'MODULE 2',
      title: 'Entry Matcher',
      status: 'Proposed MVP',
      statusType: 'mvp',
      icon: GitPullRequest,
      scope: [
        'Link documents to customs entries.',
        'Use references, dates, values and supplier names.',
        'Assign match confidence.',
        'Route uncertain matches for human review.'
      ],
      benefit: 'Build a traceable record for each import.'
    },
    {
      num: 'MODULE 3',
      title: 'Landed-Cost Engine',
      status: 'Proposed MVP',
      statusType: 'mvp',
      icon: Calculator,
      scope: [
        'Allocate freight, insurance, customs duty and handling.',
        'Support allocation by value, weight, volume, quantity or custom split.',
        'Record exchange rates.',
        'Prepare proposed accounting journals or item-cost updates for approval.',
        'Prioritise Xero landed-cost journals in the MVP.'
      ],
      benefit: 'Understand the full cost of individual imported products.'
    },
    {
      num: 'MODULE 4',
      title: 'PVA & C79 Reconciler',
      status: 'PVA: proposed MVP • C79: Year 2 roadmap',
      statusType: 'hybrid',
      icon: ShieldCheck,
      scope: [
        'Compare postponed VAT accounting statements and C79 evidence with import and ledger records.',
        'Identify missing entries, value differences, timing issues, duplicates and unrelated entries.',
        'Support investigation and review.'
      ],
      benefit: 'Identify gaps and differences in import VAT evidence.'
    },
    {
      num: 'MODULE 5',
      title: 'Evidence Vault',
      status: 'Proposed MVP',
      statusType: 'mvp',
      icon: Archive,
      scope: [
        'Retain source documents.',
        'Record reconciliation decisions.',
        'Maintain supporting records and an audit trail.',
        'Use tamper-evident hashes as part of the planned evidence design.'
      ],
      benefit: 'Keep supporting evidence organised and easier to retrieve.'
    },
    {
      num: 'MODULE 6',
      title: 'Margin Guard & CBAM Monitor',
      status: 'Planned capability • CBAM: Year 2 roadmap',
      statusType: 'roadmap',
      icon: TrendingUp,
      scope: [
        'Highlight changes in product costs and margins.',
        'Monitor relevant imports for planned CBAM functionality.',
        'Support supplier emissions-data requests and evidence collection.'
      ],
      benefit: 'Spot margin pressure and prepare relevant supporting information.'
    }
  ];

  return (
    <section id="platform" className="py-16 sm:py-24 bg-slate-50 scroll-mt-24 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs mb-3">
            Core Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One customs entry. Connected costs and evidence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The proposed Import Evidence Graph links documents, cost allocations and reconciliation decisions around the customs entry reference.
          </p>
        </div>

        {/* 6 Module Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.num}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Status Badge */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-600 uppercase">
                      {mod.num}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border text-right leading-tight ${
                        mod.statusType === 'mvp'
                          ? 'bg-teal-50 text-teal-800 border-teal-200'
                          : mod.statusType === 'hybrid'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>

                  {/* Module Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
                      <Icon className="w-5 h-5 text-teal-700" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {mod.title}
                    </h3>
                  </div>

                  {/* Proposed Scope Items */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Proposed Scope
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {mod.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Module Benefit */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-teal-800 mb-1">
                    Key Benefit
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 italic">
                    “{mod.benefit}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Capabilities Area */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-slate-200 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Planned Supporting Capabilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Complementary tools designed to streamline import administration and governance.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-medium self-start md:self-auto">
              Clear distinction: not all supporting capabilities are MVP features.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Lock className="w-4 h-4 text-slate-700" aria-hidden="true" />
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
                  Planned
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Role-based approvals</h4>
              <p className="text-xs text-slate-600 mt-1">
                Configurable review checkpoints before journals are posted.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-4 h-4 text-slate-700" aria-hidden="true" />
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
                  Planned
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Retention reminders</h4>
              <p className="text-xs text-slate-600 mt-1">
                Notifications to download and store monthly HMRC statements.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <FileCheck2 className="w-4 h-4 text-slate-700" aria-hidden="true" />
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
                  Planned
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">VAT support packs</h4>
              <p className="text-xs text-slate-600 mt-1">
                Structured evidence exports ready for VAT return reviews.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
              <div className="flex items-center justify-between mb-2">
                <Compass className="w-4 h-4 text-amber-800" aria-hidden="true" />
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  Year 3 Roadmap
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Accountant portfolio</h4>
              <p className="text-xs text-slate-600 mt-1">
                Multi-client dashboard for accounting practice management.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-4 h-4 text-amber-800" aria-hidden="true" />
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  Year 3 Roadmap
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Tariff-change watch</h4>
              <p className="text-xs text-slate-600 mt-1">
                Proactive tracking of UK commodity code and duty rate updates.
              </p>
            </div>

          </div>
        </div>

        {/* Proposed Development Roadmap */}
        <div className="mt-14 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 block mb-1">
              Phased Delivery Plan
            </span>
            <h3 className="text-2xl font-bold tracking-tight">
              Proposed development roadmap
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Relative delivery sequencing across proposed stages. No calendar launch dates are claimed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Year 1 */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-teal-500/50 relative">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-teal-900 text-teal-300 border border-teal-700 mb-3">
                Year 1 — Proposed MVP
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Document capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Entry matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Landed-cost journals for Xero</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>PVA reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Evidence Vault</span>
                </li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-slate-700 text-slate-200 border border-slate-600 mb-3">
                Year 2 — Planned expansion
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>QuickBooks and Sage connectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>C79 functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>CBAM monitoring</span>
                </li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-slate-700 text-slate-200 border border-slate-600 mb-3">
                Year 3 — Planned expansion
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Accountant portfolio view</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Tariff-change watch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>API</span>
                </li>
              </ul>
            </div>

            {/* Later Opportunities */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-slate-700 text-slate-200 border border-slate-600 mb-3">
                Later opportunities
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Irish/EU import regimes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>White-label licensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Improved extraction models</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* What LandedLedger Is and Is Not Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-100 border border-slate-200/90 text-xs text-slate-600 leading-relaxed">
          <div className="font-bold text-slate-800 text-sm mb-1.5">
            Software Scope & Integration Boundaries
          </div>
          <p className="mb-2">
            LandedLedger is intended to work alongside accounting software. Xero is prioritised for the proposed MVP; QuickBooks and Sage are later roadmap integrations.
          </p>
          <p className="text-slate-500">
            LandedLedger is not a replacement for an accounting system, a customs declaration filing service, an autonomous tax adviser, or a live VAT-return submission service. It does not guarantee compliance or HMRC acceptance.
          </p>
        </div>

      </div>
    </section>
  );
}
