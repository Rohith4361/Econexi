/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Trash2, Boxes, Network, AlertCircle, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onLearnMore?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onLearnMore }) => {
  const problems = [
    {
      id: 'waste',
      icon: Trash2,
      title: 'Excess Waste',
      subtitle: 'Difficulty tracking and reducing material waste',
      description:
        'Mid-sized production lines frequently lose 5% to 15% of raw materials in untracked offcuts, defect runs, and scrap trimmings without clear visibility into the root cause.',
      impactPoint: 'Uncaptured scrap directly inflates raw material expenditure and environmental impact.',
    },
    {
      id: 'inventory',
      icon: Boxes,
      title: 'Inventory Inefficiency',
      subtitle: 'Poor visibility into inventory and resource usage',
      description:
        'Siloed spreadsheets and manual counts lead to inaccurate stock levels, unexpected production standstills, and excessive buffer stock tying up vital working capital.',
      impactPoint: 'Emergency reorders and misplaced lots compromise delivery commitments and factory margins.',
    },
    {
      id: 'supply-chain',
      icon: Network,
      title: 'Supply-Chain Challenges',
      subtitle: 'Limited information for timely operational decisions',
      description:
        'Disconnected vendor communications leave operations managers guessing when critical inputs arrive, forcing reactive firefighting instead of proactive scheduling.',
      impactPoint: 'Lack of timely logistics signals creates downstream delivery bottlenecks and idle shifts.',
    },
  ];

  return (
    <section id="problems" className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            Industry Blind Spots
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            Manufacturing Challenges, Simplified.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
            Small and medium manufacturing enterprises are the backbone of production, yet they
            frequently grapple with fragmented systems that conceal waste and drive up operational friction.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 p-6 sm:p-8 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Natural numbering */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-numbers text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/90 mb-4">
                    {item.subtitle}
                  </p>

                  {/* Body prose */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Impact footer */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2.5 text-xs text-slate-400">
                    <AlertCircle className="w-4 h-4 text-emerald-400/80 shrink-0 mt-0.5" />
                    <span>{item.impactPoint}</span>
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
