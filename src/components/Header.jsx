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
          ? 'bg-[#F7F5F2]/95 backdrop-blur-md shadow-xs border-b border-[#D6CCC2]'
          : 'bg-[#F7F5F2]/85 backdrop-blur-xs border-b border-[#D6CCC2]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Wordmark Logo (Text Only - No square icon) */}
          <div className="flex items-center">
            <a
              href="#home"
              className="flex items-center text-[#2C2420] group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C2420] rounded-lg p-1"
              aria-label="LandedLedger Home"
            >
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#2C2420] font-sans">
                LandedLedger
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-2 text-sm font-semibold text-[#2C2420]/80 hover:text-[#2C2420] hover:bg-[#D6CCC2]/35 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#2C2420] focus:outline-hidden"
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
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-[#F7F5F2] bg-[#2C2420] hover:bg-[#3D332D] active:bg-[#1f1916] shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#2C2420] focus-visible:ring-offset-2 focus:outline-hidden cursor-pointer"
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
              className="p-2 rounded-lg text-[#2C2420] hover:bg-[#D6CCC2]/30 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C2420]"
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
          className="md:hidden border-b border-[#D6CCC2] bg-[#F7F5F2]/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 shadow-lg"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#2C2420] hover:bg-[#D6CCC2]/30 transition-colors focus-visible:ring-2 focus-visible:ring-[#2C2420]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#D6CCC2]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilotModal();
              }}
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-semibold text-[#F7F5F2] bg-[#2C2420] hover:bg-[#3D332D] shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#2C2420]"
            >
              Request a Pilot
            </button>
            <p className="text-center text-xs text-[#2C2420]/70 mt-2">
              Proposed platform in development • Local demo storage only
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
