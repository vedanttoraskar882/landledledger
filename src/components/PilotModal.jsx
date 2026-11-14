import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, ShieldAlert, Loader2 } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs transition-opacity"
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
        className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-2">
            Pilot Enquiry
            {selectedPlan ? ` • ${selectedPlan}` : ''}
          </div>
          <h2 id="pilot-modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
            Request a Pilot
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Register your interest in exploring LandedLedger’s proposed pilot.
          </p>
        </div>

        {/* Mandatory Pre-submission Notice */}
        <div className="mb-6 p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong className="font-medium text-slate-700">Demo form:</strong> your details will be saved only in this browser on this device. They will not be sent to LandedLedger.
          </p>
        </div>

        {/* Error Live Region */}
        <div aria-live="assertive" className="mb-4">
          {errorMsg && (
            <div
              role="alert"
              className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs sm:text-sm flex items-start gap-2.5"
            >
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Success View */}
        {successSubmission ? (
          <div aria-live="polite" className="text-center py-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Submission Saved Locally
            </h3>
            <p className="text-sm text-slate-700 mb-4 bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-left leading-relaxed">
              <strong>Your pilot interest has been saved in this browser only. It has not been sent to LandedLedger.</strong>
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left text-xs text-slate-600 space-y-1 mb-6">
              <div>
                <span className="font-semibold text-slate-700">Organisation:</span> {successSubmission.organisationName}
              </div>
              <div>
                <span className="font-semibold text-slate-700">Contact:</span> {successSubmission.fullName}
              </div>
              <div>
                <span className="font-semibold text-slate-700">Recorded at:</span> {formatUKDateTime(successSubmission.submissionDateTime)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleResetForAnother}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
              >
                Submit another test entry
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="pilot-full-name" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
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
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label htmlFor="pilot-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="pilot-phone"
                name="phoneNumber"
                required
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+44 7700 900000"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-hidden transition-colors"
              />
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                International phone formats are supported.
              </span>
            </div>

            <div>
              <label htmlFor="pilot-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="pilot-email"
                name="emailAddress"
                required
                autoComplete="email"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="sarah@example.co.uk"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label htmlFor="pilot-org" className="block text-xs font-semibold text-slate-700 mb-1">
                Organisation Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="pilot-org"
                name="organisationName"
                required
                autoComplete="organization"
                value={formData.organisationName}
                onChange={handleChange}
                placeholder="e.g. Apex Imports Ltd"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-hidden transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-colors shadow-sm flex items-center justify-center gap-2 focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:outline-hidden disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Saving to Browser...</span>
                  </>
                ) : (
                  <span>Submit Pilot Enquiry</span>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-500 mt-2">
              Browser data can be cleared at any time. Submitting an enquiry does not start a subscription.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
