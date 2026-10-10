/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const EcoNexiLogo: React.FC<LogoProps> = ({
  className = '',
  size = 32,
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Icon: Leaf intertwined with AI circuit traces & nodes */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="leafGrad" x1="6" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="60%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <linearGradient id="circuitGrad" x1="12" y1="36" x2="42" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#065F46" />
            <stop offset="100%" stopColor="#A7F3D0" />
          </linearGradient>
        </defs>

        {/* Outer organic leaf contour */}
        <path
          d="M8 40C8 40 10 24 24 12C36 1.5 42 6 42 6C42 6 45 18 35 30C23 44 8 40 8 40Z"
          fill="url(#leafGrad)"
          fillOpacity="0.18"
          stroke="url(#leafGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central stem / primary circuit highway */}
        <path
          d="M10 38C15 32 23 22 36 10"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* AI Circuit branch 1: Top right branch with node */}
        <path
          d="M23 22L30 16H36"
          stroke="#34D399"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="16" r="2.2" fill="#6EE7B7" />

        {/* AI Circuit branch 2: Lower right branch with node */}
        <path
          d="M19 27L25 31H32"
          stroke="#34D399"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="31" r="2.2" fill="#6EE7B7" />

        {/* AI Circuit branch 3: Upper leaf node */}
        <path
          d="M28 17L33 11"
          stroke="#A7F3D0"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="33" cy="11" r="2" fill="#A7F3D0" />

        {/* AI Circuit branch 4: Left lateral node */}
        <path
          d="M16 31L13 26"
          stroke="#10B981"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="13" cy="26" r="1.8" fill="#34D399" />

        {/* Root data intake node */}
        <circle cx="10" cy="38" r="2.5" fill="#10B981" />
      </svg>

      {showText && (
        <span className="font-display font-bold text-xl tracking-tight text-white flex items-center">
          Eco<span className="text-emerald-400">Nexi</span>
        </span>
      )}
    </div>
  );
};
