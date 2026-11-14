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
    <section id="home" className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden bg-[#F7F5F2] scroll-mt-24">
      {/* Background Subtle Warm Grid */}
      <div className="absolute inset-0 bg-grid-warm opacity-80 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#2C2420] border border-[#D6CCC2] shadow-2xs mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2C2420] animate-pulse" aria-hidden="true" />
            <span>In development • Pilot enquiries</span>
          </div>

          {/* Main Headline - Big & Prominent */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2C2420] tracking-tight leading-[1.08] text-balance">
            Know the true cost of every import.
          </h1>

          {/* Supporting Tagline - Bold & Impactful */}
          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2C2420]/90 tracking-tight">
            “Every import fully costed, every pound of import VAT fully evidenced.”
          </p>

          {/* Description - Legible & Proportionate */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#5C524B] leading-relaxed text-balance max-w-3xl mx-auto">
            LandedLedger is being developed to help UK importers connect shipment documents, calculate product-level landed costs and reconcile import VAT evidence in one traceable workflow.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenPilotModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#F7F5F2] bg-[#2C2420] hover:bg-[#3D332D] active:bg-[#1f1916] shadow-sm transition-all focus:ring-2 focus:ring-[#2C2420] focus:ring-offset-2 focus:outline-hidden cursor-pointer"
            >
              Request a Pilot
            </button>
            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#2C2420] bg-white hover:bg-[#D6CCC2]/20 border border-[#D6CCC2] shadow-2xs transition-colors focus:ring-2 focus:ring-[#2C2420] focus:outline-hidden"
            >
              Explore the Platform
            </a>
          </div>

          {/* Three Concise Benefit Points */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left max-w-3xl mx-auto pt-8 border-t border-[#D6CCC2]">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-[#2C2420]">Understand product-level import costs.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-[#2C2420]">Identify gaps in import VAT evidence.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-[#2C2420]">Keep supporting records connected.</span>
            </div>
          </div>
        </div>

        {/* Hero Graphic: Custom Illustrative Import-Cost Dashboard */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          {/* Label indicating illustrative interface */}
          <div className="flex items-center justify-between px-2 mb-2.5">
            <span className="text-xs font-mono font-bold text-[#5C524B] uppercase tracking-wider">
              System Demonstration Concept
            </span>
            <span className="text-xs font-mono font-bold text-[#2C2420] bg-white border border-[#D6CCC2] px-3 py-1 rounded-md shadow-2xs">
              Illustrative interface — simulated data.
            </span>
          </div>

          {/* Dashboard Window Shell */}
          <div className="bg-white rounded-2xl shadow-xl border border-[#D6CCC2] overflow-hidden">
            {/* Window Title Bar */}
            <div className="bg-[#2C2420] text-[#F7F5F2] px-5 sm:px-7 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#3D332D]">
              <div className="flex items-center gap-3">
                <div className="flex space-x-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-[#5C524B]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#5C524B]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#5C524B]"></div>
                </div>
                <div className="h-4 w-px bg-[#5C524B] hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6CCC2]">Customs Entry:</span>
                  <span className="font-mono text-sm font-bold text-white bg-[#3D332D] px-2.5 py-0.5 rounded border border-[#5C524B]">
                    DEMO-ENTRY-001
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-[#D6CCC2]">Port of Entry: <strong className="text-white">Southampton</strong></span>
                <span className="text-[#5C524B]">•</span>
                <span className="text-[#D6CCC2]">Declaration: <strong className="text-white">CDS Full Frontier</strong></span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#3D332D] text-[#D6CCC2] border border-[#5C524B] font-semibold">
                  Entry Cleared
                </span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-5 sm:p-7 space-y-6 bg-[#F7F5F2]/50">
              
              {/* Linked Documents & Evidence Bar */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2C2420] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                    Linked Source Documents (Connected via Import Evidence Graph)
                  </h2>
                  <span className="text-xs font-medium text-[#5C524B]">3 of 3 files attached</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {/* Linked Supplier Invoice */}
                  <div className="p-4 bg-white rounded-xl border border-[#D6CCC2] shadow-2xs">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-[#D6CCC2]/35 text-[#2C2420]">
                          <Receipt className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#2C2420]">Supplier Invoice</div>
                          <div className="text-[11px] font-mono text-[#5C524B]">INV-9821 • Apex Precision</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F7F5F2] text-[#2C2420] border border-[#D6CCC2]">
                        Matched
                      </span>
                    </div>
                    <div className="mt-3.5 pt-3 border-t border-[#D6CCC2]/60 flex justify-between text-xs">
                      <span className="text-[#5C524B]">Commercial Value:</span>
                      <span className="font-bold text-[#2C2420]">USD 24,500 (£19,291.34)</span>
                    </div>
                  </div>

                  {/* Linked Freight Document */}
                  <div className="p-4 bg-white rounded-xl border border-[#D6CCC2] shadow-2xs">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-[#D6CCC2]/35 text-[#2C2420]">
                          <Ship className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#2C2420]">Freight Bill & B/L</div>
                          <div className="text-[11px] font-mono text-[#5C524B]">FRT-4402 • Global Freight</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F7F5F2] text-[#2C2420] border border-[#D6CCC2]">
                        Matched
                      </span>
                    </div>
                    <div className="mt-3.5 pt-3 border-t border-[#D6CCC2]/60 flex justify-between text-xs">
                      <span className="text-[#5C524B]">Ocean Freight & Handling:</span>
                      <span className="font-bold text-[#2C2420]">£2,450.00</span>
                    </div>
                  </div>

                  {/* Linked Customs Duty & Charges */}
                  <div className="p-4 bg-white rounded-xl border border-[#D6CCC2] shadow-2xs">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-[#D6CCC2]/35 text-[#2C2420]">
                          <FileText className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#2C2420]">Broker Deferment Advice</div>
                          <div className="text-[11px] font-mono text-[#5C524B]">CUST-339 • UK Port Services</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#2C2420] text-[#F7F5F2]">
                        Needs review
                      </span>
                    </div>
                    <div className="mt-3.5 pt-3 border-t border-[#D6CCC2]/60 flex justify-between text-xs">
                      <span className="text-[#5C524B]">Customs Duty & Port Fee:</span>
                      <span className="font-bold text-[#2C2420]">£1,048.11</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landed-Cost Allocation Panel */}
              <div className="bg-white rounded-xl border border-[#D6CCC2] p-5 sm:p-6 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D6CCC2] gap-2">
                  <div>
                    <h3 className="text-base font-bold text-[#2C2420] flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                      Product-Level Landed-Cost Allocation
                    </h3>
                    <p className="text-xs text-[#5C524B] mt-0.5">
                      Method: Proportional by invoice value • Exchange rate applied: 1.2700 USD/GBP
                    </p>
                  </div>
                  <div className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F7F5F2] border border-[#D6CCC2] text-[#2C2420] self-start sm:self-auto">
                    Total Entry Landed Cost: £22,789.45
                  </div>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#D6CCC2] text-[#5C524B] font-bold uppercase tracking-wider">
                        <th className="py-2.5 pr-3">Product SKU & Description</th>
                        <th className="py-2.5 px-3 text-right">Qty</th>
                        <th className="py-2.5 px-3 text-right">Base Invoice Cost</th>
                        <th className="py-2.5 px-3 text-right">Allocated Freight & Duty</th>
                        <th className="py-2.5 pl-3 text-right font-extrabold text-[#2C2420]">True Landed Unit Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D6CCC2]/60 font-mono text-xs">
                      <tr>
                        <td className="py-3 pr-3 font-sans">
                          <span className="font-bold text-[#2C2420]">SKU-VALVE-500</span>
                          <span className="block text-[11px] text-[#5C524B] font-normal">Industrial Valve Assembly (Tariff 8481.80)</span>
                        </td>
                        <td className="py-3 px-3 text-right text-[#2C2420] font-sans">500 units</td>
                        <td className="py-3 px-3 text-right text-[#2C2420]">£11,574.80</td>
                        <td className="py-3 px-3 text-right text-[#2C2420]">+£2,098.87</td>
                        <td className="py-3 pl-3 text-right font-bold text-[#2C2420]">
                          £27.35 <span className="text-[11px] font-normal text-[#5C524B] font-sans">(vs £23.15 base)</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-3 font-sans">
                          <span className="font-bold text-[#2C2420]">SKU-SENS-1000</span>
                          <span className="block text-[11px] text-[#5C524B] font-normal">Precision Sensor Module (Tariff 9031.90)</span>
                        </td>
                        <td className="py-3 px-3 text-right text-[#2C2420] font-sans">1,000 units</td>
                        <td className="py-3 px-3 text-right text-[#2C2420]">£7,716.54</td>
                        <td className="py-3 px-3 text-right text-[#2C2420]">+£1,399.24</td>
                        <td className="py-3 pl-3 text-right font-bold text-[#2C2420]">
                          £9.12 <span className="text-[11px] font-normal text-[#5C524B] font-sans">(vs £7.72 base)</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#D6CCC2] flex flex-wrap items-center justify-between text-xs text-[#5C524B] gap-2">
                  <span>
                    Proposed Xero adjustment journal: <code className="font-mono text-[#2C2420] bg-[#F7F5F2] border border-[#D6CCC2] px-2 py-0.5 rounded">JNL-2026-IMP-001</code>
                  </span>
                  <span className="font-bold text-[#2C2420]">
                    Freight (£2,450.00) + Duty (£868.11) + Handling (£180.00) = £3,498.11 allocated
                  </span>
                </div>
              </div>

              {/* VAT Evidence & Reconciliation Strip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* VAT Evidence Status */}
                <div className="bg-white rounded-xl border border-[#D6CCC2] p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#2C2420] flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                      Postponed VAT Accounting (PVA) Reconciled
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#F7F5F2] text-[#2C2420] border border-[#D6CCC2]">
                      CDS Matched
                    </span>
                  </div>
                  <p className="text-xs text-[#5C524B] leading-relaxed">
                    CDS statement import VAT of <strong className="text-[#2C2420]">£4,557.89</strong> matches calculated VAT on customs entry value (£22,789.45 @ 20%). Linked to Box 1 & 4 VAT audit evidence.
                  </p>
                </div>

                {/* Visible Needs Review Indicator */}
                <div className="bg-white rounded-xl border border-[#D6CCC2] p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#2C2420] flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#2C2420]" aria-hidden="true" />
                      Exception Flag: Port Handling Fee
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#2C2420] text-[#F7F5F2]">
                      Needs review
                    </span>
                  </div>
                  <p className="text-xs text-[#5C524B] leading-relaxed">
                    £180.00 port demurrage voucher lacks carrier confirmation docket. Flagged for human review before finalising landed cost export.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Audience Strip */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#2C2420] text-[#F7F5F2] shadow-md border border-[#2C2420]">
            <p className="text-sm sm:text-base font-bold tracking-wide">
              Designed for UK importers, wholesalers, distributors, e-commerce sellers and accounting practices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
