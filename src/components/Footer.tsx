/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EcoNexiLogo } from './EcoNexiLogo';

interface FooterProps {
  onRequestDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestDemo }) => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <EcoNexiLogo size={32} />
            <p className="text-sm font-medium text-emerald-400/90">
              “Smarter Operations. Less Waste. A Greener Future.”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Smart sustainability solutions engineered for small and medium-sized manufacturing enterprises. Empowering plant leaders to monitor waste, manage inventory, and optimize supply chains.
            </p>
          </div>

          {/* Col 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleScroll('#hero')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#features')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Features & Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#benefits')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#how-it-works')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#about')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Solutions
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleScroll('#solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Inventory Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Waste Monitoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  AI-Based Alerts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Supply-Chain Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={onRequestDemo}
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer text-left"
                >
                  Request a Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Placeholder (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Contact & Inquiries
            </span>
            <div className="space-y-2 text-xs text-slate-400">
              <p>EcoNexi Technologies</p>
              <p>Operational Inquiries & Partnerships</p>
              <p className="font-mono-numbers text-slate-400">demo@econexi.example</p>
              <div className="pt-2">
                <button
                  onClick={onRequestDemo}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors cursor-pointer"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 EcoNexi Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>SME Manufacturing Sustainability Platform</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleScroll('#hero')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
