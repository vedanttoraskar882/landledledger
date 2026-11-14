import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      q: 'What is LandedLedger?',
      a: 'LandedLedger is a proposed platform that connects import documents, product-level landed costs and import VAT evidence around each customs entry.'
    },
    {
      q: 'Who is it designed for?',
      a: 'It is intended for UK SME importers, wholesalers, distributors, e-commerce sellers and accounting practices supporting these businesses.'
    },
    {
      q: 'What is a landed cost?',
      a: 'It is the cost of an imported product after relevant additional costs such as freight, insurance, customs duty and handling have been allocated to it.'
    },
    {
      q: 'What is the Import Evidence Graph?',
      a: 'It is the proposed connected record linking documents, costs, accounting records and reconciliation decisions around a customs entry reference.'
    },
    {
      q: 'Which documents will the platform work with?',
      a: 'The proposed workflow covers supplier invoices, freight bills, customs broker documents, import VAT statements and supporting payment information.'
    },
    {
      q: 'Which accounting systems are planned?',
      a: 'Xero is prioritised for the proposed MVP. QuickBooks and Sage connectors are included in the Year 2 roadmap.'
    },
    {
      q: 'Will accounting decisions be fully automatic?',
      a: 'No. The proposed workflow includes human review of uncertain matches, reconciliation exceptions and accounting adjustments.'
    },
    {
      q: 'Are PVA and C79 both included in the MVP?',
      a: 'PVA reconciliation is part of the proposed Year 1 MVP. C79 functionality is included in the Year 2 roadmap.'
    },
    {
      q: 'Is the platform available now?',
      a: 'LandedLedger is at concept and proposed MVP stage. This website introduces the planned platform and provides a pilot enquiry form.'
    },
    {
      q: 'How much will it cost?',
      a: 'Indicative subscriptions are Starter at £79/month for up to 15 customs entries, Growth at £199/month for up to 60, and Pro at £449/month for up to 200 with multiple entities. Prices are subject to pilot validation.'
    },
    {
      q: 'Is CBAM monitoring available?',
      a: 'CBAM monitoring is planned for Year 2. The business plan lists an indicative £49/month add-on, subject to pilot validation.'
    },
    {
      q: 'What happens when I submit the pilot form?',
      a: 'This frontend demonstration saves your details only in this browser on this device. It does not send an enquiry to LandedLedger or create an account. Browser data can be cleared, so the saved record is not a confirmed pilot registration.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white scroll-mt-24 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-3">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Answers to common questions regarding LandedLedger’s proposed concept, architecture and pilot.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50/40 overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-teal-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 transition-colors"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-700' : ''
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
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
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
