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
    <section id="about" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6CCC2]/35 text-[#2C2420] border border-[#D6CCC2] mb-4">
            About the Concept
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2420] tracking-tight leading-tight">
            Bring scattered import records into one clear picture.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C524B] leading-relaxed">
            Supplier invoices, transport costs, customs records and VAT evidence are often held separately. LandedLedger proposes connecting these records around each customs entry so businesses can understand product costs and investigate reconciliation differences.
          </p>
        </div>

        {/* 3 Problem-and-Benefit Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Fragmented documents */}
          <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#2C2420]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420] flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2420] mb-2.5">
                Fragmented documents
              </h3>
              <p className="text-xs sm:text-sm text-[#5C524B] mb-6 leading-relaxed">
                Supplier, freight and customs paperwork can be difficult to connect across disconnected emails, portals and filing folders.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D6CCC2]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#2C2420] mb-1">
                Proposed Benefit
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#2C2420]">
                A linked record for each customs entry.
              </p>
            </div>
          </div>

          {/* Card 2: Unclear product costs */}
          <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#2C2420]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420] flex items-center justify-center mb-6">
                <Scale className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2420] mb-2.5">
                Unclear product costs
              </h3>
              <p className="text-xs sm:text-sm text-[#5C524B] mb-6 leading-relaxed">
                Freight, insurance, duty and handling affect the cost of imported goods, yet are rarely apportioned accurately to line items.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D6CCC2]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#2C2420] mb-1">
                Proposed Benefit
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#2C2420]">
                Structured allocation to individual product lines.
              </p>
            </div>
          </div>

          {/* Card 3: Reconciliation gaps */}
          <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#2C2420]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D6CCC2]/35 text-[#2C2420] flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2420] mb-2.5">
                Reconciliation gaps
              </h3>
              <p className="text-xs sm:text-sm text-[#5C524B] mb-6 leading-relaxed">
                Import VAT statements and accounting records can contain differences or missing evidence, leading to compliance queries.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D6CCC2]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#2C2420] mb-1">
                Proposed Benefit
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#2C2420]">
                A review workflow for identifying and resolving exceptions.
              </p>
            </div>
          </div>

        </div>

        {/* Connected-Document Graphic: The Import Evidence Graph Concept */}
        <div className="mt-14 p-6 sm:p-10 rounded-2xl bg-[#2C2420] text-[#F7F5F2] border border-[#2C2420] shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D6CCC2] block mb-2">
              Core Differentiation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              “One connected record for each customs entry.”
            </h3>
            <p className="text-xs sm:text-sm text-[#D6CCC2] mt-2.5 leading-relaxed">
              The proposed Import Evidence Graph connects relevant documents, costs, accounting records and reconciliation decisions around the customs entry reference.
            </p>
          </div>

          {/* Visual Node Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 items-center">
            
            {/* Input 1 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center">
              <FileText className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Supplier Invoices</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Commercial lines & currency</div>
            </div>

            {/* Input 2 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center">
              <Truck className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Freight Bills</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Air / sea / road transport</div>
            </div>

            {/* Center Anchor: Customs Entry Hub */}
            <div className="md:col-span-1 p-4 rounded-xl bg-[#1f1916] border-2 border-[#D6CCC2] text-center shadow-lg relative my-2 md:my-0">
              <div className="text-[10px] font-mono text-[#D6CCC2] font-bold uppercase tracking-wider mb-1">
                Central Anchor
              </div>
              <GitMerge className="w-6 h-6 text-white mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-extrabold text-white">Customs Entry Reference</div>
              <div className="text-[11px] text-[#D6CCC2] mt-0.5">Import Evidence Graph</div>
            </div>

            {/* Input 3 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center">
              <FileCheck className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Customs Broker Docs</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Duty, deferment & clearance</div>
            </div>

            {/* Input 4 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center">
              <Receipt className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Import VAT Evidence</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">PVA & C79 monthly records</div>
            </div>

          </div>

          <div className="mt-8 pt-5 border-t border-[#5C524B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D6CCC2] gap-2">
            <span>Illustrative architecture concept • Anchoring documentation to customs declarations</span>
            <span className="font-mono text-white">Intended to work alongside accounting software</span>
          </div>
        </div>

        {/* Founder Card - Clean layout without any founder photo/avatar */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-9 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D6CCC2]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C2420] tracking-tight">
                  Muhammad Abdur Rauf
                </h3>
                <p className="text-sm font-bold uppercase tracking-wider text-[#5C524B] mt-0.5">
                  Founder
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2C2420] bg-[#F7F5F2] px-3.5 py-2 rounded-xl border border-[#D6CCC2] self-start sm:self-auto">
                <MapPin className="w-4 h-4 text-[#5C524B]" aria-hidden="true" />
                <span>Bognor Regis, West Sussex</span>
              </div>
            </div>

            {/* Biography */}
            <p className="mt-5 text-sm sm:text-base text-[#5C524B] leading-relaxed">
              Muhammad Abdur Rauf brings experience across accounts assistant, accountant and accounts manager roles. His accounting background provides the foundation for LandedLedger’s proposed approach to connected import costs, reconciliation and supporting evidence.
            </p>

            {/* Education */}
            <div className="mt-6 pt-5 border-t border-[#D6CCC2]/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#5C524B]" aria-hidden="true" />
                Education
              </div>
              <div className="text-xs sm:text-sm text-[#5C524B]">
                <strong className="text-[#2C2420] font-bold">Bachelor of Business Administration</strong> — Institute of Business Administration, Karachi, 2020–2024.
              </div>
              <div className="text-xs sm:text-sm text-[#5C524B]">
                <strong className="text-[#2C2420] font-bold">Bachelor of Commerce</strong> — University of the Punjab, 2008–2010.
              </div>
            </div>

            {/* Short Stage Note */}
            <div className="mt-6 p-4 rounded-xl bg-[#F7F5F2] border border-[#D6CCC2] text-xs sm:text-sm text-[#2C2420] leading-relaxed">
              <span className="font-bold">Stage Note:</span> LandedLedger is at concept and proposed MVP stage. The business plan envisages an initial pilot with 10–15 importers.
              <span className="block text-xs text-[#5C524B] mt-1">
                (10–15 is a planned pilot cohort size, not an existing customer count.)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
