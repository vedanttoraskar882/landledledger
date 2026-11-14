import React from 'react';
import {
  FileText,
  Ship,
  Receipt,
  CheckCircle,
  AlertTriangle,
  Layers,
  Scale
} from 'lucide-react';

export default function HeroSection({ onOpenPilotModal }) {
  return (
    <section id="home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-slate-50 scroll-mt-24">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" aria-hidden="true" />
            <span>In development • Pilot enquiries</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
            Know the true cost of every import.
          </h1>

          {/* Supporting Tagline */}
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-teal-800 tracking-tight">
            “Every import fully costed, every pound of import VAT fully evidenced.”
          </p>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            LandedLedger is being developed to help UK importers connect shipment documents, calculate product-level landed costs and reconcile import VAT evidence in one traceable workflow.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenPilotModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 shadow-sm transition-all focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:outline-hidden cursor-pointer"
            >
              Request a Pilot
            </button>
            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-hidden"
            >
              Explore the Platform
            </a>
          </div>

          {/* Three Concise Benefit Points */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto pt-6 border-t border-slate-200/80">
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">Understand product-level import costs.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">Identify gaps in import VAT evidence.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">Keep supporting records connected.</span>
            </div>
          </div>
        </div>

        {/* Hero Graphic: Custom Illustrative Import-Cost Dashboard */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Label indicating illustrative interface */}
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
              System Demonstration Concept
            </span>
            <span className="text-xs font-mono font-medium text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-md">
              Illustrative interface — simulated data.
            </span>
          </div>

          {/* Dashboard Window Shell */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
            {/* Window Title Bar */}
            <div className="bg-slate-900 text-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex space-x-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="h-4 w-px bg-slate-700 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">Customs Entry:</span>
                  <span className="font-mono text-sm font-bold text-white bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                    DEMO-ENTRY-001
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-400">Port of Entry: <strong className="text-slate-200">Southampton</strong></span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">Declaration: <strong className="text-slate-200">CDS Full Frontier</strong></span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-medium">
                  Entry Cleared
                </span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-4 sm:p-6 lg:p-7 space-y-6 bg-slate-50/50">
              
              {/* Linked Documents & Evidence Bar */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-teal-600" aria-hidden="true" />
                    Linked Source Documents (Connected via Import Evidence Graph)
                  </h2>
                  <span className="text-xs text-slate-500">3 of 3 files attached</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Linked Supplier Invoice */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                          <Receipt className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Supplier Invoice</div>
                          <div className="text-[11px] font-mono text-slate-500">INV-9821 • Apex Precision</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Matched
                      </span>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-between text-xs">
                      <span className="text-slate-500">Commercial Value:</span>
                      <span className="font-semibold text-slate-900">USD 24,500 (£19,291.34)</span>
                    </div>
                  </div>

                  {/* Linked Freight Document */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                          <Ship className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Freight Bill & B/L</div>
                          <div className="text-[11px] font-mono text-slate-500">FRT-4402 • Global Freight</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Matched
                      </span>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-between text-xs">
                      <span className="text-slate-500">Ocean Freight & Handling:</span>
                      <span className="font-semibold text-slate-900">£2,450.00</span>
                    </div>
                  </div>

                  {/* Linked Customs Duty & Charges */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                          <FileText className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Broker Deferment Advice</div>
                          <div className="text-[11px] font-mono text-slate-500">CUST-339 • UK Port Services</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300">
                        Needs review
                      </span>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-between text-xs">
                      <span className="text-slate-500">Customs Duty & Port Fee:</span>
                      <span className="font-semibold text-slate-900">£1,048.11</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landed-Cost Allocation Panel */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-teal-600" aria-hidden="true" />
                      Product-Level Landed-Cost Allocation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Method: Proportional by invoice value • Exchange rate applied: 1.2700 USD/GBP
                    </p>
                  </div>
                  <div className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 self-start sm:self-auto">
                    Total Entry Landed Cost: £22,789.45
                  </div>
                </div>

                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-medium">
                        <th className="py-2 pr-3">Product SKU & Description</th>
                        <th className="py-2 px-3 text-right">Qty</th>
                        <th className="py-2 px-3 text-right">Base Invoice Cost</th>
                        <th className="py-2 px-3 text-right">Allocated Freight & Duty</th>
                        <th className="py-2 pl-3 text-right font-bold text-slate-800">True Landed Unit Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-[11px] sm:text-xs">
                      <tr>
                        <td className="py-2.5 pr-3 font-sans">
                          <span className="font-bold text-slate-900">SKU-VALVE-500</span>
                          <span className="block text-[11px] text-slate-500 font-normal">Industrial Valve Assembly (Tariff 8481.80)</span>
                        </td>
                        <td className="py-2.5 px-3 text-right text-slate-700 font-sans">500 units</td>
                        <td className="py-2.5 px-3 text-right text-slate-700">£11,574.80</td>
                        <td className="py-2.5 px-3 text-right text-slate-700">+£2,098.87</td>
                        <td className="py-2.5 pl-3 text-right font-bold text-teal-700">
                          £27.35 <span className="text-[10px] font-normal text-slate-500 font-sans">(vs £23.15 base)</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-3 font-sans">
                          <span className="font-bold text-slate-900">SKU-SENS-1000</span>
                          <span className="block text-[11px] text-slate-500 font-normal">Precision Sensor Module (Tariff 9031.90)</span>
                        </td>
                        <td className="py-2.5 px-3 text-right text-slate-700 font-sans">1,000 units</td>
                        <td className="py-2.5 px-3 text-right text-slate-700">£7,716.54</td>
                        <td className="py-2.5 px-3 text-right text-slate-700">+£1,399.24</td>
                        <td className="py-2.5 pl-3 text-right font-bold text-teal-700">
                          £9.12 <span className="text-[10px] font-normal text-slate-500 font-sans">(vs £7.72 base)</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                  <span className="text-slate-500">
                    Proposed Xero adjustment journal: <code className="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">JNL-2026-IMP-001</code>
                  </span>
                  <span className="font-medium text-slate-700">
                    Freight (£2,450.00) + Duty (£868.11) + Handling (£180.00) = £3,498.11 allocated
                  </span>
                </div>
              </div>

              {/* VAT Evidence & Reconciliation Strip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* VAT Evidence Status */}
                <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                      Postponed VAT Accounting (PVA) Reconciled
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      CDS Matched
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    CDS statement import VAT of <strong>£4,557.89</strong> matches calculated VAT on customs entry value (£22,789.45 @ 20%). Linked to Box 1 & 4 VAT audit evidence.
                  </p>
                </div>

                {/* Visible Needs Review Indicator */}
                <div className="bg-amber-50/70 rounded-xl border border-amber-300 p-3.5 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
                      Exception Flag: Port Handling Fee
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                      Needs review
                    </span>
                  </div>
                  <p className="text-xs text-amber-900 leading-snug">
                    £180.00 port demurrage voucher lacks carrier confirmation docket. Flagged for human review before finalising landed cost export.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Audience Strip */}
        <div className="mt-14 max-w-4xl mx-auto text-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-slate-200 shadow-md border border-slate-800">
            <p className="text-sm sm:text-base font-medium tracking-wide">
              Designed for UK importers, wholesalers, distributors, e-commerce sellers and accounting practices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
