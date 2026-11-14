import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { savePilotSubmission, formatUKDateTime } from '../utils/storage';

export default function PilotModal({ isOpen, onClose, triggerRef, selectedPlan }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successSubmission, setSuccessSubmission] = useState(null);

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const closeBtnRef = useRef(null);

  const handleClose = useCallback(() => {
    setErrorMsg('');
    setSuccessSubmission(null);
    onClose();
  }, [onClose]);

  // Focus management and body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        } else if (closeBtnRef.current) {
          closeBtnRef.current.focus();
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      if (triggerRef && triggerRef.current) {
        triggerRef.current.focus();
      }
    }
  }, [isOpen, triggerRef]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const saved = savePilotSubmission(formData);
      setSuccessSubmission(saved);
      // Reset input fields
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: ''
      });
    } catch (err) {
      // Retain the user's field values and show the specific error
      setErrorMsg(err.message || 'An unexpected error occurred while saving.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForAnother = () => {
    setSuccessSubmission(null);
    setErrorMsg('');
    setTimeout(() => {
      if (firstInputRef.current) firstInputRef.current.focus();
    }, 50);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C2420]/75 backdrop-blur-xs transition-opacity"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-modal-title"
        className="w-full max-w-lg rounded-2xl bg-[#F7F5F2] p-6 sm:p-8 shadow-2xl border border-[#D6CCC2] relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-[#2C2420]/70 hover:text-[#2C2420] hover:bg-[#D6CCC2]/30 transition-colors focus:ring-2 focus:ring-[#2C2420] focus:outline-hidden"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D6CCC2]/40 text-[#2C2420] border border-[#D6CCC2] mb-3">
            Pilot Enquiry
            {selectedPlan ? ` • ${selectedPlan}` : ''}
          </div>
          <h2 id="pilot-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#2C2420] tracking-tight">
            Request a Pilot
          </h2>
          <p className="text-sm text-[#5C524B] mt-1.5 leading-relaxed">
            Register your interest in exploring LandedLedger’s proposed pilot.
          </p>
        </div>

        {/* Error Live Region */}
        <div aria-live="assertive" className="mb-4">
          {errorMsg && (
            <div
              role="alert"
              className="p-3.5 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-xs sm:text-sm flex items-start gap-2.5"
            >
              <AlertCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Success View */}
        {successSubmission ? (
          <div aria-live="polite" className="text-center py-4">
            <div className="w-12 h-12 bg-[#D6CCC2]/50 text-[#2C2420] rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#2C2420] mb-2">
              Submission Saved Locally
            </h3>
            <p className="text-sm text-[#2C2420] mb-4 bg-white border border-[#D6CCC2] p-4 rounded-xl text-left leading-relaxed">
              <strong>Your pilot interest has been saved in this browser only. It has not been sent to LandedLedger.</strong>
            </p>

            <div className="bg-white border border-[#D6CCC2] rounded-xl p-4 text-left text-xs sm:text-sm text-[#5C524B] space-y-1.5 mb-6">
              <div>
                <span className="font-bold text-[#2C2420]">Organisation:</span> {successSubmission.organisationName}
              </div>
              <div>
                <span className="font-bold text-[#2C2420]">Contact:</span> {successSubmission.fullName}
              </div>
              <div>
                <span className="font-bold text-[#2C2420]">Recorded at:</span> {formatUKDateTime(successSubmission.submissionDateTime)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleResetForAnother}
                className="px-4 py-2.5 rounded-xl border border-[#D6CCC2] bg-white text-[#2C2420] text-sm font-semibold hover:bg-[#D6CCC2]/20 transition-colors"
              >
                Submit another test entry
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl bg-[#2C2420] text-[#F7F5F2] text-sm font-semibold hover:bg-[#3D332D] transition-colors shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Input Form - Clean inputs with NO pre-filled placeholder text */
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="pilot-full-name" className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                ref={firstInputRef}
                type="text"
                id="pilot-full-name"
                name="fullName"
                required
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CCC2] bg-white text-[#2C2420] focus:border-[#2C2420] focus:ring-1 focus:ring-[#2C2420] focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label htmlFor="pilot-phone" className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                id="pilot-phone"
                name="phoneNumber"
                required
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CCC2] bg-white text-[#2C2420] focus:border-[#2C2420] focus:ring-1 focus:ring-[#2C2420] focus:outline-hidden transition-colors"
              />
              <span className="text-[11px] text-[#5C524B] mt-1 block">
                International phone formats are supported.
              </span>
            </div>

            <div>
              <label htmlFor="pilot-email" className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider mb-1.5">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                id="pilot-email"
                name="emailAddress"
                required
                autoComplete="email"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CCC2] bg-white text-[#2C2420] focus:border-[#2C2420] focus:ring-1 focus:ring-[#2C2420] focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label htmlFor="pilot-org" className="block text-xs font-bold text-[#2C2420] uppercase tracking-wider mb-1.5">
                Organisation Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="pilot-org"
                name="organisationName"
                required
                autoComplete="organization"
                value={formData.organisationName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CCC2] bg-white text-[#2C2420] focus:border-[#2C2420] focus:ring-1 focus:ring-[#2C2420] focus:outline-hidden transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-[#2C2420] hover:bg-[#3D332D] text-[#F7F5F2] font-semibold text-sm sm:text-base transition-colors shadow-sm flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#2C2420] focus:ring-offset-2 focus:outline-hidden disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Sending Pilot Request...</span>
                  </>
                ) : (
                  <span>Send a Pilot Request</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
