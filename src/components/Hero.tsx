/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles, BarChart3 } from 'lucide-react';
import { FactoryVisualization } from './FactoryVisualization';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Top Matter */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          {/* Tagline kicker - unboxed text per zero-pill discipline */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-emerald-400 mb-4 tracking-wide uppercase">
            <span>Smarter Operations</span>
            <span aria-hidden="true">·</span>
            <span>Less Waste</span>
            <span aria-hidden="true">·</span>
            <span>A Greener Future</span>
          </div>

          {/* Headline with balanced wrap */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 text-balance">
            Make Manufacturing Smarter and More Sustainable.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
            EcoNexi helps manufacturing businesses monitor waste, manage inventory, and
            improve supply-chain efficiency with smart digital tools.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('#solutions')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg transition-colors shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Explore Our Solutions</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 hover:text-white rounded-lg border border-slate-700 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust and scope cues - unboxed metadata */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-slate-400">
            <span>Engineered for Small & Medium Manufacturers</span>
            <span aria-hidden="true">·</span>
            <span>Non-intrusive ERP/Sensor Integration</span>
            <span aria-hidden="true">·</span>
            <span>Real-Time Waste Telemetry</span>
          </div>
        </div>

        {/* High-quality Modern Factory Visual with Digital Analytics Dashboard */}
        <div className="max-w-5xl mx-auto">
          <FactoryVisualization />
        </div>
      </div>
    </section>
  );
};
