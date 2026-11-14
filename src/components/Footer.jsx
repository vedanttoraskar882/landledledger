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
    <footer className="bg-[#2C2420] text-[#F7F5F2] pt-16 pb-12 border-t border-[#3D332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-12 border-b border-[#3D332D]">
          
          {/* Brand Column (No icon next to wordmark) */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white font-sans">
                LandedLedger
              </span>
            </div>
            
            <p className="text-sm text-[#D6CCC2] leading-relaxed">
              Connected import costs and VAT evidence for UK businesses.
            </p>

            <div className="mt-5">
              <button
                type="button"
                onClick={() => onOpenPilotModal()}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#2C2420] bg-[#F7F5F2] hover:bg-white transition-colors focus:ring-2 focus:ring-white focus:outline-hidden cursor-pointer shadow-xs"
              >
                Request a Pilot
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D6CCC2] mb-4">
              Navigation
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-8 text-xs sm:text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#D6CCC2] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Notices and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#D6CCC2]">
          <div className="space-y-1">
            <p>
              Proposed platform in development. Pricing and availability are subject to pilot validation.
            </p>
            <p className="text-[#D6CCC2]/70">
              Pilot form entries are stored locally in your browser and are not transmitted.
            </p>
          </div>

          <div className="text-[#D6CCC2] shrink-0 font-medium">
            © {currentYear} LandedLedger.
          </div>
        </div>

      </div>
    </footer>
  );
}
