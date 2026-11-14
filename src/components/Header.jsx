import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ onOpenPilotModal, pilotBtnRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Wordmark Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="flex items-center gap-2.5 text-slate-900 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
              aria-label="LandedLedger Home"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-teal-400 flex items-center justify-center font-bold text-base tracking-tighter border border-slate-700 shadow-xs group-hover:border-teal-500 transition-colors">
                <span className="text-white">L</span>
                <span className="text-teal-400 -ml-0.5">L</span>
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-slate-900 font-sans">
                Landed<span className="text-teal-700">Ledger</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-600 focus:outline-hidden"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              ref={pilotBtnRef}
              type="button"
              onClick={() => onOpenPilotModal()}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus:outline-hidden cursor-pointer"
            >
              Request a Pilot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 shadow-lg"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilotModal();
              }}
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Request a Pilot
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              Proposed platform in development • Local demo storage only
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
