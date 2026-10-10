/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Eye, BarChart2, CheckCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Monitor',
      action: 'Collect and review operational information.',
      description:
        'Connect your shop floor sensors, scale readouts, and existing inventory sheets to the EcoNexi hub. Data flows securely in real time without halting production.',
      subpoints: [
        'Non-invasive sensor integration',
        'Raw material and scrap mass logging',
        'Automated inventory level tracking',
      ],
      icon: Eye,
    },
    {
      step: '02',
      title: 'Analyze',
      action: 'Identify waste patterns and inventory issues.',
      description:
        'EcoNexi algorithms process production runs, comparing input weights with output volume to detect scrap anomalies, slow-moving items, and buffer deficits.',
      subpoints: [
        'Root-cause scrap pattern detection',
        'Buffer depletion forecasting',
        'Supplier fulfillment trend benchmarking',
      ],
      icon: BarChart2,
    },
    {
      step: '03',
      title: 'Improve',
      action: 'Use insights and alerts to make better decisions.',
      description:
        'Floor managers and machine operators receive prioritized, clear alerts with practical remediation recommendations to adjust tooling, reorder stock, or divert scrap.',
      subpoints: [
        'Instant AI-based alert dispatches',
        'Actionable shop-floor corrective steps',
        'Continuous material yield optimization',
      ],
      icon: CheckCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-900/50 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            Implementation Flow
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            Three Steps to Smarter, Greener Manufacturing.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
            Deploy in days, not months. EcoNexi adapts to your existing manufacturing infrastructure
            with minimal friction and zero downtime.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-extrabold text-emerald-400 font-mono-numbers">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Core Action */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-300/90 mb-4">
                    {item.action}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Subpoints */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.subpoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
