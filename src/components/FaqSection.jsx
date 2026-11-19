import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      q: 'What is LandedLedger?',
      a: 'LandedLedger is being developed to help VAT-registered UK importers connect import documents, calculate true landed cost per product, reconcile import VAT evidence and retain a traceable record around every customs entry.'
    },
    {
      q: 'Who is it designed for?',
      a: 'It is designed for VAT-registered UK SME importers (primarily with 1–49 employees), wholesalers, distributors, trade suppliers, e-commerce sellers, accountancy practices and bookkeepers, and larger distributors requiring multi-entity support. Geographic focus is initially on South East England and London, with planned expansion across Great Britain.'
    },
    {
      q: 'What is a landed cost?',
      a: 'It is the cost of an imported product after relevant additional costs such as freight, insurance, customs duty and handling have been allocated to it.'
    },
    {
      q: 'What is the Import Evidence Graph?',
      a: 'It is the proposed connected record linking documents, costs, accounting records and reconciliation decisions around the customs entry reference: "One connected record for each customs entry."'
    },
    {
      q: 'Which documents will the platform work with?',
      a: 'The proposed workflow covers supplier invoices, freight bills, customs broker documents, import VAT statements and supporting payment information.'
    },
    {
      q: 'Which accounting systems are planned?',
      a: 'Xero is prioritised for the proposed MVP. QuickBooks is planned following the initial Xero integration, with Sage in the expansion roadmap.'
    },
    {
      q: 'How does LandedLedger use AI and handle human review?',
      a: 'AI is planned for document reading and candidate matching. Financial allocations, reconciliation checks, threshold tests and evidence hashing use deterministic rules. Proposed ledger postings require human approval, with low-confidence matches routed to a reviewer and approvers kept separate from preparers.'
    },
    {
      q: 'Are PVA and C79 both included in the MVP?',
      a: 'PVA reconciliation is planned for the MVP. C79 reconciliation is planned for Year 2 expansion.'
    },
    {
      q: 'Who is leading LandedLedger?',
      a: 'LandedLedger is led by Muhammad Abdur Rauf (Founder & CEO, with over 10 years of accounting experience across accounts assistant, accountant and manager roles) and Mohsin Yaseen (Chief Technology Officer, with over 18 years of software engineering and ERP architecture experience).'
    },
    {
      q: 'How much will it cost?',
      a: 'Indicative subscriptions are Starter at £79/month for up to 15 customs entries, Growth at £199/month for up to 60, and Enterprise at £449/month for up to 200 with multiple entities. Pricing is indicative and subject to pilot validation.'
    },
    {
      q: 'Is CBAM monitoring available?',
      a: 'CBAM Monitor v1 is planned within Year 1 development and beta hardening. Availability and commercial terms remain to be confirmed.'
    },
    {
      q: 'What is the pilot programme?',
      a: 'LandedLedger is seeking paid design-partner importers and their accountants to help validate the proposed platform before broader commercial launch.'
    },
    {
      q: 'What happens when I submit the pilot form?',
      a: 'This frontend demonstration saves your details only in this browser on this device. It does not send an enquiry to LandedLedger or create an account. Browser data can be cleared at any time, so the saved record is not a confirmed pilot registration.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6CCC2]/35 text-[#2C2420] border border-[#D6CCC2] mb-4">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2420] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C524B]">
            Answers to common questions regarding LandedLedger’s proposed concept, architecture and pilot.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5 scroll-reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#D6CCC2] bg-white overflow-hidden transition-colors shadow-2xs card-hover"
              >
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 font-bold text-[#2C2420] hover:text-[#2C2420] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C2420] transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5C524B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#2C2420]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-[#5C524B] leading-relaxed border-t border-[#D6CCC2]/50"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
