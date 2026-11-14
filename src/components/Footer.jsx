import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenPilotModal }) {
  const currentYear = CURRENT_YEAR;

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-base tracking-tighter">
                <span>L</span>
                <span className="-ml-0.5 text-slate-900">L</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white font-sans">
                Landed<span className="text-teal-400">Ledger</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Connected import costs and VAT evidence for UK businesses.
            </p>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => onOpenPilotModal()}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors focus:ring-2 focus:ring-teal-400 focus:outline-hidden cursor-pointer"
              >
                Request a Pilot
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Navigation
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 text-xs sm:text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Notices and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="space-y-1">
            <p>
              Proposed platform in development. Pricing and availability are subject to pilot validation.
            </p>
            <p className="text-slate-400">
              Pilot form entries are stored locally in your browser and are not transmitted.
            </p>
          </div>

          <div className="text-slate-400 shrink-0">
            © {currentYear} LandedLedger.
          </div>
        </div>

      </div>
    </footer>
  );
}
