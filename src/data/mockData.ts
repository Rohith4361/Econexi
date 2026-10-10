/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stockLevel: number;
  minThreshold: number;
  unit: string;
  turnoverDays: number;
  status: 'optimal' | 'low' | 'reorder';
}

export interface WasteCategoryData {
  category: string;
  amountKg: number;
  percentage: number;
  dest: 'Recycled' | 'Repurposed' | 'Controlled Landfill';
  changePercent: number; // vs previous quarter
}

export interface SmartAlert {
  id: string;
  timestamp: string;
  severity: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  area: string;
  actionRequired: string;
}

export interface MetricSummary {
  label: string;
  value: string;
  unit?: string;
  trend: string;
  isPositive: boolean;
  context: string;
}

export const DEMO_INVENTORY: InventoryItem[] = [
  {
    id: 'INV-101',
    name: 'Aluminum Alloy 6061-T6 Sheet',
    category: 'Raw Metals',
    stockLevel: 1420,
    minThreshold: 1200,
    unit: 'kg',
    turnoverDays: 14,
    status: 'optimal',
  },
  {
    id: 'INV-102',
    name: 'Polypropylene Resin Pellets (PP-40)',
    category: 'Polymers',
    stockLevel: 680,
    minThreshold: 850,
    unit: 'kg',
    turnoverDays: 9,
    status: 'reorder',
  },
  {
    id: 'INV-103',
    name: 'Cold-Rolled Carbon Steel Coils',
    category: 'Raw Metals',
    stockLevel: 3100,
    minThreshold: 2500,
    unit: 'kg',
    turnoverDays: 22,
    status: 'optimal',
  },
  {
    id: 'INV-104',
    name: 'Biodegradable Industrial Coolant',
    category: 'Fluids & Consumables',
    stockLevel: 190,
    minThreshold: 250,
    unit: 'Liters',
    turnoverDays: 12,
    status: 'low',
  },
  {
    id: 'INV-105',
    name: 'Recycled Corrugated Packaging (Grade B)',
    category: 'Packaging',
    stockLevel: 4800,
    minThreshold: 3000,
    unit: 'Units',
    turnoverDays: 18,
    status: 'optimal',
  },
];

export const DEMO_WASTE_DATA: WasteCategoryData[] = [
  {
    category: 'Metal Offcuts & Turnings',
    amountKg: 840,
    percentage: 42,
    dest: 'Recycled',
    changePercent: -18,
  },
  {
    category: 'Polymer Trim & Sprues',
    amountKg: 520,
    percentage: 26,
    dest: 'Repurposed',
    changePercent: -12,
  },
  {
    category: 'Packaging & Kraft Board',
    amountKg: 360,
    percentage: 18,
    dest: 'Recycled',
    changePercent: -24,
  },
  {
    category: 'Filter Cake & Sludge',
    amountKg: 280,
    percentage: 14,
    dest: 'Controlled Landfill',
    changePercent: -9,
  },
];

export const DEMO_ALERTS: SmartAlert[] = [
  {
    id: 'ALT-304',
    timestamp: '14 min ago',
    severity: 'critical',
    title: 'Extrusion Line 2: Excessive Polymer Scrap Detected',
    description: 'Material loss rate exceeded 7.8% threshold during current job batch #B-914. Suspected die temperature drift.',
    area: 'Fabrication Cell B',
    actionRequired: 'Inspect heater calibration & recalibrate feeder',
  },
  {
    id: 'ALT-305',
    timestamp: '42 min ago',
    severity: 'warning',
    title: 'Low Safety Buffer: PP-40 Resin Stock',
    description: 'Stock is currently 680 kg (below 850 kg threshold). Current production run will deplete reserve in 38 hours.',
    area: 'Primary Warehouse',
    actionRequired: 'Trigger automated PO or release safety buffer',
  },
  {
    id: 'ALT-306',
    timestamp: '2 hours ago',
    severity: 'info',
    title: 'Upstream Transit Update: Carrier Green Route Confirmed',
    description: 'Regional freight shipment with 2,400 kg alloy billets consolidated onto electric carrier corridor.',
    area: 'Supply Logistics',
    actionRequired: 'Receiving dock scheduled for 08:30 tomorrow',
  },
];

export const DEMO_METRICS: MetricSummary[] = [
  {
    label: 'Overall Material Yield',
    value: '93.4',
    unit: '%',
    trend: '+4.2%',
    isPositive: true,
    context: 'vs previous quarter benchmark',
  },
  {
    label: 'Scrap Rate Index',
    value: '6.6',
    unit: '%',
    trend: '-3.8%',
    isPositive: true,
    context: 'continuous month-over-month trend',
  },
  {
    label: 'Active Inventory Value',
    value: '$148.2',
    unit: 'k',
    trend: '94% on-target',
    isPositive: true,
    context: 'turnover velocity 16.4 days',
  },
  {
    label: 'Supplier On-Time Rate',
    value: '96.2',
    unit: '%',
    trend: '+2.1%',
    isPositive: true,
    context: 'across 14 active suppliers',
  },
];
