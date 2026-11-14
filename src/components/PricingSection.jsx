import React from 'react';
import { Check } from 'lucide-react';

export default function PricingSection({ onOpenPilotModal }) {
  const plans = [
    {
      name: 'STARTER',
      price: '£79',
      period: '/month',
      allowance: 'Up to 15 customs entries per month',
      ctaText: 'Enquire About Starter',
      multipleEntities: false
    },
    {
      name: 'GROWTH',
      price: '£199',
      period: '/month',
      allowance: 'Up to 60 customs entries per month',
      ctaText: 'Enquire About Growth',
      multipleEntities: false
    },
    {
      name: 'PRO',
      price: '£449',
      period: '/month',
      allowance: 'Up to 200 customs entries per month',
      ctaText: 'Enquire About Pro',
      multipleEntities: true
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50 scroll-mt-24 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs mb-3">
            Indicative Commercial Structure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Indicative pricing for different import volumes.
          </h2>
          <div className="mt-3 inline-block px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-medium">
            Prices are indicative and subject to pilot validation.
          </div>
        </div>

        {/* Exactly 3 Subscription Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Plan Name */}
                <h3 className="text-base font-bold text-slate-900 tracking-wider uppercase mb-3">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {plan.period}
                  </span>
                </div>

                {/* Entry Allowance */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">{plan.allowance}</span>
                  </div>

                  {plan.multipleEntities && (
                    <div className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-medium">Multiple entities</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onOpenPilotModal(plan.name)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-teal-600 hover:text-white transition-colors text-center focus:ring-2 focus:ring-teal-600 focus:outline-hidden cursor-pointer"
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Commercial Options */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              Additional Commercial Options
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Supplementary services and expansion modules available alongside core subscription plans.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* CBAM module */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900">CBAM module</h4>
                  <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                    Year 2 roadmap
                  </span>
                </div>
                <div className="text-lg font-bold text-slate-900 mb-2">
                  £49/month add-on
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Planned additional monitoring for relevant importers.
                </p>
              </div>
            </div>

            {/* Accountant partner licence */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900">Accountant partner licence</h4>
                </div>
                <div className="text-lg font-bold text-slate-900 mb-2">
                  £25–£60 per client/month
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Volume-based pricing for accountancy practices.
                </p>
              </div>
            </div>

            {/* Onboarding service */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900">Onboarding service</h4>
                </div>
                <div className="text-lg font-bold text-slate-900 mb-2">
                  £300–£1,500 one-off
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Historical data loading and broker-template setup.
                </p>
              </div>
            </div>

            {/* Future white-label licensing */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900">Future white-label licensing</h4>
                  <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                    Future commercial option
                  </span>
                </div>
                <div className="text-lg font-bold text-slate-900 mb-2">
                  Annual licence plus usage
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Price not specified.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Pricing Stage Note */}
        <div className="mt-12 max-w-3xl mx-auto text-center p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <p>
            Pilot terms and feature availability will need to be confirmed. Submitting an enquiry does not start a subscription.
          </p>
        </div>

      </div>
    </section>
  );
}
