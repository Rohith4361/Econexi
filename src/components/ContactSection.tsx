/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Mail, Building, User, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onRequestDemo: () => void;
}

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestDemo }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business Email is required.';
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      errs.businessEmail = 'Please provide a valid email format (e.g., name@company.com).';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company Name is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: '',
        businessEmail: '',
        companyName: '',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct CTA & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to reduce waste and optimize operations?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Whether you want to evaluate EcoNexi for your factory floor, discuss pilot
              integration, or learn how smart alerts reduce scrap loss, our team is ready to connect.
            </p>

            {/* Request a Demo Callout Card */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Prefer an interactive walkthrough?
              </span>
              <h3 className="text-lg font-bold text-white">
                Request an EcoNexi Pilot Demonstration
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience the dashboard configured with your manufacturing materials and batch volume.
              </p>
              <button
                type="button"
                onClick={onRequestDemo}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <span>Request a Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Inquiry notes */}
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Zero hardware overhaul required for evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Custom tailored demonstration for mid-scale production lines</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl">
              {submittedData ? (
                /* Success feedback state (transparent about preview environment) */
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Thank You, {submittedData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry for <strong className="text-white">{submittedData.companyName}</strong> has been successfully validated and recorded in this preview environment.
                  </p>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed pt-2">
                    In this interactive demo, data remains local to your browser session. We look forward to connecting with your manufacturing team for a live deployment.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-300 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-800/80 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-white">Contact Our Team</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the details below to request technical documentation or pilot inquiries.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Elena Rostova"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 border text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label
                      htmlFor="businessEmail"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Business Email <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="businessEmail"
                        value={formData.businessEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, businessEmail: e.target.value })
                        }
                        placeholder="elena@precisionmfg.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 border text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                          errors.businessEmail ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                    </div>
                    {errors.businessEmail && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.businessEmail}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Company Name <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="e.g. Apex Industrial Components Ltd."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 border text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                          errors.companyName ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                    </div>
                    {errors.companyName && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your production lines, primary materials, or current waste management challenges..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 border text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 resize-none ${
                        errors.message ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 rounded-lg transition-colors cursor-pointer shadow-sm shadow-emerald-500/20"
                    >
                      {isSubmitting ? (
                        <span>Validating & Recording...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
