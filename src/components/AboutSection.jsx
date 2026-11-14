import React from 'react';
import {
  FileText,
  Truck,
  FileCheck,
  Scale,
  GitMerge,
  GraduationCap,
  MapPin,
  Receipt
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-24 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-3">
            About the Concept
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bring scattered import records into one clear picture.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Supplier invoices, transport costs, customs records and VAT evidence are often held separately. LandedLedger proposes connecting these records around each customs entry so businesses can understand product costs and investigate reconciliation differences.
          </p>
        </div>

        {/* 3 Problem-and-Benefit Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Fragmented documents */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Fragmented documents
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Supplier, freight and customs paperwork can be difficult to connect across disconnected emails, portals and filing folders.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
                Proposed Benefit
              </div>
              <p className="text-sm font-medium text-slate-800">
                A linked record for each customs entry.
              </p>
            </div>
          </div>

          {/* Card 2: Unclear product costs */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-700 flex items-center justify-center mb-5">
                <Scale className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Unclear product costs
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Freight, insurance, duty and handling affect the cost of imported goods, yet are rarely apportioned accurately to line items.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
                Proposed Benefit
              </div>
              <p className="text-sm font-medium text-slate-800">
                Structured allocation to individual product lines.
              </p>
            </div>
          </div>

          {/* Card 3: Reconciliation gaps */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center mb-5">
                <FileCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Reconciliation gaps
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Import VAT statements and accounting records can contain differences or missing evidence, leading to compliance queries.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
                Proposed Benefit
              </div>
              <p className="text-sm font-medium text-slate-800">
                A review workflow for identifying and resolving exceptions.
              </p>
            </div>
          </div>

        </div>

        {/* Connected-Document Graphic: The Import Evidence Graph Concept */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 block mb-1">
              Core Differentiation
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              “One connected record for each customs entry.”
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              The proposed Import Evidence Graph connects relevant documents, costs, accounting records and reconciliation decisions around the customs entry reference.
            </p>
          </div>

          {/* Visual Node Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
            
            {/* Input 1 */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
              <FileText className="w-5 h-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
              <div className="text-xs font-semibold text-white">Supplier Invoices</div>
              <div className="text-[11px] text-slate-400">Commercial lines & currency</div>
            </div>

            {/* Input 2 */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
              <Truck className="w-5 h-5 text-indigo-400 mx-auto mb-1.5" aria-hidden="true" />
              <div className="text-xs font-semibold text-white">Freight Bills</div>
              <div className="text-[11px] text-slate-400">Air / sea / road transport</div>
            </div>

            {/* Center Anchor: Customs Entry Hub */}
            <div className="md:col-span-1 p-4 rounded-xl bg-teal-950/80 border-2 border-teal-500/80 text-center shadow-lg relative my-2 md:my-0">
              <div className="text-[10px] font-mono text-teal-400 font-semibold uppercase tracking-wider mb-1">
                Central Anchor
              </div>
              <GitMerge className="w-6 h-6 text-teal-400 mx-auto mb-1.5" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Customs Entry Reference</div>
              <div className="text-[11px] text-teal-200">Import Evidence Graph</div>
            </div>

            {/* Input 3 */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
              <FileCheck className="w-5 h-5 text-amber-400 mx-auto mb-1.5" aria-hidden="true" />
              <div className="text-xs font-semibold text-white">Customs Broker Docs</div>
              <div className="text-[11px] text-slate-400">Duty, deferment & clearance</div>
            </div>

            {/* Input 4 */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
              <Receipt className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" aria-hidden="true" />
              <div className="text-xs font-semibold text-white">Import VAT Evidence</div>
              <div className="text-[11px] text-slate-400">PVA & C79 monthly records</div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Illustrative architecture concept • Anchoring documentation to customs declarations</span>
            <span className="font-mono text-teal-300">Intended to work alongside accounting software</span>
          </div>
        </div>

        {/* Founder Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              
              {/* Initials Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl font-bold tracking-tight shrink-0 border border-slate-700 shadow-sm">
                MAR
              </div>

              {/* Founder Information */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Muhammad Abdur Rauf
                    </h3>
                    <p className="text-sm font-medium text-teal-800">
                      Founder
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                    <span>Bognor Regis, West Sussex</span>
                  </div>
                </div>

                {/* Biography */}
                <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                  Muhammad Abdur Rauf brings experience across accounts assistant, accountant and accounts manager roles. His accounting background provides the foundation for LandedLedger’s proposed approach to connected import costs, reconciliation and supporting evidence.
                </p>

                {/* Education */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-slate-600" aria-hidden="true" />
                    Education
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-900">Bachelor of Business Administration</strong> — Institute of Business Administration, Karachi, 2020–2024.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-900">Bachelor of Commerce</strong> — University of the Punjab, 2008–2010.
                  </div>
                </div>

                {/* Short Stage Note */}
                <div className="mt-5 p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900 leading-relaxed">
                  <span className="font-semibold">Stage Note:</span> LandedLedger is at concept and proposed MVP stage. The business plan envisages an initial pilot with 10–15 importers.
                  <span className="block text-[11px] text-teal-700 mt-0.5">
                    (10–15 is a planned pilot cohort size, not an existing customer count.)
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
