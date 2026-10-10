/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Building, Mail, User } from 'lucide-react';
import { EcoNexiLogo } from './EcoNexiLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [facilityType, setFacilityType] = useState('Metal Machining & Fabrication');
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('20 - 100 Employees');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !workEmail.trim() || !company.trim()) {
      setError('Please fill out all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail.trim())) {
      setError('Please provide a valid work email.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setWorkEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close demo request modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Demo Request Scheduled
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{fullName}</strong>! In this preview environment, your demo profile for <strong className="text-white">{company}</strong> ({facilityType}) has been logged locally.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              In a live production deployment, an integration specialist would provide a 20-minute tailored walkthrough of the scrap sensor feeds and inventory buffers.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <EcoNexiLogo size={28} showText={false} />
              <h3 id="demo-modal-title" className="text-lg font-bold text-white">
                Request an EcoNexi Live Demo
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              See how our digital dashboard monitors scrap rates and balances inventory for your factory size.
            </p>

            {error && (
              <div className="p-3 text-xs text-rose-300 bg-rose-950/40 border border-rose-800 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Marcus Vance"
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Work Email *
              </label>
              <input
                type="email"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="marcus@vanceprecision.com"
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Manufacturing Company *
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Vance Precision Components"
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Industry / Facility Type
                </label>
                <select
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <option value="Metal Machining & Fabrication">Metal Machining & Fabrication</option>
                  <option value="Plastics & Polymer Molding">Plastics & Polymer Molding</option>
                  <option value="Electronics & Assembly">Electronics & Assembly</option>
                  <option value="Sustainable Packaging">Sustainable Packaging</option>
                  <option value="Food & Beverage Processing">Food & Beverage Processing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Plant Workforce Size
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <option value="10 - 50 Employees">10 - 50 Employees</option>
                  <option value="50 - 250 Employees">50 - 250 Employees</option>
                  <option value="250 - 500 Employees">250 - 500 Employees</option>
                  <option value="Enterprise / Multi-Facility">Enterprise / Multi-Facility</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
              >
                Confirm Demo Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
