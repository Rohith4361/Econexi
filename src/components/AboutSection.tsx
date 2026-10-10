/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Compass, Factory, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { EcoNexiLogo } from './EcoNexiLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Context & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400">
              About EcoNexi
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Combining Operational Efficiency with Environmental Responsibility.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              EcoNexi was conceived with a clear conviction: industrial sustainability and commercial
              viability are not opposing forces. For small and medium-sized manufacturers, every
              kilogram of discarded material and every day of stranded inventory represents avoidable cost.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              While mega-corporations deploy millions into bespoke ERP overhauls, SMEs frequently rely
              on manual record-keeping that masks waste. EcoNexi bridges this technology gap with lightweight,
              intelligent tools that deliver immediate shop-floor visibility.
            </p>

            {/* Target Customers Strip */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Built For Small & Medium Manufacturers
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Precision Machining</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Plastics & Extrusion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Fabricated Metals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Automotive Assemblies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Industrial Packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Consumer Hardware</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Strategic Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {/* Mission Box */}
            <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Our Mission
                </span>
              </div>
              <p className="text-lg font-bold text-white tracking-tight leading-snug">
                “To make sustainable and efficient manufacturing more accessible through smart digital solutions.”
              </p>
            </div>

            {/* Vision Box */}
            <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Our Vision
                </span>
              </div>
              <p className="text-lg font-bold text-white tracking-tight leading-snug">
                “A future where businesses grow while using resources responsibly.”
              </p>
            </div>

            {/* Founder/Initiative Context */}
            <div className="rounded-xl bg-slate-900/30 border border-slate-800/80 p-5 flex items-center gap-4">
              <EcoNexiLogo size={36} showText={false} />
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-slate-200 block text-sm">
                  EcoNexi Venture Blueprint
                </span>
                Developed as a high-impact sustainability technology initiative focused on SME manufacturing transformation and resource circularity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
