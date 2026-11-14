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
    <section id="pricing" className="py-20 sm:py-28 bg-[#F7F5F2] scroll-mt-24 border-t border-[#D6CCC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6CCC2]/35 text-[#2C2420] border border-[#D6CCC2] mb-4">
            Indicative Commercial Structure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2420] tracking-tight leading-tight">
            Indicative pricing for different import volumes.
          </h2>
          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-white border border-[#D6CCC2] text-[#2C2420] text-xs sm:text-sm font-semibold shadow-2xs">
            Prices are indicative and subject to pilot validation.
          </div>
        </div>

        {/* Exactly 3 Subscription Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-[#D6CCC2] bg-white p-8 shadow-2xs hover:border-[#2C2420]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Plan Name */}
                <h3 className="text-base font-extrabold text-[#2C2420] tracking-widest uppercase mb-4">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-5xl sm:text-6xl font-extrabold text-[#2C2420] tracking-tight font-sans">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-[#5C524B]">
                    {plan.period}
                  </span>
                </div>

                {/* Entry Allowance */}
                <div className="space-y-3.5 pt-5 border-t border-[#D6CCC2]">
                  <div className="flex items-start gap-3 text-sm text-[#2C2420]">
                    <Check className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-semibold">{plan.allowance}</span>
                  </div>

                  {plan.multipleEntities && (
                    <div className="flex items-start gap-3 text-sm text-[#2C2420]">
                      <Check className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-semibold">Multiple entities</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Action Button */}
              <div className="mt-10 pt-6 border-t border-[#D6CCC2]">
                <button
                  type="button"
                  onClick={() => onOpenPilotModal(plan.name)}
                  className="w-full py-3.5 px-4 rounded-xl text-sm sm:text-base font-bold text-[#F7F5F2] bg-[#2C2420] hover:bg-[#3D332D] active:bg-[#1f1916] transition-colors text-center focus:ring-2 focus:ring-[#2C2420] focus:outline-hidden cursor-pointer shadow-xs"
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Commercial Options */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="pb-5 border-b border-[#D6CCC2]">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C2420]">
              Additional Commercial Options
            </h3>
            <p className="text-xs sm:text-sm text-[#5C524B] mt-1">
              Supplementary services and expansion modules available alongside core subscription plans.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* CBAM module */}
            <div className="p-6 rounded-2xl bg-white border border-[#D6CCC2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-sm font-bold text-[#2C2420]">CBAM module</h4>
                  <span className="text-[10px] font-bold text-[#2C2420] bg-[#F7F5F2] border border-[#D6CCC2] px-2 py-0.5 rounded">
                    Year 2 roadmap
                  </span>
                </div>
                <div className="text-xl font-extrabold text-[#2C2420] mb-2">
                  £49/month add-on
                </div>
                <p className="text-xs text-[#5C524B] leading-relaxed">
                  Planned additional monitoring for relevant importers.
                </p>
              </div>
            </div>

            {/* Accountant partner licence */}
            <div className="p-6 rounded-2xl bg-white border border-[#D6CCC2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-sm font-bold text-[#2C2420]">Accountant partner licence</h4>
                </div>
                <div className="text-xl font-extrabold text-[#2C2420] mb-2">
                  £25–£60 per client/month
                </div>
                <p className="text-xs text-[#5C524B] leading-relaxed">
                  Volume-based pricing for accountancy practices.
                </p>
              </div>
            </div>

            {/* Onboarding service */}
            <div className="p-6 rounded-2xl bg-white border border-[#D6CCC2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-sm font-bold text-[#2C2420]">Onboarding service</h4>
                </div>
                <div className="text-xl font-extrabold text-[#2C2420] mb-2">
                  £300–£1,500 one-off
                </div>
                <p className="text-xs text-[#5C524B] leading-relaxed">
                  Historical data loading and broker-template setup.
                </p>
              </div>
            </div>

            {/* Future white-label licensing */}
            <div className="p-6 rounded-2xl bg-white border border-[#D6CCC2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-sm font-bold text-[#2C2420]">Future white-label licensing</h4>
                  <span className="text-[10px] font-bold text-[#2C2420] bg-[#F7F5F2] border border-[#D6CCC2] px-2 py-0.5 rounded">
                    Future commercial option
                  </span>
                </div>
                <div className="text-xl font-extrabold text-[#2C2420] mb-2">
                  Annual licence plus usage
                </div>
                <p className="text-xs text-[#5C524B] leading-relaxed">
                  Price not specified.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Pricing Stage Note */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-5 rounded-2xl bg-white border border-[#D6CCC2] text-xs sm:text-sm text-[#5C524B] leading-relaxed shadow-2xs">
          <p>
            Pilot terms and feature availability will need to be confirmed. Submitting an enquiry does not start a subscription.
          </p>
        </div>

      </div>
    </section>
  );
}
