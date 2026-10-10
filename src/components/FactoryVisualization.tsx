/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, Activity, Cpu, ShieldCheck, RefreshCw } from 'lucide-react';

export const FactoryVisualization: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sensors' | 'waste'>('all');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full rounded-2xl bg-slate-950/80 border border-slate-800 p-3 sm:p-5 shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Top HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Facility Floor Telemetry
            </span>
          </div>
          <span className="text-xs text-slate-500">·</span>
          <span className="text-xs text-slate-400 font-mono-numbers">Cell 02 Active</span>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800/80 text-xs">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Stream
          </button>
          <button
            onClick={() => setActiveFilter('waste')}
            className={`px-2.5 py-1 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'waste'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Waste & Scrap Nodes
          </button>
          <button
            onClick={() => setActiveFilter('sensors')}
            className={`px-2.5 py-1 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'sensors'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            IoT Sensor Array
          </button>
        </div>
      </div>

      {/* Modern High-Tech Factory Graphic with Interactive Nodes */}
      <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-linear-to-b from-slate-900 via-slate-950 to-slate-950 rounded-xl border border-slate-800/60 overflow-hidden flex items-center justify-center p-2 sm:p-4">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(#10B981 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Factory Floor & Digital HUD Architecture */}
        <svg
          viewBox="0 0 800 450"
          className="w-full h-full object-contain relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="conveyorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="laserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Perspective Factory Floor Grid Lines */}
          <g stroke="#334155" strokeWidth="0.8" strokeOpacity="0.4">
            <line x1="50" y1="400" x2="350" y2="200" />
            <line x1="200" y1="400" x2="420" y2="200" />
            <line x1="400" y1="400" x2="520" y2="200" />
            <line x1="600" y1="400" x2="620" y2="200" />
            <line x1="750" y1="400" x2="720" y2="200" />

            <line x1="100" y1="360" x2="720" y2="360" />
            <line x1="200" y1="300" x2="680" y2="300" />
            <line x1="280" y1="240" x2="640" y2="240" />
          </g>

          {/* Factory Silhouettes & Machine Stations */}
          {/* Station 1: Raw Material Ingestion Hopper */}
          <g transform="translate(90, 190)">
            <rect x="0" y="20" width="85" height="110" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
            <polygon points="10,20 42,0 75,20" fill="#334155" stroke="#475569" strokeWidth="1.5" />
            {/* Level indicator bar */}
            <rect x="15" y="45" width="55" height="65" rx="2" fill="#0F172A" />
            <rect x="18" y="65" width="49" height="42" rx="2" fill="#059669" fillOpacity="0.6" />
            <text x="42" y="90" fill="#A7F3D0" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="JetBrains Mono">
              78% FULL
            </text>
            <text x="42" y="145" fill="#94A3B8" fontSize="11" fontWeight="500" textAnchor="middle">
              Raw Feed Silo
            </text>
          </g>

          {/* Conveyor Belt System with Material Units */}
          <path
            d="M 175 280 L 320 280 L 460 280 L 610 280 L 720 280"
            stroke="url(#conveyorGrad)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 175 280 L 720 280"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="8 6"
          />

          {/* Material parts moving on conveyor */}
          <rect x="220" y="265" width="22" height="16" rx="2" fill="#38BDF8" />
          <rect x="360" y="265" width="22" height="16" rx="2" fill="#34D399" />
          <rect x="520" y="265" width="22" height="16" rx="2" fill="#F59E0B" />
          <rect x="640" y="265" width="22" height="16" rx="2" fill="#34D399" />

          {/* Station 2: Precision Robotic Assembly & AI Optical Scanner */}
          <g transform="translate(290, 130)">
            {/* Robot Gantry Base */}
            <rect x="30" y="130" width="80" height="20" rx="3" fill="#1E293B" stroke="#475569" />
            <rect x="62" y="60" width="16" height="70" fill="#334155" />
            {/* Articulated Arm */}
            <line x1="70" y1="60" x2="110" y2="40" stroke="#64748B" strokeWidth="10" strokeLinecap="round" />
            <line x1="110" y1="40" x2="85" y2="115" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
            <circle cx="110" cy="40" r="7" fill="#10B981" />
            <circle cx="70" cy="60" r="8" fill="#475569" />

            {/* AI Vision Scanner Cone */}
            <polygon points="75,120 40,150 110,150" fill="url(#laserGrad)" />
            <line x1="40" y1="150" x2="110" y2="150" stroke="#34D399" strokeWidth="2" strokeDasharray="3 3" />
            <text x="75" y="30" fill="#E2E8F0" fontSize="11" fontWeight="600" textAnchor="middle">
              AI Vision Sorting Cell
            </text>
          </g>

          {/* Station 3: Scrap Diversion & Recovery Chute */}
          <g transform="translate(480, 240)">
            <path d="M 40 40 L 40 90 L 80 120" stroke="#64748B" strokeWidth="6" fill="none" />
            {/* Scrap Bin */}
            <rect x="65" y="105" width="70" height="50" rx="4" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
            <text x="100" y="135" fill="#34D399" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="JetBrains Mono">
              RECYCLE CHUTE
            </text>
            <text x="100" y="168" fill="#94A3B8" fontSize="10" textAnchor="middle">
              93.4% Yield Recovery
            </text>
          </g>

          {/* Interactive Inspection Sensor Nodes */}
          {/* Node 1: Inflow Sensor */}
          {(activeFilter === 'all' || activeFilter === 'sensors') && (
            <g
              className="cursor-pointer transition-transform"
              onMouseEnter={() => setHoveredNode('sensor-inflow')}
              onMouseLeave={() => setHoveredNode(null)}
              transform="translate(140, 230)"
            >
              <circle cx="0" cy="0" r="14" fill="#065F46" fillOpacity="0.4" />
              <circle cx="0" cy="0" r="7" fill="#10B981" stroke="#ECFDF5" strokeWidth="1.5" />
              <text x="0" y="-18" fill="#A7F3D0" fontSize="10" fontWeight="600" textAnchor="middle">
                IoT Node S1
              </text>
            </g>
          )}

          {/* Node 2: Vision Defect Detector */}
          {(activeFilter === 'all' || activeFilter === 'waste') && (
            <g
              className="cursor-pointer transition-transform"
              onMouseEnter={() => setHoveredNode('vision-defect')}
              onMouseLeave={() => setHoveredNode(null)}
              transform="translate(370, 210)"
            >
              <circle cx="0" cy="0" r="16" fill="#047857" fillOpacity="0.4" />
              <circle cx="0" cy="0" r="8" fill="#34D399" stroke="#ECFDF5" strokeWidth="1.5" />
              <text x="0" y="-20" fill="#6EE7B7" fontSize="10" fontWeight="600" textAnchor="middle">
                Optical Scrap Detection
              </text>
            </g>
          )}

          {/* Node 3: Outflow Weight & Buffer Sensor */}
          {(activeFilter === 'all' || activeFilter === 'sensors') && (
            <g
              className="cursor-pointer transition-transform"
              onMouseEnter={() => setHoveredNode('outflow-buffer')}
              onMouseLeave={() => setHoveredNode(null)}
              transform="translate(640, 230)"
            >
              <circle cx="0" cy="0" r="14" fill="#065F46" fillOpacity="0.4" />
              <circle cx="0" cy="0" r="7" fill="#10B981" stroke="#ECFDF5" strokeWidth="1.5" />
              <text x="0" y="-18" fill="#A7F3D0" fontSize="10" fontWeight="600" textAnchor="middle">
                Packaging Sensor S3
              </text>
            </g>
          )}

          {/* OVERLAY HUD CARD 1: Real-time Scrap Analytics (Top-Right) */}
          <g transform="translate(490, 25)">
            <rect x="0" y="0" width="285" height="135" rx="8" fill="url(#cardGrad)" stroke="#334155" strokeWidth="1.2" />
            <text x="16" y="24" fill="#94A3B8" fontSize="11" fontWeight="600">
              SCRAP DETECTION & WASTE STREAM
            </text>
            <text x="16" y="48" fill="#F8FAFC" fontSize="20" fontWeight="700" fontFamily="JetBrains Mono">
              4.2% <tspan fill="#34D399" fontSize="12" fontWeight="500">(-2.4% vs baseline)</tspan>
            </text>
            <text x="16" y="66" fill="#64748B" fontSize="11">
              Active Shift: 1,840 kg processed · 78 kg recycled
            </text>

            {/* Sparkline Bar Visualization */}
            <g transform="translate(16, 78)">
              <rect x="0" y="26" width="14" height="14" rx="2" fill="#334155" />
              <rect x="20" y="22" width="14" height="18" rx="2" fill="#334155" />
              <rect x="40" y="16" width="14" height="24" rx="2" fill="#334155" />
              <rect x="60" y="20" width="14" height="20" rx="2" fill="#334155" />
              <rect x="80" y="12" width="14" height="28" rx="2" fill="#059669" />
              <rect x="100" y="8" width="14" height="32" rx="2" fill="#10B981" />
              <rect x="120" y="4" width="14" height="36" rx="2" fill="#34D399" />
              <rect x="140" y="2" width="14" height="38" rx="2" fill="#6EE7B7" />

              <text x="175" y="24" fill="#E2E8F0" fontSize="11" fontWeight="600">
                EcoNexi AI Loop
              </text>
              <text x="175" y="38" fill="#94A3B8" fontSize="10">
                Auto-Tuning Active
              </text>
            </g>
          </g>

          {/* OVERLAY HUD CARD 2: Active Inventory Health (Bottom-Left) */}
          <g transform="translate(25, 315)">
            <rect x="0" y="0" width="270" height="110" rx="8" fill="url(#cardGrad)" stroke="#334155" strokeWidth="1.2" />
            <text x="16" y="24" fill="#94A3B8" fontSize="11" fontWeight="600">
              INVENTORY VELOCITY & BUFFER
            </text>
            <text x="16" y="48" fill="#F8FAFC" fontSize="18" fontWeight="700" fontFamily="JetBrains Mono">
              16.4 Days <tspan fill="#38BDF8" fontSize="11" fontWeight="500">(Lean Threshold)</tspan>
            </text>

            {/* Inventory level mini meter */}
            <g transform="translate(16, 60)">
              <rect x="0" y="0" width="235" height="7" rx="3.5" fill="#1E293B" />
              <rect x="0" y="0" width="185" height="7" rx="3.5" fill="#10B981" />
              <text x="0" y="22" fill="#64748B" fontSize="10">Safety Stock: 88% Satisfied</text>
              <text x="235" y="22" fill="#A7F3D0" fontSize="10" textAnchor="end" fontFamily="JetBrains Mono">
                Zero Stockouts
              </text>
            </g>
          </g>

          {/* Active Hover Inspection Tooltip */}
          {hoveredNode && (
            <g transform="translate(320, 360)">
              <rect x="0" y="0" width="310" height="60" rx="6" fill="#020617" stroke="#10B981" strokeWidth="1.5" />
              <text x="14" y="22" fill="#34D399" fontSize="11" fontWeight="600">
                {hoveredNode === 'sensor-inflow' && 'SENSOR S1: Material Inflow Gauge'}
                {hoveredNode === 'vision-defect' && 'CAMERA C2: High-Speed Scrap Defect Classifier'}
                {hoveredNode === 'outflow-buffer' && 'SENSOR S3: Finished Unit Package Weight'}
              </text>
              <text x="14" y="42" fill="#94A3B8" fontSize="10">
                {hoveredNode === 'sensor-inflow' && 'Sampling 100Hz · Tolerance ±0.05% · Clean Flow'}
                {hoveredNode === 'vision-defect' && '99.4% detection accuracy · Automated bin diversion'}
                {hoveredNode === 'outflow-buffer' && 'Tare calibrated · Real-time inventory sync'}
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Visual Context Caption */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Integrated Factory IoT & Waste Routing Demonstration</span>
        </div>
        <div className="flex items-center gap-2 font-mono-numbers text-slate-400">
          <span>AI Alert Latency: &lt;1.2s</span>
          <span aria-hidden="true">·</span>
          <span>SME Plug & Play Protocol</span>
        </div>
      </div>
    </div>
  );
};
