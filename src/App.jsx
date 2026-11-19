import React, { useState, useRef, useEffect } from 'react';
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
  const [isMotionPaused, setIsMotionPaused] = useState(false);
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

  const toggleMotion = () => {
    setIsMotionPaused((prev) => !prev);
  };

  // Synchronize motion pause state to document root
  useEffect(() => {
    if (isMotionPaused) {
      document.documentElement.classList.add('motion-paused');
    } else {
      document.documentElement.classList.remove('motion-paused');
    }
  }, [isMotionPaused]);

  // Pause continuous animation when tab/document is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.documentElement.classList.add('motion-paused');
      } else if (!isMotionPaused) {
        document.documentElement.classList.remove('motion-paused');
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isMotionPaused]);

  // One-time restrained scroll reveal for workflow and cards
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F2] text-[#2C2420]">
      {/* Sticky Navigation Header */}
      <Header
        onOpenPilotModal={handleOpenPilotModal}
        pilotBtnRef={lastActiveTriggerRef}
        isMotionPaused={isMotionPaused}
        onToggleMotion={toggleMotion}
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
