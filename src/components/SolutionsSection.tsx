/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PackageSearch, Recycle, BellRing, LayoutDashboard, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolution?: (solutionId: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>('inventory');

  const solutions = [
    {
      id: 'inventory',
      icon: PackageSearch,
      title: 'Inventory Tracking',
      shortDesc: 'Monitor stock levels and improve inventory visibility.',
      fullDesc:
        'Gain real-time clarity across raw materials, work-in-progress (WIP), and finished inventory. Prevent stockouts, control buffer thresholds, and eliminate dead inventory before capital gets stranded.',
      features: [
        'Multi-location bin and floor tracking',
        'Dynamic minimum threshold recalculation',
        'Batch & lot expiry tracking',
        'Automated low-stock threshold triggers',
      ],
      impactMetric: 'Eliminates unexpected stockouts',
    },
    {
      id: 'waste',
      icon: Recycle,
      title: 'Waste Monitoring',
      shortDesc: 'Track waste and identify opportunities to reduce resource loss.',
      fullDesc:
        'Quantify offcuts, scrap runs, and rejects directly at each production station. Pinpoint the exact machines and shifts causing material losses, enabling circular reclamation and cleaner compliance.',
      features: [
        'Station-by-station scrap mass logging',
        'Recyclable vs non-recoverable material split',
        'Scrap anomaly detection per production job',
        'Environmental compliance audit export',
      ],
      impactMetric: 'Pinpoints material loss drivers',
    },
    {
      id: 'ai-alerts',
      icon: BellRing,
      title: 'AI-Based Alerts',
      shortDesc: 'Highlight potential issues and support faster decision-making.',
      fullDesc:
        'Intelligent algorithms correlate sensor telemetry, inventory depletion, and scrap spikes in real time. Receive proactive alerts before small anomalies cascade into costly downtime or scrapped production batches.',
      features: [
        'Predictive scrap surge notifications',
        'Safety stock depletion countdowns',
        'Machine calibration drift warnings',
        'Actionable root-cause recommendations',
      ],
      impactMetric: 'Enables rapid root-cause intervention',
    },
    {
      id: 'supply-chain',
      icon: LayoutDashboard,
      title: 'Supply-Chain Dashboard',
      shortDesc: 'View important operational information in one place.',
      fullDesc:
        'Consolidate supplier lead times, freight transit milestones, inbound component schedules, and carbon intensity in an intuitive, single-pane-of-glass executive command center.',
      features: [
        'Unified supplier on-time performance scoring',
        'Inbound consignment arrival timeline',
        'Freight carbon intensity estimates',
        'Cross-departmental visibility for plant leaders',
      ],
      impactMetric: 'One unified operational viewpoint',
    },
  ];

  const activeSolution = solutions.find((s) => s.id === activeSolutionId) || solutions[0];
  const ActiveIcon = activeSolution.icon;

  const scrollToFeatures = () => {
    const el = document.querySelector('#features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            Core Modules
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            One Smarter Way to Manage Operations.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
            EcoNexi unifies waste reduction, stock precision, and predictive supply-chain intelligence
            into an interconnected platform tailored for modern factory teams.
          </p>
        </div>

        {/* 4 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeSolutionId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveSolutionId(item.id);
                  if (onSelectSolution) onSelectSolution(item.id);
                }}
                className={`text-left p-6 rounded-xl transition-all cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800/90 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors ${
                      isSelected
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800/80 text-slate-300 border border-slate-700/60'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-emerald-400' : 'text-slate-400'}>
                    {isSelected ? 'Viewing Details' : 'Click to inspect'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-emerald-400 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Solution Spotlight Deep-Dive Card */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                    Detailed Specification
                  </span>
                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    {activeSolution.title}
                  </h4>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {activeSolution.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeSolution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Operational Objective
                </span>
                <p className="text-lg font-bold text-emerald-400 mt-1 mb-4">
                  {activeSolution.impactMetric}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Configurable for batch, discrete, and continuous process manufacturing lines. No proprietary hardware lock-in required.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={scrollToFeatures}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
                >
                  <span>See Live Dashboard Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
