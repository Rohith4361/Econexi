/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  SlidersHorizontal,
  Eye,
  Trash2,
  LineChart,
  Leaf,
  PiggyBank,
  CheckCircle2,
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: SlidersHorizontal,
      title: 'Better Resource Management',
      description:
        'Coordinate energy, raw material inputs, and tooling life cycles dynamically to prevent overburdening machinery and reduce operational friction across production lines.',
    },
    {
      icon: Eye,
      title: 'Improved Inventory Visibility',
      description:
        'Gain accurate, floor-level insight into stock positions, batch expiry dates, and lot locations without requiring labor-intensive manual audits or error-prone clipboards.',
    },
    {
      icon: Trash2,
      title: 'Reduced Avoidable Waste',
      description:
        'Surface scrap surges the moment they occur on the shop floor, allowing engineers to correct machine misalignments and salvage materials before entire batches are discarded.',
    },
    {
      icon: LineChart,
      title: 'Data-Informed Decisions',
      description:
        'Replace gut feelings and disconnected spreadsheets with verified operational metrics, helping leadership plan shifts, negotiate supplier terms, and forecast realistically.',
    },
    {
      icon: Leaf,
      title: 'More Sustainable Operations',
      description:
        'Track material circularity, scrap routing, and carbon-efficient transit to simplify regulatory compliance and satisfy growing client demands for sustainable supply chains.',
    },
    {
      icon: PiggyBank,
      title: 'Potential Operational Cost Savings',
      description:
        'By curbing offcuts, preventing stockouts, and consolidating supplier orders, manufacturers can identify and capture meaningful cost efficiencies throughout production.',
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            Value Creation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            Why Choose EcoNexi?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
            Tailored specifically for small and mid-sized manufacturing facilities, EcoNexi bridges
            the gap between lean factory management and actionable environmental responsibility.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-7 hover:bg-slate-900/70 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-emerald-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>SME Operational Enhancement</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer Box per prompt rules */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          Operational outcomes and savings vary based on baseline facility scrap rates, production volume, and existing ERP maturity. EcoNexi provides transparency tools to empower your engineers.
        </div>
      </div>
    </section>
  );
};
