/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  DEMO_INVENTORY,
  DEMO_WASTE_DATA,
  DEMO_ALERTS,
  DEMO_METRICS,
  SmartAlert,
  InventoryItem,
} from '../data/mockData';
import {
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Info,
  Check,
  RotateCcw,
  Boxes,
  Recycle,
  Zap,
  Truck,
  BellRing,
  Filter,
  CheckCircle,
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'waste' | 'inventory' | 'alerts' | 'supply'>('all');
  const [alerts, setAlerts] = useState<SmartAlert[]>(DEMO_ALERTS);
  const [acknowledgedAlertIds, setAcknowledgedAlertIds] = useState<string[]>([]);
  const [selectedInventoryFilter, setSelectedInventoryFilter] = useState<'all' | 'reorder' | 'optimal'>('all');

  const handleAcknowledge = (id: string) => {
    if (!acknowledgedAlertIds.includes(id)) {
      setAcknowledgedAlertIds([...acknowledgedAlertIds, id]);
    }
  };

  const handleResetAlerts = () => {
    setAcknowledgedAlertIds([]);
  };

  const filteredInventory = DEMO_INVENTORY.filter((item) => {
    if (selectedInventoryFilter === 'all') return true;
    if (selectedInventoryFilter === 'reorder') return item.status === 'reorder' || item.status === 'low';
    if (selectedInventoryFilter === 'optimal') return item.status === 'optimal';
    return true;
  });

  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            Operational Intelligence in One Unified View.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
            Explore live manufacturing telemetry across inventory, circular waste streams,
            and predictive alerts. Designed for plant managers and sustainability directors.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Dashboard Header & Demo Disclaimer */}
          <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-tight">
                    EcoNexi Operational Console
                  </span>
                  <span className="text-xs text-slate-500">·</span>
                  <span className="text-xs text-emerald-400 font-mono-numbers">
                    Line B / Mid-Scale Facility
                  </span>
                </div>
                {/* Clear Demonstration Data Notice per instructions */}
                <p className="text-xs text-slate-400 mt-0.5">
                  Demonstration data based on mid-scale manufacturing operational profiles.
                </p>
              </div>
            </div>

            {/* View Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('waste')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'waste'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Waste Monitoring
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'inventory'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Inventory
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'alerts'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                AI Alerts ({alerts.length - acknowledgedAlertIds.length})
              </button>
              <button
                onClick={() => setActiveTab('supply')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'supply'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Supply Chain
              </button>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-slate-800/80 bg-slate-950/60 border-b border-slate-800">
            {DEMO_METRICS.map((metric, i) => (
              <div key={i} className="p-4 sm:p-5">
                <span className="text-xs text-slate-400 block mb-1">
                  {metric.label}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="text-sm font-semibold text-slate-400">
                      {metric.unit}
                    </span>
                  )}
                  <span className="ml-2 text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {metric.trend}
                  </span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>

          {/* Main Dashboard Content Area */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-8">
            {/* 1. Waste Monitoring Charts Section */}
            {(activeTab === 'all' || activeTab === 'waste') && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Scrap Trend Chart (8 cols) */}
                <div className="lg:col-span-7 bg-slate-900/60 rounded-xl p-5 sm:p-6 border border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Recycle className="w-4 h-4 text-emerald-400" />
                        Scrap Rate Reduction Trajectory
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Historical scrap % of raw input across 6-month digital tracking
                      </p>
                    </div>
                    <span className="text-xs text-emerald-400 font-mono-numbers font-semibold">
                      -4.8% Net Loss
                    </span>
                  </div>

                  {/* Accessible SVG Bar Chart */}
                  <div className="h-52 w-full flex items-end justify-between gap-3 pt-6 pb-2 border-b border-slate-800">
                    {[
                      { month: 'Oct', scrap: 11.2, target: 8.0 },
                      { month: 'Nov', scrap: 10.4, target: 8.0 },
                      { month: 'Dec', scrap: 9.8, target: 7.5 },
                      { month: 'Jan', scrap: 8.6, target: 7.5 },
                      { month: 'Feb', scrap: 7.4, target: 7.0 },
                      { month: 'Mar', scrap: 6.6, target: 6.5 },
                    ].map((item, idx) => {
                      const heightPercent = (item.scrap / 12) * 100;
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                          {/* Value tooltip on hover */}
                          <span className="text-xs text-slate-400 font-mono-numbers group-hover:text-emerald-300 transition-colors">
                            {item.scrap}%
                          </span>
                          <div className="w-full max-w-[42px] bg-slate-800 rounded-t-md overflow-hidden relative h-full flex items-end">
                            {/* Bar fill */}
                            <div
                              style={{ height: `${heightPercent}%` }}
                              className={`w-full rounded-t-sm transition-all duration-500 ${
                                idx >= 4
                                  ? 'bg-linear-to-t from-emerald-600 to-emerald-400'
                                  : 'bg-linear-to-t from-slate-700 to-slate-500'
                              }`}
                            />
                          </div>
                          <span className="text-xs text-slate-400 font-medium">{item.month}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-3 text-xs text-slate-400">
                    <span>Baseline target: &lt;7.0%</span>
                    <span className="text-slate-400 font-mono-numbers">
                      Estimated material conserved: 1,420 kg/mo
                    </span>
                  </div>
                </div>

                {/* Waste Destination Breakdown (5 cols) */}
                <div className="lg:col-span-5 bg-slate-900/60 rounded-xl p-5 sm:p-6 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      Waste Byproduct Streams
                    </h4>
                    <p className="text-xs text-slate-400 mb-5">
                      Destination routing breakdown for facility scrap
                    </p>

                    <div className="space-y-4">
                      {DEMO_WASTE_DATA.map((item, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-200">{item.category}</span>
                            <span className="font-mono-numbers text-slate-300">
                              {item.amountKg} kg ({item.percentage}%)
                            </span>
                          </div>
                          {/* Segmented bar */}
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${item.percentage}%` }}
                              className={`h-full rounded-full ${
                                item.dest === 'Recycled'
                                  ? 'bg-emerald-400'
                                  : item.dest === 'Repurposed'
                                  ? 'bg-sky-400'
                                  : 'bg-amber-500'
                              }`}
                            />
                          </div>
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Route: {item.dest}</span>
                            <span className="text-emerald-400 font-mono-numbers">
                              {item.changePercent}% scrap loss
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Circular Recovery Rate</span>
                    <span className="font-mono-numbers text-emerald-400 font-bold">
                      86.0% Diverted
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Inventory Overview & Resource Utilization */}
            {(activeTab === 'all' || activeTab === 'inventory') && (
              <div className="bg-slate-900/60 rounded-xl p-5 sm:p-6 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-emerald-400" />
                      Critical Inventory & Raw Material Reserves
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Monitored stock levels vs minimum safe operational thresholds
                    </p>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex items-center gap-1.5 text-xs bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setSelectedInventoryFilter('all')}
                      className={`px-2.5 py-1 rounded cursor-pointer ${
                        selectedInventoryFilter === 'all'
                          ? 'bg-slate-800 text-white font-medium'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      All Items
                    </button>
                    <button
                      onClick={() => setSelectedInventoryFilter('reorder')}
                      className={`px-2.5 py-1 rounded cursor-pointer ${
                        selectedInventoryFilter === 'reorder'
                          ? 'bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Requires Attention
                    </button>
                    <button
                      onClick={() => setSelectedInventoryFilter('optimal')}
                      className={`px-2.5 py-1 rounded cursor-pointer ${
                        selectedInventoryFilter === 'optimal'
                          ? 'bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Optimal Buffer
                    </button>
                  </div>
                </div>

                {/* Table representation */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="pb-3 font-semibold">SKU / Item</th>
                        <th className="pb-3 font-semibold">Category</th>
                        <th className="pb-3 font-semibold text-right">Current Stock</th>
                        <th className="pb-3 font-semibold text-right">Min Threshold</th>
                        <th className="pb-3 font-semibold text-right">Turnover Velocity</th>
                        <th className="pb-3 font-semibold text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredInventory.map((item) => {
                        const isUnderThreshold = item.stockLevel < item.minThreshold;
                        return (
                          <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-3.5 pr-4">
                              <span className="font-semibold text-slate-200 block">
                                {item.name}
                              </span>
                              <span className="font-mono-numbers text-slate-400 text-[11px]">
                                {item.id}
                              </span>
                            </td>
                            <td className="py-3.5 text-slate-400">{item.category}</td>
                            <td className="py-3.5 text-right font-mono-numbers font-medium text-slate-200">
                              {item.stockLevel.toLocaleString()} {item.unit}
                            </td>
                            <td className="py-3.5 text-right font-mono-numbers text-slate-400">
                              {item.minThreshold.toLocaleString()} {item.unit}
                            </td>
                            <td className="py-3.5 text-right font-mono-numbers text-slate-300">
                              {item.turnoverDays} days
                            </td>
                            <td className="py-3.5 text-center">
                              {item.status === 'optimal' && (
                                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                                  <Check className="w-3.5 h-3.5" />
                                  Optimal
                                </span>
                              )}
                              {item.status === 'low' && (
                                <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Buffer Depleting
                                </span>
                              )}
                              {item.status === 'reorder' && (
                                <span className="inline-flex items-center gap-1 text-rose-400 font-medium">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Reorder Triggered
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. Resource Utilization Indicators */}
            {(activeTab === 'all' || activeTab === 'waste') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Machine Line Uptime</span>
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono-numbers">
                    94.2%
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[94.2%] rounded-full" />
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-2">
                    Target: &gt;92% overall equipment effectiveness
                  </span>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Raw Material Yield</span>
                    <Recycle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono-numbers">
                    93.4%
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[93.4%] rounded-full" />
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-2">
                    +4.2% yield improvement over 6 months
                  </span>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Energy Intensity</span>
                    <Zap className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono-numbers">
                    1.42 <span className="text-xs font-normal text-slate-400">kWh/kg</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-sky-400 w-[78%] rounded-full" />
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-2">
                    Optimal range: 1.35 - 1.50 kWh/kg
                  </span>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Closed-Loop Recirculation</span>
                    <Recycle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono-numbers">
                    88.0%
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[88%] rounded-full" />
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-2">
                    Internal coolants & packaging reuse
                  </span>
                </div>
              </div>
            )}

            {/* 4. Smart Alert Notifications */}
            {(activeTab === 'all' || activeTab === 'alerts') && (
              <div className="bg-slate-900/60 rounded-xl p-5 sm:p-6 border border-slate-800">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <BellRing className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-base font-bold text-white">
                      AI-Based Operational Alerts
                    </h4>
                  </div>
                  {acknowledgedAlertIds.length > 0 && (
                    <button
                      onClick={handleResetAlerts}
                      className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset {acknowledgedAlertIds.length} acknowledged alert(s)
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  {alerts.map((alert) => {
                    const isAck = acknowledgedAlertIds.includes(alert.id);
                    return (
                      <div
                        key={alert.id}
                        className={`p-4 rounded-lg border transition-all ${
                          isAck
                            ? 'bg-slate-950/40 border-slate-800/60 opacity-60'
                            : alert.severity === 'critical'
                            ? 'bg-rose-950/20 border-rose-500/40'
                            : alert.severity === 'warning'
                            ? 'bg-amber-950/20 border-amber-500/40'
                            : 'bg-slate-950/80 border-slate-800'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs">
                              {alert.severity === 'critical' ? (
                                <span className="text-rose-400 font-semibold flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Critical Scrap Spike
                                </span>
                              ) : alert.severity === 'warning' ? (
                                <span className="text-amber-400 font-semibold flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Buffer Warning
                                </span>
                              ) : (
                                <span className="text-sky-400 font-semibold flex items-center gap-1">
                                  <Info className="w-3.5 h-3.5" />
                                  Logistics Advisory
                                </span>
                              )}
                              <span className="text-slate-500">·</span>
                              <span className="text-slate-400">{alert.area}</span>
                              <span className="text-slate-500">·</span>
                              <span className="text-slate-400 font-mono-numbers">{alert.timestamp}</span>
                            </div>
                            <h5 className="text-sm font-bold text-white">
                              {alert.title}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {alert.description}
                            </p>
                            <p className="text-xs text-emerald-400 font-medium pt-1">
                              Recommended Step: {alert.actionRequired}
                            </p>
                          </div>

                          <div className="shrink-0">
                            {isAck ? (
                              <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                Acknowledged
                              </span>
                            ) : (
                              <button
                                onClick={() => handleAcknowledge(alert.id)}
                                className="px-3 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                              >
                                Acknowledge & Act
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. Supply-Chain Performance Summaries */}
            {(activeTab === 'all' || activeTab === 'supply') && (
              <div className="bg-slate-900/60 rounded-xl p-5 sm:p-6 border border-slate-800">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-base font-bold text-white">
                      Supply-Chain Performance Summary
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 font-mono-numbers">
                    Updated 12 min ago
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-xs text-slate-400">Supplier On-Time Delivery</span>
                    <div className="text-xl font-bold text-white font-mono-numbers mt-1">
                      96.2%
                    </div>
                    <p className="text-xs text-emerald-400 mt-2">
                      13 of 14 suppliers within target SLA window
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-xs text-slate-400">Avg Inbound Lead Time</span>
                    <div className="text-xl font-bold text-white font-mono-numbers mt-1">
                      4.2 Days
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Down from 6.8 days with automated replenishment
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-xs text-slate-400">Consolidated Transit Emission</span>
                    <div className="text-xl font-bold text-white font-mono-numbers mt-1">
                      -18.4%
                    </div>
                    <p className="text-xs text-emerald-400 mt-2">
                      Through consolidated regional supplier pooling
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
