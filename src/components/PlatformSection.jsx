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
  Compass,
  UserCheck,
  ShieldAlert
} from 'lucide-react';

export default function PlatformSection() {
  const modules = [
    {
      num: 'MODULE 1',
      title: 'Capture & Extract',
      status: 'Planned MVP capability',
      icon: Inbox,
      scope: [
        'Proposed mailbox, upload and accounting-sync capture.',
        'Document classification and extraction for supplier invoices, freight bills, broker documents and import VAT evidence.',
        'Extraction of line items, currencies, weights and references.',
        'Field-level confidence scores on all extracted values.'
      ],
      benefit: 'Reduce manual data entry and organise import paperwork around customs entries.'
    },
    {
      num: 'MODULE 2',
      title: 'Entry Matcher',
      status: 'Planned MVP capability',
      icon: GitPullRequest,
      scope: [
        'Normalisation of customs entry numbers and declarant references.',
        'Exact-reference matching prioritised first.',
        'Probabilistic matching using dates, values, supplier names and weights when needed.',
        'Explainable confidence scores with human review of uncertain matches.',
        'Growing per-broker template library to improve matching over time.'
      ],
      benefit: 'Build a single traceable record for each customs entry.'
    },
    {
      num: 'MODULE 3',
      title: 'Landed-Cost Engine',
      status: 'Planned MVP capability',
      icon: Calculator,
      scope: [
        'Allocation of freight, insurance, duty and handling to individual product lines.',
        'Recorded exchange-rate source and date for reproducible calculations.',
        'Initial MVP allocation methods: value, weight and volume.',
        'Broader planned methods: quantity and custom split.',
        'Proposed balanced journals or item-cost updates for approval, with Xero prioritised.'
      ],
      benefit: 'Understand the true landed cost per product with deterministic financial calculations.'
    },
    {
      num: 'MODULE 4',
      title: 'PVA & C79 Reconciler',
      status: 'PVA: planned MVP • C79: planned Year 2 expansion',
      icon: ShieldCheck,
      scope: [
        'Line-level comparison between import VAT statements, the evidence graph and ledger records.',
        'Supporting workings for VAT return Boxes 1, 4 and 7.',
        'Structured exception logs and proposed corrective actions.',
        'Classify discrepancies across 5 categories: (1) Missing entry, (2) Value difference, (3) Timing difference, (4) Non-business or wrong-EORI entry, (5) Duplicate.',
        'Exportable VAT support packs ready for review.'
      ],
      benefit: 'Identify gaps and differences in import VAT evidence before submission.'
    },
    {
      num: 'MODULE 5',
      title: 'Evidence Vault',
      status: 'Planned MVP capability',
      icon: Archive,
      scope: [
        'SHA-256 hash-chained records with append-only history.',
        'Accounting-period locking to prevent silent amendments.',
        'Separation between preparer and approver.',
        'Traceable reconciliation decisions and underlying supporting evidence.',
        'Planned open exports (API export planned as a later capability).'
      ],
      benefit: 'Designed to make retrospective changes detectable while retaining earlier records.'
    },
    {
      num: 'MODULE 6',
      title: 'Margin Guard & CBAM Monitor',
      status: 'Planned capability • CBAM Monitor v1: Planned Year 1 (Beta)',
      icon: TrendingUp,
      scope: [
        'Comparison of landed cost with selling price and target margin.',
        'Configurable rules and flags for potential margin erosion.',
        'Backward-looking and forward-looking CBAM threshold monitoring.',
        'Supplier emissions-data requests and adviser readiness information.',
        'CBAM Monitor v1 is planned within Year 1 development and beta hardening.'
      ],
      benefit: 'Spot margin pressure early and prepare relevant supporting information.'
    }
  ];

  return (
    <section id="platform" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl scroll-reveal">
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
                className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 shadow-2xs card-hover flex flex-col justify-between scroll-reveal"
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

        {/* AI and Human Review Policy Card */}
        <div className="mt-14 rounded-2xl bg-white border border-[#D6CCC2] p-7 sm:p-9 shadow-2xs scroll-reveal">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420] shrink-0 mt-1">
              <UserCheck className="w-6 h-6 text-[#2C2420]" aria-hidden="true" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#F7F5F2] text-[#2C2420] border border-[#D6CCC2] mb-2">
                Governance & Policy
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2C2420]">
                AI and Human Review Policy
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#2C2420] font-medium leading-relaxed">
                “AI is planned for document reading and candidate matching. Financial allocations, reconciliation checks, threshold tests and evidence hashing use deterministic rules. Proposed ledger postings require human approval.”
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 border-t border-[#D6CCC2] text-xs sm:text-sm text-[#5C524B]">
                <div className="flex items-start gap-2">
                  <span className="text-[#2C2420] font-bold">•</span>
                  <span>Low-confidence matches are routed to a human reviewer queue.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2C2420] font-bold">•</span>
                  <span>The approver is strictly separate from the preparer for financial governance.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2C2420] font-bold">•</span>
                  <span>All review decisions and rationale are permanently recorded in the audit trail.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2C2420] font-bold">•</span>
                  <span>Customer data is used for model improvement only with explicit consent.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Capabilities Area */}
        <div className="mt-14 rounded-2xl bg-white border border-[#D6CCC2] p-7 sm:p-9 shadow-2xs scroll-reveal">
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
            
            <div className="p-4 rounded-xl bg-[#F7F5F2] border border-[#D6CCC2] card-hover">
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

            <div className="p-4 rounded-xl bg-[#F7F5F2] border border-[#D6CCC2] card-hover">
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

            <div className="p-4 rounded-xl bg-[#F7F5F2] border border-[#D6CCC2] card-hover">
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

            <div className="p-4 rounded-xl bg-white border border-[#D6CCC2] card-hover">
              <div className="flex items-center justify-between mb-2">
                <Compass className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                <span className="text-[10px] font-bold text-[#2C2420] bg-[#D6CCC2]/40 px-2 py-0.5 rounded">
                  Year 2 Roadmap
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#2C2420]">Accountant portfolio</h4>
              <p className="text-xs text-[#5C524B] mt-1 leading-snug">
                Multi-client dashboard for accounting practice management.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#D6CCC2] card-hover">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                <span className="text-[10px] font-bold text-[#2C2420] bg-[#D6CCC2]/40 px-2 py-0.5 rounded">
                  Later Roadmap
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
        <div className="mt-14 rounded-2xl bg-[#2C2420] text-white p-7 sm:p-10 border border-[#2C2420] shadow-md scroll-reveal">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D6CCC2] block mb-2">
              Phased Delivery Plan
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Proposed development roadmap
            </h3>
            <p className="text-xs sm:text-sm text-[#D6CCC2] mt-1.5 leading-relaxed">
              Relative development phases, not confirmed calendar launch dates. All roadmap items remain planned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Year 1 */}
            <div className="p-6 rounded-xl bg-[#3D332D] border border-[#D6CCC2]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#1f1916] text-[#D6CCC2] border border-[#5C524B] mb-4">
                Year 1 — Core Platform and Beta
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F5F2]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Capture, classification and extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Entry matching and reviewer queue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Landed-Cost Engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Xero posting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>PVA reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Evidence Vault v1</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D6CCC2] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>CBAM Monitor v1 during later Year 1 development</span>
                </li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="p-6 rounded-xl bg-[#3D332D] border border-[#5C524B]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#1f1916] text-[#D6CCC2] border border-[#5C524B] mb-4">
                Year 2 — Expanded Workflows
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D6CCC2]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Sage connector</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>C79 module</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Accountant portfolio view</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Expanded integration capabilities</span>
                </li>
              </ul>
            </div>

            {/* Later Development */}
            <div className="p-6 rounded-xl bg-[#3D332D] border border-[#5C524B]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#1f1916] text-[#D6CCC2] border border-[#5C524B] mb-4">
                Later Development
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D6CCC2]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>API and additional exports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Tariff-change watch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Improved extraction models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Direct broker feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>Ireland and EU adaptations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6CCC2] font-bold shrink-0 mt-0.5">•</span>
                  <span>White-label opportunities</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Timing Ambiguities Note */}
          <div className="mt-6 pt-5 border-t border-[#5C524B] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#D6CCC2] gap-3">
            <div>
              <span className="font-semibold text-white">Integration timing: </span>
              QuickBooks: planned following the initial Xero integration. API: planned expansion.
            </div>
            <div className="text-[11px] text-[#D6CCC2]/80">
              Relative development phases • Not firm delivery promises
            </div>
          </div>
        </div>

        {/* What LandedLedger Is and Is Not Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-[#D6CCC2] text-xs sm:text-sm text-[#5C524B] leading-relaxed shadow-2xs scroll-reveal">
          <div className="flex items-center gap-2 font-bold text-[#2C2420] text-sm sm:text-base mb-2">
            <ShieldAlert className="w-5 h-5 text-[#2C2420]" aria-hidden="true" />
            Software Scope & Integration Boundaries
          </div>
          <p className="mb-2">
            LandedLedger is intended to work alongside accounting software. Xero is prioritised for the proposed MVP; QuickBooks is planned following the initial Xero integration, with Sage in the expansion roadmap.
          </p>
          <p className="text-[#5C524B]">
            LandedLedger is not a replacement for an accounting system, a customs declaration filing service, an autonomous tax adviser, or a live VAT-return submission service. It does not guarantee compliance or HMRC acceptance.
          </p>
        </div>

      </div>
    </section>
  );
}
