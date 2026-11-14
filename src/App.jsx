import React, { useState, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PlatformSection from './components/PlatformSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import PilotModal from './components/PilotModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const lastActiveTriggerRef = useRef(null);

  const handleOpenPilotModal = (planName = '') => {
    // Record current active element so focus returns to it when the dialog closes
    if (document.activeElement instanceof HTMLElement) {
      lastActiveTriggerRef.current = document.activeElement;
    }
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Sticky Navigation Header */}
      <Header
        onOpenPilotModal={handleOpenPilotModal}
        pilotBtnRef={lastActiveTriggerRef}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Home Section (#home) */}
        <HeroSection onOpenPilotModal={handleOpenPilotModal} />

        {/* 2. About Section (#about) */}
        <AboutSection />

        {/* 3. Platform Section (#platform) */}
        <PlatformSection />

        {/* 4. How It Works Section (#how-it-works) */}
        <HowItWorksSection />

        {/* 5. Market Pricing Section (#pricing) */}
        <PricingSection onOpenPilotModal={handleOpenPilotModal} />

        {/* 6. FAQ Section (#faq) */}
        <FaqSection />
      </main>

      {/* 7. Footer */}
      <Footer onOpenPilotModal={handleOpenPilotModal} />

      {/* Accessible Request a Pilot Modal */}
      <PilotModal
        isOpen={isModalOpen}
        onClose={handleClosePilotModal}
        triggerRef={lastActiveTriggerRef}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
