import React from 'react';
import {
  FileText,
  Truck,
  FileCheck,
  Scale,
  GitMerge,
  GraduationCap,
  MapPin,
  Receipt,
  Landmark,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl scroll-reveal">
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
          <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs card-hover scroll-reveal">
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
          <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs card-hover scroll-reveal">
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
          <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs card-hover scroll-reveal">
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
        <div className="mt-16 p-6 sm:p-10 rounded-2xl bg-[#2C2420] text-[#F7F5F2] border border-[#2C2420] shadow-md scroll-reveal">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#3D332D]">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D6CCC2] block mb-1.5">
                Core Differentiation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                “One connected record for each customs entry.”
              </h3>
              <p className="text-xs sm:text-sm text-[#D6CCC2] mt-2 leading-relaxed max-w-2xl">
                The same connected record supports cost allocation, import VAT reconciliation, monitoring and evidence retention.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#2C2420] bg-white px-3 py-1 rounded-md self-start md:self-auto shrink-0 shadow-2xs">
              Illustrative interface — simulated data.
            </span>
          </div>

          {/* Visual Node Diagram linking all 6 required records */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            
            {/* Connection 1 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center animate-seq-1 transition-colors">
              <FileText className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Supplier Invoice</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Commercial lines, SKU quantities & FX currency</div>
            </div>

            {/* Connection 2 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center animate-seq-2 transition-colors">
              <Truck className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Freight & Insurance Documents</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Sea, air, road transit charges & marine cargo cover</div>
            </div>

            {/* Connection 3 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center animate-seq-3 transition-colors">
              <FileCheck className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Broker Disbursements & Duty</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Customs declarations, tariff codes & deferment entries</div>
            </div>

            {/* Center Anchor: Customs Entry Hub */}
            <div className="sm:col-span-2 lg:col-span-3 p-5 rounded-2xl bg-[#1f1916] border-2 border-[#D6CCC2] text-center shadow-lg my-2 animate-float">
              <div className="text-[10px] font-mono text-[#D6CCC2] font-bold uppercase tracking-wider mb-1">
                Central Anchor
              </div>
              <GitMerge className="w-7 h-7 text-white mx-auto mb-2" aria-hidden="true" />
              <div className="text-sm sm:text-base font-extrabold text-white">
                Customs Entry Reference (Entry Identifier / MRN)
              </div>
              <div className="text-xs text-[#D6CCC2] mt-1 max-w-xl mx-auto">
                Links documents, landed-cost allocations, import VAT reconciliation and audit-ready evidence in one traceable graph.
              </div>
            </div>

            {/* Connection 4 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center animate-seq-4 transition-colors">
              <Receipt className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">PVA Statement Line or C79 Evidence</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">HMRC monthly import VAT statement matching & verification</div>
            </div>

            {/* Connection 5 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center animate-seq-1 transition-colors">
              <Landmark className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Bank Payment & FX Evidence</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Settlement disbursements & recorded exchange-rate proof</div>
            </div>

            {/* Connection 6 */}
            <div className="p-4 rounded-xl bg-[#3D332D] border border-[#5C524B] text-center animate-seq-2 transition-colors">
              <ShieldCheck className="w-5 h-5 text-[#D6CCC2] mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-bold text-white">Accounting Records & Review Decisions</div>
              <div className="text-[11px] text-[#D6CCC2]/80 mt-0.5">Proposed journals, exception log notes & reviewer sign-off</div>
            </div>

          </div>

          <div className="mt-8 pt-5 border-t border-[#5C524B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D6CCC2] gap-2">
            <span>Illustrative architecture concept • Anchoring documentation to customs declarations</span>
            <span className="font-mono text-white">Intended to work alongside accounting software</span>
          </div>
        </div>

        {/* Leadership Team: Balanced 2-Card Layout on Desktop, Stacked on Mobile */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6CCC2]/35 text-[#2C2420] border border-[#D6CCC2] mb-3">
              Leadership
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2C2420] tracking-tight">
              Experienced Accounting & Engineering Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1: Founder & CEO */}
            <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-9 shadow-2xs card-hover flex flex-col justify-between scroll-reveal">
              <div>
                <div className="flex items-start justify-between gap-3 pb-5 border-b border-[#D6CCC2]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl bg-[#2C2420] text-[#F7F5F2] flex items-center justify-center text-lg font-extrabold tracking-wider shrink-0 border border-[#2C2420] shadow-2xs">
                      MAR
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-[#2C2420] tracking-tight">
                        Muhammad Abdur Rauf
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5C524B] mt-0.5">
                        Founder & CEO
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#2C2420] bg-[#F7F5F2] px-3 py-1.5 rounded-xl border border-[#D6CCC2] shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#5C524B]" aria-hidden="true" />
                    <span>Bognor Regis, UK</span>
                  </div>
                </div>

                <div className="sm:hidden flex items-center gap-1.5 text-xs font-semibold text-[#2C2420] bg-[#F7F5F2] px-3 py-1.5 rounded-xl border border-[#D6CCC2] mt-3 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-[#5C524B]" aria-hidden="true" />
                  <span>Bognor Regis, West Sussex</span>
                </div>

                {/* Biography */}
                <p className="mt-5 text-sm sm:text-base text-[#5C524B] leading-relaxed">
                  Muhammad Abdur Rauf brings more than ten years of accounting experience, progressing from Accounts Assistant to Accounts Manager. He leads LandedLedger’s strategy, product specification, customer discovery, partnerships and finance.
                </p>
              </div>

              {/* Education */}
              <div className="mt-6 pt-5 border-t border-[#D6CCC2]/80 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#5C524B]" aria-hidden="true" />
                  Education & Foundation
                </div>
                <div className="text-sm sm:text-base font-bold text-[#2C2420]">
                  MSc International Business
                </div>
                <div className="text-xs sm:text-sm text-[#5C524B]">
                  University of Hertfordshire
                </div>
                <div className="text-xs sm:text-sm text-[#5C524B]">
                  De Haviland Campus
                </div>
                <div className="text-xs sm:text-sm text-[#5C524B]">
                  September 2025 – September 2026
                </div>
                <div className="text-xs text-[#5C524B] font-medium pt-0.5">
                  Awarded with Commendation
                </div>
              </div>
            </div>

            {/* Card 2: CTO */}
            <div className="rounded-2xl border border-[#D6CCC2] bg-white p-7 sm:p-9 shadow-2xs card-hover flex flex-col justify-between scroll-reveal">
              <div>
                <div className="flex items-start justify-between gap-3 pb-5 border-b border-[#D6CCC2]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl bg-[#2C2420] text-[#F7F5F2] flex items-center justify-center text-lg font-extrabold tracking-wider shrink-0 border border-[#2C2420] shadow-2xs">
                      MY
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-[#2C2420] tracking-tight">
                        Mohsin Yaseen
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5C524B] mt-0.5">
                        Chief Technology Officer
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#2C2420] bg-[#F7F5F2] px-3 py-1.5 rounded-xl border border-[#D6CCC2] shrink-0">
                    <Award className="w-3.5 h-3.5 text-[#5C524B]" aria-hidden="true" />
                    <span>Engineering Leadership</span>
                  </div>
                </div>

                <div className="sm:hidden flex items-center gap-1.5 text-xs font-semibold text-[#2C2420] bg-[#F7F5F2] px-3 py-1.5 rounded-xl border border-[#D6CCC2] mt-3 w-fit">
                  <Award className="w-3.5 h-3.5 text-[#5C524B]" aria-hidden="true" />
                  <span>Engineering Leadership</span>
                </div>

                {/* Biography */}
                <p className="mt-5 text-sm sm:text-base text-[#5C524B] leading-relaxed">
                  Mohsin Yaseen brings more than eighteen years of software engineering and product leadership experience, including enterprise platforms and Odoo-based ERP systems covering accounting, supply chain and budgeting. He leads LandedLedger’s architecture, engineering delivery, security, AI/ML approach and technical hiring.
                </p>
              </div>

              {/* Supporting Credentials */}
              <div className="mt-6 pt-5 border-t border-[#D6CCC2]/80 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-2.5 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#5C524B]" aria-hidden="true" />
                  Credentials & Expertise
                </div>
                <div className="text-xs sm:text-sm text-[#5C524B]">
                  <strong className="text-[#2C2420] font-bold">MSc and BSc in Computer Science</strong>
                </div>
                <div className="text-xs sm:text-sm text-[#5C524B]">
                  <strong className="text-[#2C2420] font-bold">PMI PMP</strong> • Odoo Certified Consultant
                </div>
              </div>
            </div>

          </div>

          {/* Updated Pilot Participation Note */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#D6CCC2] text-xs sm:text-sm text-[#2C2420] leading-relaxed shadow-2xs scroll-reveal text-center max-w-3xl mx-auto">
            <span className="font-bold">Pilot Programme:</span> Seeking paid design-partner importers and their accountants to help validate the proposed platform.
          </div>
        </div>

      </div>
    </section>
  );
}
