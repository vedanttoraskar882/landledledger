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
    <section id="platform" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6CCC2]/35 text-[#2C2420] border border-[#D6CCC2] mb-4">
            Core Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2420] tracking-tight leading-tight">
            One customs entry. Connected costs and evidence.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C524B] leading-relaxed">
            The proposed Import Evidence Graph links documents, cost allocations and reconciliation decisions around the customs entry reference.
          </p>
        </div>

        {/* 6 Module Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.num}
                className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 shadow-2xs hover:border-[#2C2420]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Status Badge */}
                  <div className="flex items-start justify-between gap-2 mb-5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#5C524B] uppercase">
                      {mod.num}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full border border-[#D6CCC2] bg-[#F7F5F2] text-[#2C2420] text-right leading-tight">
                      {mod.status}
                    </span>
                  </div>

                  {/* Module Title */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-3 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420]">
                      <Icon className="w-5 h-5 text-[#2C2420]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C2420]">
                      {mod.title}
                    </h3>
                  </div>

                  {/* Proposed Scope Items */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#2C2420]">
                      Proposed Scope
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#5C524B]">
                      {mod.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#2C2420] font-bold shrink-0 mt-0.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Module Benefit */}
                <div className="pt-4 border-t border-[#D6CCC2]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2C2420] mb-1">
                    Key Benefit
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#2C2420] italic">
                    “{mod.benefit}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Capabilities Area */}
        <div className="mt-16 rounded-2xl bg-white border border-[#D6CCC2] p-7 sm:p-9 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-[#D6CCC2] gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C2420]">
                Planned Supporting Capabilities
              </h3>
              <p className="text-xs sm:text-sm text-[#5C524B] mt-1">
                Complementary tools designed to streamline import administration and governance.
              </p>
            </div>
            <div className="text-xs text-[#5C524B] font-semibold self-start md:self-auto">
              Clear distinction: not all supporting capabilities are MVP features.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="p-4 rounded-xl bg-[#F7F5F2] border border-[#D6CCC2]">
              <div className="flex items-center justify-between mb-2">
                <Lock className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                <span className="text-[10px] font-bold text-[#2C2420] bg-white border border-[#D6CCC2] px-2 py-0.5 rounded">
                  Planned
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#2C2420]">Role-based approvals</h4>
              <p className="text-xs text-[#5C524B] mt-1 leading-snug">
                Configurable review checkpoints before journals are posted.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F5F2] border border-[#D6CCC2]">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                <span className="text-[10px] font-bold text-[#2C2420] bg-white border border-[#D6CCC2] px-2 py-0.5 rounded">
                  Planned
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#2C2420]">Retention reminders</h4>
              <p className="text-xs text-[#5C524B] mt-1 leading-snug">
                Notifications to download and store monthly HMRC statements.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F5F2] border border-[#D6CCC2]">
              <div className="flex items-center justify-between mb-2">
                <FileCheck2 className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                <span className="text-[10px] font-bold text-[#2C2420] bg-white border border-[#D6CCC2] px-2 py-0.5 rounded">
                  Planned
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#2C2420]">VAT support packs</h4>
              <p className="text-xs text-[#5C524B] mt-1 leading-snug">
                Structured evidence exports ready for VAT return reviews.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#D6CCC2]">
              <div className="flex items-center justify-between mb-2">
                <Compass className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                <span className="text-[10px] font-bold text-[#2C2420] bg-[#D6CCC2]/40 px-2 py-0.5 rounded">
                  Year 3 Roadmap
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#2C2420]">Accountant portfolio</h4>
              <p className="text-xs text-[#5C524B] mt-1 leading-snug">
                Multi-client dashboard for accounting practice management.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#D6CCC2]">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                <span className="text-[10px] font-bold text-[#2C2420] bg-[#D6CCC2]/40 px-2 py-0.5 rounded">
                  Year 3 Roadmap
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#2C2420]">Tariff-change watch</h4>
              <p className="text-xs text-[#5C524B] mt-1 leading-snug">
                Proactive tracking of UK commodity code and duty rate updates.
              </p>
            </div>

          </div>
        </div>

        {/* Proposed Development Roadmap */}
        <div className="mt-16 rounded-2xl bg-[#2C2420] text-white p-7 sm:p-10 border border-[#2C2420] shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D6CCC2] block mb-2">
              Phased Delivery Plan
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Proposed development roadmap
            </h3>
            <p className="text-xs sm:text-sm text-[#D6CCC2] mt-1.5 leading-relaxed">
              Relative delivery sequencing across proposed stages. No calendar launch dates are claimed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Year 1 */}
            <div className="p-5 rounded-xl bg-[#3D332D] border border-[#D6CCC2]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#1f1916] text-[#D6CCC2] border border-[#5C524B] mb-3">
                Year 1 — Proposed MVP
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F5F2]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Document capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Entry matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Landed-cost journals for Xero</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>PVA reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Evidence Vault</span>
                </li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="p-5 rounded-xl bg-[#3D332D] border border-[#5C524B]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#1f1916] text-[#D6CCC2] border border-[#5C524B] mb-3">
                Year 2 — Planned expansion
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D6CCC2]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>QuickBooks and Sage connectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>C79 functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>CBAM monitoring</span>
                </li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="p-5 rounded-xl bg-[#3D332D] border border-[#5C524B]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#1f1916] text-[#D6CCC2] border border-[#5C524B] mb-3">
                Year 3 — Planned expansion
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D6CCC2]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Accountant portfolio view</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Tariff-change watch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>API</span>
                </li>
              </ul>
            </div>

            {/* Later Opportunities */}
            <div className="p-5 rounded-xl bg-[#3D332D] border border-[#5C524B]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#1f1916] text-[#D6CCC2] border border-[#5C524B] mb-3">
                Later opportunities
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D6CCC2]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Irish/EU import regimes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>White-label licensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Improved extraction models</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* What LandedLedger Is and Is Not Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-[#D6CCC2] text-xs sm:text-sm text-[#5C524B] leading-relaxed shadow-2xs">
          <div className="font-bold text-[#2C2420] text-sm sm:text-base mb-2">
            Software Scope & Integration Boundaries
          </div>
          <p className="mb-2">
            LandedLedger is intended to work alongside accounting software. Xero is prioritised for the proposed MVP; QuickBooks and Sage are later roadmap integrations.
          </p>
          <p className="text-[#5C524B]">
            LandedLedger is not a replacement for an accounting system, a customs declaration filing service, an autonomous tax adviser, or a live VAT-return submission service. It does not guarantee compliance or HMRC acceptance.
          </p>
        </div>

      </div>
    </section>
  );
}
